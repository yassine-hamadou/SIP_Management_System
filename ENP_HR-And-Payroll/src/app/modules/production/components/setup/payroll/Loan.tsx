import { Button, Input, Modal, Space, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { KTCardBody, KTSVG } from '../../../../../../_metronic/helpers'
import { deleteItem, fetchDocument, postItem, updateItem } from '../../../../../services/ApiCalls'

const Loan = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const { register, reset, handleSubmit } = useForm()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tempData, setTempData] = useState<any>()
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const queryClient = useQueryClient()
  const typeOfInterestList = ['FORMULA', 'PERCENTAGE OF GROSS', 'VARYING AMOUNT', 'BASIC OF PERCENTAGE']
  const periodList = ['WEEKLY', 'MONTHLY']

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

  const { mutate: deleteData, isLoading: deleteLoading } = useMutation(deleteItem, {
    onSuccess: (data) => {
      queryClient.setQueryData(['loan', tempData], data);
      loadData()
    },
    onError: (error) => {
      console.log('delete error: ', error)
    }
  })

  function handleDelete(element: any) {
    const item = {
      url: '',
      data: element
    }
    deleteData(item)
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
      title: 'Interest Rate',
      dataIndex: 'interestRate',
      sorter: (a: any, b: any) => {
        if (a.interestRate > b.interestRate) {
          return 1
        }
        if (b.interestRate > a.interestRate) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Interest Type',
      dataIndex: 'interestType',
      sorter: (a: any, b: any) => {
        if (a.interestType > b.interestType) {
          return 1
        }
        if (b.interestType > a.interestType) {
          return -1
        }
        return 0
      },
    },

    {
      title: 'Moratorium',
      dataIndex: 'moratorium',
      sorter: (a: any, b: any) => {
        if (a.moratorium > b.moratorium) {
          return 1
        }
        if (b.moratorium > a.moratorium) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Min Repay Period',
      dataIndex: 'minrepay',
      sorter: (a: any, b: any) => {
        if (a.minrepay > b.minrepay) {
          return 1
        }
        if (b.minrepay > a.minrepay) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Max Repay Period',
      dataIndex: 'maxrepay',
      sorter: (a: any, b: any) => {
        if (a.maxrepay > b.maxrepay) {
          return 1
        }
        if (b.maxrepay > a.maxrepay) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Repayment Percentage Ceiling',
      dataIndex: 'ceiling',
      sorter: (a: any, b: any) => {
        if (a.ceiling > b.ceiling) {
          return 1
        }
        if (b.ceiling > a.ceiling) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Interest on Cancellation',
      dataIndex: 'cancellation',
      sorter: (a: any, b: any) => {
        if (a.cancellation > b.cancellation) {
          return 1
        }
        if (b.cancellation > a.cancellation) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Deduction',
      dataIndex: 'deduction',
      sorter: (a: any, b: any) => {
        if (a.deduction > b.deduction) {
          return 1
        }
        if (b.deduction > a.deduction) {
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
      const response = await fetchDocument('ProductionActivity')
      setGridData(response.data)
      setLoading(false)
      // const response = await fetchSmWebApiDocument('ProductionActivity')
      // setGridData(response.data)
      // setLoading(false)
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

  const { isLoading: updateLoading, mutate: updateData } = useMutation(updateItem, {
    onSuccess: (data) => {
      queryClient.setQueryData(['ProductionActivity', tempData], data);
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
    const item = {
      url: 'ProductionActivity',
      data: tempData
    }
    // updateData(item)
    console.log('update: ', item.data)
  }

  const showUpdateModal = (values: any) => {
    showModal()
    setIsUpdateModalOpen(true)
    setTempData(values);
    console.log(values)
  }


  const OnSubmit = handleSubmit(async (values) => {
    setLoading(true)
    const endpoint = 'ProductionActivity'

    const item = {
      data: {
        name: values.name,
        interestR: values.interestR,
        interestType: values.interestType,
        moratorium: values.moratorium,
        repayMin: values.repayMin,
        repayMax: values.repayMax,
        repayC: values.repayC,
        interestC: values.interestC,
        deductionPeriod: values.deductionPeriod,
      },
      url: endpoint
    }
    console.log(item.data)
    // postData(item)
  })

  const { mutate: postData, isLoading: postLoading } = useMutation(postItem, {
    onSuccess: (data) => {
      queryClient.setQueryData(['users', tempData], data);
      reset()
      setTempData({})
      loadData()
      setIsModalOpen(false)
    },
    onError: (error) => {
      console.log('post error: ', error)
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
          <Table columns={columns}  />
          <Modal
            title={isUpdateModalOpen ? 'Update Loan' : 'Add Loan'}
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
                onClick={isUpdateModalOpen ? handleUpdate : OnSubmit}
              >
                Submit
              </Button>,
            ]}
          >
            <form
              onSubmit={isUpdateModalOpen ? handleUpdate : OnSubmit}
            >

              <hr></hr>
              <div style={{ padding: "20px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Name</label>
                  <input type="text"
                    {...register("name")}
                    defaultValue={isUpdateModalOpen === true ? tempData.name : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Interest Rate</label>
                  <input type="text"
                    {...register("interestR")}
                    defaultValue={isUpdateModalOpen === true ? tempData.interestR : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />

                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Interest Type</label>
                  <select
                    {...register("typeOfInterest")}
                    value={tempData?.typeOfInterest}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {
                      typeOfInterestList.map((item: any) => (
                        <option value={item}>{item}</option>
                      ))
                    }
                  </select>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Moratorium</label>
                  <input
                    {...register("moratorium")}
                    defaultValue={isUpdateModalOpen === true ? tempData.moratorium : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />

                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Min Repayment Period</label>
                  <input
                    {...register("repayMin")}
                    defaultValue={isUpdateModalOpen === true ? tempData.repayMin : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />

                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Max Repayment Period</label>
                  <input
                    {...register("repayMax")}
                    defaultValue={isUpdateModalOpen === true ? tempData.repayMax : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />

                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Repayment Percentage Ceiling</label>
                  <input
                    {...register("repayC")}
                    defaultValue={isUpdateModalOpen === true ? tempData.repayC : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />

                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Deduction</label>
                  <select
                    {...register("deductionPeriod")} value={isUpdateModalOpen === true ? tempData?.deductionPeriod : null}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option>Select service</option> : null}
                    {
                      periodList.map((item: any) => (
                        <option value={item}>{item}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div style={{ padding: "0px 20px 0 20px" }} className='row mb-0 '>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Interest On Cancellation</label>
                  <input
                    {...register("interestC")}
                    defaultValue={isUpdateModalOpen === true ? tempData.interestC : ''}
                    onChange={handleChange}
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

export { Loan }

