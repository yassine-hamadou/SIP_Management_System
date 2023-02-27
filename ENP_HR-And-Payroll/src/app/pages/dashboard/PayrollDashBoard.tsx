/* eslint-disable jsx-a11y/anchor-is-valid */
import react, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import { PayrollChart } from './charts/PayrollChart'


const PayrollDashboardPage: FC = () => (

  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      
      <div className='col-xxl-6'>
        <PayrollChart className='mb-xl-8'
          chartColor='primary'
          chartHeight='350px'/>
      </div>
    </div>
    {/* end::Row */}
  </>
)

const PayrollDashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{"Payroll Dashboard"}</PageTitle>
      <PayrollDashboardPage />
      
    </>
  )
}

export {PayrollDashboardWrapper}
