
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./formStyle.css"
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import { BANKS, CATEGORY, DEPARTMENTS, DIVISION, GRADES, NOTCHES, NOTES, PAYGROUP, UNITS } from '../../../../data/DummyData';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Api_Endpoint, fetchCategories, fetchDepartments, fetchDivisions, fetchGrades, fetchNationalities, fetchNotches, fetchPaygroups, fetchUnits } from '../../../../services/ApiCalls';
import { useQuery } from 'react-query';
import {useNavigate, Navigate } from 'react-router-dom';

const MultiTabForm= () =>{
  const [formData, setFormData] = useState({});
  const [activeTab, setActiveTab] = useState('tab1');
  const {register, reset, handleSubmit} = useForm();
  const [loading, setLoading] = useState(false)
  const [submitLoading, setSubmitLoading] = useState(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<any>(null);
  const handleTabClick = (tab:any) => {
    setActiveTab(tab);
  }

  const navigate = useNavigate();

  const {data:allDepartments} = useQuery('departments', fetchDepartments, {cacheTime:5000})
  const {data:allDivisions} = useQuery('divisions', fetchDivisions, {cacheTime:5000})
  const {data:allCategories} = useQuery('categories', fetchCategories, {cacheTime:5000})
  const {data:allPaygroups} = useQuery('paygroups', fetchPaygroups, {cacheTime:5000})
  const {data:allUnits} = useQuery('units', fetchUnits, {cacheTime:5000})
  const {data:allGrades} = useQuery('grades', fetchGrades, {cacheTime:5000})
  const {data:allNotches} = useQuery('notches', fetchNotches, {cacheTime:5000})
  const {data:allNations} = useQuery('nations', fetchNationalities, {cacheTime:5000})

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

    const url = `${Api_Endpoint}/Employees1`
    const OnSUbmit = handleSubmit( async (values, event)=> {
      event?.preventDefault();
      setLoading(true)
      const data = {
        firstName: values.firstName,
        surname: values.surname,
        otherName: values.otherName,
        dob: values.dob,
        gender: values.gender,
        maritalStatus: values.maritalStatus,
        nationality: values.nationalId,
        nationalId: values.nationalId,
        phone: values.phone,
        alternativePhone: values.alternativePhone,
        address: values.address,
        residentialAddress: values.residentialAddress,
        email: values.email,
        personalEmail: values.personalEmail,
        nextOfKin: values.nextOfKin,
        guarantor: values.guarantor,
        paygroupId: parseInt(values.paygroupId),
        categoryId: parseInt(values.categoryId),
        divisionId: parseInt(values.divisionId),
        departmentId: parseInt(values.departmentId),
        gradeId: parseInt(values.gradeId),
        notchId: parseInt(values.notchId),
        employmentDate: values.employmentDate,
        payType: values.payType,
        paymentMethod: selectedPaymentMethod,
        bankId: parseInt(values.bankId),
        account: values.account,
        tin: values.tin,
        ssf: values.ssf,
          }
          console.log(data)
      try {
        console.log(data)
        const response = await axios.post(url, data)
        setSubmitLoading(false)
        reset()
        navigate('/employee', {replace: true})
        // loadData()
        // console.log(response.status) response.status===201? <Navigate to="/employee"/>: 
        return response.statusText
      } catch (error: any) {
        setSubmitLoading(false)
        return error.statusText
      }
    })
  

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
        <a style={{fontSize:"16px", fontWeight: "500"}} className='mb-7 btn btn-outline btn-outline-dashed btn-outline-primary btn-active-light-primary'>
          Back to list
        </a>
      </Link>
      
       
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
        
          
        </div>
        <form onSubmit={OnSUbmit}>
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
              <input type="text"  {...register("firstName")}  className="form-control form-control-solid" />
              </div>
              <div className='col-6 mb-7'>
              <label htmlFor="exampleFormControlInput1" className="required form-label">Surname</label>
              <input type="text" {...register("surname")}  className="form-control form-control-solid" />
              </div>
            </div>

            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className="required form-label">Other Name</label>
                <input type="text" {...register("otherName")}  className="form-control form-control-solid" />
              </div>
              <div className='col-6 mb-7'>
              <label htmlFor="exampleFormControlInput1" className="required form-label">Date of Birth</label>
                <input type="date" {...register("dob")}  className="form-control form-control-solid" />
              </div>
            </div>
            <div className='row mb-0'>
              
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Gender</label>
                  <select {...register("gender")} className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="MALE">MALE</option>
                  <option value="FEMALE">FEMALE</option>
                 
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Marital Status</label>
                  <select {...register("maritalStatus")} className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="SINGLE">SINGLE</option>
                  <option value="MARRIED">MARRIED</option>
                 
                </select>
              </div>
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Nationality</label>
                  <select {...register("nationality")} className="form-select form-select-solid" aria-label="Select example">
                    <option >select</option>
                    {allNations?.data.map((item: any) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">National ID</label>
                <input type="text" {...register("nationalId")} className="form-control form-control-solid" /> 
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
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Phone Number</label>
                  <input type="phone" {...register("phone")}  className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Alternative Phone number</label>
                  <input type="phone" {...register("alternativePhone")}  className="form-control form-control-solid" />
                </div>
              </div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Address</label>
                  <input type="text" {...register("address")}  className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Residential Address</label>
                  <input type="text" {...register("residentialAddress")}  className="form-control form-control-solid" />
                </div>
              </div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Email</label>
                  <input type="email" {...register("email")}   className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Personal Email</label>
                  <input type="email" {...register("personalEmail")}  className="form-control form-control-solid" />
                </div>
              </div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Next of kin</label>
                  <input type="text" {...register("nextOfKin")}  className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Guarantor</label>
                  <input type="text" {...register("guarantor")}  className="form-control form-control-solid" />
                </div>
              </div>
            </div>
          }
          {/* Administration */}
          {activeTab === 'tab3' && 
          <div className='col-12'>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Pay Group</label>
                  <select {...register("paygroupId")} className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  {allPaygroups?.data.map((item: any) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Category</label>
                  <select {...register("categoryId")} className="form-select form-select-solid" aria-label="Select example">
                    <option>select </option>
                    {allCategories?.data.map((item: any) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                </select>
              </div>
            </div>
            <div className='row mb-0'>
            <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Division</label>
                <select {...register("divisionId")} className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  {allDivisions?.data.map((item: any) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Salary Grade</label>
                  <select {...register("gradeId")} className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  {allGrades?.data.map((item: any) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
              
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Department</label>
                  <select {...register("departmentId")} className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  {allDepartments?.data.map((item: any) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Notch</label>
                  <select {...register("notchId")} className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  {allNotches?.data.map((item: any) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Unit</label>
                <select {...register("unitId")} className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  {allUnits?.data.map((item: any) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
              <div className='col-3 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Employment Date</label>
                <input type="date" {...register("employmentDate")}  className="form-control form-control-solid" />

              </div>
              
            </div>
            <div className='row mb-0'>
              <div className='col-12 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Job Roles</label>
                <textarea style={{margin: "10px 0px 0 0px"}} {...register("jobRole")} className="form-control form-control-solid" placeholder='list job roles (seperate each role with a comma)' aria-label="With textarea"></textarea>

              </div>
            </div>
          </div>}

          {/* Payroll */}
          {activeTab === 'tab4' && 
          <div className='col-8'>
            <div className='row mb-0'>
              <div  className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Pay Type</label>
                <select {...register("payType")} className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="MONTHLY">MONTHLY</option>
                  <option value="WEEKLY">WEEKLY</option>
                  <option value="HOURLY">HOURLY</option>
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Payment Method</label>
                <select value={selectedPaymentMethod} onChange={(e) => setSelectedPaymentMethod(e.target.value)} className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="BANK">BANK</option>
                  <option value="CASH">CASH</option>
                  
                </select>

              </div>
            </div>
            {
              selectedPaymentMethod==="BANK"?
              <div className='row mb-0'>
              <div  className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Bank</label>
                <br></br>
                {/* <span>(leave empty if you selected cash as payment method)</span> */}
                <select {...register("bankId")} className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  {BANKS.map((item: any) => (
                    <option value={item.code}>{item.branch}</option>                 ))}
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Account  </label>
                <br></br>
                {/* <span>(leave empty if you selected cash as payment method)</span> */}
                <input type="text" {...register("account")}  className="form-control form-control-solid" />
              </div>
            </div>:
              ""
            }
            
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">TIN </label>
                <input type="text" {...register("tin")}  className="form-control form-control-solid" />
              </div>
              <div  className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">SSF</label>
                <select {...register("ssf")} className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              
            </div>
            
          </div>
          }
          
        </div>
        <button className='btn btn-primary' onClick={OnSUbmit} type="submit">Submit</button>
      </form>
    </div>
  );
}


export  {MultiTabForm}