import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./formStyle.css"
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Modal, Space, Table, Upload } from 'antd';
import { BANKS, CATEGORY, DEPARTMENTS, DIVISION, employeedata, GRADES, MEDICALS, NOTCHES, UNITS } from '../../../../data/DummyData';
import { KTSVG } from '../../../../../_metronic/helpers';

const EmployeeEditForm= () =>{
  const [formData, setFormData] = useState({});
  const [activeTab, setActiveTab] = useState('tab1');
  const [activeTab1, setActiveTab1] = useState('skill');
  const [activeTab2, setActiveTab2] = useState('medical');
  const [skillOpen, setSkillOpen] = useState(false)
  const [qualificationOpen,setQualificationOpen] = useState(false)
  const [experienceOpen,setExperienceOpen] = useState(false)
  const [medicalOpen,setMedicalOpen] = useState(false)
  const [familyOpen,setFamilyOpen] = useState(false)
  const [trainingOpen,setTrainingOpen] = useState(false)
  const [leaveOpen,setLeaveOpen] = useState(false)
  const [appraisalOpen,setAppraisalOpen] = useState(false)
  const [noteOpen,setNoteOpen] = useState(false)
  // const [form] = Form.useForm()
  const [img, setImg] = useState();
  // const { register, handleSubmit } = useForm();
  const param:any  = useParams();

  const handleTabClick = (tab:any) => {
    setActiveTab(tab);
  }
  const handleTab1Click = (tab1:any) => {
    setActiveTab1(tab1);
  }
  const handleTab2Click = (tab2:any) => {
    setActiveTab2(tab2);
  }

  const handleChange = (event:any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const showSkillModal = () => {
    setSkillOpen(true)
  }
  const showQualificationModal = () => {
    setQualificationOpen(true)
  }
  const showExperienceModal = () => {
    setExperienceOpen(true)
  }
  const showMedicalModal = () => {
    setMedicalOpen(true)
  }
  const showFamilyModal = () => {
    setFamilyOpen(true)
  }

  const showTrainingModal = () => {
    setTrainingOpen(true)
  }

  const showLeaveModal = () => {
    setLeaveOpen(true)
  }

  const showAppraisalModal = () => {
    setAppraisalOpen(true)
  }
  const showNoteModal = () => {
    setNoteOpen(true)
  }

  const handleCancel = () => {
    setSkillOpen(false)
    setQualificationOpen(false)
    setMedicalOpen(false)
    setFamilyOpen(false)
    setTrainingOpen(false)
    setLeaveOpen(false)
    setAppraisalOpen(false)
    setNoteOpen(false)
    setExperienceOpen(false)

  }

  const [submitLoading, setSubmitLoading] = useState(false)

  const familyColumns: any = [
   
    {
      title: 'National ID',
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
      title: 'Full Name',
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
      title: 'Relationship',
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
      title: 'Date of Birth',
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
      title: 'Phone Number',
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
      title: 'Address',
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
      title: 'Note',
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
      title: 'Medical Type',
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
      title: 'Date',
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
      title: 'Comment',
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


  // validates input field to accept only numbers
  const validatePhoneNumber=(event:any)=>{
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
                  
  }

  const dataByID = employeedata.find((employee:any) =>{
    return employee.code.toString() ===param.id
  });

  const fetchImage = async () => {
    const res = await fetch("https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80");
    const imageBlob = await res.blob();
    const imageObjectURL:any  = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  const [fileList, setFileList] = useState<UploadFile[]>([
    
  ]);

  useEffect(() => {
    // loadData()
    fetchImage()
  }, [])

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


      <h3> You are updating <span style={{color:"#FF6363"}}>  {dataByID?.firstname} {dataByID?.lastname}</span></h3>
      <br></br>
      <Link to="/employee">
        <a style={{fontSize:"16px", fontWeight: "500"}} className='mb-7 btn btn-outline btn-outline-dashed btn-outline-primary btn-active-light-primary'>
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
        <hr></hr>
        <br></br>
        <div className="tab-content">
        
          {/* Details */}
          {activeTab === 'tab1' && 
          <div className='col-8'>
            <div className='row mb-0'>
             
                
              
              <div className='col-6 mb-7'>
                <img style={{borderRadius:"10px"}} src={img} width={100} height={100}></img>
                {/* <Upload
                      
                  listType="picture-card"
                  // fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                > 
                  <UploadOutlined />
                </Upload> */}
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
                  <input type="phone" name="tel" pattern="[0-9]*" className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Alternative Phone number</label>
                  <input type="phone" name="tel" maxLength={15} onKeyPress={validatePhoneNumber} onChange={handleChange}  className="form-control form-control-solid" />
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
                
                <br></br>
                <span>(leave empty if you selected cash as payment method)</span>
                <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  {BANKS.map((item: any) => (
                    <option value={item.code}>{item.branch}</option>
                  ))}
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

          {/* skills & qualifications */}
          {activeTab === 'tab8' && 
            <div >
              {/* tabs for skills and qualification */}
              <div className="tab1s">
                
                <button 
                  className={`tab1 ${activeTab1 === 'skill' ? 'active' : ''}`} 
                  onClick={() => handleTab1Click('skill')}
                >
                  Skills
                </button>
                <button 
                  className={`tab1 ${activeTab1 === 'qual' ? 'active' : ''}`} 
                  onClick={() => handleTab1Click('qual')}
                >
                  Qualifications
                </button>
                <button 
                  className={`tab1 ${activeTab1 === 'exper' ? 'active' : ''}`} 
                  onClick={() => handleTab1Click('exper')}
                >
                  Experiences
                </button>
              </div>
              {/* <hr></hr> */}
              <br></br> 
              <div className='tab1-content'>
                  {activeTab1 === 'skill' && 
                    <div >
                      
                      <button style={{margin:"0px 0px 20px 0"}} type='button' className='btn btn-primary me-3' onClick={showSkillModal}>
                        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                        Add Skill
                      </button>
              
                      <Table columns={recruitColumns}  />
                      <Modal
                        title="Add skill"
                        open={skillOpen}
                        onCancel={handleCancel}
                        closable={true}
                        footer={[
                            <Button key='back' onClick={handleCancel}>
                                Cancel
                            </Button>,
                            <Button
                            key='submit'
                            type='primary'
                            htmlType='submit'
                            loading={submitLoading}
                            onClick={() => {
                             
                            }}
                            >
                                Submit
                            </Button>,
                        ]}
                      >
                        <Form
                            labelCol={{span: 7}}
                            wrapperCol={{span: 14}}
                            layout='horizontal'
                            name='control-hooks'
                            
                        >
                          <hr></hr>
                          <div style={{padding: "20px 20px 20px 20px"}} className='row mb-0 '>
                            <div className=' mb-7'>
                              <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                              <input type="text" name="name"  className="form-control form-control-solid"/>
                            </div>
                            
                          </div>
                        </Form>
                      </Modal> 
                    </div>}
                  {activeTab1 === 'qual' && 
                    <div >
                      

                      

                      <button style={{margin:"0px 0px 20px 0"}} type='button' className='btn btn-primary me-3' onClick={showQualificationModal}>
                        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                        Add Qualification
                      </button>
              
                      <Table columns={recruitColumns}  /> 
                      <Modal
                        title="Add Qualification"
                        open={qualificationOpen}
                        onCancel={handleCancel}
                        closable={true}
                        footer={[
                            <Button key='back' onClick={handleCancel}>
                                Cancel
                            </Button>,
                            <Button
                            key='submit'
                            type='primary'
                            htmlType='submit'
                            loading={submitLoading}
                            onClick={() => {
                              
                            }}
                            >
                                Submit
                            </Button>,
                        ]}
                      >
                        <Form
                            labelCol={{span: 7}}
                            wrapperCol={{span: 14}}
                            layout='horizontal'
                            name='control-hooks'
                            
                        >
                          <hr></hr>
                          <div style={{padding: "20px 20px 20px 20px"}} className='row mb-0 '>
                            <div className=' mb-7'>
                              <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                              <input type="text" name="name"  className="form-control form-control-solid"/>
                            </div>
                            
                          </div>
                        </Form>
                      </Modal>
                    </div>}
                  {activeTab1 === 'exper' && 
                    <div >
                      

                      

                      <button style={{margin:"0px 0px 20px 0"}} type='button' className='btn btn-primary me-3' onClick={showExperienceModal}>
                        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                        Add Experience
                      </button>
              
                      <Table columns={recruitColumns}  /> 
                      <Modal
                        title="Add Experience"
                        open={experienceOpen}
                        onCancel={handleCancel}
                        closable={true}
                        footer={[
                            <Button key='back' onClick={handleCancel}>
                                Cancel
                            </Button>,
                            <Button
                            key='submit'
                            type='primary'
                            htmlType='submit'
                            loading={submitLoading}
                            onClick={() => {
                              
                            }}
                            >
                                Submit
                            </Button>,
                        ]}
                      >
                        <Form
                            labelCol={{span: 7}}
                            wrapperCol={{span: 14}}
                            layout='horizontal'
                            name='control-hooks'
                            
                        >
                          <hr></hr>
                          <div style={{padding: "20px 20px 20px 20px"}} className='row mb-0 '>
                            <div className=' mb-7'>
                              <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                              <input type="text" name="name"  className="form-control form-control-solid"/>
                            </div>
                            
                          </div>
                        </Form>
                      </Modal>
                    </div>}
                </div>
              
            
            </div>
          }

          {/* Compensation */}
          {activeTab === 'tab7' && 
            <div >
              <Table columns={compensationColumns}  />
            </div>}

          {/* Trainings */}
          {activeTab === 'tab6' && 
            <div >
            <button style={{margin:"0px 0px 20px 0"}} type='button' className='btn btn-primary me-3' onClick={showTrainingModal}>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                Add
              </button>
              <Table columns={trainingColumns}  />
              <Modal
                  title="Add Training"
                  open={trainingOpen}
                  onCancel={handleCancel}
                  closable={true}
                  footer={[
                      <Button key='back' onClick={handleCancel}>
                          Cancel
                      </Button>,
                      <Button
                      key='submit'
                      type='primary'
                      htmlType='submit'
                      loading={submitLoading}
                      onClick={() => {
                        
                      }}
                      >
                          Submit
                      </Button>,
                  ]}
                >
                  <Form
                      labelCol={{span: 7}}
                      wrapperCol={{span: 14}}
                      layout='horizontal'
                      name='control-hooks'
                      
                  >
                    <hr></hr>
                    <div style={{padding: "20px 20px 20px 20px"}} className='row mb-0 '>
                      <div className=' mb-7'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" name="name"  className="form-control form-control-solid"/>
                      </div>
                      
                    </div>
                  </Form>
                </Modal>
            </div>
            }

            {/* Appraisal */}
          {activeTab === 'tab9' && 
            <div >
              <button style={{margin:"0px 0px 20px 0"}} type='button' className='btn btn-primary me-3' onClick={showAppraisalModal}>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                Add
              </button>
              <Table columns={appraisalColumns}  />
              <Modal
                  title="Add Appraisal"
                  open={appraisalOpen}
                  onCancel={handleCancel}
                  closable={true}
                  footer={[
                      <Button key='back' onClick={handleCancel}>
                          Cancel
                      </Button>,
                      <Button
                      key='submit'
                      type='primary'
                      htmlType='submit'
                      loading={submitLoading}
                      onClick={() => {
                        
                      }}
                      >
                          Submit
                      </Button>,
                  ]}
                >
                  <Form
                      labelCol={{span: 7}}
                      wrapperCol={{span: 14}}
                      layout='horizontal'
                      name='control-hooks'
                      
                  >
                    <hr></hr>
                    <div style={{padding: "20px 20px 20px 20px"}} className='row mb-0 '>
                      <div className=' mb-7'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" name="name"  className="form-control form-control-solid"/>
                      </div>
                      
                    </div>
                  </Form>
                </Modal>
             
            </div>}

              {/* Notes */}
          {activeTab === 'tab5' && 
          <div >
            <button style={{margin:"0px 0px 20px 0"}} type='button' className='btn btn-primary me-3' onClick={showNoteModal}>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                Add
              </button>
              <Table columns={recruitColumns}  />
              <Modal
                  title="Add Note"
                  open={noteOpen}
                  onCancel={handleCancel}
                  closable={true}
                  footer={[
                      <Button key='back' onClick={handleCancel}>
                          Cancel
                      </Button>,
                      <Button
                      key='submit'
                      type='primary'
                      htmlType='submit'
                      loading={submitLoading}
                      onClick={() => {
                        
                      }}
                      >
                          Submit
                      </Button>,
                  ]}
                >
                  <Form
                      labelCol={{span: 7}}
                      wrapperCol={{span: 14}}
                      layout='horizontal'
                      name='control-hooks'
                      
                  >
                    <hr></hr>
                    <div style={{padding: "20px 20px 20px 20px"}} className='row mb-0 '>
                      <div className=' mb-7'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" name="name"  className="form-control form-control-solid"/>
                      </div>
                      
                    </div>
                  </Form>
                </Modal>
            
          </div>
          }

            {/* Leave */}
          {activeTab === 'tab10' && 
            <div >
              <button style={{margin:"0px 0px 20px 0"}} type='button' className='btn btn-primary me-3' onClick={showLeaveModal}>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                Add
              </button>
              <Table columns={leaveColumns}  />

              <Modal
                  title="Add Leave"
                  open={leaveOpen}
                  onCancel={handleCancel}
                  closable={true}
                  footer={[
                      <Button key='back' onClick={handleCancel}>
                          Cancel
                      </Button>,
                      <Button
                      key='submit'
                      type='primary'
                      htmlType='submit'
                      loading={submitLoading}
                      onClick={() => {
                        
                      }}
                      >
                          Submit
                      </Button>,
                  ]}
                >
                  <Form
                      labelCol={{span: 7}}
                      wrapperCol={{span: 14}}
                      layout='horizontal'
                      name='control-hooks'
                      
                  >
                    <hr></hr>
                    <div style={{padding: "20px 20px 20px 20px"}} className='row mb-0 '>
                      <div className=' mb-7'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" name="name"  className="form-control form-control-solid"/>
                      </div>
                      
                    </div>
                  </Form>
                </Modal>
            </div>}

            {/* Medical */}
          {activeTab === 'tab11' && 
            <div >
               <div className="tab2s">
                
                <button
                  className={`tab2 ${activeTab2=== 'medical' ? 'active' : ''}`} 
                  onClick={() => handleTab2Click('medical')}
                >
                  Medical
                </button>
                <button 
                  className={`tab2 ${activeTab2 === 'fam' ? 'active' : ''}`} 
                  onClick={() => handleTab2Click('fam')}
                >
                  Family
                </button>
              </div>
                <br></br>
              <div className='tab2-content'>
                {activeTab2 === 'medical' && 
                <div >
                  
                  <button style={{margin:"0px 0px 20px 0"}} type='button' className='btn btn-primary me-3' onClick={showMedicalModal}>
                    <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                    Add New Medical
                  </button>
          
                  <Table columns={medicalColumns}  />
                  <Modal
                    title="Add Medical"
                    open={medicalOpen}
                    onCancel={handleCancel}
                    closable={true}
                    footer={[
                        <Button key='back' onClick={handleCancel}>
                            Cancel
                        </Button>,
                        <Button
                        key='submit'
                        type='primary'
                        htmlType='submit'
                        loading={submitLoading}
                        onClick={() => {
                          
                        }}
                        >
                            Submit
                        </Button>,
                    ]}
                  >
                    <Form
                        labelCol={{span: 7}}
                        wrapperCol={{span: 14}}
                        layout='horizontal'
                        name='control-hooks'
                        
                    >
                      <hr></hr>
                      <div style={{padding: "20px 20px 20px 20px"}} className='row mb-0 '>
                        <div className=' mb-7'>
                          <label htmlFor="exampleFormControlInput1" className="form-label">Medical Type</label>
                          <select className="form-select form-select-solid" aria-label="Select example">
                            <option> select</option>
                            {MEDICALS.map((item: any) => (
                              <option value={item.code}>{item.name}</option>
                            ))}
                          </select>
                        </div>
                        <div className=' mb-7'>
                          <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                          <input type="text" name="name"  className="form-control form-control-solid"/>
                        </div>
                        
                      </div>
                    </Form>
                  </Modal> 
                </div>}
                {activeTab2 === 'fam' && 
                <div >
                  
                  <button style={{margin:"0px 0px 20px 0"}} type='button' className='btn btn-primary me-3' onClick={showFamilyModal}>
                    <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                    Add New Family 
                  </button>
          
                  <Table columns={familyColumns}  />
                  <Modal
                    title="Add Family Member"
                    open={familyOpen}
                    onCancel={handleCancel}
                    closable={true}
                    width={800}
                    footer={[
                        <Button key='back' onClick={handleCancel}>
                            Cancel
                        </Button>,
                        <Button
                        key='submit'
                        type='primary'
                        htmlType='submit'
                        loading={submitLoading}
                        onClick={() => {
                          
                        }}
                        >
                            Submit
                        </Button>,
                    ]}
                  >
                    <Form
                        labelCol={{span: 7}}
                        wrapperCol={{span: 14}}
                        layout='horizontal'
                        name='control-hooks'
                        
                    >
                      <hr></hr>
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
                      <div style={{padding: "20px 20px 20px 20px"}} className='row mb-0 '>
                        <div className='col-6 mb-7'>
                          <label htmlFor="exampleFormControlInput1" className="form-label">National ID</label>
                          <input type="text" name="name"  className="form-control form-control-solid"/>
                        </div>
                        <div className='col-6 mb-7'>
                          <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                          <input type="text" name="name"  className="form-control form-control-solid"/>
                        </div>
                        
                      </div>
                      <div style={{padding: "0px 20px 20px 20px"}} className='row mb-0 '>
                        <div className='col-6 mb-7'>
                          <label htmlFor="exampleFormControlInput1" className="form-label">Relationship</label>
                          <select className="form-select form-select-solid" aria-label="Select example">
                            <option>select </option>
                            <option value="1">Spouse</option>
                            <option value="2">Parent</option>
                            <option value="3">Child</option>
                            <option value="3">Sibling</option>
                          </select>
                        </div>
                        <div className='col-6 mb-7'>
                          <label htmlFor="exampleFormControlInput1" className="form-label">Date od Birth</label>
                          <input type="date" name="name"  className="form-control form-control-solid"/>
                        </div>
                        
                      </div>
                      <div style={{padding: "0px 20px 20px 20px"}} className='row mb-0 '>
                        <div className='col-6 mb-7'>
                          <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
                          <input type="text" name="name"  className="form-control form-control-solid"/>
                        </div>
                        <div className='col-6 mb-7'>
                          <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                          <input type="text" name="name"  className="form-control form-control-solid"/>
                        </div>
                        
                      </div>
                      <div style={{padding: "0px 20px 20px 20px"}} className='row mb-0 '>
                        <div className=' mb-7'>
                          <label htmlFor="exampleFormControlInput1" className="form-label">Notes</label>
                          <textarea  name="note"  className="form-control form-control-solid"> </textarea>
                          {/* <textarea style={{margin: "10px 0px 0 0px"}} className="form-control form-control-solid"  aria-label="With textarea"></textarea> */}
                        </div>
                        
                        
                      </div>
                    </Form>
                  </Modal> 
                </div>}
              </div>
              
            </div>}
        </div>

        <button className='btn btn-primary' disabled type="submit">Submit</button>
      </form>
    </div>
  );
}


export  {EmployeeEditForm}