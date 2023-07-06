import {Button, Form, Input, InputNumber, Modal, Space, Table} from 'antd'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {KTCardBody, KTSVG} from '../../../../../_metronic/helpers'
import { ENP_URL } from '../../urls'
import { Link } from 'react-router-dom'
import { useQuery, useQueryClient } from 'react-query'
import {read, utils, writeFile} from "xlsx"
import { Api_Endpoint, axioInstance, fetchDepartments, fetchEmployees, fetchGrades, fetchNotches, fetchPaygroups } from '../../../../services/ApiCalls'
import { Roaster } from '../setup/hr/Roater'
import { EmpSummaryDashBoard } from '../../../../pages/dashboard/charts/HRNewDashBoard'


const Employee = () => {
  const [gridData, setGridData] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const [form] = Form.useForm()
  const [img, setImg] = useState();
  const [imgNew, setImgNew] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('employeeDetail');
  const queryClient = useQueryClient()

  const handleTabClick = (tab:any) => {
    setActiveTab(tab);
  }

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
      title: 'Profile',
      key: 'imageUrl',
      render: (row:any) => {
       
        return  (
          row.imageUrl!==null?  
          <img style={{borderRadius:"10px"}} src={`http://208.117.44.15/hrwebapi/uploads/employee/${row.imageUrl}`} width={50} height={50}></img>:
          <img style={{borderRadius:"10px"}} src={`http://208.117.44.15/hrwebapi/uploads/employee/ahercode1.jpg`} width={50} height={50}></img>
        )
      }
    },
    {
      title: 'EmployeeID',
      dataIndex: 'employeeId',
      sorter: (a: any, b: any) => {
        if (a.employeeId > b.employeeId) {
          return 1
        }
        if (b.employeeId > a.employeeId) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      sorter: (a: any, b: any) => {
        if (a.firstName > b.firstName) {
          return 1
        }
        if (b.firstName > a.firstName) {
          return -1
        }
        return 0
      },
    },
   
    {
      title: 'Surname',
      dataIndex: 'surname',
      sorter: (a: any, b: any) => {
        if (a.surname > b.surname) {
          return 1
        }
        if (b.surname > a.surname) {
          return -1
        }
        return 0
      },
    },

    {
      title: 'Gender',
      dataIndex: 'gender',
      sorter: (a: any, b: any) => {
        if (a.gender > b.gender) {
          return 1
        }
        if (b.gender > a.gender) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Paygroup',
      key: 'paygroupId',
      render: (row: any) => {
        return getPaygroupName(row.paygroupId)
      },
      sorter: (a: any, b: any) => {
        if (a.paygroupId > b.paygroupId) {
          return 1
        }
        if (b.paygroupId > a.paygroupId) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Salary Grade',
      key: 'gradeId',
      render: (row: any) => {
        return getGradeName(row.gradeId)
      },
      sorter: (a: any, b: any) => {
        if (a.gradeId > b.gradeId) {
          return 1
        }
        if (b.gradeId > a.gradeId) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Notch',
      key: 'notchId',
      render: (row: any) => {
        return getNotchName(row.notchId)
      },
      sorter: (a: any, b: any) => {
        if (a.notchId > b.notchId) {
          return 1
        }
        if (b.notchId > a.notchId) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Department',
      key: 'departmentId',
      render: (row: any) => {
        return getDepartmentName(row.departmentId)
      },
      
      sorter: (a: any, b: any) => {
        if (a.departmentId > b.departmentId) {
          return 1
        }
        if (b.departmentId > a.departmentId) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      sorter: (a: any, b: any) => {
        if (a.phone > b.phone) {
          return 1
        }
        if (b.phone > a.phone) {
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
          <Link to={`/employee-edit-form/${record.id}`}>
            <span className='btn btn-light-info btn-sm'>Update</span>
          </Link>
          <Link to={`/employee-details/${record.id}`}>
            <span className='btn btn-light-success btn-sm'>Details</span>
          </Link>
        </Space>
      ),
      
    },
  ]

  const {data:allEmployee, isLoading} = useQuery('employees',() =>fetchEmployees(tenantId), {cacheTime:5000})
  const {data:allDepartments} = useQuery('department',() => fetchDepartments(tenantId), {cacheTime:5000})
  const {data:allPaygroups} = useQuery('paygroup',() => fetchPaygroups(tenantId), {cacheTime:5000})
  const {data:allNotches} = useQuery('notches',() => fetchNotches(tenantId), {cacheTime:5000})
  const {data:allGrades} = useQuery('grades',() => fetchGrades(tenantId), {cacheTime:5000})
 
  const getDepartmentName = (departmentId: any) => {
    let departmentName = null
    allDepartments?.data.map((item: any) => {
      if (item.id === departmentId) {
        departmentName=item.name
      }
    })
    return departmentName
  } 
  const getGradeName = (gradeId: any) => {
    let gradeName = null
    allGrades?.data.map((item: any) => {
      if (item.id === gradeId) {
        gradeName=item.name
      }
    })
    return gradeName
  } 
  const getPaygroupName = (paygroupId: any) => {
    let paygroupName = null
    allPaygroups?.data.map((item: any) => {
      if (item.id === paygroupId) {
        paygroupName=item.name
      }
    })
    return paygroupName
  } 
  const getNotchName = (notchId: any) => {
    let notchName = null
    allNotches?.data.map((item: any) => {
      if (item.id === notchId) {
        notchName=item.name
      }
    })
    return notchName
  } 
  const tenantId = localStorage.getItem('tenant')

  const loadData = async () => {
    setLoading(true)
    try {
      const response = allEmployee?.data
      setGridData(response)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadData()
  }, [allEmployee?.data])

  
  var out_data:any = {};
  
  gridData?.forEach(function(row:any) {
    if (out_data[row.departmentId]) {
      out_data[row.departmentId].push(row);
    } else {
      out_data[row.departmentId] = [row];
    }
  });

  const handleExport = ()=>{
    const headings = [["FirstName", "Surname","Gender", "Paygroup", "Salary-Grade", "Unit"]]
    const wb = utils.book_new()
    const ws = utils.json_to_sheet([])
    utils.sheet_add_aoa(ws, headings)
    utils.sheet_add_json(ws, gridData, {origin: "A2", skipHeader: true})
    utils.book_append_sheet(wb,ws, "Report")
    writeFile(wb, "Report.xlsx")
  }
  
  const dataWithIndex = allEmployee?.data?.map((item: any, index:any) => ({
    ...item,
    key: index,
  }))

  const handleInputChange = (e: any) => {
    setSearchText(e.target.value)
    if (e.target.value === '') {
      queryClient.invalidateQueries('employees')  
      // loadData()
    }
  }

  const globalSearch = () => {
    // @ts-ignore
    filteredData = dataWithIndex?.filter((value) => {
      return (
        value.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        value.surname.toLowerCase().includes(searchText.toLowerCase()) ||
        value.gender.toLowerCase().includes(searchText.toLowerCase()) ||
        value.employeeId.toLowerCase().includes(searchText.toLowerCase())
      )
    })
    setGridData(filteredData)
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
      <KTCardBody className='py-1 '>
        <div className='table-responsive'>
        <div className="tabs">
          
          <button 
            className={`tab ${activeTab === 'employeeDetail' ? 'active' : ''}`} 
            onClick={() => handleTabClick('employeeDetail')}
          >
            Details
          </button>
          <button 
            className={`tab ${activeTab === 'roaster' ? 'active' : ''}`} 
            onClick={() => handleTabClick('roaster')}
          >
            Roster
          </button>
          <button 
            className={`tab ${activeTab === 'summary' ? 'active' : ''}`} 
            onClick={() => handleTabClick('summary')}
          >
            Summary
          </button>        
          
          
        </div>
          
          <div className="tab-content">

          {activeTab === 'employeeDetail' && 
            <>
            
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
                  <Link to='/employee-form'>
                  <button type='button' className='btn btn-primary me-3'>
                    <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                    Add
                  </button>
                  </Link>
                  {/* <a onClick={handleExport} className='btn btn-light-primary me-3'>Export Data</a> */}
                  <button onClick={handleExport} type='button' className='btn btn-light-primary me-3'>
                    <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
                    Export
                </button>
                </Space>
              </div>
              <Table columns={columns} dataSource={dataWithIndex}  loading={isLoading}/>
            </>
          }

          {activeTab === 'roaster' && 
            <div>
              <Roaster/>
            </div>
          }

          {activeTab === 'summary' && 
            <div>
              <EmpSummaryDashBoard/>
            </div>
          }

        </div>
          
        </div>
      </KTCardBody>
    </div>
  )
}

export {Employee}
