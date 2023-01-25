import React from 'react'
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {ProductionReportTable} from "./components/report/production_table/CycleDetailsList";
import {FuelReportTable} from "./components/report/fuel/CycleDetailsList";
import {CycleDetailsTable} from "./components/entries/cycle_details/CycleDetailsTable";
import {CycleGradesTable} from "./components/entries/cycle_grades/CycleGradesTable";
import {PlannedOutputTable} from "./components/entries/planned_output/PlannedOutputTable";
import { Company } from './components/setup/administration/Company';
import { Configurations } from './components/setup/administration/Configurations';
import { UserManagement } from './components/setup/administration/UserManagement';
import { Appraisals } from './components/setup/hr/Appraisals';
import { DisciplinaryAction } from './components/setup/hr/DisciplinaryAction';
import { Leaves } from './components/setup/hr/Leaves';
import { Medicals } from './components/setup/hr/Medicals';
import { Recruitments } from './components/setup/hr/Recruitment';
import { Trainings } from './components/setup/hr/Trainings';
import { ApprovalLevel } from './components/setup/payroll/ApprovalLevel';
import { Benefit } from './components/setup/payroll/Benefit';
import { Currency } from './components/setup/payroll/Currency';
import { Deduction } from './components/setup/payroll/Deduction';
import { Loan } from './components/setup/payroll/Loan';
import { Overtime } from './components/setup/payroll/Overtime';
import { Parameter } from './components/setup/payroll/Parameter';
import { Period } from './components/setup/payroll/Period';
import { SavingScheme } from './components/setup/payroll/SavingScheme';
import { Categories } from './components/setup/employee/Categories';
import { Department } from './components/setup/employee/Department';
import { Grades } from './components/setup/employee/Grades';
import { JobTitle } from './components/setup/employee/JobTitle';
import { Nationality } from './components/setup/employee/Nationality';
import { Notches } from './components/setup/employee/Notches';
import { Paygroups } from './components/setup/employee/Paygroups';
import { Regions } from './components/setup/employee/Regions';
import { SalaryUpgrade } from './components/setup/employee/SalaryUpgrade';
import { Units } from './components/setup/employee/Units';

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
              <PageTitle breadcrumbs={accountBreadCrumbs}>Cycle Details</PageTitle>
              {/*<Overview />*/}
                <CycleDetailsTable />
            </>
          }
        />
        <Route
          path='cycle-grade'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Cycle Grade</PageTitle>
              <CycleGradesTable />
            </>
          }
        />
        <Route
          path='planned-output'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Planned Output</PageTitle>
              <PlannedOutputTable />
            </>
          }
        />
        <Route index element={<Navigate to='/dashboard' />} />
      </Route>
      <Route
        path='/administraion/*'
        element={
          <>
            {/*<ProductionHeader />*/}
            <Outlet />
          </>
        }
      >
       
        
        {/* <Route
          path='audit'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Audit</PageTitle>
              <Audit/>
            </>
          }
        /> */}
        <Route
          path='company'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Audit</PageTitle>
              <Company/>
            </>
          }
        />
        <Route
          path='administration/configurations'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Audit</PageTitle>
              <Configurations/>
            </>
          }
        />
        <Route
          path='administration/user-management'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Audit</PageTitle>
              <UserManagement/>
            </>
          }
        />
        <Route
          path='hr/appraisals'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Appraisals</PageTitle>
              <Appraisals/>
            </>
          }
        />
        <Route
          path='hr/disciplinary-action'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Disciplinary Actions</PageTitle>
              <DisciplinaryAction/>
            </>
          }
        />
        <Route
          path='hr/leaves'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Leaves</PageTitle>
              <Leaves/>
            </>
          }
        />
        <Route
          path='hr/medical'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Medicals</PageTitle>
              <Medicals/>
            </>
          }
        />
        <Route
          path='hr/recruitments'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Recruitments</PageTitle>
              <Recruitments/>
            </>
          }
        />
        <Route
          path='hr/training'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Training</PageTitle>
              <Trainings/>
            </>
          }
        />
        <Route
          path='payroll/approval-level'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Approval Level</PageTitle>
              <ApprovalLevel/>
            </>
          }
        />
        <Route
          path='payroll/benefit'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Benefits</PageTitle>
              <Benefit/>
            </>
          }
        />
        <Route
          path='payroll/currency'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Currency</PageTitle>
              <Currency/>
            </>
          }
        />
        <Route
          path='payroll/deduction'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Deductions</PageTitle>
              <Deduction/>
            </>
          }
        />
        <Route
          path='payroll/loan'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Loans</PageTitle>
              <Loan/>
            </>
          }
        />
        <Route
          path='payroll/overtime'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Overtime</PageTitle>
              <Overtime/>
            </>
          }
        />
        <Route
          path='payroll/parameter'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Parameters</PageTitle>
              <Parameter/>
            </>
          }
        />
        <Route
          path='payroll/period'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Period</PageTitle>
              <Period/>
            </>
          }
        />
        <Route
          path='payroll/saving-scheme'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Saving Scheme</PageTitle>
              <SavingScheme/>
            </>
          }
        />
        <Route
          path='payroll/tax'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Tax</PageTitle>
              <SavingScheme/>
            </>
          }
        />
        <Route
          path='employee/category'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Categories</PageTitle>
              <Categories/>
            </>
          }
        />
        <Route
          path='employee/department'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Departments</PageTitle>
              <Department/>
            </>
          }
        />
        <Route
          path='employee/grade'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Grades</PageTitle>
              <Grades/>
            </>
          }
        />
        <Route
          path='employee/jobtitle'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Job Titles</PageTitle>
              <JobTitle/>
            </>
          }
        />
        <Route
          path='employee/nationality'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Nationality</PageTitle>
              <Nationality/>
            </>
          }
        />
        <Route
          path='employee/notches'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Notches</PageTitle>
              <Notches/>
            </>
          }
        />
        <Route
          path='employee/paygroup'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Paygroups</PageTitle>
              <Paygroups/>
            </>
          }
        />
        <Route
          path='employee/regions'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Regions</PageTitle>
              <Regions/>
            </>
          }
        />
        <Route
          path='employee/salary-upgrade'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Salary Upgrades</PageTitle>
              <SalaryUpgrade/>
            </>
          }
        />
        <Route
          path='employee/units'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Units</PageTitle>
              <Units/>
            </>
          }
        />
        <Route index element={<Navigate to='/dashboard' />} />
      </Route>
      <Route
        path='/report/*'
        element={
          <>
            {/*<ProductionHeader />*/}
            <Outlet />
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
              {/*<EquipmentTable />*/}
            </>
          }
        />
        <Route
          path='activity-statistics'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Activity Statistics</PageTitle>
              {/*<StatisticsTable />*/}
            </>
          }
        />
        <Route index element={<Navigate to='/dashboard' />} />
      </Route>
    </Routes>
  )
}

export default ProductionPage
