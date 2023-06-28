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
  const [invoiceNum, setInvoiceNum] = useState("")
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
    onSuccess: () => 
      queryClient.invalidateQueries('projects')
    ,
    onError: (error) => {
      console.log('delete error: ', error)
    }
  })

  const handleDelete = (element: any) => {
    const item = {
      url: 'Projects',
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
      key: 'projectTypeId',
      render: (row: any) => {
        return getProjectType(row.projectTypeId)
      },
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
      key: 'clientId',
      render: (row: any) => {
        return getClientName(row.clientId)
      },
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
      key: 'currencyId',
      render: (row: any) => {
        return getCurrencyName(row.currencyId)
      },
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
      key: 'id',
      align:"right",
      render:(row:any)=>{
        return calculateBudget(row.id)
      },
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
      key: 'id',
      align:"right",
      render:(row:any)=>{
        return calculateContractSum(row.id)
      },
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
      title: 'Status',
      dataIndex: 'status',
      sorter: (a: any, b: any) => {
        if (a.status > b.status) {
          return 1
        }
        if (b.status > a.status) {
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
          <Link to={`/project-activities/${record.id}`}>
            <span className='btn btn-light-info btn-sm'>Activities</span>
          </Link>
          <Link to={`/documents/${record.id}`}>
            <span className='btn btn-light-info btn-sm'>Docs</span>
          </Link>
          <Link to={`/project-schedules/${record.id}`}>
            <span className='btn btn-light-info btn-sm'>Payment Schedules</span>
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

  const { data: ProjectCategories } = useQuery('projectCategories', ()=> fetchDocument('ProjectCategories'), { cacheTime: 5000 })
  const { data: CostCategories } = useQuery('costCategories', ()=> fetchDocument('CostCategories'), { cacheTime: 5000 })
  const { data: ProjectTypes } = useQuery('projectTypes', ()=> fetchDocument('ProjectTypes'), { cacheTime: 5000 })
  const { data: Currencies } = useQuery('currencies', ()=> fetchDocument('Currencies'), { cacheTime: 5000 })
  const { data: Clients } = useQuery('clients', ()=> fetchDocument('Clients'), { cacheTime: 5000 })
  const { data: projects, isLoading } = useQuery('projects', ()=> fetchDocument('Projects'), { cacheTime: 15000 })
  const { data: ProjectSchedules } = useQuery('projectSchedules', ()=> fetchDocument('ProjectSchedules'), { cacheTime: 5000 })
  const { data: ProjectActivities } = useQuery('projectActivities', ()=> fetchDocument('ProjectActivities'), { cacheTime: 5000 })
  const { data: ProjectActivityCosts } = useQuery('projectActivityCosts', ()=> fetchDocument('ProjectActivityCosts'), { cacheTime: 5000 })
  

  const getProjectType = (gradeId: any) => {
    let ProjectType = null
    ProjectTypes?.data.map((item: any) => {
      if (item.id === gradeId) {
        ProjectType=item.name
      }
    })
    return ProjectType
  }
  const getClientName = (gradeId: any) => {
    let ClientName = null
    Clients?.data.map((item: any) => {
      if (item.id === gradeId) {
        ClientName=item.name
      }
    })
    return ClientName
  }
  const getCurrencyName = (gradeId: any) => {
    let CurrencyName = null
    Currencies?.data.map((item: any) => {
      if (item.id === gradeId) {
        CurrencyName=item.name
      }
    })
    return CurrencyName
  }

  const dataByID = projects?.data.map((item: any) => ({
    ...item,
    startDate: item.startDate.substring(0,10),
    endDate: item.endDate.substring(0,10),
  }))

  let projectScheduleData: any =[]
  projectScheduleData = ProjectSchedules?.data

  function calculateContractSum(categoryId:any) {
    let totalPrice:any = 0;
    if(projectScheduleData?.length!==null){
      for (const product of projectScheduleData) {
        if (product?.projectId === categoryId) {
          totalPrice += product?.amount;
        }
      }
      return totalPrice.toString() + ".00";
    }
    return totalPrice.toString() + ".00";
  }

  let  projectActivityData:any =[]
  projectActivityData = ProjectActivities?.data

  function calculateBudget(id:any) {
    let totalAmount:any = 0;
    console.log('projectActivityData:', projectActivityData);
    
    if(projectActivityData?.length!==null){
      for (const projectActivity  of projectActivityData) {
        if (projectActivity?.projectId === id) {
          for (const subProduct of projectActivity?.projectActivityCosts) {
            totalAmount += subProduct?.amount;
          }
        }
      }
      return totalAmount + ".00";
    }
    return totalAmount + ".00";
  }

  const handleInputChange = (e: any) => {
    setSearchText(e.target.value)
    if (e.target.value === '') {
      queryClient.invalidateQueries('projects')
    }
  }



  const { isLoading: updateLoading, mutate: updateData } = useMutation(updateItem, {
    onSuccess: () => {
      queryClient.invalidateQueries('projects')
      reset()
      setTempData({})
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
   
      const item = {
        url: 'Projects',
        data: tempData
      }
      updateData(item)
      console.log('update: ', item.data)
    
    //   setLoading(false)
    //   message.error('First Name must be more than 5 characters')
    // }
  }

  const showUpdateModal = (values: any) => {
    showModal()
    setIsUpdateModalOpen(true)
    setTempData(values);
  }


  const OnSubmit = handleSubmit(async (values) => {
    setLoading(true)
    const endpoint = 'Projects'
    // object item to be passed down to postItem function
      const item = {
        data: {
          code: values.code,
          name: values.name,
          projectTypeId: values.projectTypeId,
          projectCategoryId: values.projectCategoryId,
          clientId: values.clientId,
          currencyId: values.currencyId,
          contractSum: values.contractSum,
          startDate: values.startDate,
          endDate: values.endDate,
          note: values.note,
          status: values.status,
        },
        url: endpoint
      }
      console.log(item.data)
      postData(item)
  })

  const { mutate: postData, isLoading: postLoading } = useMutation(postItem, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('projectTypes');
      reset()
      setTempData({})
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
              <Button type='primary'>
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
          <Table columns={columns} dataSource={dataByID} loading={loading} />
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
                  <label className="form-label">Project Category</label>
                  <select 
                    {...register("projectCategoryId")} 
                    value={isUpdateModalOpen === true ? tempData?.projectCategoryId?.toString() : null}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option>Select Project Category</option> : null}
                    {ProjectCategories?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
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
                  <label className="form-label">Start Date</label>
                  <input type="date" {...register("startDate")}
                    defaultValue={isUpdateModalOpen === true ? tempData.startDate : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />
                </div>

                <div className='col-6 mb-7'>
                  <label className="form-label">End Date</label>
                  <input type="date" {...register("endDate")}
                    defaultValue={isUpdateModalOpen === true ? tempData.endDate : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />
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
                  <label className="form-label">Contract Sum</label>
                  <input type="number" {...register("contractSum")}
                    defaultValue={isUpdateModalOpen === true ? tempData.contractSum : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label className="form-label">Client</label>
                  <select 
                    {...register("clientId")} 
                    value={isUpdateModalOpen === true ? tempData?.clientId?.toString() : null}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option>Select Client</option> : null}
                    {Clients?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label className="form-label">Note</label>
                  <textarea {...register("note")}
                    defaultValue={isUpdateModalOpen === true ? tempData.note : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label className="form-label">Status</label>
                  <select 
                    {...register("status")} 
                    value={isUpdateModalOpen === true ? tempData?.status?.toString() : null}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option>Select status</option> : null}
                      <option value={'active'}>Active</option>
                      <option value={'suspended'}>Suspended</option>
                      <option value={'terminate'}>Terminate</option>
                  </select>
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

