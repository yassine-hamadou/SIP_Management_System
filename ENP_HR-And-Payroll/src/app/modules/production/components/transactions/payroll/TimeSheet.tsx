import {Button, Form, Input, Modal, Space, Table} from 'antd'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {KTCardBody, KTSVG} from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'

const TimeSheet = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const [form] = Form.useForm()
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isShortModalOpen, setIsShortModalOpen] = useState(false)
  const [employeeRecord, setEmployeeRecord]= useState<any>([])
  const [radioValue, setRadioValue] = useState();
  const [radio1Value, setRadio1Value] = useState();
  const [radio2Value, setRadio2Value] = useState();
  const [radio3Value, setRadio3Value] = useState();
  const [radio4Value, setRadio4Value] = useState();
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
  const showShortModal = () => {
    setIsShortModalOpen(true)
  }

  const handleShortOk = () => {
    setIsShortModalOpen(false)
  }

  const handleShortCancel = () => {
    form.resetFields()
    setIsShortModalOpen(false)
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




  function handleDelete(element: any) {
    deleteData(element)
  }

  const columns: any = [
   
    {
      title: 'Employee ID',
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
      title: 'Last Name',
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
    {
      title: 'DOB',
      dataIndex: 'dob',
      sorter: (a: any, b: any) => {
        if (a.dob > b.dob) {
          return 1
        }
        if (b.dob > a.dob) {
          return -1
        }
        return 0
      },
    },
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
      title: 'Job Title',
      dataIndex: 'jobt',
      sorter: (a: any, b: any) => {
        if (a.jobt > b.jobt) {
          return 1
        }
        if (b.jobt > a.jobt) {
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
          <a href='#' onClick={showShortModal} className='btn btn-light-primary btn-sm'>
            Details
          </a>
          {/* <a  className='btn btn-light-primary btn-sm'>
            Details
          </a> */}
         
        </Space>
      ),
      
    },
  ]
  const columnForDetails: any = [
   
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
      title: 'Time In',
      dataIndex: 'timeout',
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
      title: 'Time Out',
      dataIndex: 'timein',
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
      title: 'Type',
      dataIndex: 'type',
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


  const  data= [

    {
      key:'1',
      date:"01/02/2023", 
      type:"Normal", 
      timeout:"8:15am", 
      timein:"5:00pm", 
      
    },
    {
      key:'2',
      date:"02/02/2023",
      type:"Normal",
      timeout:"9:15am", 
      timein:"5:20pm",
    },
    {
      key:'3',  
      date:"03/02/2023",
      type:"Weekend",
      timeout:"8:30am", 
      timein:"4:50pm", 
    },
    {
      key:'4',
      date:"04/02/2023", 
      type:"Normal", 
      timeout:"8:15am", 
      timein:"5:00pm", 
      
    },
    {
      key:'5',
      date:"05/02/2023",
      type:"Normal",
      timeout:"9:15am", 
      timein:"5:20pm",
    },
    {
      key:'6', 
      date:"06/02/2023",
      type:"Weekend",
      timeout:"8:30am", 
      timein:"4:50pm", 
    },
    {
      key:'7', 
      date:"07/02/2023",
      type:"Weekend",
      timeout:"8:30am", 
      timein:"4:50pm", 
    },
    {
      key:'8',
      date:"08/02/2023", 
      type:"Normal", 
      timeout:"8:15am", 
      timein:"5:00pm", 
      
    },
    {
      key:'9',
      date:"09/02/2023",
      type:"Normal",
      timeout:"9:15am", 
      timein:"5:20pm",
    },
    {
      key:'10',  
      date:"10/02/2023",
      type:"Weekend",
      timeout:"8:30am", 
      timein:"4:50pm", 
    },
    {
      key:'11',
      date:"11/02/2023", 
      type:"Normal", 
      timeout:"8:15am", 
      timein:"5:00pm", 
      
    },
    {
      key:'12',
      date:"12/02/2023",
      type:"Normal",
      timeout:"9:15am", 
      timein:"5:20pm",
    },
    {
      key:'13', 
      date:"13/02/2023",
      type:"Weekend",
      timeout:"8:30am", 
      timein:"4:50pm", 
    },
    {
      key:'14', 
      date:"14/02/2023",
      type:"Weekend",
      timeout:"8:30am", 
      timein:"4:50pm", 
    },
    {
      key:'15',
      date:"15/02/2023", 
      type:"Normal", 
      timeout:"8:15am", 
      timein:"5:00pm", 
      
    },
    {
      key:'16',
      date:"16/02/2023",
      type:"Normal",
      timeout:"9:15am", 
      timein:"5:20pm",
    },
    {
      key:'17',  
      date:"17/02/2023",
      type:"Weekend",
      timeout:"8:30am", 
      timein:"4:50pm", 
    },
    {
      key:'18',
      date:"18/02/2023", 
      type:"Normal", 
      timeout:"8:15am", 
      timein:"5:00pm", 
      
    },
    {
      key:'19',
      date:"19/02/2023",
      type:"Normal",
      timeout:"9:15am", 
      timein:"5:20pm",
    },
    {
      key:'20', 
      date:"20/02/2023",
      type:"Weekend",
      timeout:"8:30am", 
      timein:"4:50pm", 
    },
    {
      key:'21', 
      date:"21/02/2023",
      type:"Weekend",
      timeout:"8:30am", 
      timein:"4:50pm", 
    },
    {
      key:'22',
      date:"22/02/2023", 
      type:"Normal", 
      timeout:"8:15am", 
      timein:"5:00pm", 
      
    },
    {
      key:'23',
      date:"23/02/2023",
      type:"Normal",
      timeout:"9:15am", 
      timein:"5:20pm",
    },
    {
      key:'24',  
      date:"24/02/2023",
      type:"Weekend",
      timeout:"8:30am", 
      timein:"4:50pm", 
    },
    {
      key:'25',
      date:"25/02/2023", 
      type:"Normal", 
      timeout:"8:15am", 
      timein:"5:00pm", 
      
    },
    {
      key:'26',
      date:"26/02/2023",
      type:"Normal",
      timeout:"9:15am", 
      timein:"5:20pm",
    },
    {
      key:'27', 
      date:"27/02/2023",
      type:"Weekend",
      timeout:"8:30am", 
      timein:"4:50pm", 
    },
    {
      key:'28', 
      date:"28/02/2023",
      type:"Weekend",
      timeout:"8:30am", 
      timein:"4:50pm", 
    },
   
  ];

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
      <div style={{padding: "0px 0px 20px 0px"}}  className='col-12'>
        <div style={{padding: "20px 0px 0 0px"}} className='col-6 row mb-0'>
          <div className='col-6 mb-7'>
            <label htmlFor="exampleFormControlInput1" className=" form-label">Payroll Period</label>
            <select className="form-select form-select-solid" aria-label="Select example">
              <option> select</option>
              
            </select>
          </div>

          <div className='col-6 mb-7'>
            <label htmlFor="exampleFormControlInput1" className=" form-label">Department</label>
            <select className="form-select form-select-solid" aria-label="Select example">
              <option> select</option>
              
            </select>
          </div>
        </div>
      </div>
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
          <Table columns={columns}  />
          {/* Add form */}
          <Modal
                title='Employee Details'
                open={isModalOpen}
                onCancel={handleCancel}
                closable={true}
                width="900px"
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
                    onFinish={onFinish}
                >
                    <hr></hr>
                    <div style={{padding: "20px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Employee ID</label>
                      <select className="form-select form-select-solid" aria-label="Select example">
                        <option> select</option>
                        
                      </select>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Job Title</label>
                      <input type="text" name="fname" value={employeeRecord?.jobt} className="form-control form-control-solid"/>
                    </div>
                  </div>
                  <div style={{padding: "20px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                      <input type="text" name="fname" value={employeeRecord?.firstname} className="form-control form-control-solid"/>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="required form-label">Last Name</label>
                      <input type="text" name="fname" value={employeeRecord?.lastname} className="form-control form-control-solid"/>
                    </div>
                  </div>
                  <div style={{padding: "20px 20px 10px 20px"}} className='row mb-7 '>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">DOB</label>
                      <input type="text" name="fname" value={employeeRecord?.dob} className="form-control form-control-solid"/>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="required form-label">Gender</label>
                      <input type="text" name="fname" value={employeeRecord?.sex} className="form-control form-control-solid"/>
                    </div>
                  </div>
                </Form>
          </Modal>

                {/* Details table */}
          <Modal
                // title='Short List'
                open={isShortModalOpen}
                onCancel={handleShortCancel}
                closable={true}
                width="900px"
                footer={[
                    <Button key='back' onClick={handleShortCancel}>
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
              <Table style={{margin: "50px 0px 30px 0px"}} columns={columnForDetails} dataSource={data} />
          </Modal>
        </div>
      </KTCardBody>
    </div>
  )
}

export {TimeSheet}



