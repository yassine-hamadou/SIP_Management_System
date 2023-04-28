import {FC, Suspense} from 'react'
import {Route, Routes, Navigate, Outlet} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import { PageLink, PageTitle } from '../../_metronic/layout/core'
import { HRDashboardWrapper } from '../pages/dashboard/HumanResourceDashBoard'
import { Applications } from '../modules/production/components/Application/Application'
import { Roles } from '../modules/production/components/Role/Role'
import { User } from '../modules/production/components/User/User'
import { UserRole } from '../modules/production/components/User/UserRole'
import { UserApplication } from '../modules/production/components/User/UserApplication'
import { Companies } from '../modules/production/components/Company/Company'
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
        <Route path='auth/*' element={<Navigate to='/hr-dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        
        {/* <Route path='dashboard' element={<DashboardWrapper />} /> */}

        <Route path='hr-dashboard' element={<HRDashboardWrapper />} />

        {/* Employee  */}

        {/* <Route
         path='employee/*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Employees</PageTitle>
             <Employee />
           </SuspensedView>
         }
        /> */}
        <Route
         path='users/*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Users</PageTitle>
             <User />
           </SuspensedView>
         }
        />
        <Route
         path='user-roles/:id'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>User Roles</PageTitle>
             <UserRole />
           </SuspensedView>
         }
        />
        <Route
         path='user-applications/:id'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}> User Applications</PageTitle>
             <UserApplication />
           </SuspensedView>
         }
        />
        <Route
         path='application-company/:id'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Application Companies</PageTitle>
             <Companies />
           </SuspensedView>
         }
        />
        <Route
         path='roles/*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Roles</PageTitle>
             <Roles />
           </SuspensedView>
         }
        />
        <Route
         path='applications/*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Applications</PageTitle>
             <Applications />
           </SuspensedView>
         }
        />
        <Route
         path='company/*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All Companies</PageTitle>
             <Companies />
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
