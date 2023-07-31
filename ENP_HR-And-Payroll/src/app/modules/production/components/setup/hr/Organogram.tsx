import { Button, Divider, Form, Input, InputNumber, Modal, Space, Switch, Table, Tree, message } from 'antd'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { KTCardBody, KTSVG } from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Api_Endpoint, fetchDocument, fetchGrades, fetchLeaveTypes, fetchPaygroups, postItem, updateGrade, updateGradeLeave, updateItem } from '../../../../../services/ApiCalls'
import { useMutation, useQuery, useQueryClient } from 'react-query'


const Organogram = () => {
  const [gridData, setGridData] = useState<any>([])
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
  const { data: allEmployees } = useQuery('employees', async () => await fetchDocument(`employees/tenant/${tenantId}`), { cacheTime: 5000 })
  const { data: allOrganograms } = useQuery('organograms', () => fetchDocument(`organograms/tenant/${tenantId}`), { cacheTime: 5000 })
  const [treeData, setTreeData] = useState<any>([])
  const [showTree, setShowTree] = useState<boolean>(false)
  const queryClient = useQueryClient()
  const [itemToUpdate, setUpdateItem] = useState<any>()


  const levels = [
    'Level 0', 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6',
  ]

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const onChange = (checked: boolean) => {
    setShowTree(checked)
  };

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
    const employee = allEmployees?.data?.find((employee: any) => employee?.employeeId === employeeId)
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
      render: (employeeId: any) => {
        return <span>{employeeName(employeeId)}</span>
      }
    },
    {
      title: 'Job Role',
      dataIndex: 'employeeId',
      render: (employeeId: any) => jobRole(employeeId)
    },
    {
      title: 'Current Level',
      dataIndex: 'currentLevel',
    },
    {
      title: 'Action',
      fixed: 'right',
      width: 100,
      render: (_: any, record: any) => (
        <Space size='middle'>
          {
            record?.employeeId === null ? null :
              <Link to={`/next/${record.id}/0`}>
                <span className='btn btn-light-info btn-sm'>Next</span>
              </Link>
          }
          <a onClick={() => showUpdateModal(record)} className='btn btn-light-warning btn-sm'>
            Update
          </a>
        </Space>
      ),
    },
  ]

  const dataByID = gridData?.filter((section: any) => {
    return section?.gradeId?.toString() === param.id
  })

  const createEmployeeTree = (data: any) => {
    const employeeMap: any = {};

    if (!data || !Array.isArray(data)) {
      console.error('Invalid or missing data');
      return []; // Return an empty array or handle the error as per your application's requirement
    }

    // Populate the employeeMap with employee data and initialize children array
    for (const employee of data) {
      const { id, supervisorId, ...rest } = employee;
      const employeeData = { id, ...rest, children: [], title: <> <span className='fw-bold text-gray-800 d-block fs-4'>{`${employeeName(employee.employeeId)} (${jobRole(employee.employeeId)})`}</span>  </> };
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

  // this filters for only gradeLeaves for the pARAM ID 

  const loadData = async () => {
    setLoading(true)
    try {
      const data = allOrganograms?.data
      const orgHead = data?.find((item: any) => item.currentLevel === 'Level 0')

      // if there is no orgHead, then set a default orgHead with null values
      if (!orgHead) {
        const dummy: any = {
          currentLevel: 'Level 0',
          employeeId: '',
          supervisorId: '',
          isAssistant: "0",
          tenantId: tenantId,
        }
        setGridData([dummy])
      } else {
        setGridData(allOrganograms?.data.filter((item: any) => item.currentLevel === 'Level 0'))
      }
      const td = createEmployeeTree(data)
      setTreeData(td)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadData()
  }, [allEmployees?.data, allOrganograms?.data])

  // const dataWithIndex = gridData.map((item: any, index) => ({
  //   ...item,
  //   key: index,
  // }))

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


  const { mutate: updateData } = useMutation(updateItem, {
    onSuccess: () => {
      queryClient.invalidateQueries('organograms')
      message.success('Organogram updated successfully')
      reset()
      setTempData({})
      setIsUpdateModalOpen(false)
      setIsModalOpen(false)
      loadData()
      setLoading(false)
    },
    onError: (error) => {
      setLoading(false)
      console.log('error: ', error)
      message.error('Organogram update failed')
    }
  })

  const handleUpdate = (e: any) => {
    e.preventDefault()
    setLoading(true)
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
    console.log(values)
  }


  const OnSubmit = handleSubmit(async (values) => {
    const item = {
      data: {
        employeeId: values.employeeId,
        supervisorId: values.employeeId,
        currentLevel: 'Level 0',
        isAssistant: '0',
        tenantId: tenantId,
      },
      url: 'organograms'
    }
    postData(item)
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
            <Space>
              <span className='fw-bold text-gray-800 d-block fs-3 mr-2'>Show Tree</span>
              <Divider type="vertical" />
              <Switch checked={!!showTree} onChange={setShowTree} />
            </Space>
          </div>
          {
            showTree ?
              <>
                <Tree
                  className='mt-4'
                  showLine
                  treeData={treeData}
                  defaultExpandAll={true}
                />
              </> :
              <Table columns={columns} dataSource={gridData} loading={loading} />
          }

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
