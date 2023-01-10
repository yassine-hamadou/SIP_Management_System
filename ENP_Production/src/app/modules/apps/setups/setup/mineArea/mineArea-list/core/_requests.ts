import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {MineArea, MineAreaQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const MINEAREA_URL = `${API_URL}/user`
const GET_MINEAREAS_URL = `${API_URL}/users/query`

const getMineArea = (query: string): Promise<MineAreaQueryResponse> => {
  return axios
    .get(`${GET_MINEAREAS_URL}?${query}`)
    .then((d: AxiosResponse<MineAreaQueryResponse>) => d.data)
}

const getMineAreaById = (id: ID): Promise<MineArea | undefined> => {
  return axios
    .get(`${MINEAREA_URL}/${id}`)
    .then((response: AxiosResponse<Response<MineArea>>) => response.data)
    .then((response: Response<MineArea>) => response.data)
}

const createMineArea = (mineArea: MineArea): Promise<MineArea | undefined> => {
  return axios
    .put(MINEAREA_URL, mineArea)
    .then((response: AxiosResponse<Response<MineArea>>) => response.data)
    .then((response: Response<MineArea>) => response.data)
}

const updateMineArea = (mineArea: MineArea): Promise<MineArea | undefined> => {
  return axios
    .post(`${MINEAREA_URL}/${mineArea.id}`, mineArea)
    .then((response: AxiosResponse<Response<MineArea>>) => response.data)
    .then((response: Response<MineArea>) => response.data)
}

const deleteMineArea = (mineAreaId: ID): Promise<void> => {
  return axios.delete(`${MINEAREA_URL}/${mineAreaId}`).then(() => {})
}

const deleteSelectedMineArea = (mineAreaIds: Array<ID>): Promise<void> => {
  const requests = mineAreaIds.map((id) => axios.delete(`${MINEAREA_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getMineArea, deleteMineArea, deleteSelectedMineArea, getMineAreaById, createMineArea, updateMineArea}
