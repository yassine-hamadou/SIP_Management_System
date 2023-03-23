import {Button, Form, Input, InputNumber, Modal, Select, Space, Table, Upload} from 'antd'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {KTCardBody, KTSVG} from '../../../../../../_metronic/helpers'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { UploadOutlined } from '@ant-design/icons';
import { employeedata, MEDICALS, period } from '../../../../../data/DummyData'
import { useForm } from 'react-hook-form'
import {  Api_Endpoint, fetchEmployees, fetchMedicals, fetchPaygroups, fetchPeriods } from '../../../../../services/ApiCalls'
import { useQuery } from 'react-query'
import React from 'react';

const MedicalEntries = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const [selectedValue1, setSelectedValue1] = useState<any>(null);
  const [selectedValue2, setSelectedValue2] = useState<any>(null);
  const [employeeRecord, setEmployeeRecord]= useState<any>([])
  const {register, reset, handleSubmit} = useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleFileSelection = (event:any) => {
    setSelectedFile(event.target.files[0]);
  };

  const [selectedFile, setSelectedFile] = useState<any>(null);
  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const [fileList, setFileList] = useState<UploadFile[]>([
    
  ]);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const {data:allEmployee} = useQuery('employee', fetchEmployees, {cacheTime:5000})
  const {data:allMedicals} = useQuery('medicals', fetchMedicals, {cacheTime:5000})
  const { data: allPeriods } = useQuery('periods', fetchPeriods, { cacheTime: 5000 })
  const { data: allPaygroups } = useQuery('paygroup', fetchPaygroups, { cacheTime: 5000 })

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


  const handleCancel = () => {
    reset()
    setIsModalOpen(false)
  }

  const deleteData = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/MedicalTransactions/${element.id}`)
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
      key: 'employeeId',
      render: (row: any) => {
        return getEmployeeName(row.employeeId)
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
      title: 'Medical Type',
      key:'medicalTypeId',
      render: (row: any) => {
        return getMedicalName(row.medicalTypeId)
      },
      sorter: (a: any, b: any) => {
        if (a.medicalTypeId > b.medicalTypeId) {
          return 1
        }
        if (b.medicalTypeId > a.medicalTypeId) {
          return -1
        }
        return 0
      },
    },
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
      title: 'Comments',
      dataIndex: 'comment',
      sorter: (a: any, b: any) => {
        if (a.comment > b.comment) {
          return 1
        }
        if (b.comment > a.comment) {
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
          <a onClick={() => handleDelete(record)} className='btn btn-light-danger btn-sm'>
            Delete
          </a>
         
        </Space>
      ),
      
    },
  ]

  const loadData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/MedicalTransactions`)
      setGridData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const dataWithIndex = gridData.map((item: any, index) => ({
    ...item,
    key: index,
  }))

  const dataByID:any = gridData.filter((refId:any) =>{
    return  refId.periodId===parseInt(selectedValue2)&&refId.paygroupId===parseInt(selectedValue1)
  })

  console.log(dataByID)
  console.log(dataByID)
  console.log(dataByID)

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
  const getEmployeeName = (employeeId: any) => {
    let employeeName = null
    allEmployee?.data.map((item: any) => {
      if (item.id === employeeId) {
        employeeName=item.firstName + " " + item.surname
      }
    })
    return employeeName
  } 
  const getMedicalName = (medicalId: any) => {
    let medicalName = null
    allMedicals?.data.map((item: any) => {
      if (item.id === medicalId) {
        medicalName=item.name
      }
    })
    return medicalName
  } 
  const onEmployeeChange = (objectId: any) => {
    const newEmplo = allEmployee?.data.find((item:any)=>{
      return item.id===parseInt(objectId)
    }) // console.log(newEmplo)
    setEmployeeRecord(newEmplo)
  }
  const emplyeesByPaygroup:any = allEmployee?.data.filter((item:any) =>{
    return  item.paygroupId===parseInt(selectedValue1)
    })

    // const handleFileUpload = async () => {
    //   const formData = new FormData();
    //   formData.append("file", selectedFile);
    //   try {
    //     const response = await axios.post("/api/upload", formData, {
    //       headers: {
    //         "Content-Type": "multipart/form-data"
    //       }
    //     });
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };


  const url = `${Api_Endpoint}/MedicalTransactions`
  const OnSubmit = handleSubmit( async (values)=> {
    setLoading(true)
    const data = {
          employeeId: employeeRecord.id,
          paygroupId: parseInt(selectedValue1),
          periodId: parseInt(selectedValue2),
          medicalTypeId: parseInt(values.medicalTypeId),
          date: values.date,
          comment: values.comment,
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
      <div style={{padding: "0px 0px 40px 0px"}}  className='col-12'>
        <div style={{padding: "20px 0px 0 0px"}} className='col-6 row mb-0'>
          <div className='col-6 mb-7'>
            <label htmlFor="exampleFormControlInput1" className=" form-label">Paygroup</label>
            <select value={selectedValue1} onChange={(e) => setSelectedValue1(e.target.value)} className="form-select form-select-solid" aria-label="Select example">
              <option value="select paygroup" style={{color:"GrayText"}}> select paygroup</option>
              {allPaygroups?.data.map((item: any) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className='col-6 mb-7'>
            <label htmlFor="exampleFormControlInput1" className=" form-label">Period</label>
            <select value={selectedValue2} onChange={(e) => setSelectedValue2(e.target.value)} className="form-select form-select-solid" aria-label="Select example">
              <option value="select period">select period</option>
              {allPeriods?.data.map((item: any) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>

        </div>
      </div>
      {
        selectedValue1===null||selectedValue2===null||selectedValue1==="select paygroup"||selectedValue2==="select period"?"":

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
          <Table columns={columns} dataSource={dataByID} loading={loading} />
          <Modal
                title='Medical Entry'
                open={isModalOpen}
                onCancel={handleCancel}
                closable={true}
                width="800px"
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
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Employee</label>
                      
                      <br></br>
                      <Select
                         
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
                          {emplyeesByPaygroup?.map((item: any) => (
                            <option key={item.id} value={item.id}>{item.firstName} - {item.surname}</option>
                          ))}
                        </Select>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Medical Type</label>
                      <select {...register("medicalTypeId")} className="form-select form-select-solid" aria-label="Select example">
                        <option> select </option>
                        {allMedicals?.data.map((item: any) => (
                          <option value={item.id}>{item.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div style={{padding: "0px 20px 20px 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Date</label>
                      <input type="date" {...register("date")}  className="form-control form-control-solid"/>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Comments</label>
                      
                      <textarea {...register("comment")} className="form-control form-control-solid" aria-label="With textarea"></textarea>
                    </div>
                  </div>
                  <div style={{padding: "0px 20px 20px 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-3'>
                    {/* <input className='mb-3 btn btn-outline btn-outline-dashed btn-outline-primary btn-active-light-primary' type="file" style={{display:'none'}} /> */}


                    <input type="file" className='mb-3 btn btn-outline btn-outline-dashed btn-outline-primary btn-active-light-primary' onChange={handleFileSelection} />
                      {selectedFile && (
                        <div>
                          <p>Name: {selectedFile.name}</p>
                          <p>Type: {selectedFile.type}</p>
                          <p>Size: {selectedFile.size} bytes</p>
                          {/* <button onClick={handleFileUpload}>Upload</button> */}
                        </div>
                      )}
                      
                    </div>
                  </div>
                </form>
            </Modal>
        </div>
      </KTCardBody>
      }
      
    </div>
  )
}

export {MedicalEntries}
