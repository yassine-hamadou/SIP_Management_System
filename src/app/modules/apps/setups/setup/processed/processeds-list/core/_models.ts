import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Processed = {
  id?: ID
  fname?: string
  sname?: string

  newBasicSalary?: string
  role?: string
  oldBasicSalary?: string
  department?: string
  initials?: {
    label: string
    state: string
  }
}

export type ProcessedsQueryResponse = Response<Array<Processed>>

export const initialProcessed: Processed = {
  
  
  role: 'Administrator',
  fname: '',
  sname: '',
  newBasicSalary: '',
  oldBasicSalary: '',
  department: '',

}
