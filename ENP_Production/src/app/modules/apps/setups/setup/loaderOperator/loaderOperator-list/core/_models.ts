import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type LoaderOperator = {
  id?: ID
  name?: string
  code?: string
  status?: boolean
  initials?: {
    label: string
    state: string
  }
}

export type LoaderOperatorQueryResponse = Response<Array<LoaderOperator>>

export const initialLoaderOperator: LoaderOperator = {
  name: '',
  code: '',
  status: true,
}
