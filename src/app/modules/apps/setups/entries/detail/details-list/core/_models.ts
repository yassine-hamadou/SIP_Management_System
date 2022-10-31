import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Detail = {
  id?: ID
  date?: string
  shift?: string
  time?: string
  loader?: string
  loads?: string
  hauler?: string
  origin?: string
  material?: boolean
  nominal?: string
  weight?: string
  payload_weight?: string
  report_weight?: string
  volume?: string
  time_at_loader?: string
  duration?: string
  destination?: string
  status?: boolean
  initials?: {
    label: string
    state: string
  }
}

export type DetailsQueryResponse = Response<Array<Detail>>

export const initialDetail: Detail = {

}
