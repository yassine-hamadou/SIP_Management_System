import { Button, Form, Input, InputNumber, Modal, Space, Table } from 'antd'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { KTCardBody, KTSVG } from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'
import { useForm } from 'react-hook-form'
import { Api_Endpoint, fetchBenefitsCategory, fetchPeriods } from '../../../../../services/ApiCalls'
import { useQuery } from 'react-query'
import { validateExpression } from '@devexpress/analytics-core/analytics-internal'


type Fields = {
  name: string
}

const Benefit = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const [selectedBenefitCat, setSelectedBenefitCatValue] = useState<any>(null);
  const [selectedPeriod, setSelectedPeriodValue] = useState<any>(null);

  const { data: benefitCats } = useQuery('benefitCats', fetchBenefitsCategory, { cacheTime: 5000 })
  const { data: periods } = useQuery('periods', fetchPeriods, { cacheTime: 5000 })

  const typeOfAmount = ['FORMULA', 'PERCENTAGE OF GROSS', 'VARYING AMOUNT', 'BASIC OF PERCENTAGE']

  const [tempData, setTempData] = useState<any>()

  // check if user clicked add or update
  const [isUpdate, setIsUpdate] = useState(false)


  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState({})

  const { register, reset, handleSubmit } = useForm()
  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
    setIsUpdate(false)
  }

  const handleCancel = () => {
    reset()
    setIsModalOpen(false)
    setIsUpdate(false)
  }

  const handleChange = (event: any) => {
    event.preventDefault()
    setTempData({ ...tempData, [event.target.name]: event.target.value });
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

  const url = `${Api_Endpoint}/Benefits`
  const OnSubmit = handleSubmit(async (values, event) => {
    event?.preventDefault();
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
      startPeriod: parseInt(selectedPeriod),
      isTaxable: values.isTaxable,
      benefitCat: parseInt(values.benefitCat),
    }
    console.log(data)
    try {
      const response = await axios.post(url, data)
      setLoading(false)
      loadData()
      reset()
      setIsModalOpen(false)
      return response.statusText

    } catch (error: any) {
      setLoading(false)
      return error.statusText
    }

  })


  const showUpdateModal = (values: any) => {
    setIsUpdate(true)
    setTempData(values);
    console.log(tempData)
  }



  const onUpdate = handleSubmit(async (values, event) => {
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
    console.log(data)
    try {
      const response = await axios.put(`${Api_Endpoint}/Benefits/${values.id}`, data)
      setLoading(false)
      setIsUpdate(false)
      reset()
      loadData()
      return response.statusText
    } catch (error: any) {
      setLoading(false)
      setIsUpdate(false)
      reset()
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
                  <select {...register("benefitCat")} value={selectedBenefitCat} onChange={(e) => setSelectedBenefitCatValue(e.target.value)} className="form-select form-select-solid" aria-label="Select example">
                    {
                      benefitCats?.data.length === 0 ? (
                        <option value="1">Select</option>
                      ) : (
                        benefitCats?.data.map((item: any) => (
                          <option value={item.id}>{item.name}</option>
                        ))
                      )
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
                      typeOfAmount.map((item: any) => (
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
                  <select {...register("periodType")} className="form-select form-select-solid" aria-label="Select example">
                    <option> select</option>
                    <option value="1">Monthly</option>
                    <option value="2">Yearly</option>
                  </select>
                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Period Interval</label>
                  <select {...register("periodInterval")} className="form-select form-select-solid" aria-label="Select example">
                    <option> select</option>
                    <option value="1">Weekly</option>
                    <option value="2">Monthly</option>
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Currency</label>
                  {/* <input type="text" name="name"  className="form-control form-control-solid"/> */}
                  <select {...register("currencyId")} className="form-select form-select-solid" aria-label="Select example">
                    <option> select</option>
                    <option value="1">Cedis</option>
                    <option value="2">Dollar</option>
                  </select>
                </div>
              </div>

              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Accrued</label>
                  <select {...register("accrued")} className="form-select form-select-solid" aria-label="Select example">
                    <option> select</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Tax Type</label>
                  {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                  <select {...register("taxTypeId")} className="form-select form-select-solid" aria-label="Select example">
                    <option> select</option>
                    <option value="1">test1 </option>
                    <option value="2">test2 </option>
                  </select>
                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Start Period</label>
                  <select value={selectedPeriod} onChange={(e) => setSelectedPeriodValue(e.target.value)} className="form-select form-select-solid" aria-label="Select example">
                    {
                      periods?.data.length === 0 ? (
                        <option>Select date</option>
                      ) : (
                        periods?.data.map((item: any) => (
                          <option value={item.id}>{item.name}</option>
                        ))
                      )
                    }
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">isTaxable</label>
                  {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                  <select {...register("isTaxable")} className="form-select form-select-solid" aria-label="Select example">
                    <option>select</option>
                    <option value="1">Yes </option>
                    <option value="2">No </option>
                  </select>
                </div>
              </div>
            </form>
          </Modal>

          <Modal
            title='Benefit Update'
            open={isUpdate}
            onCancel={() => setIsUpdate(false)}
            closable={true}
            width={860}
            footer={[
              <Button key='back' onClick={() => setIsUpdate(false)}>
                Cancel
              </Button>,
              <Button
                key='update'
                type='primary'
                htmlType='submit'
                loading={submitLoading}
                onClick={onUpdate}
              >
                Update
              </Button>,
            ]}
          >

            <form
              onSubmit={onUpdate}
            >
              <hr></hr>
              <div style={{ padding: "20px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="code" className="required form-label">Code</label>

                  <input {...register("code")} type="text" name='code' id='code' defaultValue={tempData?.code} onChange={handleChange} className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="name" className="required form-label">Name</label>
                  <input {...register("name")} defaultValue={tempData?.name} onChange={handleChange} name='name' id='name' type="text" className="form-control form-control-solid" />
                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="description" className="required form-label">Description</label>
                  <input {...register("description")} defaultValue={tempData?.description} onChange={handleChange} type="text" name='description' id='description' className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Category</label>
                  {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                  <select
                  {...register("benefitCat")}
                    onChange={(e) => {
                      setTempData({ ...tempData, benefitCat: e.target.value })
                    }}
                    defaultValue={tempData?.benefitCat}
                    className="form-select form-select-solid" aria-label="Select example">
                    {
                      benefitCats?.data.length === 0 ? (
                        <option value="1">Select</option>
                      ) : (
                        benefitCats?.data.map((item: any) => (
                          <option value={item.id}>{item.name}</option>
                        ))
                      )
                    }
                  </select>
                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Type of Amount</label>
                  <select
                  {...register("typeOfAmount")}
                    onChange={(e) => {
                      setTempData({ ...tempData, typeOfAmount: e.target.value })
                    }}
                    defaultValue={tempData?.typeOfAmount}
                    className="form-select form-select-solid" aria-label="Select example">
                    <option> select</option>
                    {
                      typeOfAmount.map((item: any) => (
                        <option value={item}>{item}</option>
                      ))
                    }
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="amount" className="required form-label">Amount</label>
                  <input  {...register("amount")} defaultValue={tempData?.amount} onChange={handleChange} type="number" name='amount' id='amount' min={0} className="form-control form-control-solid" />

                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="accountNumber" className="required form-label">Account No.</label>
                  <input {...register("accountNumber")} defaultValue={tempData?.accountNumber} onChange={handleChange} type="text" name='accountNumber' id='accountNumber' className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Period Type</label>
                  {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                  <select
                  {...register("periodType")} 
                    defaultValue={tempData?.periodType}
                    onChange={(e) => {
                      setTempData({ ...tempData, periodType: e.target.value })
                    }}
                    className="form-select form-select-solid" aria-label="Select example">
                    <option value="1">Monthly</option>
                    <option value="2">Yearly</option>
                  </select>
                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Period Interval</label>
                  <select
                  {...register("periodInterval")}
                    defaultValue={tempData?.periodInterval}
                    onChange={(e) => {
                      setTempData({ ...tempData, periodInterval: e.target.value })
                    }}
                    className="form-select form-select-solid" aria-label="Select example">
                    <option value="1">Weekly</option>
                    <option value="2">Monthly</option>
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Currency</label>
                  {/* <input type="text" name="name"  className="form-control form-control-solid"/> */}
                  <select
                  {...register("currencyId")}
                    defaultValue={tempData?.currencyId}
                    onChange={(e) => {
                      setTempData({ ...tempData, currencyId: e.target.value })
                    }}
                    className="form-select form-select-solid" aria-label="Select example">
                    <option value="1">Cedis</option>
                    <option value="2">Dollar</option>
                  </select>
                </div>
              </div>

              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Accrued</label>
                  <select
                  {...register("accrued")}
                    defaultValue={tempData?.accrued}
                    onChange={(e) => {
                      setTempData({ ...tempData, accrued: e.target.value })
                    }}
                    className="form-select form-select-solid" aria-label="Select example">
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Tax Type</label>
                  {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                  <select
                  {...register("taxTypeId")}
                    defaultValue={tempData?.taxTypeId}
                    onChange={(e) => {
                      setTempData({ ...tempData, taxTypeId: e.target.value })
                    }}
                    className="form-select form-select-solid" aria-label="Select example">
                    <option value="1">test1 </option>
                    <option value="2">test2 </option>
                  </select>
                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Start Period</label>
                  <select
                  {...register("startPeriod")}
                    defaultValue={tempData?.startPeriod}
                    onChange={(e) => {
                      setTempData({ ...tempData, startPeriod: e.target.value })
                    }}
                    className="form-select form-select-solid" aria-label="Select example">
                    {
                      periods?.data.length === 0 ? (
                        <option>Select date</option>
                      ) : (
                        periods?.data.map((item: any) => (
                          <option value={item.id}>{item.name}</option>
                        ))
                      )
                    }
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">isTaxable</label>
                  {/* <input type="text" name="field1"  className="form-control form-control-solid"/> */}
                  <select
                  {...register("isTaxable")}
                    defaultValue={tempData?.isTaxable}
                    onChange={(e) => {
                      setTempData({ ...tempData, isTaxable: e.target.value })
                    }}
                    className="form-select form-select-solid" aria-label="Select example">
                    <option value="1">Yes </option>
                    <option value="2">No </option>
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
