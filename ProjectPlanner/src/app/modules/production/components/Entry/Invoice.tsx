import { Button, Input, Modal, Space, Table, message } from 'antd'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { KTCardBody, KTSVG } from '../../../../../_metronic/helpers'
import { deleteItem, fetchDocument, postItem, updateItem } from '../../../../services/ApiCalls'
import { useAuth } from '../../../auth'

const Invoice = () => {
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

function GenerateInvoiceNumber() {
  let result = '';
  const characters = 'IViv0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < 10) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return setInvoiceNum(result);
}
  const showModal = () => {
    setIsModalOpen(true)
    GenerateInvoiceNumber()
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
      queryClient.setQueryData(['invoices', tempData], data);
      loadData()
    },
    onError: (error) => {
      console.log('delete error: ', error)
    }
  })

  const handleDelete = (element: any) => {
    const item = {
      url: 'Invoices',
      data: element
    }
    deleteData(item)
  }

  const columns: any = [
    {
        title: 'Project',
        key: 'projectId',
        render: (row: any) => {
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
      title: 'Supplier',
      key: 'supplierId',
      render: (row: any) => {
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
    
    {
      title: 'PO Number',
      key: 'purchaseOrderId',
      render: (row: any) => {
        return getPoNumber(row.purchaseOrderId)
      },
      sorter: (a: any, b: any) => {
        if (a.purchaseOrderId > b.purchaseOrderId) {
          return 1
        }
        if (b.purchaseOrderId > a.purchaseOrderId) {
          return -1
        }
        return 0
      },
    },

    {
      title: 'Invoice Number',
      dataIndex: 'invoiceNumber',
      sorter: (a: any, b: any) => {
        if (a.invoiceNumber > b.invoiceNumber) {
          return 1
        }
        if (b.invoiceNumber > a.invoiceNumber) {
          return -1
        }
        return 0
      },
    },

    {
      title: 'Amount',
      dataIndex: 'amount',
      align:"right",
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
      title: 'Due Date',
      dataIndex: 'dueDate',
      sorter: (a: any, b: any) => {
        if (a.dueDate > b.dueDate) {
          return 1
        }
        if (b.dueDate > a.dueDate) {
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

  const { data: Activities } = useQuery('activities', ()=> fetchDocument('Activities'), { cacheTime: 5000 })
  const { data: Projects } = useQuery('projects', ()=> fetchDocument('Projects'), { cacheTime: 5000 })
  const { data: Suppliers } = useQuery('suppliers', ()=> fetchDocument('Suppliers'), { cacheTime: 5000 })
  const { data: PurchaseOrders } = useQuery('purchaseOrders', ()=> fetchDocument('PurchaseOrders'), { cacheTime: 5000 })
  
  const loadData = async () => {
    setLoading(true)
    try {
      const response = await fetchDocument('Invoices')
      setGridData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const getSupplierName = (gradeId: any) => {
    let SupplierName = null
    Suppliers?.data.map((item: any) => {
      if (item.id === gradeId) {
        SupplierName=item.name
      }
    })
    return SupplierName
  }

  const getProjectName = (gradeId: any) => {
    let ProjectName = null
    Projects?.data.map((item: any) => {
      if (item.id === gradeId) {
        ProjectName=item.name
      }
    })
    return ProjectName
  }

  const getPoNumber = (id: any) => {
    let PoNumber = null
    PurchaseOrders?.data.map((item: any) => {
      if (item.id === id) {
        PoNumber=item.ponumber
      }
    })
    return PoNumber
  }


  useEffect(() => {

    loadData()
  }, [])

  const handleInputChange = (e: any) => {
    setSearchText(e.target.value)
    if (e.target.value === '') {
      loadData()
    }
  }

  const dataByID = gridData.map((item: any) => ({
    ...item,
    dueDate: item.dueDate.substring(0,10),
    amount: item.amount +".00",
  }))


  const { isLoading: updateLoading, mutate: updateData } = useMutation(updateItem, {
    onSuccess: (data) => {
      queryClient.setQueryData(['invoices', tempData], data);
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
        url: 'Invoices',
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
    const endpoint = 'Invoices'
    // object item to be passed down to postItem function
      const item = {
        data: {
          projectId: values.projectId,
          supplierId: values.supplierId,
          invoiceNumber: values.invoiceNumber,
          purchaseOrderId: values.purchaseOrderId,
          amount: parseFloat(values.amount).toFixed(2),
          dueDate: values.dueDate,
        },
        url: endpoint
      }
      console.log(item.data)
      postData(item)
  })

  const { mutate: postData, isLoading: postLoading } = useMutation(postItem, {
    onSuccess: (data) => {
      queryClient.setQueryData(['invoices', tempData], data);
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
              <Button type='primary' >
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
            title={isUpdateModalOpen ? 'Update Invoice' : 'Add Invoice'}
            open={isModalOpen}
            width={800}
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
                    value={isUpdateModalOpen === true ? tempData?.projectId?.toString() : null}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option>Select Project</option> : null}
                    {Projects?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Supplier</label>
                  <select 
                    {...register("supplierId")} 
                    value={isUpdateModalOpen === true ? tempData?.supplierId?.toString() : null}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option>Select Supplier</option> : null}
                    {Suppliers?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">PO Number</label>
                  <select 
                    {...register("purchaseOrderId")} 
                    value={isUpdateModalOpen === true ? tempData?.purchaseOrderId?.toString() : null}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option>Select PO Number</option> : null}
                    {PurchaseOrders?.data.map((item: any) => (
                        <option value={item.id}>{item.ponumber}</option>
                    ))}
                  </select>
                </div>
                
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Invoice Number</label>
                  <input type="text" 
                  {...register("invoiceNumber")}
                  value={invoiceNum}
                    // defaultValue={isUpdateModalOpen === true ? tempData.invoiceNumber : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Amount</label>
                  <input type="number" 
                    {...register("amount")}
                    defaultValue={isUpdateModalOpen === true ? tempData.amount : ''}
                    min={0}
                    onChange={handleChange}
                    className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Due Date</label>
                  <input type="date" 
                    {...register("dueDate")}
                    defaultValue={isUpdateModalOpen === true ? tempData.dueDate : ''}
                    min={0}
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

export { Invoice }

