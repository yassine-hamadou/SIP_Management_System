import { Button, Form, Input, message, Space, Table } from 'antd'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { ENP_URL } from "../../../../urls";
import { fetchDocument, fetchEmployees } from '../../../../../../services/ApiCalls'
import { KTCardBody, KTSVG } from '../../../../../../../_metronic/helpers'
import { useQuery } from 'react-query';
import moment from 'moment';



const LeaveApproval = () => {
    const [gridData, setGridData] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchText, setSearchText] = useState('')
    let [filteredData] = useState([])
    const [submitLoading, setSubmitLoading] = useState(false)
    const [form] = Form.useForm()
    const [img, setImg] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useNavigate()
    const tenantId = localStorage.getItem('tenant')
    function approveLeave(record: any) {
        message.error('function not implemented').then(r => console.log(r));
    }
    function declineLeave(record: any) {
        message.error('function not implemented').then(r => console.log(r));
    }

    const { data: leaves } = useQuery('leaves', () => fetchDocument(`Leaves/tenant/${tenantId}`), { cacheTime: 5000 })
    const { data: leavePlanning } = useQuery('leaveplannings', () => fetchDocument(`LeavePlanings/tenant/${tenantId}`), { cacheTime: 5000 })
    const { data: units } = useQuery('units', () => fetchDocument(`units/tenant/${tenantId}`), { cacheTime: 5000 })
    const { data: employees } = useQuery('employees', () => fetchEmployees(tenantId), { cacheTime: 5000 })


    // get employee code from employees where employeeId from leavePlanning matches employeeId from employees
    const employeeCode = (employeeId: any) => {
        const employee = employees?.data?.find((employee: any) => employee.id === employeeId)
        return employee?.employeeId
    }

    // get leave type name from leaves where leaveId from leavePlanning matches leaveId from leaves
    const leaveTypeName = (leaveId: any) => {
        const leave = leaves?.data?.find((leave: any) => leave.id === leaveId)
        return leave?.name
    }

    // get image from employees where employeeId from leavePlanning matches employeeId from employees
    const employeeImage = (employeeId: any) => {
        const employee = employees?.data?.find((employee: any) => employee.id === employeeId)
        return employee?.imageUri
    }

    // get unit name from units where unitId from leavePlanning matches unitId from units
    const unitName = (unitId: any) => {
        const unit = units?.data?.find((unit: any) => unit.id === unitId)
        return unit?.name
    }
    
 


    function employeeDetail(record: any) {
        console.log("record from detail button", record)
        navigate(`${record.code}`)
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
            const response = await axios.delete(`${ENP_URL}/LeavePlanings/${element.id}`)
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
            dataIndex: 'employeeId',
            render: (record: any) => {
                return <img style={{ borderRadius: "10px" }} src={employeeImage(record)} width={50} height={50}></img>
            }
        },
        {
            title: 'Employee Code',
            dataIndex: 'employeeId',
            sorter: (a: any, b: any) => {
                if (a.empcode > b.empcode) {
                    return 1
                }
                if (b.empcode > a.empcode) {
                    return -1
                }
                return 0
            },
            render: (record: any) => {
                return <span>{employeeCode(record)}</span>
            }
        },
        {
            title: 'Unit',
            dataIndex: 'unitId',
            sorter: (a: any, b: any) => {
                if (a.depart > b.depart) {
                    return 1
                }
                if (b.depart > a.depart) {
                    return -1
                }
                return 0
            },
            render: (record: any) => {
                return <span>{unitName(record)}</span>
            }
        },
        {
            title: 'Type of Leave',
            dataIndex: 'leaveId',
            sorter: (a: any, b: any) => {
                if (a.depart > b.depart) {
                    return 1
                }
                if (b.depart > a.depart) {
                    return -1
                }
                return 0
            },
            render: (record: any) => {
                return <span>{leaveTypeName(record)}</span>
            }
        },
        {
            title: 'From',
            dataIndex: 'fromDate',
            sorter: (a: any, b: any) => {
                if (a.depart > b.depart) {
                    return 1
                }
                if (b.depart > a.depart) {
                    return -1
                }
                return 0
            },
            render: (record: any) => {
                return <span>{moment(record).format('DD-MM-YYYY')}</span>
            }
        },
        {
            title: 'To',
            dataIndex: 'toDate',
            sorter: (a: any, b: any) => {
                if (a.depart > b.depart) {
                    return 1
                }
                if (b.depart > a.depart) {
                    return -1
                }
                return 0
            },
            render: (record: any) => {
                return <span>{moment(record).format('DD-MM-YYYY')}</span>
            }
        },
        {
            title: 'Duration of Leave',
            // dataIndex: 'depart',
            sorter: (a: any, b: any) => {
                if (a.depart > b.depart) {
                    return 1
                }
                if (b.depart > a.depart) {
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
                    <span className='btn btn-light-info btn-sm' onClick={(record) => approveLeave(record)}>Approve</span>
                    <span className='btn btn-light-info btn-sm' onClick={(record) => declineLeave(record)}>Decline</span>
                </Space>
            ),

        },
    ]

    const { data: allEmployee } = useQuery('employee', ()=>fetchEmployees(tenantId), { cacheTime: 5000 })



    const loadData = async () => {
        setLoading(true)
        try {
            // const response = await axios.get(`${ENP_URL}/LeavePlanings/tenant/${tenantId}`)
            setGridData(leavePlanning?.data)
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
                    <div className="mb-5">
                        <div>
                            <button className='mb-3 btn btn-outline btn-outline-dashed btn-outline-primary btn-active-light-primary' onClick={() => navigate(-1)}>Go Back</button>
                        </div>
                    </div>
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
                    </div>
                    <Table columns={columns} dataSource={gridData} />
                </div>
            </KTCardBody>
        </div>
    )
}

export { LeaveApproval }



