import { Link } from 'react-router-dom'
import {KTCardBody, KTSVG} from '../../../../../_metronic/helpers'
import { ReportCard } from './ReportCardItem'



const PayrollReportPage = () => {
  
  const PayrollReportData = [
    {
      title: "Employees Reports",
      reports: [
        { title: "List", link: "/report/payrollPAYEReport" },
        { title: "Age Profile", link: "/report/payrollAgeProfileReport" },
        { title: "Staff Movement", link: "/report/payrollStaffMovementReport" },
        { title: "History", link: "/report/payrollHistoryReport" },
        { title: "Status", link: "/report/payrollStatusReport" },
      ]
    },
    {
      title: "Human Resource Reports",
      reports: [
        { title: "Recruitment and Selection", link: "/report/hrRecruitmentSelectionReport" },
        { title: "Compensation and Benefit", link: "/report/hrCompensationBenefitReport" },
        { title: "Training and Development", link: "/report/hrTrainingDevelopmentReport" },
        { title: "Appraisal and Performance", link: "/report/hrAppraisalPerformanceReport" },
        { title: "Disciplinary Actions", link: "/report/hrDisciplinaryActionsReport" },
        { title: "Leave Planning", link: "/report/hrLeavePlanningReport" },
        { title: "Medical", link: "/report/hrMedicalReport" },
      ]
    },
    {
      title: "Payroll Reports",
      reports: [
        { title: "Transaction History", link: "/report/payrollTransactionHistoryReport" },
        { title: "Payslip", link: "/report/payrollPayslipReport" },
        { title: "Journal", link: "/report/payrollJournalReport" },
        { title: "Basic Pay Reconciliation", link: "/report/payrollBasicPayReconciliationReport" },
        { title: "Bank Summary", link: "/report/payrollBankSummaryReport" },
        { title: "Analysis", link: "/report/payrollAnalysisReport" },
        { title: "Statutory  Reports", link: "/report/payrollStatutoryReportsReport" },
        { title: "Loans", link: "/report/payrollLoanssReport" },
      ]
    }
  ]

  return (
    <div>
      <div className='row col-12 mb-10'>
        {
          PayrollReportData.map((report, index) => {
            return (
              <div className='col-4' key={index}>
                <ReportCard data={report} />
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export {PayrollReportPage}
