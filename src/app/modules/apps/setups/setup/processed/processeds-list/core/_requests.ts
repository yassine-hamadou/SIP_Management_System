import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Processed, ProcessedsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const PROCESSED_URL = `${API_URL}/user`
const GET_PROCESSEDS_URL = `${API_URL}/users/query`

const getProcesseds = (query: string): Promise<ProcessedsQueryResponse> => {
  return axios
    .get(`${GET_PROCESSEDS_URL}?${query}`)
    .then((d: AxiosResponse<ProcessedsQueryResponse>) => d.data)
}

const getProcessedById = (id: ID): Promise<Processed | undefined> => {
  return axios
    .get(`${PROCESSED_URL}/${id}`)
    .then((response: AxiosResponse<Response<Processed>>) => response.data)
    .then((response: Response<Processed>) => response.data)
}

const createProcessed = (processed: Processed): Promise<Processed | undefined> => {
  return axios
    .put(PROCESSED_URL, processed)
    .then((response: AxiosResponse<Response<Processed>>) => response.data)
    .then((response: Response<Processed>) => response.data)
}

const updateProcessed = (processed: Processed): Promise<Processed | undefined> => {
  return axios
    .post(`${PROCESSED_URL}/${processed.id}`, processed)
    .then((response: AxiosResponse<Response<Processed>>) => response.data)
    .then((response: Response<Processed>) => response.data)
}

const deleteProcessed = (processedId: ID): Promise<void> => {
  return axios.delete(`${PROCESSED_URL}/${processedId}`).then(() => {})
}

const deleteSelectedProcesseds = (processedIds: Array<ID>): Promise<void> => {
  const requests = processedIds.map((id) => axios.delete(`${PROCESSED_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getProcesseds, deleteProcessed, deleteSelectedProcesseds, getProcessedById, createProcessed, updateProcessed}
