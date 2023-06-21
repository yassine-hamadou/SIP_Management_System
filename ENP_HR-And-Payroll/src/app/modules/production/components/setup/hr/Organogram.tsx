import { Button, Form, Input, InputNumber, Modal, Space, Table } from 'antd'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { KTCardBody, KTSVG } from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Api_Endpoint, fetchDocument, fetchGrades, fetchLeaveTypes, fetchPaygroups, updateGrade, updateGradeLeave, updateItem } from '../../../../../services/ApiCalls'
import { useMutation, useQuery, useQueryClient } from 'react-query'

const Organogram = () => {
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
  const { data: allEmployees } = useQuery('employess', () => fetchDocument(`employees/tenant/${tenantId}`), { cacheTime: 5000 })

  const levels = [
    'Level 0', 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6', 
   ]
  
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

  const employeeName = (employeeId: any) => {
    const employee = allEmployees?.data?.find((employee: any) => employee.id === employeeId)
    const name = `${employee?.firstName} ${employee?.surname}`
    return name
}

  const deleteData = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/organograms/${element.id}`)
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
      title: 'Employee',
      dataIndex: 'employeeId',
      sorter: (a: any, b: any) => {
        if (a.code > b.code) {
          return 1
        }
        if (b.code > a.code) {
          return -1
        }
        return 0
      },
      render: (employeeId: any) => {
        return <span>{employeeName(employeeId)}</span>
      }
    
    },
    // {
    //   title: 'Supervisor',
    //   dataIndex: 'id',
    //   sorter: (a: any, b: any) => {
    //     if (a.name > b.name) {
    //       return 1
    //     }
    //     if (b.name > a.name) {
    //       return -1
    //     }
    //     return 0
    //   },
    //   render: (supervisorId: any) => employeeName(supervisorId)
    // },
    {
      title: 'Current Level',
      dataIndex: 'currentLevel',
      sorter: (a: any, b: any) => {
        if (a.startDate > b.startDate) {
          return 1
        }
        if (b.startDate > a.startDate) {
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
          <Link to={`/next/${record.id}/0`}>
            <span className='btn btn-light-info btn-sm'>Next</span>
          </Link>
          <a onClick={() => showUpdateModal(record)} className='btn btn-light-warning btn-sm'>
            Update
          </a>
          <a onClick={() => handleDelete(record)} className='btn btn-light-danger btn-sm disabled'>
            Delete
          </a>

        </Space>
      ),

    },
  ]

  const dataByID = gridData?.filter((section: any) => {
    return section?.gradeId?.toString() === param.id
  })



  // this filters for only gradeLeaves for the pARAM ID 

  const loadData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/organograms`)
      // filter for currentLevel equal to Level 0
      const data = response?.data.filter((item: any) => item.currentLevel === 'Level 0')
      setGridData(data)
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
  const { isLoading, mutate: updateData } = useMutation(updateItem, {
    onSuccess: (data) => {
      queryClient.setQueryData(['organograms', tempData.id], data);
      reset()
      setTempData({})
      loadData()/*  */
      setIsUpdateModalOpen(false)
      setIsModalOpen(false)
    },
    onError: (error) => {
      console.log('error: ', error)
    }
  })

  const handleUpdate = (e: any) => {
    e.preventDefault()
    updateData(tempData)
    console.log('update: ', tempData)
  }

  const showUpdateModal = (values: any) => {
    setIsUpdateModalOpen(true)
    showModal()
    setTempData(values);
    console.log(values)
  }


  const url = `${Api_Endpoint}/organograms`
  const OnSubmit = handleSubmit(async (values) => {
    setLoading(true)
    const data = {
      employeeId: values.employeeId,
      supervisorId: values.employeeId,
      currentLevel: 'Level 0',
      isAssistant: '0',
      tenantId: tenantId,
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
            {/* <Space style={{ marginBottom: 16 }}>
              <button type='button' className='btn btn-primary me-3' onClick={showModal}>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                Add
              </button>

              <button type='button' className='btn btn-light-primary me-3'>
                <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
                Export
              </button>
            </Space> */}
          </div>
          <Table columns={columns} dataSource={gridData} loading={loading} />
          <Modal
            title={isUpdateModalOpen ? 'Update Roaster' : 'Add Roaster'}
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
                onClick={isUpdateModalOpen ? handleUpdate : OnSubmit}
              >
                Submit
              </Button>,
            ]}
          >
            <form
              onSubmit={isUpdateModalOpen ? handleUpdate : OnSubmit}
            >
              <hr></hr>
              <div style={{ padding: "20px 20px 20px 20px" }} className='row mb-0 '>

                
                <div className=' mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Employee</label>
                  <select {...register("employeeId")} 
                  value={isUpdateModalOpen === true ? tempData?.employeeId :null} 
                  onChange={handleChange} className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option value="Select">Select</option> : null}
                    {
                      allEmployees?.data.map((item: any) => (
                        <option value={item.id}>{`${item?.firstName} ${item?.surname}`}</option>
                      ))
                    }
                  </select>
                </div>
                {/* <div className=' mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Supervisor</label>
                  <select {...register("supervisorId")} 
                  value={isUpdateModalOpen === true ? tempData?.supervisorId :null} 
                  onChange={handleChange} className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option value="Select">Select</option> : null}
                    {
                      allEmployees?.data.map((item: any) => (
                        <option value={item.id}>{`${item?.firstName} ${item?.surname}`}</option>
                      ))
                    }
                  </select>
                </div> */}
                <div className=' mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Current level</label>
                  <select {...register("currentLevel")} 
                    value={isUpdateModalOpen === true ? tempData?.currentLevel : null}
                    onChange={handleChange} disabled={true} className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option value="Select">Select</option> : null}
                    {
                      levels.map((item: any) => (
                        <option value={item}>{item}</option>
                      ))
                    }
                  </select>
                </div>
                
              </div>
            </form>
          </Modal>
        </div>
      </KTCardBody>
    </div>
  )
}

export { Organogram }
