import { Button, Form, Input, InputNumber, Modal, Space, Table } from 'antd'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { KTCardBody, KTSVG } from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { GRADES } from '../../../../../data/DummyData'
import { useForm } from 'react-hook-form'
import { Api_Endpoint, fetchGrades, fetchPaygroups, updateGrade } from '../../../../../services/ApiCalls'
import { useMutation, useQuery, useQueryClient } from 'react-query'

const Grades = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const { register, reset, handleSubmit } = useForm()
  const param: any = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tempData, setTempData] = useState<any>()
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  let [itemName, setItemName] = useState<any>("")

  const tenantId = localStorage.getItem('tenant')
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
  }

  const handleChange = (event: any) => {
    event.preventDefault()
    setTempData({ ...tempData, [event.target.name]: event.target.value });
  }

  const deleteData = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/Grades/${element.id}`)
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
    // {
    //   title: 'Paygroup',
    //   dataIndex: 'paygroupId',
    //   sorter: (a: any, b: any) => {
    //     if (a.paygroupId > b.paygroupId) {
    //       return 1
    //     }
    //     if (b.paygroupId > a.paygroupId) {
    //       return -1
    //     }
    //     return 0
    //   },
    // },

    {
      title: 'Action',
      fixed: 'right',
      width: 100,
      render: (_: any, record: any) => (
        <Space size='middle'>

          <Link to={`/grade-perks/${record.id}`}>
            <span className='btn btn-light-info btn-sm'>Perks</span>
          </Link>
          <Link to={`/notches/${record.id}`}>
            <span className='btn btn-light-info btn-sm'>Notches</span>
          </Link>
          <Link to={`/testgradeleaves/${record.id}`}>
            <span className='btn btn-light-primary btn-sm'>Leaves</span>
          </Link>
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


  const { data: allPaygroups } = useQuery('paygroups', ()=> fetchPaygroups(`paygroups/tenant/${tenantId}`), { cacheTime: 5000 })
  const { data: allGrades } = useQuery('grades',()=>  fetchGrades(tenantId), { cacheTime: 5000 })
  
  const getItemName = async (param: any) => {
    let newName = null
    const itemTest = await allPaygroups?.data.find((item: any) => item.id === param)
    console.log("itemTest: ",itemTest)
    newName = itemTest?.name
    return newName
  }

  // this filters for only grades for the pARAM ID 
  const dataByID = gridData.filter((section: any) => {
    return section.paygroupId?.toString() === param.id
  })

  const loadData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/Grades/tenant/${tenantId}`)
      setGridData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    (async () => {
      let res = await getItemName(param.id)
      setItemName(res)
      console.log("grades name: ",res)
    })();
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

  const queryClient = useQueryClient()
  const { isLoading, mutate } = useMutation(updateGrade, {
    onSuccess: (data) => {
      queryClient.setQueryData(['grades', tempData.id], data);
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

  const showUpdateModal = (values: any) => {
    setIsUpdateModalOpen(true)
    setTempData(values);
    console.log(values)
  }

  const url = `${Api_Endpoint}/Grades`
  const OnSUbmit = handleSubmit(async (values) => {
    setLoading(true)
    const data = {
      code: values.code,
      name: values.name,
      description: values.description,
      paygroupId: parseInt(param.id),
      tenantId: tenantId,
    }
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
          <Table columns={columns} dataSource={dataByID} loading={loading} />
          <Modal
            title='Grade Setup'
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
                onClick={OnSUbmit}
              >
                Submit
              </Button>,
            ]}
          >
            <form
              onSubmit={OnSUbmit}
            >
              <hr></hr>
              <div style={{ padding: "20px 20px 20px 20px" }} className='row mb-0 '>
                <div className=' mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Code</label>
                  <input type="text" {...register("code")} className="form-control form-control-solid" />
                </div>
                <div className=' mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                  <input type="text" {...register("name")} className="form-control form-control-solid" />
                </div>
                <div className=' mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Description</label>
                  <textarea style={{ margin: "10px 0px 0 0px" }} {...register("description")} className="form-control form-control-solid" aria-label="With textarea"></textarea>
                  {/* <input type="text" {...register("description")} className="form-control form-control-solid"/> */}
                </div>
                {/* <div className=' mb-7'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Status</label>
                      <select className="form-select form-select-solid" aria-label="Select example">
                        <option> select</option>
                        <option value="1">Active </option>
                        <option value="2">Not Active </option>
                      </select>
                    </div> */}
              </div>
            </form>
          </Modal>

          {/* update modal */}

          <Modal
            title='Grade Update'
            open={isUpdateModalOpen}
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
              <div style={{ padding: "20px 20px 20px 20px" }} className='row mb-0 '>
                <div className=' mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Code</label>
                  <input type="text" {...register("code")} value={tempData?.code} onChange={handleChange} className="form-control form-control-solid" />
                </div>
                <div className=' mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                  <input type="text" {...register("name")} value={tempData?.name} onChange={handleChange} className="form-control form-control-solid" />
                </div>
                <div className=' mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Description</label>
                  <textarea style={{ margin: "10px 0px 0 0px" }} {...register("description")} value={tempData?.description} onChange={handleChange} className="form-control form-control-solid" aria-label="With textarea"></textarea>
                  {/* <input type="text" {...register("description")} className="form-control form-control-solid"/> */}
                </div>
                {/* <div className=' mb-7'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Status</label>
                      <select className="form-select form-select-solid" aria-label="Select example">
                        <option> select</option>
                        <option value="1">Active </option>
                        <option value="2">Not Active </option>
                      </select>
                    </div> */}
              </div>
            </form>
          </Modal>
        </div>
      </KTCardBody>
    </div>
  )
}

export { Grades }
