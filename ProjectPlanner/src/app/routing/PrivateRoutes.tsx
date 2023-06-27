import {FC, Suspense} from 'react'
import {Route, Routes, Navigate, Outlet} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import { PageLink, PageTitle } from '../../_metronic/layout/core'
import { HRDashboardWrapper } from '../pages/dashboard/HumanResourceDashBoard'
import { Staff } from '../modules/production/components/Setup/Staff'
import { ProjectType } from '../modules/production/components/Setup/ProjectType'
import { Currency } from '../modules/production/components/Setup/Currency'
import { Supplier } from '../modules/production/components/Setup/Supplier'
import { Client } from '../modules/production/components/Setup/Client'
import { PurchaseOrder } from '../modules/production/components/Entry/PurchaseOrder'
import { Invoice } from '../modules/production/components/Entry/Invoice'
import { Payment } from '../modules/production/components/Entry/Payment'
import { Activity } from '../modules/production/components/Setup/Activity'
import { CostCategory } from '../modules/production/components/Setup/CostCategory'
import { Project } from '../modules/production/components/Project'
import { CostDetail } from '../modules/production/components/Setup/CostDetail'
import { ProjectActivity } from '../modules/production/components/ProjectActivity'
import { Documents } from '../modules/production/components/Document'
import { ProjectActivityCost } from '../modules/production/components/ProjectActivityCost'
import { ProjectCategory } from '../modules/production/components/Setup/ProjectCategory'
import { ProjectSchedule } from '../modules/production/components/ProjectSchedule'
import { FinanceOption } from '../modules/production/components/Entry/FinanceOption'
import { FinanceOptionSchedule } from '../modules/production/components/Entry/FinanceOptionSchedule'
import { CashFlow } from '../modules/production/components/Reports/CashFlowReport'
import { Bank } from '../modules/production/components/Setup/Bank'
import { PopaySchedule } from '../modules/production/components/PopaySchedule'
const accountBreadCrumbs: Array<PageLink> = [
  {
    title: '',
    path: '/cycle_details/cycle-details',
    isSeparator: false,
    isActive: false,
  },
]


const PrivateRoutes = () => {

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/new-dashboard' />} />
        {/* Pages */}
        {/* <Route path='new-dashboard' element={<DashboardWrapper />} /> */}
        
        {/* <Route path='dashboard' element={<DashboardWrapper />} /> */}

        <Route path='new-dashboard' element={<HRDashboardWrapper />} />

        {/* Employee  */}

        <Route
         path='projects/*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Projects</PageTitle>
             <Project />
           </SuspensedView>
         }
        />
        <Route
         path='staffs/*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Staffs</PageTitle>
             <Staff />
           </SuspensedView>
         }
        />
   
        <Route
         path='currencies/*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Currencies</PageTitle>
             <Currency />
           </SuspensedView>
         }
        />

        <Route
         path='suppliers/*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Suppliers</PageTitle>
             <Supplier />
           </SuspensedView>
         }
        />

        <Route
         path='clients/*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Clients</PageTitle>
             <Client />
           </SuspensedView>
         }
        />

        <Route
         path='projectTypes/*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All ProjectTypes</PageTitle>
             <ProjectType />
           </SuspensedView>
         }
        />
        <Route
         path='projectCategories/*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Project Categories</PageTitle>
             <ProjectCategory />
           </SuspensedView>
         }
        />

        <Route
         path='purchaseorders/*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Purchase Orders</PageTitle>
             <PurchaseOrder />
           </SuspensedView>
         }
        />

        <Route
         path='invoices/*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Invoices</PageTitle>
             <Invoice />
           </SuspensedView>
         }
        />

        <Route
         path='payments/*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Payments</PageTitle>
             <Payment />
           </SuspensedView>
         }
        />

        <Route
         path='activities/*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Activities</PageTitle>
             <Activity />
           </SuspensedView>
         }
        />
        <Route
         path='activities/*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Activities</PageTitle>
             <Activity />
           </SuspensedView>
         }
        />
        <Route
         path='costCategories/*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Cost Categories</PageTitle>
             <CostCategory />
           </SuspensedView>
         }
        />
        <Route
         path='finance-options/*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Finance Options</PageTitle>
             <FinanceOption />
           </SuspensedView>
         }
        />
        <Route
         path='costDetails/:id'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Cost Details</PageTitle>
             <CostDetail />
           </SuspensedView>
         }
        />

        <Route
         path='project-activities/:id'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Project Activities</PageTitle>
             <ProjectActivity />
           </SuspensedView>
         }
        />

        <Route
         path='documents/:id'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Documents</PageTitle>
             <Documents />
           </SuspensedView>
         }
        />
        <Route
         path='project-schedules/:id'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Payment Schedules</PageTitle>
             <ProjectSchedule />
           </SuspensedView>
         }
        />
        <Route
         path='finance-option-schedules/:id'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Finance Option Schedules</PageTitle>
             <FinanceOptionSchedule />
           </SuspensedView>
         }
        />

        <Route
         path='project-activity-costs/:id'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Project Activity Costs</PageTitle>
             <ProjectActivityCost />
           </SuspensedView>
         }
        />

        <Route
         path='cashflow/*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Financial Projections</PageTitle>
             <CashFlow />
           </SuspensedView>
         }
        />

        <Route
         path='banks/*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Banks</PageTitle>
             <Bank />
           </SuspensedView>
         }
        />
        <Route
         path='popayschedules/:id*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>PO Payment Schedule</PageTitle>
             <PopaySchedule />
           </SuspensedView>
         }
        />

        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
