import { UploadOutlined } from '@ant-design/icons';
import { Button, DatePicker, Divider, Form, Input, Modal, Space, Table, TimePicker, Upload, UploadProps, message, } from 'antd';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { KTCardBody } from '../../../../../../_metronic/helpers';
import { ModalFooterButtons, PageActionButtons } from '../../CommonComponents';
import { useForm } from 'react-hook-form';
import { useQueryClient, useMutation, useQuery } from 'react-query';
import { deleteItem, fetchDocument, postItem, updateItem } from '../../../urls';
import * as XLSX from 'xlsx';
import moment from 'moment';
import { title } from 'process';


const CycleDetailsTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
    const [uploadedFile, setUploadedFile] = useState<any>(null)
    const [gridData, setGridData] = useState([])
    let [filteredData] = useState([])
    const [submitLoading, setSubmitLoading] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [isFileUploaded, setIsFileUploaded] = useState(false)

    const [loading, setLoading] = useState(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [tempData, setTempData] = useState<any>()
    const { register, reset, handleSubmit } = useForm()
    const queryClient = useQueryClient()
    const [uploadColumns, setUploadColumns] = useState<any>([])
    const [uploadData, setUploadData] = useState<any>([])
    const [uploading, setUpLoading] = useState(false)

    const { data: destinations } = useQuery('destinations', () => fetchDocument('productionDestination'), { cacheTime: 5000 })
    const { data: productionActivities } = useQuery('activity', () => fetchDocument('ProductionActivity'), { cacheTime: 5000 })
    const { data: allHaulerUnits } = useQuery('hauler', () => fetchDocument('ProHaulerUnits'), { cacheTime: 5000 })
    const { data: allHaulers } = useQuery('haulerOperator', () => fetchDocument('HaulerOperator'), { cacheTime: 5000 })
    const { data: allLoaderUnits } = useQuery('allLoaders', () => fetchDocument('ProLoaderUnits'), { cacheTime: 5000 })
    const { data: allLoaders } = useQuery('LoaderOperator', () => fetchDocument('LoaderOperator'), { cacheTime: 5000 })
    const { data: allOrigins } = useQuery('allOrigins', () => fetchDocument('ProductionOrigin'), { cacheTime: 5000 })
    const { data: allMaterials } = useQuery('allMaterials', () => fetchDocument('ProdProcessedMaterials'), { cacheTime: 5000 })
    const { data: allShifts } = useQuery('shifts', () => fetchDocument('ProductionShifts'), { cacheTime: 5000 })

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

    const getItemName = async (data: any, field: any) => {
        return data?.data.find((element: any) => element.id === field)
    }


    const columns: any = [
        {
            title: 'Date',
            dataIndex: 'cycleDate',
            key: 'date',
            fixed: 'left',
            width: 80,
        },
        {
            title: 'Shift',
            dataIndex: 'shiftId',
            // render : (record: any) => {
            //     return getItemName(allShifts, record.id)
            // }
        },
        {
            title: 'Time',
            dataIndex: 'cycleTime',
        },
        {
            title: 'Loader',
            dataIndex: 'loader',
        },
        {
            title: 'Hauler',
            dataIndex: 'hauler',
        },
        {
            title: 'Origin',
            dataIndex: 'originId',
            // render : (record: any) => {
            //     return getItemName(allOrigins, record.id)
            // }
        },
        {
            title: 'Material',
            dataIndex: 'materialId',
            // render : (record: any) => {
            //     return getItemName(allMaterials, record.id)
            // }
        },
        {
            title: 'Destination',
            dataIndex: 'destinationId',
            // render : (record: any) => {
            //     return getItemName(destinations, record.id)
            // }
        },
        {
            title: 'Nominal Weight',
            dataIndex: 'nominalWeight'
        },
        {
            title: 'Weight',
            dataIndex: 'weight'
        },
        {
            title: 'Payload Weight',
            dataIndex: 'payloadWeight'
        },
        {
            title: 'Reported Weight',
            dataIndex: 'reportedWeight'
        },
        {
            title: 'Volume',
            dataIndex: 'volumes'
        },
        {
            title: 'Loads',
            dataIndex: 'loads'
        },
        {
            title: 'Time at loader',
            dataIndex: 'timeAtLoader'
        },
        {
            title: 'Duration',
            dataIndex: 'duration'
        },
        {
            title: 'Action',
            fixed: 'right',
            width: 100,
            render: (_: any, record: any) => (
                <Space size='middle'>
                    <a onClick={() => showUpdateModal(record)} className='btn btn-light-info btn-sm'>
                        Update
                    </a>
                    <a onClick={() => handleDelete(record)} className='btn btn-light-success btn-sm'>
                        Delete
                    </a>
                </Space>
            ),
        },
    ]


    const uploadProps: UploadProps = {
        name: 'file',
        accept: '.xlsx, .xls',
        action: '',
        maxCount: 1,
        beforeUpload: (file: any) => {
            return new Promise((resolve, reject) => {
                resolve(file)
                setUploadedFile(file)
            })
        }
    }

    //to convert excel date to js date
    const excelDateToJSDate = (serial: number) => {
        const utcDays = Math.floor(serial - 25569)
        const utcValue = utcDays * 86400
        const date = new Date(utcValue * 1000)

        const fractionalDay = serial - Math.floor(serial) + 0.0000001

        let hours = Math.floor(fractionalDay * 24)
        let minutes = Math.floor(fractionalDay * 1440) - (hours * 60)
        let seconds = Math.floor(fractionalDay * 86400) - (hours * 3600) - (minutes * 60)


        date.setHours(hours)
        date.setMinutes(minutes)
        date.setSeconds(seconds)

        return date
    }

    // round off to whole number
    const roundOff = (num: number) => {
        return Math.round((num + Number.EPSILON) * 100) / 100
    }

    const handleUpload = () => {
        setUpLoading(true)
        setIsUploadModalOpen(false)
        setIsFileUploaded(true)
        const reader = new FileReader()
        reader.onload = (e: any) => {
            const file = new Uint8Array(e.target.result)
            const workBook = XLSX.read(file, { type: 'array' })
            const workSheetName = workBook.SheetNames[0]
            const workSheet: any = workBook.Sheets[workSheetName]

            const columnHeaders = ['Date', 'Shift', 'Time Start', 'Loading Unit', 'Truck', 'Origin', 'Material', 'Destination', 'Nominal Weight', 'Payload Weight', 'Reported Weight', 'Volume', 'Loads', 'Arrived', 'Travel Empty Duration'];
            const fileColumns = [
                { title: 'Date', dataIndex: 'Date', key: 'date', fixed: 'left', width: 80 },
                { title: 'Shift', dataIndex: 'Shift', },
                { title: 'Time Start', dataIndex: 'Time Start', },
                { title: 'Loading Unit', dataIndex: 'Loading Unit', },
                { title: 'Hauler', dataIndex: 'Truck', },
                { title: 'Origin', dataIndex: 'Origin', },
                { title: 'Material', dataIndex: 'Material', },
                { title: 'Destination', dataIndex: 'Destination', },
                { title: 'Nominal Weight', dataIndex: 'Nominal Weight', },
                { title: 'Payload Weight', dataIndex: 'Payload Weight', },
                { title: 'Reported Weight', dataIndex: 'Reported Weight', },
                { title: 'Volume', dataIndex: 'Volume', },
                { title: 'Loads', dataIndex: 'Loads', },
                { title: 'Arrived', dataIndex: 'Arrived', },
                { title: 'Travel Empty Duration', dataIndex: 'Travel Empty Duration', },

            ]

            // sets the range to be read from the excel file
            const range = "A13:ZZ100";

            const data: any = XLSX.utils.sheet_to_json(workSheet, { header: 0, range: range })
            const filteredData = data.map((row: any) => {
                const filteredRow: any = {};
                columnHeaders.forEach((column: string) => {
                    filteredRow[column] = row[column];
                });
                return filteredRow;
            });

            const convertedData = filteredData.map((item: any) => ({
                ...item,
                Date: moment(excelDateToJSDate(item.Date), 'YYYY-MM-DD').format('DD/MM/YYYY'),
                'Time Start': moment(excelDateToJSDate(item['Time Start']), 'HH:mm:ss').format('HH:mm'),
                'Arrived': moment(excelDateToJSDate(item['Arrived']), 'HH:mm:ss').format('HH:mm'),
                Volume: roundOff(item.Volume),
            }))

            setUploadColumns(fileColumns)
            setUploadData(convertedData)
            setIsUploadModalOpen(false)
            console.log('read data: ', convertedData)
        }
        reader.readAsArrayBuffer(uploadedFile)
    }


    const loadData = async () => {
        setLoading(true)
        try {
            const response = await fetchDocument('cycleDetails')
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

    //hide Update table 
    const clearUpdateTable = () => {
        setIsFileUploaded(false)
        setUploadedFile(null)
        loadData()
    }


    const OnSubmit = handleSubmit(async (values) => {
        setSubmitLoading(true)
        const item = {
            data: {
                cycleDate: values.cycleDate,
                shiftId: values.shiftId,
                cycleTime: values.cycleTime,
                loader: values.loader,
                hauler: values.hauler,
                haulerUnitId: values.haulerUnitId,
                loaderUnitId: values.loaderUnitId,
                originId: values.originId,
                materialId: values.materialId,
                destinationId: values.destinationId,
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
                            {
                                isFileUploaded ?
                                    <Button onClick={clearUpdateTable} type='primary' size='large'  className='btn btn-light-info btn-sm'>
                                        Clear Upload table
                                    </Button>
                                    :
                                    <PageActionButtons
                                        onAddClick={showModal}
                                        onExportClicked={() => { console.log('export clicked') }}
                                        onUploadClicked={showUploadModal}
                                        hasAddButton={true}
                                        hasExportButton={true}
                                        hasUploadButton={true}
                                    />
                            }
                        </Space>
                    </div>

                    <Table
                        columns={isFileUploaded ? uploadColumns : columns}
                        dataSource={isFileUploaded ? uploadData : gridData}
                    />


                    <Modal
                        title={isUpdateModalOpen ? 'Update Cycle Details' : 'Cycle Details Setup'}
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
                                    <select
                                        {...register("shiftId")}
                                        onChange={handleChange}
                                        className="form-select form-select-white" aria-label="Select example">
                                        {!isUpdateModalOpen && <option>Select</option>}
                                        {
                                            allShifts?.data.map((item: any) => (
                                                <option
                                                    selected={isUpdateModalOpen && item.name === tempData.shiftId}
                                                    value={item.name}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div style={{ padding: "0 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Time</label>
                                    <input type="time" {...register("time")} name="time" defaultValue={!isUpdateModalOpen ? '' : tempData?.time} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Loader</label>
                                    <select
                                        {...register("loader")}
                                        onChange={handleChange}
                                        className="form-select form-select-white" aria-label="Select example">
                                        {!isUpdateModalOpen && <option>Select</option>}
                                        {
                                            allLoaders?.data.map((item: any) => (
                                                <option
                                                    selected={isUpdateModalOpen && item.modelName === tempData.loader}
                                                    value={item.empCode}>{item.empCode}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div style={{ padding: "0 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Hauler</label>
                                    <select
                                        {...register("hauler")}
                                        onChange={handleChange}
                                        className="form-select form-select-white" aria-label="Select example">
                                        {!isUpdateModalOpen && <option>Select</option>}
                                        {
                                            allHaulers?.data.map((item: any) => (
                                                <option
                                                    selected={isUpdateModalOpen && item.modelName === tempData.hauler}
                                                    value={item.empCode}>{item.empCode}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Origin</label>
                                    <select
                                        {...register("originId")}
                                        onChange={handleChange}
                                        className="form-select form-select-white" aria-label="Select example">
                                        {!isUpdateModalOpen && <option>Select</option>}
                                        {
                                            allOrigins?.data.map((item: any) => (
                                                <option
                                                    selected={isUpdateModalOpen && item.name === tempData.originId}
                                                    value={item.id}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div style={{ padding: "0 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Hauler Unit</label>
                                    <select
                                        {...register("haulerUnitId")}
                                        onChange={handleChange}
                                        className="form-select form-select-white" aria-label="Select example">
                                        {!isUpdateModalOpen && <option>Select</option>}
                                        {
                                            allHaulerUnits?.data.map((item: any) => (
                                                <option
                                                    selected={isUpdateModalOpen && item.id === tempData.haulerUnitId}
                                                    value={item.id}>{item.modelname}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Loader Unit</label>
                                    <select
                                        {...register("haulerUnitId")}
                                        onChange={handleChange}
                                        className="form-select form-select-white" aria-label="Select example">
                                        {!isUpdateModalOpen && <option>Select</option>}
                                        {
                                            allLoaderUnits?.data.map((item: any) => (
                                                <option
                                                    selected={isUpdateModalOpen && item.id === tempData.loaderUnitId}
                                                    value={item.id}>{item.modelname}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                            </div>
                            <div style={{ padding: "0 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Material</label>
                                    <select
                                        {...register("materialId")}
                                        onChange={handleChange}
                                        className="form-select form-select-white" aria-label="Select example">
                                        {!isUpdateModalOpen && <option>Select</option>}
                                        {
                                            allMaterials?.data.map((item: any) => (
                                                <option
                                                    selected={isUpdateModalOpen && item.id === tempData.materialId}
                                                    value={item.id}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Destination</label>
                                    <select
                                        {...register("destinationId")}
                                        onChange={handleChange}
                                        className="form-select form-select-white" aria-label="Select example">
                                        {!isUpdateModalOpen && <option>Select</option>}
                                        {
                                            destinations?.data.map((item: any) => (
                                                <option
                                                    selected={isUpdateModalOpen && item.id === tempData.destinationId}
                                                    value={item.id}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div style={{ padding: "0 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Nominal Weight</label>
                                    <input type="number" {...register("nominalWeight")} name="nominal" min={0} defaultValue={!isUpdateModalOpen ? 0 : tempData?.nominalWeight} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Weight</label>
                                    <input type="number" {...register("weight")} name="weight" min={0} defaultValue={!isUpdateModalOpen ? 0 : tempData?.weight} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                            </div>
                            <div style={{ padding: "0 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Payload Weight</label>
                                    <input type="number" {...register("payloadWeight")} name="payload_weight" min={0} defaultValue={!isUpdateModalOpen ? '' : tempData?.payloadWeight} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Reported Weight</label>
                                    <input type="number" {...register("reportedWeight")} name="reported_weight" min={0} defaultValue={!isUpdateModalOpen ? 0 : tempData?.reportedWeight} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                            </div>
                            <div style={{ padding: "0 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Volume</label>
                                    <input type="number" {...register("volume")} name="volumes" min={0} defaultValue={!isUpdateModalOpen ? 0 : tempData?.volumes} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Loads</label>
                                    <input type="number" {...register("loads")} name="loads" min={0} defaultValue={!isUpdateModalOpen ? 0 : tempData?.loads} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                            </div>
                            <div style={{ padding: "0 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Time at Loader</label>
                                    <input type="time" {...register("timeAtLoader")} name="time_at_loader" defaultValue={!isUpdateModalOpen ? '' : tempData?.timeAtLoader} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Duration</label>
                                    <input type="number" {...register("duration")} name="duration" min={0} defaultValue={!isUpdateModalOpen ? 0 : tempData?.duration} onChange={handleChange} className="form-control form-control-white" />
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
                                onSubmit={handleUpload} 
                                />
                        }
                    >
                        <Divider />
                        <Space size='large'>
                            <Upload
                                {...uploadProps}
                            >
                                <Button
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>
                        </Space>
                    </Modal>
                </div>
            </KTCardBody>
        </div>
    )
}

export { CycleDetailsTable };

