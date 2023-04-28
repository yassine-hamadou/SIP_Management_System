import { Button, Divider, Input, Modal, Space, Table } from "antd"
import { useEffect, useState } from "react"
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from "react-query"
import { KTCardBody } from "../../../../../../_metronic/helpers"
import { deleteItem, fetchDocument, postItem, updateItem } from "../../../urls"
import { ModalFooterButtons, PageActionButtons } from "../../CommonComponents"


const ActivityTable = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const [tempData, setTempData] = useState<any>()
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const queryClient = useQueryClient()
  const { register, reset, handleSubmit } = useForm()


  const [isModalOpen, setIsModalOpen] = useState(false)

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
      queryClient.setQueryData(['activity', tempData], data);
      loadData()
      setLoading(false)
    },
    onError: (error) => {
      console.log('delete error: ', error)
    }
  })


  function handleDelete(element: any) {
    setLoading(true)
    const item = {
      url: 'ProductionActivity',
      data: element
    }
    deleteData(item)
  }
  const columns: any = [

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

  const loadData = async () => {
    setLoading(true)
    try {
      const response = await fetchDocument('ProductionActivity')
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

  const OnSubmit = handleSubmit(async (values: any) => {
    setSubmitLoading(true)
    const item = {
      data: {
        name: values.name,
      },
      url: 'ProductionActivity'
    }

    console.log(item.data)
    postData(item)
  })

  const { mutate: postData, isLoading: postLoading } = useMutation(postItem, {
    onSuccess: (data) => {
      queryClient.setQueryData(['activity', tempData], data);
      reset()
      setTempData({})
      loadData()
      setSubmitLoading(false)
      setIsModalOpen(false)
    },
    onError: (error) => {
      console.log('post error: ', error)
      setSubmitLoading(false)
    }
  })

  const { isLoading: updateLoading, mutate: updateData } = useMutation(updateItem, {
    onSuccess: (data) => {
      queryClient.setQueryData(['activity', tempData], data);
      reset()
      loadData()
      setIsUpdateModalOpen(false)
      setIsModalOpen(false)
      setSubmitLoading(false)
      setLoading(false)
    },
    onError: (error: any) => {
      setSubmitLoading(false)
      setLoading(false)
      console.log('error: ', error)
    }
  })

  const handleUpdate = async (values: any) => {
    setLoading(true)
    setSubmitLoading(true)
    const item = {
      url: 'ProductionActivity',
      data: tempData
    }
    updateData(item)
    console.log('update: ', item.data)
    setSubmitLoading(false)
  }

  const showUpdateModal = (value: any) => {
    showModal()
    setTempData(value)
    setIsUpdateModalOpen(true)
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
                value={searchText} size='large'
              />
              <Button type='primary' onClick={globalSearch} size='large'>
                Search
              </Button>
            </Space>
            <Space style={{ marginBottom: 16 }}>
              <PageActionButtons
                onAddClick={showModal}
                onExportClicked={() => { console.log('export clicked') }}
                hasAddButton={true}
                hasExportButton={true}
              />
            </Space>
          </div>
          <Table columns={columns} dataSource={dataWithIndex} bordered loading={loading} />
          <Modal
            title={isUpdateModalOpen ? 'Update Activity' : 'Add Activity'}
            open={isModalOpen}
            onCancel={handleCancel}
            closable={true}
            footer={
              <ModalFooterButtons
                onCancel={handleCancel}
                onSubmit={isUpdateModalOpen ? handleUpdate : OnSubmit} />
            }
          >
            <form
              onSubmit={isUpdateModalOpen ? handleUpdate : OnSubmit}
            >
              <hr></hr>
              <div className='row mb-0 mt-7'>
                <div className=' mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                  <input type="text" {...register("name")} defaultValue={isUpdateModalOpen === true ? tempData.name : ''} onChange={handleChange} className="form-control form-control-solid" />
                </div>
              </div>
            </form>
          </Modal>
        </div>
      </KTCardBody>
    </div>
  )
}

export { ActivityTable }

