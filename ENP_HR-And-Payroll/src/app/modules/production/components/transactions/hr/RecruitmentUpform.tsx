import { message } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { Api_Endpoint, fetchCategories, fetchJobTitles, fetchPaygroups, fetchRecruitmentTransactions, fetchUnits } from '../../../../../services/ApiCalls'

function RecruitmentUpform() {
    const { register, reset, handleSubmit } = useForm()
    const [gridData, setGridData] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [selectedValue, setSelectedValue] = useState("");
    const [submitLoading, setSubmitLoading] = useState(false)

    const [messageApi, contextHolder] = message.useMessage();


    function refreshPage() {
      setTimeout(()=>{
          window.location.reload();
      }, 500);
      // console.log('page to reload')
  }

    const warning = () => {
        messageApi.open({
          type: 'warning',
          style:{fontSize:"18px"},
          content: 'Sorry reference already exist',
        });
      };
      const success = () => {
        messageApi.open({
          type: 'success',
          style:{fontSize:"20px"},
          content: 'Submitted successfully',
        });
      };

      const warnUser = () => {
        messageApi.open({
          type: 'error',
          content: 'Can not submit without a reference number!',
          className: 'custom-class',
          style: {
            marginTop: '10vh',
            fontSize:"18px"
          }
        });
      };

    const { data: allPaygroups } = useQuery('paygroup', fetchPaygroups, { cacheTime: 5000 })
    const { data: allCategories } = useQuery('categories', fetchCategories, { cacheTime: 5000 })
    const { data: allUnits } = useQuery('units', fetchUnits, { cacheTime: 5000 })
    const { data: allJobTitles } = useQuery('jobtitles', fetchJobTitles, { cacheTime: 5000 })
    const { data: allRecuitments } = useQuery('recruitments', fetchRecruitmentTransactions, { cacheTime: 5000 })
      
    const url = `${Api_Endpoint}/RecruitmentTransactions`
    const OnSUbmit = handleSubmit(async (values) => {
      setLoading(true)
      const data = {
        reference: values.reference,
        description: values.description,
        startDate: values.startDate,
        endDate: values.endDate,
        paygroupId: parseInt(values.paygroupId),
        categoryId: parseInt(values.categoryId),
        jobTitleId: parseInt(values.jobTitleId),
        unitId: parseInt(values.unitId),
      }
      console.log(data)
      try {
        if(data.reference!==""){
          const response = await axios.post(url, data)
          setSubmitLoading(false)
          reset()
          // refreshPage();
          success()
          return response.statusText
        }
        else{
          warnUser();
        }
      } catch (error: any) {
        warning()
        setSubmitLoading(false)
        return error.statusText
      }
    })
  
  return (
     <form onSubmit={OnSUbmit}>
      {contextHolder}
        <div style={{ padding: "0px 0px 0px 0px" }} className='col-12 row'>
          <div style={{ padding: "20px 20px 0 20px" }} className='col-6 row mb-0'>
            <div className='col-6 mb-7'>
              <label htmlFor="exampleFormControlInput1" className=" form-label">Reference#</label>
              <input type="text" {...register("reference")} className="form-control form-control-solid" />
            </div>
            <div className='col-6 mb-7'>
              <label htmlFor="exampleFormControlInput1" className=" form-label">Description</label>
              <input type="textarea" {...register("description")} className="form-control form-control-solid" />
            </div>
          </div>
          <div style={{ padding: "20px 0px 0 0px" }} className='col-6 row mb-0'>
            <div className='col-6 mb-3'>
              <label htmlFor="exampleFormControlInput1" className=" form-label">Start date</label>
              <input type="date" {...register("startDate")} className="form-control form-control-solid" />
            </div>

            <div className='col-6 mb-7'>
              <label htmlFor="exampleFormControlInput1" className=" form-label">End date</label>
              <input type="date" {...register("endDate")} className="form-control form-control-solid" />
            </div>
          </div>
          <div style={{ padding: "20px 20px 0 20px" }} className='col-6 row mb-0'>
            <div className='col-6 mb-7'>
              <label htmlFor="exampleFormControlInput1" className=" form-label">Paygroup</label>
              <select className="form-select form-select-solid" {...register("paygroupId")} aria-label="Select example">
                <option> select</option>
                {allPaygroups?.data.map((item: any) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
            <div className='col-6 mb-7'>
              <label htmlFor="exampleFormControlInput1" className=" form-label">Category</label>
              <select className="form-select form-select-solid" {...register("categoryId")} aria-label="Select example">
                <option> select</option>
                {allCategories?.data.map((item: any) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div style={{ padding: "20px 0px 0 0px" }} className='col-6 row mb-0'>
            <div className='col-6 mb-7'>
              <label htmlFor="exampleFormControlInput1" className=" form-label">Job Title</label>
              <select className="form-select form-select-solid" {...register("jobTitleId")} aria-label="Select example">
                <option> select</option>

                {allJobTitles?.data.map((item: any) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
            <div className='col-6 mb-7'>
              <label htmlFor="exampleFormControlInput1" className=" form-label">Unit</label>
              <select className="form-select form-select-solid" {...register("unitId")} aria-label="Select example">
                <option> select</option>
                {allUnits?.data.map((item: any) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div style={{display:"flex", justifyContent:"flex-end", padding:"0px 35px 20px 20px"}}>

          <button  type='button' onClick={OnSUbmit} className='btn btn-primary me-3'>Submit</button>
        </div>
      </form> 
  )
}

export default RecruitmentUpform