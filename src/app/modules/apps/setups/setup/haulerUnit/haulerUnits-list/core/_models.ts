import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type HaulerUnit = {
  id?: ID
  name?: string
  code?: string
  description?: string
  paygroup?: string
  
  status?: boolean
  initials?: {
    label: string
    state: string
  }
}

export type HaulerUnitsQueryResponse = Response<Array<HaulerUnit>>

export const initialHaulerUnit: HaulerUnit = {
  code: '',
  name: '',
  paygroup: '',
  status: true,
}
