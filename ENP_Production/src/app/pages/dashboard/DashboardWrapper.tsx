/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import {
  MixedWidget2,
  MixedWidget10,
  MixedWidget11,
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget5,
  ListsWidget6,
  TablesWidget5,
  TablesWidget10,
  MixedWidget8,
} from '../../../_metronic/partials/widgets'
import { BarChart } from './BarChart'
import { BarChart2 } from './BarChart2'
import { batchVolumesThirtyDaysRolling, calculateVolumesByField, roundOff } from '../../modules/production/components/CommonComponents'
import { Table } from 'antd'
import { useQuery } from 'react-query'
import { fetchDocument } from '../../modules/production/urls'
import { Devexpres, Devexpres2 } from './Devexpress'



const DashboardPage = () => {
  const tenantId = localStorage.getItem('tenant')
  const [gridData, setGridData] = useState([])
  const loadData = async () => {
    try {
      const response = await fetchDocument(`cycleDetails/tenant/${tenantId}`)
      setGridData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const columns: any = [
    { title: 'BatchNumber', dataIndex: 'batchNumber', render: (text: any) => <span style={{ color: '#3699FF' }}>{text}</span>, },
    { title: 'Loads', dataIndex: 'sumLoads', render: (value: any) => <span>{roundOff(value)}</span> },
    { title: 'Volumes', dataIndex: 'sumVolumes', render: (value: any) => <span>{roundOff(value)}</span> },
    { title: 'Nominal Weights', dataIndex: 'sumNominalWeights', render: (value: any) => <span>{roundOff(value)}</span> },
    { title: 'Payload Weights', dataIndex: 'sumPayloadWeights', render: (value: any) => <span>{roundOff(value)}</span> },
  ]


  const volumesPerThirtyDays = batchVolumesThirtyDaysRolling(gridData);

  return (
    <div>
      {/* begin::Row */}
      <div className='row gy-5 g-xl-8'>
        <div className='col-xxl-6'>
          {/* <BarChart
            className='card-xl-stretch'
            chartColor='danger'
            chartHeight={''}
          /> */}
          <Devexpres />
        </div>
        {/* <div className='col-xxl-6'>
          <BarChart2
            className='card-xl-stretch'
            chartColor='primary'
            chartHeight={''}
          />
        </div> */}
      </div>
      <div className='col-12 row card border border-gray-400 mt-7 '
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '5px',
          margin: "5px",
          boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
        }}
      >
        <div className='me-2 mb-7 d-flex flex-row-auto '>
          <span className='fw-bold text-gray-800 d-block fs-3 align-items-center py-2'>
            Batch Records </span>
          <li className="d-flex align-items-center py-2 ms-5 fw-bold text-gray-800 ">
            <span className="bullet bullet-dot bg-danger me-5 "></span>
            30 days rolling
          </li>
        </div>
        <Table columns={columns} dataSource={volumesPerThirtyDays} />
      </div>
      {/* end::Row */}
    </div>
  )
}

const DevBoardPage = () => (
  <>
      <div className='col-xl-12 mb-7  border border-gray-400'>
        <Devexpres />
      </div>
      <div className='col-xl-12 border border-gray-400'>
        <Devexpres2 />
      </div>
    <br />
    <br />
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
      <DevBoardPage />
    </>
  )
}

export { DashboardWrapper, DevBoardPage }