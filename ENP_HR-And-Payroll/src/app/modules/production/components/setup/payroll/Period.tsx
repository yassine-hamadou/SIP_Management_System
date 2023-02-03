import {Button, Form, Input, InputNumber, Modal, Space, Table} from 'antd'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {KTCardBody, KTSVG} from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'

const Period = () => {
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
      title: 'Code',
      dataIndex: 'code',
      sorter: (a: any, b: any) => {
        if (a.code > b.code) {
          return 1
        }
        if (b.code > a.code) {
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
      title: 'Start Date',
      dataIndex: 'start_date',
      sorter: (a: any, b: any) => {
        if (a.start_date > b.start_date) {
          return 1
        }
        if (b.start_date > a.start_date) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'End Date',
      dataIndex: 'end_date',
      sorter: (a: any, b: any) => {
        if (a.end_date > b.end_date) {
          return 1
        }
        if (b.end_date > a.end_date) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      sorter: (a: any, b: any) => {
        if (a.status > b.status) {
          return 1
        }
        if (b.status > a.status) {
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

  const PERIOD=[
    {
     code: "JAN23",
     name: "JANUARY 2023",
     start_date: "1\/1",
     end_date: "31\/01",
     status: "ACTIVE"
    },
    {
     code: "FEB23",
     name: "FEBRUARY 2023",
     start_date: "2\/1",
     end_date: "28\/02",
     status: "ACTIVE"
    },
    {
     code: "MAR23",
     name: "MARCH 2023",
     start_date: "3\/1",
     end_date: "31\/03",
     status: "ACTIVE"
    },
    {
     code: "APR23",
     name: "APRIL 2023",
     start_date: "4\/1",
     end_date: "30\/04",
     status: "ACTIVE"
    },
    {
     code: "MAY23",
     name: "MAY 2023",
     start_date: "5\/1",
     end_date: "31\/05",
     status: "ACTIVE"
    },
    {
     code: "JUN23",
     name: "JUNE 2023",
     start_date: "6\/1",
     end_date: "30\/06",
     status: "ACTIVE"
    },
    {
     code: "JUL23",
     name: "JULY 2023",
     start_date: "7\/1",
     end_date: "31\/7",
     status: "ACTIVE"
    },
    {
     code: "AUG23",
     name: "AUGUST 2023",
     start_date: "8\/1",
     end_date: "31\/8",
     status: "ACTIVE"
    },
    {
     code: "SEP23",
     name: "SEPTEMBER 2023",
     start_date: "9\/1",
     end_date: "30\/9",
     status: "ACTIVE"
    },
    {
     code: "OCT23",
     name: "OCTOBER 2023",
     start_date: "10\/1",
     end_date: "31\/10",
     status: "ACTIVE"
    },
    {
     code: "NOV23",
     name: "NOVEMBER 2023",
     start_date: "11\/1",
     end_date: "30\/11",
     status: "ACTIVE"
    },
    {
     code: "DEC23",
     name: "DECEMBER 2023",
     start_date: "12\/1",
     end_date: "31\/12",
     status: "ACTIVE"
    },
    {
     code: "JAN24",
     name: "JANUARY 2024",
     start_date: "1\/1",
     end_date: "31\/01",
     status: "ACTIVE"
    },
    {
     code: "FEB24",
     name: "FEBRUARY 2024",
     start_date: "2\/1",
     end_date: "28\/02",
     status: "ACTIVE"
    },
    {
     code: "MAR24",
     name: "MARCH 2024",
     start_date: "3\/1",
     end_date: "31\/03",
     status: "ACTIVE"
    },
    {
     code: "APR24",
     name: "APRIL 2024",
     start_date: "4\/1",
     end_date: "30\/04",
     status: "ACTIVE"
    },
    {
     code: "MAY24",
     name: "MAY 2024",
     start_date: "5\/1",
     end_date: "31\/05",
     status: "ACTIVE"
    },
    {
     code: "JUN24",
     name: "JUNE 2024",
     start_date: "6\/1",
     end_date: "30\/06",
     status: "ACTIVE"
    },
    {
     code: "JUL24",
     name: "JULY 2024",
     start_date: "7\/1",
     end_date: "31\/7",
     status: "ACTIVE"
    },
    {
     code: "AUG24",
     name: "AUGUST 2024",
     start_date: "8\/1",
     end_date: "31\/8",
     status: "ACTIVE"
    },
    {
     code: "SEP24",
     name: "SEPTEMBER 2024",
     start_date: "9\/1",
     end_date: "30\/9",
     status: "ACTIVE"
    },
    {
     code: "OCT24",
     name: "OCTOBER 2024",
     start_date: "10\/1",
     end_date: "31\/10",
     status: "ACTIVE"
    },
    {
     code: "NOV24",
     name: "NOVEMBER 2024",
     start_date: "11\/1",
     end_date: "30\/11",
     status: "ACTIVE"
    },
    {
     code: "DEC24",
     name: "DECEMBER 2024",
     start_date: "12\/1",
     end_date: "31\/12",
     status: "ACTIVE"
    },
    {
     code: "JAN25",
     name: "JANUARY 2025",
     start_date: "1\/1",
     end_date: "31\/01",
     status: "ACTIVE"
    },
    {
     code: "FEB25",
     name: "FEBRUARY 2025",
     start_date: "2\/1",
     end_date: "28\/02",
     status: "ACTIVE"
    },
    {
     code: "MAR25",
     name: "MARCH 2025",
     start_date: "3\/1",
     end_date: "31\/03",
     status: "ACTIVE"
    },
    {
     code: "APR25",
     name: "APRIL 2025",
     start_date: "4\/1",
     end_date: "30\/04",
     status: "ACTIVE"
    },
    {
     code: "MAY25",
     name: "MAY 2025",
     start_date: "5\/1",
     end_date: "31\/05",
     status: "ACTIVE"
    },
    {
     code: "JUN25",
     name: "JUNE 2025",
     start_date: "6\/1",
     end_date: "30\/06",
     status: "ACTIVE"
    },
    {
     code: "JUL25",
     name: "JULY 2025",
     start_date: "7\/1",
     end_date: "31\/7",
     status: "ACTIVE"
    },
    {
     code: "AUG25",
     name: "AUGUST 2025",
     start_date: "8\/1",
     end_date: "31\/8",
     status: "ACTIVE"
    },
    {
     code: "SEP25",
     name: "SEPTEMBER 2025",
     start_date: "9\/1",
     end_date: "30\/9",
     status: "ACTIVE"
    },
    {
     code: "OCT25",
     name: "OCTOBER 2025",
     start_date: "10\/1",
     end_date: "31\/10",
     status: "ACTIVE"
    },
    {
     code: "NOV25",
     name: "NOVEMBER 2025",
     start_date: "11\/1",
     end_date: "30\/11",
     status: "ACTIVE"
    },
    {
     code: "DEC25",
     name: "DECEMBER 2025",
     start_date: "12\/1",
     end_date: "31\/12",
     status: "ACTIVE"
    },
    {
     code: "JAN26",
     name: "JANUARY 2026",
     start_date: "1\/1",
     end_date: "31\/01",
     status: "ACTIVE"
    },
    {
     code: "FEB26",
     name: "FEBRUARY 2026",
     start_date: "2\/1",
     end_date: "28\/02",
     status: "ACTIVE"
    },
    {
     code: "MAR26",
     name: "MARCH 2026",
     start_date: "3\/1",
     end_date: "31\/03",
     status: "ACTIVE"
    },
    {
     code: "APR26",
     name: "APRIL 2026",
     start_date: "4\/1",
     end_date: "30\/04",
     status: "ACTIVE"
    },
    {
     code: "MAY26",
     name: "MAY 2026",
     start_date: "5\/1",
     end_date: "31\/05",
     status: "ACTIVE"
    },
    {
     code: "JUN26",
     name: "JUNE 2026",
     start_date: "6\/1",
     end_date: "30\/06",
     status: "ACTIVE"
    },
    {
     code: "JUL26",
     name: "JULY 2026",
     start_date: "7\/1",
     end_date: "31\/7",
     status: "ACTIVE"
    },
    {
     code: "AUG26",
     name: "AUGUST 2026",
     start_date: "8\/1",
     end_date: "31\/8",
     status: "ACTIVE"
    },
    {
     code: "SEP26",
     name: "SEPTEMBER 2026",
     start_date: "9\/1",
     end_date: "30\/9",
     status: "ACTIVE"
    },
    {
     code: "OCT26",
     name: "OCTOBER 2026",
     start_date: "10\/1",
     end_date: "31\/10",
     status: "ACTIVE"
    },
    {
     code: "NOV26",
     name: "NOVEMBER 2026",
     start_date: "11\/1",
     end_date: "30\/11",
     status: "ACTIVE"
    },
    {
     code: "DEC26",
     name: "DECEMBER 2026",
     start_date: "12\/1",
     end_date: "31\/12",
     status: "ACTIVE"
    },
    {
     code: "JAN27",
     name: "JANUARY 2027",
     start_date: "1\/1",
     end_date: "31\/01",
     status: "ACTIVE"
    },
    {
     code: "FEB27",
     name: "FEBRUARY 2027",
     start_date: "2\/1",
     end_date: "28\/02",
     status: "ACTIVE"
    },
    {
     code: "MAR27",
     name: "MARCH 2027",
     start_date: "3\/1",
     end_date: "31\/03",
     status: "ACTIVE"
    },
    {
     code: "APR27",
     name: "APRIL 2027",
     start_date: "4\/1",
     end_date: "30\/04",
     status: "ACTIVE"
    },
    {
     code: "MAY27",
     name: "MAY 2027",
     start_date: "5\/1",
     end_date: "31\/05",
     status: "ACTIVE"
    },
    {
     code: "JUN27",
     name: "JUNE 2027",
     start_date: "6\/1",
     end_date: "30\/06",
     status: "ACTIVE"
    },
    {
     code: "JUL27",
     name: "JULY 2027",
     start_date: "7\/1",
     end_date: "31\/7",
     status: "ACTIVE"
    },
    {
     code: "AUG27",
     name: "AUGUST 2027",
     start_date: "8\/1",
     end_date: "31\/8",
     status: "ACTIVE"
    },
    {
     code: "SEP27",
     name: "SEPTEMBER 2027",
     start_date: "9\/1",
     end_date: "30\/9",
     status: "ACTIVE"
    },
    {
     code: "OCT27",
     name: "OCTOBER 2027",
     start_date: "10\/1",
     end_date: "31\/10",
     status: "ACTIVE"
    },
    {
     code: "NOV27",
     name: "NOVEMBER 2027",
     start_date: "11\/1",
     end_date: "30\/11",
     status: "ACTIVE"
    },
    {
     code: "DEC27",
     name: "DECEMBER 2027",
     start_date: "12\/1",
     end_date: "31\/12",
     status: "ACTIVE"
    },
    {
     code: "JAN28",
     name: "JANUARY 2028",
     start_date: "1\/1",
     end_date: "31\/01",
     status: "ACTIVE"
    },
    {
     code: "FEB28",
     name: "FEBRUARY 2028",
     start_date: "2\/1",
     end_date: "28\/02",
     status: "ACTIVE"
    },
    {
     code: "MAR28",
     name: "MARCH 2028",
     start_date: "3\/1",
     end_date: "31\/03",
     status: "ACTIVE"
    },
    {
     code: "APR28",
     name: "APRIL 2028",
     start_date: "4\/1",
     end_date: "30\/04",
     status: "ACTIVE"
    },
    {
     code: "MAY28",
     name: "MAY 2028",
     start_date: "5\/1",
     end_date: "31\/05",
     status: "ACTIVE"
    },
    {
     code: "JUN28",
     name: "JUNE 2028",
     start_date: "6\/1",
     end_date: "30\/06",
     status: "ACTIVE"
    },
    {
     code: "JUL28",
     name: "JULY 2028",
     start_date: "7\/1",
     end_date: "31\/7",
     status: "ACTIVE"
    },
    {
     code: "AUG28",
     name: "AUGUST 2028",
     start_date: "8\/1",
     end_date: "31\/8",
     status: "ACTIVE"
    },
    {
     code: "SEP28",
     name: "SEPTEMBER 2028",
     start_date: "9\/1",
     end_date: "30\/9",
     status: "ACTIVE"
    },
    {
     code: "OCT28",
     name: "OCTOBER 2028",
     start_date: "10\/1",
     end_date: "31\/10",
     status: "ACTIVE"
    },
    {
     code: "NOV28",
     name: "NOVEMBER 2028",
     start_date: "11\/1",
     end_date: "30\/11",
     status: "ACTIVE"
    },
    {
     code: "DEC28",
     name: "DECEMBER 2028",
     start_date: "12\/1",
     end_date: "31\/12",
     status: "ACTIVE"
    },
    {
     code: "JAN29",
     name: "JANUARY 2029",
     start_date: "1\/1",
     end_date: "31\/01",
     status: "ACTIVE"
    },
    {
     code: "FEB29",
     name: "FEBRUARY 2029",
     start_date: "2\/1",
     end_date: "28\/02",
     status: "ACTIVE"
    },
    {
     code: "MAR29",
     name: "MARCH 2029",
     start_date: "3\/1",
     end_date: "31\/03",
     status: "ACTIVE"
    },
    {
     code: "APR29",
     name: "APRIL 2029",
     start_date: "4\/1",
     end_date: "30\/04",
     status: "ACTIVE"
    },
    {
     code: "MAY29",
     name: "MAY 2029",
     start_date: "5\/1",
     end_date: "31\/05",
     status: "ACTIVE"
    },
    {
     code: "JUN29",
     name: "JUNE 2029",
     start_date: "6\/1",
     end_date: "30\/06",
     status: "ACTIVE"
    },
    {
     code: "JUL29",
     name: "JULY 2029",
     start_date: "7\/1",
     end_date: "31\/7",
     status: "ACTIVE"
    },
    {
     code: "AUG29",
     name: "AUGUST 2029",
     start_date: "8\/1",
     end_date: "31\/8",
     status: "ACTIVE"
    },
    {
     code: "SEP29",
     name: "SEPTEMBER 2029",
     start_date: "9\/1",
     end_date: "30\/9",
     status: "ACTIVE"
    },
    {
     code: "OCT29",
     name: "OCTOBER 2029",
     start_date: "10\/1",
     end_date: "31\/10",
     status: "ACTIVE"
    },
    {
     code: "NOV29",
     name: "NOVEMBER 2029",
     start_date: "11\/1",
     end_date: "30\/11",
     status: "ACTIVE"
    },
    {
     code: "DEC29",
     name: "DECEMBER 2029",
     start_date: "12\/1",
     end_date: "31\/12",
     status: "ACTIVE"
    },
    {
     code: "JAN30",
     name: "JANUARY 2030",
     start_date: "1\/1",
     end_date: "31\/01",
     status: "ACTIVE"
    },
    {
     code: "FEB30",
     name: "FEBRUARY 2030",
     start_date: "2\/1",
     end_date: "28\/02",
     status: "ACTIVE"
    },
    {
     code: "MAR30",
     name: "MARCH 2030",
     start_date: "3\/1",
     end_date: "31\/03",
     status: "ACTIVE"
    },
    {
     code: "APR30",
     name: "APRIL 2030",
     start_date: "4\/1",
     end_date: "30\/04",
     status: "ACTIVE"
    },
    {
     code: "MAY30",
     name: "MAY 2030",
     start_date: "5\/1",
     end_date: "31\/05",
     status: "ACTIVE"
    },
    {
     code: "JUN30",
     name: "JUNE 2030",
     start_date: "6\/1",
     end_date: "30\/06",
     status: "ACTIVE"
    },
    {
     code: "JUL30",
     name: "JULY 2030",
     start_date: "7\/1",
     end_date: "31\/7",
     status: "ACTIVE"
    },
    {
     code: "AUG30",
     name: "AUGUST 2030",
     start_date: "8\/1",
     end_date: "31\/8",
     status: "ACTIVE"
    },
    {
     code: "SEP30",
     name: "SEPTEMBER 2030",
     start_date: "9\/1",
     end_date: "30\/9",
     status: "ACTIVE"
    },
    {
     code: "OCT30",
     name: "OCTOBER 2030",
     start_date: "10\/1",
     end_date: "31\/10",
     status: "ACTIVE"
    },
    {
     code: "NOV30",
     name: "NOVEMBER 2030",
     start_date: "11\/1",
     end_date: "30\/11",
     status: "ACTIVE"
    },
    {
     code: "DEC30",
     name: "DECEMBER 2030",
     start_date: "12\/1",
     end_date: "31\/12",
     status: "ACTIVE"
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
          <Table columns={columns} dataSource={PERIOD}/>
          <Modal
                title='Period Setup'
                open={isModalOpen}
                onCancel={handleCancel}
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
                    <div className=' mb-7'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Code</label>
                      <input type="text" name="code"  className="form-control form-control-solid"/>
                    </div>
                    <div className=' mb-7'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                      <input type="text" name="name"  className="form-control form-control-solid"/>
                    </div>
                    <div className=' mb-7'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Status</label>
                      <select className="form-select form-select-solid" aria-label="Select example">
                        <option> select</option>
                        <option value="1">ACTIVE </option>
                        <option value="2">INACTIVE</option>
                      </select>
                    </div>
                  </div>
                </Form>
            </Modal>
        </div>
      </KTCardBody>
    </div>
  )
}

export {Period}
