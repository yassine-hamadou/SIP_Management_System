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
       
          <h3><span className="bullet me-5"></span><Link to="/RecruitmentSelectionReferenceReport">Reference #</Link></h3>
          <h3><span className="bullet me-5"></span><Link to="/RecruitmentSelectJobTitleRepor">Job Title</Link></h3>
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
    
          <h3><span className="bullet me-5"></span><Link to="/CompensationBenefitByEmployeeReport">Employee</Link></h3>
          <h3><span className="bullet me-5"></span><Link to="/CompensationBenefitByDepartmentReport">Department</Link></h3>
          <h3><span className="bullet me-5"></span><Link to="/CompensationBenefitByJobTitleReport">Job Title</Link></h3>
         
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
         
          <h3><span className="bullet me-5"></span><Link to="/TrainingDevelopmentByReferenceReport">Reference #</Link></h3>
          <h3><span className="bullet me-5"></span><Link to="/TrainingDevelopmentByTrainingTypeReport">Training Type</Link></h3>
          <h3><span className="bullet me-5"></span><Link to="/TrainingDevelopmentBySummaryReport">Summary</Link></h3>
          
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
          <h3><span className="bullet me-5"></span><Link to="/AppraisalPerformanceByEmployeeReport">Employee</Link></h3>
          <h3><span className="bullet me-5"></span><Link to="/AppraisalPerformanceByAppraisalTypeReport">Appraisal Type</Link></h3>
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
          
          <h2><span className="bullet me-5"></span><Link to="/NotesEmployeeReport">Employee</Link></h2>
          <h2><span className="bullet me-5"></span><Link to="/NoteCategoryReport">Note Category</Link></h2>
          <h2><span className="bullet me-5"></span><Link to="/NotesSummaryReport">Summary</Link></h2>
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
          
          <h2><span className="bullet me-5"></span><Link to="/LeaveEmployeeReport">Employee</Link></h2>
          <h2><span className="bullet me-5"></span><Link to="/LeaveDepartmentReport">Department</Link></h2>
          <h2><span className="bullet me-5"></span><Link to="/LeaveSummaryReport">Summary</Link></h2>
         
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
          
          <h2><span className="bullet me-5"></span><Link to="/MedicalEmployeeReport">Employee</Link></h2>
          <h2><span className="bullet me-5"></span><Link to="/MedicalTypeReport">Medical Type</Link></h2>
          <h2><span className="bullet me-5"></span><Link to="/MedicalSummaryReport">Summary</Link></h2>
          
        </div>
        
      </div>
    </div>
  )
}

export {HrReportPage}
