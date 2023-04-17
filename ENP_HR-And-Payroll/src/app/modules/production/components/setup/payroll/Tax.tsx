import { Button, Form, Input, InputNumber, Modal, Space, Table } from 'antd'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { KTCardBody, KTSVG } from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'
import { Api_Endpoint, fetchTaxFormulas, fetchTaxes, updateTaxes } from '../../../../../services/ApiCalls'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form'

const Tax = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)

  const [isUpdate, setIsUpdate] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { register, reset, handleSubmit } = useForm()

  const { data: taxes } = useQuery('taxes', fetchTaxes, { cacheTime: 5000 })
  const { data: taxFormulas } = useQuery('taxFormulas', fetchTaxFormulas, { cacheTime: 5000 })
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
      const response = await axios.delete(`${Api_Endpoint}/Taxes/${element.id}`)
      // update the local state so that react can refecth and re-render the table with the new data
      const newData = gridData.filter((item: any) => item.id !== element.id)
      setGridData(newData)
      return response.status
    } catch (e) {
      return e
    }
  }

  function handleDelete(element: any) {
    deleteData(element)
  }
  const columns: any = [

    {
      title: 'Order',
      dataIndex: 'order',
      sorter: (a: any, b: any) => {
        if (a.order > b.order) {
          return 1
        }
        if (b.order > a.order) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Chargeable Income',
      dataIndex: 'chargeableIncome',
      sorter: (a: any, b: any) => {
        if (a.chargeableIncome > b.chargeableIncome) {
          return 1
        }
        if (b.chargeableIncome > a.chargeableIncome) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Percentage',
      dataIndex: 'percentage',
      sorter: (a: any, b: any) => {
        if (a.percentage > b.percentage) {
          return 1
        }
        if (b.percentage > a.percentage) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Tax Payable GH¢',
      dataIndex: 'taxp',
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
      title: 'Tax Formula',
      dataIndex: 'taxformulaId',
      sorter: (a: any, b: any) => {
        if (a.taxformulaId > b.taxformulaId) {
          return 1
        }
        if (b.taxformulaId > a.taxformulaId) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Cumulative Income GH¢',
      dataIndex: 'cumIn',
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
      title: 'Cumulative Tax GH¢',
      dataIndex: 'cumTax',
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
      title: 'Action',
      fixed: 'right',
      width: 100,
      render: (_: any, record: any) => (
        <Space size='middle'>

          {/* <Link to={`/setup/sections/${record.id}`}>
            <span className='btn btn-light-info btn-sm'>Sections</span>
          </Link> */}
          <a href='#' className='btn btn-light-warning btn-sm'>
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
      const response = await axios.get(`${Api_Endpoint}/Taxes`)
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

  
  const queryClient = useQueryClient()
  const { isLoading, mutate } = useMutation(updateTaxes, {
    onSuccess: (data) => {
      queryClient.setQueryData(['taxes', tempData.id], data);
      reset()
      setTempData({})
      loadData()
      setIsUpdate(false)
    }
  })

  const handleUpdate = (e: any) => {
    e.preventDefault()
    mutate(tempData)
    console.log(tempData)
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

 
  const url = `${Api_Endpoint}/Taxes`
  const onSubmit = handleSubmit(async (values, event) => {
    event?.preventDefault();
    setSubmitLoading(true)
    const data = {
      chargeableIncome: parseInt(values.chargeableIncome),
      percentage: parseInt(values.percentage),
      taxFormularID: parseInt(values.taxFormular),
      order: values.order,
    }
    try {
      const response = await axios.post(url, data)
      setSubmitLoading(false)
      reset()
      setIsModalOpen(false)
      loadData()
      console.log(data)
      return response.statusText
    } catch (error: any) {
      setSubmitLoading(false)
      return error.statusText
    }
  }
  )


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
            title='Tax Setup'
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
                <div className='col-6 mb-3'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Chargeable income</label>
                  <input {...register('chargeableIncome')} name="chargeableIncome" className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-3'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Percentage</label>
                  <input {...register('percentage')} name="percentage" className="form-control form-control-solid" />
                </div>
              </div>
              <div style={{ padding: "20px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-3'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Order </label>
                  <input {...register('order')} name="order" className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-3'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Tax Formula</label>
                  <select
                    {...register("taxFormular")}
                    name='taxFormular'
                    className="form-select form-select-solid" aria-label="Select example">
                    <option>Select tax formular</option>
                    {
                      taxFormulas?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                      ))
                    }
                  </select>

                </div>
              </div>
            </form>
          </Modal>
          {/* update modal */}
          <Modal
            title='Tax update'
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
                <div className='col-6 mb-3'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Chargeable income</label>
                  <input {...register('chargeableIncome')} name="chargeableIncome" defaultValue={tempData?.chargeableIncome} className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-3'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Percentage</label>
                  <input {...register('percentage')} name="percentage" defaultValue={tempData?.percentage} className="form-control form-control-solid" />
                </div>
              </div>
              <div style={{ padding: "20px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-3'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Order </label>
                  <input {...register('order')} name="order" defaultValue={tempData?.order} className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-3'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Tax Formula</label>
                  <select
                    {...register("taxFormular")}
                    name='taxFormular'
                    className="form-select form-select-solid" aria-label="Select example">
                    <option>Select tax formular</option>
                    {
                      taxFormulas?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                      ))
                    }
                  </select>

                </div>
              </div>
            </form>
          </Modal>
        </div>
      </KTCardBody>
    </div>
  )
}

export { Tax }
