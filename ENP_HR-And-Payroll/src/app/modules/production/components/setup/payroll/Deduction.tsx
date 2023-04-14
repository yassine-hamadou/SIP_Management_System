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

  const [selectedDeductionCat, setSelectedDeductionCatValue] = useState<any>(null);
  const [isUpdate, setIsUpdate] = useState(false)
  const [tempData, setTempData] = useState<any>()

  const [isModalOpen, setIsModalOpen] = useState(false)


  const currencyList = ['GHC', 'GBP', 'USD', 'AUD']
  const typeOfAmountList = ['FORMULA', 'PERCENTAGE OF GROSS', 'VARYING AMOUNT', 'BASIC OF PERCENTAGE']


  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    form.resetFields()
    setIsModalOpen(false)
    setIsUpdate(false)
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

  const showUpdateModal = (values: any) => {
    setIsUpdate(true)
    setTempData(values);
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
        if (a.desc > b.desc) {
          return 1
        }
        if (b.desc > a.desc) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Category',
      dataIndex: 'deductionCatId',
      sorter: (a: any, b: any) => {
        if (a.cat > b.cat) {
          return 1
        }
        if (b.cat > a.cat) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Type of Amount',
      dataIndex: 'typeOfAmount',
      sorter: (a: any, b: any) => {
        if (a.tamount > b.tamount) {
          return 1
        }
        if (b.tamount > a.tamount) {
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
      title: 'Account Number',
      dataIndex: 'accountNumber',
      sorter: (a: any, b: any) => {
        if (a.accnum > b.accnum) {
          return 1
        }
        if (b.accnum > a.accnum) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Currency',
      dataIndex: 'currencyId',
      sorter: (a: any, b: any) => {
        if (a.currency > b.currency) {
          return 1
        }
        if (b.currency > a.currency) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Tax Type',
      dataIndex: 'taxTypeId',
      sorter: (a: any, b: any) => {
        if (a.taxtype > b.taxtype) {
          return 1
        }
        if (b.taxtype > a.taxtype) {
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
  const onFinish = async (values: any) => {
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
      startPeriod: parseInt(selectedPeriod),
    }

    console.log(data)

    try {
      const response = await axios.post(url, data)
      setSubmitLoading(false)
      form.resetFields()
      setIsModalOpen(false)
      loadData()
      return response.statusText
    } catch (error: any) {
      setSubmitLoading(false)
      return error.statusText
    }
  }

  const queryClient = useQueryClient()
  const { isLoading, mutate } = useMutation(updateDeductions, {
    onSuccess: (data) => {
      queryClient.setQueryData(['benefitCats', tempData.id], data);
      loadData()
      form.resetFields()
      setIsUpdate(false)
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
          <Table columns={columns} dataSource={DEDUCTION} />
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
                onClick={() => {
                  form.submit()
                }}
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
                    value={selectedDeductionCat}
                    onChange={(e) => setSelectedDeductionCatValue(e.target.value)} 
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
                  <input type="number" {...register("amount")} min={0} name="amount" defaultValue={0.00} className="form-control form-control-solid" />

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
                  <select className="form-select form-select-solid" aria-label="Select example">
                    <option> select</option>
                    {
                      periods?.data.map((item: any) => (
                        <option value={item.name}>{item.name}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Period Interval</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                    <option> select</option>
                    <option value="1">Weekly</option>
                    <option value="2">Monthly</option>
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Currency</label>
                  {/* <input type="text" name="name"  className="form-control form-control-solid"/> */}
                  <select className="form-select form-select-solid" aria-label="Select example">
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
                  <select className="form-select form-select-solid" aria-label="Select example">
                    <option> select</option>
                    <option value="1">YES</option>
                    <option value="2">NO</option>
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Tax Type</label>
                  {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                  <select className="form-select form-select-solid" aria-label="Select example">
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
                    className="form-select form-select-solid" aria-label="Select example">
                    <option>Select period</option>
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
            open={isUpdate}
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
                  <input type="text" defaultValue={tempData?.code} onChange={handleChange} name="code" className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Name</label>
                  <input type="text" defaultValue={tempData?.name} onChange={handleChange} name="name" className="form-control form-control-solid" />

                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Description</label>
                  <input type="text" defaultValue={tempData?.desc} onChange={handleChange} name="desc" className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Category</label>
                  {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                  <select
                    defaultValue={tempData?.deductionCatId}
                    onChange={(e) => setTempData({ ...tempData, deductionCatId: e.target.value })}
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
                  <select
                    defaultValue={tempData?.typeOfAmount}
                    onChange={(e) => setTempData({ ...tempData, typeOfAmount: e.target.value })}
                    className="form-select form-select-solid" aria-label="Select example">
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
                  <input type="number" defaultValue={tempData?.amount} onChange={handleChange} min={0} name="amount" className="form-control form-control-solid" />

                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Account No.</label>
                  <input type="text" defaultValue={tempData?.accnum} onChange={handleChange} name="accno" className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Period Type</label>
                  {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                  <select
                    defaultValue={tempData?.ptype}
                    onChange={(e) => {
                      setTempData({ ...tempData, ptype: e.target.value })
                    }}
                    className="form-select form-select-solid" aria-label="Select example">
                    <option> select</option>
                    {
                      periods?.data.map((item: any) => (
                        <option value={item.name}>{item.name}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Period Interval</label>
                  <select
                    defaultValue={tempData?.pinterval}
                    onChange={(e) => {
                      setTempData({ ...tempData, pinterval: e.target.value })
                    }}
                    className="form-select form-select-solid" aria-label="Select example">
                    <option> select</option>
                    <option value="1">Weekly</option>
                    <option value="2">Monthly</option>
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Currency</label>
                  {/* <input type="text" name="name"  className="form-control form-control-solid"/> */}
                  <select
                    defaultValue={tempData?.currency}
                    onChange={(e) => {
                      setTempData({ ...tempData, currency: e.target.value })
                    }}
                    className="form-select form-select-solid" aria-label="Select example">
                    <option> select</option>
                    {
                      currencyList.map((item: any) => (
                        <option value={item}>{item}</option>
                      ))
                    }
                  </select>
                </div>
              </div>

              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Accrued</label>
                  <select
                    defaultValue={tempData?.accrued}
                    onChange={(e) => {
                      setTempData({ ...tempData, accrued: e.target.value })
                    }}
                    className="form-select form-select-solid" aria-label="Select example">
                    <option> select</option>
                    <option value="1">YES</option>
                    <option value="2">NO</option>
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Tax Type</label>
                  {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                  <select
                    defaultValue={tempData?.taxtype}
                    onChange={(e) => {
                      setTempData({ ...tempData, taxtype: e.target.value })
                    }}
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
                    defaultValue={tempData?.startPeriod}
                    onChange={(e) => {
                      setTempData({ ...tempData, startPeriod: e.target.value })
                    }}
                    className="form-select form-select-solid" aria-label="Select example">
                    <option>Select date</option>
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
