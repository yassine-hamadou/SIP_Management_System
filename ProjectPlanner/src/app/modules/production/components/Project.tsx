import { Button, Input, Modal, Space, Table, message } from 'antd'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { KTCardBody, KTSVG } from '../../../../_metronic/helpers'
import { deleteItem, fetchDocument, postItem, updateItem } from '../../../services/ApiCalls'

const Project = () => {
  const [gridData, setGridData] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { register, reset, handleSubmit } = useForm()
  const param: any = useParams();
  const navigate = useNavigate();
  const [tempData, setTempData] = useState<any>()
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const queryClient = useQueryClient()

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    reset()
    setIsModalOpen(false)
    setIsUpdateModalOpen(false)
    setTempData(null)
  }

  const handleChange = (event: any) => {
    event.preventDefault()
    setTempData({ ...tempData, [event.target.name]: event.target.value });
  }

  const { mutate: deleteData, isLoading: deleteLoading } = useMutation(deleteItem, {
    onSuccess: (data) => {
      queryClient.setQueryData(['users', tempData], data);
      loadData()
    },
    onError: (error) => {
      console.log('delete error: ', error)
    }
  })

  const handleDelete = (element: any) => {
    const item = {
      url: 'Users',
      data: element
    }
    deleteData(item)
  }

  const columns: any = [
   

    {
      title: 'Code',
      dataIndex: 'code',
      sorter: (a: any, b: any) => {
        if (a.code > b.code) {
          return 1
        }
        if (b.code > a.code) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a: any, b: any) => {
        if (a.name > b.name) {
          return 1
        }
        if (b.name > a.name) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Project Type',
      dataIndex: 'projectTypeId',
      sorter: (a: any, b: any) => {
        if (a.projectTypeId > b.projectTypeId) {
          return 1
        }
        if (b.projectTypeId > a.projectTypeId) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Client',
      dataIndex: 'clientId',
      sorter: (a: any, b: any) => {
        if (a.clientId > b.clientId) {
          return 1
        }
        if (b.clientId > a.clientId) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Note',
      dataIndex: 'note',
      sorter: (a: any, b: any) => {
        if (a.note > b.note) {
          return 1
        }
        if (b.note > a.note) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      sorter: (a: any, b: any) => {
        if (a.startDate > b.startDate) {
          return 1
        }
        if (b.startDate > a.startDate) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      sorter: (a: any, b: any) => {
        if (a.endDate > b.endDate) {
          return 1
        }
        if (b.endDate > a.endDate) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Currency',
      dataIndex: 'currencyId',
      sorter: (a: any, b: any) => {
        if (a.currencyId > b.currencyId) {
          return 1
        }
        if (b.currencyId > a.currencyId) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Budget',
      dataIndex: 'budget',
      sorter: (a: any, b: any) => {
        if (a.budget > b.budget) {
          return 1
        }
        if (b.budget > a.budget) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Contract Sum',
      dataIndex: 'contractSum',
      sorter: (a: any, b: any) => {
        if (a.contractSum > b.contractSum) {
          return 1
        }
        if (b.contractSum > a.contractSum) {
          return -1
        }
        return 0
      },
    },

    {
      title: 'Action',
      fixed: 'right',
      width: 100,
      render: (_: any, record: any) => (
        <Space size='middle'>
          <Link to={`/user-applications/${record.id}`}>
            <span className='btn btn-light-info btn-sm'>Applications</span>
          </Link>
          <Link to={`/user-roles/${record.id}`}>
            <span className='btn btn-light-info btn-sm'>Roles</span>
          </Link>
          <a onClick={() => showUpdateModal(record)} className='btn btn-light-warning btn-sm'>
            Update
          </a>
          <a onClick={() => handleDelete(record)} className='btn btn-light-danger btn-sm'>
            Delete
          </a>
        </Space>
      ),

    },
  ]

  const { data: CostCategories } = useQuery('costCategories', ()=> fetchDocument('CostCategories'), { cacheTime: 5000 })
  const { data: ProjectTypes } = useQuery('projectTypes', ()=> fetchDocument('ProjectTypes'), { cacheTime: 5000 })
  const { data: Currencies } = useQuery('currencies', ()=> fetchDocument('Currencies'), { cacheTime: 5000 })
  const { data: Clients } = useQuery('clients', ()=> fetchDocument('Clients'), { cacheTime: 5000 })
  
  const loadData = async () => {
    setLoading(true)
    try {
      const response = await fetchDocument('Users')
      setGridData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    loadData()
  }, [])

  const dataByID = gridData.filter((user: any) => {
    return user.id !== 42
  })

  const handleInputChange = (e: any) => {
    setSearchText(e.target.value)
    if (e.target.value === '') {
      loadData()
    }
  }

  const globalSearch = () => {
    // @ts-ignore
    filteredData = dataWithIndex.filter((value) => {
      return (
        value.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        value.surname.toLowerCase().includes(searchText.toLowerCase()) ||
        value.gender.toLowerCase().includes(searchText.toLowerCase()) ||
        value.employeeId.toLowerCase().includes(searchText.toLowerCase())
      )
    })
    setGridData(filteredData)
  }


  const { isLoading: updateLoading, mutate: updateData } = useMutation(updateItem, {
    onSuccess: (data) => {
      queryClient.setQueryData(['users', tempData], data);
      reset()
      setTempData({})
      loadData()
      setIsUpdateModalOpen(false)
      setIsModalOpen(false)
    },
    onError: (error) => {
      console.log('update error: ', error)
    }
  })

  const handleUpdate = (e: any) => {
    e.preventDefault()
    // object item to be passed down to updateItem function 
    if (tempData.firstName.length >= 0) {
      const item = {
        url: 'Users',
        data: tempData
      }
      updateData(item)
      console.log('update: ', item.data)
    } else {
      setLoading(false)
      message.error('First Name must be more than 5 characters')
    }
  }

  const showUpdateModal = (values: any) => {
    showModal()
    setIsUpdateModalOpen(true)
    setTempData(values);
  }


  const OnSubmit = handleSubmit(async (values) => {
    setLoading(true)
    const endpoint = 'ProjectTypes'
    // object item to be passed down to postItem function
      const item = {
        data: {
          firstName: values.firstName,
          username: values.username,
          password: values.password,
          surname: values.surname,
          email: values.email,
          // gender: values.gender,
        },
        url: endpoint
      }
      console.log(item.data)
      postData(item)
  })

  const { mutate: postData, isLoading: postLoading } = useMutation(postItem, {
    onSuccess: (data) => {
      queryClient.setQueryData(['projectTypes', tempData], data);
      reset()
      setTempData({})
      loadData()
      setIsModalOpen(false)
    },
    onError: (error) => {
      console.log('post error: ', error)
    }
  })

  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
      }}
    >
      <KTCardBody className='py-4 '>
        <div className='table-responsive'>
          <div className='d-flex justify-content-between'>
            <Space style={{ marginBottom: 16 }}>
              <Input
                placeholder='Enter Search Text'
                onChange={handleInputChange}
                type='text'
                allowClear
                value={searchText}
              />
              <Button type='primary' onClick={globalSearch}>
                Search
              </Button>
            </Space>
            <Space style={{ marginBottom: 16 }}>
              <button type='button' className='btn btn-primary me-3' onClick={showModal}>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                Add
              </button>
            </Space>
          </div>
          <Table columns={columns}  />
          <Modal
            title={isUpdateModalOpen ? 'Update Project' : 'Add Project'}
            open={isModalOpen}
            width={850}
            onCancel={handleCancel}
            closable={true}
            footer={[
              <Button key='back' onClick={handleCancel}>
                Cancel
              </Button>,
              <Button
                key='submit'
                type='primary'
                htmlType='submit'
                loading={submitLoading}
                onClick={isUpdateModalOpen ? handleUpdate : OnSubmit}
              >
                Submit
              </Button>,
            ]}
          >
            <form
              onSubmit={isUpdateModalOpen ? handleUpdate : OnSubmit}
            >
              <hr></hr>
              <div style={{ padding: "20px 20px 20px 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label className="form-label">Code</label>
                  <input type="text" {...register("code")}
                    defaultValue={isUpdateModalOpen === true ? tempData.code : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />
                </div>
                
                <div className='col-6 mb-7'>
                  <label className="form-label">Name</label>
                  <input type="text" {...register("name")}
                    defaultValue={isUpdateModalOpen === true ? tempData.name : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label className="form-label">Project Type</label>
                  <select 
                    {...register("projectTypeId")} 
                    value={isUpdateModalOpen === true ? tempData?.projectTypeId?.toString() : null}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option>Select ProjectType</option> : null}
                    {ProjectTypes?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label className="form-label">Client</label>
                  <select 
                    {...register("cleintId")} 
                    value={isUpdateModalOpen === true ? tempData?.cleintId?.toString() : null}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option>Select Client</option> : null}
                    {Clients?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className='col-6 mb-7'>
                  <label className="form-label">Currency</label>
                  <select 
                    {...register("currencyId")} 
                    value={isUpdateModalOpen === true ? tempData?.currencyId?.toString() : null}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option>Select Currency</option> : null}
                    {Currencies?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>

                <div className='col-6 mb-7'>
                  <label className="form-label">Start Date</label>
                  <input type="text" {...register("startDate")}
                    defaultValue={isUpdateModalOpen === true ? tempData.startDate : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />
                </div>

                <div className='col-6 mb-7'>
                  <label className="form-label">End Date</label>
                  <input type="text" {...register("endDate")}
                    defaultValue={isUpdateModalOpen === true ? tempData.endDate : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />
                </div>

                <div className='col-6 mb-7'>
                  <label className="form-label">Note</label>
                  <textarea {...register("note")}
                    defaultValue={isUpdateModalOpen === true ? tempData.note : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label className="form-label">Contract Sum</label>
                  <input type="text" {...register("contractSum")}
                    defaultValue={isUpdateModalOpen === true ? tempData.contractSum : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />
                </div>
              </div>
            </form>
          </Modal>
        </div>
      </KTCardBody>
    </div>
  )
}

export { Project }

