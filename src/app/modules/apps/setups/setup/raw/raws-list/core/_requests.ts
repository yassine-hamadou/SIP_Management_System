import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Raw, RawsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL 
const RAW_URL = `${API_URL}/user`
const GET_RAWS_URL = `${API_URL}/users/query`

const getRaws = (query: string): Promise<RawsQueryResponse> => {
  return axios
    .get(`${GET_RAWS_URL}?${query}`)
    .then((d: AxiosResponse<RawsQueryResponse>) => d.data)
}

const getRawById = (id: ID): Promise<Raw | undefined> => {
  return axios
    .get(`${RAW_URL}/${id}`)
    .then((response: AxiosResponse<Response<Raw>>) => response.data)
    .then((response: Response<Raw>) => response.data)
}

const createRaw = (raw: Raw): Promise<Raw | undefined> => {
  return axios
    .put(RAW_URL, raw)
    .then((response: AxiosResponse<Response<Raw>>) => response.data)
    .then((response: Response<Raw>) => response.data)
}

const updateRaw = (raw: Raw): Promise<Raw | undefined> => {
  return axios
    .post(`${RAW_URL}/${raw.id}`, raw)
    .then((response: AxiosResponse<Response<Raw>>) => response.data)
    .then((response: Response<Raw>) => response.data)
}

const deleteRaw = (rawId: ID): Promise<void> => {
  return axios.delete(`${RAW_URL}/${rawId}`).then(() => {})
}

const deleteSelectedRaws = (rawIds: Array<ID>): Promise<void> => {
  const requests = rawIds.map((id) => axios.delete(`${RAW_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getRaws, deleteRaw, deleteSelectedRaws, getRawById, createRaw, updateRaw}
