/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Input, Space, Table } from 'antd'
import react, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import { HRChart } from './charts/HRChart'
import { TestChart } from './charts/TestChart'



const dashboardColumns: any = [
   
  {
    title: 'Paygroup',
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
    title: 'Division',
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
    title: 'Department',
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
    title: 'Unit',
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
    title: 'Number of Employees',
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
]


const HRDashboardPage: FC = () => (


  
  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8 mb-7'>
      
      <div className='col-xxl-6'>
      <HRChart className='mb-xl-8'
          chartColor='primary'
          chartHeight='350px'/>
      </div>
      <div className='col-xxl-6'>
      <TestChart className='mb-xl-8'
          chartColor='primary'
          chartHeight='350px'/>
      </div>

      <div className='col-12 row mt-7'>
      <Space style={{marginBottom: 16}}>
              <Input
                placeholder='Enter Search Text'
                // onChange={handleInputChange}
                type='text'
                allowClear
                // value={searchText}
              />
              <Button type='primary' >
              {/* <Button type='primary' onClick={globalSearch}> */}
                Search
              </Button>
            </Space>
        <Table columns={dashboardColumns}  />
      </div>
    </div>
    {/* end::Row */}
  </>
)

const HRDashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{"Human Resource Dashboard"}</PageTitle>
      <HRDashboardPage />
      
    </>
  )
}

export {HRDashboardWrapper}
