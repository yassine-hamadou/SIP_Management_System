import { Button, Input, Modal, Space, Table, message } from 'antd'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { KTCardBody } from '../../../../../_metronic/helpers'
import { deleteItem, fetchDocument, postItem, updateItem } from '../../urls'
import { ModalFooterButtons, PageActionButtons } from '../CommonComponents'


const ProUnitComponet = (props: any) => {
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
    const [modelName, setModelName] = useState<any>(null)
    const [equipmentDes, setEquipmentDes] = useState<any>(null)
    const [equipmentId, setEquipmentId] = useState<any>(null)
    const tenantId = localStorage.getItem('tenant')

    const { data: equipments } = useQuery('equipments', () => fetchDocument(`equipments/tenant/${tenantId}`), { cacheTime: 5000 })
    const { data: models } = useQuery('models', () => fetchDocument(`models`), { cacheTime: 5000 })

    // get modelId from selected equipment
    const getEquipmentModelId = (equipmentId: any) => {
        const equipment = equipments?.data.find((equipment: any) => equipment.equipmentId === equipmentId)
        console.log('modelId: ', equipment?.modelId)
        return parseInt(equipment?.modelId)
    }

    // get model name from ewuipment modelId
    const getModelName = (equipmentId: any) => {
        const model = models?.data.find((model: any) => model.modelId === getEquipmentModelId(equipmentId))
        return model?.name
    }

    // get equipment description from equipmentId
    const getEquipmentDes = (equipmentId: any) => {
        const equipment = equipments?.data.find((equipment: any) => equipment.equipmentId === equipmentId)
        return equipment?.description
    }

    // handle equipmentId change
    const handleEquipmentIdChange = (event: any) => {
        event.preventDefault()
        setEquipmentId(event.target.value)
        setModelName(getModelName(event.target.value))
        setTempData({ ...tempData, [event.target.name]: event.target.value });
        setEquipmentDes(getEquipmentDes(equipmentId))
        console.log('model name: ', modelName)
        console.log('equipmentId: ', equipmentId)
    }


    const handleChange = (event: any) => {
        event.preventDefault()
        setTempData({ ...tempData, [event.target.name]: event.target.value });      
        setEquipmentDes(event.target.value)
    }

    const showModal = () => {
        setIsModalOpen(true)
    }

    const showUploadModal = () => {
        setIsUploadModalOpen(true)
    }

    const handleCancel = () => {
        reset()
        setTempData({})
        setEquipmentId(null)
        setEquipmentDes(null)
        setModelName(null)
        setIsModalOpen(false)
        setIsUploadModalOpen(false)
        setIsUpdateModalOpen(false)
    }

    const { mutate: deleteData, isLoading: deleteLoading } = useMutation(deleteItem, {
        onSuccess: (data) => {
            queryClient.setQueryData([props.data.url, tempData], data);
            loadData()
        },
        onError: (error) => {
            console.log('delete error: ', error)
            message.error('Error deleting record')
        }
    })

    function handleDelete(element: any) {
        const item = {
            url: props.data.url,
            data: element
        }
        deleteData(item)
    }

    const getRecordName = (id: any, data: any) => {
        let name = ''
        data.map((item: any) => {
            if (item.id === id) {
                name = item.name
            }
        })
        return name
    }

    const columns: any = [

        {
            title: 'Equipment ID',
            dataIndex: 'equipmentId',
            sorter: (a: any, b: any) => {
                if (a.fleetID > b.fleetID) {
                    return 1
                }
                if (b.fleetID > a.fleetID) {
                    return -1
                }
                return 0
            },
        },

        {
            title: 'Model Name',
            dataIndex: 'modelName',
            sorter: (a: any, b: any) => a.modelName - b.modelName,
        },

        {
            title: 'Description',
            dataIndex: 'description',
            sorter: (a: any, b: any) => {
                if (a.description > b.description) {
                    return 1
                }
                if (b.description > a.description) {
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

    const loadData = async () => {
        setLoading(true)
        try {
            const response = await fetchDocument(`${props.data.url}/tenant/${tenantId}`)
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
        onSuccess: (data) => {
            queryClient.setQueryData(['plannedOutput', tempData], data);
            reset()
            setTempData({})
            setEquipmentId(null)
            setModelName(null)
            setEquipmentDes(null)
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
        e.preventDefault()
        const item = {
            url: props.data.url,
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
                equipmentId: values.equipmentId,
                modelName: modelName,
                description: equipmentDes ,
                tenantId:tenantId,
            },
            url: props.data.url
        }
        console.log(item.data)
        postData(item)

    })

    const { mutate: postData, isLoading: postLoading } = useMutation(postItem, {
        onSuccess: (data) => {
            queryClient.setQueryData([props.data.url, tempData], data);
            reset()
            setTempData({})
            setEquipmentId(null)
            setModelName(null)
            setEquipmentDes(null)
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
        <div className='card border border-gray-400 '
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
                        title={isUpdateModalOpen ? `${props.data.title} Update` : `${props.data.title} Setup`}
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
                                <div >
                                    <label htmlFor="exampleFormControlInput1" className="required form-label ">Equipment</label>

                                    <select
                                        {...register("equipmentId")}
                                        onChange={handleEquipmentIdChange}
                                        className="form-select form-select-white mb-7 " aria-label="Select example">
                                        {!isUpdateModalOpen && <option>Select</option>}
                                        {
                                            equipments?.data.map((item: any) => (
                                                <option
                                                    selected={isUpdateModalOpen && item.equipmentId === tempData.equipmentId}
                                                    value={item.equipmentId}>{item.equipmentId}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className=' mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Model name</label>
                                    <input {...register("modelName")} disabled={true} name='modelName' defaultValue={!isUpdateModalOpen ? modelName : tempData?.modelName}  className="form-control form-control-white" />
                                </div>
                                <div className=' mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Description</label>
                                    <input {...register("description")} name='description' defaultValue={!isUpdateModalOpen ? equipmentDes : tempData?.description} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                            </div>
                        </form>
                    </Modal>
                </div>
            </KTCardBody>
        </div>
    )
}

export { ProUnitComponet }

