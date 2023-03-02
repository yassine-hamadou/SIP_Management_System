import {
  Button,
  Form,
  Input,
  Modal,
  Space,
  Table,
} from 'antd'
import {KTSVG} from '../../../../../../_metronic/helpers'
import {useState} from "react";

const PlannedOutputTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const columns: any = [
    {
      title: 'Destinaton',
      dataIndex: '',
      key: 'key',
    },
    {
      title: 'Activity',
      dataIndex: 'vmModel',
    },
    {
      title: 'Quantity',
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
        <Space style={{marginBottom: 16}}>
          <Input
            placeholder='Enter Search Text'
            type='text'
            allowClear
          />
          <Button type='primary'>
            Search
          </Button>
        </Space>
        <Space style={{marginBottom: 16}}>
          <button type='button' className='btn btn-primary me-3' onClick={showModal}>
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
            Add
          </button>
          <button type='button' className='btn btn-light-primary me-3'>
            <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
            Upload
          </button>
          <button type='button' className='btn btn-light-primary me-3'>
            <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
            Export
          </button>
        </Space>
      </div>
      <Table columns={columns} bordered />

      {/*Add Fault*/}
      <Modal
        title='Planned Output'
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
          labelCol={{span: 8}}
          wrapperCol={{span: 14}}
          title='Add Fault'
        >
          <Form.Item
              name='Destination'
              label='Destination'
              rules={[{required: true, message: 'Please input destination!'}]}
          >
            <Input />
          </Form.Item>
          <Form.Item
              name='Activity'
              label='Activity'
              rules={[{required: true}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
              name='Quantity'
              label='Quantity'
              rules={[{required: true, type: "number"}]}
          >
            <Input/>
          </Form.Item>

        </Form>
      </Modal>
    </div>
  )
}

export {PlannedOutputTable}
