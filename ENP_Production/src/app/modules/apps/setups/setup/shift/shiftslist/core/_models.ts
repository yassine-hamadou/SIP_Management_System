import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Shift = {
  id?: ID
  name?: string
  code?: string
  status?: boolean
  
  initials?: {
    label: string
    state: string
  }
}

export type ShiftsQueryResponse = Response<Array<Shift>>

export const initialShift: Shift = {
  status: true,
  name: '',
  code: '',
}
