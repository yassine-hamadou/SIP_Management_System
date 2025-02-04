import { Breadcrumb, Button, Form, Input, InputNumber, Modal, Skeleton, Space, Table, message } from 'antd'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { KTCardBody, KTSVG } from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Api_Endpoint, deleteItem, fetchDocument, fetchGrades, fetchLeaveTypes, fetchPaygroups, postItem, updateGrade, updateGradeLeave, updateItem } from '../../../../../services/ApiCalls'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Employee } from '../../employee/Employee'
import { ArrowLeftOutlined } from "@ant-design/icons"

const OrgLevel = () => {
  const [searchText, setSearchText] = useState('')
  const [gridData, setGridData] = useState([])
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const { register, reset, handleSubmit } = useForm()
  const param: any = useParams();
  const currentLevel = parseInt(param.level) + 1
  const navigate = useNavigate();
  const [tempData, setTempData] = useState<any>()
  const [itemToUpdate, setUpdateItem] = useState<any>()
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const tenantId = localStorage.getItem('tenant')
  const [supervisorName, setSupervisorName] = useState('')
  const { data: allEmployees } = useQuery('employees', () => fetchDocument(`employees`), { cacheTime: 5000 })
  const { data: allOrganograms, isLoading: loading } = useQuery('organograms', () => fetchDocument(`organograms`), { cacheTime: 5000 })
  const [breadcrumbs, setBreadcrumbs]: any = useState<any>([])
  const [treeData, setTreeData] = useState<any>([])


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

  const reRenderScreen = () => {
    if (currentLevel <= 10) {
      navigate(`/next/${param.id}/${currentLevel}`)
    }
  }

  const { mutate: deleteData } = useMutation(deleteItem, {
    onSuccess: () => {
      queryClient.invalidateQueries('organograms')
      loadData()
    },
    onError: (error) => {
      console.log('delete error: ', error)
      message.error('Error deleting record')
    }
  })

  function handleDelete(element: any) {
    const item = {
      url: 'organograms',
      data: element
    }
    deleteData(item)
  }

  const employeeName = (employeeId: any) => {
    const employee = allEmployees?.data?.find((employee: any) => employee.employeeId === employeeId.trim())
    const name = `${employee?.firstName} ${employee?.surname}`
    return name
  }

  // jobrole
  const jobRole = (employeeId: any) => {
    const jobRole = allEmployees?.data?.find((employee: any) => employee.employeeId === employeeId)
    const name = `${jobRole?.jobRole}`
    return name
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
      render: (employeeId: any) => employeeName(employeeId)
    },
    {
      title: 'Job Role',
      dataIndex: 'employeeId',
      sorter: (a: any, b: any) => {
        if (a.name > b.name) {
          return 1
        }
        if (b.name > a.name) {
          return -1
        }
        return 0
      },
      render: (employeeId: any) => jobRole(employeeId)
    },
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
          {
            currentLevel < 10 ?
              <Link to={`/next/${record.id}/${currentLevel}`} onClick={() => addItemtoBreadcrumb(record)} >
                <span className='btn btn-light-info btn-sm' >Next</span>
              </Link>
              : null
          }
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

  const dataByID = gridData?.filter((section: any) => {
    return section?.gradeId?.toString() === param.id
  })


  const addItemtoBreadcrumb = (item: any) => {
    console.log('breadcrumbItem: ', item)
    const newItem = {
      title: <a onClick={() => navigate(-1)}>{employeeName(item.employeeId)}</a>
    }
    setBreadcrumbs([...breadcrumbs, newItem])
    console.log('breadcrumb: ', breadcrumbs)
  }

  const removeItemFromBreadcrumb = (index: any) => {
    setBreadcrumbs(breadcrumbs.slice(0, index))
  }

  const createEmployeeTree = (data: any) => {
    const employeeMap: any = {};

    // Populate the employeeMap with employee data and initialize children array
    for (const employee of data) {
      const { id, supervisorId, ...rest } = employee;
      const employeeData = { id, ...rest, children: [], title: <> <span className='fw-bold text-gray-800 d-block fs-4'>{employeeName(employee.employeeId)}</span>  </> };
      employeeMap[id] = employeeData;
    }

    const rootEmployees = [];

    // Build the tree structure by assigning children to their respective parent employees
    for (const employee of data) {
      const { id, supervisorId } = employee;
      const employeeData = employeeMap[id];

      const parsedSupervisorId = parseInt(supervisorId, 10); // Parse supervisorId to int

      if (!isNaN(parsedSupervisorId) && parsedSupervisorId in employeeMap) {
        const parentEmployee = employeeMap[parsedSupervisorId];
        parentEmployee.children.push(employeeData);
      } else {
        rootEmployees.push(employeeData);
      }
    }
    return rootEmployees;
  }

  const pathName = () => {
    const levelItem = allOrganograms?.data.find((item: any) => item.id.toString() === param.id)
    const getSupervisor = allEmployees?.data?.find((employee: any) => employee.employeeId === levelItem?.employeeId)
    const name = `${getSupervisor?.firstName} ${getSupervisor?.surname}`
    setSupervisorName(name)
  }

  const loadData = async () => {
    try {
      const response = allOrganograms?.data
      if (param.level === '0') {
        const data = response.filter((item: any) => item.currentLevel === 'Level 0')
        const employees = allEmployees?.data
        const getSupervisor = employees.find((employee: any) => employee.employeeId === data?.employeeId)
        const name = `${getSupervisor?.firstName} ${getSupervisor?.surname}`
        setSupervisorName(name)
      }
      pathName()
      const filteredBySupervisor = response.filter((item: any) => item?.supervisorId === param.id)
      setGridData(filteredBySupervisor)
      setTreeData(createEmployeeTree(response))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    pathName()
    loadData()
  }, [param, currentLevel, supervisorName])



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
  const { mutate: updateData } = useMutation(updateItem, {
    onSuccess: () => {
      queryClient.invalidateQueries('organograms')
      message.success('Organogram updated successfully')
      reset()
      loadData()
      setTempData({})
      setIsModalOpen(false)
    },
    onError: (error) => {
      console.log('error: ', error)
      message.error('Organogram update failed')
    }
  })

  const handleUpdate = (e: any) => {
    e.preventDefault()
    const item: any = {
      data: tempData,
      url: 'organograms'
    }
    if (tempData.employeeId != itemToUpdate.employeeId) {
      // verify that the employeeId is not already in the organogram table
      const checkEmployee = allOrganograms?.data.find((item: any) => item.employeeId === tempData.employeeId)
      if (checkEmployee) {
        const name = employeeName(tempData.employeeId)
        message.error(`${name} already exists in the organogram table`)
        return
      }
      updateData(item)
      return
    }
    updateData(item)
  }

  const showUpdateModal = (values: any) => {
    setIsUpdateModalOpen(true)
    showModal()
    setTempData(values);
    setUpdateItem(values)
    // console.log(values)
  }


  const url = `${Api_Endpoint}/organograms`
  const OnSubmit = handleSubmit(async (values) => {
    if (values.employeeId === 'Select') {
      message.error('Please select an employee')
      return
    }
    const item = {
      data: {
        employeeId: values.employeeId,
        supervisorId: param.id,
        currentLevel: `Level ${currentLevel}`,
        isAssistant: values.isAssistant === 'Select' ? '0' : values.isAssistant,
        tenantId: tenantId,
      },
      url: 'organograms'
    }
    console.log(item.data)

    //if employeeId already exists in the organogram table, return error
    const checkEmployee = allOrganograms?.data.find((item: any) => item.employeeId === item.data.employeeId)
    if (checkEmployee) {
      setSubmitLoading(false)
      const name = employeeName(values.employeeId)
      message.error(`${name} already exists in the organogram`)
      return
    }

    setIsModalOpen(false)
    postData(item)
    setSubmitLoading(false)
    reset()
  })

  const { mutate: postData } = useMutation(postItem, {
    onSuccess: () => {
      queryClient.invalidateQueries('organograms')
      loadData()
      reset()
      setTempData({})
      setIsModalOpen(false)
      setSubmitLoading(false)
      message.success('Item added successfully')
    },
    onError: (error: any) => {
      setSubmitLoading(false)
      console.log('post error: ', error)
    }
  })

  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
      }}>
      <KTCardBody className='py-4 '>
        <div className='table-responsive'>
          <Space className='d-flex align-items-center align-content-center mb-3 flex-direction-row' >
            <Button
              onClick={() => navigate(-1)}
              className="btn btn-light-primary me-4"
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
              }}
              type="primary" shape="circle" icon={<ArrowLeftOutlined rev={''} />} size={'large'}
            />
            <span className="fw-bold text-gray-600 d-block fs-2 mb-3 ">{supervisorName}</span>
            {/* <> <Breadcrumb separator=">" items={breadcrumbs} className="mb-3" /> </> */}
          </Space>
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
          {
            loading ? <Skeleton active /> :
              <Table columns={columns} dataSource={gridData} />
          }
          <Modal
            title={isUpdateModalOpen ? 'Update Organogram ' : 'Add Employee to Organogram'}
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
                    value={isUpdateModalOpen === true ? tempData?.employeeId : null}
                    onChange={handleChange} className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option value="Select">Select</option> : null}
                    {
                      allEmployees?.data.map((item: any) => (
                        <option value={item.employeeId}>{`${item?.firstName} ${item?.surname}`}</option>
                      ))
                    }
                  </select>
                </div>
                <div className=' mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Current Level</label>
                  <input type="text" {...register("currentLevel")} disabled={true}
                    defaultValue={isUpdateModalOpen === true ? tempData.currentLevel : `Level ${currentLevel}`}
                    onChange={handleChange} className="form-control form-control-solid" />
                </div>
                <div className=' mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Is assistant</label>
                  <select {...register("isAssistant")}
                    value={isUpdateModalOpen === true ? tempData?.isAssistant : null}
                    onChange={handleChange} className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option value="Select">Select</option> : null}
                    <option value="1">Yes</option>
                    <option value="0">No</option>
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

export { OrgLevel }
