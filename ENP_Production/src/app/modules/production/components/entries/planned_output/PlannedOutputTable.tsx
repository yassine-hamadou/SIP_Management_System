import { UploadOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, Modal, Select, Space, Table, Upload, message } from 'antd';
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteItem, fetchDocument, postItem, updateItem } from '../../../urls';
import { ModalFooterButtons, PageActionButtons } from '../../CommonComponents';
import { useForm } from 'react-hook-form';
import { KTCardBody } from '../../../../../../_metronic/helpers';


const PlannedOutputTable = () => {
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
  const tenantId = localStorage.getItem('tenant')

  const { data: destinations } = useQuery('destinations', () => fetchDocument(`productionDestination/tenant/${tenantId}`), { cacheTime: 5000 })
  const { data: productionActivities } = useQuery('activity', () => fetchDocument(`ProductionActivity/tenant/${tenantId}`), { cacheTime: 5000 })

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
      queryClient.setQueryData(['plannedOutput', tempData], data);
      loadData()
    },
    onError: (error) => {
      console.log('delete error: ', error)
      message.error(`${error}`)
    }
  })

  function handleDelete(element: any) {
    const item = {
      url: 'plannedOutput',
      data: element
    }
    deleteData(item)
  }

  const getRecordName = (id: any, data: any) => {
    let name = ''
    data?.map((item: any) => {
      if (item.id === id) {
        name = item.name
      }
    })
    return name
  }

  const columns: any = [
    {
      title: 'Destinaton',
      dataIndex: 'destinationId',
      render: (record: any) => {
        return getRecordName(record, destinations?.data)
      }
    },
    {
      title: 'Activity',
      dataIndex: 'activityId',
      render: (record: any) => {
        return getRecordName(record, productionActivities?.data)
      }
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
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
      const response = await fetchDocument(`plannedOutput/tenant/${tenantId}`)
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
        value.name.toLowerCase().includes(searchText.toLowerCase())
      )
    })
    setGridData(filteredData)
  }

  const { isLoading: updateLoading, mutate: updateData } = useMutation(updateItem, {
    onSuccess: (data) => {
      queryClient.setQueryData(['plannedOutput', tempData], data);
      reset()
      setTempData({})
      loadData()
      setIsUpdateModalOpen(false)
      setIsModalOpen(false)
    },
    onError: (error) => {
      console.log('error: ', error)
      message.error(`${error}`)
    }
  })

  const handleUpdate = (e: any) => {
    e.preventDefault()
    const item = {
      url: 'plannedOutput',
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
        destinationId: values.destinationId,
        activityId: values.activityId,
        quantity: values.quantity,
        tenantId: tenantId,
      },
      url: 'plannedOutput'
    }
    console.log(item.data)
    postData(item)
  })

  const { mutate: postData, isLoading: postLoading } = useMutation(postItem, {
    onSuccess: (data) => {
      queryClient.setQueryData(['plannedOutput', tempData], data);
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

          <Table columns={columns} dataSource={dataWithIndex} loading={loading} />

          <Modal
            title={isUpdateModalOpen ? 'Update Planned Output' : 'Add Planned Output'}
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
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Quantity</label>
                  <input type="number" {...register("quantity")} min={0} step={1} name="quantity" defaultValue={!isUpdateModalOpen ? 0 : tempData?.quantity} onChange={handleChange} className="form-control form-control-white" />
                </div>
              </div>

              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='mb-7'>
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
                  <div className='mt-7'>
                    <label htmlFor="exampleFormControlInput1" className="required form-label">Activity</label>
                    <select
                      {...register("activityId")}
                      onChange={handleChange}
                      className="form-select form-select-white" aria-label="Select example">
                      {!isUpdateModalOpen && <option>Select</option>}
                      {
                        productionActivities?.data.map((item: any) => (
                          <option
                            selected={isUpdateModalOpen && item.id === tempData.activityId}
                            value={item.id}>{item.name}</option>
                        ))
                      }
                    </select>
                  </div>
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


export { PlannedOutputTable };

