

import {Button, Form, Input, InputNumber, Upload,Modal, Space, Table, Radio, RadioChangeEvent, Select} from 'antd'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {KTCardBody, KTSVG} from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { UploadOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table'
import { employeedata, JOBTITLE } from '../../../../../data/DummyData'
import { useQuery } from 'react-query'
import { Api_Endpoint, fetchEmployees, fetchGradePerks, fetchGrades, fetchJobTitles, fetchMedicals, fetchPaygroups, fetchPeriods, fetchPerks, fetchUnits } from '../../../../../services/ApiCalls'
import { useForm } from 'react-hook-form'

const CompensationBenefit = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isShortModalOpen, setIsShortModalOpen] = useState(false)
  const [basicSalary, setRadioValue] = useState("");
  const [allowanceValue, setAllowanceValue] = useState("");
  const [bonusValue, setBonusValue] = useState("");
  const [healthInsurenaceValue, setHealthInsurenaceValue] = useState("");
  const [savingSchemeValue, setSavingSchemeValue] = useState("");
  const [profDevelopValue, setProfDevelopValue] = useState("");
  const [unitName, setunitName] = useState("");
  const [companyPropertyValue, setCompanyPropertyValue] = useState("");
  const [employeeRecord, setEmployeeRecord]= useState<any>(null)
  const [selectedValue1, setSelectedValue1] = useState<any>(null);
  const [selectedValue2, setSelectedValue2] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("tab1");

  const {register, reset, handleSubmit} = useForm()
  const showModal = () => {
    setIsModalOpen(true)
  }
  
  const handleTabClick = (tab:any) => {
    setActiveTab(tab);
  };

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
   reset()
    setIsModalOpen(false)
    setEmployeeRecord(null)
  }

  const deleteData = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/CompensationBenefitTransactions/${element.id}`)
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

  const onBasicSalryChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setRadioValue(e.target.value);
  };
  const onAllowanceChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setAllowanceValue(e.target.value);
  };
  const onBonusChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setBonusValue(e.target.value);
  };
  const onHealthInsurenaceChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setHealthInsurenaceValue(e.target.value);
  };
  const onSavingSchemeChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setSavingSchemeValue(e.target.value);
  };
  const onProfDevelopChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setProfDevelopValue(e.target.value);
  };
  const onCompanyPropertyChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setCompanyPropertyValue(e.target.value);
  };

  function handleDelete(element: any) {
    deleteData(element)
  }

  const columns: any = [
   
    // {
    //   title: 'Employee ID',
    //   render: (row: any) => {
    //     return getID(row.employeeId)
    //   },
    //   sorter: (a: any, b: any) => {
    //     if (a.empl_code > b.empl_code) {
    //       return 1
    //     }
    //     if (b.empl_code > a.empl_code) {
    //       return -1
    //     }
    //     return 0
    //   },
    // },
    {
      title: 'First Name',
      render: (row: any) => {
        return getFirstName(row.employeeId)
      }, 
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
      title: 'Last Name',
      render: (row: any) => {
        return getSurname(row.employeeId)
      }, 
      sorter: (a: any, b: any) => {
        if (a.lname > b.lname) {
          return 1
        }
        if (b.lname > a.lname) {
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
      title: 'Gender',
      render: (row: any) => {
        return getGender(row.employeeId)
      }, 
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
      title: 'Phone Number',
      render: (row: any) => {
        return getPhone(row.employeeId)
      }, 
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
      title: 'Unit',
      render: (row: any) => {
        return getUnit(row.employeeId)
      }, 
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
      title: 'Action',
      fixed: 'right',
      width: 100,
      render: (_: any, record: any) => (
        <Space size='middle'>
          {/* <a href='#' onClick={showShortModal} className='btn btn-light-primary btn-sm'>
            Shortlist
          </a> */}
          <a  className='btn btn-light-primary btn-sm'>
            Update
          </a>
         
        </Space>
      ),
      
    },
  ]

  const loadData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/CompensationBenefitTransactions`)
      setGridData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const { data: allJobTitles } = useQuery('jobTitles', fetchJobTitles, { cacheTime: 5000 })
  const { data: allEmployees } = useQuery('employees', fetchEmployees, { cacheTime: 5000 })
  const { data: allUnits } = useQuery('units', fetchUnits, { cacheTime: 5000 })
  const {data: allGradePerks} = useQuery('gradePerks', fetchGradePerks, {cacheTime:5000})
  // const {data:allMedicals} = useQuery('medicals', fetchMedicals, {cacheTime:5000})
  const { data: allPerks } = useQuery('perks', fetchPerks, { cacheTime: 5000 })
  const { data: allPaygroups } = useQuery('paygroup', fetchPaygroups, { cacheTime: 5000 })

  const getFirstName = (employeeId: any) => {
    let firstName = null
    allEmployees?.data.map((item: any) => {
      if (item.id === employeeId) {
        firstName=item.firstName
      }
    })
    return firstName
  } 
  const getSurname = (employeeId: any) => {
    let surname = null
    allEmployees?.data.map((item: any) => {
      if (item.id === employeeId) {
        surname=item.surname
      }
    })
    return surname
  } 
  const getPerkName = (perkId: any) => {
    let pName = null
    allPerks?.data.map((item: any) => {
      if (item.id === perkId) {
        pName=item.name
      }
    })
    return pName
  } 
  const getGender= (employeeId: any) => {
    let gender = null
    allEmployees?.data.map((item: any) => {
      if (item.id === employeeId) {
        gender=item.gender
      }
    })
    return gender
  } 
  const getDOB= (employeeId: any) => {
    let surname = ""
    allEmployees?.data.map((item: any) => {
      if (item.id === employeeId) {
        surname=item.dob
      }
    })
    return surname
  }
  const getPhone= (employeeId: any) => {
    let surname = ""
    allEmployees?.data.map((item: any) => {
      if (item.id === employeeId) {
        surname=item.phone
      }
    })
    return surname
  }

  const getUnit= (employeeId: any) => {
    let unitId:any = null
    allEmployees?.data.map((item: any) => {
      if (item.id === employeeId) {
        unitId=item.unitId
      }
    })
    let unitName = null
    allUnits?.data.map((item: any) => {
        if (item.id === unitId) {
            unitName=item.name
        }
    })
    return unitName
  } 

  const onEmployeeChange = (objectId: any) => {
    const newEmplo = allEmployees?.data.find((item:any)=>{
      return item.id===parseInt(objectId)
    }) // console.log(newEmplo)
    setEmployeeRecord(newEmplo)
  }

  const emplyeesByPaygroup:any = allEmployees?.data.filter((item:any) =>{
    return  item.paygroupId===parseInt(selectedValue1)
    })

