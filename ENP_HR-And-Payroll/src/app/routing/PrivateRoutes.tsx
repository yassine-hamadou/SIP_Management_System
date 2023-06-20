import {FC, Suspense} from 'react'
import {Route, Routes, Navigate, Outlet} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
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
import { Units } from '../modules/production/components/setup/employee/Units'
import { Appraisals } from '../modules/production/components/setup/hr/Appraisals'
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
import { Employee } from '../modules/production/components/employee/Employee'
import { AllReports } from '../modules/production/components/report/AllReports'
import { Divisions } from '../modules/production/components/setup/employee/Divisions'
import { CompanyAsset } from '../modules/production/components/setup/hr/CompanyAsset'

import { HRDashboardPage } from '../pages/dashboard/HumanResourceDashBoard'
import { HRDashboardWrapper } from '../pages/dashboard/HumanResourceDashBoard'
import { PayrollDashboardWrapper } from '../pages/dashboard/PayrollDashBoard'
import { Notes } from '../modules/production/components/setup/hr/Notes'
import { NoteEntry } from '../modules/production/components/transactions/hr/NoteEntry'
import PayrollPAYEReport from '../modules/production/components/report/PayrollPAYEReport'
import BenefitTransactionInputReport from '../modules/production/components/report/BenefitTransactionInputReport'
import DeductionTransactionInputReport from '../modules/production/components/report/DeductionTransactionInputReport'

