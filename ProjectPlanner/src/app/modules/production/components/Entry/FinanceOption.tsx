import { Button, Input, Modal, Space, Table, message } from 'antd'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { KTCardBody, KTSVG } from '../../../../../_metronic/helpers'
import { deleteItem, fetchDocument, postItem, updateItem } from '../../../../services/ApiCalls'

const FinanceOption = () => {
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
const [selectedType, setSelectedType] = useState("")

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
      queryClient.setQueryData(['financeOptions', tempData], data);
      loadData()
    },
    onError: (error) => {
      console.log('delete error: ', error)
    }
  })

  const handleDelete = (element: any) => {
    const item = {
      url: 'FinanceOptions',
      data: element
    }
    deleteData(item)
  }

  const columns: any = [
    {
        title: 'Type',
        dataIndex: 'optionType',
        sorter: (a: any, b: any) => {
          if (a.optionType > b.optionType) {
            return 1
          }
          if (b.optionType > a.optionType) {
            return -1
          }
          return 0
        },
    },
    {
      title: 'Description',
      dataIndex: 'description',
      sorter: (a: any, b: any) => {
        if (a.description > b.description) {
          return 1
        }
        if (b.description > a.description) {
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
            <Link to={`/finance-option-schedules/${record.id}`}>
                <span className='btn btn-light-info btn-sm'>FinanceSchedules</span>
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

  const { data: CostDetails } = useQuery('costDetails', ()=> fetchDocument('CostDetails'), { cacheTime: 5000 })
  const { data: ProjectActivities } = useQuery('projectActivities', ()=> fetchDocument('ProjectActivities'), { cacheTime: 5000 })
  const { data: Projects } = useQuery('projects', ()=> fetchDocument('Projects'), { cacheTime: 5000 })
  const { data: Clients } = useQuery('Clients', ()=> fetchDocument('Clients'), { cacheTime: 5000 })
  const { data: Banks } = useQuery('banks', ()=> fetchDocument('Banks'), { cacheTime: 5000 })
  
  const loadData = async () => {
    setLoading(true)
    try {
      const response = await fetchDocument('FinanceOptions')
      setGridData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  // const getActivityname = (gradeId: any) => {
  //   let activityName = null
  //   Banks?.data.map((item: any) => {
  //     if (item.id === gradeId) {
  //       activityName=item.name
  //     }
  //   })
  //   return activityName
  // }

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

  const dataWithIndex = gridData.map((item: any) => ({
    ...item,
    amount: item.amount+ ".00",
}))

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
      queryClient.setQueryData(['financeOptions', tempData], data);
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
        url: 'FinanceOptions',
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
    const endpoint = 'FinanceOptions'
    // object item to be passed down to postItem function
      const item = {
        data: {
          description: values.description,
          bankId: values.bankId,
          optionType: selectedType,
        },
        url: endpoint
      }
      console.log(item.data)
      postData(item)
  })

  const { mutate: postData, isLoading: postLoading } = useMutation(postItem, {
    onSuccess: (data) => {
      queryClient.setQueryData(['financeOptions', tempData], data);
      reset()
      setTempData({})
      loadData()
      setIsModalOpen(false)
    },
    onError: (error) => {
      console.log('post error: ', error)
    }
  })

  console.log('dsta',gridData);
  
  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
      }}
    >
      <KTCardBody className='py-4'>
        <div className='table-responsive'>
        <div>
            
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
          <Table columns={columns} dataSource={gridData} loading={loading} />
          <Modal
            title={isUpdateModalOpen ? 'Update Finance Option' : 'Add Finance Option'}
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
                  <label  className="form-label">Source</label>
                  <select 
                    {...register("bankId")} 
                    value={isUpdateModalOpen === true ? tempData?.bankId?.toString() : null}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option>Select Source</option> : null}
                      {Banks?.data.map((item: any) => (
                          <option value={item.id}>{item.name}</option>
                      ))}
                  </select>
                </div>
                <div className=' mb-7'>
                  <label  className="form-label">Type</label>
                  <select 
                    {...register("optionType")} 
                    value={isUpdateModalOpen === true ? tempData?.optionType?.toString() : null}
                    onChange={(e:any )=>setSelectedType(e.target.value)}
                    className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option>Select Type</option> : null}
                        <option value={'All'}>All</option>
                        <option value={'Client'}>Client</option>
                        <option value={'Project'}>Project</option>
                  </select>
                </div>
                {/* Client check */}
                { selectedType==="Client"?
                  
                  <div className=' mb-7'>
                    <label  className="form-label">Client</label>
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
                  </div>:""
                }
                
                {/* project check point */}
                { selectedType==="Project"?
                  <div className=' mb-7'>
                    <label  className="form-label">Project</label>
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
                  </div>:""
                }
                
                <div className=' mb-7'>
                  <label  className="form-label">Description</label>
                  <textarea {...register("description")}
                    defaultValue={isUpdateModalOpen === true ? tempData.description : ''}
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

export { FinanceOption }

