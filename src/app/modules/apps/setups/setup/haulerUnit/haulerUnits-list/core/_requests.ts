import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {HaulerUnit, HaulerUnitsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const HAULERUNIT_URL = `${API_URL}/user`
const GET_HAULERUNITS_URL = `${API_URL}/users/query`

const getHaulerUnits = (query: string): Promise<HaulerUnitsQueryResponse> => {
  return axios
    .get(`${GET_HAULERUNITS_URL}?${query}`)
    .then((d: AxiosResponse<HaulerUnitsQueryResponse>) => d.data)
}

const getHaulerUnitById = (id: ID): Promise<HaulerUnit | undefined> => {
  return axios
    .get(`${HAULERUNIT_URL}/${id}`)
    .then((response: AxiosResponse<Response<HaulerUnit>>) => response.data)
    .then((response: Response<HaulerUnit>) => response.data)
}

const createHaulerUnit = (haulerUnit: HaulerUnit): Promise<HaulerUnit | undefined> => {
  return axios
    .put(HAULERUNIT_URL, haulerUnit)
    .then((response: AxiosResponse<Response<HaulerUnit>>) => response.data)
    .then((response: Response<HaulerUnit>) => response.data)
}

const updateHaulerUnit = (haulerUnit: HaulerUnit): Promise<HaulerUnit | undefined> => {
  return axios
    .post(`${HAULERUNIT_URL}/${haulerUnit.id}`, haulerUnit)
    .then((response: AxiosResponse<Response<HaulerUnit>>) => response.data)
    .then((response: Response<HaulerUnit>) => response.data)
}

const deleteHaulerUnit = (haulerUnitId: ID): Promise<void> => {
  return axios.delete(`${HAULERUNIT_URL}/${haulerUnitId}`).then(() => {})
}

const deleteSelectedHaulerUnits = (haulerUnitIds: Array<ID>): Promise<void> => {
  const requests = haulerUnitIds.map((id) => axios.delete(`${HAULERUNIT_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getHaulerUnits, deleteHaulerUnit, deleteSelectedHaulerUnits, getHaulerUnitById, createHaulerUnit, updateHaulerUnit}
