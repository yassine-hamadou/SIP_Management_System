import axios from 'axios'
import {Calendar} from './calendar/Calendar'
import {useNavigate} from 'react-router-dom'
import {useQuery} from 'react-query'
import {useState} from 'react'
import {KTCard, KTCardBody} from "../../../../../../../_metronic/helpers";
import {ENP_URL} from "../../../../urls";

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
          <Calendar chosenLocationIdFromDropdown={chosenLocationIdFromDropdown} />
        </KTCardBody>
      </KTCard>
    </>
  )
}

export {LeavePlanning}
