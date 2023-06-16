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
         path='costDetails/:id'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Cost Details</PageTitle>
             <CostDetail />
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
