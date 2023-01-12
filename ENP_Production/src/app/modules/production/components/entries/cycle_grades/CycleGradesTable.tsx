import {
  Button, DatePicker,
  Form,
  Input,
  Modal,
  Space,
  Table, TimePicker,
} from 'antd'
import {KTSVG} from '../../../../../../_metronic/helpers'
import {useState} from "react";

const CycleGradesTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
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
          labelCol={{span: 8}}
          wrapperCol={{span: 14}}
          title='Add Fault'
        >
          <Form.Item
              name='date'
              label='Date'
              rules={[{required: true, message: 'Please input date!'}]}
          >
            <DatePicker/>
          </Form.Item>
          <Form.Item
              name='shift'
              label='Shift'
              rules={[{required: true}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
              name='Loader'
              label='Loader'
              rules={[{required: true}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
              name='Hauler'
              label='Hauler'
              rules={[{required: true}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
              name='Origin'
              label='Origin'
              rules={[{required: true}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
              name='Material'
              label='Material'
              rules={[{required: true}]}
          >
            <Input/>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export {CycleGradesTable}
