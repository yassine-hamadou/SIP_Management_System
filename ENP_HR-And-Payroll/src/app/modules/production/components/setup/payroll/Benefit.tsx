import { Button, Form, Input, InputNumber, Modal, Space, Table } from 'antd'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { KTCardBody, KTSVG } from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'
import { useForm } from 'react-hook-form'
import { Api_Endpoint, fetchBenefits, fetchBenefitsCategory, fetchCurrencies, fetchPeriods, fetchTaxes, updateBenefit } from '../../../../../services/ApiCalls'
import { validateExpression } from '@devexpress/analytics-core/analytics-internal'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom'

type Fields = {
  name: string
}


const Benefit = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const param: any = useParams();

  const { data: benefitCats } = useQuery('benefitCats', fetchBenefitsCategory, { cacheTime: 5000 })
  const { data: periods } = useQuery('periods', fetchPeriods, { cacheTime: 5000 })
  const { data: taxes } = useQuery('taxes', fetchTaxes, { cacheTime: 5000 })
  const { data: currencies } = useQuery('currencies', fetchCurrencies, { cacheTime: 5000 })
  const { data: benefits } = useQuery('benefits', fetchBenefits, { cacheTime: 5000 })
  const typeOfAmountList = ['FORMULA', 'PERCENTAGE OF GROSS', 'VARYING AMOUNT', 'BASIC OF PERCENTAGE']

  const [tempData, setTempData] = useState<any>()

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { register, reset, handleSubmit } = useForm()

  const [benefitCat, setBenefitCat] = useState<any>()
  const [startPeriod, setStartPeriod] = useState<any>()


  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
    setIsUpdateModalOpen(false)
  }

  const handleCancel = () => {
    reset()
    setIsModalOpen(false)
    setIsUpdateModalOpen(false)
  }

  const handleChange = (event: any) => {
    event.preventDefault()
    setTempData({ ...tempData, [event.target.name]: event.target.value });
  }

  // handle change in select fields
  const handleSelectChange = (event: any, name: any) => {
    event.preventDefault()
    setTempData({ ...tempData, [name]: event })
  }


  const deleteData = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/Benefits/${element.id}`)
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
      title: 'Code',
      dataIndex: 'code',
      sorter: (a: any, b: any) => {
        if (a.code > b.code) {
          return 1
        }
        if (b.code > a.code) {
          return -1
        }
        return 0
      },
    },
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
      title: 'Type of Amount',
      dataIndex: 'typeOfAmount',
      sorter: (a: any, b: any) => {
        if (a.typeOfAmount > b.typeOfAmount) {
          return 1
        }
        if (b.typeOfAmount > a.typeOfAmount) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      sorter: (a: any, b: any) => {
        if (a.amount > b.amount) {
          return 1
        }
        if (b.amount > a.amount) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Amount Number',
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
      title: 'Action',
      fixed: 'right',
      width: 100,
      render: (_: any, record: any) => (
        <Space size='middle'>


          {/* <Link to={`/setup/sections/${record.id}`}>
            <span className='btn btn-light-info btn-sm'>Sections</span>
          </Link> */}

          <a onClick={() => showUpdateModal(record)} className='btn btn-light-warning btn-sm' >
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
      const response = await axios.get(`${Api_Endpoint}/Benefits`)
      setGridData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadData()
    console.log('startPeriod: ', startPeriod)
    console.log('category: ', benefitCat)

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

  // const { data: allBenefits } = useQuery('benefits', fetchBenefits, { cacheTime: 5000 })

  const queryClient = useQueryClient()
  const { isLoading, mutate } = useMutation(updateBenefit, {
    onSuccess: (data) => {
      queryClient.setQueryData(['benefits', tempData.id], data);
      reset()
      setTempData({})
      loadData()
      setIsUpdateModalOpen(false)
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

  const globalSearch = () => {
    // @ts-ignore
    filteredData = dataWithVehicleNum.filter((value) => {
      return (
        value.name.toLowerCase().includes(searchText.toLowerCase())
      )
    })
    setGridData(filteredData)
  }

  const url = `${Api_Endpoint}/Benefits`
  const OnSubmit = handleSubmit(async (values, event) => {
    event?.preventDefault();
    console.log('values: ', values)
    setLoading(true)
    const data = {
      code: values.code,
      name: values.name,
      description: values.description,
      amount: parseInt(values.amount),
      typeOfAmount: values.typeOfAmount,
      accountNumber: values.accountNumber,
      periodType: values.periodType,
      periodInterval: values.periodInterval,
      currencyId: parseInt(values.currencyId),
      accrued: values.accrued,
      taxTypeId: parseInt(values.taxTypeId),
      startPeriod: parseInt(values.startPeriod),
      isTaxable: values.isTaxable,
      benefitCat: parseInt(values.benefitCat),
    }

    try {
      const response = await axios.post(url, data)
      setLoading(false)
      loadData()
      reset()
      setIsModalOpen(false)

      return response.statusText

    } catch (error: any) {
      reset()
      setLoading(false)
      return error.statusText
    }

  })


  // get names of fields from id 
  const getFieldname = (data: any, field: any) => {
    let fieldName = ''
    data?.map((item: any) => {
      if (item.id === field) {
        fieldName = item.name
        return fieldName
      }
    })
  }

  // filter item out from data
  const filterData = (data: any, field: any) => {
    return data?.filter((item: any) => item.id !== field)
  }


  const showUpdateModal = (values: any) => {
    setIsUpdateModalOpen(true)
    setTempData(values);
    console.log(values)
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
            title='Benefit Setup'
            open={isModalOpen}
            onCancel={handleCancel}
            closable={true}
            width={860}
            footer={[
              <Button key='back' onClick={handleCancel}>
                Cancel
              </Button>,
              <Button
                key='submit'
                type='primary'
                htmlType='submit'
                loading={submitLoading}
                onClick={OnSubmit}
              >
                Submit
              </Button>,
            ]}
          >
            <form
              onSubmit={OnSubmit}
            >
              <hr></hr>
              <div style={{ padding: "20px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="code" className="required form-label">Code</label>

                  <input type="text" {...register("code")} className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="name" className="required form-label">Name</label>
                  <input {...register("name")} type="text" className="form-control form-control-solid" />
                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Description</label>
                  <input {...register("description")} type="text" className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Category</label>
                  {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                  <select {...register("benefitCat")} name='benefitCat' className="form-select form-select-solid" aria-label="Select example">
                    <option>Select</option>
                    {
                      benefitCats?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Type of Amount</label>
                  <select {...register("typeOfAmount")} name='typeOfAmount' className="form-select form-select-solid" aria-label="Select example">
                    <option> select</option>
                    {
                      typeOfAmountList.map((item: any) => (
                        <option value={item}>{item}</option>
                      ))
                    }
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Amount</label>
                  <input {...register("amount")} type="number" min={0} name="amount" defaultValue={0.00} className="form-control form-control-solid" />

                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Account No.</label>
                  <input {...register("accountNumber")} type="text" className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Period Type</label>
                  {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                  <select {...register("periodType")} name='periodType' className="form-select form-select-solid" aria-label="Select example">
                    <option> select</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                  </select>
                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Period Interval</label>
                  <select {...register("periodInterval")} name='periodInterval' className="form-select form-select-solid" aria-label="Select example">
                    <option> select</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Currency</label>
                  {/* <input type="text" name="name"  className="form-control form-control-solid"/> */}
                  <select
                    {...register("currencyId")}
                    name='currencyId'
                    className="form-select form-select-solid" aria-label="Select example">
                    <option> select</option>
                    {
                      currencies?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                      ))
                    }
                  </select>
                </div>
              </div>

              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Accrued</label>
                  <select {...register("accrued")} name='accrued' className="form-select form-select-solid" aria-label="Select example">
                    <option> select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Tax Type</label>
                  {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                  <select
                    {...register("taxTypeId")}
                    name='taxTypeId'
                    className="form-select form-select-solid" aria-label="Select example">
                    <option> select</option>
                    {
                      taxes?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Start Period</label>
                  <select
                    {...register("startPeriod")}
                    name='startPeriod'
                    className="form-select form-select-solid" aria-label="Select example">
                    <option>Select period</option>
                    {
                      periods?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                      ))
                    }
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">isTaxable</label>
                  {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                  <select
                    {...register("isTaxable")}
                    name='isTaxable'
                    className="form-select form-select-solid" aria-label="Select example">
                    <option>select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
            </form>
          </Modal>

          {/* update benefit  modal */}

          <Modal
            title='Benefit Update'
            open={isUpdateModalOpen}
            onCancel={handleCancel}
            closable={true}
            width={860}
            footer={[
              <Button key='back' onClick={handleCancel}>
                Cancel
              </Button>,
              <Button
                key='update'
                type='primary'
                htmlType='submit'
                loading={submitLoading}
                onClick={handleUpdate}
              >
                Update
              </Button>,
            ]}
          >

            <form
              onSubmit={handleUpdate}
            >
              <hr></hr>
              <div style={{ padding: "20px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="code" className="required form-label">Code</label>

                  <input {...register("code")} value={tempData?.code} onChange={handleChange} className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="name" className="required form-label">Name</label>
                  <input {...register("name")} value={tempData?.name} onChange={handleChange} className="form-control form-control-solid" />
                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="description" className="required form-label">Description</label>
                  <input {...register("description")} value={tempData?.description} onChange={handleChange} className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Catgory</label>
                  {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                  <select
                    {...register("benefitCat")}
                    value={tempData?.benefitCat}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {
                      benefitCats?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                      ))
                    }
                  </select>
                </div>
              </div>

              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Type of Amount</label>
                  <select
                    {...register("typeOfAmount")}
                    value={tempData?.typeOfAmount}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {
                      typeOfAmountList.map((item: any) => (
                        <option value={item}>{item}</option>
                      ))
                    }
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="amount" className="required form-label">Amount</label>
                  <input  {...register("amount")} value={tempData?.amount} onChange={handleChange} type="number" min={0} className="form-control form-control-solid" />

                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="accountNumber" className="required form-label">Account No.</label>
                  <input {...register("accountNumber")} value={tempData?.accountNumber} onChange={handleChange} className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Period Type</label>
                  {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                  <select
                    defaultValue={tempData?.periodType}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                  </select>
                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Period Interval</label>
                  <select
                    value={tempData?.periodInterval}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Currency</label>
                  {/* <input type="text" name="name"  className="form-control form-control-solid"/> */}
                  <select
                    {...register("currencyId")}
                    value={tempData?.currencyId}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {
                      currencies?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                      ))
                    }
                  </select>
                </div>
              </div>

              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Accrued</label>
                  <select
                    value={tempData?.accrued}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Tax Type</label>
                  {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                  <select
                    {...register("taxTypeId")}
                    value={tempData?.taxTypeId}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {
                      taxes?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Start Period</label>
                  <select
                    {...register("startPeriod")}
                    value={tempData?.startPeriod}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {
                      periods?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                      ))
                    }
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">isTaxable</label>
                  {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                  <select
                    defaultValue={tempData?.isTaxable}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
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

export { Benefit }
