import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Origin, OriginsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const ORIGIN_URL = `${API_URL}/user`
const GET_ORIGINS_URL = `${API_URL}/users/query`

const getOrigins = (query: string): Promise<OriginsQueryResponse> => {
  return axios
    .get(`${GET_ORIGINS_URL}?${query}`)
    .then((d: AxiosResponse<OriginsQueryResponse>) => d.data)
}

const getOriginById = (id: ID): Promise<Origin | undefined> => {
  return axios
    .get(`${ORIGIN_URL}/${id}`)
    .then((response: AxiosResponse<Response<Origin>>) => response.data)
    .then((response: Response<Origin>) => response.data)
}

const createOrigin = (origin: Origin): Promise<Origin | undefined> => {
  return axios
    .put(ORIGIN_URL, origin)
    .then((response: AxiosResponse<Response<Origin>>) => response.data)
    .then((response: Response<Origin>) => response.data)
}

const updateOrigin = (origin: Origin): Promise<Origin | undefined> => {
  return axios
    .post(`${ORIGIN_URL}/${origin.id}`, origin)
    .then((response: AxiosResponse<Response<Origin>>) => response.data)
    .then((response: Response<Origin>) => response.data)
}

const deleteOrigin = (originId: ID): Promise<void> => {
  return axios.delete(`${ORIGIN_URL}/${originId}`).then(() => {})
}

const deleteSelectedOrigins = (OriginIds: Array<ID>): Promise<void> => {
  const requests = OriginIds.map((id) => axios.delete(`${ORIGIN_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getOrigins, deleteOrigin, deleteSelectedOrigins, getOriginById, createOrigin, updateOrigin}
