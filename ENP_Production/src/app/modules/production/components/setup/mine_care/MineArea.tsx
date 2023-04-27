import {
    Button,
    Form,
    Input,
    Modal,
    Space,
    Table,
} from 'antd';
import { useState } from "react";
import { KTSVG } from '../../../../../../_metronic/helpers';

const MineArea = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const columns: any = [
        // {
        //     title: 'ID',
        //     dataIndex: '',
        //     key: 'key',
        // },
        {
            title: 'Name',
            dataIndex: 'vmModel',
        },
        {
            title: 'Action',
            dataIndex: 'downType',
        },
    ]
    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
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
                    <Button type='primary' className='btn btn-light-primary me-3' style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} size='large'>
                        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
                        Upload
                    </Button>
                    <Button type='primary' className='btn btn-light-primary me-3' style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} size='large'>
                        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
                        Export
                    </Button>
                </Space>
            </div>
            <Table columns={columns} bordered />

            {/*Add Fault*/}
            <Modal
                title='Activity'
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
                    title='Add Fault'
                >
                    <Form.Item
                        name='ID'
                        label='ID'
                        rules={[{ required: true, type: "number" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name='Name'
                        label='Name'
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export { MineArea };
