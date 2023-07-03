// Functions to perform CRUD operations
import axios from 'axios'
import {Api_Endpoint} from "../../../../../../../services/ApiCalls";

export const fetchLeavePlannings = (tenantId: any) => {
  return axios.get(`${Api_Endpoint}/LeavePlanings/tenant/${tenantId}`)
}

//Object to inject in the Calendar
// export const localData = (dataFromApi: any) => {
//   return {
//     dataSource: dataFromApi,
//     fields: {
//       id: 'entryId',
//       subject: {name: 'fleetId', default: 'No Employee ID'},
//       location: {name: 'locationId'},
//       startTime: {name: 'timeStart'},
//       endTime: {name: 'timeEnd'},
//     },
//   }
// }