import { Button, Form, Input, InputNumber, Modal, Space, Table } from 'antd'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { KTCardBody, KTSVG } from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'
import { DEDUCTION } from '../../../../../data/DummyData'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Api_Endpoint, fetchCurrencies, fetchDeductionsCategory, fetchPeriods, fetchTaxes, updateDeductions } from '../../../../../services/ApiCalls'
import { useForm } from 'react-hook-form'

const Deduction = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const [form] = Form.useForm()
  const { register, reset, handleSubmit } = useForm()
  const [selectedPeriod, setSelectedPeriodValue] = useState<any>(null);
  const [selectedTaxtype, setSelectedTaxtypeValue] = useState<any>(null);
  const [selectedCurrency, setSelectedCurrencyValue] = useState<any>(null);


  const { data: deductionCats } = useQuery('deductionCats', fetchDeductionsCategory, { cacheTime: 5000 })
  const { data: periods } = useQuery('periods', fetchPeriods, { cacheTime: 5000 })
  const { data: taxes } = useQuery('taxes', fetchTaxes, { cacheTime: 5000 })
  const { data: currencies } = useQuery('currencies', fetchCurrencies, { cacheTime: 5000 })

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [tempData, setTempData] = useState<any>()

  const [isModalOpen, setIsModalOpen] = useState(false)


  const currencyList = ['GHC', 'GBP', 'USD', 'AUD']
  const typeOfAmountList = ['FORMULA', 'PERCENTAGE OF GROSS', 'VARYING AMOUNT', 'BASIC OF PERCENTAGE']
  const periodTypeList = ['MONTHLY', 'WEEKLY']

  const [deductionCat, setDeductionCat] = useState<any>()
  const [startPeriod, setStartPeriod] = useState<any>()
  const [currency, setCurrency] = useState<any>()
  const [taxType, setTaxType] = useState<any>()


  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    form.resetFields()
    setIsModalOpen(false)
    setIsUpdateModalOpen(false)
  }

  const deleteData = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/Deductions/${element.id}`)
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

  // get names of fields from id 
  const getFieldname = (data: any, field: any) => {
    let fieldName = ''
    data?.map((item: any) => {
      if (item.id === field) {
        fieldName = item.name
      }
    })
    return fieldName
  }

  // filter item out from data
  const filterData = (data: any, field: any) => {
    return data?.filter((item: any) => item.id !== field)
  }

  const showUpdateModal = (values: any) => {
    setIsUpdateModalOpen(true)
    setTempData(values);
    console.log(values)

    setDeductionCat(getFieldname(deductionCats, values.deductionCatId))
    setStartPeriod(getFieldname(periods, values.startPeriodId))
    setCurrency(getFieldname(currencies, values.currencyId))
    setTaxType(getFieldname(taxes, values.taxTypeId))

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
      title: 'Category',
      dataIndex: 'deductionCatId',
      render: (_: any, record: any) => {
        return getFieldname(deductionCats?.data, record.deductionCatId)      
      },
      sorter: (a: any, b: any) => {
        if (a.deductionCatId > b.deductionCatId) {
          return 1
        }
        if (b.deductionCatId > a.deductionCatId) {
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
      dataIndex: 'account',
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
      title: 'Account Number',
      dataIndex: 'accountNumber',
      sorter: (a: any, b: any) => {
        if (a.accountNumber > b.accountNumber) {
          return 1
        }
        if (b.accountNumber > a.accountNumber) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Currency',
      dataIndex: 'currencyId',
      render: (_: any, record: any) => {
        return getFieldname(currencies?.data, record.currencyId)      
      },
      sorter: (a: any, b: any) => {
        if (a.currencyId > b.currencyId) {
          return 1
        }
        if (b.currencyId > a.currencyId) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Tax Type',
      dataIndex: 'taxTypeId',
      sorter: (a: any, b: any) => {
        if (a.taxTypeId > b.taxTypeId) {
          return 1
        }
        if (b.taxTypeId > a.taxTypeId) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Accrued',
      dataIndex: 'accrued',
      sorter: (a: any, b: any) => {
        if (a.accrued > b.accrued) {
          return 1
        }
        if (b.accrued > a.accrued) {
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
      const response = await axios.get(`${Api_Endpoint}/Deductions`)
      setGridData(response.data)
      setLoading(false)
      console.log(response.data)
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

  const url = `${Api_Endpoint}/Deductions`
  const onFinish = handleSubmit(async (values: any, event) => {
    event?.preventDefault()
    setSubmitLoading(true)
    const data = {
      code: values.code,
      name: values.name,
      description: values.description,
      account: parseInt(values.account),
      typeOfAmount: values.typeOfAmount,
      accountNumber: values.accountNumber,
      periodType: values.periodType,
      currencyId: parseInt(values.currencyId),
      accrued: values.accrued,
      taxTypeId: parseInt(values.taxTypeId),
      deductionCatId: parseInt(values.deductionCatId),
      startPeriod: parseInt(values.startPeriod),
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
  }
  )

  const queryClient = useQueryClient()
  const { isLoading, mutate } = useMutation(updateDeductions, {
    onSuccess: (data) => {
      queryClient.setQueryData(['benefitCats', tempData.id], data);
      loadData()
      reset()
      setIsUpdateModalOpen(false)
    }
  })

  const handleUpdate = (e: any) => {
    e.preventDefault()
    mutate(tempData)
  }
  console.log(tempData)


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
            title='Deduction Setup'
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
                onClick={onFinish}
              >
                Submit
              </Button>,
            ]}
          >
            <form
              onSubmit={onFinish}
            >
              <hr></hr>
              <div style={{ padding: "20px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Code</label>
                  <input type="text" {...register("code")} name="code" className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Name</label>
                  <input type="text" {...register("name")} name="name" className="form-control form-control-solid" />

                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Description</label>
                  <input type="text" {...register("description")} name="description" className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Category</label>
                  {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                  <select
                    {...register("deductionCatId")}
                    className="form-select form-select-solid" aria-label="Select example">
                    <option>Select</option>
                    {
                      deductionCats?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Type of Amount</label>
                  <select {...register("typeOfAmount")} className="form-select form-select-solid" aria-label="Select example">
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
                  <input type="number" {...register("account")} min={0} name="account" defaultValue={0.00} className="form-control form-control-solid" />

                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Account No.</label>
                  <input type="text" {...register("accountNumber")} name="accountNumber" className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Period Type</label>
                  {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                  <select
                    {...register("periodType")}
                    className="form-select form-select-solid" aria-label="Select example">
                    <option> select period type</option>
                    {
                      periodTypeList.map((item: any) => (
                        <option value={item}>{item}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Period Interval</label>
                  <select
                    {...register("periodInterval")}
                    className="form-select form-select-solid" aria-label="Select example">
                    <option> select interval</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Currency</label>
                  {/* <input type="text" name="name"  className="form-control form-control-solid"/> */}
                  <select
                    {...register("currencyId")}
                    className="form-select form-select-solid" aria-label="Select example">
                    <option> select currency</option>
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
                    {...register("accrued")}
                    className="form-select form-select-solid" aria-label="Select example">
                    <option> select accrued</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Tax Type</label>
                  {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                  <select
                    {...register("taxTypeId")}
                    className="form-select form-select-solid" aria-label="Select example">
                    <option> select tax type</option>
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
                    className="form-select form-select-solid" aria-label="Select example">
                    <option>Select start period</option>
                    {
                      periods?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                      ))
                    }
                  </select>
                </div>

              </div>
            </form>
          </Modal>

          {/* update deductions modal */}

          <Modal
            title='Deduction Update'
            open={isUpdateModalOpen}
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
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Code</label>
                  <input type="text" {...register("code")} name="code" defaultValue={tempData?.code} onChange={handleChange} className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Name</label>
                  <input type="text" {...register("name")} name="name" defaultValue={tempData?.name} onChange={handleChange} className="form-control form-control-solid" />

                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Description</label>
                  <input type="text" {...register("description")} name="description" defaultValue={tempData?.description} onChange={handleChange} className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Category</label>
                  {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                  <select
                    {...register("deductionCatId")}
                    value={tempData?.deductionCatId}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {
                      deductionCats?.data.map((item: any) => (
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
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Amount</label>
                  <input type="number" {...register("account")} min={0} name="account" value={tempData?.account} onChange={handleChange} className="form-control form-control-solid" />

                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Account No.</label>
                  <input type="text" {...register("accountNumber")} defaultValue={tempData?.accountNumber} onChange={handleChange} name="accountNumber" className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Period Type</label>
                  {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                  <select
                    {...register("periodType")}
                    value={tempData?.periodType}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {
                      periodTypeList.map((item: any) => (
                        <option value={item}>{item}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Period Interval</label>
                  <select
                    {...register("periodInterval")}
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
                    {...register("accrued")}
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
              </div>
            </form>
          </Modal>



        </div>
      </KTCardBody>
    </div>
  )
}

export { Deduction }
