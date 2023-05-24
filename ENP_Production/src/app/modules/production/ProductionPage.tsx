import React from 'react'
import { Navigate, Route, Routes, Outlet } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { ProductionReportTable } from "./components/report/production_table/ProductionReports";
import { FuelReportTable } from "./components/report/fuel/CycleDetailsList";
import { CycleDetailsTable } from "./components/entries/cycle_details/CycleDetailsTable";
import { CycleGradesTable } from "./components/entries/cycle_grades/CycleGradesTable";
import { PlannedOutputTable } from "./components/entries/planned_output/PlannedOutputTable";
import { ActivityTable } from "./components/setup/activity/ActivityTable";
import { DestinationTable } from "./components/setup/destination/DestinationTable";
import { ShiftPage } from './components/setup/shift/ShiftPage';
import { OriginPage } from './components/setup/origin/OriginPage';
import { LoaderUnit } from './components/setup/loaderUnit/LoaderUnit';
import { HaulerOperator } from './components/setup/haulerOperator/HaulerOperator';
import { HaulerUnit } from './components/setup/haulerUnit/HaulerUnit';
import { MineArea } from './components/setup/mine_care/MineArea';
import { ProcessedMaterial } from './components/setup/materialProcessed/ProcessedMaterial';
import { MaterialRaw } from './components/setup/materialRaw/MaterialRaw';
import { LoaderOperator } from './components/setup/loaderOperator/LoaderOperator';
import { EquipmentKpiReport } from "./components/report/EquipmentKpi";
import { ActivityStatsReport } from './components/report/ActivityStatsReport';
import { EquipmentFuelTable } from './components/entries/fuel/EquipmentFuelTable';
import { FuelReciept } from './components/entries/fuel/Reciept';
import { FuelIssue } from './components/entries/fuel/Issue';
import { FuelPump } from './components/setup/pump/fuelPump';

const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Cycle Details',
    path: '/cycle_details/cycle-details',
    isSeparator: false,
    isActive: false,
  },
  {
    title: 'Cycle Grade',
    path: '/cycle_details/cycle-grade',
    isSeparator: true,
    isActive: false,
  },
  {
    title: 'Planned Output',
    path: '/cycle_details/planned-output',
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
          path='loader/operator'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Loader Operator</PageTitle>
              {/*<Overview />*/}
              <LoaderOperator />
            </>
          }
        />
        <Route
          path='loader/unit'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Loader Unit</PageTitle>
              {/*<Overview />*/}
              <LoaderUnit />
            </>
          }
        />
        <Route
          path='hauler/operator'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Hauler Operator</PageTitle>
              <HaulerOperator />
            </>
          }
        />
        <Route
          path='hauler/unit'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Hauler Unit</PageTitle>
              <HaulerUnit />
            </>
          }
        />
        <Route
          path='mine-area'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Mine Area</PageTitle>
              <MineArea />
            </>
          }
        />
        <Route
          path='origin'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Origin</PageTitle>
              <OriginPage />
            </>
          }
        />
        <Route
          path='destination'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Destination</PageTitle>
              <DestinationTable />
            </>
          }
        />
        <Route
          path='pump'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Pump</PageTitle>
              <FuelPump />
            </>
          }
        />
        <Route
          path='raw-material'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Raw Material</PageTitle>
              <MaterialRaw />
            </>
          }
        />
        <Route
          path='processed-material'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Processed Material</PageTitle>
              <ProcessedMaterial />
            </>
          }
        />
        <Route
          path='activity'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Activity</PageTitle>
              <ActivityTable />
            </>
          }
        />
        <Route
          path='shift'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Shift</PageTitle>
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
            <PageTitle breadcrumbs={accountBreadCrumbs}>Production Report</PageTitle>
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

export default ProductionPage
