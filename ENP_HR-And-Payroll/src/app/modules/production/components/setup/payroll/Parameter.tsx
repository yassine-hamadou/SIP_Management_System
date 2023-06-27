import { Button, Form, Input, InputNumber, Modal, Space, Table, message } from 'antd'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { KTCardBody, KTSVG } from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'
import { Api_Endpoint, deleteItem, fetchAppraisals, fetchDocument, postItem, updateItem } from '../../../../../services/ApiCalls'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useForm } from 'react-hook-form'
import form from 'antd/es/form'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Parameter = () => {
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
  let [appraisalName, setAppraisalName] = useState<any>("")
  const { data: parameters } = useQuery('Parameters', () => fetchDocument(`Parameters/tenant/${tenantId}`), { cacheTime: 5000 })

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

  // const { mutate: deleteData, isLoading: deleteLoading } = useMutation(deleteItem, {
  //   onSuccess: (data) => {
  //     queryClient.setQueryData(['loan', tempData], data);
  //     loadData()
  //   },
  //   onError: (error) => {
  //     console.log('delete error: ', error)
  //   }
  // })

  // function handleDelete(element: any) {
  //   const item = {
  //     url: 'Parameters',
  //     data: element
  //   }
  //   deleteData(item)
  // }

  const deleteData = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/Parameters/${element.id}`)
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
      title: 'Weight per parameter (%)',
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
          <Link to={`/objectives/${record.id}`}>
            <span className='btn btn-light-info btn-sm'>Objectives</span>
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


  const { data: allAppraisals } = useQuery('appraisals', ()=> fetchAppraisals(tenantId), { cacheTime: 5000 })
  const loadData = async () => {
    setLoading(true)
    try {
      // const response = await fetchDocument('Parameters')
      const response = await axios.get(`${Api_Endpoint}/Parameters/tenant/${tenantId}`)
      setGridData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const getItemName = async (param: any) => {

    let newName = null

    const itemTest = await allAppraisals?.data.find((item: any) =>
      item.id.toString() === param
    )
    newName = await itemTest
    return newName
  }

  useEffect(() => {
    (async () => {
      let res = await getItemName(param.id)
      setAppraisalName(res?.name)
    })();
    loadData()
  }, [])

  const dataWithIndex = gridData.map((item: any, index) => ({
    ...item,
    key: index,
  }))

  const dataByID = gridData.filter((section: any) => {
    return section.appraisalId?.toString() === param.id
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
      queryClient.setQueryData(['Parameters', tempData], data);
      reset()
      setIsUpdateModalOpen(false)
      setTempData({})
      loadData()
      setIsModalOpen(false)
    },
    onError: (error) => {
      console.log('error: ', error)
    }
  })

  const handleUpdate = (e: any) => {
    e.preventDefault()
    const item = {
      url: 'Parameters',
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

  const isTotalWeightValid = (newData: any) => {
    const totalWeight = parameters?.data.reduce((sum: any, item: any) => 
    sum + (item.weight || 0), 0) + newData.reduce((sum: any, item: any) => sum + (item.weight || 0), 0);
    return totalWeight <= 100;
  };
  

  const url = `${Api_Endpoint}/Parameters`
  const OnSubmit = handleSubmit(async (values) => {
    setLoading(true)
    const item = {
       data : {
        appraisalId: parseInt(param.id),
        name: values.name,
        code: values.code,
        tenantId: tenantId,
        status: 1, //parseInt(values.status),
        weight: parseInt(values.weight)
      },
      url: 'parameters'
    }
    const canAdd = isTotalWeightValid([item.data]);
    if (!canAdd) {
      setLoading(false)
      return message.error('Total weight cannot be more than 100%');
    }
     
      postData(item)
  })

  const { mutate: postData, isLoading: postLoading } = useMutation(postItem, {
    onSuccess: (data) => {
      queryClient.setQueryData(['parameters', tempData], data);
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
          <h3 style={{ fontWeight: "bolder" }}>{appraisalName}</h3>
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
            title={isUpdateModalOpen ? 'Parameter Update' : 'Parameter Setup'}
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
              <div style={{ padding: "20px 20px 20px 20px" }} className='row mb-0 '>
                <div className=' mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Code</label>
                  <input
                    {...register("code")}
                    defaultValue={isUpdateModalOpen === true ? tempData.code : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />
                </div>
                <div className='mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                  <input
                    {...register("name")}
                    defaultValue={isUpdateModalOpen === true ? tempData.name : ''}
                    onChange={handleChange}
                    className="form-control form-control-solid" />
                </div>
                <div className='mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">{`Parameter Weight (%)`}</label>
                  <input
                    {...register("weight")} type='number'
                    defaultValue={isUpdateModalOpen === true ? tempData.weight : 0}
                    onChange={handleChange}
                    className="form-control form-control-solid" />
                </div>
                {/* <div className='mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Status</label>
                  <select 
                    {...register("status")} 
                    value={isUpdateModalOpen === true ? tempData?.status?.toString() : null}
                    onChange={handleChange}
                    className="form-select form-select-solid" aria-label="Select example">
                    {isUpdateModalOpen === false ? <option>Select status</option> : null}
                    <option value='0'>Inactive</option>
                    <option value='1'>Active</option>
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

export { Parameter }
