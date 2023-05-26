import React, { FC, Suspense } from 'react'
import { Navigate, Route, Routes, Outlet } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { ProductionReportTable } from "./components/report/ProductionReports";
import { FuelReportTable } from "./components/report/fuel/CycleDetailsList";
import { CycleDetailsTable } from "./components/entries/CycleDetailsTable";
import { CycleGradesTable } from "./components/entries/CycleGradesTable";
import { PlannedOutputTable } from "./components/entries/PlannedOutputTable";
import { ActivityTable } from "./components/setup/activity/ActivityTable";
import { DestinationTable } from "./components/setup/locations/DestinationTable";
import { ShiftPage } from './components/setup/ShiftPage';
import { OriginPage } from './components/setup/locations/OriginPage';
import { LoaderUnit } from './components/setup/loader/LoaderUnit';
import { HaulerOperator } from './components/setup/hauler/HaulerOperator';
import { HaulerUnit } from './components/setup/hauler/HaulerUnit';
import { MineArea } from './components/setup/locations/MineArea';
import { ProcessedMaterial } from './components/setup/materials/ProcessedMaterial';
import { MaterialRaw } from './components/setup/materials/MaterialRaw';
import { LoaderOperator } from './components/setup/loader/LoaderOperator';
import { EquipmentKpiReport } from "./components/report/EquipmentKpi";
import { ActivityStatsReport } from './components/report/ActivityStatsReport';
import { EquipmentFuelTable } from './components/entries/fuel/EquipmentFuelTable';
import { FuelReceipt } from './components/entries/fuel/Receipt';
import { FuelIssue } from './components/entries/fuel/Issue';
import { FuelPump } from './components/setup/locations/fuelPump';
import { ProductionLoader } from './components/setup/loader/Loader';
import { ProductionHauler } from './components/setup/hauler/Hauler';
import { ProductionLocations } from './components/setup/locations/Locations';
import { ProductionMaterials } from './components/setup/materials/Materials';
import { ProductionDrill } from './components/setup/Drill';
import { WithChildren } from '../../../_metronic/helpers';
import { getCSSVariableValue } from '../../../_metronic/assets/ts/_utils';
import TopBarProgress from 'react-topbar-progress-indicator';
import { ActivityDetails } from './components/setup/activity/ActivityDetails';

const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Activiy',
    path: '/setup/activity/',
    isSeparator: false,
    isActive: false,
  },
  {
    title: 'Activiy Details',
    path: '/activity/activityDetails',
    isSeparator: true,
    isActive: false,
  },
]

const ProductionPage: React.FC = () => {
  return (
    <Routes>

      <Route
        path='/entries/*'
        element={
          <>
            {/*<ProductionHeader />*/}
            <Outlet />
          </>
        }
      >
        <Route
          path='cycle-details'
          element={
            <>
              <PageTitle>Cycle Details</PageTitle>
              {/*<Overview />*/}
              <CycleDetailsTable />
            </>
          }
        />
        <Route
          path='planned-output'
          element={
            <>
              <PageTitle>Planned Output</PageTitle>
              <PlannedOutputTable />
            </>
          }
        />
        <Route
          path='fuel'
          element={
            <>
              <PageTitle>Fuel</PageTitle>
              <EquipmentFuelTable />
            </>
          }
        />
        <Route index element={<Navigate to='/dashboard' />} />
      </Route>
      <Route
        path='/setup/*'
        element={
          <>
            {/*<ProductionHeader />*/}
            <Outlet />
          </>
        }
      >
        <Route
          path='loader'
          element={
            <>
              <PageTitle>Loader</PageTitle>
              {/*<Overview />*/}
              <ProductionLoader />
            </>
          }
        />
        <Route
          path='hauler'
          element={
            <>
              <PageTitle>Hauler</PageTitle>
              {/*<Overview />*/}
              <ProductionHauler />
            </>
          }
        />
        <Route
          path='drill'
          element={
            <>
              <PageTitle>Drill Unit</PageTitle>
              <ProductionDrill />
            </>
          }
        />
        <Route
          path='locations'
          element={
            <>
              <PageTitle>Locations</PageTitle>
              {/*<Overview />*/}
              <ProductionLocations />
            </>
          }
        />
        <Route
          path='materials'
          element={
            <>
              <PageTitle>Materials</PageTitle>
              <ProductionMaterials />
            </>
          }
        />
        <Route
          path='activity/*'
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route
            path=''
            element={
              <>
                <SuspensedView>
                  <PageTitle>Activity</PageTitle>
                  <ActivityTable />
                </SuspensedView>
              </>
            }
          />
          <Route
            path='activityDetails/:id'
            element={
              <SuspensedView>
                <PageTitle>Activity Details</PageTitle>
                <ActivityDetails />
              </SuspensedView>
            }
          />
        </Route>


        <Route
          path='shift'
          element={
            <>
              <PageTitle>Shift</PageTitle>
              <ShiftPage />
            </>
          }
        />
        <Route index element={<Navigate to='/dashboard' />} />
      </Route>
      <Route
        path='/report/*'
        element={
          <>
            <PageTitle>Production Report</PageTitle>
            {/*<Overview />*/}
            <ProductionReportTable />
          </>
        }
      >
        <Route
          path='production-report'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Production Report</PageTitle>
              {/*<Overview />*/}
              <ProductionReportTable />
            </>
          }
        />
        <Route
          path='fuel-report'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Fuel Report</PageTitle>
              <FuelReportTable />
            </>
          }
        />
        <Route
          path='equipment-kpi'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Equipment KPI</PageTitle>
              <EquipmentKpiReport />
            </>
          }
        />
        <Route
          path='activity-statistics'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Activity Statistics</PageTitle>
              <ActivityStatsReport />
            </>
          }
        />
        <Route index element={<Navigate to='/dashboard' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({ children }) => {
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

export default ProductionPage
