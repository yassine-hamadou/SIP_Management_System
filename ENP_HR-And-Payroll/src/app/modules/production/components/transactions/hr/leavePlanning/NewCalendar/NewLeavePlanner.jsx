import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { Button, Form, Input, InputNumber, Modal, Space, Table } from 'antd'
import { fetchDocument, fetchEmployees, postItem, updateItem} from '../../../../../../../services/ApiCalls'
import moment from "moment";
import events from "./events";
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useForm } from 'react-hook-form'
import "react-big-calendar/lib/css/react-big-calendar.css";



const  NewLeavePlanner= () =>{
  const [eventsData, setEventsData] = useState(events);
  moment.locale("en-GB");
  const localizer = momentLocalizer(moment);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [gridData, setGridData] = useState([])
  const tenantId = localStorage.getItem('tenant')
  const { register, reset, handleSubmit } = useForm()
  const queryClient = useQueryClient()


  const { data: allEmployees } = useQuery('employees', () => fetchEmployees(tenantId), { cacheTime: 5000 })
  const { data: leaves } = useQuery('leaves', () => fetchDocument(`leaves/tenant/${tenantId}`), { cacheTime: 5000 })

  const loadData = async () => {
    // setLoading(true)
    try {
      // const response = await axios.get(`${Api_Endpoint}/UserApplications`)
      const response = await fetchDocument(`leavePlanings/tenant/${tenantId}`)
      setGridData(response.data)
      // setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleSelect = ({ start, end }) => {
    console.log(start);
    console.log(end);
    const title = window.prompt("New Event name");
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title
        }
      ]);
  };

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    reset()
    setIsModalOpen(false)
  }

  const OnSubmit = handleSubmit(async (values) => {
    // setLoading(true)
    const item = {
        data: {
          employeeId: values.employeeId,
          toDate: values.toDate,
          leaveId: values.leaveId,
          fromDate: values.fromDate,
          tenantId: tenantId,
        },
        url: "leavePlanings"
    }
    console.log(item?.data)

    postData(item)
})

const getCatName = (id) => {
  let categoryName = ""
  leaves?.data.map((item) => {
    if (item.id === id) {
      categoryName=item.name
    }
  })
  return categoryName
} 


const getEmployee = (id) => {
  let categoryName = ""
  allEmployees?.data.map((item) => {
    if (item.id === id) {
      categoryName=item.firstName + " " + item.surname
    }
  })
  return categoryName
} 

const dataWithIndex = gridData.map((item) => ({
  ...item,
  title: `${getCatName(item?.leaveId )} - ${getEmployee(item?.employeeId)}` ,
  start: item.fromDate,
  end: item.toDate,
}))

const { mutate: postData, isLoading: postLoading } = useMutation(postItem
  , {
  onSuccess: (data) => {
      queryClient.setQueryData(["", data], data);
      loadData()
      reset()
      setIsModalOpen(false)
  },
  onError: (error) => {
      console.log('post error: ', error)
  }
})

  return (
    <div style={{padding: "50px 30px"}}>
    {/* <div style={{background:"white", padding: "50px 30px", borderRadius:"5px", boxShadow:"2px 5px 15px rgba(0,0,0,0.06)"}}> */}
      <Calendar
        views={["agenda", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={dataWithIndex}
        style={{ height: "70vh" }}
        onSelectEvent={(event) => alert(`${getCatName(event.leaveId )} - ${getEmployee(event.employeeId)}`)}
        onSelectSlot={showModal}
      />
      
      <Modal
            title='New Leave Schedule'
            open={isModalOpen}
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
                // loading={submitLoading}
                onClick={OnSubmit}
              >
                Submit
              </Button>,
            ]}
          >
            <form
              onSubmit={OnSubmit}
            >
              <hr></hr>
              <div style={{ padding: "20px 20px 20px 20px" }} className='row mb-0 '>
                
                <div className=' mb-7'>
                  <label className="form-label">Employee</label>
                  <select  className="form-select form-select-solid"  {...register("employeeId")} aria-label="Select example">
                    <option>select </option>
                    {allEmployees?.data.map((item) => (
                      <option value={item.id}>{item.employeeId} - {item.firstName} {item.surname}</option>
                    ))}
                  </select>
                </div>
                
                <div className=' mb-7'>
                  <label className="form-label">Leave Type</label>
                  <select  className="form-select form-select-solid" {...register("leaveId")} aria-label="Select example">
                    <option>select </option>
                    {leaves?.data.map((item) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div className="row">
                  <div className='col-md-6 mb-7'>
                    <label className="form-label">Start</label>
                    <input type="date" {...register("fromDate")} className="form-control form-control-solid" />
                  </div>
                  <div className='col-md-6 mb-7'>
                    <label className="form-label">End</label>
                    <input type="date" {...register("toDate")} className="form-control form-control-solid" />
                  </div>
                </div>
              </div>
            </form>
          </Modal>
        
    </div>
  );
}



export  {NewLeavePlanner};
