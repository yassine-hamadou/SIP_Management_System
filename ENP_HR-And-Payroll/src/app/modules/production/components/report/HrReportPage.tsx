import { Link } from 'react-router-dom'


const HrReportPage = () => {

  return (
    <div 
    
    >
      <div className='row col-12 mb-10'>
        <div 
          style={{
              width:"310px",
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '5px',
              margin:'0px 10px 0px 10px',
              boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
            }}
        >
          <h2 style={{color:"GrayText"}}>Recruitment and Selection</h2>
          <hr></hr>
       
          <h3><span className="bullet me-5"></span><Link to="#">Reference #</Link></h3>
          <h3><span className="bullet me-5"></span><Link to="#">Job Title</Link></h3>
        </div>
        <div
          style={{
              width:"310px",
              backgroundColor: 'white',
              padding: '20px',
              margin:'0px 10px 0px 10px',
              borderRadius: '5px',
              boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
            }}
        >
          <h2 style={{color:"GrayText"}}>Compensation and Benefit</h2>
          <hr></hr>
    
          <h3><span className="bullet me-5"></span><Link to="#">Employee</Link></h3>
          <h3><span className="bullet me-5"></span><Link to="#">Department</Link></h3>
          <h3><span className="bullet me-5"></span><Link to="#">Job Title</Link></h3>
         
        </div>
        <div
          style={{
              width:"310px",
              backgroundColor: 'white',
              padding: '20px',
              margin:'0px 10px 0px 10px',
              borderRadius: '5px',
              boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
            }}
        >
          <h2 style={{color:"GrayText"}}>Training and Development</h2>
          <hr></hr>
         
          <h3><span className="bullet me-5"></span><Link to="#">Reference #</Link></h3>
          <h3><span className="bullet me-5"></span><Link to="#">Training Type</Link></h3>
          <h3><span className="bullet me-5"></span><Link to="#">Summary</Link></h3>
          
        </div>
        <div
          style={{
              width:"320px",
              backgroundColor: 'white',
              padding: '20px',
              margin:'0px 10px 0px 10px',
              borderRadius: '5px',
              boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
            }}
        >
          <h2 style={{color:"GrayText"}}>Appraisal and Performance</h2>
          <hr></hr>
          <h3><span className="bullet me-5"></span><Link to="#">Employee</Link></h3>
          <h3><span className="bullet me-5"></span><Link to="#">Appraisal Type</Link></h3>
        </div>
      </div>

      <div className='row col-12 mb-10'>
        <div 
          style={{
              width:"310px",
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '5px',
              margin:'0px 10px 0px 10px',
              boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
            }}
        >
          <h2 style={{color:"GrayText"}}>Notes</h2>
          <hr></hr>
          
          <h2><span className="bullet me-5"></span><Link to="#">Employee</Link></h2>
          <h2><span className="bullet me-5"></span><Link to="#">Note Category</Link></h2>
          <h2><span className="bullet me-5"></span><Link to="#">Summary</Link></h2>
        </div>
        <div 
          style={{
              width:"310px",
              backgroundColor: 'white',
              padding: '20px',
              margin:'0px 10px 0px 10px',
              borderRadius: '5px',
              boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
            }}
        >
          <h2 style={{color:"GrayText"}}>Leave</h2>
          <hr></hr>
          
          <h2><span className="bullet me-5"></span><Link to="#">Employee</Link></h2>
          <h2><span className="bullet me-5"></span><Link to="#">Department</Link></h2>
          <h2><span className="bullet me-5"></span><Link to="#">Summary</Link></h2>
         
        </div>
        <div
          style={{
              width:"310px",
              backgroundColor: 'white',
              padding: '20px',
              margin:'0px 10px 0px 10px',
              borderRadius: '5px',
              boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
            }}
        >
          <h2 style={{color:"GrayText"}}>Medical</h2>
          <hr></hr>
          
          <h2><span className="bullet me-5"></span><Link to="#">Employee</Link></h2>
          <h2><span className="bullet me-5"></span><Link to="#">Medical Type</Link></h2>
          <h2><span className="bullet me-5"></span><Link to="#">Summary</Link></h2>
          
        </div>
        
      </div>
    </div>
  )
}

export {HrReportPage}