import HumanRessourceReport from '../modules/production/components/report/HumanRessourceReport'
import PayrollLoansDetailsReport from '../modules/production/components/report/PayrollLoansDetailsReport'
import PayrollSSNITReport from '../modules/production/components/report/PayrollSSNITReport'
import SavSchemeTransactionInputReport from '../modules/production/components/report/SavSchemeTransactionInputReport'
import { MultiTabForm } from '../modules/production/components/employeeFormEntry/EmployeeFormEntry'
import { EmployeeEditForm } from '../modules/production/components/employeeFormEntry/EmployeeEditForm'
import { EmplyeeDetails } from '../modules/production/components/employeeFormEntry/EmployeeDetails'
import { SNNIT } from '../modules/production/components/setup/payroll/Snnit'
import { EmployeeReportPage } from '../modules/production/components/report/EmployeeReportPage'
import { PayrollReportPage } from '../modules/production/components/report/PayrollReportPage'
import { HrReportPage } from '../modules/production/components/report/HrReportPage'
import EmployeeAgeRangeReport from '../modules/production/components/report/EmployeeAgeRangeReport'
import EmployeeListReport from '../modules/production/components/report/EmployeeListReport'
import EmployeeAgeSummaryReport from '../modules/production/components/report/EmployeeAgeSummaryReport'
import EmployeeFamilyReport from '../modules/production/components/report/EmployeeFamilyReport'
import EmployeeFamilySummaryReport from '../modules/production/components/report/EmployeeFamilySummaryReport'
import EmployeeDivisionReport from '../modules/production/components/report/EmployeeDivisionReport'
import { Skill } from '../modules/production/components/setup/employee/Skill'
import { Qualification } from '../modules/production/components/setup/employee/Qualification'
import { JobTitleQualification } from '../modules/production/components/setup/employee/JobTitleQualification'
import { JobTitleSkill } from '../modules/production/components/setup/employee/JobTitleSkill'
import EmployeeDivisionSummaryReport from '../modules/production/components/report/EmployeeDivisionSummaryReport'
import LeaveEmployeeReport from '../modules/production/components/report/LeaveEmployeeReport'
import LeaveSummaryReport from '../modules/production/components/report/LeaveSummaryReport'
import NoteCategoryReport from '../modules/production/components/report/NoteCategoryReport'
import {LeavePlanning} from "../modules/production/components/transactions/hr/leavePlanning/LeavePlanning";
import {LeaveApproval} from "../modules/production/components/transactions/hr/leavePlanning/LeaveApproval";
import { EmployeeDetail } from '../modules/production/components/transactions/hr/leavePlanning/EmployeeDetail'
import LeaveDepartmentReport from '../modules/production/components/report/LeaveDepartmentReport'
import NotesEmployeeReport from '../modules/production/components/report/NotesEmployeeReport'
import NotesSummaryReport from '../modules/production/components/report/NotesSummaryReport'
import RecruitmentSelectionReferenceReport from '../modules/production/components/report/RecruitmentSelectionReferenceReport'
import RecruitmentSelectJobTitleRepor from '../modules/production/components/report/RecruitmentSelectJobTitleRepor'
import AppraisalPerformanceByAppraisalTypeReport from '../modules/production/components/report/AppraisalPerformanceByAppraisalTypeReport'
import AppraisalPerformanceByEmployeeReport from '../modules/production/components/report/AppraisalPerformanceByEmployeeReport'
import CompensationBenefitByEmployeeReport from '../modules/production/components/report/CompensationBenefitByEmployeeReport'
import CompensationBenefitByDepartmentReport from '../modules/production/components/report/CompensationBenefitByDepartmentReport'
import CompensationBenefitByJobTitleReport from '../modules/production/components/report/CompensationBenefitByJobTitleReport'
import TrainingDevelopmentByReferenceReport from '../modules/production/components/report/TrainingDevelopmentByReferenceReport'
import TrainingDevelopmentBySummaryReport from '../modules/production/components/report/TrainingDevelopmentBySummaryReport'
import TrainingDevelopmentByTrainingTypeReport from '../modules/production/components/report/TrainingDevelopmentByTrainingTypeReport'
import MedicalEmployeeReport from '../modules/production/components/report/MedicalEmployeeReport'
import MedicalTypeReport from '../modules/production/components/report/MedicalTypeReport'
import MedicalSummaryReport from '../modules/production/components/report/MedicalSummaryReport'
import { Products } from '../modules/production/components/setup/hr/Produsts'
import { ServiceProviders } from '../modules/production/components/setup/hr/ServiceProviders'
import { ServiceCost } from '../modules/production/components/setup/hr/ServiceCost'
import { GradeLeaves } from '../modules/production/components/setup/employee/GradeLeave'
import { Perks } from '../modules/production/components/setup/employee/Perk'
import { BenefitCats } from '../modules/production/components/setup/payroll/BenefitCat'
import { DeductionCats } from '../modules/production/components/setup/payroll/DeductionCat'
import { GradePerks } from '../modules/production/components/setup/employee/GradePerk'
import { TaxFormula } from '../modules/production/components/setup/payroll/TaxFormula'
import { Bonuses } from '../modules/production/components/processes/payroll/Bonus'
import { BackPays } from '../modules/production/components/processes/payroll/BackPay'
import { EndOfMonth } from '../modules/production/components/processes/payroll/EndOfMonth'
import { LoanTransaction } from '../modules/production/components/transactions/payroll/LoanTransaction'
import { Shifts } from '../modules/production/components/setup/hr/Shift'
import { Bank } from '../modules/production/components/setup/payroll/Bank'
import { RoasterShifts } from '../modules/production/components/setup/hr/RoaterShifts'
import { Organogram } from '../modules/production/components/setup/hr/Organogram'



const accountBreadCrumbs: Array<PageLink> = [
  {
    title: '',
    path: '/cycle_details/cycle-details',
    isSeparator: false,
    isActive: false,
  },
]


