import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../employeeFormEntry/formStyle.css"
import { BenefitTab } from './recurrentTabs/BenefitTab';
import { DeductionTab } from './recurrentTabs/DeductionTab';

const Recurrent= () =>{
  const [formData, setFormData] = useState({});
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab:any) => {
    setActiveTab(tab);
  }

  const handleChange = (event:any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log(formData);
    // Use the formData object to submit the data to your server
  
  }

  const handleTabChange = (newTab:any) => {
    setActiveTab(newTab);
  }

  return (
    <div
    className="col-12"
      style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '5px',
     
        boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
      }}
    >


      
      {/* <Link to="/employee">
        <a style={{fontSize:"16px", fontWeight: "500"}} className='btn btn-primary btn-sm mb-7'>
          Back to list
        </a>
      </Link> */}
      <form onSubmit={handleSubmit}>
        
        <div className="tabs">
          
          <button 
            className={`tab ${activeTab === 'tab1' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab1')}
          >
            Benefit
          </button>
          <button 
            className={`tab ${activeTab === 'tab2' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab2')}
          >
            Deduction
          </button>
         
          
          
        </div>
              
        <div className="tab-content">

          {/* Details */}
          {activeTab === 'tab1' && 
          <div>
            <BenefitTab/>
            </div>
            }

          {/* Communications */}
          {
          activeTab === 'tab2' && 
            <div>
              <DeductionTab/>
              
            </div>
          }

        </div>
        {/* <button className='btn btn-primary' type="submit">Submit</button> */}
      </form>
    </div>
  );
}


export  {Recurrent}