import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import ProductionPage from "../modules/production/ProductionPage";
import { Audit } from '../modules/production/components/setup/administration/Audit'
import { PageLink, PageTitle } from '../../_metronic/layout/core'
import { Company } from '../modules/production/components/setup/administration/Company'
import { Configurations } from '../modules/production/components/setup/administration/Configurations'
import { UserManagement } from '../modules/production/components/setup/administration/UserManagement'
import { Categories } from '../modules/production/components/setup/employee/Categories'
import { Department } from '../modules/production/components/setup/employee/Department'
import { Grades } from '../modules/production/components/setup/employee/Grades'
import { JobTitle } from '../modules/production/components/setup/employee/JobTitle'
import { Nationality } from '../modules/production/components/setup/employee/Nationality'
import { Notches } from '../modules/production/components/setup/employee/Notches'
import { Paygroups } from '../modules/production/components/setup/employee/Paygroups'
import { SalaryUpgrade } from '../modules/production/components/setup/employee/SalaryUpgrade'
import { Units } from '../modules/production/components/setup/employee/Units'
import { Regions } from '../modules/production/components/setup/employee/Regions'
import { Appraisals } from '../modules/production/components/setup/hr/Appraisals'
import { DisciplinaryAction } from '../modules/production/components/setup/hr/DisciplinaryAction'
import { Leaves } from '../modules/production/components/setup/hr/Leaves'
import { Medicals } from '../modules/production/components/setup/hr/Medicals'
import { Recruitments } from '../modules/production/components/setup/hr/Recruitment'
import { Trainings } from '../modules/production/components/setup/hr/Trainings'
import { ApprovalLevel } from '../modules/production/components/setup/payroll/ApprovalLevel'
import { Benefit } from '../modules/production/components/setup/payroll/Benefit'
import { Currency } from '../modules/production/components/setup/payroll/Currency'
import { Deduction } from '../modules/production/components/setup/payroll/Deduction'
import { Loan } from '../modules/production/components/setup/payroll/Loan'
import { Overtime } from '../modules/production/components/setup/payroll/Overtime'
import { Period } from '../modules/production/components/setup/payroll/Period'
import { Parameter } from '../modules/production/components/setup/payroll/Parameter'
import { Tax } from '../modules/production/components/setup/payroll/Tax'
import { SavingScheme } from '../modules/production/components/setup/payroll/SavingScheme'
import { RecruitmentSelection } from '../modules/production/components/transactions/hr/RecruitmentSelection'
import { CompensationBenefit } from '../modules/production/components/transactions/hr/CompensationBenefit'
import { TrainingDevelopment } from '../modules/production/components/transactions/hr/TrainingDevelopment'
import { AppraisalPerformance } from '../modules/production/components/transactions/hr/AppraisalPerformance'
import { DisciplinaryActions } from '../modules/production/components/transactions/hr/DisciplinaryActions'
import { LeavePlanning } from '../modules/production/components/transactions/hr/LeavePlanning'
import { MedicalEntries } from '../modules/production/components/transactions/hr/MedicalEntries'
import { TimeSheet } from '../modules/production/components/transactions/payroll/TimeSheet'
import { Recurrent } from '../modules/production/components/transactions/payroll/Recurrent'
import { NonRecurrent } from '../modules/production/components/transactions/payroll/NonRecurrent'
import { SavingSchemes } from '../modules/production/components/transactions/payroll/SavingSchemes'
import { SalaryUploads } from '../modules/production/components/transactions/payroll/SalaryUploads'
import { ReliefRebate } from '../modules/production/components/transactions/payroll/ReliefRebate'
import { Approval } from '../modules/production/components/processes/payroll/Approval'
import { CheckTax } from '../modules/production/components/processes/payroll/CheckTax'
import { Journals } from '../modules/production/components/processes/payroll/Journal'
import { ProjectSheets } from '../modules/production/components/processes/payroll/ProjectSheet'
import { Payrun } from '../modules/production/components/processes/payroll/Payrun'

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
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='production/*' element={<ProductionPage />} />



        {/* Transaction > HR Routes  */}


        <Route
         path='transaction/hr/recruitment-selection*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Recruitment and Selection</PageTitle>
             <RecruitmentSelection />
           </SuspensedView>
         }
        />
        <Route
         path='transaction/hr/compensation-benefit*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Compensation and Benefits</PageTitle>
             <CompensationBenefit />
           </SuspensedView>
         }
        />
        <Route
         path='transaction/hr/training-development*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Training and Development</PageTitle>
             <TrainingDevelopment />
           </SuspensedView>
         }
        />
        <Route
         path='transaction/hr/appraisal-performance*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Appraisal and Performnance</PageTitle>
             <AppraisalPerformance />
           </SuspensedView>
         }
        />
       
        <Route
         path='transaction/hr/disciplinary-actions*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Disciplinary Actions</PageTitle>
             <DisciplinaryActions />
           </SuspensedView>
         }
        />
        <Route
         path='transaction/hr/leave-planning*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Leave Planning</PageTitle>
             <LeavePlanning />
           </SuspensedView>
         }
        />
        <Route
         path='transaction/hr/medical-entries*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Medical Entries</PageTitle>
             <MedicalEntries />
           </SuspensedView>
         }
        />


        {/* Transaction > Payroll Routes  */}


        <Route
         path='transaction/payroll/timesheet*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Timesheet</PageTitle>
             <TimeSheet />
           </SuspensedView>
         }
        />
        <Route
         path='transaction/payroll/recurrent*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Recurrent</PageTitle>
             <Recurrent />
           </SuspensedView>
         }
        />
        <Route
         path='transaction/payroll/non-recurrent*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Non-Recurrent</PageTitle>
             <NonRecurrent />
           </SuspensedView>
         }
        />
        <Route
         path='transaction/payroll/saving-schemes*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Saving Schemes</PageTitle>
             <SavingSchemes />
           </SuspensedView>
         }
        />
        <Route
         path='transaction/payroll/salary-upload*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Salary Upload</PageTitle>
             <SalaryUploads />
           </SuspensedView>
         }
        />
        <Route
         path='transaction/payroll/relief-rebate*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Relief and Rebate Input</PageTitle>
             <ReliefRebate />
           </SuspensedView>
         }
        />


        {/* Processes > HR Routes  */}
        {/* <Route
         path='transaction/payroll/relief-rebate*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Relief and Rebate Input</PageTitle>
             <ReliefRebate />
           </SuspensedView>
         }
        /> */}


        {/* Processes > Payroll Routes  */}
        <Route
         path='processes/payroll/approval*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Approvals</PageTitle>
             <Approval />
           </SuspensedView>
         }
        />
        <Route
         path='processes/payroll/check-tax*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Check Taxes</PageTitle>
             <CheckTax />
           </SuspensedView>
         }
        />

        <Route
         path='processes/payroll/journal*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Journals </PageTitle>
             <Journals />
           </SuspensedView>
         }
        />

        <Route
         path='processes/payroll/project-sheets-input*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Project Sheets and Input </PageTitle>
             <ProjectSheets />
           </SuspensedView>
         }
        />
        <Route
         path='processes/payroll/payrun*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Payruns </PageTitle>
             <Payrun />
           </SuspensedView>
         }
        />



        {/* Setup > Administration Routes  */}

        <Route
         path='setup/administration/audit*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Audit</PageTitle>
             <Audit />
           </SuspensedView>
         }
        />
        <Route
         path='setup/administration/company*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Company</PageTitle>
             <Company />
           </SuspensedView>
         }
        />
        <Route
         path='setup/administration/configurations*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Configurations</PageTitle>
             <Configurations />
           </SuspensedView>
         }
        />
        <Route
         path='setup/administration/user-management*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>User Management</PageTitle>
             <UserManagement />
           </SuspensedView>
         }
        />

        {/* Employee Routes  */}

        <Route
         path='setup/employee/category*'
         element={
          
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Categories</PageTitle>
             <Categories />
           </SuspensedView>
         }
        />
        <Route
         path='setup/employee/department*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Department</PageTitle>
             <Department />
           </SuspensedView>
         }
        />
        <Route
         path='setup/employee/grades*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Grades</PageTitle>
             <Grades />
           </SuspensedView>
         }
        />
        <Route
         path='setup/employee/jobtitle*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Job Title</PageTitle>
             <JobTitle />
           </SuspensedView>
         }
        />
        <Route
         path='setup/employee/nationality*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Nationality</PageTitle>
             <Nationality />
           </SuspensedView>
         }
        />
        <Route
         path='setup/employee/notches*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Notches</PageTitle>
             <Notches />
           </SuspensedView>
         }
        />
        <Route
         path='setup/employee/paygroups*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Paygroups</PageTitle>
             <Paygroups />
           </SuspensedView>
         }
        />
        <Route
         path='setup/employee/regions*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Regions</PageTitle>
             <Regions/>
           </SuspensedView>
         }
        />
        <Route
         path='setup/employee/salary-upgrade*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Salary Upgrades</PageTitle>
             <SalaryUpgrade />
           </SuspensedView>
         }
        />
        <Route
         path='setup/employee/units*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Units</PageTitle>
             <Units />
           </SuspensedView>
         }
        />
        {/* HR Routes  */}
        <Route
         path='setup/hr/appraisals*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Appraisals</PageTitle>
             <Appraisals />
           </SuspensedView>
         }
        />
        <Route
         path='setup/hr/disciplinary-action*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Disciplinary Action</PageTitle>
             <DisciplinaryAction />
           </SuspensedView>
         }
        />
        <Route
         path='setup/hr/leaves*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Leaves</PageTitle>
             <Leaves />
           </SuspensedView>
         }
        />
        <Route
         path='setup/hr/medical*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Medicals</PageTitle>
             <Medicals />
           </SuspensedView>
         }
        />
        <Route
         path='setup/hr/recruitments*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Recruitments</PageTitle>
             <Recruitments />
           </SuspensedView>
         }
        />
        <Route
         path='setup/hr/training*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Trainings </PageTitle>
             <Trainings />
           </SuspensedView>
         }
        />
      

        {/* Payroll Routes  */}

        <Route
         path='setup/payroll/approval-level*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Approval Level </PageTitle>
             <ApprovalLevel />
           </SuspensedView>
         }
        />
        <Route
         path='setup/payroll/benefit*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Benefit</PageTitle>
             <Benefit />
           </SuspensedView>
         }
        />
        <Route
         path='setup/payroll/currency*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Currency</PageTitle>
             <Currency />
           </SuspensedView>
         }
        />
        <Route
         path='setup/payroll/decustion*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Deduction</PageTitle>
             <Deduction />
           </SuspensedView>
         }
        />
        <Route
         path='setup/payroll/deduction*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Deduction</PageTitle>
             <Deduction />
           </SuspensedView>
         }
        />
        <Route
         path='setup/payroll/loan*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Loan</PageTitle>
             <Loan />
           </SuspensedView>
         }
        />
        <Route
         path='setup/payroll/overtime*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Overtime</PageTitle>
             <Overtime />
           </SuspensedView>
         }
        />
        <Route
         path='setup/payroll/period*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Period</PageTitle>
             <Period />
           </SuspensedView>
         }
        />
        <Route
         path='setup/payroll/parameter*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Parameter</PageTitle>
             <Parameter />
           </SuspensedView>
         }
        />
        <Route
         path='setup/payroll/tax*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Tax</PageTitle>
             <Tax />
           </SuspensedView>
         }
        />
        <Route
         path='setup/payroll/saving-scheme*'
         element={
           <SuspensedView>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Saving Scheme</PageTitle>
             <SavingScheme />
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
