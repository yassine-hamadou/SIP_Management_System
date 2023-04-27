import { UploadOutlined } from '@ant-design/icons';
import {
    Button, DatePicker,
    Divider,
    Form,
    Input,
    Modal,
    Space,
    Table, TimePicker, Upload,
} from 'antd';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { KTCardBody } from '../../../../../../_metronic/helpers';
import { PageActionButtons } from '../../CommonComponents';


const CycleDetailsTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
    const [uploadedFile, setUploadedFile] = useState<any>(null)


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
    const showModal = () => {
        setIsModalOpen(true)
    }
    const showUploadModal = () => {
        setIsUploadModalOpen(true)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
        setIsUploadModalOpen(false)

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
                        title='Cycle Details'
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
                            <Form.Item
                                name='date'
                                label='Date'
                                rules={[{ required: true, message: 'Please input date!' }]}
                            >
                                <DatePicker />
                            </Form.Item>
                            <Form.Item
                                name='shift'
                                label='Shift'
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='time'
                                label='Time'
                                rules={[{ required: true }]}
                            >
                                <TimePicker />
                            </Form.Item>
                            <Form.Item
                                name='Hauler'
                                label='Hauler'
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='Origin'
                                label='Origin'
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='Material'
                                label='Material'
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='Destination'
                                label='Destination'
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='Nominal'
                                label='Nominal'
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='Weight'
                                label='Weight'
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='Payload Weight'
                                label='Payload Weight'
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='Reported Weight'
                                label='Reported Weight'
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='Volume'
                                label='Volume'
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='loads'
                                label='Loads'
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='Time at Loader'
                                label='Time at Loader'
                                rules={[{ required: true }]}
                            >
                                <TimePicker />
                            </Form.Item>
                            <Form.Item
                                name='Duration'
                                label='Duration'
                                rules={[{ required: true }, { type: 'number' }, { min: 1 },]}
                            >
                                <Input />
                            </Form.Item>

                        </Form>
                    </Modal>
                    {/* Modal to upload file */}
                    <Modal
                        title='Upload Planned Output'
                        open={isUploadModalOpen}
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

