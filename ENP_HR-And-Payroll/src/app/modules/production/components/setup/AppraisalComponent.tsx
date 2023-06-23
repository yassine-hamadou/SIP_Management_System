import { Button, Input, Modal, Space, Table, message } from 'antd'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { KTCardBody, KTSVG } from '../../../../../_metronic/helpers'
import { Api_Endpoint, deleteItem, fetchAppraisals, fetchDocument, postItem, updateItem } from '../../../../services/ApiCalls'
import { end } from '@popperjs/core'

const AppraisalComponent = (
  {
    title, endPoint
  }: any,
) => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const { register, reset, handleSubmit } = useForm()
  const navigate = useNavigate();
  const param: any = useParams();
  const tenantId = localStorage.getItem('tenant')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tempData, setTempData] = useState<any>()
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const queryClient = useQueryClient()
  const statusList = ['Active', 'Inactive']
  let [pathName, setPathName] = useState<any>("")
  const prevPath = title === 'Objectives' ? 'parameters' : 'objectives'
  const { data: pathData } = useQuery('pathData', () => fetchDocument(`${prevPath}/tenant/${tenantId}`), { cacheTime: 5000 })

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
      queryClient.setQueryData([endPoint, tempData], data);
      loadData()
    },
    onError: (error) => {
      console.log('delete error: ', error)
      message.error('Error deleting record')
    }
  })

  function handleDelete(element: any) {
    const item = {
      url: endPoint,
      data: element
    }
    deleteData(item)
  }

  const columns: any = title === 'Objectives' ? [
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
      title: 'Weight(%)',
      dataIndex: 'weight',
      sorter: (a: any, b: any) => {
        if (a.status > b.status) {
          return 1
        }
        if (b.status > a.status) {
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
            <Link to={`/deliverables/${record.id}`}>
              <span className='btn btn-light-info btn-sm'>{title}</span>
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
  ] :
    [
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
        title: 'Sub Weight(%)',
        dataIndex: 'subWeight',
        sorter: (a: any, b: any) => {
          if (a.status > b.status) {
            return 1
          }
          if (b.status > a.status) {
            return -1
          }
          return 0
        },
      },
      {
        title: 'Unit of Measure',
        dataIndex: 'unitOfMeasure',
        sorter: (a: any, b: any) => {
          if (a.status > b.status) {
            return 1
          }
          if (b.status > a.status) {
            return -1
          }
          return 0
        },
      },
      {
        title: 'Target',
        dataIndex: 'target',
        sorter: (a: any, b: any) => {
          if (a.status > b.status) {
            return 1
          }
          if (b.status > a.status) {
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


  const { data: allAppraisals } = useQuery('appraisals', () => fetchAppraisals(tenantId), { cacheTime: 5000 })

  const loadData = async () => {
    setLoading(true)
    try {
      const response = await fetchDocument(`${endPoint}/tenant/${tenantId}`)
      // const dummyData: any = title === 'Objectives' ? ObjectivesDummyData : DeliverablesDummyData
      // setGridData(dummyData)

      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const getItemName = async (param: any) => {
    let newName = null
    const itemTest = await pathData?.data.find((item: any) =>
      item.id.toString() === param
    )
    newName = await itemTest
    return newName
  }

  useEffect(() => {
    (async () => {
      let res = await getItemName(param.id)
      setPathName(res?.name)
    })();
    const dummyData: any = title === 'Objectives' ? ObjectivesDummyData : DeliverablesDummyData
    setGridData(dummyData)
    console.log('dummyData: ', dummyData)
    loadData()
  }, [])

  const dataWithIndex = gridData.map((item: any, index) => ({
    ...item,
    key: index,
  }))

  const dataByID = gridData.filter((section: any) => {
    return title === 'Objectives' ?
      section.parameterId.toString() === param.id :
      section.objectiveId.toString() === param.id
  })

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
      queryClient.setQueryData([endPoint, tempData], data);
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
    const item: any = {
      url: endPoint,
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

  const url = `${Api_Endpoint}/Parameters`
  const OnSubmit = handleSubmit(async (values) => {
    setLoading(true)
    const item = {
      data: {
        equipmentId: values.equipmentId,
        modelName: values.modelName,
        description: values.equipmentDes,
        tenantId: tenantId,
      },
      url: endPoint,
    }
    postData(item)

  })

  const { mutate: postData, isLoading: postLoading } = useMutation(postItem, {
    onSuccess: (data) => {
      queryClient.setQueryData([endPoint, tempData], data);
      reset()
      setTempData({})
      loadData()
      setIsModalOpen(false)
      setSubmitLoading(false)
    },
    onError: (error: any) => {
      setSubmitLoading(false)
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
          <h3 style={{ fontWeight: "bolder" }}>{pathName}</h3>
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
            title={isUpdateModalOpen ? `Update ${title}` : `Add ${title}`}
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
              {
                title === 'Objective' ?
                  <div style={{ padding: "20px 20px 20px 20px" }} className='row mb-0 '>
                    <div className='mb-7'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                      <input
                        {...register("name")}
                        defaultValue={isUpdateModalOpen === true ? tempData.name : null}
                        onChange={handleChange}
                        className="form-control form-control-solid" />
                    </div>
                    <div className='mb-7'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">{`Weight(%)`}</label>
                      <input
                        {...register("weight")}
                        type='number' min='0'
                        defaultValue={isUpdateModalOpen === true ? tempData.weight : 0}
                        onChange={handleChange}
                        className="form-control form-control-solid" />
                    </div>
                  </div>
                  :
                  <>
                    <div style={{ padding: "20px 20px 20px 20px" }} className='row mb-0 '>
                      <div className='col-4 mb-7'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input
                          {...register("name")}
                          defaultValue={isUpdateModalOpen === true ? tempData.name : null}
                          onChange={handleChange}
                          className="form-control form-control-solid" />
                      </div>
                      <div className='col-4 mb-7'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Description</label>
                        <input
                          {...register("description")}
                          defaultValue={isUpdateModalOpen === true ? tempData.description : null}
                          onChange={handleChange}
                          className="form-control form-control-solid" />
                      </div>
                      <div className='col-4 mb-7'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Target</label>
                        <input
                          {...register("target")}
                          defaultValue={isUpdateModalOpen === true ? tempData.target : null}
                          onChange={handleChange}
                          className="form-control form-control-solid" />
                      </div>
                    </div>
                    <div style={{ padding: "20px 20px 20px 20px" }} className='row mb-0 '>
                      <div className='col-4 mb-7'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Unit of measure</label>
                        <input
                          {...register("unitOfMeasure")}
                          defaultValue={isUpdateModalOpen === true ? tempData.unitOfMeasure : null}
                          onChange={handleChange}
                          className="form-control form-control-solid" />
                      </div>
                      <div className='col-4 mb-7'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Sub Weight</label>
                        <input
                          {...register("subWeight")}
                          type='number' min='0'
                          defaultValue={isUpdateModalOpen === true ? tempData.subWeight : 0}
                          onChange={handleChange}
                          className="form-control form-control-solid" />
                      </div>
                    </div>
                  </>
              }
            </form>
          </Modal>
        </div>
      </KTCardBody>
    </div>
  )
}

// dummy data for objectives
const ObjectivesDummyData = [
  {
    id: 1,
    name: 'Objective 1',
    parameterId: 5,
    weight: 10,
  },
  {
    id: 2,
    name: 'Objective 2',
    parameterId: 4,
    weight: 20,
  },
  {
    id: 3,
    name: 'Objective 3',
    parameterId: 5,
    weight: 30,
  },
]

// dummy data for deliverables
const DeliverablesDummyData = [
  {
    id: 1,
    name: 'Deliverable 1',
    description: 'Deliverable 1 description',
    objectiveId: 1,
    subWeight: 10,
    unitOfMeasure: 'Unit 1',
    target: 10,
  },
  {
    id: 2,
    name: 'Deliverable 2',
    description: 'Deliverable 2 description',
    objectiveId: 1,
    subWeight: 20,
    unitOfMeasure: 'Unit 2',
    target: 20,
  },
  {
    id: 3,
    name: 'Deliverable 3',
    description: 'Deliverable 3 description',
    objectiveId: 3,
    subWeight: 30,
    unitOfMeasure: 'Unit 3',
    target: 30,
  },
]

export { AppraisalComponent, ObjectivesDummyData, DeliverablesDummyData }
