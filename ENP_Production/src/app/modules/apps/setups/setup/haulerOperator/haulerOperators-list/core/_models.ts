import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type HaulerOperator = {
  id?: ID
  name?: string
  description?: string
  reportingDivision?: string
  status?: boolean
 
}

export type HaulerOperatorsQueryResponse = Response<Array<HaulerOperator>>

export const initialHaulerOperator: HaulerOperator = {
  
  name: '',
  description: '',
  reportingDivision: '',
  status: true,
}
