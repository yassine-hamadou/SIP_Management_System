import {Button, Form, Input, InputNumber, Upload,Modal, Space, Table, Radio, RadioChangeEvent, Select} from 'antd'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {KTCardBody, KTSVG} from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { Api_Endpoint, fetchAppraisals, fetchEmployees, fetchJobTitles, fetchPaygroups, fetchPeriods } from '../../../../../services/ApiCalls'
import { useQuery } from 'react-query'
import "./cusStyle.css"
import { useForm } from 'react-hook-form'

const AppraisalPerformance = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const {reset, register, handleSubmit} = useForm()
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tabModalOpen, setTabModalOpen] = useState(false)
  const [updateModalOpen, setUpdateModalOpen] = useState(false)
  const [tab1ModalOpen, setTab1Modal1Open] = useState(false)
  const [tab2ModalOpen, setTab2ModalOpen] = useState(false)
  const [tab3ModalOpen, setTab3ModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("tab1");
  const [employeeRecord, setEmployeeRecord]= useState<any>([])
  const [selectedValue, setSelectedValue] = useState<any>(null);
  const handleTabClick = (tab:any) => {
    setActiveTab(tab);
  };
  const showModal = () => {
    setIsModalOpen(true)
  }

  // const handleOk = () => {
  //   setIsModalOpen(false)
  // }

  const handleCancel = () => {
    // form.resetFields()
    reset()
    setSelectedValue(null)
    setEmployeeRecord([])
    setIsModalOpen(false)
    setUpdateModalOpen(false)

  }
  const showTabModal = () => {
    setTabModalOpen(true)
  }
  const handleUpdateCancel = () => {
    // form.resetFields()
    setUpdateModalOpen(false)
  }
  const showUpdateModal = () => {
    setUpdateModalOpen(true)
  }

  // const handleTabOk = () => {
  //   setTabModalOpen(false)
  // }

  // const handleTabCancel = () => {
  //   form.resetFields()
  //   setTabModalOpen(false)
  // }
  // const showTab1Modal = () => {
  //   setTabModalOpen(true)
  // }

  // const handleTa1bOk = () => {
  //   setTabModalOpen(false)
  // }

  // const handleTab1Cancel = () => {
  //   form.resetFields()
  //   setTabModalOpen(false)
  // }

  const deleteData = async (element: any) => {
    try {
      const response = await axios.delete(`${ENP_URL}/AppraisalPerfTransactions/${element.id}`)
      // update the local state so that react can refecth and re-render the table with the new data
      const newData = gridData.filter((item: any) => item.id !== element.id)
      setGridData(newData)
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


  const { data: alEmployees } = useQuery('employees', fetchEmployees, { cacheTime: 5000 })
  const { data: allAppraisals } = useQuery('appraisals', fetchAppraisals, { cacheTime: 5000 })
  const { data: allPeriods } = useQuery('periods', fetchPeriods, { cacheTime: 5000 })
  const { data: allJobTitles } = useQuery('jobTitles', fetchJobTitles, { cacheTime: 5000 })
  // const { data: allRecuitments } = useQuery('recruitments', fetchRecruitmentTransactions, { cacheTime: 5000 })

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


  const columns: any = [
   
    {
      title: 'Employee ID',
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
      title: 'First Name',
      key: 'employeeId',
      render: (row: any) => {
        return getFirstName(row.employeeId)
      }, 
      sorter: (a: any, b: any) => {
        if (a.employeeId > b.employeeId) {
          return 1
        }
        if (b.employeeId > a.employeeId) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Surname',
    //   dataIndex: 'surname',
      key:"employeeId",
      render: (row: any) => {
        return getSurname(row?.employeeId)
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
      render: (row: any) => {
        return getDOB(row.employeeId)
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
      render: (row: any) => {
        return getGender(row.employeeId)
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
      title: 'Job Title',
      render: (row: any) => {
        return getJobTitle(row.employeeId)
      },
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
          {/* <a href='#' onClick={showShortModal} className='btn btn-light-primary btn-sm'>
            Shortlist
          </a> */}
          <a onClick={showUpdateModal} className='btn btn-light-primary btn-sm'>
            Update
          </a>
         
        </Space>
      ),
      
    },
  ]
  const columnTab1 = [
   
    {
      title: '#',
      dataIndex: 'key',
      sorter: (a: any, b: any) => {
        if (a.key > b.key) {
          return 1
        }
        if (b.key > a.key) {
          return -1
        }
        return 0
      },
    },
  ]
  const columnTab4 = [
   
    {
      title: '#',
      dataIndex: 'key',
      sorter: (a: any, b: any) => {
        if (a.key > b.key) {
          return 1
        }
        if (b.key > a.key) {
          return -1
        }
        return 0
      },
    },
  ]
  const columnTab2 = [
   
    {
      title: '#',
      dataIndex: 'key',
      sorter: (a: any, b: any) => {
        if (a.key > b.key) {
          return 1
        }
        if (b.key > a.key) {
          return -1
        }
        return 0
      },
    },
  ]
  const columnTab3 = [
   
    {
      title: '#',
      dataIndex: 'key',
      sorter: (a: any, b: any) => {
        if (a.key > b.key) {
          return 1
        }
        if (b.key > a.key) {
          return -1
        }
        return 0
      },
    },
  ]

  const loadData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/AppraisalPerfTransactions`)
      setGridData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  interface DataType {
    key: React.Key;
    fname:string, 
      sname:string; 
      dob:string; 
      gender:string;
      phone:string;
      qualification: string;
  }
  const  data: DataType[] = [

    {
      key:'001',
      fname:"Philip", 
      sname:"Aherto", 
      dob:"27-07-2000", 
      gender:"Male", 
      phone:"0249920482",
      qualification: "Senior Manager"
    },
    {
      key:'002',
      fname:"Kwame", 
      sname:"Kekeli", 
      dob:"27-07-2002", 
      gender:"Male", 
      phone:"0249560482",
      qualification: "Developer"
    },
    {
      key:'003',
      fname:"Nana", 
      sname:"Phils", 
      dob:"27-07-2006", 
      gender:"Male", 
      phone:"0249920122",
      qualification: "Accountant"
    }
  ];

  const onEmployeeChange = (objectId: any) => {
    const newEmplo = alEmployees?.data.find((item:any)=>{
      return item.id===parseInt(objectId)
    }) // console.log(newEmplo)
    setEmployeeRecord(newEmplo)
  }
  const dataByID:any = gridData.filter((refId:any) =>{
    return  refId.appraisalTypeId===parseInt(selectedValue)
    })
console.log(selectedValue)
console.log(dataByID)
  const getFirstName = (employeeId: any) => {
    let firstName = null
    alEmployees?.data.map((item: any) => {
      if (item.id === employeeId) {
        firstName=item.firstName
      }
    })
    return firstName
  } 
  const getSurname = (employeeId: any) => {
    let surname = null
    alEmployees?.data.map((item: any) => {
      if (item.id === employeeId) {
        surname=item.surname
      }
    })
    return surname
  } 
  const getID = (employeeId: any) => {
    let Id = null
    alEmployees?.data.map((item: any) => {
      if (item.id === employeeId) {
        Id=item.id
      }
    })
    return Id
  } 
  const getGender= (employeeId: any) => {
    let gender = null
    alEmployees?.data.map((item: any) => {
      if (item.id === employeeId) {
        gender=item.gender
      }
    })
    return gender
  } 
  const getDOB= (employeeId: any) => {
    let surname = ""
    alEmployees?.data.map((item: any) => {
      if (item.id === employeeId) {
        surname=item.dob
      }
    })
    return surname
  }

  const getJobTitle= (employeeId: any) => {
    let jobTitleId:any = null
    alEmployees?.data.map((item: any) => {
      if (item.id === employeeId) {
        jobTitleId=item.jobTitleId
      }
    })
    let jobTitleName = null
    allJobTitles?.data.map((item: any) => {
        if (item.id === jobTitleId) {
            jobTitleName=item.name
        }
    })
    return jobTitleName
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

  const globalSearch = () => {
    // @ts-ignore
    filteredData = dataWithVehicleNum.filter((value) => {
      return (
        value.name.toLowerCase().includes(searchText.toLowerCase())
      )
    })
    setGridData(filteredData)
  }

  const url1 = `${Api_Endpoint}/AppraisalPerfTransactions`
  const submitApplicant = handleSubmit(async (values) => {
    setLoading(true)
    const data = {
      // recruitmentTransactionId: parseInt(selectedValue),
      appraisalTypeId: parseInt(selectedValue),
      employeeId: employeeRecord.id,
      startPeriod: values.startPeriod,
      endPeriod: values.endPeriod,
      
    }
    console.log(data)
      try { 
        
          const response = await axios.post(url1, data)
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
    <form onSubmit={submitApplicant}>
      <div style={{padding: "20px 0px 0 0px"}} className='col-8 row mb-0'>
          <div className='col-4 mb-7'>
            <label htmlFor="exampleFormControlInput1" className=" form-label">Appraisal Type</label>
            <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)} className="form-select form-select-solid" aria-label="Select example">
              <option> select</option>
              {allAppraisals?.data.map((item: any) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className='col-4 mb-7'>
            <label htmlFor="exampleFormControlInput1" className=" form-label">Start Period</label>
            <select {...register("startPeriod")} className="form-select form-select-solid" aria-label="Select example">
              <option> select</option>
              {allPeriods?.data.map((item: any) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>

          <div className='col-4 mb-7'>
            <label htmlFor="exampleFormControlInput1" className=" form-label">End Period</label>
            <select {...register("endPeriod")} className="form-select form-select-solid" aria-label="Select example">
              <option> select</option>
              {allPeriods?.data.map((item: any) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>
        </div>
        
        </form>
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
          <Table columns={columns} key={dataByID.id} dataSource={dataByID} />
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
                  onClick={submitApplicant}
                  >
                      Submit
                  </Button>,
                ]}
            >
                <form onSubmit={submitApplicant}>
                    <hr></hr>
                    <div style={{padding: "20px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label ">Employee ID</label>
                      {/* <select className="form-select form-select-solid" aria-label="Select example" onChange={(e)=>onEmployeeChange(e)}>
                        <option> select</option>
                        
                        {gridData.map((item: any) => (
                          <option value={item.id}> {item.firstName} - {item.surname}</option>
                        ))}
                      </select> */}
                      <br></br>
                      <Select
                          // className="form-control form-control-solid"
                          {...register("employeeId")}
                          showSearch
                          placeholder="select a reference"
                          optionFilterProp="children"
                          style={{width:"300px"}}
                          value={employeeRecord.id}
                          onChange={(e)=>{
                            onEmployeeChange(e)
                          }}
                          
                        >
                          <option>select</option>
                          {alEmployees?.data.map((item: any) => (
                            <option key={item.id} value={item.id}>{item.firstName} - {item.surname}</option>
                          ))}
                        </Select>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Job Title</label>
                      <input type="text" name="code" value={employeeRecord?.jobt}  className="form-control form-control-solid"/>

                    </div>
                  </div>
                  <div style={{padding: "20px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                      <input type="text" {...register("firstName")}  defaultValue={employeeRecord?.firstName}  className="form-control form-control-solid"/>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="required form-label">Surname</label>
                      <input type="text" {...register("surname")}  defaultValue={employeeRecord?.surname}  className="form-control form-control-solid"/>
                    </div>
                  </div>
                  <div style={{padding: "20px 20px 10px 20px"}} className='row mb-7 '>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">DOB</label>
                      <input type="text" {...register("dob")}  defaultValue={employeeRecord?.dob}  className="form-control form-control-solid"/>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="required form-label">Gender</label>
                      <input type="text" {...register("gender")} defaultValue={employeeRecord?.gender}  className="form-control form-control-solid"/>

                    </div>
                  </div>
                
                </form>           
          </Modal>     
          <Modal
          title='Updating Employee...'
                open={updateModalOpen}
                onCancel={handleUpdateCancel}
                closable={true}
                width="900px"
                footer={[
                  <Button key='back' onClick={handleUpdateCancel}>
                      Cancel
                  </Button>,
                  <Button
                  key='submit'
                  type='primary'
                  htmlType='submit'
                  loading={submitLoading}
                  onClick={submitApplicant}
                  >
                      Done
                  </Button>,
                ]}
            >
                <form>
                    <hr></hr>
                 <div>
                  <div style={{display:"flex", }} className="tabs">
                    <div
                      className={`tab ${activeTab === "tab1" ? "active" : ""}`}
                      onClick={() => handleTabClick("tab1")}
                    >
                      Accomplishments
                    </div>

                    <div className={`tab ${activeTab === "tab2" ? "active" : ""}`}
                      onClick={() => handleTabClick("tab2")}
                    >
                      Areas of Improvements
                    </div>
                    <div
                      className={`tab ${activeTab === "tab3" ? "active" : ""}`}
                      onClick={() => handleTabClick("tab3")}
                    >
                      Goals for Performance
                    </div>
                    <div
                      className={`tab ${activeTab === "tab4" ? "active" : ""}`}
                      onClick={() => handleTabClick("tab4")}
                    >
                      Supporting Documentation
                    </div>
                  </div>
                  <div className="tab-content">
                    {activeTab === "tab1" && 
                    <div>
                      <button type='button' className='btn btn-primary me-3 mb-7' onClick={showTabModal}>
                      <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                      Add
                    </button>
                      <Table columns={columnTab1}  />
                      
                    </div>}
                    
                    {activeTab === "tab2" && 
                    <div>
                      <button type='button' className='btn btn-primary me-3 mb-7' onClick={showTabModal}>
                      <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                      Add
                    </button>
                      <Table columns={columnTab1}  />
                    </div>}

                    {activeTab === "tab3" && 
                    <div>
                      <button type='button' className='btn btn-primary me-3 mb-7' onClick={showTabModal}>
                      <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                      Add
                    </button>
                      <Table columns={columnTab1}  />
                    </div>}

                    {activeTab === "tab4" && 
                    <div>
                      <button type='button' className='btn btn-primary me-3 mb-7'>
                      <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                      Add
                    </button>
                      <Table columns={columnTab1}  />
                    </div>}
                  </div>
                </div>
                </form>
          </Modal>
        </div>
      </KTCardBody>
    </div>
  )
}

export {AppraisalPerformance}


