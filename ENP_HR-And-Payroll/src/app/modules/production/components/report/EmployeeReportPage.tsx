import { Link } from 'react-router-dom'

const EmployeeReportPage = () => {

  return (
    <div 
    
    >
      <div className='row col-12 mb-10'>
        <div className='col-3'
          style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '5px',
              margin:'0px 10px 0px 10px',
              boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
            }}
        >
          <h2>List</h2>
          <hr></hr>
          <br></br>
          <h2><span className="bullet me-5"></span><Link to="/EmployeeListReport">Paygroup</Link></h2>
          <h2><span className="bullet me-5"></span><Link to="/EmployeeDivisionReport">Division</Link></h2>
          <h2><span className="bullet me-5"></span><Link to="/EmployeeDivisionSummaryReport">Summary</Link></h2>
        </div>
        <div className='col-3'
          style={{
              backgroundColor: 'white',
              padding: '20px',
              margin:'0px 10px 0px 10px',
              borderRadius: '5px',
              boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
            }}
        >
          <h2>Age Profile</h2>
          <hr></hr>
          <br></br>
          <h2><span className="bullet me-5"></span><Link to="/EmployeeAgeRangeReport">Detail</Link></h2>
          <h2><span className="bullet me-5"></span><Link to="/EmployeeAgeSummaryReport">Summary</Link></h2>
         
        </div>
        <div className='col-3'
          style={{
              backgroundColor: 'white',
              padding: '20px',
              margin:'0px 10px 0px 10px',
              borderRadius: '5px',
              boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
            }}
        >
          <h2>Family Profile</h2>
          <hr></hr>
          <br></br>
          <h2><span className="bullet me-5"></span><Link to="/EmployeeFamilyReport">Employee</Link></h2>
          <h2><span className="bullet me-5"></span><Link to="/EmployeeFamilySummaryReport">Summary</Link></h2>
          
        </div>
        
      </div>
    </div>
  )
}

export {EmployeeReportPage}
