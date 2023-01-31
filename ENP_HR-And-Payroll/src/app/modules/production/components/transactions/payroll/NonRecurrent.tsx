// import {Button, Form, Input, InputNumber, Modal, Space, Table} from 'antd'
// import {useEffect, useState} from 'react'
// import axios from 'axios'
// import {KTCardBody, KTSVG} from '../../../../../../_metronic/helpers'
// import { ENP_URL } from '../../../urls'

// const NonRecurrent = () => {
//   const [gridData, setGridData] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [searchText, setSearchText] = useState('')
//   let [filteredData] = useState([])
//   const [submitLoading, setSubmitLoading] = useState(false)
//   const [form] = Form.useForm()

//   const [isModalOpen, setIsModalOpen] = useState(false)

//   const showModal = () => {
//     setIsModalOpen(true)
//   }

//   const handleOk = () => {
//     setIsModalOpen(false)
//   }

//   const handleCancel = () => {
//     form.resetFields()
//     setIsModalOpen(false)
//   }

//   const deleteData = async (element: any) => {
//     try {
//       const response = await axios.delete(`${ENP_URL}/ProductionActivity/${element.id}`)
//       // update the local state so that react can refecth and re-render the table with the new data
//       const newData = gridData.filter((item: any) => item.id !== element.id)
//       setGridData(newData)
//       return response.status
//     } catch (e) {
//       return e
//     }
//   }

  

//   function handleDelete(element: any) {
//     deleteData(element)
//   }
//   const columns: any = [
   
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       sorter: (a: any, b: any) => {
//         if (a.name > b.name) {
//           return 1
//         }
//         if (b.name > a.name) {
//           return -1
//         }
//         return 0
//       },
//     },

//     {
//       title: 'Action',
//       fixed: 'right',
//       width: 100,
//       render: (_: any, record: any) => (
//         <Space size='middle'>
          
//           {/* <Link to={`/setup/sections/${record.id}`}>
//             <span className='btn btn-light-info btn-sm'>Sections</span>
//           </Link> */}
//           <a href='#' className='btn btn-light-warning btn-sm'>
//             Update
//           </a>
//           <a onClick={() => handleDelete(record)} className='btn btn-light-danger btn-sm'>
//             Delete
//           </a>
         
//         </Space>
//       ),
      
//     },
//   ]

//   const loadData = async () => {
//     setLoading(true)
//     try {
//       const response = await axios.get(`${ENP_URL}/ProductionActivity`)
//       setGridData(response.data)
//       setLoading(false)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     loadData()
//   }, [])

//   const dataWithIndex = gridData.map((item: any, index) => ({
//     ...item,
//     key: index,
//   }))

//   const handleInputChange = (e: any) => {
//     setSearchText(e.target.value)
//     if (e.target.value === '') {
//       loadData()
//     }
//   }

//   const globalSearch = () => {
//     // @ts-ignore
//     filteredData = dataWithVehicleNum.filter((value) => {
//       return (
//         value.name.toLowerCase().includes(searchText.toLowerCase())
//       )
//     })
//     setGridData(filteredData)
//   }

//   const url = `${ENP_URL}/ProductionActivity`
//   const onFinish = async (values: any) => {
//     setSubmitLoading(true)
//     const data = {
//       name: values.name,
//     }

//     console.log(data)

//     try {
//       const response = await axios.post(url, data)
//       setSubmitLoading(false)
//       form.resetFields()
//       setIsModalOpen(false)
//       loadData()
//       return response.statusText
//     } catch (error: any) {
//       setSubmitLoading(false)
//       return error.statusText
//     }
//   }

//   return (
//     <div
//       style={{
//         backgroundColor: 'white',
//         padding: '20px',
//         borderRadius: '5px',
//         boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
//       }}
//     >
//       <KTCardBody className='py-4 '>
//         <div className='table-responsive'>
//           <div className='d-flex justify-content-between'>
//             <Space style={{marginBottom: 16}}>
//               <Input
//                 placeholder='Enter Search Text'
//                 onChange={handleInputChange}
//                 type='text'
//                 allowClear
//                 value={searchText}
//               />
//               <Button type='primary' onClick={globalSearch}>
//                 Search
//               </Button>
//             </Space>
//             <Space style={{marginBottom: 16}}>
//               <button type='button' className='btn btn-primary me-3' onClick={showModal}>
//                 <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
//                 Add
//               </button>

//               <button type='button' className='btn btn-light-primary me-3'>
//                 <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
//                 Export
//             </button>
//             </Space>
//           </div>
//           <Table columns={columns}  />
//           <Modal
//                 title='Add Non-Recurrent'
//                 open={isModalOpen}
//                 onCancel={handleCancel}
//                 closable={true}
//                 footer={[
//                     <Button key='back' onClick={handleCancel}>
//                         Cancel
//                     </Button>,
//                     <Button
//                     key='submit'
//                     type='primary'
//                     htmlType='submit'
//                     loading={submitLoading}
//                     onClick={() => {
//                       form.submit()
//                     }}
//                     >
//                         Submit
//                     </Button>,
//                 ]}
//             >
//                 <Form
//                     labelCol={{span: 7}}
//                     wrapperCol={{span: 14}}
//                     layout='horizontal'
//                     form={form}
//                     name='control-hooks'
//                     title='Add Service'
//                     onFinish={onFinish}
//                 >
//                     <Form.Item
//                         name='name'
//                         label='Name'
                        
//                         rules={[{required: true}]}
//                     >
//                         <Input />
//                     </Form.Item>
//                 </Form>
//             </Modal>
//         </div>
//       </KTCardBody>
//     </div>
//   )
// }

// export {NonRecurrent}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../employeeFormEntry/formStyle.css"
import { BenefitTab } from './recurrentTabs/BenefitTab';
import { DeductionTab } from './recurrentTabs/DeductionTab';

const NonRecurrent= () =>{
  const [formData, setFormData] = useState({});
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab:any) => {
    setActiveTab(tab);
  }

  const handleChange = (event:any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log(formData);
    // Use the formData object to submit the data to your server
  
  }

  const handleTabChange = (newTab:any) => {
    setActiveTab(newTab);
  }

  return (
    <div
    className="col-12"
      style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '5px',
     
        boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
      }}
    >


      
      {/* <Link to="/employee">
        <a style={{fontSize:"16px", fontWeight: "500"}} className='btn btn-primary btn-sm mb-7'>
          Back to list
        </a>
      </Link> */}
      <form onSubmit={handleSubmit}>
        
        <div className="tabs">
          
          <button 
            className={`tab ${activeTab === 'tab1' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab1')}
          >
            Benefit
          </button>
          <button 
            className={`tab ${activeTab === 'tab2' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab2')}
          >
            Deduction
          </button>
         
          
          
        </div>
              
        <div className="tab-content">

          {/* Details */}
          {activeTab === 'tab1' && 
          <div>
            <BenefitTab/>
            </div>
            }

          {/* Communications */}
          {
          activeTab === 'tab2' && 
            <div>
              <DeductionTab/>
              
            </div>
          }

        </div>
        {/* <button className='btn btn-primary' type="submit">Submit</button> */}
      </form>
    </div>
  );
}


export  {NonRecurrent}
