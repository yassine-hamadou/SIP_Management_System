import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {HaulerOperator, HaulerOperatorsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const HAULEROPERATOR_URL = `${API_URL}/user`
const GET_HAULEROPERATORS_URL = `${API_URL}/users/query`

const getHaulerOperators = (query: string): Promise<HaulerOperatorsQueryResponse> => {
  return axios
    .get(`${GET_HAULEROPERATORS_URL}?${query}`)
    .then((d: AxiosResponse<HaulerOperatorsQueryResponse>) => d.data)
}

const getHaulerOperatorById = (id: ID): Promise<HaulerOperator | undefined> => {
  return axios
    .get(`${HAULEROPERATOR_URL}/${id}`)
    .then((response: AxiosResponse<Response<HaulerOperator>>) => response.data)
    .then((response: Response<HaulerOperator>) => response.data)
}

const createHaulerOperator = (HaulerOperator: HaulerOperator): Promise<HaulerOperator | undefined> => {
  return axios
    .put(HAULEROPERATOR_URL, HaulerOperator)
    .then((response: AxiosResponse<Response<HaulerOperator>>) => response.data)
    .then((response: Response<HaulerOperator>) => response.data)
}

const updateHaulerOperator = (HaulerOperator: HaulerOperator): Promise<HaulerOperator | undefined> => {
  return axios
    .post(`${HAULEROPERATOR_URL}/${HaulerOperator.id}`, HaulerOperator)
    .then((response: AxiosResponse<Response<HaulerOperator>>) => response.data)
    .then((response: Response<HaulerOperator>) => response.data)
}

const deleteHaulerOperator = (HaulerOperatorId: ID): Promise<void> => {
  return axios.delete(`${HAULEROPERATOR_URL}/${HaulerOperatorId}`).then(() => {})
}

const deleteSelectedHaulerOperators = (HaulerOperatorIds: Array<ID>): Promise<void> => {
  const requests = HaulerOperatorIds.map((id) => axios.delete(`${HAULEROPERATOR_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getHaulerOperators, deleteHaulerOperator, deleteSelectedHaulerOperators, getHaulerOperatorById, createHaulerOperator, updateHaulerOperator}
