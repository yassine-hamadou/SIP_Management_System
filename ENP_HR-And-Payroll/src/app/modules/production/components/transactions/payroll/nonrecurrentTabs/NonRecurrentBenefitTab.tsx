import {Button, Form, Input, InputNumber, Modal, Space, Table} from 'antd'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {KTCardBody, KTSVG} from '../../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../../urls'
// import { employeedata, period } from '../../../../../../data/DummyData'

const NonRecurrentBenefitTab = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const [form] = Form.useForm()

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
      title: 'Benefit',
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
      title: 'Amount',
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
      title: 'Start Period',
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
      title: 'End Period',
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
          <a href='#' className='btn btn-danger btn-sm'>
            Stop
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
    // <div
    //   style={{
    //     backgroundColor: 'white',
    //     padding: '20px',
    //     borderRadius: '5px',
    //     boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
    //   }}
    // >
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
                title='Non-Recurrent Benefit'
                open={isModalOpen}
                onCancel={handleCancel}
                closable={true}
                width={860}
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
                    <div className='col-6 mb-7'>
                      <label htmlFor="exampleFormControlInput1" className=" form-label">Input Option</label>
                      <select className="form-select form-select-solid" aria-label="Select example">
                        <option> select</option>
                        <option value="1">Test 1</option>
                        <option value="2">Test 2</option>
                      </select>
                    </div>
                    <div className='col-6 mb-7'>
                    <label htmlFor="exampleFormControlInput1" className="required form-label">Benefit</label>
                      <select className="form-select form-select-solid" aria-label="Select example">
                        <option> select</option>
                        <option value="1">Clothing Allowance</option>
                        <option value="2">Accommodation Allowance</option>
                        <option value="3">Shit Allowance</option>
                        <option value="4">Overtime </option>
                        <option value="5">Allowance </option>
                      </select>
                      
                    </div>
                  </div>
                  <div style={{padding: "0px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-7'>
                      <label htmlFor="exampleFormControlInput1" className=" form-label">Employee ID</label>
                      <select className="form-select form-select-solid" aria-label="Select example">
                        <option> select</option>
                        {/* {employeedata.map((item: any) => (
                          <option value={item.code}> {item.empcode} - {item.lastname}</option>
                        ))} */}
                      </select>
                    </div>
                    <div className='col-6 mb-7'>
                    <label htmlFor="exampleFormControlInput1" className=" form-label">Benefit Amount Type</label>
                      {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                      <select className="form-select form-select-solid" aria-label="Select example">
                        <option> select</option>
                        <option value="1">Test1</option>
                        <option value="2">Test2</option>
                        <option value="3">Test3</option>
                      </select>
                    </div>
                  </div>
                  <div style={{padding: "0px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-7'>
                      <label htmlFor="exampleFormControlInput1" className="required form-label">Employee Name</label>
                      <input type="number" name="amount" disabled className="form-control form-control-solid"/>

                    </div>
                    <div className='col-6 mb-7'>
                    <label htmlFor="exampleFormControlInput1" className="required form-label">Benefit Amount or Percentage</label>
                      <input type="number" name="amount" min={0} defaultValue={0} className="form-control form-control-solid"/>
                      
                    </div>
                  </div>
                  <div style={{padding: "0px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-7'>
                      <label htmlFor="exampleFormControlInput1" className=" form-label">Department</label>
                      <input type="text" name="accno" disabled className="form-control form-control-solid"/>
                    </div>
                    <div className='col-6 mb-7'>
                    <label htmlFor="exampleFormControlInput1" className=" form-label">Start date</label>
                      {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                      <select className="form-select form-select-solid" aria-label="Select example">
                        <option> select</option>
                        {/* {period.map((item: any) => (
                          <option value={item.code}>{item.code}</option>
                        ))} */}
                      </select>
                    </div>
                  </div>
                  <div style={{padding: "0px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-7'>
                      <label htmlFor="exampleFormControlInput1" className="required form-label">Salary Grade</label>
                      <input type="text" name="accno" disabled className="form-control form-control-solid"/>
                    </div>
                    <div className='col-6 mb-7'>
                    <label htmlFor="exampleFormControlInput1" className="required form-label">End date</label>
                      {/* <input type="text" name="name"  className="form-control form-control-solid"/> */}
                      <select className="form-select form-select-solid" aria-label="Select example">
                        <option> select</option>
                        {/* {period.map((item: any) => (
                          <option value={item.code}>{item.code}</option>
                        ))} */}
                      </select>
                    </div>
                  </div>
                  
                  <div style={{padding: "0px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-7'>
                      <label htmlFor="exampleFormControlInput1" className=" form-label">Basic Salary</label>
                      <input type="text" name="accno" disabled  className="form-control disabled form-control-solid"/>
                    </div>
                    
                    
                  </div>
                </Form>
            </Modal>
        </div>
      </KTCardBody>
    // </div>
  )
}

export {NonRecurrentBenefitTab}
