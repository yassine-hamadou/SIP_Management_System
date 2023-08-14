import { Button, Input, Modal, Space, Table, message } from 'antd'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { KTCardBody, KTSVG } from '../../../../../_metronic/helpers'
import { Api_Endpoint, deleteItem, fetchDocument, fetchUsers, postItem, updateItem } from '../../../../services/ApiCalls'
import { AUTH_LOCAL_STORAGE_KEY, useAuth } from '../../../auth'
import axios from 'axios'

const User = () => {
  const [gridData, setGridData] = useState<any>([])
  const [beforeSearch, setBeforeSearch] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { register, reset, handleSubmit } = useForm()
  const param: any = useParams();
  const navigate = useNavigate();
  const [test, setUserInfo] = useState<any>(null)
  const { saveAuth, setCurrentUser } = useAuth()
  const [tempData, setTempData] = useState<any>()
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const queryClient = useQueryClient()

  const genderList = ['MALE', 'FEMALE']
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
      // queryClient.setQueryData(['users', tempData], data);
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
      title: 'Username',
      dataIndex: 'username',
      sorter: (a: any, b: any) => {
        if (a.username > b.username) {
          return 1
        }
        if (b.username > a.username) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      sorter: (a: any, b: any) => {
        if (a.firstName > b.firstName) {
          return 1
        }
        if (b.firstName > a.firstName) {
          return -1
        }
        return 0
      },
    },

    {
      title: 'Surname',
      dataIndex: 'surname',
      sorter: (a: any, b: any) => {
        if (a.surname > b.surname) {
          return 1
        }
        if (b.surname > a.surname) {
          return -1
        }
        return 0
      },
    },

    {
      title: 'Email',
      dataIndex: 'email',
      sorter: (a: any, b: any) => {
        if (a.email > b.email) {
          return 1
        }
        if (b.email > a.email) {
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
          <Link to={`/user-companies/${record.id}`}>
            <span className='btn btn-light-info btn-sm'>Companies</span>
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

  const { data: allUsers } = useQuery('users', fetchUsers, { cacheTime: 5000 })

  const loadData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/Users`)
      setGridData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {

    loadData()
    
      setGridData(allUsers?.data)
      setBeforeSearch(allUsers?.data)
    
  }, [])

  const dataByID = gridData?.filter((user: any) => {
    return user.id !== 42
  })

  const globalSearch = (searchValue: string) => {
    const searchResult = allUsers?.data?.filter((item: any) => {
      return (
        Object.values(item).join('').toLowerCase().includes(searchValue?.toLowerCase())
      )
    })//search the grid data
    setGridData(searchResult)
  }

  const handleInputChange = (e: any) => {
    globalSearch(e.target.value)
    if (e.target.value === '') {
      setGridData(beforeSearch)
    }
  }


  const { isLoading: updateLoading, mutate: updateData } = useMutation(updateItem, {
    onSuccess: (data) => {
      // queryClient.setQueryData(['users', tempData], data);
      reset()
      setTempData({})
      loadData()
      queryClient.invalidateQueries('users')
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
    if (tempData.firstName.length >= 3) {
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
    const endpoint = 'Users'
    // object item to be passed down to postItem function
      const item = {
        data: {
          firstName: values.firstName,
          username: values.username,
          password: values.password,
          surname: values.surname,
          email: values.email,
          gender: values.gender,
        },
        url: endpoint
      }
      console.log(item.data)
      postData(item)
  })

  const { mutate: postData, isLoading: postLoading } = useMutation(postItem, {
    onSuccess: (data) => {
      // queryClient.setQueryData(['users', tempData], data);
      reset()
      setTempData({})
      queryClient.invalidateQueries('users')
      // loadData()
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
              />
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
            title={isUpdateModalOpen ? 'Update User' : 'Add User'}
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
                  <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                  <input type="text" {...register("firstName")}
                    defaultValue={isUpdateModalOpen === true ? tempData.firstName : ''}
                    onChange={handleChange}
                    minLength={5}
                    className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Surname</label>
                  <input type="text" {...register("surname")}
                    defaultValue={isUpdateModalOpen === true ? tempData.surname : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                  <input type="email" {...register("email")}
                    defaultValue={isUpdateModalOpen === true ? tempData.email : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Gender</label>
                  <select {...register("gender")} value={isUpdateModalOpen === true ? tempData?.gender : null}
                    onChange={handleChange}
                    onSelect={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option>Select gender</option> : null}
                    {
                      genderList.map((item: any) => (
                        <option value={item}>{item}</option>
                      ))
                    }

                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
                  <input type="text" {...register("username")}
                    defaultValue={isUpdateModalOpen === true ? tempData.username : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />
                </div>

                {
                  isUpdateModalOpen === true ? null :
                  <div className='col-6 mb-7'>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="text" {...register("password")}
                      placeholder={'enter new password' }
                      className="form-control form-control-solid" />
                  </div>
                }
                

              </div>
            </form>
          </Modal>
        </div>
      </KTCardBody>
    </div>
  )
}

export { User }

