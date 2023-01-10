import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Raw = {
  id?: ID
  name?: string
  code?: string
  status?: boolean
  initials?: {
    label: string
    state: string
  }
}

export type RawsQueryResponse = Response<Array<Raw>>

export const initialRaw: Raw = {
  // avatar: 'avatars/300-6.jpg',
  status: false,
  code: '',
  name: '',

}
