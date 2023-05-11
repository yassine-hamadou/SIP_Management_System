import { ReportCard } from "./ReportCardItem"

const ActivityStatsReport = () => {
    const ActivityStatsReportReportData = [
      {
        title: "Activity Report",
        reports: [
          { title: "Report", link: "/" },
          { title: "Report", link: "/" },
          { title: "Report", link: "/" },
        ]
      },
    ]
  
    return (
      <div>
        <div className='row col-12 mb-10'>
          {
            ActivityStatsReportReportData.map((report, index) => {
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
  export {ActivityStatsReport}