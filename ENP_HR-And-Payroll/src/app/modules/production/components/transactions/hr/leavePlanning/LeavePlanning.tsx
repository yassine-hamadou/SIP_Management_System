// import {Calendar} from './calendar/Calendar'
import {Link, useNavigate} from 'react-router-dom'
import {useQuery} from 'react-query'
import {useState} from 'react'
import {KTCard, KTCardBody, KTSVG} from "../../../../../../../_metronic/helpers";
import {Input, Space} from "antd";
import {DropDownListComponent} from "@syncfusion/ej2-react-dropdowns";
import {fetchDepartments, fetchLeaveTypes} from "../../../../../../services/ApiCalls";
import { NewLeavePlanner } from './NewCalendar/NewLeavePlanner';

const LeavePlanning = () => {
  const [chosenFilter, setChosenFilter] = useState(null)
  const navigate = useNavigate()

  const tenantId = localStorage.getItem('tenant')

  const {data:leaveTypes, isLoading} = useQuery('leaveTypes',() =>fetchLeaveTypes(tenantId), {cacheTime:5000}) 
  const {data:departments} = useQuery('departments',() =>fetchDepartments(tenantId), {cacheTime:5000}) 

  return (
    <>
      <KTCard>
        <KTCardBody className='py-5 px-2'>
          <div className='d-flex justify-content-between'>
            <Space style={{marginBottom: 16}}>
            <Input
                    placeholder='Enter Search Text'
                    // onChange={handleInputChange}
                    style={{marginLeft:"15px", opacity:"0.6"}}
                    type='text'
                    allowClear
                    value=""
                    // value={searchText}
                  />
                  {/* <Button type='primary' onClick={}>
                    Search
                  </Button> */}
              {/* <DropDownListComponent
                    id='filterByLeaveType'
                  placeholder='Filter by Leave type'
                  type='text'
                  dataSource={leaveTypes?.data}
                    fields={{text: 'name', value: 'id'}}
                  change={(e: any) => {
                    setChosenFilter(e.value)
                    //reset above dropdown
                    const filterByDep = (document.getElementById('filterByDep') as any)
                    const filterByStatus = (document.getElementById('filterByStatus') as any)
                    filterByDep.value = null
                    filterByStatus.value = null
                  }}
              />
                <DropDownListComponent
                  id='filterByDep'
                  placeholder='Filter by Department'
                  type='text'
                  dataSource={departments?.data}
                  fields={{text: 'name', value: 'id'}}
                  change={(e: any) => {
                      // setChosenFilter(e.value)
                      //reset above dropdown
                      const filterByLeaveType = (document.getElementById('filterByLeaveType') as any)
                      const filterByStatus = (document.getElementById('filterByStatus') as any)
                      filterByLeaveType.value = null
                      filterByStatus.value = null
                  }}
                />
                <DropDownListComponent
                  id='filterByStatus'
                  placeholder='Filter by Status'
                  type='text'
                  dataSource={['Approved', 'Rejected', 'Pending']}
                  change={(e: any) => {
                      setChosenFilter(e.value)
                      const filterByDep = (document.getElementById('filterByDep') as any)
                      filterByDep.value = null
                      const filterByLeaveType = (document.getElementById('filterByLeaveType') as any)
                      filterByLeaveType.value = null
                  }}
                /> */}
            </Space>
            <Space style={{marginBottom: 16}}>
                <Link
                    to='approval'
                >
                    <button type='button' className='btn btn-light-primary me-3'>
                        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
                        Approval
                    </button>
                </Link>
            </Space>
          </div>
          {/* <Calendar chosenFilter={chosenFilter} /> */}
          <NewLeavePlanner/>
        </KTCardBody>
      </KTCard>
    </>
  )
}

export {LeavePlanning}
