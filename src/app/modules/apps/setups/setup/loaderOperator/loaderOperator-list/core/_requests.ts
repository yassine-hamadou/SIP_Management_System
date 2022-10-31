import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {LoaderOperator, LoaderOperatorQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const LOADEROPERATOR_URL = `${API_URL}/user`
const GET_LOADEROPERATORS_URL = `${API_URL}/users/query`

const getLoaderOperator = (query: string): Promise<LoaderOperatorQueryResponse> => {
  return axios
    .get(`${GET_LOADEROPERATORS_URL}?${query}`)
    .then((d: AxiosResponse<LoaderOperatorQueryResponse>) => d.data)
}

const getLoaderOperatorById = (id: ID): Promise<LoaderOperator | undefined> => {
  return axios
    .get(`${LOADEROPERATOR_URL}/${id}`)
    .then((response: AxiosResponse<Response<LoaderOperator>>) => response.data)
    .then((response: Response<LoaderOperator>) => response.data)
}

const createLoaderOperator = (LoaderOperator: LoaderOperator): Promise<LoaderOperator | undefined> => {
  return axios
    .put(LOADEROPERATOR_URL, LoaderOperator)
    .then((response: AxiosResponse<Response<LoaderOperator>>) => response.data)
    .then((response: Response<LoaderOperator>) => response.data)
}

const updateLoaderOperator = (loaderOperator: LoaderOperator): Promise<LoaderOperator | undefined> => {
  return axios
    .post(`${LOADEROPERATOR_URL}/${loaderOperator.id}`, loaderOperator)
    .then((response: AxiosResponse<Response<LoaderOperator>>) => response.data)
    .then((response: Response<LoaderOperator>) => response.data)
}

const deleteLoaderOperator = (loaderOperatorId: ID): Promise<void> => {
  return axios.delete(`${LOADEROPERATOR_URL}/${loaderOperatorId}`).then(() => {})
}

const deleteSelectedLoaderOperator = (loaderOperatorIds: Array<ID>): Promise<void> => {
  const requests = loaderOperatorIds.map((id) => axios.delete(`${LOADEROPERATOR_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getLoaderOperator, deleteLoaderOperator, deleteSelectedLoaderOperator, getLoaderOperatorById, createLoaderOperator, updateLoaderOperator}
