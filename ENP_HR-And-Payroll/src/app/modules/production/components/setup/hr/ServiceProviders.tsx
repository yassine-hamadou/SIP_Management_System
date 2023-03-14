import {Button, Form, Input, InputNumber, Modal, Space, Table} from 'antd'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {KTCardBody, KTSVG} from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'
import { useQuery } from 'react-query'
import { Api_Endpoint } from '../../../../../services/ApiCalls'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const ServiceProviders = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const [form] = Form.useForm()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const {register, reset, handleSubmit} = useForm()
  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    form.resetFields()
    setIsModalOpen(false)
  }

  const deleteData = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/ServiceProviders/${element.id}`)
      // update the local state so that react can refecth and re-render the table with the new data
      const newData = gridData.filter((item: any) => item.id !== element.id)
      setGridData(newData)
      return response.status
    } catch (e) {
      return e
    }
  }

  

  function handleDelete(element: any) {
    deleteData(element)
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
      title: 'Phone',
      dataIndex: 'phone',
      sorter: (a: any, b: any) => {
        if (a.phone > b.phone) {
          return 1
        }
        if (b.phone > a.phone) {
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
      title: 'Address',
      dataIndex: 'address',
      sorter: (a: any, b: any) => {
        if (a.address > b.address) {
          return 1
        }
        if (b.address > a.address) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Contact Person',
      dataIndex: 'contactPerson',
      sorter: (a: any, b: any) => {
        if (a.contactPerson > b.contactPerson) {
          return 1
        }
        if (b.contactPerson > a.contactPerson) {
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
          
          <Link to={`/products/${record.id}`}>
            <span className='btn btn-light-info btn-sm'>Products</span>
          </Link>
          <a href='#' className='btn btn-light-warning btn-sm'>
            Update
          </a>
          <a onClick={() => handleDelete(record)} className='btn btn-light-danger btn-sm'>
            Delete
          </a>
         
        </Space>
      ),
      
    },
  ]

//   const {data:allServiceProviders} = useQuery('ServiceProviders', fetchServiceProviders, {cacheTime:5000})
  const loadData = async () => {
    setLoading(true)
    try {
      const response = await axios.get("http://208.117.44.15/hrwebapi/api/ServiceProviders")
      setGridData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  // const {isLoading, data}= useQuery('ServiceProviders', ()=>{
  //   return axios.get(`${Api_Endpoint}/ServiceProviders`)
  // })

  useEffect(() => {
    loadData()
  }, [])

  const dataWithIndex = gridData.map((item: any, index) => ({
    ...item,
    key: index,
  }))

  const handleInputChange = (e: any) => {
    setSearchText(e.target.value)
    if (e.target.value === '') {
      loadData()
    }
  }

  const globalSearch = () => {
    // @ts-ignore
    filteredData = dataWithVehicleNum.filter((value) => {
      return (
        value.name.toLowerCase().includes(searchText.toLowerCase())
      )
    })
    setGridData(filteredData)
  }

  const url = `${Api_Endpoint}/ServiceProviders`
  const OnSUbmit = handleSubmit( async (values)=> {
    setLoading(true)
    const data = {
          code: values.code,
          name: values.name,
          address: values.address,
          email: values.email,
          phone: values.phone,
          contactPerson: values.contactPerson,
        }
        console.log(data)
    try {
      const response = await axios.post(url, data)
      setSubmitLoading(false)
      reset()
      setIsModalOpen(false)
      loadData()
      return response.statusText
    } catch (error: any) {
      setSubmitLoading(false)
      return error.statusText
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

              <button type='button' className='btn btn-light-primary me-3'>
                <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
                Export
            </button>
            </Space>
          </div>
          <Table columns={columns} dataSource={dataWithIndex}  />
          <Modal
                title='Service Providers Setup'
                open={isModalOpen}
                onCancel={handleCancel}
                closable={true}
                width={800}
                footer={[
                    <Button key='back' onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button
                    key='submit'
                    type='primary'
                    htmlType='submit'
                    loading={submitLoading}
                    onClick={OnSUbmit}
                    >
                        Submit
                    </Button>,
                ]}
            >
                <form
                    onSubmit={OnSUbmit}  
                >
                  <hr></hr>
                 
                    <div style={{padding: "20px 0px 20px 20px"}} className='row mb-0 '>
                        <div className='col-6 mb-7'>
                            <label htmlFor="exampleFormControlInput1" className="form-label">Code</label>
                            <input type="text" {...register("code")}  className="form-control form-control-solid"/>
                        </div>
                        <div className='col-6 mb-7'>
                            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" {...register("name")}  className="form-control form-control-solid"/>
                        </div>
                    </div>
                    <div style={{padding: "0px 20px 0px 20px"}} className='row mb-0 '>
                        <div className='col-6 mb-7'>
                            <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
                            <input type="text" {...register("address")}  className="form-control form-control-solid"/>
                        </div>
                        <div className='col-6 mb-7'>
                            <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                            <input type="tel" {...register("phone")}  className="form-control form-control-solid"/>
                        </div>
                    </div>
                    <div style={{padding: "0px 20px 0px 20px"}} className='row mb-0 col-12'>
                        <div className='col-6 mb-7'>
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                            <input type="email" {...register("email")}  className="form-control form-control-solid"/>
                        </div>
                        <div className='col-6 mb-7'>
                            <label htmlFor="exampleFormControlInput1" className="form-label">Contact Person</label>
                            <input type="text" {...register("contactPerson")} placeholder="e.g Dr. Mensah Anang" className="form-control form-control-solid"/>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
      </KTCardBody>
    </div>
  )
}

export {ServiceProviders}
