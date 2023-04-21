import { Link } from "react-router-dom"

// report card component
export const ReportCard = (reportData: any) => {
    return (
        <div
            style={{
                backgroundColor: 'white',
                padding: '20px',
                margin: '0px 10px 0px 10px',
                borderRadius: '5px',
                boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
            }}
        >
            <h2 style={{ color: "GrayText" }}>{reportData.data.title}</h2>
            <hr></hr>
            <br></br>
            {
                reportData.data.reports.map((report: any) => {
                    return (
                        <h2 key={report.title}>
                            <span className="bullet me-5"
                                style={{
                                    display: 'inline-block',
                                    verticalAlign: 'middle',
                                    textAlign: 'center',
                                }} >
                            </span>
                            <Link style={{
                                fontSize: '18px',
                            }} to={report.link}>{report.title}</Link>
                        </h2>
                    )
                })
            }
        </div>

    )
}