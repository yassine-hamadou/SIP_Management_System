import { UploadOutlined } from '@ant-design/icons';
import { Button, DatePicker, Divider, Form, Input, Modal, Space, Table, TimePicker, Upload, message, } from 'antd';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { KTCardBody } from '../../../../../../_metronic/helpers';
import { ModalFooterButtons, PageActionButtons } from '../../CommonComponents';
import { useForm } from 'react-hook-form';
import { useQueryClient, useMutation } from 'react-query';
import { deleteItem, fetchDocument, postItem, updateItem } from '../../../urls';


const CycleDetailsTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
    const [uploadedFile, setUploadedFile] = useState<any>(null)
    const [gridData, setGridData] = useState([])
    let [filteredData] = useState([])
    const [submitLoading, setSubmitLoading] = useState(false)
    const [searchText, setSearchText] = useState('')

    const [loading, setLoading] = useState(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [tempData, setTempData] = useState<any>()
    const { register, reset, handleSubmit } = useForm()
    const queryClient = useQueryClient()

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
        onSuccess: (data) => {
            queryClient.setQueryData(['cycleDetails', tempData], data);
            loadData()
        },
        onError: (error) => {
            console.log('delete error: ', error)
        }
    })

    function handleDelete(element: any) {
        const item = {
            url: '',
            data: element
        }
        deleteData(item)
    }


    const columns: any = [
        {
            title: 'Date',
            dataIndex: '',
            key: 'key',
        },
        {
            title: 'Shift',
            dataIndex: 'vmModel',
        },
        {
            title: 'Time',
            dataIndex: 'vmClass',
        },
        {
            title: 'Loader',
            dataIndex: 'downType',
        },
        {
            title: 'Hauler',
            dataIndex: 'formattedDate',
            defaultSortOrder: 'descend'
        },
        {
            title: 'Origin',
            dataIndex: 'custodian',
        },
        {
            title: 'Material',
            dataIndex: 'locationId',
        },
        {
            title: 'Destination',
            dataIndex: 'duration',
        },
        {
            title: 'Nominal',
            dataIndex: 'action'
        },
        {
            title: 'Weight',
            dataIndex: 'action'
        },
        {
            title: 'Payload Weight',
            dataIndex: 'action'
        },
        {
            title: 'Reported Weight',
            dataIndex: 'action'
        },
        {
            title: 'Volume',
            dataIndex: 'action'
        },
        {
            title: 'Loads',
            dataIndex: 'action'
        },
        {
            title: 'Time at loader',
            dataIndex: 'action'
        },
        {
            title: 'Duration',
            dataIndex: 'action'
        },
        {
            title: 'Action',
            fixed: 'right',
            width: 100,
            render: (_: any, record: any) => (
                <Space size='middle'>
                    <Link to='#'>
                        <span className='btn btn-light-info btn-sm'>Update</span>
                    </Link>
                    <Link to='#'>
                        <span className='btn btn-light-success btn-sm'>Delete</span>
                    </Link>
                </Space>
            ),
        },
    ]

    const loadData = async () => {
        setLoading(true)
        try {
            const response = await fetchDocument('IclocsApi')
            setGridData(response.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
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
                value.fleetID.toLowerCase().includes(searchText.toLowerCase()) ||
                value.modlName.toLowerCase().includes(searchText.toLowerCase())
            )
        })
        setGridData(filteredData)
    }
    const { isLoading: updateLoading, mutate: updateData } = useMutation(updateItem, {
        onSuccess: (data) => {
            queryClient.setQueryData(['cycleDetails', tempData], data);
            reset()
            setTempData({})
            loadData()
            setIsUpdateModalOpen(false)
            setIsModalOpen(false)
        },
        onError: (error) => {
            console.log('error: ', error)
        }
    })

    const handleUpdate = (e: any) => {
        e.preventDefault()
        const item = {
            url: '',
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


    const OnSubmit = handleSubmit(async (values) => {
        setSubmitLoading(true)
        const item = {
            data: {
                date: values.date,
                shift: values.shift,
                time: values.time,
                loader: values.loader,
                hauler: values.hauler,
                origin: values.origin,
                material: values.material,
                destination: values.destination,
                nominal: values.nominal,
                weight: values.weight,
                payloadWeight: values.payloadWeight,
                reportedWeight: values.reportedWeight,
                volume: values.volume,
                loads: values.loads,
                timeAtLoader: values.timeAtLoader,
                duration: values.duration,
            },
            url: ''
        }
        console.log(item.data)
        postData(item)

    })

    const { mutate: postData, isLoading: postLoading } = useMutation(postItem, {
        onSuccess: (data) => {
            queryClient.setQueryData(['cycleDetails', tempData], data);
            reset()
            setTempData({})
            loadData()
            setIsModalOpen(false)
            setSubmitLoading(false)
        },
        onError: (error) => {
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
                                type='text'
                                allowClear size='large'
                            />
                            <Button type='primary' size='large'>
                                Search
                            </Button>
                        </Space>
                        <Space style={{ marginBottom: 16 }}>
                            <PageActionButtons
                                onAddClick={showModal}
                                onExportClicked={() => { console.log('export clicked') }}
                                onUploadClicked={showUploadModal}
                                hasAddButton={true}
                                hasExportButton={true}
                                hasUploadButton={true}
                            />
                        </Space>
                    </div>
                    <Table columns={columns} bordered />

                    {/*Add Fault*/}
                    <Modal
                        title={ isUpdateModalOpen ? 'Update Cycle Details' : 'Cycle Details Setup'}
                        open={isModalOpen}
                        onCancel={handleCancel}
                        width={800}
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
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Date</label>
                                    <input type="date" {...register("date")} name="date" defaultValue={!isUpdateModalOpen ? '' : tempData?.date} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Shift</label>
                                    <input type="text" {...register("shift")} name="shift" defaultValue={!isUpdateModalOpen ? '' : tempData?.shift} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                            </div>
                            <div style={{ padding: "0 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Time</label>
                                    <input type="time" {...register("time")} name="time" defaultValue={!isUpdateModalOpen ? '' : tempData?.time} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Loader</label>
                                    <input type="text" {...register("loader")} name="loader" defaultValue={!isUpdateModalOpen ? '' : tempData?.loader} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                            </div>
                            <div style={{ padding: "0 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Hauler</label>
                                    <input type="text" {...register("hauler")} name="hauler" defaultValue={!isUpdateModalOpen ? '' : tempData?.hauler} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Origin</label>
                                    <input type="text" {...register("origin")} name="origin" defaultValue={!isUpdateModalOpen ? '' : tempData?.origin} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                            </div>
                            <div style={{ padding: "0 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Material</label>
                                    <input type="text" {...register("material")} name="material" defaultValue={!isUpdateModalOpen ? '' : tempData?.material} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Destination</label>
                                    <input type="text" {...register("destination")} name="destination" defaultValue={!isUpdateModalOpen ? '' : tempData?.destination} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                            </div>
                            <div style={{ padding: "0 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Nominal</label>
                                    <input type="text" {...register("nominal")} name="nominal" defaultValue={!isUpdateModalOpen ? '' : tempData?.nominal} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Weigt</label>
                                    <input type="text" {...register("weight")} name="weight" defaultValue={!isUpdateModalOpen ? '' : tempData?.weight} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                            </div>
                            <div style={{ padding: "0 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Payload Weight</label>
                                    <input type="text" {...register("payloadWeight")} name="payload_weight" defaultValue={!isUpdateModalOpen ? '' : tempData?.payloadWeight} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Reported Weight</label>
                                    <input type="text" {...register("reportedWeight")} name="reported_weight" defaultValue={!isUpdateModalOpen ? '' : tempData?.reportedWeight} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                            </div>
                            <div style={{ padding: "0 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Volume</label>
                                    <input type="text" {...register("volume")} name="volume" defaultValue={!isUpdateModalOpen ? '' : tempData?.volume} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Loads</label>
                                    <input type="text" {...register("loads")} name="loads" defaultValue={!isUpdateModalOpen ? '' : tempData?.loads} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                            </div>
                            <div style={{ padding: "0 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Time at Loader</label>
                                    <input type="text" {...register("timeAtLoader")} name="time_at_loader" defaultValue={!isUpdateModalOpen ? '' : tempData?.timeAtLoader} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Duration</label>
                                    <input type="text" {...register("duration")} name="duration" defaultValue={!isUpdateModalOpen ? '' : tempData?.duration} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                            </div>
                        </form>
                    </Modal>
                    {/* Modal to upload file */}
                    <Modal
                        title='Upload Planned Output'
                        open={isUploadModalOpen}
                        onCancel={handleCancel}
                        closable={true}
                        footer={
                            <ModalFooterButtons
                                onCancel={handleCancel}
                                onSubmit={() => { }} />
                        }
                    >
                        <Divider />
                        <Form
                            name='control-hooks'
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 14 }}
                            title='Add Fault'
                        >
                            <Space size='large'>
                                <Upload>
                                    <Button
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                        icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </Space>

                        </Form>
                    </Modal>
                </div>
            </KTCardBody>
        </div>
    )
}

export { CycleDetailsTable };

