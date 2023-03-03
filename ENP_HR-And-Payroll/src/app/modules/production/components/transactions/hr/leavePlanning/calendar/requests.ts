// Functions to perform CRUD operations
import axios from 'axios'
import {Api_Endpoint} from "../../../../../../../services/ApiCalls";

export const fetchLeavePlannings = () => {
  return axios.get(`${Api_Endpoint}/LeavePlanings`)
}

//Object to inject in the Calendar
export const localData = (dataFromApi: any) => {
  return {
    dataSource: dataFromApi,
    fields: {
      id: 'entryId',
      subject: {name: 'fleetId', default: 'No Employee ID'},
      location: {name: 'locationId'},
      startTime: {name: 'timeStart'},
      endTime: {name: 'timeEnd'},
    },
  }
}
