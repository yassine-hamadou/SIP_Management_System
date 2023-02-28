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
          <h2><span className="bullet me-5"></span><Link to="/report/payrollPAYEReport">Paygroup</Link></h2>
          <h2><span className="bullet me-5"></span><Link to="/report/payrollPAYEReport">Division</Link></h2>
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
          <h2><span className="bullet me-5"></span><Link to="/report/payrollPAYEReport">Detail</Link></h2>
          <h2><span className="bullet me-5"></span><Link to="/report/payrollPAYEReport">Summary</Link></h2>
         
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
          <h2><span className="bullet me-5"></span><Link to="/report/payrollPAYEReport">Employee</Link></h2>
          <h2><span className="bullet me-5"></span><Link to="/report/payrollPAYEReport">Summary</Link></h2>
          
        </div>
        
      </div>
    </div>
  )
}

export {EmployeeReportPage}
