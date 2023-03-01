import axios from 'axios'
import {Calendar} from './calendar/Calendar'
import {Link, useNavigate} from 'react-router-dom'
import {useQuery} from 'react-query'
import {useState} from 'react'
import {KTCard, KTCardBody, KTSVG} from "../../../../../../../_metronic/helpers";
import {ENP_URL} from "../../../../urls";
import {Space} from "antd";
import {DropDownListComponent} from "@syncfusion/ej2-react-dropdowns";

const LeavePlanning = () => {
  let dropDownListObj: any
  const [chosenLocationIdFromDropdown, setChosenLocationIdFromDropdown] = useState(null)
  const navigate = useNavigate()
  const {data: locations} = useQuery('Locations', () => axios.get(`${ENP_URL}/IclocsApi`), {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  })
  //set the data to dataSource property

  console.log('chosenLocationIdFromDropdown', chosenLocationIdFromDropdown)
  return (
    <>
      <KTCard>
        <KTCardBody className='py-5 px-2'>
          <div className='d-flex justify-content-between'>
            <Space style={{marginBottom: 16}}>
              <DropDownListComponent
                  placeholder='Filter'
                  type='text'
                  dataSource={
                     [
                        { text: 'All', value: 'All' },
                        { text: 'Approved', value: 'Approved' },
                        { text: 'Pending', value: 'Pending' },
                        { text: 'Rejected', value: 'Rejected' },
                         { text: 'Unit', value: 'unit' },

                     ]
                  }
              />
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
          <Calendar chosenLocationIdFromDropdown={chosenLocationIdFromDropdown} />
        </KTCardBody>
      </KTCard>
    </>
  )
}

export {LeavePlanning}
