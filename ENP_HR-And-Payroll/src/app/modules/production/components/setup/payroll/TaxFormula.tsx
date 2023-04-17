import { Button, Form, Input, InputNumber, Modal, Space, Table } from 'antd'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { KTCardBody, KTSVG } from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'
import { Api_Endpoint, updateTaxFormulas,  } from '../../../../../services/ApiCalls'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form'


const TaxFormula = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)

  const [isUpdate, setIsUpdate] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { register, reset, handleSubmit } = useForm()
  const [tempData, setTempData] = useState<any>()


  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    reset()
    setIsModalOpen(false)
    setIsUpdate(false)
  }

  const deleteData = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/TaxFormulas/${element.id}`)
      // update the local state so that react can refecth and re-render the table with the new data
      const newData = gridData.filter((item: any) => item.id !== element.id)
      setGridData(newData)
      return response.status
    } catch (e) {
      return e
    }
  }

  const handleChange = (event: any) => {
    event.preventDefault()
    setTempData({ ...tempData, [event.target.name]: event.target.value });
  }

  function handleDelete(element: any) {
    deleteData(element)
  }
  const columns: any = [

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

  const showUpdateModal = (values: any) => {
    setIsUpdate(true)
    setTempData(values);
  }

  const loadData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/TaxFormulas`)
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

  const url = `${Api_Endpoint}/TaxFormulas`
  const onSubmit = handleSubmit(async (values) => {
    setSubmitLoading(true)
    const data = {
      name: values.name,
      description: values.description,
    }

    console.log(data)
    if (Object.keys(data.name).length === 0 || Object.keys(data.description).length === 0) {
      // do nothing
    } else {
      try {
        const response = await axios.post(url, data)
        setSubmitLoading(false)
        reset()
        setIsModalOpen(false)
        loadData()
        return response.statusText
      } catch (error: any) {
        setSubmitLoading(false)
        return error.statusText
      }
    }
  })

  const queryClient = useQueryClient()
  const { isLoading, mutate } = useMutation(updateTaxFormulas, {
    onSuccess: (data) => {
      queryClient.setQueryData(['taxFormulas', tempData.id], data);
      loadData()
      reset()
      setIsUpdate(false)
    }
  })

  const handleUpdate = (e: any) => {
    e.preventDefault()
    mutate(tempData)
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
            <Table columns={columns} dataSource={gridData} />
            <Modal
              title='Tax Formular Setup'
              open={isModalOpen}
              onCancel={handleCancel}
              closable={true}
              width={600}
              footer={[
                <Button key='back' onClick={handleCancel}>
                  Cancel
                </Button>,
                <Button
                  key='submit'
                  type='primary'
                  htmlType='submit'
                  loading={submitLoading}
                  onClick={onSubmit}
                >
                  Submit
                </Button>,
              ]}
            >
              <form
                onSubmit={onSubmit}
              >

                <hr></hr>
                <div style={{ padding: "20px 20px 0 20px" }} className='row mb-0 '>
                  <div className='mb-7'>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input {...register('name')} type="text" name="name" className="form-control form-control-solid" />
                  </div>
                  <div className='mb-7'>
                    <label htmlFor="exampleFormControlInput1" className="required form-label">Description</label>
                    <input {...register('description')} type="text" name="description" className="form-control form-control-solid" />
                  </div>
                </div>

              </form>
            </Modal>

            {/* update modal */}
            <Modal
              title='Tax Formular update'
              open={isUpdate}
              onCancel={handleCancel}
              closable={true}
              width={600}
              footer={[
                <Button key='back' onClick={handleCancel}>
                  Cancel
                </Button>,
                <Button
                  key='submit'
                  type='primary'
                  htmlType='submit'
                  loading={submitLoading}
                  onClick={handleUpdate}
                >
                  Submit
                </Button>,
              ]}
            >
              <form
                onSubmit={handleUpdate}
              >
                <hr></hr>
                <div style={{ padding: "20px 20px 0 20px" }} className='row mb-0 '>
                  <div className='mb-7'>
                    <label htmlFor="name" className="form-label">Name</label>
                    <input {...register('name')} type="text" defaultValue={tempData?.name} onChange={handleChange} name="name" className="form-control form-control-solid" />
                  </div>
                  <div className='mb-7'>
                    <label htmlFor="description" className="required form-label">Description</label>
                    <input {...register('description')} type="text" defaultValue={tempData?.description} onChange={handleChange} name="description" className="form-control form-control-solid" />
                  </div>
                </div>

              </form>
            </Modal>
          </div>
        </KTCardBody>
      </div>
    )
  }

  export { TaxFormula }
