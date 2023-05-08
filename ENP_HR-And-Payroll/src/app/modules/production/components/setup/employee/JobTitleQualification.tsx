import {Button, Form, Input, InputNumber, Modal, Space, Table} from 'antd'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {KTCardBody, KTSVG} from '../../../../../../_metronic/helpers'
import { useForm } from 'react-hook-form'
import { Api_Endpoint, fetchJobTitles, fetchQualifications, fetchSkills } from '../../../../../services/ApiCalls'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'

const JobTitleQualification = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const {register, reset, handleSubmit} = useForm()
  const param:any  = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false)
  let [itemName, setItemName] = useState<any>("")
  const navigate = useNavigate();

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
  }

  const deleteData = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/JobTitleQualifications/${element.id}`)
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
      title: 'Qualification Name',
      key:'qualificationId',
      render: (row: any) => {
        return getQualificationName(row.qualificationId)
      },
      sorter: (a: any, b: any) => {
        if (a.qualificationId > b.qualificationId) {
          return 1
        }
        if (b.qualificationId > a.qualificationId) {
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
          {/* <a href='#' className='btn btn-light-warning btn-sm'>
            Update
          </a> */}
          <a onClick={() => handleDelete(record)} className='btn btn-light-danger btn-sm'>
            Delete
          </a>
         
        </Space>
      ),
      
    },
  ]

  const {data:allJobTitles} = useQuery('jobtitle',()=>  fetchJobTitles(tenantId), {cacheTime:5000})
  const {data:allQualifications} = useQuery('qualification',()=>  fetchQualifications(tenantId), {cacheTime:5000})  

  const getQualificationName = (qualificationId: any) => {
    let qualificationName = null
    allQualifications?.data.map((item: any) => {
      if (item.id === qualificationId) {
        qualificationName=item.name
      }
    })
    return qualificationName
  } 
  const loadData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/JobTitleQualifications/tenant/${tenantId}`)
      setGridData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  const getItemName= async (param:any) =>{

    let newName=null
  
     const   itemTest = await allJobTitles?.data.find((item:any) =>
      item.id.toString()===param
    )
     newName = await itemTest
    return newName
 }
  useEffect(() => {
    (async ()=>{
        let res = await getItemName(param.id)
        setItemName(res?.name)
      })();
    loadData()
  }, [])

  const dataWithIndex = gridData.map((item: any, index) => ({
    ...item,
    key: index,
  }))

  const dataByID = gridData.filter((skill:any) =>{
    return skill.jobTitleId.toString() ===param.id
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

  const url = `${Api_Endpoint}/JobTitleQualifications`
  const OnSUbmit = handleSubmit( async (values)=> {
    setLoading(true)
    const data = {
        jobTitleId: param.id,
        tenantId: tenantId,
        qualificationId: values.qualificationId,
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
        <h3 style={{fontWeight:"bolder"}}>{itemName} </h3>
        <br></br>
        <button className='mb-3 btn btn-outline btn-outline-dashed btn-outline-primary btn-active-light-primary' onClick={() => navigate(-1)}>Go Back</button>
        <br></br>
          <div className='d-flex justify-content-between'>
            <Space style={{marginBottom: 16}}>
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
            <Space style={{marginBottom: 16}}>
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
          <Table columns={columns}  dataSource={dataByID} loading={loading} />
          <Modal
                title='JobTitle Qualifications Setup'
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
                  <div style={{padding: "20px 20px 20px 20px"}} className='row mb-0 '>
                    <div className=' mb-7'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Qualification</label>
                      <select {...register("qualificationId")} className="form-select form-select-solid" aria-label="Select example">
                        <option>select </option>
                            {allQualifications?.data.map((item: any) => (
                                <option value={item.id}>{item.name}</option>
                            ))}
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

export {JobTitleQualification}
