import {Button, Form, Input, InputNumber, Modal, Space, Table} from 'antd'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {KTCardBody, KTSVG} from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'

const Loan = () => {
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
      title: 'Interest Rate',
      dataIndex: 'interestRate',
      sorter: (a: any, b: any) => {
        if (a.interestRate > b.interestRate) {
          return 1
        }
        if (b.interestRate > a.interestRate) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Interest Type',
      dataIndex: 'interestType',
      sorter: (a: any, b: any) => {
        if (a.interestType > b.interestType) {
          return 1
        }
        if (b.interestType > a.interestType) {
          return -1
        }
        return 0
      },
    },
    
    {
      title: 'Moratorium',
      dataIndex: 'moratorium',
      sorter: (a: any, b: any) => {
        if (a.moratorium > b.moratorium) {
          return 1
        }
        if (b.moratorium > a.moratorium) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Min Repay Period',
      dataIndex: 'minrepay',
      sorter: (a: any, b: any) => {
        if (a.minrepay > b.minrepay) {
          return 1
        }
        if (b.minrepay > a.minrepay) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Max Repay Period',
      dataIndex: 'maxrepay',
      sorter: (a: any, b: any) => {
        if (a.maxrepay > b.maxrepay) {
          return 1
        }
        if (b.maxrepay > a.maxrepay) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Repayment Percentage Ceiling',
      dataIndex: 'ceiling',
      sorter: (a: any, b: any) => {
        if (a.ceiling > b.ceiling) {
          return 1
        }
        if (b.ceiling > a.ceiling) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Interest on Cancellation',
      dataIndex: 'cancellation',
      sorter: (a: any, b: any) => {
        if (a.cancellation > b.cancellation) {
          return 1
        }
        if (b.cancellation > a.cancellation) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Deduction',
      dataIndex: 'deduction',
      sorter: (a: any, b: any) => {
        if (a.deduction > b.deduction) {
          return 1
        }
        if (b.deduction > a.deduction) {
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

  const LOANS =[
    {
     name: "001",
     interestRate: "5%",
     interestType: "FORMULA",
     moratorium: "NONE",
     minrepay: 100,
     maxrepay: 2000,
     ceiling: 0.15,
     deduction: "MONTHLY",
     cancellation: "N\/A"
    },
    {
     name: "002",
     interestRate: "15%",
     interestType: "PERCENTAGE OF GROSS",
     moratorium: "3 MONTHS",
     minrepay: 100,
     maxrepay: 2000,
     ceiling: 0.15,
     deduction: "MONTHLY",
     cancellation: "N\/A"
    },
    {
     name: "003",
     interestRate: "30%",
     interestType: "VARYING AMOUNT",
     moratorium: "NONE",
     minrepay: 100,
     maxrepay: 2000,
     ceiling: 0.15,
     deduction: "MONTHLY",
     cancellation: "N\/A"
    },
    {
     name: "004",
     interestRate: "2%",
     interestType: "VARYING AMOUNT",
     moratorium: "NONE",
     minrepay: 100,
     maxrepay: 2000,
     ceiling: 0.15,
     deduction: "MONTHLY",
     cancellation: "N\/A"
    },
    {
     name: "005",
     interestRate: "10%",
     interestType: "PERCENTAGE OF BASIC",
     moratorium: "1 MONTH",
     minrepay: 100,
     maxrepay: 2000,
     ceiling: 0.15,
     deduction: "MONTHLY",
     cancellation: "N\/A"
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
          <Table columns={columns}  dataSource={LOANS}/>
          <Modal
                title='Loan Setup'
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
                    // labelCol={{span: 7}}
                    // wrapperCol={{span: 14}}
                    layout='horizontal'
                    form={form}
                    name='control-hooks'
                    
                    onFinish={onFinish}
                >

                <hr></hr>
                <div style={{padding: "20px 20px 0 20px"}} className='row mb-0 '>
                  <div className='col-6 mb-7'>
                    <label htmlFor="exampleFormControlInput1" className="required form-label">Name</label>
                    <input type="text" name="name"  className="form-control form-control-solid"/>
                  </div>
                  <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Interest Rate</label>
                    <input type="text" name="interestR"  className="form-control form-control-solid"/>
                    
                  </div>
                </div>
                <div style={{padding: "0px 20px 0 20px"}} className='row mb-0 '>
                  <div className='col-6 mb-7'>
                    <label htmlFor="exampleFormControlInput1" className="required form-label">Interest Type</label>
                    <select className="form-select form-select-solid" aria-label="Select example">
                      <option>select</option>
                      <option value="1">FORMULA</option>
                      <option value="2">PERCENTAGE OF GROSS</option>
                      <option value="3">VARYING AMOUNT</option>
                      <option value="3">PERCENTAGE OF BASIC</option>
                    </select>
                  </div>
                  <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Moratorium</label>
                  <input type="text" name="moratorium"  className="form-control form-control-solid"/>

                  </div>
                </div>
                <div style={{padding: "0px 20px 0 20px"}} className='row mb-0 '>
                  <div className='col-6 mb-7'>
                    <label htmlFor="exampleFormControlInput1" className="required form-label">Min Repayment Period</label>
                    <input type="text" name="repayMin"  className="form-control form-control-solid"/>

                  </div>
                  <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Max Repayment Period</label>
                  <input type="text" name="repayMax"  className="form-control form-control-solid"/>

                  </div>
                </div>
                <div style={{padding: "0px 20px 0 20px"}} className='row mb-0 '>
                  <div className='col-6 mb-7'>
                    <label htmlFor="exampleFormControlInput1" className="required form-label">Repayment Percentage Ceiling</label>
                    <input type="text" name="repayC"  className="form-control form-control-solid"/>

                  </div>
                  <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Deduction</label>
                    <select className="form-select form-select-solid" aria-label="Select example">
                      <option>select</option>
                      <option value="1">MONTHLY</option>
                      <option value="2">WEEKLY</option>
                    </select>
                  </div>
                </div>
                <div style={{padding: "0px 20px 0 20px"}} className='row mb-0 '>
                  <div className='col-6 mb-7'>
                    <label htmlFor="exampleFormControlInput1" className="required form-label">Interest On Cancellation</label>
                    <input type="text" name="interestC"  className="form-control form-control-solid"/>

                  </div>
                 
                </div>
                </Form>
            </Modal>
        </div>
      </KTCardBody>
    </div>
  )
}

export {Loan}