const allPerkByGrade:any = allGradePerks?.data.filter((item:any) =>{
  return item.gradeId===employeeRecord?.gradeId
})


  useEffect(() => {
    const getUnitName = () => {
      let unitName = ""
      allUnits?.data.map((item: any) => {
        if (item.id === employeeRecord?.unitId) {
          unitName=item.name
        }
      })
      setunitName(unitName)
      return unitName
    } 
    getUnitName()
    loadData()
  }, [allUnits?.data, employeeRecord?.unitId])

  const dataByID:any = gridData.filter((refId:any) =>{

    return  (refId.paygroupId===parseInt(selectedValue1))&&(refId.jobTitleId===parseInt(selectedValue2))
 })

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

  const url1 = `${Api_Endpoint}/CompensationBenefitTransactions`
  const submitCompensation = handleSubmit(async (values) => {
    setLoading(true)
    const data = {
      paygroupId: parseInt(selectedValue1),
      jobTitleId: parseInt(selectedValue2),
      employeeId: employeeRecord.id,
      basicSalary: basicSalary,
      basicSalaryComment: values.basicSalaryComment,
      allowance: allowanceValue,
      allowanceComment: values.allowanceComment,
      bonus: bonusValue,
      bonusComment: values.bonusComment,
      savingScheme: savingSchemeValue,
      savingSchemeComment: values.savingSchemeComment,
      companyProperty: companyPropertyValue,
      companyPropertyComment: values.companyPropertyComment,
      healthInsurance: healthInsurenaceValue,
      healthInsuranceComment: values.healthInsuranceComment,
      profDevelopment: profDevelopValue,
      profDevelopmentComment: values.profDevelopmentComment,
      
    }
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

      <div style={{padding: "0px 0px 40px 0px"}}  className='col-12'>
        <div style={{padding: "20px 0px 0 0px"}} className='col-6 row mb-0'>
        <div className='col-6 mb-7'>
            <label htmlFor="exampleFormControlInput1" className=" form-label">Paygroup</label>
            <select value={selectedValue1} onChange={(e) => setSelectedValue1(e.target.value)} className="form-select form-select-solid" aria-label="Select example">
              <option value="select paygroup" style={{color:"GrayText"}}> Select paygroup</option>
              {allPaygroups?.data.map((item: any) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className='col-6 mb-7'>
            <label htmlFor="exampleFormControlInput1" className=" form-label">Job Title</label>
            <select value={selectedValue2} onChange={(e) => setSelectedValue2(e.target.value)} className="form-select form-select-solid" aria-label="Select example">
              <option value="select jobtitle">Select jobtitle</option>
              {allJobTitles?.data.map((item: any) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>

        </div>
      </div>
      {
        selectedValue1===null||selectedValue2===null||selectedValue1==="select paygroup"||selectedValue2==="select jobtitle"?"":
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
          <Table columns={columns} key={dataByID.id} dataSource={dataByID} loading={loading} />
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
                  onClick={submitCompensation}
                  >
                      Submit
                  </Button>,
                ]}
            >
                <form onSubmit={submitCompensation} >
                    <hr></hr>
                    <div style={{padding: "20px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Employee ID</label>
                      <br></br>
                      <Select
                          
                          {...register("employeeId")}
                          showSearch
                          placeholder="select a employeeId"
                          optionFilterProp="children"
                          style={{width:"300px"}}
                          value={employeeRecord?.id}
                          onChange={(e)=>{
                            onEmployeeChange(e)
                          }}
                        >
                          <option>select</option>
                          {emplyeesByPaygroup.map((item: any) => (
                            <option key={item.id} value={item.id}>{item.employeeId} - {item.firstName} - {item.surname}</option>
                          ))}
                        </Select>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Unit</label>
                      <input type="text" name="unitId" value={unitName} readOnly className="form-control form-control-solid"/>

              
                    </div>
                  </div>
                  <div style={{padding: "20px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                      <input type="text" name="firstName" value={employeeRecord?.firstName} readOnly  className="form-control form-control-solid"/>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className=" form-label">Surname</label>
                      <input type="text" name="surname" value={employeeRecord?.surname} readOnly  className="form-control form-control-solid"/>
                    </div>
                  </div>
                  <div style={{padding: "20px 20px 10px 20px"}} className='row mb-7 '>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">DOB</label>
                      <input type="text" name="dob" value={employeeRecord?.dob}  readOnly  className="form-control form-control-solid"/>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className=" form-label">Gender</label>
                      <input type="text" name="gender" value={employeeRecord?.gender} readOnly  className="form-control form-control-solid"/>
                    </div>
                  </div>
                  <hr></hr>
                  {/* <div>
                    <div style={{display:"flex", }} className="tabs">
                      <div
                        className={`tab ${activeTab === "tab1" ? "active" : ""}`}
                        onClick={() => handleTabClick("tab1")}
                      >
                        Bsc Salary
                      </div>

                      <div className={`tab ${activeTab === "tab2" ? "active" : ""}`}
                        onClick={() => handleTabClick("tab2")}
                      >
                        Allowance
                      </div>
                      <div
                        className={`tab ${activeTab === "tab3" ? "active" : ""}`}
                        onClick={() => handleTabClick("tab3")}
                      >
                        Bonus
                      </div>
                      <div
                        className={`tab ${activeTab === "tab4" ? "active" : ""}`}
                        onClick={() => handleTabClick("tab4")}
                      >
                        Health Insur.
                      </div>
                      <div
                        className={`tab ${activeTab === "tab5" ? "active" : ""}`}
                        onClick={() => handleTabClick("tab5")}
                      >
                        Sav. Sch
                      </div>
                      <div
                        className={`tab ${activeTab === "tab6" ? "active" : ""}`}
                        onClick={() => handleTabClick("tab6")}
                      >
                        Prof. Dev
                      </div>
                      <div
                        className={`tab ${activeTab === "tab7" ? "active" : ""}`}
                        onClick={() => handleTabClick("tab7")}
                      >
                        Comp. Property
                      </div>
                    </div>
                    <div className="tab-content">
                      {activeTab === "tab1" && 
                      <div>
                        <div className='col-12 mb-3'>
                          <label style={{padding: "0px 30px 0 0px"}} htmlFor="exampleFormControlInput1" className=" form-label">Basic Salary</label>
                          <Radio.Group {...register("basicSalary")} onChange={onBasicSalryChange} value={basicSalary}>
                            <Radio value="Yes">Yes</Radio>
                            <Radio value="No">No</Radio>
                          </Radio.Group>
                          <textarea style={{margin: "10px 0px 0 0px"}} {...register("basicSalaryComment")} className="form-control form-control-solid" placeholder='comments on basic salary (optional)' aria-label="With textarea"></textarea>
                        </div>
                        
                      </div>}
                      
                      {activeTab === "tab2" && 
                      <div>
                        <div className='col-12 mb-3'>
                          <label style={{padding: "0px 40px 0 0px"}} htmlFor="exampleFormControlInput1" className=" form-label">Allowance</label>
                          <Radio.Group onChange={onAllowanceChange} value={allowanceValue}>
                            <Radio value="Yes">Yes</Radio>
                            <Radio value="No">No</Radio>
                          </Radio.Group>
                          <textarea style={{margin: "10px 0px 0 0px"}} {...register("allowanceComment")} className="form-control form-control-solid" placeholder='comments on allowance (optional)' aria-label="With textarea"></textarea>
                        </div>
                      </div>}

                      {activeTab === "tab3" && 
                      <div>
                        <div className='col-12 mb-3'>
                          <label style={{padding: "0px 36px 0 0px"}} htmlFor="exampleFormControlInput1" className=" form-label">Bonus </label>
                          <Radio.Group onChange={onBonusChange} value={bonusValue}>
                            <Radio value="Yes">Yes</Radio>
                            <Radio value="No">No</Radio>
                          </Radio.Group>
                          <textarea style={{margin: "10px 0px 0 0px"}} {...register("bonusComment")} className="form-control form-control-solid" placeholder='comments on bonus (optional)' aria-label="With textarea"></textarea>
                        </div>
                      </div>}

                      {activeTab === "tab4" && 
                      <div>
                        <div className='col-12 mb-3'>
                        <label style={{padding: "0px 48px 0 0px"}} htmlFor="exampleFormControlInput1" className=" form-label">Health Insurance</label>
                        <Radio.Group onChange={onHealthInsurenaceChange} value={healthInsurenaceValue}>
                          <Radio value="Yes">Yes</Radio>
                          <Radio value="No">No</Radio>
                        </Radio.Group>
                        <textarea style={{margin: "10px 0px 0 0px"}} {...register("healthInsuranceComment")} className="form-control form-control-solid" placeholder='comments on health insurance (optional)' aria-label="With textarea"></textarea>
                        
                        </div>
                      </div>}

                      {activeTab === "tab5" && 
                      <div>
                        <div className='col-12 mb-3'>
                          <label style={{padding: "0px 39px 0 0px"}} htmlFor="exampleFormControlInput1" className=" form-label">Saving Scheme</label>
                          <Radio.Group onChange={onSavingSchemeChange} value={savingSchemeValue}>
                            <Radio value="Yes">Yes</Radio>
                            <Radio value="No">No</Radio>
                          </Radio.Group>
                          <textarea style={{margin: "10px 0px 0 0px"}} {...register("savingSchemeComment")} className="form-control form-control-solid" placeholder='comments on saving scheme (optional)' aria-label="With textarea"></textarea>
                        
                        </div>
                      </div>}
                      {activeTab === "tab6" && 
                      <div>
                        <div className='col-12 mb-3'>
                          <label style={{padding: "0px 39px 0 0px"}} htmlFor="exampleFormControlInput1" className=" form-label">Professional Development </label>
                          <Radio.Group onChange={onProfDevelopChange} value={profDevelopValue}>
                            <Radio value="Yes">Yes</Radio>
                            <Radio value="No">No</Radio>
                          </Radio.Group>
                          <textarea style={{margin: "10px 0px 0 0px"}} {...register("profDevelopmentComment")} className="form-control form-control-solid" placeholder='comments on professional development (optional)' aria-label="With textarea"></textarea>
                        
                        </div>
                      </div>}
                      {activeTab === "tab7" && 
                      <div>
                        <div className='col-12 mb-3'>
                          <label style={{padding: "0px 39px 0 0px"}} htmlFor="exampleFormControlInput1" className=" form-label">Company Property</label>
                          <Radio.Group onChange={onCompanyPropertyChange} value={companyPropertyValue}>
                            <Radio value="Yes">Yes</Radio>
                            <Radio value="No">No</Radio>
                          </Radio.Group>
                          <textarea style={{margin: "10px 0px 0 0px"}} {...register("companyPropertyComment")} className="form-control form-control-solid" placeholder='comments on company property (optional)' aria-label="With textarea"></textarea>
                        
                        </div>
                      </div>}
                    </div>
                  </div> */}
                  
                  <div style={{padding: "20px 20px 0 20px"}} className='row mb-0 '>
                    
                  {
                    allPerkByGrade.length===0?
                    <div d-flex justify-content-center>
                      <h2>No perk data to display </h2>
                    </div>:

                    allPerkByGrade.map((pek:any)=>(
                      <>

                      <div className='col-6 mb-3'>
                        
                        <label style={{padding: "0px 30px 0 0px"}} htmlFor="exampleFormControlInput1" className=" form-label">{getPerkName(pek.perkId)}</label>
                          <Radio.Group {...register("basicSalary")} >
                            <Radio value="Yes">Yes</Radio>
                            <Radio value="No">No</Radio>
                          </Radio.Group>
                        <textarea style={{margin: "10px 0px 0 0px"}} {...register("basicSalaryComment")} className="form-control form-control-solid" placeholder='comments on basic salary (optional)' aria-label="With textarea"></textarea>
                      </div>
                      </>
                      // <h3>{getPerkName(pek.perkId)}</h3>
                    ))
                  }
                    
                    
                  </div>
                  {/* <div style={{padding: "20px 20px 0 20px"}} className='row mb-0 '>
                   
                    <div className='col-6 mb-3'>
                      
                      <label style={{padding: "0px 30px 0 0px"}} htmlFor="exampleFormControlInput1" className=" form-label">Basic Salary</label>
                        <Radio.Group {...register("basicSalary")} onChange={onBasicSalryChange} value={basicSalary}>
                          <Radio value="Yes">Yes</Radio>
                          <Radio value="No">No</Radio>
                        </Radio.Group>
                      <textarea style={{margin: "10px 0px 0 0px"}} {...register("basicSalaryComment")} className="form-control form-control-solid" placeholder='comments on basic salary (optional)' aria-label="With textarea"></textarea>
                    </div>
                    <div className='col-6 mb-3'>
                      <label style={{padding: "0px 40px 0 0px"}} htmlFor="exampleFormControlInput1" className=" form-label">Allowance</label>
                      <Radio.Group onChange={onAllowanceChange} value={allowanceValue}>
                        <Radio value="Yes">Yes</Radio>
                        <Radio value="No">No</Radio>
                      </Radio.Group>
                      <textarea style={{margin: "10px 0px 0 0px"}} {...register("allowanceComment")} className="form-control form-control-solid" placeholder='comments on allowance (optional)' aria-label="With textarea"></textarea>
                    </div>
                  </div> */}
                  {/* <div style={{padding: "20px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-3'>
                      <label style={{padding: "0px 36px 0 0px"}} htmlFor="exampleFormControlInput1" className=" form-label">Bonus </label>
                      <Radio.Group onChange={onBonusChange} value={bonusValue}>
                        <Radio value="Yes">Yes</Radio>
                        <Radio value="No">No</Radio>
                      </Radio.Group>
                      <textarea style={{margin: "10px 0px 0 0px"}} {...register("bonusComment")} className="form-control form-control-solid" placeholder='comments on bonus (optional)' aria-label="With textarea"></textarea>
                    </div>
                    <div className='col-6 mb-3'>
                      <label style={{padding: "0px 48px 0 0px"}} htmlFor="exampleFormControlInput1" className=" form-label">Health Insurance</label>
                      <Radio.Group onChange={onHealthInsurenaceChange} value={healthInsurenaceValue}>
                        <Radio value="Yes">Yes</Radio>
                        <Radio value="No">No</Radio>
                      </Radio.Group>
                      <textarea style={{margin: "10px 0px 0 0px"}} {...register("healthInsuranceComment")} className="form-control form-control-solid" placeholder='comments on health insurance (optional)' aria-label="With textarea"></textarea>
                    </div>
                  </div>
                  <div style={{padding: "20px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-3'>
                      <label style={{padding: "0px 39px 0 0px"}} htmlFor="exampleFormControlInput1" className=" form-label">Saving Scheme</label>
                      <Radio.Group onChange={onSavingSchemeChange} value={savingSchemeValue}>
                        <Radio value="Yes">Yes</Radio>
                        <Radio value="No">No</Radio>
                      </Radio.Group>
                      <textarea style={{margin: "10px 0px 0 0px"}} {...register("savingSchemeComment")} className="form-control form-control-solid" placeholder='comments on saving scheme (optional)' aria-label="With textarea"></textarea>
                    </div>
                    <div className='col-6 mb-3'>
                      <label style={{padding: "0px 39px 0 0px"}} htmlFor="exampleFormControlInput1" className=" form-label">Professional Development </label>
                      <Radio.Group onChange={onProfDevelopChange} value={profDevelopValue}>
                        <Radio value="Yes">Yes</Radio>
                        <Radio value="No">No</Radio>
                      </Radio.Group>
                      <textarea style={{margin: "10px 0px 0 0px"}} {...register("profDevelopmentComment")} className="form-control form-control-solid" placeholder='comments on professional development (optional)' aria-label="With textarea"></textarea>
                    </div>
                  </div>
                  <div style={{padding: "20px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-3'>
                    <label style={{padding: "0px 39px 0 0px"}} htmlFor="exampleFormControlInput1" className=" form-label">Company Property</label>
                      <Radio.Group onChange={onCompanyPropertyChange} value={companyPropertyValue}>
                        <Radio value="Yes">Yes</Radio>
                        <Radio value="No">No</Radio>
                      </Radio.Group>
                      <textarea style={{margin: "10px 0px 0 0px"}} {...register("companyPropertyComment")} className="form-control form-control-solid" placeholder='comments on company property (optional)' aria-label="With textarea"></textarea>
                    </div>
                  </div> */}
                  
                </form>
          </Modal>

          
        </div>
      </KTCardBody>
      }
      
    </div>
  )
}

export {CompensationBenefit}

