import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../employeeFormEntry/formStyle.css"
import { NonRecurrentBenefitTab } from './nonrecurrentTabs/NonRecurrentBenefitTab';
import { NonRecurrentDeductionTab } from './nonrecurrentTabs/NonRecurrentDeductionTab';
import { BenefitTab } from './recurrentTabs/BenefitTab';
import { DeductionTab } from './recurrentTabs/DeductionTab';

const NonRecurrent= () =>{
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
      <div style={{padding: "20px 0px 30px 0px"}} className="row" >
          <div className='col-4 mb-7'>
            <label htmlFor="exampleFormControlInput1" className=" form-label">Paygroup</label>
            <select className="form-select form-select-solid" aria-label="Select example">
              <option> select</option>
              <option value="1">test1 </option>
              <option value="2">test2 </option>
            </select>
          </div>

          <div className='col-4 mb-7'>
            <label htmlFor="exampleFormControlInput1" className=" form-label">Department</label>
            <select className="form-select form-select-solid" aria-label="Select example">
              <option> select</option>
              <option value="1">test1 </option>
              <option value="2">test2 </option>
            </select>
          </div>
          <div className='col-4 mb-7'>
            <label htmlFor="exampleFormControlInput1" className=" form-label">Employee</label>
            <select className="form-select form-select-solid" aria-label="Select example">
              <option> select</option>
              <option value="1">test1 </option>
              <option value="2">test2 </option>
            </select>
          </div>
        </div>
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
            <NonRecurrentBenefitTab/>
            </div>
            }

          {/* Communications */}
          {
          activeTab === 'tab2' && 
            <div>
              <NonRecurrentDeductionTab/>
              
            </div>
          }

        </div>
        {/* <button className='btn btn-primary' type="submit">Submit</button> */}
      </form>
    </div>
  );
}


export  {NonRecurrent}
