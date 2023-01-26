import {KTCardBody, KTSVG} from '../../../../../_metronic/helpers'


const AllReports = () => {

  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
      }}
    >
      <KTCardBody className='py-4 '>
      
          <div className='row mb-10'>
            <div className='col-4'>
              <h2>
                Employees Reports
              </h2>
              <br />
              <ul>
                <li><h4><a href="#">List</a></h4></li>
                <li><h4><a href="#">Age Profile</a></h4></li>
                <li><h4><a href="#">Staff Movement</a></h4></li>
                <li><h4><a href="#">History</a></h4></li>
                <li><h4><a href="#">Status</a></h4></li>
              </ul>
            </div>
            <div className='col-4'>
              <h2>
                Human Resource Reports
              </h2>
              <br />
              <ul>
                <li><h4><a href="#">Recruitment and Selection</a></h4></li>
                <li><h4><a href="#">Compensations and Benefits</a></h4></li>
                <li><h4><a href="#">Training and development</a></h4></li>
                <li><h4><a href="#">Appraisal and Performance</a></h4></li>
                <li><h4><a href="#">Disciplinary Actions</a></h4></li>
                <li><h4><a href="#">Leave Planning</a></h4></li>
                <li><h4><a href="#">Medical</a></h4></li>
              </ul>
            </div>
            <div className='col-4'>
              <h2>
                Payroll Reports 
              </h2>
              <br />
              <ul>
                <li><h4><a href="#">Transaction History</a></h4></li>
                <li><h4><a href="#">Payslip</a></h4></li>
                <li><h4><a href="#">Journal</a></h4></li>
                <li><h4><a href="#">Basic Pay Reconciliation</a></h4></li>
                <li><h4><a href="#">Bank Summary</a></h4></li>
                <li><h4><a href="#">Analysis</a></h4></li>
                <li><h4><a href="#">Statutory  Reports</a></h4></li>
                <li><h4><a href="#">Loans</a></h4></li>
              </ul>
            </div>
            
          </div>
          
    
      </KTCardBody>
    </div>
  )
}

export {AllReports}
