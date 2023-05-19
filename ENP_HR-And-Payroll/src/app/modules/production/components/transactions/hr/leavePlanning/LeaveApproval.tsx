import {Button, Form, Input, message, Space, Table} from 'antd'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import { useQuery } from 'react-query'
import {ENP_URL} from "../../../../urls";
import { fetchEmployees } from '../../../../../../services/ApiCalls'
import {KTCardBody, KTSVG} from '../../../../../../../_metronic/helpers'



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
    function approveLeave(record: any) {
        message.error('function not implemented').then(r => console.log(r));
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
            dataIndex: 'name',
            render: (a: any, b: any) => {
                return  <img style={{borderRadius:"10px"}} src={img} width={50} height={50}></img>
            }
        },
        {
            title: 'Employee Code',
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
            title: 'Unit',
            dataIndex: 'depart',
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
            title: 'Type of Leave',
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
            title: 'From',
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
            title: 'To',
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
                </Space>
            ),

        },
    ]

    const {data:allEmployee} = useQuery('employee', fetchEmployees, {cacheTime:5000})



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
                    </div>
                    <Table columns={columns} />
                </div>
            </KTCardBody>
        </div>
    )
}

export {LeaveApproval}



