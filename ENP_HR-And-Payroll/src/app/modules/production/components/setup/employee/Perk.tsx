import {Button, Form, Input, InputNumber, Modal, Space, Table} from 'antd'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {KTCardBody, KTSVG} from '../../../../../../_metronic/helpers'
import { useForm } from 'react-hook-form'
import { Api_Endpoint, fetchCurrencies, fetchGrades, fetchPaygroups } from '../../../../../services/ApiCalls'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'

const Perks = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  let [paygroupName, setPaygroupName] = useState<any>("")
  let [gradeName, setGradeName] = useState<any>("")
  const [submitLoading, setSubmitLoading] = useState(false)
  const {register, reset, handleSubmit} = useForm()
  const param:any  = useParams();
  const navigate = useNavigate();
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
  }

  const deleteData = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/Perks/${element.id}`)
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
   
    // {
    //   title: 'Code',
    //   dataIndex: 'code',
    //   sorter: (a: any, b: any) => {
    //     if (a.code > b.code) {
    //       return 1
    //     }
    //     if (b.code > a.code) {
    //       return -1
    //     }
    //     return 0
    //   },
    // },
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
      title: 'Currency',
      key: 'currencyId',
      render: (row: any) => {
        return getCurrencyName(row.currencyId)
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
      title: 'Action',
      fixed: 'right',
      width: 100,
      render: (_: any, record: any) => (
        <Space size='middle'>
          <a href='#' className='btn btn-light-warning btn-sm'>
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
      const response = await axios.get(`${Api_Endpoint}/Perks`)
      setGridData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  const {data:allGrades} = useQuery('grades', fetchGrades, {cacheTime:5000})
  const {data:allPaygroups} = useQuery('paygroups', fetchPaygroups, {cacheTime:5000})
  const {data:allCurrencies} = useQuery('currencies', fetchCurrencies, {cacheTime:5000})


  const getCurrencyName = (id: any) => {
    let CurrencyName = null
    allCurrencies?.data.map((item: any) => {
      if (item.id=== id) {
        CurrencyName=item.name
      }
    })
    return CurrencyName
  } 
  const getItemName= async (param:any) =>{

    let newName=null
  
     const   itemTest = await allGrades?.data.find((item:any) =>
      item.id.toString()===param
    )
     newName = await itemTest
    return newName
 }

  useEffect(() => {
    (async ()=>{
      let res = await getItemName(param.id)
      setGradeName(res?.name)
    })();
    (async ()=>{
      let res = await getItemName(param.id)
      let paygroupId = res?.paygroupId
      let paygroupName = allPaygroups?.data.find((div:any)=>{
        return div.id===paygroupId
      })
      setPaygroupName(paygroupName.name)
    })();
    loadData()
  }, [])

  const dataByID = gridData.filter((section:any) =>{
    return section.gradeId.toString() === param.id
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

  const url = `${Api_Endpoint}/Perks`
  const OnSUbmit = handleSubmit( async (values)=> {
    setLoading(true)
    const data = {
          gradeId: parseInt(param.id),
          name: values.name,
          currencyId: parseInt(values.currencyId),
          amount: parseFloat(values.amount).toFixed(2),
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
        <h3 style={{fontWeight:"bolder"}}>{paygroupName}<span style={{color: "blue", fontSize:"22px", fontWeight:"normal"}}> &gt; </span> {gradeName} </h3>

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
          <Table columns={columns} dataSource={dataByID}  />
          <Modal
                title='Perks Setup'
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
                    {/* <div className=' mb-7'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Code</label>
                      <input type="text" {...register("code")}  className="form-control form-control-solid"/>
                    </div> */}
                    <div className=' mb-7'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                      <input type="text" {...register("name")}  className="form-control form-control-solid"/>
                    </div>
                    <div className=' mb-7'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Currency</label>
                      <select {...register("currencyId")} className="form-select form-select-solid" aria-label="Select example">
                        <option>select </option>
                        {allCurrencies?.data.map((item: any) => (
                          <option value={item.id}>{item.name}</option>
                        ))}
                    </select>
                    </div>
                    
                    <div className=' mb-7'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Amount</label>
                      <input type="number" 
                      min={0}
                      max={10}
                      step={0.01}
                      {...register("amount")}  className="form-control form-control-solid"/>
                    </div>
                   
                  </div>
                </form>
            </Modal>
        </div>
      </KTCardBody>
    </div>
  )
}

export {Perks}
