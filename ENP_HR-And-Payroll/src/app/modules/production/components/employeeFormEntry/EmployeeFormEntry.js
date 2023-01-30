
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./formStyle.css"

const MultiTabForm= () =>{
  const [formData, setFormData] = useState({});
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Use the formData object to submit the data to your server
  
  }

  const handleTabChange = (newTab) => {
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


      
      <Link to="/employee">
        <a style={{fontSize:"16px", fontWeight: "500"}} className='btn btn-primary btn-sm mb-7'>
          Back to list
        </a>
      </Link>
      <form onSubmit={handleSubmit}>
        {/* <div className="tabs">
          <ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6">
            <li className="nav-item">
              <a  onClick={() => handleTabChange(1)} className={ activeTab === 1 ? 'active' : ''}>Tab 1</a>
            </li>
            <li className="nav-item">
              <button onClick={() => handleTabChange(2)} className={activeTab === 2 ? 'active' : ''}>Tab 2</button>
            </li>
            <li className="nav-item">
              <a onClick={() => handleTabChange(3)} className={activeTab === 3 ? 'active' : ''}>Tab 3</a>
            </li>
          
          </ul>
        </div> */}
        <div className="tabs">
          
          <button 
            className={`tab ${activeTab === 'tab1' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab1')}
          >
            Details
          </button>
          <button 
            className={`tab ${activeTab === 'tab2' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab2')}
          >
            Communication
          </button>
          <button 
            className={`tab ${activeTab === 'tab3' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab3')}
          >
            Administration
          </button>
          <button 
            className={`tab ${activeTab === 'tab4' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab4')}
          >
            Payroll
          </button>
          <button 
            className={`tab ${activeTab === 'tab5' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab5')}
          >
            Disciplinary Action
          </button>
          <button 
            className={`tab ${activeTab === 'tab6' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab6')}
          >
            Training
          </button>
          <button 
            className={`tab ${activeTab === 'tab7' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab7')}
          >
            Medicals
          </button>
          
        </div>
        {/* <div>
          <hr></hr>
        </div> */}
        {/* {activeTab === 1 && (
          <div className="tab-content">
            <input type="text" name="field1" onChange={handleChange} value={formData.field1 || ''} />
            <input type="text" name="field2" onChange={handleChange} value={formData.field2 || ''} />
          </div>
        )}
        {activeTab === 2 && (
          <div className="tab-content">
            <input type="text" name="field3" onChange={handleChange} value={formData.field3 || ''} />
            <input type="text" name="field4" onChange={handleChange} value={formData.field4 || ''} />
            <input type="text" name="field4" onChange={handleChange} value={formData.field4 || ''} />
            <input type="text" name="field4" onChange={handleChange} value={formData.field4 || ''} />
            <input type="text" name="field4" onChange={handleChange} value={formData.field4 || ''} />
            <input type="text" name="field4" onChange={handleChange} value={formData.field4 || ''} />
          </div>
        )}
        {activeTab === 3 && (
          <div className="tab-content">
            <input type="text" name="field5" onChange={handleChange} value={formData.field5 || ''} />
            <input type="text" name="field6" onChange={handleChange} value={formData.field6 || ''} />
          </div>
        )} */}
        <div className="tab-content">

          {/* Details */}
          {activeTab === 'tab1' && 
          <div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
              <label for="exampleFormControlInput1" class="required form-label">Firt Name</label>
              <input type="text" name="fname" onChange={handleChange} value={formData.field1 || ''} class="form-control form-control-solid" />
              </div>
              <div className='col-6 mb-7'>
              <label for="exampleFormControlInput1" class="required form-label">Middle Name</label>
              <input type="text" name="mname" onChange={handleChange} value={formData.field1 || ''} class="form-control form-control-solid" />
              </div>
            </div>

            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label for="exampleFormControlInput1" class="required form-label">Last Name</label>
                <input type="text" name="lname" onChange={handleChange} value={formData.field1 || ''} class="form-control form-control-solid" />
              </div>
              <div className='col-6 mb-7'>
              <label for="exampleFormControlInput1" class="required form-label">Date of Birth</label>
                <input type="date" name="dob" onChange={handleChange} value={formData.field1 || ''} class="form-control form-control-solid" />
              </div>
            </div>
            <div className='row mb-0'>
              
              <div className='col-6 mb-7'>
                <label for="exampleFormControlInput1" class=" form-label">Sex</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  {/* <option value="3">Three</option> */}
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label for="exampleFormControlInput1" class=" form-label">Marital Status</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">Single</option>
                  <option value="2">Married</option>
                  {/* <option value="3">Three</option> */}
                </select>
              </div>
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label for="exampleFormControlInput1" class=" form-label">Nationality</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            </div>
            }

          {/* Communications */}
          {
          activeTab === 'tab2' && 
            <div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label for="exampleFormControlInput1" class="required form-label">Phone Number</label>
                  <input type="phone" name="phone" onChange={handleChange} value={formData.field1 || ''} class="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label for="exampleFormControlInput1" class="required form-label">Alternative Phone numbe</label>
                  <input type="phone" name="aphone" onChange={handleChange} value={formData.field1 || ''} class="form-control form-control-solid" />
                </div>
              </div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label for="exampleFormControlInput1" class="required form-label">Address</label>
                  <input type="text" name="address" onChange={handleChange} value={formData.field1 || ''} class="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label for="exampleFormControlInput1" class="required form-label">Residential Address</label>
                  <input type="text" name="raddress" onChange={handleChange} value={formData.field1 || ''} class="form-control form-control-solid" />
                </div>
              </div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label for="exampleFormControlInput1" class="required form-label">Email</label>
                  <input type="text" name="email" onChange={handleChange} value={formData.field1 || ''} class="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label for="exampleFormControlInput1" class="required form-label">Personal Email</label>
                  <input type="text" name="pemail" onChange={handleChange} value={formData.field1 || ''} class="form-control form-control-solid" />
                </div>
              </div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label for="exampleFormControlInput1" class="required form-label">Next of kin</label>
                  <input type="text" name="email" onChange={handleChange} value={formData.field1 || ''} class="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label for="exampleFormControlInput1" class="required form-label">Guarantor</label>
                  <input type="text" name="guarantor" onChange={handleChange} value={formData.field1 || ''} class="form-control form-control-solid" />
                </div>
              </div>
            </div>
          }
          {/* Administration */}
          {activeTab === 'tab3' && 
          <div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label for="exampleFormControlInput1" class=" form-label">Pay Group</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label for="exampleFormControlInput1" class=" form-label">Notch</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label for="exampleFormControlInput1" class=" form-label">Salary Grade</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label for="exampleFormControlInput1" class=" form-label">Basic Salary</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label for="exampleFormControlInput1" class=" form-label">Category</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label for="exampleFormControlInput1" class=" form-label">Department</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label for="exampleFormControlInput1" class=" form-label">Division</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label for="exampleFormControlInput1" class=" form-label">Employment Date</label>
                <input type="text" name="edate" onChange={handleChange} value={formData.field1 || ''} class="form-control form-control-solid" />

              </div>
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label for="exampleFormControlInput1" class=" form-label">Termination Date</label>
                <input type="text" name="tdate" onChange={handleChange} value={formData.field1 || ''} class="form-control form-control-solid" />

              </div>
              <div className='col-6 mb-7'>
                <br></br>
             
                <a href="#" className="btn btn-danger"> Terminate</a>
              </div>
            </div>
          </div>}

          {/* Payroll */}
          {activeTab === 'tab4' && 
          <div>
            <div className='row mb-0'>
              <div div className='col-6 mb-7'>
                <label for="exampleFormControlInput1" class=" form-label">Salary Type</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label for="exampleFormControlInput1" class=" form-label">Payment Method</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

              </div>
            </div>
            <div className='row mb-0'>
              <div div className='col-6 mb-7'>
                <label for="exampleFormControlInput1" class=" form-label">Bank</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label for="exampleFormControlInput1" class=" form-label">Account </label>
                <input type="text" name="account" onChange={handleChange} value={formData.field1 || ''} class="form-control form-control-solid" />
              </div>
            </div>
            <div className='row mb-0'>
              <div div className='col-6 mb-7'>
                <label for="exampleFormControlInput1" class=" form-label">SSF</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label for="exampleFormControlInput1" class=" form-label">SSN </label>
                <input type="text" name="ssn" onChange={handleChange} value={formData.field1 || ''} class="form-control form-control-solid" />
              </div>
            </div>
            <div className='row mb-0'>
              <div div className='col-6 mb-7'>
                <label for="exampleFormControlInput1" class=" form-label">Tax</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

              </div>
              <div className='col-6 mb-7'>
                <label for="exampleFormControlInput1" class=" form-label">TIN </label>
                <input type="text" name="tin" onChange={handleChange} value={formData.field1 || ''} class="form-control form-control-solid" />
              </div>
            </div>
          </div>
          }
          {/* Disciplinary Actions */}
          {activeTab === 'tab5' && 
          <div>
            <div className='row mb-0'>
              <div div className='col-6 mb-7'>
                <label for="exampleFormControlInput1" class=" form-label">Date</label>
                <input type="date" name="date" onChange={handleChange} value={formData.field1 || ''} class="form-control form-control-solid" />

              </div>
              <div className='col-6 mb-7'>
                <label for="exampleFormControlInput1" class=" form-label">Note </label>
                <input type="text" name="dnote" onChange={handleChange} value={formData.field1 || ''} class="form-control form-control-solid" />
              </div>
            </div>
          </div>
          }

          {/* Trainings */}
          {activeTab === 'tab6' && 
            <div>
            
              <div className='row mb-0'>
                <div div className='col-6 mb-7'>
                  <label for="exampleFormControlInput1" class=" form-label">Date</label>
                  <input type="date" name="date" onChange={handleChange} value={formData.field1 || ''} class="form-control form-control-solid" />

                </div>
                <div className='col-6 mb-7'>
                  <label for="exampleFormControlInput1" class=" form-label">Note </label>
                  <input type="text" name="tnote" onChange={handleChange} value={formData.field1 || ''} class="form-control form-control-solid" />
                </div>
              </div>
            </div>
            }

            {/* Medicals */}
          {activeTab === 'tab7' && 
            <div>
              <div className='row mb-0'>
                <div div className='col-6 mb-7'>
                  <label for="exampleFormControlInput1" class=" form-label">Date</label>
                  <input type="date" name="date" onChange={handleChange} value={formData.field1 || ''} class="form-control form-control-solid" />

                </div>
                <div className='col-6 mb-7'>
                  <label for="exampleFormControlInput1" class=" form-label">Note </label>
                  <input type="text" name="mnote" onChange={handleChange} value={formData.field1 || ''} class="form-control form-control-solid" />
                </div>
              </div>
            </div>}
        </div>
        <button className='btn btn-primary' type="submit">Submit</button>
      </form>
    </div>
  );
}


export  {MultiTabForm}