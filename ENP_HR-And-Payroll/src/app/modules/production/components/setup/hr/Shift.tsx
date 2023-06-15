import { Button, Input, Modal, Space, Table } from 'antd'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { KTCardBody, KTSVG } from '../../../../../../_metronic/helpers'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Api_Endpoint, fetchGrades, fetchLeaveTypes, fetchPaygroups, updateGradeLeave } from '../../../../../services/ApiCalls'
import { useMutation, useQuery, useQueryClient } from 'react-query'

const Shifts = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const { register, reset, handleSubmit } = useForm()
  const param: any = useParams();
  const navigate = useNavigate();
  const [tempData, setTempData] = useState<any>()
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const tenantId = localStorage.getItem('tenant')

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    reset()
    setIsModalOpen(false)
    setIsUpdateModalOpen(false)
  }

  const handleChange = (event: any) => {
    event.preventDefault()
    setTempData({ ...tempData, [event.target.name]: event.target.value });
  }

  const deleteData = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/Shifts/${element.id}`)
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
      title: 'Start Time',
      dataIndex: 'startTime',
      sorter: (a: any, b: any) => {
        if (a.startTime > b.startTime) {
          return 1
        }
        if (b.startTime > a.startTime) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'End Time',
      dataIndex: 'endTime',
      sorter: (a: any, b: any) => {
        if (a.endTime > b.endTime) {
          return 1
        }
        if (b.endTime > a.endTime) {
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

          <a onClick={() => showUpdateModal(record)} className='btn btn-light-warning btn-sm'>
            Update
          </a>
          <a onClick={() => handleDelete(record)} className='btn btn-light-danger btn-sm'>
            Delete
          </a>

        </Space>
      ),

    },
  ]

  const { data: allGrades } = useQuery('grades', ()=> fetchGrades(tenantId), { cacheTime: 5000 })
  const { data: allPaygroups } = useQuery('paygroups', ()=> fetchPaygroups(tenantId), { cacheTime: 5000 })
  const { data: allLeaves } = useQuery('leaveTypes', ()=> fetchLeaveTypes(tenantId), { cacheTime: 5000 })

  const dataByID = gridData.filter((section: any) => {
    return section?.gradeId?.toString() === param.id
  })

  const getLeaveName = (id: any) => {
    let leaveName = null
    allLeaves?.data.map((item: any) => {
      if (item.id === id) {
        leaveName = item.name
      }
    })
    return leaveName
  }

  const getItemName = async (param: any) => {

    let newName = null

    const itemTest = await allGrades?.data.find((item: any) =>
      item.id.toString() === param
    )
    newName = await itemTest
    return newName
  }

  const loadData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/Shifts`)
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

  const queryClient = useQueryClient()
  const { isLoading, mutate } = useMutation(updateGradeLeave, {
    onSuccess: (data) => {
      queryClient.setQueryData(['shifts', tempData.id], data);
      reset()
      setTempData({})
      loadData()
      setIsUpdateModalOpen(false)
    },
    onError: (error) => {
      console.log('error: ', error)
    }
  })

  const handleUpdate = (e: any) => {
    e.preventDefault()
    mutate(tempData)
    console.log('update: ', tempData)
  }

  const showUpdateModal = (values: any) => {
    setIsUpdateModalOpen(true)
    setTempData(values);
    console.log(values)
  }


  const url = `${Api_Endpoint}/Shifts`
  const OnSUbmit = handleSubmit(async (values) => {
    setLoading(true)
    const data = {
        
      tenantId: tenantId,
      code: values.code,
      name: values.name,
      startTime: values.startTime,
      endTime: values.endTime,

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
            <Space style={{ marginBottom: 16 }}>
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
            <Space style={{ marginBottom: 16 }}>
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
            title={isUpdateModalOpen ? 'Update Shift':'Add Shift'}
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
              <div style={{ padding: "20px 20px 20px 20px" }} className='row mb-0 '>
                
                <div className=' mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Code</label>
                  <input type="text" {...register("code")}
                    defaultValue={isUpdateModalOpen === true ? tempData.code : ''} 
                    onChange={handleChange} 
                    className="form-control form-control-solid" />
                </div>
                <div className=' mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                  <input type="text" {...register("name")}
                    defaultValue={isUpdateModalOpen === true ? tempData.name : ''} 
                    onChange={handleChange} 
                    className="form-control form-control-solid" />
                </div>
                <div className=' mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Start Time</label>
                  <input type="time" {...register("startTime")} 
                  onChange={handleChange} 
                  className="form-control form-control-solid" />
                </div>
                <div className=' mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">End Time</label>
                  <input type="time" {...register("endTime")} 
                  onChange={handleChange} 
                  className="form-control form-control-solid" />
                </div>
              </div>
            </form>
          </Modal>
        </div>
      </KTCardBody>
    </div>
  )
}

export { Shifts }
