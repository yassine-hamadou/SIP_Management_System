// import {
//     Button,
//     Form,
//     Input,
//     Modal,
//     Space,
//     Table,
// } from 'antd'
// import {KTSVG} from '../../../../../../_metronic/helpers'
// import {useState} from "react";

// const LoaderOperator = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false)
//     const columns: any = [
//         // {
//         //     title: 'ID',
//         //     dataIndex: '',
//         //     key: 'key',
//         // },
//         {
//             title: 'Name',
//             dataIndex: 'vmModel',
//         },
//         {
//             title: 'Action',
//             dataIndex: 'downType',
//         },
//     ]
//     const showModal = () => {
//         setIsModalOpen(true)
//     }

//     const handleCancel = () => {
//         setIsModalOpen(false)
//     }
//     return (
//         <div
//             style={{
//                 backgroundColor: 'white',
//                 padding: '20px',
//                 borderRadius: '5px',
//                 boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
//             }}
//         >
//             <div className='d-flex justify-content-between'>
//                 <Space style={{marginBottom: 16}}>
//                     <Input
//                         placeholder='Enter Search Text'
//                         type='text'
//                         allowClear
//                     />
//                     <Button type='primary'>
//                         Search
//                     </Button>
//                 </Space>
//                 <Space style={{marginBottom: 16}}>
//                     {/* <button type='button' className='btn btn-primary me-3' onClick={showModal}>
//                         <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
//                         Add
//                     </button> */}
//                     <button type='button' className='btn btn-light-primary me-3'>
//                         <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
//                         Upload
//                     </button>
//                     <button type='button' className='btn btn-light-primary me-3'>
//                         <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
//                         Export
//                     </button>
//                 </Space>
//             </div>
//             <Table columns={columns} bordered />

//             {/*Add Fault*/}
//             <Modal
//                 title='Activity'
//                 open={isModalOpen}
//                 onCancel={handleCancel}
//                 closable={true}
//                 footer={[
//                     <Button key='back' onClick={handleCancel}>
//                         Cancel
//                     </Button>,
//                     <Button
//                         key='submit'
//                         type='primary'
//                         htmlType='submit'
//                     >
//                         Submit
//                     </Button>,
//                 ]}
//             >
//                 <Form
//                     name='control-hooks'
//                     labelCol={{span: 8}}
//                     wrapperCol={{span: 14}}
//                     title='Add Fault'
//                 >
//                     <Form.Item
//                         name='ID'
//                         label='ID'
//                         rules={[{required: true, type: "number"}]}
//                     >
//                         <Input />
//                     </Form.Item>
//                     <Form.Item
//                         name='Name'
//                         label='Name'
//                         rules={[{required: true}]}
//                     >
//                         <Input />
//                     </Form.Item>
//                 </Form>
//             </Modal>
//         </div>
//     )
// }

// export {LoaderOperator}

import {Button, Input, Space, Table} from 'antd'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {KTCardBody, KTSVG} from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'

const LoaderOperator = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])

  const columns: any = [
   
    {
      title: 'Employee Code',
      dataIndex: 'emplCode',
      sorter: (a: any, b: any) => {
        if (a.emplCode > b.emplCode) {
          return 1
        }
        if (b.emplCode > a.emplCode) {
          return -1
        }
        return 0
      },
    },

    {
      title: 'Employee Name',
      dataIndex: 'emplName',
      sorter: (a: any, b: any) => a.emplName - b.emplName,
    },
  ]

  const loadData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${ENP_URL}/VmemplsApi`)
     
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
        value.emplCode.toLowerCase().includes(searchText.toLowerCase()) ||
        value.emplName.toLowerCase().includes(searchText.toLowerCase())
      )
    })
    setGridData(filteredData)
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
              <button type='button' className='btn btn-primary me-3'>
                <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
                Export
              </button>
            </Space>
          </div>
          <Table columns={columns} dataSource={dataWithIndex} bordered loading={loading} />
        </div>
      </KTCardBody>
    </div>
  )
}

export {LoaderOperator}
