import {Button, Form, Input, Modal, Space, Table} from 'antd'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {KTCardBody, KTSVG} from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'
import { Api_Endpoint, fetchDocument } from '../../../../../services/ApiCalls'
import { useQuery } from 'react-query'
import { EmployeeSelection } from '../hr/Common/EmployeeSelection'
import { TimeSheetComponent } from './timeSheet/TimesheetComponent'

const TimeSheet = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const [form] = Form.useForm()
  
  const [selectedPeriodId, setSelectedPeriodId] = useState<any>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<any>(null);
  const tenantId = localStorage.getItem('tenant')

  const deleteData = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/TimeSheets/${element.id}`)
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
      dataIndex: 'empcode',
      sorter: (a: any, b: any) => {
        if (a.empcode > b.empcode) {
          return 1
        }
        if (b.empcode > a.empcode) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'First Name',
      dataIndex: 'firstname',
      sorter: (a: any, b: any) => {
        if (a.firstname > b.firstname) {
          return 1
        }
        if (b.firstname > a.firstname) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Last Name',
      dataIndex: 'lastname',
      sorter: (a: any, b: any) => {
        if (a.lastname > b.lastname) {
          return 1
        }
        if (b.lastname > a.lastname) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'DOB',
      dataIndex: 'dob',
      sorter: (a: any, b: any) => {
        if (a.dob > b.dob) {
          return 1
        }
        if (b.dob > a.dob) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Gender',
      dataIndex: 'sex',
      sorter: (a: any, b: any) => {
        if (a.sex > b.sex) {
          return 1
        }
        if (b.sex > a.sex) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Job Title',
      dataIndex: 'jobt',
      sorter: (a: any, b: any) => {
        if (a.jobt > b.jobt) {
          return 1
        }
        if (b.jobt > a.jobt) {
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
          {/* <a href='#' onClick={showShortModal} className='btn btn-light-primary btn-sm'>
            Details
          </a> */}
          {/* <a  className='btn btn-light-primary btn-sm'>
            Details
          </a> */}
         
        </Space>
      ),
      
    },
  ]

  const { data: allPeriods } = useQuery('periods', () => fetchDocument(`Periods/tenant/${tenantId}`), { cacheTime: 5000 })
  const { data: allDepartments } = useQuery('department', () => fetchDocument(`Departments/tenant/${tenantId}`), { cacheTime: 5000 })
  const { data: employees } = useQuery('employees', () => fetchDocument(`Employees/tenant/${tenantId}`), { cacheTime: 5000 })
  const { data: jobTitles } = useQuery('jobTitles', () => fetchDocument(`JobTitles/tenant/${tenantId}`), { cacheTime: 5000 })

  const loadData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/TimeSheets`)
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

  console.log( selectedDepartment);
  

  const url = `${Api_Endpoint}/TimeSheets`
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
      loadData()
      return response.statusText
    } catch (error: any) {
      setSubmitLoading(false)
      return error.statusText
    }
  }

  return (
    <>
    <div className='row'
     
    >

      <div
        className='col-12'
        style={{
          backgroundColor:'white',
          padding: '20px',
          borderRadius: '5px',
          boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
        }}
      >
        <div className='d-flex justify-content-between'>

          <div className='col-7' style={{padding: "0px 0px 20px 0px"}}  >
            <div style={{padding: "20px 0px 0 0px"}} className='col-8 row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Payroll Period</label>
                <select className="form-select form-select-solid" onChange={(e) => setSelectedPeriodId(e.target.value)}>
                  <option> select</option>
                  {allPeriods?.data?.map((item: any) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Department</label>
                <select className="form-select form-select-solid" onChange={(e) => setSelectedDepartment(e.target.value)}>
                  <option> select</option>
                  {allDepartments?.data?.map((item: any) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

            </div>

              <div className='d-flex justify-content-between'>
                <Space style={{marginBottom: 16}}>
                  <Input
                    placeholder='Enter Search Text'
                    onChange={handleInputChange}
                    type='text'
                    allowClear
                  />
                </Space>
                <Space style={{marginBottom: 16}}>
                  <EmployeeSelection departmentId={selectedDepartment} />
                  <button type='button' className='btn btn-light-primary me-3'>
                    <KTSVG path='/media/icons/duotune/arrows/arr091.svg' className='svg-icon-2' />
                    Upload
                </button>
                </Space>
              </div>
              <Table columns={columns}  />
          </div>
          <div className='col-5'>
                  
            <TimeSheetComponent/>
          </div>
        </div>
        
            
           
        
      </div>
    </div>
    </>
  )
}

export {TimeSheet}



