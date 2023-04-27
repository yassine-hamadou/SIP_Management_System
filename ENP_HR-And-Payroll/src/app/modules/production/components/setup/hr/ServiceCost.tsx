import { Button, Form, Input, Modal, Space, Table } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { KTCardBody, KTSVG } from '../../../../../../_metronic/helpers'
import { Api_Endpoint, fetchProducts, fetchServiceProviders, updateServiceCost } from '../../../../../services/ApiCalls'

const ServiceCost = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const [form] = Form.useForm()
  let [itemName, setItemName] = useState<any>("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { register, reset, handleSubmit } = useForm()
  const [selectedValue, setSelectedValue] = useState<any>(null);
  const [tempData, setTempData] = useState<any>()
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const param: any = useParams();

  const tenantId = localStorage.getItem('tenant')
  const navigate = useNavigate();
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

  const deleteData = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/ServiceCosts/${element.id}`)
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
      title: 'Name',
      key: 'medicalServiceId',
      render: (row: any) => {
        return getServiceName(row.medicalServiceId)
      },
      sorter: (a: any, b: any) => {
        if (a.medicalServiceId > b.medicalServiceId) {
          return 1
        }
        if (b.medicalServiceId > a.medicalServiceId) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Cost',
      dataIndex: 'cost',
      sorter: (a: any, b: any) => {
        if (a.cost > b.cost) {
          return 1
        }
        if (b.cost > a.cost) {
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
            <span className='btn btn-light-info btn-sm'>ServiceCost</span>
          </Link> */}
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
  const { data: allProducts } = useQuery('products', fetchProducts, { cacheTime: 5000 })
  const { data: allServiceProviders } = useQuery('serviceProviders', fetchServiceProviders, { cacheTime: 5000 })

  const loadData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/ServiceCosts/tenant/${tenantId}`)
      setGridData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const getServiceName = (proId: any) => {
    let productName = null
    allProducts?.data.map((item: any) => {
      if (item.id === proId) {
        productName = item.name
      }
    })
    return productName
  }
  const getItemName = async (param: any) => {

    let newName = null

    const itemTest = await allServiceProviders?.data.find((item: any) =>
      item.id.toString() === param
    )
    newName = await itemTest
    return newName
  }

  useEffect(() => {
    (async () => {
      let res = await getItemName(param.id)
      setItemName(res?.name)
    })();
    loadData()
  }, [])

  // const dataWithIndex = gridData.map((item: any, index) => ({
  //   ...item,
  //   key: index,
  // }))
  const dataByID = gridData.filter((section: any) => {
    return section.serviceProviderId.toString() === param.id
  })

  console.log(dataByID)
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

  const queryClient = useQueryClient()
  const { isLoading, mutate } = useMutation(updateServiceCost, {
    onSuccess: (data) => {
      queryClient.setQueryData(['ServiceCost', tempData.id], data);
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
    mutate(tempData)
    console.log('update: ', tempData)
  }

  const showUpdateModal = (values: any) => {
    showModal()
    setIsUpdateModalOpen(true)
    setTempData(values);
    console.log(values)
  }

  const url = `${Api_Endpoint}/ServiceCosts`
  const OnSUbmit = handleSubmit(async (values) => {
    setLoading(true)
    const data = {
      serviceProviderId: parseInt(param.id),
      medicalServiceId: parseInt(selectedValue),
      tenantId: tenantId,
      cost: parseFloat(values.cost).toFixed(2)
    }
    console.log(data)
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
          <h3 style={{ fontWeight: "bolder" }}>{itemName} </h3>
          <br></br>
          <button className='mb-3 btn btn-outline btn-outline-dashed btn-outline-primary btn-active-light-primary' onClick={() => navigate(-1)}>Go Back</button>
          <br></br>
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
          <Table columns={columns} dataSource={dataByID} />
          <Modal
            title={isUpdateModalOpen ? 'ServiceCost Update' : 'ServiceCost Setup'}
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
                loading={submitLoading}
                onClick={isUpdateModalOpen ? handleUpdate : OnSUbmit}
              >
                Submit
              </Button>,
            ]}
          >
            <form
              onSubmit={isUpdateModalOpen ? handleUpdate : OnSUbmit}
            >
              <hr></hr>
              <div style={{ padding: "20px 20px 20px 20px" }} className='row mb-0 '>
                <div className=' mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Product/Service</label>
                  {/* <input type="text" {...register("code")}  className="form-control form-control-solid"/> */}
                  <select {...register("medicalServiceId")} value={isUpdateModalOpen === true ? tempData?.medicalServiceId : 'Select service'} onChange={handleChange} className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ?  <option value="Select service">Select service</option> : null}
                    {
                      allProducts?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                      ))
                    }
                  </select>
                </div>
                <div className=' mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Cost</label>
                  <input
                    {...register("cost")}
                    type="number"
                    defaultValue={isUpdateModalOpen === true ? tempData.cost : 0}
                    onChange={handleChange}
                    min={0}
                    step={0.01}
                    className="form-control form-control-solid" />
                </div>

              </div>
            </form>
          </Modal>
        </div>
      </KTCardBody>
    </div>
  )
}

export { ServiceCost }

