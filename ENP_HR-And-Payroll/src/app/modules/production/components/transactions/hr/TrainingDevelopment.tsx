
import {Button, Form, Input, InputNumber, Upload,Modal, Space, Table, Radio, RadioChangeEvent, Select} from 'antd'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {KTCardBody, KTSVG} from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { UploadOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table'
import { employeedata } from '../../../../../data/DummyData'
import { useForm } from 'react-hook-form'
import { Api_Endpoint, fetchEmployees, fetchJobTitles, fetchTrainees, fetchTrainingDevTransactions, fetchTrainings, fetchTrainingSchedules } from '../../../../../services/ApiCalls'
import { useQuery } from 'react-query'

const TrainingDevelopment = () => {
  const [gridData, setGridData] = useState([])
  const [trainingScheduleData, setTrainingScheduleData] = useState([])
  const [traineeData, setTraineeData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const [selectedRef, setSelectedRef] = useState<any>("");
  const [jobtitleName, setJobtitleName] = useState("");

  const {register, reset, handleSubmit} = useForm()
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isTraDevModalOpen, setIsTraDevModalOpen] = useState(false)
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false)
  const [radioValue, setRadioValue] = useState();
  const [radio1Value, setRadio1Value] = useState();
  const [radio2Value, setRadio2Value] = useState();
  const [radio3Value, setRadio3Value] = useState();
  const [radio4Value, setRadio4Value] = useState();
  const [employeeRecord, setEmployeeRecord]= useState<any>([])
  const showModal = () => {
    setIsModalOpen(true)
  }

  const showTranDevModal = () => {
    setIsTraDevModalOpen(true)
}
  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    reset()
    setIsModalOpen(false)
    setEmployeeRecord(null)
    console.log(employeeRecord)
  }
  const handleTranDevCancel = () => {
    reset()
    setIsTraDevModalOpen(false)
  }
  const showShortModal = () => {
    setIsScheduleModalOpen(true)
  }

  // const handleShortOk = () => {
  //   setIsShortModalOpen(false)
  // }

  const handleShortCancel = () => {
    reset()
    setIsScheduleModalOpen(false)
  }

  const deleteScheduleData = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/TrainingSchedules/${element.id}`)
      // update the local state so that react can refecth and re-render the table with the new data
      const newData = trainingScheduleData.filter((item: any) => item.id !== element.id)
      setTrainingScheduleData(newData)
      return response.status
    } catch (e) {
      return e
    }
  }

  const deleteTraineeData = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/Trainees/${element.id}`)
      // update the local state so that react can refecth and re-render the table with the new data
      const newData = traineeData.filter((item: any) => item.id !== element.id)
      setTraineeData(newData)
      return response.status
    } catch (e) {
      return e
    }
  }
  const [fileList, setFileList] = useState<UploadFile[]>([
    
  ]);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };


  // to preview the uploaded file
  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const onRadioChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setRadioValue(e.target.value);
  };
  const onRadio1Change = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setRadio1Value(e.target.value);
  };
  const onRadio2Change = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setRadio2Value(e.target.value);
  };
  const onRadio3Change = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setRadio3Value(e.target.value);
  };
  const onRadio4Change = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setRadio4Value(e.target.value);
  };

  function handleScheduleDelete(element: any) {
    deleteScheduleData(element)
  }
  function handleTraineeDelete(element: any) {
    deleteTraineeData(element)
  }

  const columns: any = [
    {
      title: 'Employee ID',
      key: 'employeeId',
      render: (record:any )=>{
        return getEmID(record.employeeId)
      },
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
      key: 'employeeId',
      render: (record:any )=>{
        return getFirstName(record.employeeId)
      },
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
      key: 'employeeId',
      render: (record:any )=>{
        return getSurname(record.employeeId)
      },
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
      title: 'DOB',
      key: 'employeeId',
      render: (record:any )=>{
        return getDOB(record.employeeId)
      },
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
      key: 'employeeId',
      render: (record:any )=>{
        return getGender(record.employeeId)
      },
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
      title: 'Phone Number',
      key: 'employeeId',
      render: (record:any )=>{
        return getPhone(record.employeeId)
      },
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
          
          <a onClick={() => handleTraineeDelete(record)} className='btn btn-light-danger btn-sm'>
          Remove
          </a>
          {/* <a  className='btn btn-light-primary btn-sm'>
            Remove
          </a> */}
         
        </Space>
      ),
      
    },
  ]
  const columnSchedules: any = [
   
    
    {
      title: '#',
      dataIndex: 'id',
      sorter: (a: any, b: any) => {
        if (a.id > b.id) {
          return 1
        }
        if (b.id > a.id) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Day',
      dataIndex: 'day',
      sorter: (a: any, b: any) => {
        if (a.day > b.day) {
          return 1
        }
        if (b.day > a.day) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Topic',
      dataIndex: 'topic',
      sorter: (a: any, b: any) => {
        if (a.topic > b.topic) {
          return 1
        }
        if (b.topic > a.topic) {
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
          {/* <a href='#' onClick={showShortModal} className='btn btn-light-primary btn-sm'>
            Shortlist
          </a> */}
          {/* <a  className='btn btn-light-primary btn-sm'>
            Delete
          </a> */}
          <a onClick={() => handleScheduleDelete(record)} className='btn btn-light-danger btn-sm'>
            Delete
          </a>
         
        </Space>
      ),
      
    },
  ]

  const loadTraineeData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/Trainees`)
      setTraineeData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  // console.log(traineeData)
  const loadTrainingScheduleData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/TrainingSchedules`)
      setTrainingScheduleData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const { data: allTrainingDevTransactions } = useQuery('trainingDevTransactions', fetchTrainingDevTransactions, { cacheTime: 5000 })
  const { data: allTrainingSchedules } = useQuery('trainingSchedules', fetchTrainingSchedules, { cacheTime: 5000 })
  const { data: allTraininees } = useQuery('trainees', fetchTrainees, { cacheTime: 5000 })
  const { data: allTraininings } = useQuery('trainings', fetchTrainings, { cacheTime: 5000 })
  const { data: allEmployees } = useQuery('employees', fetchEmployees, { cacheTime: 5000 })
  const { data: allJobTitles } = useQuery('jobTitles', fetchJobTitles, { cacheTime: 5000 })


  const getFirstName = (emId: any) => {
    let firstName = null
    allEmployees?.data.map((item: any) => {
      if (item.id === emId) {
        firstName=item.firstName
      }
    })
    return firstName
  }
  const getEmID = (emId: any) => {
    let emID = null
    allEmployees?.data.map((item: any) => {
      if (item.id === emId) {
        emID=item.employeeId
      }
    })
    return emID
  }
  const getSurname = (emId: any) => {
    let firstName = null
    allEmployees?.data.map((item: any) => {
      if (item.id === emId) {
        firstName=item.surname
      }
    })
    return firstName
  }
  const getDOB = (emId: any) => {
    let firstName = null
    allEmployees?.data.map((item: any) => {
      if (item.id === emId) {
        firstName=item.dob
      }
    })
    return firstName
  }
  const getGender = (emId: any) => {
    let gender = null
    allEmployees?.data.map((item: any) => {
      if (item.id === emId) {
        gender=item.gender
      }
    })
    return gender
  }
  const getPhone = (emId: any) => {
    let phone = null
    allEmployees?.data.map((item: any) => {
      if (item.id === emId) {
        phone=item.phone
      }
    })
    return phone
  }


  const  data = [

    {
      key:'1',
      id:'1',
      date:"Day 1 - Morning", 
      phone:"0249920482",
    
      topic: "Sage Installation",
    },
    {
      key:'2',
      id:'2',
      date:"Day 2 - Morning",
      topic: "DevOps",

    },
    {
      key:'3',
      id:'3',
      date:"Day 3 - Morning", 
      topic: "MySQL Basics",

    }
  ];

  const dataByID:any = allTrainingDevTransactions?.data.find((refId:any) =>{
    return  (refId.id===parseInt(selectedRef))
 })

  const trainSchData:any = trainingScheduleData.filter((refId:any) =>{
    return  (refId.trainingDevTransactionId===parseInt(selectedRef))
 })

  const traineeEmployeeData:any = traineeData.filter((refId:any) =>{
    return  (refId.trainingDevTransactionId===parseInt(selectedRef))
 })


 const onEmployeeChange = (objectId: any) => {
  const newEmplo = allEmployees?.data.find((item:any)=>{
    return item.id===parseInt(objectId)
  }) // console.log(newEmplo)
  setEmployeeRecord(newEmplo)
}
  useEffect(() => {
    const getUnitName = () => {
      let jobtitleName = ""
      allJobTitles?.data.map((item: any) => {
        if (item.id === employeeRecord?.jobTitleId) {
          jobtitleName=item.name
        }
      })
      setJobtitleName(jobtitleName)
      return jobtitleName
    } 
    getUnitName()
    loadTrainingScheduleData()
    loadTraineeData()
  }, [])

  const dataWithIndex = gridData.map((item: any, index) => ({
    ...item,
    key: index,
  }))

  const handleInputChange = (e: any) => {
    setSearchText(e.target.value)
    if (e.target.value === '') {
      loadTraineeData()
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

  const url1 = `${Api_Endpoint}/TrainingDevTransactions`
  const submitTrainingDevTransaction = handleSubmit(async (values) => {
    setLoading(true)
    const data = {
      reference: values.reference,
      trainingId: parseInt(values.trainingId),
      startDate: values.startDate,
      endDtae: values.endDate,
      venue: values.venue,
      facilitator: values.facilitator

    }
      try { 
        
          const response = await axios.post(url1, data)
          setSubmitLoading(false)
          reset()
          setIsModalOpen(false)
          loadTraineeData()
          return response.statusText
        
      } catch (error: any) {
        setSubmitLoading(false)
        return error.statusText
      } 
    
  })
  const url3 = `${Api_Endpoint}/TrainingSchedules`
  const submitTrainingSchedule = handleSubmit(async (values) => {
    setLoading(true)
    const data = {
      topic: values.topic,
      day: values.day,
      trainingDevTransactionId: parseInt(selectedRef),
    }
      try { 
        
          const response = await axios.post(url3, data)
          setSubmitLoading(false)
          reset()
          setIsScheduleModalOpen(false)
          loadTrainingScheduleData()
          return response.statusText
        
      } catch (error: any) {
        setSubmitLoading(false)
        return error.statusText
      } 
    
  })
  const url2 = `${Api_Endpoint}/Trainees`
  const submitTrainee= handleSubmit(async (values) => {
    setLoading(true)
    const data = {
      employeeId: employeeRecord.id,
      trainingDevTransactionId: parseInt(selectedRef),
    }
    console.log(data)
      try { 
        
          const response = await axios.post(url2, data)
          setSubmitLoading(false)
          reset()
          setIsModalOpen(false)
          loadTraineeData()
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
      {/* Top part of the page */}

        <div style={{padding: "40px 0px 40px 10px"}}  className='col-12 row'>
          <div className='col-4' style={{padding: "0px 40px 0px 0px"}}>
            <select value={selectedRef} onChange={(e) => setSelectedRef(e.target.value)} className="form-select form-select-solid"  aria-label="Select example">
              <option value="Select">Select</option>
              {/* <option value="N/A">N/A</option> */}
              {allTrainingDevTransactions?.data.map((item: any) => (
                <option value={item.id}>{`Reference: ${item.reference} - facilitator: ${item.facilitator} - Venue: ${item.venue}`}</option>
              ))}
            </select>
          </div>
          <div className='col-6'>
            {
              selectedRef===""||
              selectedRef==="Select"?
              
                <button type='button' className='btn btn-info me-3' onClick={showTranDevModal}>
                  <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                  Add New Training
                </button>
              :
              ""
            }
            </div>
        </div>
       
      {
        selectedRef===""||
        selectedRef==="Select"?"":
        <div className='col-12 row'>
        <div className='col-6'>
          <div style={{padding: "20px 0px 0 0px"}} className='col-12 row mb-0'>
            <div className='col-6 mb-7'>
              <label htmlFor="exampleFormControlInput1" className=" form-label">Reference#</label>
              <input type="text" readOnly defaultValue={dataByID.reference} className="form-control form-control-solid" />
            </div>

            <div className='col-6 mb-7'>
              <label htmlFor="exampleFormControlInput1" className=" form-label">Training Type</label>
              <input type="text" readOnly value={dataByID.trainingId} className="form-control form-control-solid" />
            </div>
          </div>
          <div style={{padding: "20px 0px 0 0px"}} className='col-12 row mb-0'>
            <div className='col-6 mb-3'>
              <label htmlFor="exampleFormControlInput1" className=" form-label">Start date</label>
              <input type="text" readOnly value={dataByID.startDate} className="form-control form-control-solid" />
            </div>

            <div className='col-6 mb-7'>
              <label htmlFor="exampleFormControlInput1" className=" form-label">End date</label>
              <input type="text" readOnly value={dataByID.startDate} className="form-control form-control-solid" />
            </div>
          </div>
          <div style={{padding: "20px 0px 0 0px"}} className='col-12 row mb-0'>
            <div className='col-6 mb-7'>
              <label htmlFor="exampleFormControlInput1" className=" form-label">Facilitator</label>
              <input type="text" readOnly value={dataByID.facilitator} className="form-control form-control-solid" />
            </div>
            <div className='col-6 mb-7'>
              <label htmlFor="exampleFormControlInput1" className=" form-label">Venue</label>
              <input type="text" readOnly value={dataByID.venue} className="form-control form-control-solid" />
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='d-flex justify-content-between'>
            <Space style={{marginBottom: 16}}>
            <h3><b>Training Schedule Table</b></h3>
            </Space>
            <Space style={{marginBottom: 16}}>
              <button type='button' className='btn btn-primary me-3' onClick={showShortModal}>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                Add
              </button>
            </Space>
          </div>
          <div 
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '5px',
              boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
            }}
          >

          <Table columns={columnSchedules} dataSource={trainSchData} />
          </div>
        </div>
        <div>
        <hr></hr>
      <KTCardBody className='py-4 '>
        <div className='table-responsive'>
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

              <button type='button' className='btn btn-light-primary me-3'>
                <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
                Export
            </button>
            </Space>
          </div>
          <Table columns={columns} dataSource={traineeEmployeeData} />

          {/* Modal for adding Employeee to trainingRef*/}
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
                  onClick={submitTrainee}
                  >
                      Submit
                  </Button>,
                ]}
            >
                <form
                    onSubmit={submitTrainee}
                >
                  <hr></hr>
                  <div style={{padding: "20px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Employee ID</label>
                      <br></br>
                      <Select
                          
                          {...register("employeeId")}
                          showSearch
                          placeholder="select a reference"
                          optionFilterProp="children"
                          style={{width:"300px"}}
                          value={employeeRecord?.id}
                          onChange={(e)=>{
                            onEmployeeChange(e)
                          }}
                          
                        >
                          <option>select</option>
                          {allEmployees?.data.map((item: any) => (
                            <option key={item.id} value={item.id}>{item.firstName} - {item.surname}</option>
                          ))}
                        </Select>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Job Title</label>
                      <input type="text" readOnly value={jobtitleName} className="form-control form-control-solid"/>
                    </div>
                  </div>
                  <div style={{padding: "20px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                      <input type="text" readOnly value={employeeRecord?.firstName} className="form-control form-control-solid"/>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className=" form-label">Last Name</label>
                      <input type="text" readOnly value={employeeRecord?.surname} className="form-control form-control-solid"/>
                    </div>
                  </div>
                  <div style={{padding: "20px 20px 10px 20px"}} className='row mb-7 '>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">DOB</label>
                      <input type="text" readOnly value={employeeRecord?.dob} className="form-control form-control-solid"/>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className=" form-label">Gender</label>
                      <input type="text" readOnly value={employeeRecord?.gender} className="form-control form-control-solid"/>
                    </div>
                  </div>
                  
                </form>
          </Modal>

          {/* Modal for the schedule */}

          <Modal
                title='Training Schedule'
                open={isScheduleModalOpen}
                onCancel={handleShortCancel}
                closable={true}
                width="600px"
                footer={[
                  <Button key='back' onClick={handleShortCancel}>
                      Cancel
                  </Button>,
                  <Button
                  key='submit'
                  type='primary'
                  htmlType='submit'
                  loading={submitLoading}
                  onClick={submitTrainingSchedule}
                  >
                      Submit
                  </Button>,
                ]}
            >
                <form
                    onSubmit={submitTrainingSchedule}
                >
                    <hr></hr>
                    
                  <div style={{padding: "20px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Topic</label>
                      <input type="text" {...register("topic")} className="form-control form-control-solid"/>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className=" form-label">Day</label>
                      <input type="text" {...register("day")} className="form-control form-control-solid"/>
                    </div>
                  </div>
                </form>
          </Modal>
        </div>
          </KTCardBody>
        </div>
      </div>
    
      }
      
        {/* Modal for the trainingTransaction*/}

        <Modal
                title='Add New Training '
                open={isTraDevModalOpen}
                onCancel={handleTranDevCancel}
                closable={true}
                width="600px"
                footer={[
                  <Button key='back' onClick={handleTranDevCancel}>
                      Cancel
                  </Button>,
                  <Button
                  key='submit'
                  type='primary'
                  htmlType='submit'
                  loading={submitLoading}
                  onClick={submitTrainingDevTransaction}
                  >
                      Submit
                  </Button>,
                ]}
            >
                <form
                    onSubmit={submitTrainingDevTransaction}
                >
                    <hr></hr>
                    
                    <div style={{padding: "0px 0px 0px 20px"}}  className='col-12'>
                    
                    <div style={{padding: "20px 0px 0 0px"}} className='col-12 row mb-0'>
                      <div className='col-6 mb-7'>
                        <label htmlFor="exampleFormControlInput1" className=" form-label">Reference#</label>
                        <input type="text" {...register("reference")}  className="form-control form-control-solid" />
                      </div>

                      <div className='col-6 mb-7'>
                        <label htmlFor="exampleFormControlInput1" className=" form-label">Training Type</label>
                        <select {...register("trainingId")} className="form-select form-select-solid" aria-label="Select example">
                          <option> select</option>
                          {
                            allTraininings?.data.map((item:any)=>(
                              <option  key={item.id} value={item.id}>{item.name}</option>
                            ))
                          }
                        </select>
                      </div>
                    </div>
                    <div style={{padding: "20px 0px 0 0px"}} className='col-12 row mb-0'>
                      <div className='col-6 mb-3'>
                        <label htmlFor="exampleFormControlInput1" className=" form-label">Start date</label>
                        <input {...register("startDate")} type="date" className="form-control form-control-solid" />
                      </div>

                      <div className='col-6 mb-7'>
                        <label htmlFor="exampleFormControlInput1" className=" form-label">End date</label>
                        <input {...register("endDate")} type="date"  className="form-control form-control-solid" />
                      </div>
                    </div>
                    <div style={{padding: "20px 0px 0 0px"}} className='col-12 row mb-0'>
                      <div className='col-6 mb-7'>
                        <label htmlFor="exampleFormControlInput1" className=" form-label">Facilitator</label>
                        <input {...register("facilitator")} type="text"  className="form-control form-control-solid" />
                      </div>
                      <div className='col-6 mb-7'>
                        <label htmlFor="exampleFormControlInput1" className=" form-label">Venue</label>
                        <input {...register("venue")} type="text" className="form-control form-control-solid" />
                      </div>
                    </div>
                  </div>
                </form>
          </Modal>
    </div>
  )
}

export {TrainingDevelopment}


