

import {Button, Form, Input, InputNumber, Upload,Modal, Space, Table, Radio, RadioChangeEvent} from 'antd'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {KTCardBody, KTSVG} from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { UploadOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table'
import { employeedata, JOBTITLE } from '../../../../../data/DummyData'

const CompensationBenefit = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const [form] = Form.useForm()
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isShortModalOpen, setIsShortModalOpen] = useState(false)
  const [radioValue, setRadioValue] = useState();
  const [radio1Value, setRadio1Value] = useState();
  const [radio2Value, setRadio2Value] = useState();
  const [radio3Value, setRadio3Value] = useState();
  const [radio4Value, setRadio4Value] = useState();
  const [radio5Value, setRadio5Value] = useState();
  const [radio6Value, setRadio6Value] = useState();
  const [employeeRecord, setEmployeeRecord]= useState<any>([])

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    form.resetFields()
    setIsModalOpen(false)
    setEmployeeRecord(null)
  }
  // const showShortModal = () => {
  //   setIsShortModalOpen(true)
  // }

  // const handleShortOk = () => {
  //   setIsShortModalOpen(false)
  // }

  // const handleShortCancel = () => {
  //   form.resetFields()
    
  //   setIsShortModalOpen(false)
  // }

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
  const onRadio5Change = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setRadio5Value(e.target.value);
  };
  const onRadio6Change = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setRadio6Value(e.target.value);
  };

  function handleDelete(element: any) {
    deleteData(element)
  }

  const columns: any = [
   
    {
      title: 'Employee ID',
      dataIndex: 'empcode',
      sorter: (a: any, b: any) => {
        if (a.empl_code > b.empl_code) {
          return 1
        }
        if (b.empl_code > a.empl_code) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'First Name',
      dataIndex: 'firstname',
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
      dataIndex: 'lastname',
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
      dataIndex: 'dob',
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
      dataIndex: 'sex',
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
      dataIndex: 'phone',
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
      dataIndex: 'unit',
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

  const COMPENSATIONANDBENEFITS=[
     
    {
     empl_code: "001",
     unit: "manager",
     fname: "MICHAEL ",
     lname: "ANANI",
     dob: "12\/07\/1990",
     gender: "MALE",
     qyt: "YES",
     wkskills: "YES ",
     exp: "YES",
     ref: "NO",
     socskill: "YES"
    },
    {
     empl_code: "002",
     unit: "junior staff",
     fname: "FRANCIS",
     lname: "OFOSU",
     dob: "07\/11\/1989",
     gender: "MALE",
     qyt: "YES",
     wkskills: "YES ",
     exp: "NO",
     ref: "YES",
     socskill: "YES"
    },
    {
     empl_code: "003",
     unit: "senior staff",
     fname: "MABEL",
     lname: "KOFFIE",
     dob: "11\/11\/1993",
     gender: "FEMALE",
     qyt: "YES",
     wkskills: "YES ",
     exp: "YES",
     ref: "YES",
     phone:"0249923582",
     socskill: "YES"
    },
    {
     empl_code: "004",
     unit: "junior staff",
     fname: "FRANK",
     lname: "KORAMKYI",
     dob: "29\/06\/1991",
     gender: "MALE",
     qyt: "YES",
     wkskills: "NO",
     exp: "YES",
     phone:"0249920434",
     ref: "YES",
     socskill: "NO"
    },
    {
     empl_code: "005",
     unit: "manager",
     fname: "MARY",
     lname: "BROWN",
     dob: "13\/01\/1985",
     gender: "FEMALE",
     qyt: "YES",
     wkskills: "YES ",
     exp: "YES",
     phone:"0249926782",
     ref: "YES",
     socskill: "YES"
    },
    {
     empl_code: "006",
     unit: "senior staff",
     fname: "KEZIAH",
     lname: "DOE",
     dob: "09\/12\/1992",
     gender: "FEMALE",
     qyt: "YES",
     wkskills: "YES ",
     phone:"0249660482",
     exp: "YES",
     ref: "YES",
     socskill: "YES"
    },
    {
     empl_code: "007",
     unit: "manager",
     fname: "COMFORT",
     lname: "BLESSING",
     dob: "15\/09\/1985",
     gender: "FEMALE",
     qyt: "YES",
     wkskills: "YES ",
     phone:"0243420482",
     exp: "YES",
     ref: "YES"
    },
    {
     empl_code: "008",
     unit: "junior staff",
     fname: "ESTHER",
     lname: "ADJEI",
     dob: "19\/02\/1983",
     gender: "FEMALE",
     qyt: "YES",
     wkskills: "YES ",
     phone:"0249920482",
     exp: "YES",
     ref: "YES",
     socskill: "YES"
    }
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




  const onEmployeeChange = (e: any) => {
    const objectId = e.target.value 
    const newEmplo = employeedata.find((item:any)=>{
      return item.code.toString()===objectId
    })
  setEmployeeRecord(newEmplo)
    
  }


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

  // console.log(employeeRecord)

  // const found = employeedata.find(obj => {
  //   return obj.code === 3;
  // });


  // console.log(found)

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
            <label htmlFor="exampleFormControlInput1" className=" form-label">Job Title</label>
            <select className="form-select form-select-solid" aria-label="Select example">
              <option> select</option>
              {JOBTITLE.map((item: any) => (
                <option value={item.code}>{item.desc}</option>
              ))}
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
          <Table columns={columns} dataSource={employeedata} />
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
                <form >
                    <hr></hr>
                    <div style={{padding: "20px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Employee ID</label>
                      <select className="form-select form-select-solid" aria-label="Select example" 
                      onChange={(e)=>onEmployeeChange(e)}>
                        <option>select</option>
                        {employeedata.map((item: any) => (
                          <option value={item.code}> {item.empcode} - {item.lastname}</option>
                        ))}
                      </select>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Unit</label>
                      <input type="text" name="unit" value={employeeRecord?.unit} className="form-control form-control-solid"/>

              
                    </div>
                  </div>
                  <div style={{padding: "20px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                      <input type="text" name="firstname" value={employeeRecord?.firstname}  className="form-control form-control-solid"/>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="required form-label">Last Name</label>
                      <input type="text" name="lastname" value={employeeRecord?.lastname}   className="form-control form-control-solid"/>
                    </div>
                  </div>
                  <div style={{padding: "20px 20px 10px 20px"}} className='row mb-7 '>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">DOB</label>
                      <input type="text" name="dob" value={employeeRecord?.dob}    className="form-control form-control-solid"/>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="required form-label">Gender</label>
                      <input type="text" name="sex" value={employeeRecord?.sex}   className="form-control form-control-solid"/>

                     
                    </div>
                  </div>
                  <hr></hr>
                  <div style={{padding: "20px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-3'>
                      <label style={{padding: "0px 30px 0 0px"}} htmlFor="exampleFormControlInput1" className=" form-label">Basic Salary</label>
                        <Radio.Group onChange={onRadioChange} value={radioValue}>
                          <Radio value={1}>Yes</Radio>
                          <Radio value={2}>No</Radio>
                        </Radio.Group>
                      <textarea style={{margin: "10px 0px 0 0px"}} className="form-control form-control-solid" placeholder='comments on basic salary (optional)' aria-label="With textarea"></textarea>
                    </div>
                    <div className='col-6 mb-3'>
                      <label style={{padding: "0px 40px 0 0px"}} htmlFor="exampleFormControlInput1" className=" form-label">Allowance</label>
                      <Radio.Group onChange={onRadio1Change} value={radio1Value}>
                        <Radio value={1}>Yes</Radio>
                        <Radio value={2}>No</Radio>
                        
                      </Radio.Group>
                      <textarea style={{margin: "10px 0px 0 0px"}} className="form-control form-control-solid" placeholder='comments on allowance (optional)' aria-label="With textarea"></textarea>
                    </div>
                  </div>
                  <div style={{padding: "20px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-3'>
                      <label style={{padding: "0px 36px 0 0px"}} htmlFor="exampleFormControlInput1" className=" form-label">Bonus </label>
                      <Radio.Group onChange={onRadio2Change} value={radio2Value}>
                        <Radio value={1}>Yes</Radio>
                        <Radio value={2}>No</Radio>
                        
                      </Radio.Group>
                      <textarea style={{margin: "10px 0px 0 0px"}} className="form-control form-control-solid" placeholder='comments on bonus (optional)' aria-label="With textarea"></textarea>
                    </div>
                    <div className='col-6 mb-3'>
                      <label style={{padding: "0px 48px 0 0px"}} htmlFor="exampleFormControlInput1" className=" form-label">Health Insurance</label>
                      <Radio.Group onChange={onRadio3Change} value={radio3Value}>
                        <Radio value={1}>Yes</Radio>
                        <Radio value={2}>No</Radio>
                        
                      </Radio.Group>
                      <textarea style={{margin: "10px 0px 0 0px"}} className="form-control form-control-solid" placeholder='comments on health insurance (optional)' aria-label="With textarea"></textarea>
                    </div>
                  </div>
                  <div style={{padding: "20px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-3'>
                       <label style={{padding: "0px 39px 0 0px"}} htmlFor="exampleFormControlInput1" className=" form-label">Saving Scheme</label>
                      <Radio.Group onChange={onRadio4Change} value={radio4Value}>
                        <Radio value={1}>Yes</Radio>
                        <Radio value={2}>No</Radio>
                        
                      </Radio.Group>
                      <textarea style={{margin: "10px 0px 0 0px"}} className="form-control form-control-solid" placeholder='comments on saving scheme (optional)' aria-label="With textarea"></textarea>
                    </div>
                    <div className='col-6 mb-3'>
                      <label style={{padding: "0px 39px 0 0px"}} htmlFor="exampleFormControlInput1" className=" form-label">Professional Development </label>
                      <Radio.Group onChange={onRadio5Change} value={radio5Value}>
                        <Radio value={1}>Yes</Radio>
                        <Radio value={2}>No</Radio>
                        
                      </Radio.Group>
                      <textarea style={{margin: "10px 0px 0 0px"}} className="form-control form-control-solid" placeholder='comments on professional development (optional)' aria-label="With textarea"></textarea>
                    </div>
                  </div>
                  <div style={{padding: "20px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-3'>
                    <label style={{padding: "0px 39px 0 0px"}} htmlFor="exampleFormControlInput1" className=" form-label">Company Property</label>
                      <Radio.Group onChange={onRadio6Change} value={radio6Value}>
                        <Radio value={1}>Yes</Radio>
                        <Radio value={2}>No</Radio>
                        
                      </Radio.Group>
                      <textarea style={{margin: "10px 0px 0 0px"}} className="form-control form-control-solid" placeholder='comments on company property (optional)' aria-label="With textarea"></textarea>
                    </div>
                    
                  </div>
                  
                </form>
          </Modal>

          
        </div>
      </KTCardBody>
    </div>
  )
}

export {CompensationBenefit}

