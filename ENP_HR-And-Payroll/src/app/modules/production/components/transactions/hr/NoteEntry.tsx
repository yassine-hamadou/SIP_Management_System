import {Button, Form, Input, InputNumber, Modal, Space, Table, Upload} from 'antd'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {KTCardBody, KTSVG} from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'
import { employeedata, NOTES, period } from '../../../../../data/DummyData'
import { UploadOutlined } from '@ant-design/icons';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { fetchEmployees, fetchMedicals, fetchPaygroups, fetchPeriods } from '../../../../../services/ApiCalls'

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
  const {register, reset, handleSubmit} = useForm()
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

  const {data:allEmployee} = useQuery('employee', fetchEmployees, {cacheTime:5000})
  const {data:allMedicals} = useQuery('medicals', fetchMedicals, {cacheTime:5000})
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
      title: 'Reference #',
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
      title: 'Note Category',
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
      title: 'Comments/ Description',
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
          
          {/* <Link to={`/setup/sections/${record.id}`}>
            <span className='btn btn-light-info btn-sm'>Sections</span>
          </Link> */}
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
            <select className="form-select form-select-solid" value={selectedValue2} onChange={(e) => setSelectedValue2(e.target.value)} aria-label="Select example">
              <option value="select period"> select period</option>
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
          <Table columns={columns}  />
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
                    <div style={{padding: "20px 20px 20px 20px"}} className='row mb-0 '>
                      <div className='col-6 mb-3'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Reference #</label>
                        <input type="text" name="ref"  className="form-control form-control-solid"/>
                      </div>
                      
                      <div className='col-6 mb-3'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Note Type</label>
                        <select className="form-select form-select-solid" aria-label="Select example">
                        <option> select</option>
                          <option value="1">DISCIPLINARY ACTION</option>
                          <option value="2">GRIEVANCE </option>
                        </select>
                      </div>
                      <div className='col-6 mb-3'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Employee ID</label>
                        <select className="form-select form-select-solid" aria-label="Select example">
                        <option> select</option>
                        {employeedata.map((item: any) => (
                          <option value={item.code}> {item.empcode} - {item.lastname}</option>
                        ))}
                        </select>
                      </div>
                      <div className='col-6 mb-3'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Note Category</label>
                        <select className="form-select form-select-solid" aria-label="Select example">
                        <option> select</option>
                        {NOTES.map((item: any) => (
                          <option value={item.code}>{item.name}</option>
                        ))}
                        </select>
                      </div>
                      <div className='col-6 mb-3'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Comments</label>
                        {/* <input type="text" name="topic"  className="form-control form-control-solid"/> */}
                        <textarea className="form-control form-control-solid" aria-label="With textarea"></textarea>
                      </div>
                      <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Upload Document</label>
                      <Upload
                      
                      listType="picture-card"
                      // fileList={fileList}
                      onChange={onChange}
                      onPreview={onPreview}
                      
                    >                  
                        
                        <UploadOutlined/>
                      </Upload>
                 
                    </div>
                    </div>
                </Form>
            </Modal>
        </div>
      </KTCardBody>
      }
      {/* <KTCardBody className='py-4 '>
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
                    <div style={{padding: "20px 20px 20px 20px"}} className='row mb-0 '>
                      <div className='col-6 mb-3'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Reference #</label>
                        <input type="text" name="ref"  className="form-control form-control-solid"/>
                      </div>
                      
                      <div className='col-6 mb-3'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Note Type</label>
                        <select className="form-select form-select-solid" aria-label="Select example">
                        <option> select</option>
                          <option value="1">DISCIPLINARY ACTION</option>
                          <option value="2">GRIEVANCE </option>
                        </select>
                      </div>
                      <div className='col-6 mb-3'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Employee ID</label>
                        <select className="form-select form-select-solid" aria-label="Select example">
                        <option> select</option>
                        {employeedata.map((item: any) => (
                          <option value={item.code}> {item.empcode} - {item.lastname}</option>
                        ))}
                        </select>
                      </div>
                      <div className='col-6 mb-3'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Note Category</label>
                        <select className="form-select form-select-solid" aria-label="Select example">
                        <option> select</option>
                        {NOTES.map((item: any) => (
                          <option value={item.code}>{item.name}</option>
                        ))}
                        </select>
                      </div>
                      <div className='col-6 mb-3'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Comments</label>
                       
                        <textarea className="form-control form-control-solid" aria-label="With textarea"></textarea>
                      </div>
                      <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Upload Document</label>
                      <Upload
                      
                      listType="picture-card"
                     
                      onChange={onChange}
                      onPreview={onPreview}
                      
                    >                  
                        
                        <UploadOutlined/>
                      </Upload>
                 
                    </div>
                    </div>
                </Form>
            </Modal>
        </div>
      </KTCardBody> */}
    </div>
  )
}

export {NoteEntry}
