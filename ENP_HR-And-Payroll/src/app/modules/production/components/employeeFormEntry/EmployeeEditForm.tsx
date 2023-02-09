
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./formStyle.css"
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Space, Table, Upload } from 'antd';
import { CATEGORY, DEPARTMENTS, DIVISION, employeedata, GRADES, NOTCHES, UNITS } from '../../../../data/DummyData';
import { KTSVG } from '../../../../../_metronic/helpers';

const EmployeeEditForm= () =>{
  const [formData, setFormData] = useState({});
  const [activeTab, setActiveTab] = useState('tab1');


  const param:any  = useParams();

  const handleTabClick = (tab:any) => {
    setActiveTab(tab);
  }

  const handleChange = (event:any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const recruitColumns: any = [
   
    {
      title: 'Code',
      dataIndex: 'code',
      sorter: (a: any, b: any) => {
        if (a.code > b.code) {
          return 1
        }
        if (b.code > a.code) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a: any, b: any) => {
        if (a.name > b.name) {
          return 1
        }
        if (b.name > a.name) {
          return -1
        }
        return 0
      },
    },

    {
      title: 'Action',
      fixed: 'right',
      width: 100,
      render: (_: any, record: any) => (
        <Space size='middle'>
          
          
          <a className='btn btn-light-danger btn-sm'>
            Delete
          </a>
         
        </Space>
      ),
      
    },
  ]
  const compensationColumns: any = [
   
    {
      title: 'Period',
      dataIndex: 'code',
      sorter: (a: any, b: any) => {
        if (a.code > b.code) {
          return 1
        }
        if (b.code > a.code) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Compensation',
      dataIndex: 'name',
      sorter: (a: any, b: any) => {
        if (a.name > b.name) {
          return 1
        }
        if (b.name > a.name) {
          return -1
        }
        return 0
      },
    },

    {
      title: 'Action',
      fixed: 'right',
      width: 100,
      render: (_: any, record: any) => (
        <Space size='middle'>
          
          
          <a className='btn btn-light-danger btn-sm'>
            Delete
          </a>
         
        </Space>
      ),
      
    },
  ]

  const noteColumns: any = [
   
    {
      title: 'Code',
      dataIndex: 'code',
      sorter: (a: any, b: any) => {
        if (a.code > b.code) {
          return 1
        }
        if (b.code > a.code) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a: any, b: any) => {
        if (a.name > b.name) {
          return 1
        }
        if (b.name > a.name) {
          return -1
        }
        return 0
      },
    },

    {
      title: 'Action',
      fixed: 'right',
      width: 100,
      render: (_: any, record: any) => (
        <Space size='middle'>
          
          
          <a className='btn btn-light-danger btn-sm'>
            Delete
          </a>
         
        </Space>
      ),
      
    },
  ]

  const appraisalColumns: any = [
   
    {
      title: 'Code',
      dataIndex: 'code',
      sorter: (a: any, b: any) => {
        if (a.code > b.code) {
          return 1
        }
        if (b.code > a.code) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a: any, b: any) => {
        if (a.name > b.name) {
          return 1
        }
        if (b.name > a.name) {
          return -1
        }
        return 0
      },
    },

    {
      title: 'Action',
      fixed: 'right',
      width: 100,
      render: (_: any, record: any) => (
        <Space size='middle'>
          
          
          <a className='btn btn-light-danger btn-sm'>
            Delete
          </a>
         
        </Space>
      ),
      
    },
  ]

  const leaveColumns: any = [
   
    {
      title: 'Code',
      dataIndex: 'code',
      sorter: (a: any, b: any) => {
        if (a.code > b.code) {
          return 1
        }
        if (b.code > a.code) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a: any, b: any) => {
        if (a.name > b.name) {
          return 1
        }
        if (b.name > a.name) {
          return -1
        }
        return 0
      },
    },

    {
      title: 'Action',
      fixed: 'right',
      width: 100,
      render: (_: any, record: any) => (
        <Space size='middle'>
          
          
          <a className='btn btn-light-danger btn-sm'>
            Delete
          </a>
         
        </Space>
      ),
      
    },
  ]

  const medicalColumns: any = [
   
    {
      title: 'Code',
      dataIndex: 'code',
      sorter: (a: any, b: any) => {
        if (a.code > b.code) {
          return 1
        }
        if (b.code > a.code) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a: any, b: any) => {
        if (a.name > b.name) {
          return 1
        }
        if (b.name > a.name) {
          return -1
        }
        return 0
      },
    },

    {
      title: 'Action',
      fixed: 'right',
      width: 100,
      render: (_: any, record: any) => (
        <Space size='middle'>
          
          
          <a className='btn btn-light-danger btn-sm'>
            Delete
          </a>
         
        </Space>
      ),
      
    },
  ]
  const trainingColumns: any = [
   
    {
      title: 'Code',
      dataIndex: 'code',
      sorter: (a: any, b: any) => {
        if (a.code > b.code) {
          return 1
        }
        if (b.code > a.code) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a: any, b: any) => {
        if (a.name > b.name) {
          return 1
        }
        if (b.name > a.name) {
          return -1
        }
        return 0
      },
    },

    {
      title: 'Action',
      fixed: 'right',
      width: 100,
      render: (_: any, record: any) => (
        <Space size='middle'>
          
          
          <a className='btn btn-light-danger btn-sm'>
            Delete
          </a>
         
        </Space>
      ),
      
    },
  ]



  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log(formData);
    // Use the formData object to submit the data to your server
  
  }

  const dataByID = employeedata.find((employee:any) =>{
    return employee.code.toString() ===param.id
  });

  // console.log(dataByID)
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
        <a style={{fontSize:"16px", fontWeight: "500"}} className='mb-3 btn btn-outline btn-outline-dashed btn-outline-primary btn-active-light-primary'>
          Back to list
        </a>
      </Link>
      <form onSubmit={handleSubmit}>
        
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
            className={`tab ${activeTab === 'tab8' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab8')}
          >
            Skills & Qualifications
          </button>
          
          
          <button 
            className={`tab ${activeTab === 'tab7' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab7')}
          >
            Compensations
          </button>
          <button 
            className={`tab ${activeTab === 'tab6' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab6')}
          >
            Trainings
          </button>
          <button 
            className={`tab ${activeTab === 'tab9' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab9')}
          >
            Appraisals
          </button>
          <button 
            className={`tab ${activeTab === 'tab5' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab5')}
          >
            Notes
          </button>
          <button 
            className={`tab ${activeTab === 'tab10' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab10')}
          >
            Leaves
          </button>
          <button 
            className={`tab ${activeTab === 'tab11' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab11')}
          >
            Medicals & Family
          </button>
          
        </div>
        
        <div className="tab-content">
        
          {/* Details */}
          {activeTab === 'tab1' && 
          <div className='col-8'>
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
                <input type="text" name="fname" value={dataByID?.firstname}  className="form-control form-control-solid" />
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className="required form-label">Surname</label>
                <input type="text" name="mname" value={dataByID?.lastname} className="form-control form-control-solid" />
              </div>
            </div>

            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className="required form-label">Other Name</label>
                <input type="text" name="lname"  className="form-control form-control-solid" />
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className="required form-label">Date of Birth</label>
                <input type="date" name="dob"  className="form-control form-control-solid" />
              </div>
            </div>
            <div className='row mb-0'>
              
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Gender</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                <option value={dataByID?.sex}>{dataByID?.sex}</option>
                
                
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
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">National ID</label>
                <input type="text" name="dob" className="form-control form-control-solid" />
              </div>
            </div>

          </div>
          }

          {/* Communications */}
          {
          activeTab === 'tab2' && 
            <div className='col-8'>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Phone Number</label>
                  <input type="phone" name="phone"  className="form-control form-control-solid" />
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
          <div className='col-8'>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Pay Group</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  
                  <option value="1">MANAGEMENT</option>
                  <option value="2">CASUAL</option>
                  <option value="3">GENERAL</option>
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Category</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                 
                  {CATEGORY.map((item: any) => (
                    <option value={item.code}>{item.name}</option>
                  ))}
                </select>
              </div>
              
            </div>
            <div className='row mb-0'>
            <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Division</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                {/* <option>{dataByID?.region} </option> */}
                {DIVISION.map((item: any) => (
                    <option value={item.code}>{item.name}</option>
                  ))}
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Salary Grade</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>{dataByID?.grade} </option>
                  {GRADES.map((item: any) => (
                    <option value={item.code}>{item.name}</option>
                  ))}
                </select>
              </div>
              {/* <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Basic Salary</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">Ghc100</option>
                  <option value="2">Ghc400</option>
                  <option value="3">Ghc3000</option>
                </select>
              </div> */}
            </div>
            <div className='row mb-0'>
              
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Department</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  {/* <option>{dataByID?.depart} </option> */}
                  {DEPARTMENTS.map((item: any) => (
                    <option value={item.code}>{item.name}</option>
                  ))}
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Notch</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>{dataByID?.notch} </option>
                 
                  {NOTCHES.map((item: any) => (
                    <option value={item.code}>{item.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Unit</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                <option>{dataByID?.unit} </option>
                {UNITS.map((item: any) => (
                    <option value={item.code}>{item.name}</option>
                  ))}
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
          <div className='col-8'>
            <div className='row mb-0'>
              <div  className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Pay Type</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">MONTHLY</option>
                  <option value="2">WEEKLY</option>
                  <option value="3">HOURLY</option>
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
                <input type="text" name="account" value={dataByID?.accnum} className="form-control form-control-solid" />
              </div>
            </div>
            <div className='row mb-0'>
              
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">TIN </label>
                <input type="text" name="tin" onChange={handleChange}  className="form-control form-control-solid" />
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">SSN </label>
                <input type="text" name="ssn" onChange={handleChange}  className="form-control form-control-solid" />
              </div>
            </div>
            
          </div>
          }

          {/* Recruitment */}
          {activeTab === 'tab8' && 
            <div >
              <button style={{margin:"0px 0px 20px 0"}} type='button' className='btn btn-primary me-3'>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                Add
              </button>
              
              <Table columns={recruitColumns}  />
              {/* <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Date</label>
                  <input type="date" name="date" onChange={handleChange}  className="form-control form-control-solid" />

                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Note </label>
                  <input type="text" name="mnote" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
              </div> */}
            </div>}
          {/* Compensation */}
          {activeTab === 'tab7' && 
            <div >
              <Table columns={compensationColumns}  />
            </div>}

          {/* Trainings */}
          {activeTab === 'tab6' && 
            <div >
            <button style={{margin:"0px 0px 20px 0"}} type='button' className='btn btn-primary me-3'>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                Add
              </button>
              <Table columns={trainingColumns}  />
              {/* <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Date</label>
                  <input type="date" name="date" onChange={handleChange}  className="form-control form-control-solid" />

                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Note </label>
                  <input type="text" name="tnote" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
              </div> */}
            </div>
            }

            {/* Appraisal */}
          {activeTab === 'tab9' && 
            <div >
              <button style={{margin:"0px 0px 20px 0"}} type='button' className='btn btn-primary me-3'>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                Add
              </button>
              <Table columns={appraisalColumns}  />

              {/* <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Date</label>
                  <input type="date" name="date" onChange={handleChange}  className="form-control form-control-solid" />

                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Note </label>
                  <input type="text" name="mnote" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
              </div> */}
            </div>}

              {/* Notes */}
          {activeTab === 'tab5' && 
          <div >
            <button style={{margin:"0px 0px 20px 0"}} type='button' className='btn btn-primary me-3'>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                Add
              </button>
              <Table columns={recruitColumns}  />
            
          </div>
          }

            {/* Leave */}
          {activeTab === 'tab10' && 
            <div >
              <button style={{margin:"0px 0px 20px 0"}} type='button' className='btn btn-primary me-3'>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                Add
              </button>
              <Table columns={leaveColumns}  />

              {/* <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Date</label>
                  <input type="date" name="date" onChange={handleChange}  className="form-control form-control-solid" />

                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Note </label>
                  <input type="text" name="mnote" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
              </div> */}
            </div>}

            {/* Medical */}
          {activeTab === 'tab11' && 
            <div >
              <button style={{margin:"0px 0px 20px 0"}} type='button' className='btn btn-primary me-3'>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                Add
              </button>
              <Table columns={medicalColumns}  />

              {/* <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Date</label>
                  <input type="date" name="date" onChange={handleChange}  className="form-control form-control-solid" />

                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Note </label>
                  <input type="text" name="mnote" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
              </div> */}
            </div>}
        </div>

        <button className='btn btn-primary' type="submit">Submit</button>
      </form>
    </div>
  );
}


export  {EmployeeEditForm}