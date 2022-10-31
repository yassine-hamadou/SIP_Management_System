import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Activity = {
  id?: ID
  name?: string
  salarygrade?: string
  monthly?: number
  status?: boolean
  annual?: string
  online?: boolean
  initials?: {
    label: string
    state: string
  }
}

export type ActivitysQueryResponse = Response<Array<Activity>>

export const initialActivity: Activity = {
  // avatar: 'avatars/300-6.jpg',
  // position: 'Art Director',
  status: true,
  name: '',
  salarygrade: '',
}
