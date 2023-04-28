import { Button, Input, Modal, Space, Table, message } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { KTCardBody, KTSVG } from '../../../../../_metronic/helpers'
import { Api_Endpoint, fetchDocument, postItem } from '../../../../services/ApiCalls'
import { ENP_URL } from '../../urls'

const UserApplication = () => {
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

  const deleteData = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/UserApplications/${element.id}`)
      // update the local state so that react can refecth and re-render the table with the new data
      const newData = gridData.filter((item: any) => item.id !== element.id)
      setGridData(newData)
      return response.status
    } catch (e) {
      return e
    }
  }

  const columns: any = [

    {
      title: 'Application Name',
      key: 'applicationId',
      render:(i:any)=>{
        return getRoleName(i.applicationId)
      },
      sorter: (a: any, b: any) => {
        if (a.applicationId > b.applicationId) {
          return 1
        }
        if (b.applicationId > a.applicationId) {
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
          <Link to={`/employee-details/${record.id}`}>
            <span className='btn btn-light-success btn-sm'>Remove</span>
          </Link>
        </Space>
      ),
    },
  ]

  const {data:Applications} = useQuery('applications',() => fetchDocument('Applications'), {cacheTime:5000})
  const {data:userApplications} = useQuery('user-applications',() => fetchDocument('UserApplications'), {cacheTime:5000})
  const {data:allUsers} = useQuery('users',() => fetchDocument('Users'), {cacheTime:5000})
  const {data:roles} = useQuery('roles',() => fetchDocument('Roles'), {cacheTime:5000})

  const loadData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/UserApplications`)
      setGridData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const getRoleName = (appId: any) => {
    let appName = null
    Applications?.data.map((item: any) => {
      if (item.id === appId) {
        appName=item.name
      }
    })
    return appName
  }
  const dataByID = gridData.filter((section:any) =>{
    return section.userId.toString() === param.id
  })

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

  const checkRole = (applicationId: any) => {
    let isAssigned = false
    userApplications?.data.map((item: any) => {
      if (item.userId?.toString() === param.id && item.applicationId?.toString() === applicationId.toString()) {
        isAssigned = true
      }
    })
    return isAssigned
  }

  const OnSubmit = handleSubmit(async (values) => {
    setLoading(true)
    const endpoint = 'UserApplications'
    if(!checkRole(values.applicationId)){
      const item = {
        data: {
          userId: parseInt(param.id),
          applicationId: parseInt(values.applicationId),
        },
        url: endpoint
      }
      console.log(item.data)
      postData(item)
    }else{
      message.error(`Application already assigned to ${userFName}`)
    }
  })
  const queryClient = useQueryClient()
  const { mutate: postData, isLoading: postLoading } = useMutation(postItem, {
    onSuccess: (data) => {
      queryClient.setQueryData(['userApplication'], data);
      reset()
      loadData()
      setIsModalOpen(false)
    },
    onError: (error) => {
      console.log('post error: ', error)
    }
  })

  // const url = `${Api_Endpoint}/UserApplication`
  // const OnSUbmit = handleSubmit( async (values)=> {
  //   setLoading(true)
  //   const data = {
  //         userId: parseInt(param.id),
  //         applicationId: parseInt(values.applicationId),
  //       }
  //   console.log(data)
  //   try {
  //     const response = await axios.post(url, data)
  //     setSubmitLoading(false)
  //     reset()
  //     setIsModalOpen(false)
  //     loadData()
  //     return response.statusText
  //   } catch (error: any) {
  //     setSubmitLoading(false)
  //     return error.statusText
  //   }
  // })

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
            <Space style={{marginBottom: 16}}>
            <button type='button' className='btn btn-primary me-3' onClick={showModal}>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                Add
              </button>
            </Space>
          </div>
          <Table columns={columns} dataSource={dataByID} loading={loading} />
          <Modal
                title='Add New UserApplication'
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
                    <div className=' mb-7'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Application</label>
                        <select {...register("applicationId")} className="form-select form-select-solid"  aria-label="Select example">
                            <option value=""> Select </option>
                            {Applications?.data.map((item: any) => (
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

export { UserApplication }

