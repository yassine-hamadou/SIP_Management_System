import { Button, Input, Modal, Space, Table, message } from 'antd'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { KTCardBody, KTSVG } from '../../../../../_metronic/helpers'
import { deleteItem, fetchDocument, postItem, updateItem } from '../../../../services/ApiCalls'

const PurchaseOrder = () => {
  const [gridData, setGridData] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { register, reset, handleSubmit } = useForm()
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
      url: 'PurchaseOrders',
      data: element
    }
    deleteData(item)
  }

  const columns: any = [
    {
      title: 'PO Number',
      dataIndex: 'ponumber',
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
      title: 'Project',
      key: 'projectId',
      render: (row:any)=>{
        return getProjectName(row.projectId)
      },
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
      key: 'activityId',
      render: (row:any)=>{
        return getActivityname(row.activityId)
      },
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
      key: 'costDetailId',
      render: (row:any)=>{
        return getCostDetailName(row.costDetailId)
      },
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
      key: 'supplierId',
      render: (row:any)=>{
        return getSupplierName(row.supplierId)
      },
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
    // {
    //   title: 'Amount',
    //   dataIndex: 'amount',
    //   align:"right",
    //   sorter: (a: any, b: any) => {
    //     if (a.amount > b.amount) {
    //       return 1
    //     }
    //     if (b.amount > a.amount) {
    //       return -1
    //     }
    //     return 0
    //   },
    // },

    {
      title: 'Action',
      fixed: 'right',
      width: 100,
      render: (_: any, record: any) => (
        <Space size='middle'>
           <Link to={`/popayschedules/${record.id}`}>
                <span className='btn btn-light-info btn-sm'>PaySchedules</span>
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

  const { data: Activities } = useQuery('activities', ()=> fetchDocument('Activities'), { cacheTime: 5000 })
  const { data: Projects } = useQuery('projects', ()=> fetchDocument('Projects'), { cacheTime: 5000 })
  const { data: Suppliers } = useQuery('suppliers', ()=> fetchDocument('Suppliers'), { cacheTime: 5000 })
  const { data: CostDetails } = useQuery('costDetails', ()=> fetchDocument('CostDetails'), { cacheTime: 5000 })
  const { data: PurchaseOrders } = useQuery('PurchaseOrders', ()=> fetchDocument('PurchaseOrders'), { cacheTime: 5000 })


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

  const getCostDetailName = (Id: any) => {
    let costDetailName  = null
    CostDetails?.data.map((item: any) => {
      if (item.id === Id) {
        costDetailName =item.name
      }
    })
    return costDetailName 
  }
  const getSupplierName = (Id: any) => {
    let supplierName = null
    Suppliers?.data.map((item: any) => {
      if (item.id === Id) {
        supplierName=item.name
      }
    })
    return supplierName
  }
  const getProjectName = (Id: any) => {
    let projectName = null
    Projects?.data.map((item: any) => {
      if (item.id === Id) {
        projectName=item.name
      }
    })
    return projectName
  }
  const getActivityname = (Id: any) => {
    let activityName = null
    Activities?.data.map((item: any) => {
      if (item.id === Id) {
        activityName=item.name
      }
    })
    return activityName
  }
  useEffect(() => {

    loadData()
  }, [])

  const dataWithIndex = gridData.map((item: any) => ({
    ...item,
    date: item.date.substring(0,10),
    amount: item.amount+ ".00",
}))

  const handleInputChange = (e: any) => {
    setSearchText(e.target.value)
    if (e.target.value === '') {
      loadData()
    }
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
    
      const item = {
        url: 'PurchaseOrders',
        data: tempData
      }
      updateData(item)
      console.log('update: ', item.data)
    
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
          projectId: values.projectId,
          activityId: values.activityId,
          costDetailId: values.costDetailId,
          date: values.date,
          supplierId: values.supplierId,
          amount: parseFloat(values.amount).toFixed(2),
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
          <Table columns={columns} dataSource={dataWithIndex} loading={loading} />
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
                  <label className="form-label">Project</label>
                  <select 
                    {...register("projectId")} 
                    value={isUpdateModalOpen === true ? tempData?.currencyId?.toString() : null}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option>Select Project</option> : null}
                    {Projects?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>

                <div className='col-6 mb-7'>
                  <label className="form-label">Activity</label>
                  <select 
                    {...register("activityId")} 
                    value={isUpdateModalOpen === true ? tempData?.currencyId?.toString() : null}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option>Select Activity</option> : null}
                    {Activities?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>

                <div className='col-6 mb-7'>
                  <label className="form-label">Cost Detail</label>
                  <select 
                    {...register("costDetailId")} 
                    value={isUpdateModalOpen === true ? tempData?.currencyId?.toString() : null}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option>Select Cost Detail</option> : null}
                    {CostDetails?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>

                <div className='col-6 mb-7'>
                  <label className="form-label">Date</label>
                  <input type="date" {...register("date")}
                    defaultValue={isUpdateModalOpen === true ? tempData.date?.substring(0,10) : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />
                </div>
                
                <div className='col-6 mb-7'>
                  <label className="form-label">Supplier</label>
                  <select 
                    {...register("supplierId")} 
                    value={isUpdateModalOpen === true ? tempData?.currencyId?.toString() : null}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option>Select Supplier</option> : null}
                    {Suppliers?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label className="form-label">Amount</label>
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

