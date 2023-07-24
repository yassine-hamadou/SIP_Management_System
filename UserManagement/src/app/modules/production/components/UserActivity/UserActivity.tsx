import { Button, Input, Modal, Space, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { KTCardBody, KTSVG } from '../../../../../_metronic/helpers'
import { deleteItem, fetchDocument, postItem, updateItem } from '../../../../services/ApiCalls'

const UserActivity = () => {
  const [gridData, setGridData] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])



  const {data: UserActivity} = useQuery('userActivity',() => fetchDocument('UserActivity'), {cacheTime:5000})
  
  const columns: any = [
    {
      title: 'Username',
      dataIndex: 'username',
      sorter: (a: any, b: any) => {
        if (a.username > b.username) {
          return 1
        }
        if (b.username > a.username) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Data Item',
      dataIndex: 'dataItem',
      sorter: (a: any, b: any) => {
        if (a.dataItem > b.dataItem) {
          return 1
        }
        if (b.dataItem > a.dataItem) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Request Time',
      dataIndex: 'requestTime',
      sorter: (a: any, b: any) => {
        if (a.requestTime > b.requestTime) {
          return 1
        }
        if (b.requestTime > a.requestTime) {
          return -1
        }
        return 0
      },
    },
    {
        title: 'IP Address',
        dataIndex: 'ipaddress',
        sorter: (a: any, b: any) => {
          if (a.ipaddress > b.ipaddress) {
            return 1
          }
          if (b.ipaddress > a.ipaddress) {
            return -1
          }
          return 0
        },
      },
    {
      title: 'Endpoint',
      dataIndex: 'url',
      sorter: (a: any, b: any) => {
        if (a.url > b.url) {
          return 1
        }
        if (b.url > a.url) {
          return -1
        }
        return 0
      },
    },
    // {
    //   title: 'Action',
    //   fixed: 'right',
    //   width: 100,
    //   render: (_: any, record: any) => (
    //     <Space size='middle'>
    //       <a onClick={() => showUpdateModal(record)} className='btn btn-light-warning btn-sm'>
    //         Update
    //       </a>
    //       <a onClick={() => handleDelete(record)} className='btn btn-light-danger btn-sm'>
    //         Delete
    //       </a>
    //     </Space>
    //   ),

    // },
  ]

//   const loadData = async () => {
//     setLoading(true)
//     try {
//       const response = await fetchDocument('Roles')
//       setGridData(response.data)
//       setLoading(false)
//     } catch (error) {
//       console.log(error)
//     }
//   }
  
//   useEffect(() => {
//     loadData()
//   }, [])


  const handleInputChange = (e: any) => {
    setSearchText(e.target.value)
    if (e.target.value === '') {
    //   loadData()
    }
  }

  const globalSearch = () => {
    // @ts-ignore
    filteredData = dataWithIndex.filter((value) => {
      return (
        value.username.toLowerCase().includes(searchText.toLowerCase()) ||
        value.dataItem.toLowerCase().includes(searchText.toLowerCase()) ||
        value.ipaddress.toLowerCase().includes(searchText.toLowerCase()) ||
        value.requestTime.toLowerCase().includes(searchText.toLowerCase())||
        value.url.toLowerCase().includes(searchText.toLowerCase())
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
            {/* <Space style={{ marginBottom: 16 }}>

              <button type='button' className='btn btn-primary me-3' onClick={showModal}>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                Add
              </button>

            </Space> */}
          </div>
          <Table columns={columns} dataSource={UserActivity?.data} loading={loading} />
        </div>
      </KTCardBody>
    </div>
  )
}

export { UserActivity }

