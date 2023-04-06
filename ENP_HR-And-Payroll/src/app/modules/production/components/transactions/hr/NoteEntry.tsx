import {Button, Form, Input, InputNumber, Modal, Select, Space, Table, Upload} from 'antd'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {KTCardBody, KTSVG} from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'
import { employeedata, NOTES, period } from '../../../../../data/DummyData'
import { UploadOutlined } from '@ant-design/icons';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { Api_Endpoint, fetchEmployees, fetchMedicals, fetchNoteCategories, fetchPaygroups, fetchPeriods } from '../../../../../services/ApiCalls'

const NoteEntry = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const [form] = Form.useForm()
  const [selectedValue, setSelectedValue] = useState<any>(null);
  const [selectedValue1, setSelectedValue1] = useState<any>(null);
  const [selectedValue2, setSelectedValue2] = useState<any>(null);
  const [selectedType, setSelectedType] = useState<any>(null);
  const {register, reset, handleSubmit} = useForm()
  const [employeeRecord, setEmployeeRecord]= useState<any>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
      reset()
     setIsModalOpen(false)
     setEmployeeRecord(null)
     setSelectedType("select")
   }

  const deleteData = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/NoteTransactions/${element.id}`)
      // update the local state so that react can refecth and re-render the table with the new data
      const newData = gridData.filter((item: any) => item.id !== element.id)
      setGridData(newData)
      return response.status
    } catch (e) {
      return e
    }
  }

  const { data: allEmployees } = useQuery('employees', fetchEmployees, { cacheTime: 5000 })
  const {data:allMedicals} = useQuery('medicals', fetchMedicals, {cacheTime:5000})
  const {data:allNoteCategories} = useQuery('noteCategories', fetchNoteCategories, {cacheTime:5000})
  const { data: allPeriods } = useQuery('periods', fetchPeriods, { cacheTime: 5000 })
  const { data: allPaygroups } = useQuery('paygroup', fetchPaygroups, { cacheTime: 5000 })

  
  const [fileList, setFileList] = useState<UploadFile[]>([
    
  ]);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

// https://www.pngfind.com/pngs/m/110-1102775_download-empty-profile-hd-png-download.png
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
  

  function handleDelete(element: any) {
    deleteData(element)
  }
  const columns: any = [
   
    {
      title: 'Employee ID',
      key: 'employeeId',
      render: (record:any )=>{
        return getEmID(record.employeeId)
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
      title: 'Reference #',
      dataIndex: 'reference',
      sorter: (a: any, b: any) => {
        if (a.reference > b.reference) {
          return 1
        }
        if (b.reference > a.reference) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Note Category',
      key:'noteCategoryId',
      render: (record:any )=>{
        return getNoteName(record.noteCategoryId)
      },
      sorter: (a: any, b: any) => {
        if (a.noteCategoryId > b.noteCategoryId) {
          return 1
        }
        if (b.noteCategoryId > a.noteCategoryId) {
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
      title: 'Date',
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
      title: 'Action',
      fixed: 'right',
      width: 100,
      render: (_: any, record: any) => (
        <Space size='middle'>
         
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

  const getEmID = (emId: any) => {
    let emID = null
    allEmployees?.data.map((item: any) => {
      if (item.id === emId) {
        emID=item.employeeId
      }
    })
    return emID
  }
  const getNoteName = (n: any) => {
    let noteName = null
    allNoteCategories?.data.map((item: any) => {
      if (item.id === n) {
        noteName=item.name
      }
    })
    return noteName
  }

  const loadData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/NoteTransactions`)
      setGridData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadData()
  }, [])


  const emplyeesByPaygroup:any = allEmployees?.data.filter((item:any) =>{
    return  item.paygroupId===parseInt(selectedValue1)
    })


  const notesData:any = gridData.filter((item:any) =>{
    return  (item.paygroupId===parseInt(selectedValue1))&&(item.periodId===parseInt(selectedValue2))
    })

  const noteCategoriesByType:any = allNoteCategories?.data.filter((item:any) =>{
    return  item.type===selectedType
    })

  const handleInputChange = (e: any) => {
    setSearchText(e.target.value)
    if (e.target.value === '') {
      loadData()
    }
  }

  const onEmployeeChange = (objectId: any) => {
    const newEmplo = allEmployees?.data.find((item:any)=>{
      return item.id===parseInt(objectId)
    }) // console.log(newEmplo)
    setEmployeeRecord(newEmplo)
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

  const url1 = `${Api_Endpoint}/NoteTransactions1`
  const submitNoteEntry = handleSubmit(async (values) => {
    setLoading(true)
    const data = {
      paygroupId: parseInt(selectedValue1),
      periodId: parseInt(selectedValue2),
      reference: values.reference,
      employeeId: employeeRecord?.id,
      comment: values.comment,
      noteCategoryId: parseInt(selectedType),
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

      <div style={{padding: "0px 0px 40px 0px"}}  className='col-12'>
        <div style={{padding: "20px 0px 0 0px"}} className='col-12 row mb-0'>
        <div className='col-4 mb-7'>
            <label htmlFor="exampleFormControlInput1" className=" form-label">Paygroup</label>
            <select value={selectedValue1} onChange={(e) => setSelectedValue1(e.target.value)} className="form-select form-select-solid" aria-label="Select example">
              <option value="select paygroup" > Select paygroup</option>
              <option value="N/A">N/A</option>
              {allPaygroups?.data.map((item: any) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className='col-4 mb-7'>
            <label htmlFor="exampleFormControlInput1" className=" form-label">Note Category</label>
            <select className="form-select form-select-solid" value={selectedType} onChange={(e) => setSelectedType(e.target.value)} aria-label="Select example">
              <option value="select period"> Select period</option>
              <option value="N/A">N/A</option>
              {allNoteCategories?.data.map((item: any) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className='col-4 mb-7'>
            <label htmlFor="exampleFormControlInput1" className=" form-label">Period</label>
            <select className="form-select form-select-solid" value={selectedValue2} onChange={(e) => setSelectedValue2(e.target.value)} aria-label="Select example">
              <option value="select period"> Select period</option>
              <option value="N/A">N/A</option>
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
          <Table columns={columns} dataSource={notesData} />
          <Modal
                title='Note Entry'
                open={isModalOpen}
                onCancel={handleCancel}
                width="700px"
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
                    onClick={submitNoteEntry}
                    >
                        Submit
                    </Button>,
                ]}
            >
                <form
                    onSubmit={submitNoteEntry}
                >
                    <hr></hr>
                    <div style={{padding: "20px 20px 0px 20px"}} className='row mb-0 '>
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
                            {emplyeesByPaygroup?.map((item: any) => (
                              <option key={item.id} value={item.id}>{item.employeeId}</option>
                            ))}
                          </Select>
                      </div>
                    </div>
                    <div style={{padding: "20px 20px 20px 20px"}} className='row mb-0 '>
                    
                      <div className='col-6 mb-7'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Reference #</label>
                        <input type="text" {...register("reference")}  className="form-control form-control-solid"/>
                      </div>
                      {/* <div className='col-6 mb-7'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Note Type</label>
                        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="form-select form-select-solid" aria-label="Select example">
                        <option> select</option>
                          <option value="Disciplinary">DISCIPLINARY ACTION</option>
                          <option value="Grievances">GRIEVANCES </option>
                        </select>
                      </div> */}
                      
                      {/* <div className='col-6 mb-7'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Note Category</label>
                        <select {...register("noteCategoryId")} className="form-select form-select-solid" aria-label="Select example">
                        <option> select</option>
                        {noteCategoriesByType?.map((item: any) => (
                          <option value={item.id}>{item.name}</option>
                        ))}
                        </select>
                      </div> */}
                      
                      <div className='col-6 mb-7'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Upload Document</label>
                        <input style={{ padding:"10px 10px 10px 10px" }} className=' btn btn-outline btn-outline-dashed btn-outline-primary btn-active-light-primary' type="file" />
                        
                      </div>
                      <div className='col-12 mb-3'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Comments</label>
                        <textarea {...register("comment")} className="form-control form-control-solid" aria-label="With textarea"></textarea>
                      </div>
                      {/* <div className='col-6 mb-3'>
                      <Upload
                      
                        listType="picture-card"
                        onChange={onChange}
                        onPreview={onPreview}
                        
                      >                  
                        
                        <UploadOutlined/>
                      </Upload>
                 
                    </div> */}
                    </div>
                </form>
            </Modal>
        </div>
      </KTCardBody>
      }
      
    </div>
  )
}

export {NoteEntry}
