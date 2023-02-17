import {Button, Form, Input, InputNumber, Modal, Space, Table} from 'antd'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {KTCardBody, KTSVG} from '../../../../../_metronic/helpers'
import { ENP_URL } from '../../urls'
import { Link } from 'react-router-dom'
import { employeedata } from '../../../../data/DummyData'

const Employee = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const [form] = Form.useForm()
  const [img, setImg] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false)


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
      const response = await axios.delete(`${ENP_URL}/ProductionActivity/${element.id}`)
      // update the local state so that react can refecth and re-render the table with the new data
      const newData = gridData.filter((item: any) => item.id !== element.id)
      setGridData(newData)
      return response.status
    } catch (e) {
      return e
    }
  }

  const fetchImage = async () => {
    const res = await fetch("https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80");
    const imageBlob = await res.blob();
    const imageObjectURL:any  = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };
  

  function handleDelete(element: any) {
    deleteData(element)
  }
  const columns: any = [
   {
      title: 'Profile',
      dataIndex: 'name',
      render: (a: any, b: any) => {
        return  <img style={{borderRadius:"50%"}} src={img} width={50} height={50}></img>
      }
    },
    {
      title: 'EployeeID',
      dataIndex: 'empcode',
      sorter: (a: any, b: any) => {
        if (a.empcode > b.empcode) {
          return 1
        }
        if (b.empcode > a.empcode) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'First Name',
      dataIndex: 'firstname',
      sorter: (a: any, b: any) => {
        if (a.firstname > b.firstname) {
          return 1
        }
        if (b.firstname > a.firstname) {
          return -1
        }
        return 0
      },
    },
   
    {
      title: 'Surname',
      dataIndex: 'lastname',
      sorter: (a: any, b: any) => {
        if (a.lastname > b.lastname) {
          return 1
        }
        if (b.lastname > a.lastname) {
          return -1
        }
        return 0
      },
    },
    // {
    //   title: 'DOB',
    //   dataIndex: 'name',
    //   sorter: (a: any, b: any) => {
    //     if (a.name > b.name) {
    //       return 1
    //     }
    //     if (b.name > a.name) {
    //       return -1
    //     }
    //     return 0
    //   },
    // },
    {
      title: 'Gender',
      dataIndex: 'sex',
      sorter: (a: any, b: any) => {
        if (a.sex > b.sex) {
          return 1
        }
        if (b.sex > a.sex) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Paygroup',
      dataIndex: 'paygroup',
      sorter: (a: any, b: any) => {
        if (a.paygroup > b.paygroup) {
          return 1
        }
        if (b.paygroup > a.paygroup) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Salary Grade',
      dataIndex: 'grade',
      sorter: (a: any, b: any) => {
        if (a.grade > b.grade) {
          return 1
        }
        if (b.grade > a.grade) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Notch',
      dataIndex: 'notch',
      sorter: (a: any, b: any) => {
        if (a.notch > b.notch) {
          return 1
        }
        if (b.notch > a.notch) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Department',
      dataIndex: 'depart',
      sorter: (a: any, b: any) => {
        if (a.depart > b.depart) {
          return 1
        }
        if (b.depart > a.depart) {
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
      title: 'Action',
      fixed: 'right',
      width: 100,
      render: (_: any, record: any) => (
        <Space size='middle'>
          {/* <a href='#' className='btn btn-light-warning btn-sm'>
            Update
          </a> */}
          <Link to={`/employee-edit-form/${record.code}`}>
            <span className='btn btn-light-info btn-sm'>Update</span>
          </Link>
          <a onClick={() => handleDelete(record)} className='btn btn-light-danger btn-sm'>
            Details
          </a>
         
        </Space>
      ),
      
    },
  ]


 
    

  const loadData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${ENP_URL}/ProductionActivity`)
      setGridData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadData()
    fetchImage()
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

  const url = `${ENP_URL}/ProductionActivity`
  const onFinish = async (values: any) => {
    setSubmitLoading(true)
    const data = {
      name: values.name,
    }

    console.log(data)

    try {
      const response = await axios.post(url, data)
      setSubmitLoading(false)
      form.resetFields()
      setIsModalOpen(false)
      loadData()
      return response.statusText
    } catch (error: any) {
      setSubmitLoading(false)
      return error.statusText
    }
  }

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
              {/* <button type='button' className='btn btn-primary me-3' onClick={showModal}>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                Add
              </button> */}
              
              <Link to='/employee-form'>
              <button type='button' className='btn btn-primary me-3'>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                Add
              </button>
              </Link>

              <button type='button' className='btn btn-light-primary me-3'>
                <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
                Export
            </button>
            </Space>
          </div>
          <Table columns={columns} dataSource={employeedata} />
          <Modal
                title='Add Employee'
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
                    onClick={() => {
                      form.submit()
                    }}
                    >
                        Submit
                    </Button>,
                ]}
            >
                <Form
                    labelCol={{span: 7}}
                    wrapperCol={{span: 14}}
                    layout='horizontal'
                    form={form}
                    name='control-hooks'
                    title='Add Service'
                    onFinish={onFinish}
                >
                    {/* <Form.Item
                        name='name'
                        label='Name'
                        
                        rules={[{required: true}]}
                    >
                        <Input />
                    </Form.Item> */}
                </Form>
            </Modal>
        </div>
      </KTCardBody>
    </div>
  )
}

export {Employee}
