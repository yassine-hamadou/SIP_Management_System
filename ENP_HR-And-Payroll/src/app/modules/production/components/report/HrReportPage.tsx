import { Link } from 'react-router-dom'
import { ReportCard } from './ReportCardItem'


const  HrReportData = [
  {
    title: "Recruitment and Selection",
    reports: [
      { title: "Reference #", link: "/RecruitmentSelectionReferenceReport" },
      { title: "Job Title", link: "/RecruitmentSelectJobTitleRepor" },
    ]
  },
  {
    title: "Compensation and Benefit",
    reports: [
      { title: "Employee", link: "/CompensationBenefitByEmployeeReport" },
      { title: "Department", link: "/CompensationBenefitByDepartmentReport" },
      { title: "Job Title", link: "/CompensationBenefitByJobTitleReport" },
    ]
  },
  {
    title: "Training and Development",
    reports: [
      { title: "Reference #", link: "/TrainingDevelopmentByEmployeeReport" },
      { title: "Training Type", link: "/TrainingDevelopmentByDepartmentReport" },
      { title: "Summary", link: "/TrainingDevelopmentByJobTitleReport" },
    ]
  },
  {
    title: "Appraisal and Performance",
    reports: [
      { title: "Employee", link: "/AppraisalPerformanceByEmployeeReport" },
      { title: "Appraisal Type", link: "/AppraisalPerformanceByAppraisalTypeReport" },
    ]
  },
  {

    title: "Notes",
    reports: [
      { title: "Employee", link: "/NotesEmployeeReport" },
      { title: "Note Category", link: "/NoteCategoryReport" },
      { title: "Summary", link: "/NotesSummaryReport" },
    ]
  },
  {
    title: "Leave",
    reports: [
      { title: "Employee", link: "/LeaveEmployeeReport" },
      { title: "Department", link: "/LeaveDepartmentReport" },
      { title: "Summary", link: "/LeaveSummaryReport" },
    ]
  },
  {
    title: "Medical",
    reports: [
      { title: "Employee", link: "/MedicalEmployeeReport" },
      { title: "Medical Type", link: "/MedicalTypeReport" },
      { title: "Summary", link: "/MedicalSummaryReport" },
    ]
  },
]

const HrReportPage = () => {

  const HrReportData1 = HrReportData.slice(0, 3)
  const HrReportData2 = HrReportData.slice(3, 6)
  const HrReportData3 = HrReportData.slice(6, 9)

  return (
    <div

    >
      <div className='row col-12 mb-10'>
        {
          HrReportData1.map((report, index) => {
            return (
              <div className='col-4' key={index}>
                <ReportCard data={report} />
              </div>
            )
          })
        }
      </div>

      <div className='row col-12 mb-10'>
        {
          HrReportData2.map((report, index) => {
            return (
              <div className='col-4' key={index}>
                <ReportCard data={report} />
              </div>
            )
          })
        }
      </div>

      <div className='row col-12 mb-10'>
        {
          HrReportData3.map((report, index) => {
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

export { HrReportPage }
