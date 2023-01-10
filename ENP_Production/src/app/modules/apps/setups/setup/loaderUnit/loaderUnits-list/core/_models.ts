import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type LoaderUnit = {
  fleetID?: string
  modlName?: string
  modlClass?: string
  vmClass?: string
  custodian?: string
  id?:ID
  productId?:number
  locationId?:number

  
  initials?: {
    label: string
    state: string
  }
}

export type LoaderUnitsQueryResponse = Response<Array<LoaderUnit>>

export const initialLoaderUnit: LoaderUnit = {
  // name: '',
  // code: '',
  // status: '',
}
