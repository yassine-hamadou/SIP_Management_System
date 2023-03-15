/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./formStyle.css"
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Modal, Space, Table, Upload } from 'antd';
import { Api_Endpoint, fetchCategories, fetchDepartments, fetchDivisions, fetchEmployees, fetchExperiences, fetchGrades, fetchNationalities, fetchNotches, fetchPaygroups, fetchQualifications, fetchSkills, fetchUnits } from '../../../../services/ApiCalls';
import { BANKS, CATEGORY, DEPARTMENTS, DIVISION, employeedata, GRADES, MEDICALS, NOTCHES, UNITS } from '../../../../data/DummyData';
import { KTSVG } from '../../../../../_metronic/helpers';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const EmplyeeDetails= () =>{
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
  const [medicalEntryData, setMedicalEntryData] = useState([])
  const [familyData, setFamilyData] = useState([])
  const [experienceData, setExperienceData] = useState([])
  const [qualificationData, setQualificationData] = useState([])
  const [skillData, setSkillData] = useState([])
  const [loading, setLoading] = useState(false)
  const [img, setImg] = useState()
  const {register, reset, handleSubmit} = useForm()
  const param:any  = useParams();
  const [paygroupName, setPaygroupName]= useState("")
  const [nationality, setNationality]= useState("")
  const [grade, setGrade]= useState("")
  const [unit, setUnit]= useState("")
  const [jobTitle, setJobTitle]= useState("")

  const deleteFamMem = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/FamilyMembers/${element.id}`)
      // update the local state so that react can refecth and re-render the table with the new data
      const newData = familyData.filter((item: any) => item.id !== element.id)
      setFamilyData(newData)
      return response.status
    } catch (e) {
      return e
    }
  }

  const getSkillName = (skillId: any) => {
    let skillName = null
    allSkills?.data.map((item: any) => {
      if (item.id === skillId) {
        skillName=item.name
      }
    })
    return skillName
  } 
  const getQualificationName = (qualificationId: any) => {
    let qualificationName = null
    allQualifications?.data.map((item: any) => {
      if (item.id === qualificationId) {
        qualificationName=item.name
      }
    })
    return qualificationName
  } 
  // validates input field to accept only numbers
  const validatePhoneNumber=(event:any)=>{
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
                  
  }
  const {data:allEmployees} = useQuery('employees', fetchEmployees, {cacheTime:5000})
  const {data:allDepartments} = useQuery('departments', fetchDepartments, {cacheTime:5000})
  const {data:allDivisions} = useQuery('divisions', fetchDivisions, {cacheTime:5000})
  const {data:allCategories} = useQuery('categories', fetchCategories, {cacheTime:5000})
  const {data:allPaygroups} = useQuery('paygroups', fetchPaygroups, {cacheTime:5000})
  const {data:allUnits} = useQuery('units', fetchUnits, {cacheTime:5000})
  const {data:allGrades} = useQuery('grades', fetchGrades, {cacheTime:5000})
  const {data:allNotches} = useQuery('notches', fetchNotches, {cacheTime:5000})
  const {data:allNations} = useQuery('nations', fetchNationalities, {cacheTime:5000})
  const {data:allSkills} = useQuery('skill', fetchSkills, {cacheTime:5000})
  const {data:allQualifications} = useQuery('qualifications', fetchQualifications, {cacheTime:5000})
  const {data:allExperiences} = useQuery('experiences', fetchExperiences, {cacheTime:5000})


  const dataByID = allEmployees?.data.find((employee:any) =>{
    return employee.id.toString() ===param.id
  });


  // console.log(dataByID)

  let newId=dataByID?.gradeId

  const fetchImage = async () => {
    const res = await fetch("https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80");
    const imageBlob = await res.blob();
    const imageObjectURL:any  = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  const loadSkills = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/EmployeeSkills`)
      setSkillData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  const loadQualifications = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/EmployeeQualifications`)
      setQualificationData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  const loadExperiences = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/Experiences`)
      setExperienceData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  const loadFamilyMembers = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/FamilyMembers`)
      setFamilyData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  const loadMedicalEntry = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/Medicals`)
      setMedicalEntryData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const getDepartmentName = (departmentId: any) => {
    let departmentName = ""
    allDepartments?.data.map((item: any) => {
      if (item.id === departmentId) {
        departmentName=item.name
      }
    })
    return departmentName
  } 
  const getGradeName = (gradeId: any) => {
    let gradeName = ""
    allGrades?.data.map((item: any) => {
      if (item.id === gradeId) {
        gradeName=item.name
      }
    })
    return gradeName
  } 
  const getPaygroupName = (paygroupId: any) => {
    let paygroupName = ""
    allPaygroups?.data.map((item: any) => {
      if (item.id === paygroupId) {
        paygroupName=item.name
      }
    })
    return setPaygroupName(paygroupName)
  } 
  const getNotchName = (notchId: any) => {
    let notchName = ""
    allNotches?.data.map((item: any) => {
      if (item.id === notchId) {
        notchName=item.name
      }
    })
    return notchName
  } 
  const getNatoinName = (natId: any) => {
    let nationName = ""
    allNations?.data.map((item: any) => {
      if (item?.id === parseInt(natId)) {
        nationName=item.name
      }
    })
    return setNationality(nationName)
  } 

  useEffect(() => {
    getNatoinName(dataByID?.nationalId)
    getPaygroupName(dataByID?.paygroupId)
    getDepartmentName(dataByID?.departmentId)
    getNotchName(dataByID?.notchId)
    getGradeName(dataByID?.gradeId)
    loadMedicalEntry()
    loadQualifications()
    loadFamilyMembers()
    loadExperiences()
    loadSkills()
    fetchImage()
    
  }, [dataByID?.nationalId, dataByID?.gradeId])

  console.log(nationality)


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
      <h3> You are viewing details of <span style={{color:"#FF6363"}}>  {dataByID?.firstName} {dataByID?.surname}</span></h3>
      <hr />
      <br></br>

      <div className='row mb-10'>
        <h2 style={{color:"lightblue", fontWeight:"bold", textDecoration:"underline"}}>Details</h2>
        <br />
        <br />
        <div className='col-3 mb-10'>
            <h5>First Name</h5>
            <span style={{fontSize:"16", color:"GrayText"}}> {dataByID?.firstName}</span>
            {/* {dataByID?.firstName} */}
        </div>
        <div className='col-3 mb-10'>
            <h6>Surname</h6>
            <span style={{fontSize:"16", color:"GrayText"}}> {dataByID?.surname}</span>
            {/* {dataByID?.firstName} */}
        </div>
        <div className='col-3 mb-10'>
            <h6>Other name </h6>
            <span style={{fontSize:"16", color:"GrayText"}}> {dataByID?.othername}</span>
            {/* {dataByID?.firstName} */}
        </div>
        <div className='col-3 mb-10'>
          <h6>Gender </h6>
              <span style={{fontSize:"16", color:"GrayText"}}> {dataByID?.gender}</span>
        </div>
        <div className='col-3 mb-10'>
          <h6 >Date of Birth</h6>
            <span style={{fontSize:"16", color:"GrayText"}}> {dataByID?.dob}</span>
        </div>
        {/* <div className='col-3'>
          <h6 >Phone</h6>
            <span style={{fontSize:"16", color:"GrayText"}}> {dataByID?.phone}</span>
        </div> */}
        {/* <div className='col-3 mb-10'>
          <h6 >Email</h6>
            <span style={{fontSize:"16", color:"GrayText"}}> {dataByID?.email.toLowerCase()}</span>
        </div> */}
        <div className='col-3 mb-10'>
          <h6 >Mrital Status</h6>
            <span style={{fontSize:"16", color:"GrayText"}}> {dataByID?.maritalStatus }</span>
        </div>
        <div className='col-3 mb-10'>
          <h6 >Nationality</h6>
            <span style={{fontSize:"16", color:"GrayText"}}> {nationality}</span>
        </div>
        <div className='col-3 mb-10'>
          <h6 >ID Card Number</h6>
            {/* <span style={{fontSize:"16", color:"GrayText"}}> {dataByID?.nationalId}</span> */}
        </div>
        {/* <div className='col-3 mb-10'>
          <h6 >ID Card Number</h6>
            <span style={{fontSize:"16", color:"GrayText"}}> {paygroupName}</span>
        </div> */}
      </div>
      {/* <div className='row mb-10'>
        
        <div className='col-3'>
            <h5>Phone</h5>
            <span style={{fontSize:"16", color:"GrayText"}}> {dataByID?.phone}</span>
            
        </div>
        <div className='col-3'>
            <h6>Surname</h6>
            <span style={{fontSize:"16", color:"GrayText"}}> {dataByID?.surname}</span>
            
        </div>
        <div className='col-3'>
            <h6>Other name </h6>
            <span style={{fontSize:"16", color:"GrayText"}}> {dataByID?.othername}</span>
            
        </div>
        <div className='col-2'>
          <h6>Gender </h6>
              <span style={{fontSize:"16", color:"GrayText"}}> {dataByID?.gender}</span>
        </div>
        <div className='col-3'>
          <h6 >Date of Birth</h6>
            <span style={{fontSize:"16", color:"GrayText"}}> {dataByID?.dob}</span>
        </div>
        <div className='col-3'>
          <h6 >Email</h6>
            <span style={{fontSize:"16", color:"GrayText"}}> {dataByID?.email.toLowerCase()}</span>
        </div>
      </div> */}
    </div>
  );
}


export  {EmplyeeDetails}