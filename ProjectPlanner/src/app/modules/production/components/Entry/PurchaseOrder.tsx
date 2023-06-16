import { Button, Input, Modal, Space, Table, message } from 'antd'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { KTCardBody, KTSVG } from '../../../../../_metronic/helpers'
import { deleteItem, fetchDocument, postItem, updateItem } from '../../../../services/ApiCalls'
import { useAuth } from '../../../auth'

const PurchaseOrder = () => {
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
      queryClient.setQueryData(['purchaseOrders', tempData], data);
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
      title: 'Project',
      dataIndex: 'projectId',
      sorter: (a: any, b: any) => {
        if (a.projectId > b.projectId) {
          return 1
        }
        if (b.projectId > a.projectId) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Activity',
      dataIndex: 'activityId',
      sorter: (a: any, b: any) => {
        if (a.activityId > b.activityId) {
          return 1
        }
        if (b.activityId > a.activityId) {
          return -1
        }
        return 0
      },
    },

    {
      title: 'Cost Detail',
      dataIndex: 'costDetailId',
      sorter: (a: any, b: any) => {
        if (a.costDetailId > b.costDetailId) {
          return 1
        }
        if (b.costDetailId > a.costDetailId) {
          return -1
        }
        return 0
      },
    },

    {
      title: 'Date',
      dataIndex: 'date',
      sorter: (a: any, b: any) => {
        if (a.date > b.date) {
          return 1
        }
        if (b.date > a.date) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Supplier',
      dataIndex: 'supplierId',
      sorter: (a: any, b: any) => {
        if (a.supplierId > b.supplierId) {
          return 1
        }
        if (b.supplierId > a.supplierId) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      sorter: (a: any, b: any) => {
        if (a.amount > b.amount) {
          return 1
        }
        if (b.amount > a.amount) {
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
  
  const loadData = async () => {
    setLoading(true)
    try {
      const response = await fetchDocument('PurchaseOrders')
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
      queryClient.setQueryData(['purchaseOrders', tempData], data);
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
    const endpoint = 'PurchaseOrders'
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
      queryClient.setQueryData(['purchaseOrders', tempData], data);
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
          <Table columns={columns} />
          <Modal
            title={isUpdateModalOpen ? 'Update Purchase Order' : 'Add Purchase Order'}
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
                  <label htmlFor="exampleFormControlInput1" className="form-label">Project</label>
                  <select 
                    {...register("projectId")} 
                    value={isUpdateModalOpen === true ? tempData?.currencyId?.toString() : null}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option>Select Project</option> : null}
                    {/* {Currencies?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                    ))} */}
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Activity</label>
                  <select 
                    {...register("activityId")} 
                    value={isUpdateModalOpen === true ? tempData?.currencyId?.toString() : null}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option>Select Activity</option> : null}
                    {/* {Currencies?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                    ))} */}
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Cost Detail</label>
                  <select 
                    {...register("costDetailId")} 
                    value={isUpdateModalOpen === true ? tempData?.currencyId?.toString() : null}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option>Select Cost Detail</option> : null}
                    {/* {Currencies?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                    ))} */}
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Date</label>
                  <input type="date" {...register("date")}
                    defaultValue={isUpdateModalOpen === true ? tempData.date : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />
                </div>
                
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Supplier</label>
                  <select 
                    {...register("supplierId")} 
                    value={isUpdateModalOpen === true ? tempData?.currencyId?.toString() : null}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option>Select Supplier</option> : null}
                    {/* {Currencies?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                    ))} */}
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Amount</label>
                  <input type="number"
                    min={0}
                    {...register("amount")}
                    defaultValue={isUpdateModalOpen === true ? tempData.amount : ''}
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

export { PurchaseOrder }

