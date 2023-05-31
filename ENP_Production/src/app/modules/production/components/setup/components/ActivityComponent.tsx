import { Button, Input, Modal, Space, Table, message } from "antd"
import { useEffect, useState } from "react"
import { } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { KTCardBody } from "../../../../../../_metronic/helpers"
import { deleteItem, fetchDocument, postItem, updateItem } from "../../../urls"
import { ModalFooterButtons, PageActionButtons } from "../../CommonComponents"
import { Link, useNavigate, useParams } from "react-router-dom"
import { ArrowLeftOutlined } from "@ant-design/icons"



const ActivityDummy = [
    {
        id: 1,
        name: 'Activity 1',
        code: 'ACT1',
        activityType: 'Activity Type 1',
    },
    {
        id: 2,
        name: 'Activity 2',
        code: 'ACT2',
        activityType: 'Activity Type 2',
    },
    {
        id: 3,
        name: 'Activity 3',
        code: 'ACT3',
        activityType: 'Activity Type 3',
    },
]

const ActivityComponent = ({ data, hasActivityType }: any) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
    const [uploadedFile, setUploadedFile] = useState<any>(null)
    const [gridData, setGridData] = useState([])
    let [filteredData] = useState([])
    const [submitLoading, setSubmitLoading] = useState(false)
    const [searchText, setSearchText] = useState('')
    const tenantId = localStorage.getItem('tenant')
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [tempData, setTempData] = useState<any>()
    const { register, reset, handleSubmit } = useForm()
    const queryClient = useQueryClient()
    const param: any = useParams();
    const activityTypes: any = [
        'Haul', 'Load', 'Drill'
    ]

    const handleChange = (event: any) => {
        event.preventDefault()
        setTempData({ ...tempData, [event.target.name]: event.target.value });
    }

    const showModal = () => {
        setIsModalOpen(true)
    }

    const showUploadModal = () => {
        setIsUploadModalOpen(true)
    }

    const handleCancel = () => {
        reset()
        setIsModalOpen(false)
        setIsUploadModalOpen(false)
        setIsUpdateModalOpen(false)
    }

    const { mutate: deleteData, isLoading: deleteLoading } = useMutation(deleteItem, {
        onSuccess: (dataD) => {
            queryClient.setQueryData([data.url, tempData], dataD);
            loadData()
        },
        onError: (error) => {
            console.log('delete error: ', error)
            message.error(`${error}`)
        }
    })

    function handleDelete(element: any) {
        const item = {
            url: data.url,
            data: element
        }
        deleteData(item)
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
            title: 'Activity Type',
            dataIndex: 'activityType',
            sorter: (a: any, b: any) => {
                if (a.activityType > b.activityType) {
                    return 1
                }
                if (b.activityType > a.activityType) {
                    return -1
                }
                return 0
            },
        },

        {
            title: 'Action',
            fixed: 'right',
            width: 150,
            render: (record: any) => (
                <Space size='middle'>
                    {
                        hasActivityType &&
                        <Link to={`activityDetails/${record.id}`}>
                            <span className='btn btn-light-info btn-sm'>Details</span>
                        </Link>
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

    // show columns if based on props of hasDescription and hasDuration
    if (!hasActivityType) {
        delete columns[2]
    }



    const loadData = async () => {
        setLoading(true)
        try {
            const response = await fetchDocument(`${data.url}/tenant/${tenantId}`)
            if(data.url === 'ProActivityDetails'){
                response.data = response.data.filter((item: any) => item.activityId === param.id)
                console.log('response.data: ',response.data)
            }
            setGridData(response.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
            message.error(`${error}`)
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
                value.fleetID.toLowerCase().includes(searchText.toLowerCase()) ||
                value.modlName.toLowerCase().includes(searchText.toLowerCase())
            )
        })
        setGridData(filteredData)
    }
    const { isLoading: updateLoading, mutate: updateData } = useMutation(updateItem, {
        onSuccess: (dataU) => {
            queryClient.setQueryData([data.url, tempData], dataU);
            reset()
            setTempData({})
            loadData()
            setIsUpdateModalOpen(false)
            setIsModalOpen(false)
        },
        onError: (error) => {
            setSubmitLoading(false)
            console.log('error: ', error)
            message.error(`${error}`)
        }
    })

    const handleUpdate = (e: any) => {
        setSubmitLoading(true)
        e.preventDefault()
        const item = {
            url: data.url,
            data: tempData
        }
        updateData(item)
        console.log('update: ', item.data)
    }

    const showUpdateModal = (values: any) => {
        showModal()
        setIsUpdateModalOpen(true)
        setTempData(values);
        console.log(values)
    }

    const OnSubmit = handleSubmit(async (values: any) => {
        setSubmitLoading(true)
        const item: any = {
            data: {
                name: values.name,
                code: values.code,
                activityType: values.activityType,
                activityId: parseInt(param.id),
                tenantId: tenantId,
            },
            url: data.url
        }
        // Remove the activityType property if hasActivityType is false
        if (!hasActivityType) {
            const { activityType, ...dataWithoutActivityType } = item.data;
            item.data = dataWithoutActivityType;
        } else {
            // Remove the activityId property if hasActivityType is true
            const { activityId, ...dataWithoutActivityId } = item.data;
            item.data = dataWithoutActivityId;
        }

        console.log(item.data)
        postData(item)
    })

    const { mutate: postData, isLoading: postLoading } = useMutation(postItem, {
        onSuccess: (dataP) => {
            queryClient.setQueryData([data.url, tempData], dataP);
            reset()
            setTempData({})
            loadData()
            setIsModalOpen(false)
            setSubmitLoading(false)
        },
        onError: (error) => {
            setSubmitLoading(false)
            console.log('post error: ', error)
            message.error(`${error}`)
        }
    })

    return (
        <div>
            <KTCardBody className='py-4 '>
                <div className='table-responsive'>
                    <div className="mb-5">
                        {
                            !hasActivityType &&
                            <Button
                                onClick={() => navigate(-1)}
                                className="btn btn-light-primary"
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                }}
                                type="primary" shape="circle" icon={<ArrowLeftOutlined rev={''} />} size={'large'} />

                        }

                    </div>
                    <div className='d-flex justify-content-between'>

                        <Space style={{ marginBottom: 16 }}>
                            <Input
                                placeholder='Enter Search Text'
                                onChange={handleInputChange}
                                type='text'
                                allowClear
                                value={searchText}
                                size='large'
                            />
                            <Button type='primary' onClick={globalSearch} size='large'>
                                Search
                            </Button>
                        </Space>
                        <Space style={{ marginBottom: 16 }}>
                            <PageActionButtons
                                onAddClick={showModal}
                                onExportClicked={() => { console.log('export clicked') }}
                                hasAddButton={true}
                                hasExportButton={true}
                            />
                        </Space>
                    </div>
                    <Table columns={columns} dataSource={dataWithIndex} loading={loading} />

                    <Modal
                        title={isUpdateModalOpen ? `${data.title} Update` : `${data.title} Setup`}
                        open={isModalOpen}
                        onCancel={handleCancel}
                        closable={true}
                        footer={
                            <ModalFooterButtons
                                onCancel={handleCancel}
                                onSubmit={isUpdateModalOpen ? handleUpdate : OnSubmit} />
                        }
                    >
                        <form onSubmit={isUpdateModalOpen ? handleUpdate : OnSubmit}>
                            <hr></hr>
                            <div style={{ padding: "20px 20px 0 20px" }} className='row mb-0 '>
                                <div className=' mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-gray-500">Code</label>
                                    <input {...register("code")} name='code' defaultValue={!isUpdateModalOpen ? '' : tempData?.code} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                                <div className=' mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="form-label text-gray-500">Name</label>
                                    <input {...register("name")} name='name' defaultValue={!isUpdateModalOpen ? '' : tempData?.name} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                                {
                                    hasActivityType &&
                                    <div className='mb-7'>
                                        <label htmlFor="exampleFormControlInput1" className="form-label text-gray-500">Activity Type</label>
                                        <select
                                            {...register("activityType")}
                                            onChange={handleChange}
                                            className="form-select form-select-white" aria-label="Select example">
                                            {!isUpdateModalOpen && <option>Select</option>}
                                            {
                                                activityTypes.map((item: any) => (
                                                    <option
                                                        selected={isUpdateModalOpen ? tempData.activityType : ''}
                                                        value={item}>{item}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                }

                            </div>
                        </form>
                    </Modal>
                </div>
            </KTCardBody>
        </div>
    )
}

export { ActivityComponent }
