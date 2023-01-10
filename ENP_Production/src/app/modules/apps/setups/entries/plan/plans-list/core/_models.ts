import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Plan = {
  id?: ID
  activity?: string
  destination?: string
  quantity?: string
  status?: boolean
  initials?: {
    label: string
    state: string
  }
}

export type PlansQueryResponse = Response<Array<Plan>>

export const initialPlan: Plan = {
 
  activity: '',
  destination: '',
  status: true,
}
