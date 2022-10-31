import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type LoaderUnit = {
  id?: ID
  name?: string
  code?: string
  status?: string
  
  initials?: {
    label: string
    state: string
  }
}

export type LoaderUnitsQueryResponse = Response<Array<LoaderUnit>>

export const initialLoaderUnit: LoaderUnit = {
  name: '',
  code: '',
  status: '',
}
