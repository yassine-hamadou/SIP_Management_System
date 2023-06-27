import { Button, Input, Modal, Space, Table, RadioChangeEvent, Select, Divider, message } from 'antd'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { KTCardBody, KTSVG } from '../../../../../../_metronic/helpers'
import { ENP_URL } from '../../../urls'
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';
import { Api_Endpoint, fetchAppraisals, fetchAppraisalTransactions, fetchEmployees, fetchJobTitles, fetchPaygroups, fetchPeriods, fetchParameters, postItem, deleteItem, fetchDocument, updateItem } from '../../../../../services/ApiCalls'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import "./cusStyle.css"
import { useForm } from 'react-hook-form'
import { PlusOutlined } from "@ant-design/icons"
import moment from 'moment'


const AppraisalPerformance = () => {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  let [filteredData] = useState([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const { reset, register, handleSubmit } = useForm()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tabModalOpen, setTabModalOpen] = useState(false)
  const [updateModalOpen, setUpdateModalOpen] = useState(false)
  const [tab1ModalOpen, setTab1Modal1Open] = useState(false)
  const [tab2ModalOpen, setTab2ModalOpen] = useState(false)
  const [tab3ModalOpen, setTab3ModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("tab1");
  const [employeeRecord, setEmployeeRecord] = useState<any>([])
  const [employeeId, setEmployeeId] = useState<any>()
  const [jobTitleName, setjobTitleName] = useState<any>(null);
  const [selectedPaygroup, setSelectedPaygroup] = useState<any>(null);
  const [selectedAppraisalType, setSelectedAppraisaltype] = useState<any>(null);
  const [selectedStartPeriod, setSelectedStartPeriod] = useState<any>(null);
  const [selectedEndPeriod, setSelectedEndPeriod] = useState<any>(null);
  const [selectedValue5, setSelectedValue5] = useState<any>(null);
  const [radioValue, setRadioValue] = useState(1);
  const [radio1Value, setRadio1Value] = useState(1);
  const [radio2Value, setRadio2Value] = useState(1);
  const [radio3Value, setRadio3Value] = useState(1);
  const [radio4Value, setRadio4Value] = useState(1);
  const tenantId = localStorage.getItem('tenant')
  const [fieldInit, setFieldInit] = useState([])
  const [isReviewDateModalOpen, setIsReviewDateModalOpen] = useState(false)
  const [reivewDateSubmitLoading, setReviewDateSubmitLoading] = useState(false)
  const [reviewDatesData, setReviewDatesData] = useState<any>([])
  const queryClient = useQueryClient()
  const [appraisalData, setAppraisalData] = useState<any>([])
  const [currentDate, setCurrentDate] = useState<any>(new Date())
  const [referenceId, setReferenceId] = useState<any>(`${selectedPaygroup}-${selectedAppraisalType}-${selectedStartPeriod}-${selectedEndPeriod}`)
  const [currentObjective, setCurrentObjective] = useState<any>([])

  const { data: alEmployees } = useQuery('employees', () => fetchEmployees(tenantId), { cacheTime: 5000 })
  const { data: allAppraisals } = useQuery('appraisals', () => fetchAppraisals(tenantId), { cacheTime: 5000 })
  const { data: allPeriods } = useQuery('periods', () => fetchPeriods(tenantId), { cacheTime: 5000 })
  const { data: allJobTitles } = useQuery('jobTitles', () => fetchJobTitles(tenantId), { cacheTime: 5000 })
  const { data: allPaygroups } = useQuery('recruitments', () => fetchPaygroups(tenantId), { cacheTime: 5000 })
  const { data: allAppraisalTransactions } = useQuery('appraisalTransactions', () => fetchAppraisalTransactions(tenantId), { cacheTime: 5000 })
  const { data: allParameters } = useQuery('parameters', () => fetchParameters(tenantId), { cacheTime: 5000 })
  const { data: allObjectives } = useQuery('appraisalperfobjectives', () => fetchDocument(`appraisalperfobjectives/tenant/${tenantId}`), { cacheTime: 5000 })
  const { data: allReviewdates } = useQuery('reviewDates', () => fetchDocument(`AppraisalReviewDates/tenant/${tenantId}`), { cacheTime: 5000 })
  const { data: allAppraisalsPerfTrans } = useQuery('appraisalPerfTransactions', () => fetchDocument(`AppraisalPerfTransactions/tenant/${tenantId}`), { cacheTime: 5000 })


  const [textAreaValue, setTextAreaValue] = useState<any>('');
  const [textareaHeight, setTextareaHeight] = useState('auto');

  const handleTextareaChange = (event: any) => {
    event.preventDefault()
    setTextAreaValue(event.target.value);
    setCurrentObjective({...currentObjective, [event.target.name]: event.target.value})
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    const textarea: any = document.getElementById('resizable-textarea');
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;

    // Limit height to 10 lines
    if (textarea.scrollHeight > 10 * parseFloat(getComputedStyle(textarea).lineHeight)) {
      textarea.style.overflowY = 'scroll';
      textarea.style.height = `${10 * parseFloat(getComputedStyle(textarea).lineHeight)}px`;
    } else {
      textarea.style.overflowY = 'hidden';
    }

    setTextareaHeight(`${textarea.style.height}`);
  };


  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };


  const onRadioChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setRadioValue(e.target.value);
  };
  const onRadio1Change = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setRadio1Value(e.target.value);
  };
  const onRadio2Change = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setRadio2Value(e.target.value);
  };
  const onRadio3Change = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setRadio3Value(e.target.value);
  };
  const onRadio4Change = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setRadio4Value(e.target.value);
  };

  const handleCancel = () => {
    reset()
    setEmployeeRecord([])
    setIsModalOpen(false)
    setUpdateModalOpen(false)

  }

  const handleReviewDateCancel = () => {
    reset()
    setIsReviewDateModalOpen(false)
  }

  const getTimeLeft = (reviewDate: any) => {

    const currentDate = new Date();
    const targetDate = new Date(reviewDate);
    targetDate.setHours(0, 0, 0, 0); // Set targetDate to the start of the day

    if (currentDate > targetDate) {
      return "Expired";
    }

    const timeDifference = targetDate.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Calculate days left

    const monthsLeft = Math.floor(daysLeft / 30); // Calculate months left

    if (monthsLeft > 0) {
      return `${monthsLeft} ${monthsLeft === 1 ? "month" : "months"}`;
    } else {
      return `${daysLeft} ${daysLeft === 1 ? "day" : "days"}`;
    }
  }


  const showTabModal = () => {
    setTabModalOpen(true)
  }
  const handleUpdateCancel = () => {
    setUpdateModalOpen(false)
  }
  const showUpdateModal = (record: any) => {
    console.log(record)
    setUpdateModalOpen(true)
    setEmployeeId(record)
  }

  const { mutate: deleteData, isLoading: deleteLoading } = useMutation(deleteItem, {
    onSuccess: (data: any) => {
      queryClient.setQueryData([data?.url, data], data);
      loadData()
    },
    onError: (error) => {
      message.error('Error deleting record')
    }
  })

  function handleDelete(element: any) {
    const item = {
      url: 'AppraisalPerfTransactions',
      data: element
    }
    setLoading(true)
    deleteData(item)
  }

  function handleDeleteReviewDate(element: any) {
    const item = {
      url: 'AppraisalReviewDates',
      data: element
    }
    setLoading(true)
    deleteData(item)
  }

  const [fileList, setFileList] = useState<UploadFile[]>([

  ]);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };



  const columns: any = [
    {
      title: 'First Name',
      key: 'employeeId',
      render: (row: any) => {
        return getFirstName(row.employeeId)
      },
      sorter: (a: any, b: any) => {
        if (a.employeeId > b.employeeId) {
          return 1
        }
        if (b.employeeId > a.employeeId) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Surname',
      //   dataIndex: 'surname',
      key: "employeeId",
      render: (row: any) => {
        return getSurname(row?.employeeId)
      },
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
      title: 'DOB',
      render: (row: any) => {
        return getDOB(row.employeeId)
      },
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
      title: 'Gender',
      render: (row: any) => {
        return getGender(row.employeeId)
      },
      sorter: (a: any, b: any) => {
        if (a.sex > b.sex) {
          return 1
        }
        if (b.sex > a.sex) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Job Title',
      render: (row: any) => {
        return getJobTitle(row.employeeId)
      },
      sorter: (a: any, b: any) => {
        if (a.jobt > b.jobt) {
          return 1
        }
        if (b.jobt > a.jobt) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Email',
      render: (row: any) => {
        return getEmail(row.employeeId)
      },
      sorter: (a: any, b: any) => {
        if (a.jobt > b.jobt) {
          return 1
        }
        if (b.jobt > a.jobt) {
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
          <a onClick={() => showUpdateModal(record.id)} className='btn btn-light-info btn-sm'>
            Details
          </a>
          <a onClick={() => handleDelete(record)} className='btn btn-light-danger btn-sm'>
            Delete
          </a>
        </Space>
      ),

    },
  ]
  const columnTab1 = [

    {
      title: '#',
      dataIndex: 'key',
      sorter: (a: any, b: any) => {
        if (a.key > b.key) {
          return 1
        }
        if (b.key > a.key) {
          return -1
        }
        return 0
      },
    },
  ]
  const columnTab4 = [

    {
      title: '#',
      dataIndex: 'key',
      sorter: (a: any, b: any) => {
        if (a.key > b.key) {
          return 1
        }
        if (b.key > a.key) {
          return -1
        }
        return 0
      },
    },
  ]
  const columnTab2 = [

    {
      title: '#',
      dataIndex: 'key',
      sorter: (a: any, b: any) => {
        if (a.key > b.key) {
          return 1
        }
        if (b.key > a.key) {
          return -1
        }
        return 0
      },
    },
  ]
  const columnTab3 = [

    {
      title: '#',
      dataIndex: 'key',
      sorter: (a: any, b: any) => {
        if (a.key > b.key) {
          return 1
        }
        if (b.key > a.key) {
          return -1
        }
        return 0
      },
    },
  ]

  const loadData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${Api_Endpoint}/AppraisalPerfTransactions/tenant/${tenantId}`)
      setReviewDatesData(allReviewdates?.data)
      setGridData(response.data)
      //find objective with matching referenceId from all objectives
      const objectiveData: any = allObjectives?.data?.filter((item: any) => {
        return item.referenceId === referenceId
      })
      setCurrentObjective(objectiveData[0])
      console.log('objs: ',objectiveData)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const dataByID: any = allAppraisalsPerfTrans?.data?.filter((refId: any) => {
    return refId.referenceId === referenceId
  })

  const reviewDateByID: any = allReviewdates?.data?.filter((refId: any) => {
    return refId?.referenceId === referenceId
  })

  const emplyeesByPaygroup: any = alEmployees?.data?.filter((item: any) => {
    return item.paygroupId === parseInt(selectedPaygroup)
  })

  const emplyeeDetails: any = allAppraisalTransactions?.data?.find((item: any) => {
    return item.id === employeeId
  })

  // console.log(emplyeeDetails)

  const onEmployeeChange = (objectId: any) => {
    const newEmplo = alEmployees?.data?.find((item: any) => {
      return item.id === parseInt(objectId)
    })
    setEmployeeRecord(newEmplo)
  }
  const getFirstName = (employeeId: any) => {
    let firstName = null
    alEmployees?.data.map((item: any) => {
      if (item.id === employeeId) {
        firstName = item.firstName
      }
    })
    return firstName
  }
  const getSurname = (employeeId: any) => {
    let surname = null
    alEmployees?.data.map((item: any) => {
      if (item.id === employeeId) {
        surname = item.surname
      }
    })
    return surname
  }

  const getEmail = (employeeId: any) => {
    let email = null
    alEmployees?.data.map((item: any) => {
      if (item.id === employeeId) {
        email = item.email
      }
    })
    return email
  }

  const getID = (employeeId: any) => {
    let Id = null
    alEmployees?.data.map((item: any) => {
      if (item.id === employeeId) {
        Id = item.id
      }
    })
    return Id
  }
  const getGender = (employeeId: any) => {
    let gender = null
    alEmployees?.data.map((item: any) => {
      if (item.id === employeeId) {
        gender = item.gender
      }
    })
    return gender
  }
  const getDOB = (employeeId: any) => {
    let surname = ""
    alEmployees?.data.map((item: any) => {
      if (item.id === employeeId) {
        surname = item?.dob?.substring(0, 10)
      }
    })
    return surname
  }

  const getJobTitle = (employeeId: any) => {
    let jobTitleId: any = null
    alEmployees?.data.map((item: any) => {
      if (item.id === employeeId) {
        jobTitleId = item.jobTitleId
      }
    })
    let jobTitleName = null
    allJobTitles?.data.map((item: any) => {
      if (item.id === jobTitleId) {
        jobTitleName = item.name
      }
    })
    return jobTitleName
  }

  const parameterByAppraisal = allParameters?.data.filter((section: any) => section.appraisalId === parseInt(selectedAppraisalType))
    .map((item: any) => ({
      ...item,
      score: '',
      comment: '',
    }))

  const showModal = () => {
    setIsModalOpen(true)
    setFieldInit(parameterByAppraisal)
  }

  const handleSelectedChange = (e: any) => {
    setSelectedAppraisaltype(e.target.value)
    setFieldInit(parameterByAppraisal)
  }
  const handleScoreChange = (e: any, userId: any) => {
    const newUsers: any = fieldInit.map((user: any) => {
      if (user.id === userId) {
        return { ...user, score: parseInt(e.target.value) };
      }
      return user;
    });
    setFieldInit(newUsers);
  };

  const handleCommentChange = (e: any, userId: any) => {
    const newUsers: any = fieldInit.map((user: any) => {
      if (user.id === userId) {
        return { ...user, comment: e.target.value };
      }
      return user;
    });
    setFieldInit(newUsers);
  };

  useEffect(() => {
    loadData()
    const getjobTitleName = () => {
      let jobTitleName = ""
      allJobTitles?.data.map((item: any) => {
        if (item.id === employeeRecord?.jobTitleId) {
          jobTitleName = item.name
        }
      })
      setReferenceId(`${selectedPaygroup}-${selectedAppraisalType}-${selectedStartPeriod}-${selectedEndPeriod}`)
      setjobTitleName(jobTitleName)
      return jobTitleName
    }
    getjobTitleName()
  }, [
    allJobTitles?.data, employeeRecord?.jobTitleId, selectedAppraisalType,
    selectedPaygroup, selectedStartPeriod, selectedEndPeriod, allObjectives?.data,
    allReviewdates?.data, currentObjective
  ])

  const handleInputChange = (e: any) => {
    setSearchText(e.target.value)
    if (e.target.value === '') {
      loadData()
    }
  }

  const globalSearch = () => {
    // @ts-ignore
    filteredData = dataWithVehicleNum.filter((value) => {
      return (
        value.name.toLowerCase().includes(searchText.toLowerCase())
      )
    })
    setGridData(filteredData)
  }

  const handleUpdate = (e: any) => {
    e.preventDefault()
    const item: any = {
      url: 'AppraisalPerfTransactions',
      data: appraisalData
    }
    updateData(item)
  }


  const { isLoading: updateLoading, mutate: updateData } = useMutation(updateItem, {
    onSuccess: (data: any) => {
      queryClient.setQueryData([data?.url, appraisalData], data);
      reset()
      loadData()
      message.success('Appraisal objective updated successfully')
    },
    onError: (error) => {
      console.log('error: ', error)
    }
  })

  const endpoint = isReviewDateModalOpen ? `AppraisalReviewDates` : `AppraisalPerfTransactions`
  const submitApplicant = handleSubmit(async (values) => {
    if (isReviewDateModalOpen && !values.reviewDate) {
      message.error('Please select date')
      return
    }
    const selectedDate = new Date(values.reviewDate);
    const item = isReviewDateModalOpen ? {
      data: {
        appraisalId: parseInt(selectedAppraisalType),
        reviewDate: selectedDate.toISOString(),
        description: values.description,
        tenantId: tenantId,
        referenceId: referenceId,
      },
      url: endpoint,
    } : {
      data: {
        paygroupId: parseInt(selectedPaygroup),
        appraisalTypeId: parseInt(selectedAppraisalType),
        employeeId: employeeRecord.id,
        startPeriod: selectedStartPeriod,
        endPeriod: selectedEndPeriod,
        appraTranItems: fieldInit.map((item: any) => ({
          parameterId: item.id,
          score: item.score.toString(),
          comment: item.comment,
        })),
        tenantId: tenantId,
        referenceId: referenceId,
      },
      url: endpoint,
    }
    setLoading(true)
    postData(item)
  })

  const { mutate: postData, isLoading: postLoading } = useMutation(postItem, {
    onSuccess: () => {
      queryClient.invalidateQueries('appraisalPerfTransactions')
      queryClient.invalidateQueries('appraisalPerfTransactions')
      reset()
      setIsReviewDateModalOpen(false)
      setIsModalOpen(false)
      loadData()
      setSubmitLoading(false)
      setTextAreaValue('')
    },
    onError: (error: any) => {
      setSubmitLoading(false)
      console.log('post error: ', error)
    }
  })

  const reviewDatesColumn = [
    {
      title: 'Date',
      dataIndex: 'reviewDate',
      render: (text: any) => moment(text).format('DD/MM/YYYY')
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Count down',
      dataIndex: 'reviewDate',
      render: (text: any) => getTimeLeft(text),
    },
    {
      title: 'Action',
      render: (text: any, record: any) => (
        <Space>
          <a className='text-primary me-2' onClick={() => { }}>
            Send Notification
          </a>
          <a className='text-danger' onClick={() => handleDeleteReviewDate(record)}>
            Delete
          </a>
        </Space>
      ),
    }
  ]

  const handleObjectiveSave = handleSubmit(async (values) => {
    if (textAreaValue === '') {
      message.error('Please enter objective description')
      return
    }

    // check if current objective exist allObjectives using referenceId
    const currentObjective = allObjectives?.data.find((item: any) => item.referenceId === referenceId)
    if (currentObjective) {
      const item = {
        data: currentObjective,
        url: 'appraisalperfobjectives'
      }
      console.log('objItem: ', item)
      updateData(item)
      return
    } else {
      const item = {
        data: {
          description: textAreaValue,
          tenantId: tenantId,
          referenceId: referenceId,
        },
        url: 'appraisalperfobjectives',
      }
      console.log('objItem: ', item)
      postData(item)
    }
  })

  const showReviewDateModal = () => {
    setIsReviewDateModalOpen(true)
  }

  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
      }}
    >
      <form onSubmit={submitApplicant}>
        <div style={{ padding: "20px 0px 0 0px" }} className='col-12 row mb-0'>
          <div className='col-3 mb-7'>
            <label htmlFor="exampleFormControlInput1" className=" form-label">Paygroup</label>
            <select value={selectedPaygroup} onChange={(e) => setSelectedPaygroup(e.target.value)} className="form-select form-select-solid" aria-label="Select example">
              <option value="select paygroup">select paygroup</option>
              {allPaygroups?.data.map((item: any) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className='col-3 mb-7'>
            <label htmlFor="exampleFormControlInput1" className=" form-label">Appraisal Type</label>
            <select value={selectedAppraisalType} onChange={handleSelectedChange} className="form-select form-select-solid" aria-label="Select example">
              <option value="select appraisal type">select appraisal type</option>
              {allAppraisals?.data.map((item: any) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className='col-3 mb-7'>
            <label htmlFor="exampleFormControlInput1" className=" form-label">Start Period</label>
            <select value={selectedStartPeriod} onChange={(e) => setSelectedStartPeriod(e.target.value)} className="form-select form-select-solid" aria-label="Select example">
              <option value="select start period">select start period</option>
              {allPeriods?.data.map((item: any) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className='col-3 mb-7'>
            <label htmlFor="exampleFormControlInput1" className=" form-label">End Period</label>
            <select value={selectedEndPeriod} onChange={(e) => setSelectedEndPeriod(e.target.value)} className="form-select form-select-solid" aria-label="Select example">
              <option value="select end period"> select end period</option>
              {allPeriods?.data.map((item: any) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>
        </div>
      </form>
      {
        selectedPaygroup === null
          || selectedAppraisalType === null
          || selectedStartPeriod === null
          || selectedEndPeriod === null
          || selectedPaygroup === "select paygroup"
          || selectedAppraisalType === "select appraisal type"
          || selectedStartPeriod === "select start period"
          || selectedEndPeriod === "select end period" ? "" :
          <KTCardBody className='py-4 '>
            <div className='table-responsive'>
              {
                <>
                  <div style={{ padding: "0px 0px 0 0px" }} className='col-12 row mb-0'>
                    <div className='col-6 mb-7'>
                      <form onSubmit={handleObjectiveSave}>

                        <span className='form-label' >Objectives</span>
                        <textarea
                          {...register("description")}
                          name='objectives'
                          id="resizable-textarea"
                          className="form-control mb-0 mt-2"
                          value={!appraisalData?.description ? textAreaValue : appraisalData?.description}
                          onChange={handleTextareaChange}
                          style={{ height: textareaHeight }}
                        />
                      </form>
                      <a className='justify-content-end align-items-end d-flex btn text-primary' onClick={() => handleObjectiveSave()}>Save Objective</a>
                    </div>
                    <div className='col-6 mb-7'>
                      <div className='d-flex justify-content-between'>
                        <span className='form-label' >Review Dates</span>
                      </div>
                      <div
                        style={{
                          backgroundColor: 'white',
                          padding: '20px',
                          borderRadius: '5px',
                          boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
                        }}
                        className="border border-gray-400"
                      >
                        <Space className="justify-content-end align-items-end d-flex mb-2" >
                          <Button
                            onClick={showReviewDateModal}
                            className="btn btn-light-primary me-3 justify-content-center align-items-center d-flex"
                            type="primary" shape="circle" icon={<PlusOutlined style={{ fontSize: '16px' }} />} size={'middle'} />
                        </Space>
                        <Table columns={reviewDatesColumn} dataSource={reviewDateByID} loading={loading} />
                      </div>
                    </div>
                  </div>
                </>
              }
              <div className='d-flex justify-content-between'>
                <Space style={{ marginBottom: 16 }}>
                  <Input
                    placeholder='Enter Search Text'
                    onChange={handleInputChange}
                    type='text'
                    allowClear
                    value={searchText}
                  />
                  <Button type='primary' onClick={globalSearch}>
                    Search
                  </Button>
                </Space>
                <Space style={{ marginBottom: 16 }}>
                  <button type='button' className='btn btn-primary me-3' onClick={showModal}>
                    <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                    Add
                  </button>

                  <button type='button' className='btn btn-light-primary me-3'>
                    <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
                    Export
                  </button>
                </Space>
              </div>

              <Table columns={columns} key={dataByID.id} dataSource={dataByID} />

              <Modal
                title='Employee Details '
                open={isModalOpen}
                onCancel={handleCancel}
                closable={true}
                width="900px"
                footer={[
                  <Button key='back' onClick={handleCancel}>
                    Cancel
                  </Button>,
                  <Button
                    key='submit'
                    type='primary'
                    htmlType='submit'
                    loading={submitLoading}
                    onClick={submitApplicant}
                  >
                    Submit
                  </Button>,
                ]}
              >
                <form onSubmit={submitApplicant}>
                  <hr></hr>
                  <div style={{ padding: "20px 20px 0 20px" }} className='row mb-0 '>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label ">Employee ID</label>

                      <br></br>
                      <Select
                        {...register("employeeId")}
                        showSearch
                        placeholder="select a reference"
                        optionFilterProp="children"
                        style={{ width: "300px" }}
                        value={employeeRecord.id}
                        onChange={(e) => {
                          onEmployeeChange(e)
                        }}
                      >
                        <option>select</option>
                        {emplyeesByPaygroup?.map((item: any) => (
                          <option key={item.id} value={item.id}>{item.firstName} - {item.surname}</option>
                        ))}
                      </Select>
                    </div>
                  </div>
                  <div style={{ padding: "20px 20px 0 20px" }} className='row mb-0 '>

                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Job Title</label>
                      <input type="text" name="code" readOnly value={jobTitleName} className="form-control form-control-solid" />
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Job Role</label>
                      <input type="text" name="code" readOnly className="form-control form-control-solid" />
                    </div>
                  </div>
                  <div style={{ padding: "20px 20px 0 20px" }} className='row mb-0 '>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                      <input type="text" {...register("firstName")} readOnly defaultValue={employeeRecord?.firstName} className="form-control form-control-solid" />
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className=" form-label">Surname</label>
                      <input type="text" {...register("surname")} readOnly defaultValue={employeeRecord?.surname} className="form-control form-control-solid" />
                    </div>
                  </div>
                  <div style={{ padding: "20px 20px 10px 20px" }} className='row mb-7 '>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">DOB</label>
                      <input type="text" {...register("dob")} readOnly defaultValue={employeeRecord?.dob?.substring(0, 10)} className="form-control form-control-solid" />
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className=" form-label">Gender</label>
                      <input type="text" {...register("gender")} readOnly defaultValue={employeeRecord?.gender} className="form-control form-control-solid" />

                    </div>
                  </div>
                  <hr></hr>
                  {fieldInit?.map((user: any) => (
                    <div style={{ padding: '10px 20px 10px 20px' }} className="col-12" key={user.id}>
                      <label style={{ fontWeight: "bold" }} htmlFor="exampleFormControlInput1" className="form-label">
                        {user.name}
                      </label>
                      <div className='row'>
                        <div className='col-6'>
                          <label htmlFor="exampleFormControlInput1" className="form-label">
                            Score
                          </label>
                          <input
                            type="number"
                            min={1}
                            max={5}
                            placeholder='score from 1 to 5'
                            className="form-control form-control-solid"
                            value={user.score}
                            onChange={(e) => handleScoreChange(e, user.id)}
                          />
                        </div>
                        <div className='col-6'>
                          <label htmlFor="exampleFormControlInput1" className="form-label">
                            Comment
                          </label>
                          <textarea
                            value={user.comment}
                            onChange={(e) => handleCommentChange(e, user.id)}
                            className="form-control form-control-solid"
                            placeholder="comments (optional)"
                            aria-label="With textarea"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div style={{ padding: "20px 20px 30px 20px" }} className='col-12 mb-3'>
                    <label style={{ padding: "0px 40px 0 0px" }} htmlFor="exampleFormControlInput1" className=" form-label">Supporting Document :</label>

                    <input {...register("documentUrl")} className='mb-3 btn btn-outline btn-outline-dashed btn-outline-primary btn-active-light-primary' type="file" />
                  </div>

                  {/* <form>
                    <hr></hr>
                  <div>
                    <div style={{display:"flex", }} className="tabs">
                      <div
                        className={`tab ${activeTab === "tab1" ? "active" : ""}`}
                        onClick={() => handleTabClick("tab1")}
                      >
                        Accomplishments
                      </div>

                      <div className={`tab ${activeTab === "tab2" ? "active" : ""}`}
                        onClick={() => handleTabClick("tab2")}
                      >
                        Areas of Improvements
                      </div>
                      <div
                        className={`tab ${activeTab === "tab3" ? "active" : ""}`}
                        onClick={() => handleTabClick("tab3")}
                      >
                        Goals for Performance
                      </div>
                      <div
                        className={`tab ${activeTab === "tab4" ? "active" : ""}`}
                        onClick={() => handleTabClick("tab4")}
                      >
                        Supporting Documentation
                      </div>
                    </div>
                    <div className="tab-content">
                      {activeTab === "tab1" && 
                      <div>
                        <div className='col-12 mb-3'>
                          <label style={{ padding: "0px 40px 0 0px" }} htmlFor="exampleFormControlInput1" className=" form-label">Score</label>
                          <Radio.Group onChange={onRadio1Change} value={radio1Value}>
                            <Radio value={1}>1</Radio>
                            <Radio value={2}>2</Radio>
                            <Radio value={3}>3</Radio>
                            <Radio value={4}>4</Radio>
                            <Radio value={5}>5</Radio>
                          </Radio.Group>
                          <textarea style={{ margin: "10px 0px 0 0px" }} {...register("accomComment")} className="form-control form-control-solid" placeholder='comments (optional)' aria-label="With textarea"></textarea>
                        </div>
                        
                      </div>}
                      
                      {activeTab === "tab2" && 
                      <div>
                        <div className='col-12 mb-3'>
                          <label style={{ padding: "0px 40px 0 0px" }} htmlFor="exampleFormControlInput1" className=" form-label">Score</label>
                          <Radio.Group onChange={onRadio2Change} value={radio2Value}>
                            <Radio value={1}>1</Radio>
                            <Radio value={2}>2</Radio>
                            <Radio value={3}>3</Radio>
                            <Radio value={4}>4</Radio>
                            <Radio value={5}>5</Radio>
                          </Radio.Group>
                          <textarea style={{ margin: "10px 0px 0 0px" }} {...register("improvComment")} className="form-control form-control-solid" placeholder='comments (optional)' aria-label="With textarea"></textarea>
                        </div>
                      </div>}

                      {activeTab === "tab3" && 
                      <div>
                        <div className='col-12 mb-3'>
                          <label style={{ padding: "0px 40px 0 0px" }} htmlFor="exampleFormControlInput1" className=" form-label">Score</label>
                          <Radio.Group onChange={onRadio3Change} value={radio3Value}>
                            <Radio value={1}>1</Radio>
                            <Radio value={2}>2</Radio>
                            <Radio value={3}>3</Radio>
                            <Radio value={4}>4</Radio>
                            <Radio value={5}>5</Radio>
                          </Radio.Group>
                          <textarea style={{ margin: "10px 0px 0 0px" }} {...register("goalComment")} className="form-control form-control-solid" placeholder='comments (optional)' aria-label="With textarea"></textarea>
                        </div>
                      </div>}

                      {activeTab === "tab4" && 
                      <div>
                        <div className='col-12 mb-3'>
                          <input {...register("documentUrl")}  className='mb-3 btn btn-outline btn-outline-dashed btn-outline-primary btn-active-light-primary' type="file" />
                        
                        </div>
                      </div>}
                    </div>
                  </div>
                </form> */}
                </form>
              </Modal>
              <Modal
                title={"Details of ID " + employeeId}
                open={updateModalOpen}
                onCancel={handleUpdateCancel}
                closable={true}
                width="900px"
                footer={[
                  <Button key='back' onClick={handleUpdateCancel}>
                    Cancel
                  </Button>,
                  <Button
                    key='submit'
                    type='primary'
                    htmlType='submit'
                    loading={submitLoading}
                    onClick={submitApplicant}
                  >
                    Done
                  </Button>,
                ]}
              >
                <h3>Will be updated soon</h3>
              </Modal>
              <Modal
                title='Add a review date'
                open={isReviewDateModalOpen}
                onCancel={handleReviewDateCancel}
                closable={true}
                footer={[
                  <Button key='back' onClick={handleReviewDateCancel}>
                    Cancel
                  </Button>,
                  <Button
                    key='submit'
                    type='primary'
                    htmlType='submit'
                    loading={reivewDateSubmitLoading}
                    onClick={submitApplicant}
                  >
                    Done
                  </Button>,
                ]}
              >
                <form onSubmit={submitApplicant}>
                  <div className='row mb-7 mt-7'>
                    <div className='col-12 mb-7'>
                      <label htmlFor='exampleFormControlInput1' className='form-label'>Review Date</label>
                      <input
                        {...register("reviewDate")}
                        type='date'
                        className='form-control form-control-solid'
                      />
                    </div>
                    <div className='mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Description</label>
                      <input
                        {...register("description")}
                        // onChange={handleChange}
                        className="form-control form-control-solid" />
                    </div>
                  </div>
                </form>
              </Modal>
            </div>
          </KTCardBody>
      }

    </div >
  )
}

export { AppraisalPerformance }



