import {
  Button, DatePicker,
  Divider,
  Form,
  Input,
  Modal,
  Space,
  Table,
  Upload
} from 'antd';
import { useState } from "react";
import { PageActionButtons } from '../../CommonComponents';
import { UploadOutlined } from '@ant-design/icons';

const CycleGradesTable = () => {
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
      title: 'Action',
      dataIndex: 'action'
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
      <div className='d-flex justify-content-between'>
        <Space style={{ marginBottom: 16 }}>
          <Input
            placeholder='Enter Search Text'
            type='text'
            allowClear
          />
          <Button type='primary'>
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
        title='Cycle Grade'
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
            name='Loader'
            label='Loader'
            rules={[{ required: true }]}
          >
            <Input />
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
                icon={<UploadOutlined rev={''} />}>Click to Upload</Button>
            </Upload>
          </Space>

        </Form>
      </Modal>
    </div>
  )
}

export { CycleGradesTable };

