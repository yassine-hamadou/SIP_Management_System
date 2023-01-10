import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type MineArea = {
  id?: ID
  name?: string
  code?: string
  status?: boolean
  
  initials?: {
    label: string
    state: string
  }
}

export type MineAreaQueryResponse = Response<Array<MineArea>>

export const initialMineArea: MineArea = {
  // avatar: 'avatars/300-6.jpg',
  // position: 'Art Director',
  status: true,
  name: '',
  code: '',
}
