import { Button, Input, Modal, Space, Table, message } from 'antd'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { KTCardBody, KTSVG } from '../../../../_metronic/helpers'
import { deleteItem, fetchDocument, postItem, updateItem } from '../../../services/ApiCalls'

const ProjectSchedule = () => {
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
  const [detailName, setDetailName] = useState('')
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
    onSuccess: (data) => {
      queryClient.invalidateQueries('projectSchedules');
    },
    onError: (error) => {
      console.log('delete error: ', error)
    }
  })

  const handleDelete = (element: any) => {
    const item = {
      url: 'ProjectSchedules',
      data: element
    }
    deleteData(item)
  }

  const columns: any = [
   
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
  
  const loadData = async () => {
    setLoading(true)
    try {
      const response = await fetchDocument('ProjectSchedules')
      setGridData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const getActivityname = (gradeId: any) => {
    let activityName = null
    Activities?.data.map((item: any) => {
      if (item.id === gradeId) {
        activityName=item.name
      }
    })
    return activityName
  }
  
  const getItemName = async (param: any) => {

    let newName = null

    const itemTest = await Projects?.data.find((item: any) =>
      item.id.toString() === param
    )
    newName = await itemTest
    return newName
  }

 
  useEffect(() => {
    (async () => {
        let res = await getItemName(param.id)
        setDetailName(res?.name)
    })();
    loadData()
  }, [])

  const numberFormat = (value:any) =>
  new Intl.NumberFormat('en-Eg', {
    style: 'currency',
    currency: 'CEDIS'
  }).format(value);

  const dataByID = gridData.filter((user: any) => {
    return user.projectId === parseInt(param.id)
  })


  const dataWithIndex = dataByID?.map((item: any) => ({
    ...item,
    amount: item.amount+ ".00",
    date: item.date.substring(0,10),
}))

  const handleInputChange = (e: any) => {
    setSearchText(e.target.value)
    if (e.target.value === '') {
      loadData()
    }
  }

  const { isLoading: updateLoading, mutate: updateData } = useMutation(updateItem, {
    onSuccess: (data) => {
      queryClient.setQueryData(['projectSchedules', tempData], data);
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
        url: 'ProjectSchedules',
        data: tempData
      }
      updateData(item)
      console.log('update: ', item.data)
    // } else {
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
    const endpoint = 'ProjectSchedules'
    // object item to be passed down to postItem function
      const item = {
        data: {
          projectId:parseInt(param.id),
          date:values.date,
          invoiceNumber:values.invoiceNumber,
          amount:parseFloat(values.amount).toFixed(2)
        },
        url: endpoint
      }
      console.log(item.data)
      postData(item)
  })

  const { mutate: postData, isLoading: postLoading } = useMutation(postItem, {
    onSuccess: (data) => {
      queryClient.setQueryData(['projectSchedules', tempData], data);
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
        <div>
            <span className="fw-bold text-gray-800 d-block fs-2 mb-3 ">{detailName}</span>
            
            <br></br>
            <button className='mb-3 btn btn-outline btn-outline-dashed btn-outline-primary btn-active-light-primary' onClick={() => navigate(-1)}>Go Back</button>
        </div>
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
            title={isUpdateModalOpen ? 'Update Payment Schedule' : 'Add Payment Schedule'}
            open={isModalOpen}
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
                <div className=' mb-7'>
                  <label  className="form-label">Invoice Number</label>
                  <input type="text" {...register("invoiceNumber")}
                    defaultValue={isUpdateModalOpen === true ? tempData.invoiceNumber : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />
                </div>
                <div className=' mb-7'>
                  <label  className="form-label">Date</label>
                  <input type="date" {...register("date")}
                    defaultValue={isUpdateModalOpen === true ? tempData.date : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />
                </div>
               
                <div className=' mb-7'>
                  <label  className="form-label">Amount</label>
                  <input type="number" {...register("amount")}
                    defaultValue={isUpdateModalOpen === true ? tempData.amount : ''}
                    onChange={handleChange}
                    min={0}
                    step={0.01}
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

export { ProjectSchedule }

