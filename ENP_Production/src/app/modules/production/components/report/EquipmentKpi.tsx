import { ReportCard } from "./ReportCardItem"

const EquipmentKpiReport = () => {
    const EquipmentReportData = [
      {
        title: "Equipment Report",
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
            EquipmentReportData.map((report, index) => {
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
  export {EquipmentKpiReport}