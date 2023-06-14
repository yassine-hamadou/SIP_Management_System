import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "../../../employeeFormEntry/formStyle.css";
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { Space,  } from 'antd';


const EmployeeDetail = () =>{
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
            <h3> Details for <span style={{color:"#FF6363"}}>  </span></h3>
            <br></br>
            <Link to={'/transaction/hr/leave-planning/approval'}>
                <a style={{fontSize:"16px", fontWeight: "500"}} className='mb-7 btn btn-outline btn-outline-dashed btn-outline-primary btn-active-light-primary'>
                    Back to approval list
                </a>
            </Link>
            <form onSubmit={handleSubmit}>
                <hr></hr>
                <br></br>
                <div className="tab-content">
                        <div className='col-8'>
                            <div className='row mb-0'>
                                <div className='col-6 mb-7'>
                                    <img style={{borderRadius:"10px"}} src={img} width={100} height={100}></img>
                                </div>
                            </div>
                            <div className='row mb-0'>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">First Name</label>
                                    <input type="text" name="fname"  readOnly className="form-control form-control-solid" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Surname</label>
                                    <input type="text" name="mname"  readOnly className="form-control form-control-solid" />
                                </div>
                            </div>
                            <div className='row mb-0'>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Other Name</label>
                                    <input type="text" name="lname" readOnly className="form-control form-control-solid" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Date of Birth</label>
                                    <input type="date" name="dob" readOnly className="form-control form-control-solid" />
                                </div>
                            </div>
                            <div className='row mb-0'>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className=" form-label">Gender</label>
                                    <input type="text" name="gender"  readOnly className="form-control form-control-solid" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className=" form-label">Marital Status</label>
                                    <input type="text" name="marital" readOnly className="form-control form-control-solid" />
                                </div>
                            </div>
                            <div className='row mb-0'>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className=" form-label">Nationality</label>
                                    <input type="text" name="Nationality" readOnly className="form-control form-control-solid" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className=" form-label">National ID</label>
                                    <input type="text" name="Nationality" readOnly className="form-control form-control-solid" />
                                </div>
                            </div>

                        </div>

                </div>
            </form>
        </div>
    );
}


export  {EmployeeDetail}
