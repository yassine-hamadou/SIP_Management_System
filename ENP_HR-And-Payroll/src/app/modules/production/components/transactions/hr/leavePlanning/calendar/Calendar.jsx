import {L10n} from '@syncfusion/ej2-base'
import {
  ScheduleComponent,
  Day,
  Week,
  Month,
  Agenda,
  Inject, DragAndDrop, Resize, WorkWeek, ViewsDirective, ViewDirective
} from "@syncfusion/ej2-react-schedule";
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars'
import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns'
import {useMutation, useQuery, useQueryClient} from 'react-query'
import '@syncfusion/ej2-base/styles/material.css'
import '@syncfusion/ej2-calendars/styles/material.css'
import '@syncfusion/ej2-dropdowns/styles/material.css'
import '@syncfusion/ej2-inputs/styles/material.css'
import '@syncfusion/ej2-lists/styles/material.css'
import '@syncfusion/ej2-navigations/styles/material.css'
import '@syncfusion/ej2-popups/styles/material.css'
import '@syncfusion/ej2-splitbuttons/styles/material.css'
import '@syncfusion/ej2-react-schedule/styles/material.css'
import '@syncfusion/ej2-buttons/styles/material.css'
import {Input, message} from 'antd'
import {
  deleteLeavePlanning,
  fetchDepartments,
  fetchEmployees,
  fetchLeaveTypes,
  fetchUnits,
  postLeavePlanning, updateLeavePlanning
} from "../../../../../../../services/ApiCalls";
import {fetchLeavePlannings} from "./requests";

/**
 *  Schedule editor custom fields sample
 */

//Editing editor buttons
L10n.load({
  'en-US': {
    schedule: {
      saveButton: 'Schedule Leave',
      cancelButton: 'Cancel',
      deleteButton: 'Remove',
      newEvent: 'Schedule Employee Leave',
    },
  },
})

