import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Detail, DetailsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const DETAIL_URL = `${API_URL}/user`
const GET_DETAILS_URL = `${API_URL}/users/query`

const getDetails = (query: string): Promise<DetailsQueryResponse> => {
  return axios
    .get(`${GET_DETAILS_URL}?${query}`)
    .then((d: AxiosResponse<DetailsQueryResponse>) => d.data)
}

const getDetailById = (id: ID): Promise<Detail | undefined> => {
  return axios
    .get(`${DETAIL_URL}/${id}`)
    .then((response: AxiosResponse<Response<Detail>>) => response.data)
    .then((response: Response<Detail>) => response.data)
}

const createDetail = (detail: Detail): Promise<Detail | undefined> => {
  return axios
    .put(DETAIL_URL, detail)
    .then((response: AxiosResponse<Response<Detail>>) => response.data)
    .then((response: Response<Detail>) => response.data)
}

const updateDetail = (detail: Detail): Promise<Detail | undefined> => {
  return axios
    .post(`${DETAIL_URL}/${detail.id}`, detail)
    .then((response: AxiosResponse<Response<Detail>>) => response.data)
    .then((response: Response<Detail>) => response.data)
}

const deleteDetail = (detailId: ID): Promise<void> => {
  return axios.delete(`${DETAIL_URL}/${detailId}`).then(() => {})
}

const deleteSelectedDetails = (DetailIds: Array<ID>): Promise<void> => {
  const requests = DetailIds.map((id) => axios.delete(`${DETAIL_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getDetails, deleteDetail, deleteSelectedDetails, getDetailById, createDetail, updateDetail}
