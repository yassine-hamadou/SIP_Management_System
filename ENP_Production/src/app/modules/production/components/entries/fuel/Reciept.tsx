import { Button, Divider, Input, Modal, Space, Table, Upload, UploadProps, message } from "antd";
import { KTCardBody } from "../../../../../../_metronic/helpers";
import { ModalFooterButtons, PageActionButtons } from "../../CommonComponents";
import { useEffect, useState } from "react";
import { fetchDocument, postItem, updateItem } from "../../../urls";
import { register } from "../../../../auth/core/_requests";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { UploadOutlined } from '@ant-design/icons';


const FuelReciept = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [uploading, setUploading] = useState(false)
    const [uploadedFile, setUploadedFile] = useState<any>(null)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false) // to show the update modal
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false) // to show the upload modal
    const [isFileUploaded, setIsFileUploaded] = useState(false) // to check if the file is uploaded
    const [isCheckDataModalOpen, setIsCheckDataModalOpen] = useState(false)  // to show the modal to check the data summaries from the uploaded file
    const [isBatchDataCheckModalOpen, setIsBatchDataCheckModalOpen] = useState(false) // to show the modal to check the data summaries from batch data 
    const [submitLoading, setSubmitLoading] = useState(false)
    const tenantId = localStorage.getItem('tenant')
    const [loading, setLoading] = useState(false)
    const { register, reset, handleSubmit } = useForm()
    const [tempData, setTempData] = useState<any>()
    const queryClient = useQueryClient()
    const { data: pumps } = useQuery('pump', () => fetchDocument(`productionpump/tenant/${tenantId}`), { cacheTime: 5000 })
    const [fileList, setFileList] = useState([]);


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
        handleRemove()
    }

    const handleChange = (event: any) => {
        event.preventDefault()
        setTempData({ ...tempData, [event.target.name]: event.target.value });
    }

    //hide Update table 
    const clearUpdateTable = () => {
        setIsFileUploaded(false)
        //setUploadedFile(null)
        setLoading(false)
        loadData()
    }

    const onOkay = () => {
        // check if no file is uploaded
        if (!uploadedFile) {
            message.error('No file uploaded!');
            return
        } else {
            // handleUpload()
        }
    }

    const handleRemove = () => {
        setUploadedFile(null);
        setFileList([]); 
    };

    const uploadProps: UploadProps = {
        name: 'file',
        accept: '.xlsx, .xls',
        action: '',
        maxCount: 1,
        fileList: fileList,
        beforeUpload: (file: any) => {
            return new Promise((resolve, reject) => {
                // check if file is not uploaded
                if (!file || fileList.length === 1) {
                    message.error('No file uploaded!');
                    reject(false)
                }
                // upload excel file only 
                if (file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' && file.type !== 'application/vnd.ms-excel') {
                    message.error(`${file.name} is not a excel file`);
                    reject(false)
                }
                else {
                    const updatedFileList: any = [...fileList, file]; // Add the uploaded file to the fileList
                    setFileList(updatedFileList);
                    resolve(true)
                    setUploadedFile(file)
                }
            })
        },
        onRemove: () => {handleRemove()}
    }

    const loadData = async () => {
        setLoading(true)
        try {
            const response = await fetchDocument(`profuelintake/tenant/${tenantId}`)
            // const data: any = countRowsPerBatch(response.data)
            // setGridData(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
            message.error(`${error}`)
        }
    }

    const handleUpdate = (e: any) => {
        setSubmitLoading(true)
        e.preventDefault()
        const item = {
            url: 'profuelintake',
            data: tempData
        }
        updateData(item)
        console.log('update: ', item.data)
    }

    const { isLoading: updateLoading, mutate: updateData } = useMutation(updateItem, {
        onSuccess: (dataU) => {
            queryClient.setQueryData(['profuelintake', tempData], dataU);
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

    const OnSubmit = handleSubmit(async (values:any) => {
        setSubmitLoading(true)
        const item = {
            data: {
                intakeDate: values.intakeDate,
                quantity: values.quantity,
                pumpId: values.pumpId,
                transactionType: 'Fuel Reciept',
                tenantId: tenantId,
            },
            url:'profuelintake'
        }
        // remove some properties from item.data based on props of hasDescription and hasDuration
        // if (!hasDescription) {
        //     delete item.data.description
        // }
        // if (!hasDuration) {
        //     delete item.data.duration
        // }
        console.log(item.data)
        postData(item)
    })

    const { mutate: postData, isLoading: postLoading } = useMutation(postItem, {
        onSuccess: (data) => {
            queryClient.setQueryData(['profuelintake', tempData], data);
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

    useEffect(() => {
        loadData()
    }, [])


    const columns: any = [
        { title: 'Date', dataIndex: 'recieptDate', },
        { title: 'Pump', dataIndex: 'pumpId', },
        // { title: 'Equipment', dataIndex: 'equipmentId', },
        { title: 'Transaction Type', dataIndex: 'transactionType', },
        { title: 'Quantity', dataIndex: 'quantity', },
        {
            title: 'Action',
            fixed: 'right',
            width: 150,
            render: (record: any) => () => { },
        }
    ]


    return (
        <div className="card-custom card-flush">
            <div className="card-header" style={{ borderBottom: 'none' }}>
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
                <div className="card-toolbar ">
                    <Space style={{ marginBottom: 16 }}>
                        {
                            isFileUploaded ?
                                <Space>
                                    <Button
                                        type='primary' size='large'
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                        className='btn btn-light-success btn-sm'
                                    >
                                        Check data
                                    </Button>
                                    <Button
                                        type='primary' size='large'
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }} className='btn btn-light-success btn-sm'>
                                        Save
                                    </Button>
                                    <Button onClick={clearUpdateTable}
                                        type='primary' size='large'
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }} className='btn btn-light-info btn-sm'>
                                        Clear
                                    </Button>
                                </Space>
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
            </div>
            <KTCardBody className='py-4 '>
                <div className='table-responsive'>
                    <Table
                        columns={columns}
                        scroll={isFileUploaded ? { x: 1300 } : {}}
                        loading={loading}
                    />

                    <Modal
                        title={isUpdateModalOpen ? `$ Update` : `Setup`}
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
                                <label htmlFor="exampleFormControlInput1" className="form-label">Date</label>
                                    <input type="date" {...register("intakeDate")} name="intakeDate" defaultValue={!isUpdateModalOpen ? '' : tempData?.cycleDate} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                                {
                                <div className=' mb-7'>
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Quantity</label>
                                        <input type="number" {...register("quantity")} min={0} name='quantity' defaultValue={!isUpdateModalOpen ? '' : tempData?.duration} onChange={handleChange} className="form-control form-control-white" />
                                    </div>
                                }
                                {
                                   <div className=' mb-7'>
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Pump</label>
                                        <select
                                        {...register("pumpId")}
                                        onChange={handleChange}
                                        className="form-select form-select-white" aria-label="Select example">
                                        {!isUpdateModalOpen && <option>Select</option>}
                                        {
                                            pumps?.data.map((item: any) => (
                                                <option
                                                    selected={isUpdateModalOpen && tempData.pump?.pumpId}
                                                    value={item.id}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                    </div>
                                }
                            </div>
                        </form>
                    </Modal>

                    {/* Modal to upload file */}
                    <Modal
                        title='Upload File'
                        open={isUploadModalOpen}
                        onOk={onOkay}
                        confirmLoading={uploading}
                        onCancel={handleCancel}
                        closable={true}
                    >
                        <Divider />
                        <Space size='large'>
                            <Upload
                                {...uploadProps}
                            >
                                <Button
                                    loading={uploading}
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
};

export { FuelReciept }
