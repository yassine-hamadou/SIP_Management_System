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
  const [medicalEntryData, setMedicalEntryData] = useState([])
  const [familyData, setFamilyData] = useState([])
  const [experienceData, setExperienceData] = useState([])
  const [qualificationData, setQualificationData] = useState([])
  const [skillData, setSkillData] = useState([])
  const [loading, setLoading] = useState(false)
  const [img, setImg] = useState()
  const {register, reset, handleSubmit} = useForm()
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

  const deleteSkill = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/Skills/${element.id}`)
      // update the local state so that react can refecth and re-render the table with the new data
      const newData = skillData.filter((item: any) => item.id !== element.id)
      setSkillData(newData)
      return response.status
    } catch (e) {
      return e
    }
  }

  const deleteQualification = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/Qualifications/${element.id}`)
      // update the local state so that react can refecth and re-render the table with the new data
      const newData = qualificationData.filter((item: any) => item.id !== element.id)
      setQualificationData(newData)
      return response.status
    } catch (e) {
      return e
    }
  }
  const deleteExperience = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/Experiences/${element.id}`)
      // update the local state so that react can refecth and re-render the table with the new data
      const newData = experienceData.filter((item: any) => item.id !== element.id)
      setExperienceData(newData)
      return response.status
    } catch (e) {
      return e
    }
  }

  const deleteMedicalEntry = async (element: any) => {
    try {
      const response = await axios.delete(`${Api_Endpoint}/MedicalEntries/${element.id}`)
      // update the local state so that react can refecth and re-render the table with the new data
      const newData = medicalEntryData.filter((item: any) => item.id !== element.id)
      setMedicalEntryData(newData)
      return response.status
    } catch (e) {
      return e
    }
  }


  function handleSkillDelete(element: any) {
    deleteSkill(element)
  }

  function handleExperienceDelete(element: any) {
    deleteExperience(element)
  }

  function handleQualificationDelete(element: any) {
    deleteQualification(element)
  }

  function handleFamilyDelete(element: any) { 
    deleteFamMem(element)
  }
  function handleMedicalEntryDelete(element: any) {
    deleteMedicalEntry(element)
    
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
      dataIndex: 'nationalId',
      sorter: (a: any, b: any) => {
        if (a.nationalId > b.nationalId) {
          return 1
        }
        if (b.nationalId > a.nationalId) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      sorter: (a: any, b: any) => {
        if (a.firstName > b.firstName) {
          return 1
        }
        if (b.firstName > a.firstName) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Surname',
      dataIndex: 'surname',
      sorter: (a: any, b: any) => {
        if (a.surname > b.surname) {
          return 1
        }
        if (b.surname > a.surname) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Other Name',
      dataIndex: 'otherName',
      sorter: (a: any, b: any) => {
        if (a.otherName > b.otherName) {
          return 1
        }
        if (b.otherName > a.otherName) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Relationship',
      dataIndex: 'relationship',
      sorter: (a: any, b: any) => {
        if (a.relationship > b.relationship) {
          return 1
        }
        if (b.relationship > a.relationship) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Date of Birth',
      dataIndex: 'dob',
      sorter: (a: any, b: any) => {
        if (a.dob > b.dob) {
          return 1
        }
        if (b.dob > a.dob) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      sorter: (a: any, b: any) => {
        if (a.phone > b.phone) {
          return 1
        }
        if (b.phone > a.phone) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Address',
      dataIndex: 'address',
      sorter: (a: any, b: any) => {
        if (a.address > b.address) {
          return 1
        }
        if (b.address > a.address) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Note',
      dataIndex: 'note',
      sorter: (a: any, b: any) => {
        if (a.note > b.note) {
          return 1
        }
        if (b.note > a.note) {
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
          <a onClick={() => handleFamilyDelete(record)} className='btn btn-light-danger btn-sm'>
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
          <a onClick={() => handleMedicalEntryDelete(record)} className='btn btn-light-danger btn-sm'>
            Delete
          </a>
        </Space>
      ),
      
    },
  ]
  const skillColumns: any = [
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
          <a onClick={() => handleSkillDelete(record)} className='btn btn-light-danger btn-sm'>
            Delete
          </a>
         
        </Space>
      ),
      
    },
  ]
  const experienceColumns: any = [
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
          <a onClick={() => handleExperienceDelete(record)} className='btn btn-light-danger btn-sm'>
            Delete
          </a>
         
        </Space>
      ),
      
    },
  ]
  const qualificationColumns: any = [
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
          <a onClick={() => handleQualificationDelete(record)} className='btn btn-light-danger btn-sm'>
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



  // const handleSubmit = (event:any) => {
  //   event.preventDefault();
  //   console.log(formData);
  //   // Use the formData object to submit the data to your server
  
  // }


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

  let newId=dataByID?.gradeId


  
  // const gradeName =  allGrades?.data.find(async(grade:any) =>{
  //   console.log(newId)
  //   return await grade.id ===newId ? "Jack":null
  // });

  // console.log(dataByID?.gradeId +"Test now")

  // console.log(gradeName?.name)

  const fetchImage = async () => {
    const res = await fetch("https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80");
    const imageBlob = await res.blob();
    const imageObjectURL:any  = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  const [fileList, setFileList] = useState<UploadFile[]>([
    
  ]);

  const loadSkills = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/Skills`)
      setSkillData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  const loadQualifications = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/Qualifications`)
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

  useEffect(() => {
    loadMedicalEntry()
    loadQualifications()
    loadFamilyMembers()
    loadExperiences()
    loadSkills()
    fetchImage()
  }, [])

  const skillByEmployee = skillData.filter((section:any) =>{
    return section.employeeId.toString() ===param.id
  })
  const experienceByEmployee = experienceData.filter((exp:any) =>{
    return exp.employeeId.toString() ===param.id
  })
  const qualificationByEmployee = qualificationData.filter((qualification:any) =>{
    return qualification.employeeId.toString() ===param.id
  })
  const familyByEmployee = familyData.filter((qualification:any) =>{
    return qualification.employeeId.toString() ===param.id
  })
  // const medicalByEmployee = medicalData.filter((medical:any) =>{
  //   return medical.employeeId.toString() ===param.id
  // })


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
  

  const url = `${Api_Endpoint}/Skills`
  const submitSkills = handleSubmit( async (values:any)=> {
    setLoading(true)
    const data = {
      name: values.name,
      employeeId: parseInt(param.id),
    }
    console.log(data)
    try {
      const response = await axios.post(url, data)
      setSubmitLoading(false)
      reset()
      setSkillOpen(false)
      loadSkills()
      return response.statusText
    } catch (error: any) {
      setSubmitLoading(false)
      return error.statusText
    }
  })

  const url1 = `${Api_Endpoint}/Experiences`
  const submitExperiences = handleSubmit( async (values:any)=> {
    setLoading(true)
    const data = {
      name: values.name,
      employeeId: parseInt(param.id),
    }
    console.log(data)
    try {
      const response = await axios.post(url1, data)
      setSubmitLoading(false)
      reset()
      setExperienceOpen(false)
      loadExperiences()
      return response.statusText
    } catch (error: any) {
      setSubmitLoading(false)
      return error.statusText
    }
  })

  const url2 = `${Api_Endpoint}/Qualifications`
  const submitQualifications = handleSubmit( async (values:any)=> {
    setLoading(true)
    const data = {
      name: values.name,
      employeeId: parseInt(param.id),
    }
    console.log(data)
    try {
      const response = await axios.post(url2, data)
      setSubmitLoading(false)
      reset()
      setQualificationOpen(false)
      loadQualifications()
      return response.statusText
    } catch (error: any) {
      setSubmitLoading(false)
      return error.statusText
    }
  })
  const url3 = `${Api_Endpoint}/FamilyMembers`
  const submitFamilys = handleSubmit( async (values:any)=> {
    setLoading(true)
    const data = {
      nationalId: values.nationalId,
      firstName: values.firstName,
      surname: values.surname,
      otherName: values.otherName,
      dob: values.dob,
      relationship: values.relationship,
      address: values.address,
      phone: values.phone,
      note: values.note,
      employeeId: parseInt(param.id),
    }
    console.log(data)
    try {
      const response = await axios.post(url3, data)
      setSubmitLoading(false)
      reset()
      setFamilyOpen(false)
      loadFamilyMembers()
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
      <h3> You are updating <span style={{color:"#FF6363"}}>  {dataByID?.firstName} {dataByID?.surname}</span></h3>
      <br></br>
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
        <div className="FormClass" >
        <div className="tab-content">
        
          {/* Details */}
          {activeTab === 'tab1' && 
          <div className='col-8'>
            <div className='row mb-0'>
             
              <div className='col-6 mb-7'>
             
              </div>
              
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">First Name</label>
                <input type="text" name="fname" defaultValue={dataByID?.firstName}  className="form-control form-control-solid" />
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Surname</label>
                <input type="text" name="mname" defaultValue={dataByID?.surname} className="form-control form-control-solid" />
              </div>
            </div>

            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Other Name</label>
                <input type="text" name="lname" defaultValue={dataByID?.otherName} className="form-control form-control-solid" />
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Date of Birth</label>
                <input type="date" name="dob" defaultValue={"1990-07-27"}   className="form-control form-control-solid" />
              </div>
            </div>
            <div className='row mb-0'>
              
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Gender</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                  <option >{dataByID?.gender}</option>
                  <option value="MALE">MALE</option>
                  <option value="FEMALE">FEMALE</option>
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Marital Status</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  {/* <option >{dataByID?.maritalStatus}</option> */}
                  <option value="SINGLE">SINGLE</option>
                  <option value="MARRIED">MARRIED</option>
                 
                </select>
              </div>
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Nationality</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                    {allNations?.data.map((item: any) => (
                        <option value={item.id}>{item.name}</option>
                      ))}
                 
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">National ID</label>
                <input type="text" name="dob" defaultValue={dataByID?.nationalId} className="form-control form-control-solid" />
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
                  <input type="phone" value={dataByID?.phone} name="tel" pattern="[0-9]*" className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Alternative Phone number</label>
                  <input type="phone" value={dataByID?.alternativePhone} name="tel" maxLength={15} onKeyPress={validatePhoneNumber} onChange={handleChange}  className="form-control form-control-solid" />
                </div>
              </div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Address</label>
                  <input type="text" name="address" value={dataByID?.address} onChange={handleChange}  className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Residential Address</label>
                  <input type="text" name="raddress" value={dataByID?.residentialAddress} onChange={handleChange}  className="form-control form-control-solid" />
                </div>
              </div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Email</label>
                  <input type="email" name="email" value={dataByID?.email.toLowerCase()} onChange={handleChange}  className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Personal Email</label>
                  <input type="email" name="pemail" value={dataByID?.personalEmail} onChange={handleChange}  className="form-control form-control-solid" />
                </div>
              </div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Next of kin</label>
                  <input type="text" name="email"  value={dataByID?.nextOfKin} onChange={handleChange}  className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Guarantor</label>
                  <input type="text" name="guarantor" value={dataByID?.guarantor} onChange={handleChange}  className="form-control form-control-solid" />
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
                  {allPaygroups?.data.map((item: any) => (
                    <option value={dataByID.paygroupId}>{item.name}</option>
                  ))}
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Category</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                 
                  {allCategories?.data.map((item: any) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                </select>
              </div>
              
            </div>
            <div className='row mb-0'>
            <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Division</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                {/* <option>{dataByID?.region} </option> */}
                {allDivisions?.data.map((item: any) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Salary Grade</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  {/* <option>{gradeName.name} </option> */}
                  {allGrades?.data.map((item: any) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
              
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Department</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  {allDepartments?.data.map((item: any) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Notch</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>{dataByID?.notch} </option>
                  {allNotches?.data.map((item: any) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Unit</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                <option>{dataByID?.unit} </option>
                {allUnits?.data.map((item: any) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
              <div className='col-3 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Employment Date</label>
                <input type="date" name="edate" defaultValue={"1990-05-28"} onChange={handleChange}  className="form-control form-control-solid" />

              </div>
              <div className='col-3 mb-7'>
                <br></br>
             
                <a href="#" className="btn btn-danger"> Status</a>
              </div>
            </div>
            <div className='row mb-0'>
              
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
                  <option value="BANK">BANK</option>
                  <option value="CASH">CASH</option>
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
                <input type="text" name="account" value={dataByID?.account} className="form-control form-control-solid" />
              </div>
            </div>
            <div className='row mb-0'>
              
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">TIN </label>
                <input type="text" name="tin" defaultValue={dataByID.tin}  className="form-control form-control-solid" />
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">SSN </label>
                <input type="text" name="ssn" defaultValue={dataByID.ssf}  className="form-control form-control-solid" />
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
              
                      <Table columns={skillColumns} dataSource={skillByEmployee} loading={loading} />
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
                            onClick={submitSkills}
                            >
                                Submit
                            </Button>,
                        ]}
                      >
                        <form
                          onSubmit={submitSkills}
                        >
                          <hr></hr>
                          <div style={{padding: "20px 20px 20px 20px"}} className='row mb-0 '>
                            <div className=' mb-7'>
                              <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                              <input type="text" {...register("name")} className="form-control form-control-solid"/>
                            </div>
                            
                          </div>
                        </form>
                      </Modal> 
                    </div>}
                  {activeTab1 === 'qual' && 
                    <div >
                      <button style={{margin:"0px 0px 20px 0"}} type='button' className='btn btn-primary me-3' onClick={showQualificationModal}>
                        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                        Add Qualification
                      </button>
              
                      <Table columns={qualificationColumns} dataSource={qualificationByEmployee} loading={loading} /> 
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
                            onClick={submitQualifications}
                            >
                                Submit
                            </Button>,
                        ]}
                      >
                        <form
                           onSubmit={submitQualifications}
                        >
                          <hr></hr>
                          <div style={{padding: "20px 20px 20px 20px"}} className='row mb-0 '>
                            <div className=' mb-7'>
                              <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                              <input type="text" {...register("name")}  className="form-control form-control-solid"/>
                            </div>
                            
                          </div>
                        </form>
                      </Modal>
                    </div>}
                  {activeTab1 === 'exper' && 
                    <div >
                      <button style={{margin:"0px 0px 20px 0"}} type='button' className='btn btn-primary me-3' onClick={showExperienceModal}>
                        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                        Add Experience
                      </button>
              
                      <Table columns={experienceColumns} dataSource={experienceByEmployee} loading={loading}/> 
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
                            onClick={submitExperiences}
                            >
                                Submit
                            </Button>,
                        ]}
                      >
                        <form
                           onSubmit={submitExperiences}
                            
                        >
                          <hr></hr>
                          <div style={{padding: "20px 20px 20px 20px"}} className='row mb-0 '>
                            <div className=' mb-7'>
                              <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                              <input type="text" {...register("name")}  className="form-control form-control-solid"/>
                            </div>
                            
                          </div>
                        </form>
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
          
                  <Table columns={familyColumns} dataSource={familyByEmployee} loading={loading} />
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
                        onClick={submitFamilys}
                        >
                            Submit
                        </Button>,
                    ]}
                  >
                    <form
                      onSubmit={submitFamilys}
                    >
                      <hr></hr>
                      <div className='row mb-0'>
                        <div className='col-6 mb-7'>
                          {/* <Upload
                                
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                          > 
                            <UploadOutlined />
                          </Upload> */}
                        </div>
                      
                      </div>
                      <div style={{padding: "20px 20px 20px 20px"}} className='row mb-0 '>
                        <div className='col-6 mb-7'>
                          <label htmlFor="exampleFormControlInput1" className="form-label">National ID</label>
                          <input type="text" {...register("nationalId")} className="form-control form-control-solid"/>
                        </div>
                        <div className='col-6 mb-7'>
                          <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                          <input type="text" {...register("firstName")}  className="form-control form-control-solid"/>
                        </div>
                        
                      </div>
                      <div style={{padding: "0px 20px 20px 20px"}} className='row mb-0 '>
                        <div className='col-6 mb-7'>
                          <label htmlFor="exampleFormControlInput1" className="form-label">Surname</label>
                          <input type="text" {...register("surname")}  className="form-control form-control-solid"/>
                        </div>
                        <div className='col-6 mb-7'>
                          <label htmlFor="exampleFormControlInput1" className="form-label">Other Name</label>
                          <input type="text" {...register("otherName")}  className="form-control form-control-solid"/>
                        </div>
                        
                      </div>
                      <div style={{padding: "0px 20px 20px 20px"}} className='row mb-0 '>
                        <div className='col-6 mb-7'>
                          <label htmlFor="exampleFormControlInput1" className="form-label">Relationship</label>
                          <select className="form-select form-select-solid" {...register("relationship")}  aria-label="Select example">
                            <option>select </option>
                            <option value="SPOUSE">SPOUSE</option>
                            <option value="PARENT">PARENT</option>
                            <option value="CHILD">CHILD</option>
                            <option value="SIBLING">SIBLING</option>
                          </select>
                        </div>
                        <div className='col-6 mb-7'>
                          <label htmlFor="exampleFormControlInput1" className="form-label">Date od Birth</label>
                          <input type="date" {...register("dob")}  className="form-control form-control-solid"/>
                        </div>
                        
                      </div>
                      <div style={{padding: "0px 20px 20px 20px"}} className='row mb-0 '>
                        <div className='col-6 mb-7'>
                          <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
                          <input type="text" {...register("address")}  className="form-control form-control-solid"/>
                        </div>
                        <div className='col-6 mb-7'>
                          <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                          <input type="text" {...register("phone")}  className="form-control form-control-solid"/>
                        </div>
                        
                      </div>
                      <div style={{padding: "0px 20px 20px 20px"}} className='row mb-0 '>
                        <div className=' mb-7'>
                          <label htmlFor="exampleFormControlInput1" className="form-label">Notes</label>
                          <textarea {...register("note")} className="form-control form-control-solid"> </textarea>
                          {/* <textarea style={{margin: "10px 0px 0 0px"}} className="form-control form-control-solid"  aria-label="With textarea"></textarea> */}
                        </div>
                      </div>
                    </form>
                  </Modal> 
                </div>}
              </div>
              
            </div>}
        </div>
        </div >
        <button className='btn btn-primary' disabled type="submit">Submit</button>
      
    </div>
  );
}


export  {EmployeeEditForm}