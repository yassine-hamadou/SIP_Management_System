import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Origin = {
  id?: ID
  name?: string
  code?: string
  description?: string
  status?: boolean 
  initials?: {
    label: string
    state: string
  }
}

export type OriginsQueryResponse = Response<Array<Origin>>

export const initialOrigin: Origin = {
  // avatar: 'avatars/300-6.jpg',
  // position: 'Art Director',
  code: '',
  name: '',
  description: '',
  status: true,
  
}
