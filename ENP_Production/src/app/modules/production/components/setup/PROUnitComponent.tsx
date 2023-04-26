import { Button, Form, Input, Modal, Space, Table } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { KTCardBody } from '../../../../../_metronic/helpers'
import { ENP_URL } from '../../urls'
import { PageActionButtons } from '../CommonComponents'


const ProUnitComponet = (props: any) => {
    const [gridData, setGridData] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchText, setSearchText] = useState('')
    let [filteredData] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const columns: any = [

        {
            title: 'Equipment ID',
            dataIndex: 'fleetID',
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
            dataIndex: 'modlName',
            sorter: (a: any, b: any) => a.modlName - b.modlName,
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
            title: 'Manufacturer',
            dataIndex: 'manufacturer',
            sorter: (a: any, b: any) => {
                if (a.manufacturer > b.manufacturer) {
                    return 1
                }
                if (b.manufacturer > a.manufacturer) {
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
                    <a href='#' className='btn btn-light-warning btn-sm'>
                        Update
                    </a>
                    <a href='#' className='btn btn-light-danger btn-sm'>
                        Delete
                    </a>
                </Space>
            ),

        },

    ]

    const loadData = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${ENP_URL}/VmequpsApi`)

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
                value.fleetID.toLowerCase().includes(searchText.toLowerCase()) ||
                value.modlName.toLowerCase().includes(searchText.toLowerCase())
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
                                onAddClick={() => { console.log('add clicked') }}
                                onExportClicked={() => { console.log('export clicked') }}
                                hasAddButton={true}
                                hasExportButton={true}
                            />
                        </Space>
                    </div>
                    <Table columns={columns} dataSource={dataWithIndex} bordered loading={loading} />

                    <Modal
                        title={props.title}
                        open={isModalOpen}
                        onCancel={handleCancel}
                        closable={true}
                        footer={[
                            <Button key='back' onClick={handleCancel}>
                                Cancel
                            </Button>,
                            <Button
                                key='submit'
                                type='primary'
                                htmlType='submit'
                            >
                                Submit
                            </Button>,
                        ]}
                    >
                        <Form
                            name='control-hooks'
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 14 }}
                            title='Cycle Details'
                        >

                        </Form>
                    </Modal>

                </div>
            </KTCardBody>
        </div>
    )
}

export { ProUnitComponet }