const PrivateRoutes = () => (
  <Routes>
    <Route element={<MasterLayout />}>
      {/* Redirect to Dashboard after success login/registartion */}
      <Route path='auth/*' element={<Navigate to='/hr-dashboard' />} />
      {/* Pages */}

      <Route path='payroll-dashboard' element={<PayrollDashboardWrapper />} />
      <Route path='hr-dashboard' element={<HRDashboardWrapper />} />


      {/* Employee  */}

      <Route
        path='employee/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Employee Details</PageTitle>
          <Employee />
        </SuspensedView>} />

        <Route
        path='roasterShifts/:id'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Roaster Shifts</PageTitle>
          <RoasterShifts />
        </SuspensedView>} />

      <Route
        path='employee-form/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Employee Entries</PageTitle>
          <MultiTabForm />
        </SuspensedView>} />
      <Route
        path='employee-edit-form/:id'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Employee Entries</PageTitle>
          <EmployeeEditForm />
        </SuspensedView>} />
      <Route
        path='employee-details/:id'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Employee Details</PageTitle>
          <EmplyeeDetails />
        </SuspensedView>} />
      {/* All Reports  */}

      <Route
        path='all-reports/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>All Reports</PageTitle>
          <AllReports />
        </SuspensedView>} />
      <Route
        path='employee-report-page/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>All Employee Reports</PageTitle>
          <EmployeeReportPage />
        </SuspensedView>} />
      <Route
        path='hr-report-page/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>All Human Resource Reports</PageTitle>
          <HrReportPage />
        </SuspensedView>} />
      <Route
        path='payroll-report-page/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>All Payroll Reports</PageTitle>
          <PayrollReportPage />
        </SuspensedView>} />
      {/* Transaction > HR Routes  */}


      <Route
        path='transaction/hr/recruitment-selection/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Recruitment and Selections</PageTitle>
          <RecruitmentSelection />
        </SuspensedView>} />
      <Route
        path='transaction/hr/compensation-benefit/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Compensation and Benefits</PageTitle>
          <CompensationBenefit />
        </SuspensedView>} />
      <Route
        path='transaction/hr/training-development/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Training and Developments</PageTitle>
          <TrainingDevelopment />
        </SuspensedView>} />
      <Route
        path='transaction/hr/appraisal-performance/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Appraisal and Performances</PageTitle>
          <AppraisalPerformance />
        </SuspensedView>} />

      <Route
        path='transaction/hr/notes/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Notes Entries</PageTitle>
          <NoteEntry />
        </SuspensedView>} />
      <Route
        path='transaction/hr/leave-planning/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Leave Plannings</PageTitle>
          <Outlet />
        </SuspensedView>}
      >
        <Route path='' element={<LeavePlanning />} />
        <Route path='approval/*' element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Leave Approval</PageTitle>
          <Outlet />
        </SuspensedView>}>
          <Route path='' element={<LeaveApproval />} />
          <Route path=':id' element={<EmployeeDetail />} />
        </Route>
      </Route>
      <Route
        path='transaction/hr/medical-entries/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Medical Entries</PageTitle>
          <MedicalEntries />
        </SuspensedView>} />


      {/* Transaction > Payroll Routes  */}


      <Route
        path='transaction/payroll/timesheet/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Timesheets</PageTitle>
          <TimeSheet />
        </SuspensedView>} />
      <Route
        path='transaction/payroll/loantran/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Loan Transactions</PageTitle>
          <LoanTransaction />
        </SuspensedView>} />
      <Route
        path='transaction/payroll/recurrent/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Recurrents</PageTitle>
          <Recurrent />
        </SuspensedView>} />
      <Route
        path='transaction/payroll/non-recurrent/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Non-Recurrents</PageTitle>
          <NonRecurrent />
        </SuspensedView>} />
      <Route
        path='transaction/payroll/saving-schemes/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Saving Schemes</PageTitle>
          <SavingSchemes />
        </SuspensedView>} />
      <Route
        path='transaction/payroll/salary-upgrade/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Salary Upgrade</PageTitle>
          <SalaryUploads />
        </SuspensedView>} />
      <Route
        path='transaction/payroll/relief-rebate/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Relief and Rebate Input</PageTitle>
          <ReliefRebate />
        </SuspensedView>} />

      {/* Processes > Payroll Routes  */}
      <Route
        path='processes/payroll/approval/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Approvals Process</PageTitle>
          <Approval />
        </SuspensedView>} />
      <Route
        path='processes/payroll/check-tax/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Check Taxes</PageTitle>
          <CheckTax />
        </SuspensedView>} />

      <Route
        path='processes/payroll/journal/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Journals Process</PageTitle>
          <Journals />
        </SuspensedView>} />

      <Route
        path='processes/payroll/project-sheets-input/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Project Sheets and Inputs </PageTitle>
          <ProjectSheets />
        </SuspensedView>} />
      <Route
        path='processes/payroll/payrun/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Payruns Process</PageTitle>
          <Payrun />
        </SuspensedView>} />
      <Route
        path='processes/payroll/bonuses/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Bonuses Process </PageTitle>
          <Bonuses />
        </SuspensedView>} />
      <Route
        path='processes/payroll/backpay/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>BackPays Process </PageTitle>
          <BackPays />
        </SuspensedView>} />
      <Route
        path='processes/payroll/backpay/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>End Of Month Process</PageTitle>
          <EndOfMonth />
        </SuspensedView>} />

      {/* setup routes*/}
      <Route
        path='setup/payroll/tax-formular/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Tax Formula </PageTitle>
          <TaxFormula />
        </SuspensedView>} />



      {/* Setup > Administration Routes  */}

      <Route
        path='setup/administration/audit/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Audits</PageTitle>
          <Audit />
        </SuspensedView>} />
      <Route
        path='setup/administration/company/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Company</PageTitle>
          <Company />
        </SuspensedView>} />
      <Route
        path='setup/administration/configurations/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Configurations</PageTitle>
          <Configurations />
        </SuspensedView>} />
      <Route
        path='setup/administration/user-management/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>User Management</PageTitle>
          <UserManagement />
        </SuspensedView>} />

      {/* Employee Routes  */}

      <Route
        path='setup/employee/category/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Categories</PageTitle>
          <Categories />
        </SuspensedView>} />
      <Route
        path='department/:id'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Departments</PageTitle>
          <Department />
        </SuspensedView>} />
      <Route
        path='grades/:id'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Grades</PageTitle>
          <Grades />
        </SuspensedView>} />
      <Route
        path='testgradeleaves/:id'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Grade Leaves</PageTitle>
          <GradeLeaves />
        </SuspensedView>} />
      <Route
        path='setup/employee/jobtitle/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Job Titles</PageTitle>
          <JobTitle />
        </SuspensedView>} />
      <Route
        path='setup/employee/nationality/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Nationalities</PageTitle>
          <Nationality />
        </SuspensedView>} />
      <Route
        path='notches/:id'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Notches</PageTitle>
          <Notches />
        </SuspensedView>} />
      <Route
        path='setup/employee/paygroups/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Paygroups</PageTitle>
          <Paygroups />
        </SuspensedView>} />
      <Route
        path='setup/employee/divisions/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Divisions</PageTitle>
          <Divisions />
        </SuspensedView>} />
      <Route
        path='setup/employee/skills/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Skills</PageTitle>
          <Skill />
        </SuspensedView>} />
      <Route
        path='setup/employee/qualification/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Qualifications</PageTitle>
          <Qualification />
        </SuspensedView>} />
      <Route
        path='jobtitle-qualification/:id'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>JobTitle Qualification</PageTitle>
          <JobTitleQualification />
        </SuspensedView>} />
      <Route
        path='jobtitle-skill/:id'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>JobTitle Skill</PageTitle>
          <JobTitleSkill />
        </SuspensedView>} />

      <Route
        path='units/:id'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Units</PageTitle>
          <Units />
        </SuspensedView>} />
      <Route
        path='grade-perks/:id'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Grade Perks</PageTitle>
          <GradePerks />
        </SuspensedView>} />
      <Route
        path='setup/employee/perks/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Perks</PageTitle>
          <Perks />
        </SuspensedView>} />
   
      {/* HR Routes  */}
      <Route
        path='setup/hr/appraisals/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Appraisals</PageTitle>
          <Appraisals />
        </SuspensedView>} />
      <Route
        path='setup/hr/notes/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>All Notes</PageTitle>
          <Notes />
        </SuspensedView>} />
      <Route
        path='setup/hr/leaves/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Leaves</PageTitle>
          <Leaves />
        </SuspensedView>} />
      <Route
        path='setup/hr/medical/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Medicals</PageTitle>
          <Medicals />
        </SuspensedView>} />
      <Route
        path='setup/hr/service-provider/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Service Providers</PageTitle>
          <ServiceProviders />
        </SuspensedView>} />
      <Route
        path='products/:id'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Products</PageTitle>
          <Products />
        </SuspensedView>} />
      <Route
        path='service-cost/:id'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Service Cost</PageTitle>
          <ServiceCost />
        </SuspensedView>} />
      <Route
        path='setup/hr/recruitments/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Recruitments</PageTitle>
          <Recruitments />
        </SuspensedView>} />
      <Route
        path='setup/hr/organogram/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Organogram</PageTitle>
          <Organogram />
        </SuspensedView>} />
      <Route
        path='setup/hr/training/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Trainings </PageTitle>
          <Trainings />
        </SuspensedView>} />
      <Route
        path='setup/hr/company-assets/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Company Assets </PageTitle>
          <CompanyAsset />
        </SuspensedView>} />
      <Route
        path='setup/hr/shifts/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Shifts</PageTitle>
          <Shifts />
        </SuspensedView>} 
        />


      {/* Payroll Routes  */}

      <Route
        path='setup/payroll/approval-level/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Approval Levels </PageTitle>
          <ApprovalLevel />
        </SuspensedView>} />
      <Route
        path='setup/payroll/benefit/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Benefits</PageTitle>
          <Benefit />
        </SuspensedView>} />
      <Route
        path='setup/payroll/benefitcat/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Benefit Categories</PageTitle>
          <BenefitCats />
        </SuspensedView>} />
      <Route
        path='setup/payroll/currency/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Currencies</PageTitle>
          <Currency />
        </SuspensedView>} />
      <Route
        path='setup/payroll/deductioncat/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Deduction Categories</PageTitle>
          <DeductionCats />
        </SuspensedView>} />
      <Route
        path='setup/payroll/deduction/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Deductions</PageTitle>
          <Deduction />
        </SuspensedView>} />

      <Route
        path='setup/payroll/loan/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Loans</PageTitle>
          <Loan />
        </SuspensedView>} />

      <Route
        path='setup/payroll/bank/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Banks</PageTitle>
          <Bank />
        </SuspensedView>} />
      <Route
        path='setup/payroll/overtime/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Overtimes</PageTitle>
          <Overtime />
        </SuspensedView>} />
      <Route
        path='setup/payroll/period/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Periods</PageTitle>
          <Period />
        </SuspensedView>} />
      <Route
        path='parameters/:id'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Parameters</PageTitle>
          <Parameter />
        </SuspensedView>} />
      <Route
        path='setup/payroll/tax/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Taxes</PageTitle>
          <Tax />
        </SuspensedView>} />
      <Route
        path='setup/payroll/snnit/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>SNNITs</PageTitle>
          <SNNIT />
        </SuspensedView>} />
      <Route
        path='setup/payroll/saving-scheme/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Saving Schemes</PageTitle>
          <SavingScheme />
        </SuspensedView>} />


      {/* All reports routes */}
      <Route
        path='report/payrollPAYEReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Payroll PAYE Reports</PageTitle>
          <PayrollPAYEReport />
        </SuspensedView>} />
      <Route
        path='report/BenefitTransactionInputReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>BenefitTransactionInputReport</PageTitle>
          <BenefitTransactionInputReport />
        </SuspensedView>} />
      <Route
        path='report/DeductionTransactionInputReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>DeductionTransactionInputReport</PageTitle>
          <DeductionTransactionInputReport />
        </SuspensedView>} />
      <Route
        path='EmployeeAgeRangeReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Employee Age Range Report</PageTitle>
          <EmployeeAgeRangeReport />
        </SuspensedView>} />
      <Route
        path='EmployeeListReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>EmployeeListReport</PageTitle>
          <EmployeeListReport />
        </SuspensedView>} />
      <Route
        path='EmployeeAgeSummaryReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>EmployeeAgeSummaryReport</PageTitle>
          <EmployeeAgeSummaryReport />
        </SuspensedView>} />
      <Route
        path='report/HumanRessourceReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>HumanRessourceReport</PageTitle>
          <HumanRessourceReport />
        </SuspensedView>} />
      <Route
        path='EmployeeFamilyReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>EmployeeFamilyReport</PageTitle>
          <EmployeeFamilyReport />
        </SuspensedView>} />
      <Route
        path='EmployeeFamilySummaryReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Employee Family Member Summary Report</PageTitle>
          <EmployeeFamilySummaryReport />
        </SuspensedView>} />
      <Route
        path='EmployeeDivisionReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Employee Division Report</PageTitle>
          <EmployeeDivisionReport />
        </SuspensedView>} />
      <Route
        path='EmployeeDivisionSummaryReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Employee Division Summary Report</PageTitle>
          <EmployeeDivisionSummaryReport />
        </SuspensedView>} />
      <Route
        path='LeaveEmployeeReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>LeaveEmployeeReport</PageTitle>
          <LeaveEmployeeReport />
        </SuspensedView>} />
      <Route
        path='LeaveSummaryReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>LeaveSummaryReport</PageTitle>
          <LeaveSummaryReport />
        </SuspensedView>} />
      <Route
        path='LeaveDepartmentReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>LeaveDepartmentReport</PageTitle>
          <LeaveDepartmentReport />
        </SuspensedView>} />
      <Route
        path='NoteCategoryReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>NoteCategoryReport</PageTitle>
          <NoteCategoryReport />
        </SuspensedView>} />
      <Route
        path='NotesEmployeeReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>NotesEmployeeReport</PageTitle>
          <NotesEmployeeReport />
        </SuspensedView>} />
      <Route
        path='NotesSummaryReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>NotesSummaryReport</PageTitle>
          <NotesSummaryReport />
        </SuspensedView>} />
      <Route
        path='RecruitmentSelectionReferenceReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>RecruitmentSelectionReferenceReport</PageTitle>
          <RecruitmentSelectionReferenceReport />
        </SuspensedView>} />
      <Route
        path='RecruitmentSelectJobTitleRepor/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>RecruitmentSelectJobTitleRepor</PageTitle>
          <RecruitmentSelectJobTitleRepor />
        </SuspensedView>} />
      <Route
        path='AppraisalPerformanceByAppraisalTypeReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>AppraisalPerformanceByAppraisalTypeReport</PageTitle>
          <AppraisalPerformanceByAppraisalTypeReport />
        </SuspensedView>} />
      <Route
        path='AppraisalPerformanceByEmployeeReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>AppraisalPerformanceByEmployeeReport</PageTitle>
          <AppraisalPerformanceByEmployeeReport />
        </SuspensedView>} />
      <Route
        path='CompensationBenefitByEmployeeReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>CompensationBenefitByEmployeeReport</PageTitle>
          <CompensationBenefitByEmployeeReport />
        </SuspensedView>} />
      <Route
        path='CompensationBenefitByDepartmentReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>CompensationBenefitByDepartmentReport</PageTitle>
          <CompensationBenefitByDepartmentReport />
        </SuspensedView>} />
      <Route
        path='CompensationBenefitByJobTitleReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>CompensationBenefitByJobTitleReport</PageTitle>
          <CompensationBenefitByJobTitleReport />
        </SuspensedView>} />
      <Route
        path='TrainingDevelopmentByReferenceReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>TrainingDevelopmentByReferenceReport</PageTitle>
          <TrainingDevelopmentByReferenceReport />
        </SuspensedView>} />
      <Route
        path='TrainingDevelopmentBySummaryReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>TrainingDevelopmentBySummaryReport</PageTitle>
          <TrainingDevelopmentBySummaryReport />
        </SuspensedView>} />
      <Route
        path='TrainingDevelopmentByTrainingTypeReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>TrainingDevelopmentByTrainingTypeReport</PageTitle>
          <TrainingDevelopmentByTrainingTypeReport />
        </SuspensedView>} />
      <Route
        path='MedicalEmployeeReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>MedicalEmployeeReport</PageTitle>
          <MedicalEmployeeReport />
        </SuspensedView>} />
      <Route
        path='MedicalTypeReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>MedicalTypeReport</PageTitle>
          <MedicalTypeReport />
        </SuspensedView>} />
      <Route
        path='MedicalSummaryReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>MedicalSummaryReport</PageTitle>
          <MedicalSummaryReport />
        </SuspensedView>} />
      <Route
        path='report/PayrollLoansDetailsReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>PayrollLoansDetailsReport</PageTitle>
          <PayrollLoansDetailsReport />
        </SuspensedView>} />
      <Route
        path='report/PayrollSSNITReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>PayrollSSNITReport</PageTitle>
          <PayrollSSNITReport />
        </SuspensedView>} />
      <Route
        path='report/SavSchemeTransactionInputReport/*'
        element={<SuspensedView>
          <PageTitle breadcrumbs={accountBreadCrumbs}>SavSchemeTransactionInputReport</PageTitle>
          <SavSchemeTransactionInputReport />
        </SuspensedView>} />

      <Route path='*' element={<Navigate to='/error/404' />} />
    </Route>
  </Routes>
)

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
