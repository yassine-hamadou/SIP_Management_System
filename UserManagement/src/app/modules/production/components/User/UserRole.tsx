import { Button, Modal, Space, Table, message } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { KTCardBody, KTSVG } from '../../../../../_metronic/helpers'
import { deleteItem, fetchDocument, postItem } from '../../../../services/ApiCalls'


const UserRole = () => {
  const [gridData, setGridData] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const [img, setImg] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {register, reset, handleSubmit} = useForm()
  const param:any  = useParams();
  const navigate = useNavigate();
  let [userFName, setUserFName] = useState<any>("")
  const queryClient = useQueryClient()
    // const {data:allEmployee} = useQuery('employee', fetchEmployees, {cacheTime:5000})
    const {data:allRoles} = useQuery('userRoles',() => fetchDocument('UserRoles'), {cacheTime:5000})
    const {data:allUsers} = useQuery('users',() => fetchDocument('Users'), {cacheTime:5000})
    const {data:roles} = useQuery('roles',() => fetchDocument('Roles'), {cacheTime:5000})
  

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    reset()
    setIsModalOpen(false)
  }

  const { mutate: deleteData, isLoading: deleteLoading } = useMutation(deleteItem, {
    onSuccess: (data) => {
      queryClient.setQueryData(['users'], data);
      loadData()
    },
    onError: (error) => {
      console.log('delete error: ', error)
    }
  })

  const handleDelete = (element: any) => {
    const item = {
      url: 'UserRoles',
      data: element
    }
    deleteData(item)
  }



  const columns: any = [    
    {
      title: 'Role Name',
      key: 'roleId',
      render:(i:any)=>{
        return getRoleName(i.roleId)
      },
      sorter: (a: any, b: any) => {
        if (a.roleId > b.roleId) {
          return 1
        }
        if (b.roleId > a.roleId) {
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
          {/* <Link to="#">
            <span className='btn btn-light-danger btn-sm'>Remove</span>
          </Link> */}
          <a onClick={() => handleDelete(record)} className='btn btn-light-danger btn-sm'>
          Remove
          </a>
        </Space>
      ),
      
    },
  ]

  const getRoleName = (perkId: any) => {
    let RoleName = null
    roles?.data.map((item: any) => {
      if (item.id === perkId) {
        RoleName=item.name
      }
    })
    return RoleName
  }



  const loadData = async () => {
    setLoading(true)
    try {
      const response = await fetchDocument('UserRoles')
      setGridData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const getUserName= async (id:any) =>{
    let newName=null
     const itemTest = await allUsers?.data.find((item:any) =>
      item.id.toString()===id
    )
     newName = await itemTest
    return newName
 }

  useEffect(() => {
    (async ()=>{
      let res = await getUserName(param.id)
      setUserFName(res?.firstName + "   "+ res?.surname)
    })();
    loadData()
  }, [])

  const handleInputChange = (e: any) => {
    setSearchText(e.target.value)
    if (e.target.value === '') {
      loadData()
    }
  }

  const dataByID = gridData.filter((section:any) =>{
    return section.userId.toString() === param.id
  })

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

  const checkRole = (roleId: any) => {
    let isAssigned = false
    allRoles?.data.map((item: any) => {
      if (item.userId.toString() === param.id && item.roleId.toString() === roleId.toString()) {
        isAssigned = true
      }
    })
    return isAssigned
  }

  const OnSubmit = handleSubmit(async (values) => {
    setLoading(true)
    const endpoint = 'UserApplications'
    if(!checkRole(values.roleId)){
      const item = {
        data: {
          userId: parseInt(param.id),
          roleId: values.roleId,
        },
        url: endpoint
      }
      console.log(item.data)
      postData(item)
    }else{
      message.error('Role already assigned')
    }
  })

  const { mutate: postData, isLoading: postLoading } = useMutation(postItem, {
    onSuccess: (data) => {
      queryClient.setQueryData(['users'], data);
      reset()
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
        <h3 style={{fontWeight:"bolder"}}>{userFName} </h3>
        <br></br>
        <button className='mb-3 btn btn-outline btn-outline-dashed btn-outline-primary btn-active-light-primary' onClick={() => navigate(-1)}>Go Back</button>
        <br></br>
          <div className='d-flex justify-content-between'>
            <Space style={{marginBottom: 16}}>
              {/* <Input
                placeholder='Enter Search Text'
                onChange={handleInputChange}
                type='text'
                allowClear
                value={searchText}
              />
              <Button type='primary' onClick={globalSearch}>
                Search
              </Button> */}
            </Space>
            <Space style={{marginBottom: 16}}>
              <button type='button' className='btn btn-primary me-3' onClick={showModal}>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                Add
              </button>
            </Space>
          </div>
          <Table columns={columns} dataSource={dataByID} />
          <Modal
                title='Add New UserRole'
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
                    onClick={OnSubmit}
                    >
                        Submit
                    </Button>,
                ]}
            >
                <form
                    onSubmit={OnSubmit}
                >
                   <hr></hr>
                   <div style={{padding: "20px 20px 20px 20px"}} className='row mb-0 '>
                    {/* <div className=' mb-7'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Code</label>
                      <input type="text" {...register("code")}  className="form-control form-control-solid"/>
                    </div> */}
                    <div className=' mb-7'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Role</label>
                        <select {...register("roleId")} className="form-select form-select-solid"  aria-label="Select example">
                            <option value=""> Select </option>
                            {roles?.data.map((item: any) => (
                                <option value={item.id}>{item.name}</option>
                            ))}
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

export { UserRole }

