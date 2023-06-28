import { Button, Input, Modal, Space, Table } from "antd"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useQueryClient, useMutation, useQuery } from "react-query"
import { KTCardBody, KTSVG } from "../../../../_metronic/helpers"
import { deleteItem, fetchDocument, updateItem, postItem } from "../../../services/ApiCalls"
import { Link, useNavigate, useParams } from "react-router-dom"
import * as Yup from 'yup'
import clsx from 'clsx'

// common setup component

const SharedComponent2 = (props: any) => {
    const [gridData, setGridData] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchText, setSearchText] = useState('')
    let [filteredData] = useState([])
    const [submitLoading, setSubmitLoading] = useState(false)
    const { register, reset, handleSubmit } = useForm()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [tempData, setTempData] = useState<any>()
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const queryClient = useQueryClient()
    const param: any = useParams();
    const navigate = useNavigate();
    const [detailName, setDetailName] = useState('')

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleOk = () => {
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        reset()
        setIsModalOpen(false)
        setIsUpdateModalOpen(false)
        setTempData(null)
    }

    const handleChange = (event: any) => {
        event.preventDefault()
        setTempData({ ...tempData, [event.target.name]: event.target.value });
    }

    const { mutate: deleteData, isLoading: deleteLoading } = useMutation(deleteItem, {
        onSuccess: (data) => {
            queryClient.setQueryData([props.data.url, tempData], data);
            loadData()
        },

        onError: (error) => {
            console.log('delete error: ', error)
        }
    })

    function handleDelete(element: any) {
        const item = {
            url: props.data.url,
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
            title: 'Email',
            dataIndex: 'email',
            sorter: (a: any, b: any) => {
                if (a.email > b.email) {
                    return 1
                }
                if (b.email > a.email) {
                    return -1
                }
                return 0
            },
        },
        
        {
            title: 'Address',
            dataIndex: 'address',
            sorter: (a: any, b: any) => {
                if (a.address > b.address) {
                    return 1
                }
                if (b.address > a.address) {
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
            const response =  await fetchDocument(`${props.data.url}`)
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

    const { isLoading: updateLoading, mutate: updateData } = useMutation(updateItem, {
        onSuccess: (data) => {
            queryClient.setQueryData([props.data.url, tempData], data);
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
        setLoading(true)
        const item: any = {
            data: {
                name: values.name,
                email: values.email,
                address: values.address,
                phone: values.phone,
                code: values.code,
            },
            url: props.data.url
        }
        // if title is not Products, remove medicalTypeId from item data
        // if (props.data.title !== 'Products') {
        //     const { medicalTypeId, ...dataWithoutMedicalTypeId } = item.data;
        //     item.data = dataWithoutMedicalTypeId;
        // }

        // console.log('before post', item.data)
        postData(item)
    })

    const { mutate: postData, isLoading: postLoading } = useMutation(postItem, {
        onSuccess: (data) => {
            queryClient.setQueryData([props.data.url, tempData], data);
            reset()
            setTempData({})
            loadData()
            setIsModalOpen(false)
        },
        onError: (error) => {
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
                    <div className="mb-5">
                        {
                            props.data.title === 'Products' &&
                            <>
                                <div>
                                    <span className="fw-bold text-gray-800 d-block fs-2 mb-3 ">{detailName}</span>
                                    <button className='mb-3 btn btn-outline btn-outline-dashed btn-outline-primary btn-active-light-primary' onClick={() => navigate(-1)}>Go Back</button>
                                </div>
                            </>
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
                            />
                            <Button type='primary' onClick={globalSearch}>
                                Search
                            </Button>
                        </Space>
                        <Space style={{ marginBottom: 16 }}>
                            <button type='button' className='btn btn-primary me-3' onClick={showModal}>
                                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                                Add
                            </button>

                            <button type='button' className='btn btn-light-primary me-3'>
                                <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
                                Export
                            </button>
                        </Space>
                    </div>
                    <Table columns={columns} dataSource={gridData} loading={loading} />
                    <Modal
                        title={isUpdateModalOpen ? `${props.data.title} Update` : `${props.data.title} Setup`}
                        open={isModalOpen}
                        onCancel={handleCancel}
                        closable={true}
                        width={850}
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
                                <div className='col-6 mb-7'>
                                    <label  className="form-label">Code</label>
                                    <input 
                                    type="text" {...register("code")}
                                     
                                    defaultValue={isUpdateModalOpen === true ? tempData.code : ''} 
                                    onChange={handleChange} className="form-control form-control-solid" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label  className="form-label">Name</label>
                                    <input type="text" {...register("name")} defaultValue={isUpdateModalOpen === true ? tempData.name : ''} onChange={handleChange} className="form-control form-control-solid" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label  className="form-label">Email</label>
                                    <input type="email" {...register("email")} defaultValue={isUpdateModalOpen === true ? tempData.email : ''} onChange={handleChange} className="form-control form-control-solid" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label  className="form-label">Address</label>
                                    <input type="text" {...register("address")} defaultValue={isUpdateModalOpen === true ? tempData.address : ''} onChange={handleChange} className="form-control form-control-solid" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label  className="form-label">Phone</label>
                                    <input type="text" {...register("phone")} defaultValue={isUpdateModalOpen === true ? tempData.phone : ''} onChange={handleChange} className="form-control form-control-solid" />
                                </div>
                            </div>
                        </form>
                    </Modal>
                </div>
            </KTCardBody>
        </div>
    )
}

export { SharedComponent2 }