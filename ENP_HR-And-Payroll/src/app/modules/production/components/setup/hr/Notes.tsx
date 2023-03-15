import {Button, Form, Input, InputNumber, Modal, Radio, Space, Table} from 'antd'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {KTCardBody, KTSVG} from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'
import { NOTES } from '../../../../../data/DummyData'
import { useForm } from 'react-hook-form'
import { Api_Endpoint } from '../../../../../services/ApiCalls'

const Notes = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const {register, reset, handleSubmit} = useForm()
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
  }

  const deleteData = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/NoteCategories/${element.id}`)
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
      title: 'Type',
      dataIndex: 'type',
      sorter: (a: any, b: any) => {
        if (a.type > b.type) {
          return 1
        }
        if (b.type > a.type) {
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
      const response = await axios.get(`${Api_Endpoint}/NoteCategories`)
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

  const url = `${Api_Endpoint}/NoteCategories`
  const OnSUbmit = handleSubmit( async (values)=> {
    setSubmitLoading(true)
    const data = {
          code: values.code,
          name: values.name,
          type: values.type,
          diaryEvent: parseInt(values.diaryEvent),
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
          <Table columns={columns} dataSource={dataWithIndex} loading={loading} />
          <Modal
                title='Note Setup'
                open={isModalOpen}
                onCancel={handleCancel}
                closable={true}
                width={700}
                footer={[
                    <Button key='back' onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button
                    key='submit'
                    type='primary'
                    htmlType='submit'
                    loading={submitLoading}
                    onClick={OnSUbmit}
                    >
                        Submit
                    </Button>,
                ]}
            >
                <form
                  onSubmit={OnSUbmit}  
                >
                    
                    <hr></hr>
                    <div style={{padding: "20px 20px 20px 20px"}} className='row mb-0 '>
                    <div className=' mb-7'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Code</label>
                      <input type="text" {...register("code")}  className="form-control form-control-solid"/>
                    </div>
                    <div className=' mb-7'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                      <input type="text" {...register("name")}  className="form-control form-control-solid"/>
                    </div>
                    
                    <div className='row col-12'>

                      <div className='col-6 mb-7'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Type</label>
                        <br></br>
                        <br></br>

                        <input className="form-check-input" {...register("type")}  type="radio" value="Disciplinary"/>
                          <span style={{marginRight:"20px"}} className="form-check-label">
                              Disciplinary
                          </span>
                        <input className="form-check-input" {...register("type")} type="radio" value="Grievances"/>
                          <span className="form-check-label">
                              Grievances
                          </span>
                        {/* <br></br> */}
                        {/* <Radio.Group {...register("type")} >
                          <Radio  value={1}>Disciplinary Action</Radio>
                          <Radio value={2}>Grievances</Radio>
                        </Radio.Group> */}
                      </div>
                      <div className='col-6 mb-7'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">isDiary Event</label>
                        <br></br>
                        <br></br>

                        <input className="form-check-input" {...register("diaryEvent")}  type="radio" value="1"/>
                          <span style={{marginRight:"20px"}} className="form-check-label">
                              Yes
                          </span>
                        <input className="form-check-input" {...register("diaryEvent")} type="radio" value="0"/>
                          <span className="form-check-label">
                              No
                          </span>
                        {/* <br></br> */}
                        {/* <Radio.Group {...register("type")} >
                          <Radio  value={1}>Disciplinary Action</Radio>
                          <Radio value={2}>Grievances</Radio>
                        </Radio.Group> */}
                      </div>
                    </div>
                  </div>
                </form>
            </Modal>
        </div>
      </KTCardBody>
    </div>
  )
}

export {Notes}
