import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Grade = {
  id?: ID
  destination?: string
  date?: string
  loader_unit?: string
  hauler_unit?: string
  origin?: string
  material?: string
  shift?: string
  status?: boolean
  initials?: {
    label: string
    state: string
  }
}

export type GradeQueryResponse = Response<Array<Grade>>

export const initialGrade: Grade = {

  destination: '',

}
