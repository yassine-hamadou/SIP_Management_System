import {PageTitle} from '../../../_metronic/layout/core'
import { BarCharts } from './charts/BarChart'
import { HRChart } from './charts/HRChart'
import { TestChart } from './charts/TestChart'

const HRDashboardPage = () => {

  return(
    <div
      
    >
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
      <div className=''>
      <BarCharts className='mb-xl-8'
          chartColor='primary'
          chartHeight='350px'/>
      </div>
    </div>

  </div>
  )
}


export {HRDashboardPage}

const HRDashboardWrapper = () => {
  // const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{"Dashboard"}</PageTitle>
      <HRDashboardPage />
    </>
  )
}

export {HRDashboardWrapper}
