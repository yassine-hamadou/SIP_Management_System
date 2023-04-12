
import react, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import { HRChart } from './charts/HRChart'
import { TestChart } from './charts/TestChart'
import { useQuery } from 'react-query'
import { Button, Input, Space, Table } from 'antd'
import { User } from '../../modules/production/components/User/User'



const columns: any = [
   
  {
    title: 'Paygroup',
    dataIndex: 'paygroupName',
    sorter: (a: any, b: any) => {
      if (a.paygroupName > b.paygroupName) {
        return 1
      }
      if (b.paygroupName > a.paygroupName) {
        return -1
      }
      return 0
    },
  },
  {
    title: 'Division',
    dataIndex: 'divisionName',
    sorter: (a: any, b: any) => {
      if (a.divisionName > b.divisionName) {
        return 1
      }
      if (b.divisionName > a.divisionName) {
        return -1
      }
      return 0
    },
  },
  {
    title: 'Department',
    dataIndex: 'departmentName',
    sorter: (a: any, b: any) => {
      if (a.departmentName > b.departmentName) {
        return 1
      }
      if (b.departmentName > a.departmentName) {
        return -1
      }
      return 0
    },
  },
  {
    title: 'Unit',
    dataIndex: 'unitName',
    sorter: (a: any, b: any) => {
      if (a.unitName > b.unitName) {
        return 1
      }
      if (b.unitName > a.unitName) {
        return -1
      }
      return 0
    },
  },
  {
    title: 'Number of Employees',
    dataIndex: 'employeeCount',
    sorter: (a: any, b: any) => {
      if (a.employeeCount > b.employeeCount) {
        return 1
      }
      if (b.employeeCount > a.employeeCount) {
        return -1
      }
      return 0
    },
  },
  {
    title: 'Male Count',
    dataIndex: 'countMale',
    sorter: (a: any, b: any) => {
      if (a.countMale > b.countMale) {
        return 1
      }
      if (b.countMale > a.countMale) {
        return -1
      }
      return 0
    },
  },
  {
    title: 'Female Count',
    dataIndex: 'countFemale',
    sorter: (a: any, b: any) => {
      if (a.countFemale > b.countFemale) {
        return 1
      }
      if (b.countFemale > a.countFemale) {
        return -1
      }
      return 0
    },
  },
]

const HRDashboardPage = () => {
  // const { data: dashboardData } = useQuery('dashboarddata', fetchDashBoardData, { cacheTime: 5000 })
  

  return(
    <div
      
    >
    {/* begin::Row */}
    <User/>
    {/* <div className='row gy-5 g-xl-8 mb-7'>
      
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

      <div className='col-12 row mt-7'
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '5px',
          margin:"5px",
          boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
        }} 
      >
        
        <Table columns={columns}/>
      </div>
    </div> */}

  </div>
  )
}


export {HRDashboardPage}

const HRDashboardWrapper = () => {
  // const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{"All Users"}</PageTitle>
      <HRDashboardPage />
      
    </>
  )
}

export {HRDashboardWrapper}
