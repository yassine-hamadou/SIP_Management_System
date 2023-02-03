
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./formStyle.css"
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';

const MultiTabForm= () =>{
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

  const [fileList, setFileList] = useState<UploadFile[]>([
    
  ]);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

    // to preview the uploaded file
    const onPreview = async (file: UploadFile) => {
      let src = file.url as string;
      if (!src) {
        src = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj as RcFile);
          reader.onload = () => resolve(reader.result as string);
        });
      }
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow?.document.write(image.outerHTML);
    };
  

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
          {/* <button 
            className={`tab ${activeTab === 'tab5' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab5')}
          >
            Notes
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
          </button> */}
          
        </div>
        
        <div className="tab-content">
        
          {/* Details */}
          {activeTab === 'tab1' && 
          <div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <Upload
                      
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                > 
                  <UploadOutlined />
                </Upload>
              </div>
              
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
              <label htmlFor="exampleFormControlInput1" className="required form-label">First Name</label>
              <input type="text" name="fname" onChange={handleChange}  className="form-control form-control-solid" />
              </div>
              <div className='col-6 mb-7'>
              <label htmlFor="exampleFormControlInput1" className="required form-label">Surname</label>
              <input type="text" name="mname" onChange={handleChange}  className="form-control form-control-solid" />
              </div>
            </div>

            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className="required form-label">Other Name</label>
                <input type="text" name="lname" onChange={handleChange}  className="form-control form-control-solid" />
              </div>
              <div className='col-6 mb-7'>
              <label htmlFor="exampleFormControlInput1" className="required form-label">Date of Birth</label>
                <input type="date" name="dob" onChange={handleChange}  className="form-control form-control-solid" />
              </div>
            </div>
            <div className='row mb-0'>
              
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Gender</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">MALE</option>
                  <option value="2">FEMALE</option>
                 
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Marital Status</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">SINGLE</option>
                  <option value="2">MARRIED</option>
                 
                </select>
              </div>
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Nationality</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">GHANAIAN</option>
                  <option value="2">NIGERIAN</option>
                  <option value="3">TOGOLESE</option>
                  <option value="4">AMERICAN</option>
                  <option value="5">CANADIAN</option>
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
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Phone Number</label>
                  <input type="phone" name="phone" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Alternative Phone numbe</label>
                  <input type="phone" name="aphone" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
              </div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Address</label>
                  <input type="text" name="address" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Residential Address</label>
                  <input type="text" name="raddress" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
              </div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Email</label>
                  <input type="email" name="email" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Personal Email</label>
                  <input type="email" name="pemail" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
              </div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Next of kin</label>
                  <input type="text" name="email" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Guarantor</label>
                  <input type="text" name="guarantor" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
              </div>
            </div>
          }
          {/* Administration */}
          {activeTab === 'tab3' && 
          <div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Pay Group</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">MANAGEMENT</option>
                  <option value="2">CASUAL</option>
                  <option value="3">GENERAL</option>
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Notch</label>
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
                <label htmlFor="exampleFormControlInput1" className=" form-label">Salary Grade</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Basic Salary</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">Ghc100</option>
                  <option value="2">Ghc400</option>
                  <option value="3">Ghc3000</option>
                </select>
              </div>
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Category</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">PERMANENT</option>
                  <option value="2">SERVICE</option>
                  <option value="3">CONTRACT</option>
                  <option value="4">SENIOR STAFF</option>
                  <option value="5">JUNIOR STAFF</option>
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Department</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">HUMAN RESOURCES</option>
                  <option value="2">FACTORY</option>
                  <option value="3">ACCOUNTING AND FINANCE</option>
                  <option value="4">FACTORY</option>
                </select>
              </div>
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Division</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='col-3 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Employment Date</label>
                <input type="date" name="edate" onChange={handleChange}  className="form-control form-control-solid" />

              </div>
              <div className='col-3 mb-7'>
                <br></br>
             
                <a href="#" className="btn btn-danger"> Terminate</a>
              </div>
            </div>
            <div className='row mb-0'>
              {/* <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Termination Date</label>
                <input type="text" name="tdate" onChange={handleChange}  className="form-control form-control-solid" />

              </div> */}
              {/* <div className='col-6 mb-7'>
                <br></br>
             
                <a href="#" className="btn btn-danger"> Terminate</a>
              </div> */}
            </div>
          </div>}

          {/* Payroll */}
          {activeTab === 'tab4' && 
          <div>
            <div className='row mb-0'>
              <div  className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Salary Type</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Payment Method</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

              </div>
            </div>
            <div className='row mb-0'>
              <div  className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Bank</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Account </label>
                <input type="text" name="account" onChange={handleChange}  className="form-control form-control-solid" />
              </div>
            </div>
            <div className='row mb-0'>
              <div  className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">SSF</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">SSN </label>
                <input type="text" name="ssn" onChange={handleChange}  className="form-control form-control-solid" />
              </div>
            </div>
            <div className='row mb-0'>
              <div  className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Tax</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">TIN </label>
                <input type="text" name="tin" onChange={handleChange}  className="form-control form-control-solid" />
              </div>
            </div>
          </div>
          }
          {/* Disciplinary Actions */}
          {activeTab === 'tab5' && 
          <div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Date</label>
                <input type="date" name="date" onChange={handleChange}  className="form-control form-control-solid" />

              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Note </label>
                <input type="text" name="dnote" onChange={handleChange}  className="form-control form-control-solid" />
              </div>
            </div>
          </div>
          }

          {/* Trainings */}
          {activeTab === 'tab6' && 
            <div>
            
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Date</label>
                  <input type="date" name="date" onChange={handleChange}  className="form-control form-control-solid" />

                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Note </label>
                  <input type="text" name="tnote" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
              </div>
            </div>
            }

            {/* Medicals */}
          {activeTab === 'tab7' && 
            <div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Date</label>
                  <input type="date" name="date" onChange={handleChange}  className="form-control form-control-solid" />

                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Note </label>
                  <input type="text" name="mnote" onChange={handleChange}  className="form-control form-control-solid" />
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