const Calendar = ({chosenFilter: any}) => {
  // const [serviceTypeDropDownValues, setserviceTypeDropDownValues] = useState([])
  let scheduleObj
  let empDropDownObj
  const queryClient = useQueryClient()
  // React Query
  //Get
  const {data: employeeData} = useQuery('employeeData',()=> fetchEmployees(tenantId), {
    refetchOnWindowFocus: false,
    staleTime: 300000,
  })
 const tenantId = localStorage.getItem('tenant')
  console.log('tenantId', tenantId)

  const {data: leaveTypes} = useQuery('leaveTypes', ()=>fetchLeaveTypes(tenantId), {
    refetchOnWindowFocus: false,
    staleTime: 300000,
  })
  
  const {data: leaveData} = useQuery('leavePlannings',  () => fetchLeavePlannings(tenantId), {
    refetchOnWindowFocus: false,
    staleTime: 300000,
  });

  // post leave planning with use mutation
  const {mutate: addLeavePlanning} = useMutation('addLeavePlanning', postLeavePlanning, {
    onSuccess: () => {
        message.success('Leave Planning Added Successfully').then(r => r)
        // refetch the leave planning data
        queryClient.invalidateQueries('leavePlannings').then(r => r)
    },
    onError: (error) => {
        message.error(error.message).then(r => r)
    }
  })

  const {mutate: rmLeavePlanning} = useMutation('deleteLeavePlanning', deleteLeavePlanning, {
    onSuccess: () => {
        message.success('Leave Planning Removed Successfully').then(r => r)
        // refetch the leave planning data
        queryClient.invalidateQueries('leavePlannings').then(r => r)
    },
    onError: (error) => {
        message.error(error.message).then(r => r)
    }
  })

  const {mutate: updateLeave} = useMutation('updateLeavePlanning', updateLeavePlanning, {
    onSuccess: () => {
        message.success('Leave Planning Updated Successfully').then(r => r)
        // refetch the leave planning data
        queryClient.invalidateQueries('leavePlannings').then(r => r)
    },
    onError: (error) => {
        message.error(error.message).then(r => r)
    }
  })


  const localData = {
    dataSource: leaveData?.data?.map((leave) => {
        return {
            Id: leave.id,
            StartTime: leave.fromDate,
            EndTime: leave.toDate,
            Subject: `${employeeData?.data?.find((employee) => {
              return employee.id === leave.employeeId
            })?.surname}: ${leaveTypes?.data?.find((leaveType) => {
              return leaveType.id === leave.leaveId
            })?.name}`,
            employeeId: leave.employeeId,
            leaveType: leave.leaveId,
        }
    }),
  }
  console.log("dataSource", localData)


  //Access the same location query from cycle details component
  console.log('employeeData', employeeData)
  console.log('leaveData', leaveData)

    // let dropDownListObject;

  const employeesQueryData = useQueryClient()
  const unitQuery = useQuery('unitData', fetchUnits)

  console.log('employeesQueryData', employeesQueryData)
  function editorTemplate(props) {
    console.log('props', props)
    // if (props.serviceTypeId) {
    //   const fleetModel = vmQuery.getQueryData('vmequps')?.data?.find((fleet) => fleet.fleetID.trimEnd() === props.fleetId.trimEnd())?.modlName
    //   // const serviceTypesOfSelectedModel = serviceTypes?.data?.filter((service) => service.model.trimEnd() === fleetModel.trimEnd())
    //
    //   // Setting Service Type dropdown values
    //   // dropDownListObject.dataSource = serviceTypesOfSelectedModel.map((service) => {
    //   //   return { text: service.name, value: service.id }
    //   // })
    //   // dropDownListObject.dataBind() // refresh the dropdown list
    // }
    function getEmployeeDeparment(e) {
      console.log("e", e)
      if (e.itemData) {
        console.log("e.itemData", e.itemData)
        // udpate location dropdown component to automatically select the selected employee unit
        // console.log("employeeDatay", employeesQueryData.)
        const employeeDepartId = employeesQueryData.getQueryData('employeeData')?.data?.find((employee) => employee.id === e.itemData.value).departmentId
        const unitInputField = document.getElementById("Location")
        console.log("unitInputField", unitInputField)
        //get the unit of the selected employee

        if (employeeDepartId === null || employeeDepartId === undefined) {
          message.error("Employee does not have a department").then(r => r)
        }
        else {
          unitInputField.value = unitQuery.data?.data?.find((unit) => unit.departmentId === employeeDepartId).name
          console.log("unitInputField", unitInputField)
        }
       // console.log("employeeDepartId", employeeDepartId)
      }
    }
    return props !== undefined ? (
      <table className='custom-event-editor' style={{width: '100%'}} cellPadding={5}>
        <tbody>
          <tr>
            <td className='e-textlabel'>Employee Code</td>
            <td colSpan={4}>
              <DropDownListComponent
                id='empCode'
                placeholder='Choose Employee Code'
                ref={(scope) => {
                  empDropDownObj = scope
                }}
                data-name='employeeId'
                className='e-field'
                style={{width: '100%'}}
                dataSource={employeeData?.data?.map((employee) => {
                  return {
                    text: `${employee.firstName} ${employee.surname} - Code: ${employee.id}`,
                    value: employee.id, //this is the value that will be sent to the backend
                  }
                })}
                fields={{text: 'text', value: 'value'}}
                // value={props && props.employeeId? `${props.employeeId}` : null}
                change={(e) => getEmployeeDeparment(e)}
              />
            </td>
          </tr>
          <tr>
            <td className='e-textlabel'>Department</td>
            <td colSpan={4}>
              <Input
                id='Location'
                readOnly
                disabled={true}
                placeholder='Choose Employee'
                data-name='locationId'
                className='e-field'
                style={{width: '100%', fontColor: 'black'}}
              />
            </td>
          </tr>
          <tr>
            <td className='e-textlabel'>Type of Leave</td>
            <td colSpan={4}>
              <DropDownListComponent
                id='leaveType'
                placeholder='Choose Type of Leave'
                data-name='leaveType'
                className='e-field'
                // ref={(scope) => (dropDownListObject = scope)}
                style={{width: '100%'}}
                dataSource={leaveTypes?.data?.map((leaveType) => {
                  return {
                    text: `${leaveType.name}`,
                    value: leaveType.id
                  }
                })}
                fields={{text: 'text', value: 'value'}}
                value={props?.leaveId}
              />
            </td>
          </tr>
          <tr>
            <td className='e-textlabel'>From</td>
            <td colSpan={4}>
              <DateTimePickerComponent
                id='StartTime'
                format='dd/MM/yy hh:mm a'
                data-name='timeStart'
                value={props && props.timeStart ? new Date(props?.timeStart) : props?.StartTime}
                className='e-field'
              ></DateTimePickerComponent>
            </td>
          </tr>
          <tr>
            <td className='e-textlabel'>To</td>
            <td colSpan={4}>
              <DateTimePickerComponent
                id='EndTime'
                format='dd/MM/yy hh:mm a'
                data-name='timeEnd'
                value={props && props.EndTime ? new Date(props?.EndTime) : props?.EndTime}
                className='e-field'
              ></DateTimePickerComponent>
            </td>
          </tr>
        </tbody>
      </table>
    ) : (
      message.error('Please select an event')
    )
  }

  //on double click event

  // Fired before the editorTemplate closes.
  const onActionBegin = (args) => {
    console.log('args in action begin', args)
    let data = args.data instanceof Array ? args.data[0] : args.data
    if (args.requestType === 'eventCreate') {
      console.log(scheduleObj)
      // make data in array so that I can map though it
      const preparedData = [{...data}]
      console.log('preparedData', preparedData)
      // map through the array and set each field to what the calendar will understand
      const formattedDataToPost = preparedData.map((schedule) => {
        console.log('leavePlanning', schedule)
        return {
          employeeId: schedule.employeeId,
          id: schedule.Id,
          fromDate: schedule.StartTime,
          toDate: schedule.EndTime,
          leaveId: schedule.leaveType,
          tenantId: tenantId
        }
      })
      //Since format is an array, I need to change it to the format that the API will understand which is an object
      const dataToPost = formattedDataToPost[0]
        console.log('dataToPost', dataToPost)
      addLeavePlanning(dataToPost)
    }
    if (args.requestType === 'eventRemove') {
      args.cancel = true
      console.log('data to delete', data)
      rmLeavePlanning(data.Id)
    }
    if (args.requestType === 'eventChange') {
      args.cancel = true
      console.log('data', data)
      console.log('args in eventChange', args)
      const preparedData = [{...data}]
      const formattedDataToEdit = preparedData.map((schedule) => {
        return {
          employeeId: schedule.employeeId,
          id: schedule.Id,
          fromDate: schedule.StartTime,
          toDate: schedule.EndTime,
          leaveId: schedule.leaveType,
          tenantId: tenantId
        }
      })
      updateLeave(formattedDataToEdit[0])
    }
  }
  // const headerTemplate = (props) => {
  //     return (
  //         <div>
  //             {props.elementType === "event" ? (<div className="e-cell-header e-popup-header">
  //                 <div className="e-header-icon-wrapper">
  //                     {/*<button id="edit" className="e-edit e-edit-icon e-icons" title="Edit"/>*/}
  //                     <button id="close" className="e-close e-close-icon e-icons" title="Close"/>
  //                 </div>
  //             </div>) : (<div className="e-event-header e-popup-header">
  //                 <div className="e-header-icon-wrapper">
  //                     <button id="close" className="e-close e-close-icon e-icons" title="CLOSE"/>
  //                 </div>
  //             </div>)}
  //         </div>
  //     );
  // }
  // const contentTemplate = (props) => {
  //     return (<div className="quick-info-content">
  //         {props.elementType === 'cell' ?
  //             <div className="e-cell-content">
  //                 <div className="content-area">asdasd
  //                     {/*<TextBoxComponent id="title" ref={(textbox) => titleObj = textbox} placeholder="Title"/>*/}
  //                 </div>
  //                 <div className="content-area">
  //                     {/*<DropDownListComponent id="eventType" ref={(ddl) => eventTypeObj = ddl} dataSource={roomData} fields={{ text: "Name", value: "Id" }} placeholder="Choose Type" index={0} popupHeight="200px"/>*/}
  //                 </div>
  //                 <div className="content-area">
  //                     {/*<TextBoxComponent id="notes" ref={(textbox) => notesObj = textbox} placeholder="Notes"/>*/}
  //                 </div>
  //             </div>
  //             :
  //             <div className="event-content">
  //                 <div className="meeting-type-wrap">
  //                     <label>Subject</label>:
  //                     <span>sdfsdfs</span>
  //                 </div>
  //                 <div className="meeting-subject-wrap">
  //                     <label>Type</label>:sdfsdf
  //                     {/*<span>{getEventType(props)}</span>*/}
  //                 </div>
  //                 <div className="notes-wrap">
  //                     {/*<Link to={"/checkListForm/tabs"}>View Details</Link>*/}
  //                     {/*<span>{props.Description}</span>*/}
  //                 </div>
  //             </div>}
  //     </div>);
  // }
  // const footerTemplate = (props) => {
  //     console.log("props", props);
  //     return (
  //         <div className="quick-info-footer">
  //
  //             {props.elementType === "event" ?
  //                 <div className="cell-footer">
  //                     <ButtonComponent id="more-details" cssClass='e-flat' content="More Details" />
  //                     <ButtonComponent id="add" cssClass='e-flat' content="Add" isPrimary={true} />
  //                 </div>
  //                 :
  //                 <div className="event-footer">
  //                     <ButtonComponent id="delete" cssClass='e-flat' content="Delete" />
  //                     <ButtonComponent id="more-details" cssClass='e-flat' content="More Details" isPrimary={true} />
  //                 </div>
  //             }
  //         </div>
  //     );
  // }

  const onPopupOpen = (props) => {
    console.log('onPop Open props', props)
    if (props?.type === 'Editor') {
      console.log('empDropDownObj Open props', empDropDownObj)
      empDropDownObj.value = props.data.employeeId
      empDropDownObj.dataBind()
    }
  }
  return (
    <div className='schedule-control-section'>
      <div className='col-lg-12 control-section'>
        <div className='control-wrapper'>
          {/*<ScheduleComponent*/}
          {/*  width='100%'*/}
          {/*  height='650px'*/}
          {/*  ref={(schedule) => (scheduleObj = schedule)}*/}
          {/*  eventSettings={*/}
          {/*    // Filtering based on the chosen location*/}
          {/*    schedulesData &&*/}
          {/*    localData(*/}
          {/*      chosenLocationIdFromDropdown*/}
          {/*        ? schedulesData.data.filter(*/}
          {/*            (schedule) => schedule.locationId === chosenLocationIdFromDropdown*/}
          {/*          )*/}
          {/*        : schedulesData.data*/}
          {/*    )*/}
          {/*  }*/}
          {/*  currentView='Month'*/}
          {/*  eventRendered={onEventRendered}*/}
          {/*  editorTemplate={editorTemplate}*/}
          {/*  actionBegin={onActionBegin}*/}
          {/*  // id='schedule'*/}
          {/*  // quickInfoTemplates={{*/}
          {/*  //     header: headerTemplate.bind(this),*/}
          {/*  //     content: contentTemplate.bind(this),*/}
          {/*  //     footer: footerTemplate.bind(this)*/}
          {/*  // }}*/}
          {/*>*/}
          {/*  <Inject services={[Day, Week, Month, Agenda]} />*/}
          {/*</ScheduleComponent>*/}
          <ScheduleComponent
              width='100%'
              height='650px'
              ref={t => scheduleObj = t}
              eventSettings={localData}
              // eventRendered={onEventRendered.bind(this)}
              currentView='Month'
              id='schedule'
              editorTemplate={editorTemplate}
              popupOpen={onPopupOpen}
              actionBegin={onActionBegin}
          >
            <ViewsDirective>
              {/*<ViewDirective option='Day' displayName='3 Days' interval={3} />*/}
              <ViewDirective option='Week' />
              <ViewDirective option='Month' displayName='3 Months' interval={3} />
            </ViewsDirective>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
        </ScheduleComponent>
        </div>
      </div>
    </div>
  )
}
export {Calendar}
