import { Button, Modal, Select } from "antd"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { fetchDocument } from "../../../../../../services/ApiCalls"
import { KTSVG } from "../../../../../../../_metronic/helpers"

const EmployeeSelection = (props: any) => {
    let [employeeRecord, setEmployeeRecord]= useState<any>(null)
    const tenantId:any = localStorage.getItem('tenant')
    const [jobTitleName, setJobTitleName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [submitLoading, setSubmitLoading] = useState(false)


    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleCancel = () => {
        setEmployeeRecord(null)
        employeeRecord=null
        setIsModalOpen(false)
    }
    const { data: employees } = useQuery('employees', () => fetchDocument(`Employees/tenant/${tenantId}`), { cacheTime: 5000 })
    const { data: jobTitles } = useQuery('jobTitles', () => fetchDocument(`JobTitles/tenant/${tenantId}`), { cacheTime: 5000 })

    const onEmployeeChange = (objectId: any) => {
        if (objectId === "select") {
          setEmployeeRecord(null)
          return
        }

        const newEmplo = employees?.data.find((item:any)=>{
          return item.id===parseInt(objectId)
        }) // console.log(newEmplo)
        setEmployeeRecord(newEmplo)
      }



      const emplyeesByPaygroup:any = employees?.data?.filter((item:any) =>{
        return  item.departmentId===parseInt(props.departmentId)
        })

        const getJobTitleName = () => {
          let JobTitleName = ""
          jobTitles?.data.map((item: any) => {
            if (item.id === employeeRecord?.jobTitleId) {
                console.log(item?.name)
              JobTitleName=item?.name
            }
          })
          setJobTitleName(JobTitleName)
          return JobTitleName
        }

        console.log(jobTitles?.data);
        

        useEffect(() => {
            getJobTitleName()
          }, [jobTitles?.data, employeeRecord, employeeRecord?.jobTitleId])

    return (
        <>
            <button type='button' className='btn btn-primary me-3' onClick={showModal}>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                Add
            </button>

            <Modal
                title='Employee Details'
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
                //   onClick={}
                  >
                      Submit
                  </Button>,
                ]}
            >
                <form 
                // onSubmit={submitCompensation} 
                >
                    <hr></hr>
                    <div style={{padding: "20px 20px 0 20px"}} className='row mb-0 '>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Employee ID</label>
                      <br></br>
                      <Select
                          showSearch
                          placeholder="select employeeId"
                          optionFilterProp="children"
                          
                          style={{width:"300px", backgroundColor:"#f5f8fa", borderColor:"#f5f8fa",color:"#000000", transition:"all 0.3s"}}
                          value={employeeRecord?.id}
                          onChange={(e)=>{
                            onEmployeeChange(e)
                          }}
                        >
                          <option>select</option>
                          {emplyeesByPaygroup?.map((item: any) => (
                            <option key={item.id} value={item.id}>
                                {item.employeeId}
                            </option>
                            ))}
                        </Select>
                    </div>
                   
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Job Title</label>
                      <input type="text" name="jName" value={jobTitleName} className="form-control form-control-solid"/>
                    </div>
                  
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                      <input type="text" name="firstName" value={employeeRecord?.firstName} className="form-control form-control-solid"/>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="required form-label">Surname</label>
                      <input type="text" name="surname" value={employeeRecord?.surname} className="form-control form-control-solid"/>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="form-label">DOB</label>
                      <input type="text" name="dob" value={employeeRecord?.dob?.substring(0,10)} readOnly className="form-control form-control-solid"/>
                    </div>
                    <div className='col-6 mb-3'>
                      <label htmlFor="exampleFormControlInput1" className="required form-label">Gender</label>
                      <input type="text" name="gender" value={employeeRecord?.gender} className="form-control form-control-solid"/>
                    </div>
                  
                  </div>
                </form>
          </Modal>
        </>
    )
}

export { EmployeeSelection }