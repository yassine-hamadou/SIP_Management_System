import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {LoaderUnitsQueryResponse, LoaderUnit} from './_models'

// const API_URL = process.env.REACT_APP_THEME_API_URL
// const API_URL = "https://cors-anywhere.herokuapp.com/https://app.sipconsult.net/Api/api/"
// const API_URL = "https://cors-anywhere.herokuapp.com/http://208.117.44.15/SmWebApi/api/"
const API_URL = "https://cors-anywhere.herokuapp.com/https://preview.keenthemes.com/theme-api/api/"
const LOADERUNIT_URL = `${API_URL}/FaultEntriesApi`
const GET_LOADERUNITS_URL = `${API_URL}/users/query` 

const getLoaderUnits = (query: string): Promise<LoaderUnitsQueryResponse> => {
  return axios
    .get(`${GET_LOADERUNITS_URL}?${query}`)
    .then((d: AxiosResponse<LoaderUnitsQueryResponse>) => d.data)
}

const getLoaderUnitById = (id: ID): Promise<LoaderUnit | undefined> => {
  return axios
    .get(`${LOADERUNIT_URL}/${id}`)
    .then((response: AxiosResponse<Response<LoaderUnit>>) => response.data)
    .then((response: Response<LoaderUnit>) => response.data)
}

const createLoaderUnit = (loaderUnit: LoaderUnit): Promise<LoaderUnit | undefined> => {
  return axios
    .put(LOADERUNIT_URL, loaderUnit)
    .then((response: AxiosResponse<Response<LoaderUnit>>) => response.data)
    .then((response: Response<LoaderUnit>) => response.data)
}

const updateLoaderUnit = (loaderUnit: LoaderUnit): Promise<LoaderUnit | undefined> => {
  return axios
    .post(`${LOADERUNIT_URL}/${loaderUnit.id}`, loaderUnit)
    .then((response: AxiosResponse<Response<LoaderUnit>>) => response.data)
    .then((response: Response<LoaderUnit>) => response.data)
}

const deleteLoaderUnit = (loaderUnitId: ID): Promise<void> => {
  return axios.delete(`${LOADERUNIT_URL}/${loaderUnitId}`).then(() => {})
}

const deleteSelectedLoaderUnits = (loaderUnitIds: Array<ID>): Promise<void> => {
  const requests = loaderUnitIds.map((id) => axios.delete(`${LOADERUNIT_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getLoaderUnits, deleteLoaderUnit, deleteSelectedLoaderUnits, getLoaderUnitById, createLoaderUnit, updateLoaderUnit}
