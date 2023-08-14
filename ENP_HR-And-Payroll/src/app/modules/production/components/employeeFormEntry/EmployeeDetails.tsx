/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./formStyle.css"
import { Api_Endpoint, fetchCategories, fetchDepartments, fetchDivisions, fetchEmployees, fetchExperiences, fetchGrades, fetchJobTitles, fetchNationalities, fetchNotches, fetchPaygroups, fetchQualifications, fetchSkills, fetchUnits } from '../../../../services/ApiCalls';

import { useQuery } from 'react-query';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const EmplyeeDetails= () =>{
  const param:any  = useParams();
  const [tempData, setTempData]= useState<any>()
  const [graName, setGraName] = useState<any>()
  const [depName, setDepName] = useState<any>()
  const [divName, setDivName] = useState<any>()
  const [jobTName, setJobTName] = useState<any>()
  const [uniName, setUniName] = useState<any>()
  const [paygName, setPaygName] = useState<any>()
  const [catName, setCatName] = useState<any>()
  const [notchName, setNotchName] = useState<any>()
  const [nation, setNation] = useState<any>()
  const tenantId = localStorage.getItem('tenant')
  const [tempImage, setTempImage] = useState<any>();


  const onFileChange = (e:any) => {
    // Update the state
    setTempImage(e.target.files[0] );
   
  };


  const {data:allEmployees} = useQuery('employees',()=> fetchEmployees(tenantId), {cacheTime:5000})
  const {data:allDepartments} = useQuery('departments',()=> fetchDepartments(tenantId), {cacheTime:5000})
  const {data:allDivisions} = useQuery('divisions',()=> fetchDivisions(tenantId), {cacheTime:5000})
  const {data:allCategories} = useQuery('categories', ()=>fetchCategories(tenantId), {cacheTime:5000})
  const {data:alPaygroups} = useQuery('paygroups',()=> fetchPaygroups(tenantId), {cacheTime:5000})
  const {data:allUnits} = useQuery('units',()=> fetchUnits(tenantId), {cacheTime:5000})
  const {data:allGrades} = useQuery('grades',()=> fetchGrades(tenantId), {cacheTime:5000})
  const {data:allNotches} = useQuery('notches',()=> fetchNotches(tenantId), {cacheTime:5000})
  const {data:allNations} = useQuery('nations',()=> fetchNationalities(tenantId), {cacheTime:5000})
  const {data:allSkills} = useQuery('skill',()=> fetchSkills(tenantId), {cacheTime:5000})
  const {data:allQualifications} = useQuery('qualifications',()=> fetchQualifications(tenantId), {cacheTime:5000})
  const {data:allExperiences} = useQuery('experiences',()=> fetchExperiences(tenantId), {cacheTime:5000})
  const {data:allJobTitles} = useQuery('jobtitle',()=> fetchJobTitles(tenantId), {cacheTime:5000})

  useEffect(()=>{

    const getDepartmentName = () => {
      let departmentName = null
      allDepartments?.data.map((item: any) => {
        if (item.id === tempData?.departmentId) {
          departmentName=item.name
        }
      })
      return setDepName(departmentName)
    } 
    const getGradeName = () => {
      let gradeName = ""
      allGrades?.data.map((item: any) => {
        if (item.id === tempData?.gradeId) {
          gradeName=item.name
        }
      })
      return setGraName(gradeName)
    } 
    const getNationName = () => {
      let nationmame = ""
      allNations?.data.map((item: any) => {
        if (item.id === parseInt(tempData?.nationality)) {
          nationmame=item.name
        }
      })
      return setNation(nationmame)
    } 

    const getUnitName = () => {
      let unitName = ""
      allUnits?.data.map((item: any) => {
        if (item.id === tempData?.unitId) {
          unitName=item.name
        }
      })
      return setUniName(unitName)
    } 
    const getJobTName = () => {
      let jobTitleName = ""
      allJobTitles?.data.map((item: any) => {
        if (item.id === tempData?.jobTitleId) {
          jobTitleName=item.name
        }
      })
      return setJobTName(jobTitleName)
    } 

    const getCatName = () => {
      let categoryName = ""
      allCategories?.data.map((item: any) => {
        if (item.id === tempData?.categoryId) {
          categoryName=item.name
        }
      })
      return setCatName(categoryName)
    } 

    const getDivisionName = () => {
      let divisionName = ""
      allDivisions?.data.map((item: any) => {
        if (item.id === tempData?.divisionId) {
          divisionName=item.name
        }
      })
      return setDivName(divisionName)
    } 

    const getPaygroupName = () => {
      let paygroupName = null
      alPaygroups?.data.map((item: any) => {
        if (item.id === tempData?.paygroupId) {
          paygroupName=item.name
        }
      })
      return setPaygName(paygroupName)
    } 
    const getNotchName = () => {
      let notchName = null
      allNotches?.data.map((item: any) => {
        if (item.id === tempData?.notchId) {
          notchName=item.name
        }
      })
      return setNotchName(notchName)
    }
    getNationName()
    getCatName()
    getJobTName()
    getUnitName()
    getDivisionName()
    getDepartmentName()
    getPaygroupName()
    getNotchName()
    getGradeName()
  })

  useEffect(() => {
    const dataByID = allEmployees?.data.find((employee:any) =>{
      return employee.id.toString() ===param.id
    })
    const getEmployeeById = ()=>{
      setTempData(dataByID)
    }
    getEmployeeById()
    
  })

  return (
    <div
    className="col-12"
      style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '5px',
     
        boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
      }}
    >
      <Link to="/employee">
        <a style={{fontSize:"16px", fontWeight: "500"}} className='mb-7 btn btn-outline btn-outline-dashed btn-outline-primary btn-active-light-primary'>
          Back to list
        </a>
      </Link>
      <br></br>
        <h3> You are viewing details of <span style={{color:"#FF6363"}}>  {tempData?.firstName} {tempData?.surname}</span></h3>
      <hr />
      <br></br>
      <div className='col-4 mb-7'>
            {
              tempData?.imageUrl!==null?
              <img style={{borderRadius:"10px", marginBottom:"20px"}} src={`https://208.117.44.15/hrwebapi/uploads/employee/${tempData?.imageUrl}`} width={150} height={150}></img>:
              <img style={{borderRadius:"10px",marginBottom:"20px"}} src={`https://208.117.44.15/hrwebapi/uploads/employee/ahercode1.jpg`} width={150} height={150}></img>
            }
            
          </div>
      <div className='row mb-5'>
        <div style={{ marginBottom:"10px"}}>
          <h2 style={{color:"#f2f2f2", fontWeight:"bold", backgroundColor:"Highlight", maxWidth:"180px", padding:"8px"}}>Details</h2>
        </div>
        <br />
        <br />
        <div className='col-3 mb-5'>
            <h5  style={{ color:"GrayText"}}>EmployeeId: <span style={{ color:"black"}}>{tempData?.employeeId}</span></h5>
        </div>
        <div className='col-3 mb-5'>
            <h5  style={{ color:"GrayText"}}>First Name: <span style={{ color:"black"}}>{tempData?.firstName}</span></h5>
        </div>
        <div className='col-3 mb-5'>
            <h5 style={{ color:"GrayText"}}>Surname: <span style={{ color:"black"}}>{tempData?.surname}</span></h5>
        </div>
        <div className='col-3 mb-5'>
            <h5 style={{ color:"GrayText"}}>
              Other name: <span style={{ color:"black"}}>{tempData?.otherName===null?"NULL":tempData?.otherName}</span>
            </h5>
        </div>
        <div className='col-3 mb-5'>
          <h5 style={{ color:"GrayText"}}>
            Gender: <span style={{ color:"black"}}> {tempData?.gender}</span>
          </h5>
        </div>
        <div className='col-3 mb-5'>
          <h5 style={{ color:"GrayText"}}>Date of Birth: 
            <span style={{ color:"black"}}> {tempData?.dob}</span>
          </h5>
        </div>
        
        <div className='col-3 mb-5'>
          <h5 style={{ color:"GrayText"}} >Mrital Status:
            <span style={{ color:"black"}}> {tempData?.maritalStatus===null?" NULL":tempData?.maritalStatus }</span>
          </h5>
        </div>
        <div className='col-3 mb-5'>
          <h5 style={{ color:"GrayText"}} >
            Nationality: <span style={{ color:"black"}}>{tempData?.nationality===null?" NULL":nation}</span>
          </h5>
        </div>
        <div className='col-3 mb-5'>
          <h5 style={{ color:"GrayText"}} >
            ID Card Number: <span style={{ color:"black"}}>{tempData?.nationalId}</span>
            </h5> 
        </div>
      </div>
      {/* communication */}
      {/* <br></br> */}
      <div className='row mb-5'>
        {/* <h2 style={{color:"lightblue", fontWeight:"bold", textDecoration:"underline"}}>Communication</h2> */}
        <div style={{ marginBottom:"10px"}}>
          <h2 style={{color:"#f2f2f2", fontWeight:"bold", backgroundColor:"Highlight", maxWidth:"180px", padding:"8px"}}>Communication</h2>
        </div>
        <br />
        <br />
        <div className='col-3 mb-5'>
            <h5  style={{ color:"GrayText"}}>Phone Number: <span style={{ color:"black"}}>{tempData?.phone===null?" NULL":tempData?.phone}</span></h5>
        </div>
        <div className='col-3 mb-5'>
            <h5  style={{ color:"GrayText"}}>Alternative Phone Number: <span style={{ color:"black"}}>{tempData?.alternativePhone===null?" NULL":tempData?.alternativePhone}</span></h5>
        </div>
        <div className='col-3 mb-5'>
            <h5  style={{ color:"GrayText"}}>Address: <span style={{ color:"black"}}>{tempData?.address===null?" NULL":tempData?.address}</span></h5>
        </div>
        <div className='col-3 mb-5'>
            <h5  style={{ color:"GrayText"}}>Residential Address: <span style={{ color:"black"}}>{tempData?.residentialAddress===null?" NULL":tempData?.residentialAddress}</span></h5>
        </div>
        
        {/* <div className='col-3 mb-5'>
            <h5  style={{ color:"GrayText"}}>Per. Email: <span style={{ color:"black"}}>{tempData?.personalEmail===null?" NULL":tempData?.personalEmail.toLowerCase()}</span></h5>
        </div> */}
        <div className='col-3 mb-5'>
            <h5  style={{ color:"GrayText"}}>Next Of Kin: <span style={{ color:"black"}}>{tempData?.nextOfKin===null?" NULL":tempData?.nextOfKin}</span></h5>
        </div>
        <div className='col-3 mb-5'>
            <h5  style={{ color:"GrayText"}}>Guarantor: <span style={{ color:"black"}}>{tempData?.guarantor===null?" NULL":tempData?.guarantor}</span></h5>
        </div>
        <div className='col-3 mb-5'>
            <h5  style={{ color:"GrayText"}}>Email: <span style={{ color:"black"}}>{tempData?.email===null?" NULL":tempData?.email.toLowerCase()}</span></h5>
        </div>
      </div>
      {/* Administration */}
      {/* <br></br> */}
      <div className='row mb-5'>
        {/* <h2 style={{color:"lightblue", fontWeight:"bold", textDecoration:"underline"}}>Administration</h2> */}
        <div style={{ marginBottom:"10px"}}>
          <h2 style={{color:"#f2f2f2", fontWeight:"bold", backgroundColor:"Highlight", maxWidth:"180px", padding:"8px"}}>Administration</h2>
        </div>
        <br />
        <br />
        <div className='col-3 mb-5'>
            <h5  style={{ color:"GrayText"}}>Paygroup: <span style={{ color:"black"}}>{tempData?.paygroupId===null?" NULL":paygName}</span></h5>
        </div>
        <div className='col-3 mb-5'>
            <h5  style={{ color:"GrayText"}}>Category: <span style={{ color:"black"}}>{ tempData?.categoryId===null?" NULL":catName}</span></h5>
        </div>
        <div className='col-3 mb-5'>
            <h5  style={{ color:"GrayText"}}>Division: <span style={{ color:"black"}}>{tempData?.divisionId===null?" NULL":divName}</span></h5>
        </div>
        <div className='col-3 mb-5'>
            <h5  style={{ color:"GrayText"}}>Salary Grade: <span style={{ color:"black"}}>{tempData?.gradeId===null?" NULL":graName}</span></h5>
        </div>
        <div className='col-3 mb-5'>
            <h5  style={{ color:"GrayText"}}>Department: <span style={{ color:"black"}}>{tempData?.departmentId===null?" NULL":depName}</span></h5>
        </div>
        <div className='col-3 mb-5'>
            <h5  style={{ color:"GrayText"}}>Notch: <span style={{ color:"black"}}>{tempData?.notchId===null?" NULL":notchName}</span></h5>
        </div>
        <div className='col-3 mb-5'>
            <h5  style={{ color:"GrayText"}}>Unit: <span style={{ color:"black"}}>{tempData?.unitId===null?" NULL":uniName}</span></h5>
        </div>
        <div className='col-3 mb-5'>
            <h5  style={{ color:"GrayText"}}>JobTitle: <span style={{ color:"black"}}>{tempData?.jobTitleId===null?" NULL":jobTName}</span></h5>
        </div>
        <div className='col-3 mb-5'>
            <h5  style={{ color:"GrayText"}}>Job Roles: <span style={{ color:"black"}}>{tempData?.jobRole===null?" NULL":tempData?.jobRole}</span></h5>
        </div>
        <div className='col-3 mb-5'>
            <h5  style={{ color:"GrayText"}}>Employment Date: <span style={{ color:"black"}}>{tempData?.employmentDate===null?" NULL":tempData?.employmentDate}</span></h5>
        </div>
      </div>
      {/* Payroll */}
      {/* <br></br> */}
      <div className='row mb-5'>
        <div style={{ marginBottom:"10px"}}>
          <h2 style={{color:"#f2f2f2", fontWeight:"bold", backgroundColor:"Highlight", maxWidth:"180px", padding:"8px"}}>Payroll</h2>
        </div>
        <br />
        <br />
        <div className='col-3 mb-5'>
            <h5  style={{ color:"GrayText"}}>Phone: <span style={{ color:"black"}}>{tempData?.phone}</span></h5>
        </div>
        <div className='col-3 mb-5'>
            <h5  style={{ color:"GrayText"}}>Alternative Phone: <span style={{ color:"black"}}>{ tempData?.alternativePhone}</span></h5>
        </div>
        <div className='col-3 mb-5'>
            <h5  style={{ color:"GrayText"}}>Address: <span style={{ color:"black"}}>{tempData?.employmentDate===null?" NULL":tempData?.employmentDate}</span></h5>
        </div>
      </div>
    </div>
  );
}


export  {EmplyeeDetails}