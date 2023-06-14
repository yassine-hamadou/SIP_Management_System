import {Button, Input, Modal, Radio, RadioChangeEvent, Select, Space, Table} from 'antd'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {KTCardBody, KTSVG} from '../../../../../../_metronic/helpers'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { useForm } from 'react-hook-form'
import {  Api_Endpoint, fetchEmployees, fetchMedicals, fetchPaygroups, fetchPeriods, fetchProducts, fetchServiceCost, fetchServiceProviders } from '../../../../../services/ApiCalls'
import { useQuery } from 'react-query'

const MedicalEntries = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const [selectedValue1, setSelectedValue1] = useState<any>(null);
  const [selectedValue2, setSelectedValue2] = useState<any>(null);
  const [employeeRecord, setEmployeeRecord]= useState<any>([])
  const {register, reset, handleSubmit} = useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)
  const tenantId = localStorage.getItem('tenant')
  const [radioValue, setRadioValue] = useState(0);
  const [selectedProvider, setSeletedProvider] = useState<any>("");
  const [productName, setProductName] = useState<any>()
  const handleFileSelection = (event:any) => {
    setSelectedFile(event.target.files[0]);
  };

  const [selectedFile, setSelectedFile] = useState<any>(null);

  const showModal = () => {
    setIsModalOpen(true)
  }
  const showProductModal = () => {
    setIsProductModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }


   const onRadioChange = (e: RadioChangeEvent) => {
    setRadioValue(e.target.value);
  };

  const [fileList, setFileList] = useState<UploadFile[]>([
    
  ]);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const {data:allEmployee} = useQuery('employee',()=> fetchEmployees(tenantId), {cacheTime:5000})
  const {data:allMedicals} = useQuery('medicals', ()=> fetchMedicals(tenantId), {cacheTime:5000})
  const { data: allPeriods } = useQuery('periods', ()=> fetchPeriods(tenantId), { cacheTime: 5000 })
  const { data: allPaygroups } = useQuery('paygroup',()=> fetchPaygroups(tenantId), { cacheTime: 5000 })
  const { data: serviceProviders } = useQuery('serviceProviders',()=> fetchServiceProviders(tenantId), { cacheTime: 5000 })
  const { data: serviceCost } = useQuery('serviceCost',()=> fetchServiceCost(tenantId), { cacheTime: 5000 })
  const { data: products } = useQuery('products',()=> fetchProducts(), { cacheTime: 5000 })
  const [selectedProducts, setSelectedProducts] = useState<any>([]);

  const handleCancel = () => {
    reset()
    setIsModalOpen(false)
    setSeletedProvider("")
    setSelectedProducts([])
  }


  const handleProductCancel = () => {
    setIsProductModalOpen(false)
  }


  const handleSelect = (product:any) => {
    setSelectedProducts((prevSelectedProducts:any) => [...prevSelectedProducts, product]);
  };

  console.log('Selected',selectedProducts);
  

  const handleRemove = (product:any) => {
    setSelectedProducts((prevSelectedProducts:any) =>
      prevSelectedProducts.filter((p:any) => p.id !== product.id)
    );
  };

  const deleteData = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/MedicalTransactions/${element.id}`)
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
      title: 'Employee ID',
      key: 'employeeId',
      render: (row: any) => {
        return getEmployeeName(row.employeeId)
      },
      sorter: (a: any, b: any) => {
        if (a.employeeId > b.employeeId) {
          return 1
        }
        if (b.employeeId > a.employeeId) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Medical Type',
      key:'medicalTypeId',
      render: (row: any) => {
        return getMedicalName(row.medicalTypeId)
      },
      sorter: (a: any, b: any) => {
        if (a.medicalTypeId > b.medicalTypeId) {
          return 1
        }
        if (b.medicalTypeId > a.medicalTypeId) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Date',
      dataIndex: 'date',
      sorter: (a: any, b: any) => {
        if (a.date > b.date) {
          return 1
        }
        if (b.date > a.date) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Comments',
      dataIndex: 'comment',
      sorter: (a: any, b: any) => {
        if (a.comment > b.comment) {
          return 1
        }
        if (b.comment > a.comment) {
          return -1
        }
        return 0
      },
    },
  ]

  const productColumn:any = [
    {
      title: 'Product',
      key: 'medicalServiceId',
      render: (row: any) => {
        return getProductName(row.medicalServiceId)
      },
      sorter: (a: any, b: any) => {
        if (a.medicalServiceId > b.medicalServiceId) {
          return 1
        }
        if (b.medicalServiceId > a.medicalServiceId) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Cost',
      dataIndex: 'cost',
      sorter: (a: any, b: any) => {
        if (a.cost > b.cost) {
          return 1
        }
        if (b.cost > a.cost) {
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
          <a onClick={() => handleRemove(record)} className='btn btn-light-danger btn-sm'>
            Remove
          </a>
        </Space>
      ),
    },
  ]

  const getProductName = (proId: any) => {
    let productName = ""
    products?.data.map((item: any) => {
      if (item.id === proId) {
        productName=item.name
      }
    })
    return productName
  } 

  const loadData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/MedicalTransactions/tenant/${tenantId}`)
      setGridData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }



  const dataWithIndex = gridData.map((item: any, index) => ({
    ...item,
    key: index,
  }))  

  const dataByID:any = gridData.filter((refId:any) =>{
    return  refId.periodId===parseInt(selectedValue2)&&refId.paygroupId===parseInt(selectedValue1)
  })

  const productByProvider:any = serviceCost?.data.filter((serv:any) =>{
    return  serv.serviceProviderId===parseInt(selectedProvider)
  })

  const dataByProvider:any = selectedProducts?.filter((serv:any) =>{
    return  serv.serviceProviderId===parseInt(selectedProvider)
  })

  console.log('dataByProvider:',dataByProvider)
  

  const handleInputChange = (e: any) => {
    setSearchText(e.target.value)
    if (e.target.value === '') {
      loadData()
    }
  }
  useEffect(() => {
    loadData()
  }, [])

  const globalSearch = () => {
    // @ts-ignore
    filteredData = dataWithVehicleNum.filter((value) => {
      return (
        value.name.toLowerCase().includes(searchText.toLowerCase())
      )
    })
    setGridData(filteredData)
  }

  const getEmployeeName = (employeeId: any) => {
    let employeeName = null
    allEmployee?.data.map((item: any) => {
      if (item.id === employeeId) {
        employeeName=item.firstName + " " + item.surname
      }
    })
    return employeeName
  } 

  const getMedicalName = (medicalId: any) => {
    let medicalName = null
    allMedicals?.data.map((item: any) => {
      if (item.id === medicalId) {
        medicalName=item.name
      }
    })
    return medicalName
  } 

  const onEmployeeChange = (objectId: any) => {
    const newEmplo = allEmployee?.data.find((item:any)=>{
      return item.id===parseInt(objectId)
    })
    setEmployeeRecord(newEmplo)
  }

  const emplyeesByPaygroup:any = allEmployee?.data.filter((item:any) =>{
    return  item.paygroupId===parseInt(selectedValue1)
  })

  // const { Option } = Select;

  // const handleNewChange = (value: string[]) => {
  //   console.log(`selected ${value}`);
  // };

  const url = `${Api_Endpoint}/MedicalTransactions`
  const OnSubmit = handleSubmit( async (values)=> {
    setLoading(true)
    const data = {
      employeeId: employeeRecord.id,
      paygroupId: parseInt(selectedValue1),
      periodId: parseInt(selectedValue2),
      medicalTypeId: parseInt(values.medicalTypeId),
      date: values.date,
      comment: values.comment,
      tenantId: tenantId,
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
      <div style={{padding: "0px 0px 40px 0px"}} className='col-12'>
        <div style={{padding: "20px 0px 0 0px"}} className='col-6 row mb-0'>
          <div className='col-6 mb-7'>
            <label htmlFor="exampleFormControlInput1" className=" form-label">Paygroup</label>
            <select value={selectedValue1} onChange={(e) => setSelectedValue1(e.target.value)} className="form-select form-select-solid" aria-label="Select example">
              <option value="select paygroup" style={{color:"GrayText"}}> select paygroup</option>
              {allPaygroups?.data.map((item: any) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className='col-6 mb-7'>
            <label htmlFor="exampleFormControlInput1" className=" form-label">Period</label>
            <select value={selectedValue2} onChange={(e) => setSelectedValue2(e.target.value)} className="form-select form-select-solid" aria-label="Select example">
              <option value="select period">select period</option>
              {allPeriods?.data.map((item: any) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>

        </div>
      </div>

      {
        selectedValue1===null||selectedValue2===null||selectedValue1==="select paygroup"||selectedValue2==="select period"?"":
        <KTCardBody className='py-4 '>
        <div className='table-responsive'>
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
          <Table columns={columns} dataSource={dataByID} loading={loading} />
          <Modal
              title='Medical Entry'
              open={isModalOpen}
              onCancel={handleCancel}
              closable={true}
              width="800px"
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
                  <div className='row'>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Employee</label>
                      <br></br>
                      <Select
                        {...register("employeeId")}
                        showSearch
                        placeholder="select a reference"
                        optionFilterProp="children"
                        style={{width:"300px"}}
                        value={employeeRecord.id}
                        onChange={(e)=>{
                          onEmployeeChange(e)
                        }}
                      >
                        <option>select</option>
                        {emplyeesByPaygroup?.map((item: any) => (
                          <option key={item.id} value={item.id}>{item.firstName} - {item.surname}</option>
                        ))}
                      </Select>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Reference</label>
                      <input type="text" {...register("reference")}  className="form-control form-control-solid"/>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Dependant</label>
                        <div className='mt-2'>
                          <Radio.Group value={radioValue} onChange={onRadioChange} >
                            <Radio value={1}>Yes</Radio>
                            <Radio value={0}>No</Radio>
                          </Radio.Group>
                        </div>
                    </div>
                    {
                      radioValue==1 &&(
                        <div className='col-6 mb-3'>
                          <label htmlFor="exampleFormControlInput1" className="form-label">Select Dependant</label>
                          <select {...register("dependantId")} className="form-select form-select-solid" aria-label="Select example">
                            <option> Select </option>
                          </select>
                        </div>
                      )
                    }
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Service Provider</label>
                      <select {...register("medicalTypeId")} value={selectedProvider} onChange={(e:any)=>{setSeletedProvider(e.target.value)}} className="form-select form-select-solid" aria-label="Select example">
                        <option> select </option>
                        {serviceProviders?.data.map((item: any) => (
                          <option value={item.id}>{item.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Date</label>
                      <input type="date" {...register("date")}  className="form-control form-control-solid"/>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Voucher Number</label>
                      <input type="text" {...register("voucherNumber")}  className="form-control form-control-solid"/>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Comments</label>
                      <textarea {...register("comment")} className="form-control form-control-solid" aria-label="With textarea"></textarea>
                    </div>
                    <div className='col-6 mb-3'>
                      <input type="file" className='mb-3 btn btn-outline btn-outline-dashed btn-outline-primary btn-active-light-primary' onChange={handleFileSelection} />                  
                    </div>
                    <div>
                    <hr></hr>
                    {
                      selectedProvider===null||selectedProvider==="" || selectedProvider==="select" ?"":
                      <>
                      <button type='button' className='btn btn-primary me-3 mb-3' onClick={showProductModal}>
                        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                        Select Products
                      </button>

                        <Table columns={productColumn} dataSource={dataByProvider}/>
                        <Modal
                          title='Product list'
                          open={isProductModalOpen}
                          onCancel={handleProductCancel}
                          closable={true}
                          footer={[
                            <Button key='back' onClick={handleProductCancel}>
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
                          <hr></hr>

                          {
                            productByProvider.length ===0?
                            <>
                            <div style={{alignItems:"center", justifyContent:"center", padding:"30px, 0px", textAlign:"center"}}>
                              <h4>
                                No Data for this provider
                              </h4>
                            </div>
                              
                            </>:
                            productByProvider?.map((item:any)=>{
                              const productNam = products?.data?.find((p:any) => p.id === item.medicalServiceId);
                              return (
                                <>
                                  <div className='d-flex justify-content-between'>
                                    <p>
                                      {
                                        productNam?.name
                                      }
                                    </p>
                                    <button 
                                      onClick={() => handleSelect(item)}
                                      className='btn btn-light-primary btn-sm mb-3'
                                      >Add</button>
                                  </div>
                                </>
                              );
                            })
                          }
                          <hr></hr>
                        </Modal>
                        {/* <Select
                         mode="multiple"
                         style={{ width: '100%' }}
                         placeholder="select products"
                         onChange={handleNewChange}
                         optionLabelProp="label"
                        >
                          {
                            productByProvider.map((item:any)=>(
                              <Option value={item.id}>
                                {item.id}
                              </Option>
                            ))
                          }
                        </Select> */}
                      </>
                    }
                    </div>
                  </div>
                </form>
            </Modal>
        </div>
      </KTCardBody>
      }
      
    </div>
  )
}

export {MedicalEntries}


