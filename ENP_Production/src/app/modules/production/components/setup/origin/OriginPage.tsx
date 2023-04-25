import { Button, Input, Space, Table } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { KTCardBody, KTSVG } from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'

const OriginPage = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])

  const columns: any = [

    {
      title: 'Name',
      dataIndex: 'locationCode',
      sorter: (a: any, b: any) => {
        if (a.locationCode > b.locationCode) {
          return 1
        }
        if (b.locationCode > a.locationCode) {
          return -1
        }
        return 0
      },
    },

    {
      title: 'Description',
      dataIndex: 'locationDesc',
      sorter: (a: any, b: any) => a.locationDesc - b.locationDesc,
    },
    {
      title: 'Action',

    },
  ]

  const loadData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${ENP_URL}/IclocsApi`)
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
        value.locationCode.toLowerCase().includes(searchText.toLowerCase()) ||
        value.locationDesc.toLowerCase().includes(searchText.toLowerCase())
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
                value={searchText} size='large'
              />
              <Button type='primary' onClick={globalSearch} size='large'>
                Search
              </Button>
            </Space>
            <Space style={{ marginBottom: 16 }}>
              <Button type='primary' className='btn btn-primary' style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }} size='large'>
                <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
                Export
              </Button>
            </Space>
          </div>
          <Table columns={columns} dataSource={dataWithIndex} bordered loading={loading} />
        </div>
      </KTCardBody>
    </div>
  )
}

export { OriginPage }

