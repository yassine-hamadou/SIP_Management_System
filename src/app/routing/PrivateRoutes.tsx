import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import { Horizontal } from '../modules/wizards/components/Horizontal'
import { TablesWidget6 } from '../../_metronic/partials/widgets'
import ActivitysPage from '../modules/apps/setups/setup/activity/ActivitysPage'
import DestinationsPage from '../modules/apps/setups/setup/destination/DestinationsPage'
import HaulerOperatorsPage from '../modules/apps/setups/setup/haulerOperator/HaulerOperatorsPage'
import HaulerUnitsPage from '../modules/apps/setups/setup/haulerUnit/HaulerUnitsPage'
import LoaderOperatorPage from '../modules/apps/setups/setup/loaderOperator/LoaderOperatorsPage'
import LoaderUnitsPage from '../modules/apps/setups/setup/loaderUnit/LoaderUnitsPage'
import MineAreaPage from '../modules/apps/setups/setup/mineArea/MineAreaPage'
import OriginsPage from '../modules/apps/setups/setup/origin/OriginsPage'
import ProcessedsPage from '../modules/apps/setups/setup/processed/ProcessedsPage'
import RawsPage from '../modules/apps/setups/setup/raw/RawsPage'
import ShiftsPage from '../modules/apps/setups/setup/shift/ShiftsPage'
import DetailsPage from '../modules/apps/setups/entries/detail/DetailsPage'
import GradesPage from '../modules/apps/setups/entries/grade/GradePage'
import PlansPage from '../modules/apps/setups/entries/plan/PlansPage'
import TestReport from '../modules/apps/testReport'


const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />

        <Route
          path='apps/*'
          element={
            <SuspensedView>
              <TestReport />
            </SuspensedView>
          }
        />
        
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/pro-human-resource/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/userform/components/*'
          element={
            <SuspensedView>
              <Horizontal />
            </SuspensedView>
          }
        />
        {/* routes for setup - employee routes */}
        <Route
          path='apps/setups/setup/activity/*'
          element={
            <SuspensedView>
              <ActivitysPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/setup/destination/*'
          element={
            <SuspensedView>
              <DestinationsPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/setup/haulerOperator/*'
          element={
            <SuspensedView>
              <HaulerOperatorsPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/setup/haulerUnit/*'
          element={
            <SuspensedView>
              <HaulerUnitsPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/setup/loaderOperator/*'
          element={
            <SuspensedView>
              <LoaderOperatorPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/setup/loaderUnit/*'
          element={
            <SuspensedView>
              <LoaderUnitsPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/setup/mineArea/*'
          element={
            <SuspensedView>
              <MineAreaPage />
            </SuspensedView>
          }
        />

        
        <Route
          path='apps/setups/setup/origin/*'
          element={
            <SuspensedView>
              <OriginsPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/setup/processed/*'
          element={
            <SuspensedView>
              <ProcessedsPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/setup/raw/*'
          element={
            <SuspensedView>
              <RawsPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/setup/shift/*'
          element={
            <SuspensedView>
              <ShiftsPage />
            </SuspensedView>
          }
        />

        {/* routes for HR */}
        <Route
          path='apps/setups/entries/detail/*'
          element={
            <SuspensedView>
              <DetailsPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/entries/grade/*'
          element={
            <SuspensedView>
              <GradesPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/setups/entries/plan/*'
          element={
            <SuspensedView>
              <PlansPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
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
