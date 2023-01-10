import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Destination = {
  id?: ID
  name?: string
  code?: string
  status?: boolean
 
  initials?: {
    label: string
    state: string
  }
}

export type DestinationsQueryResponse = Response<Array<Destination>>

export const initialDestination: Destination = {
  name: '',
  code: '',
  status: true,
}
