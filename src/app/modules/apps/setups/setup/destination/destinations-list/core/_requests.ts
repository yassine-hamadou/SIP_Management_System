import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Destination, DestinationsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const DESTINATION_URL = `${API_URL}/user`
const GET_DESTINATIONS_URL = `${API_URL}/users/query`

const getDestinations = (query: string): Promise<DestinationsQueryResponse> => {
  return axios
    .get(`${GET_DESTINATIONS_URL}?${query}`)
    .then((d: AxiosResponse<DestinationsQueryResponse>) => d.data)
}

const getDestinationById = (id: ID): Promise<Destination | undefined> => {
  return axios
    .get(`${DESTINATION_URL}/${id}`)
    .then((response: AxiosResponse<Response<Destination>>) => response.data)
    .then((response: Response<Destination>) => response.data)
}

const createDestination = (destination: Destination): Promise<Destination | undefined> => {
  return axios
    .put(DESTINATION_URL, destination)
    .then((response: AxiosResponse<Response<Destination>>) => response.data)
    .then((response: Response<Destination>) => response.data)
}

const updateDestination = (destination: Destination): Promise<Destination | undefined> => {
  return axios
    .post(`${DESTINATION_URL}/${destination.id}`, destination)
    .then((response: AxiosResponse<Response<Destination>>) => response.data)
    .then((response: Response<Destination>) => response.data)
}

const deleteDestination = (destinationId: ID): Promise<void> => {
  return axios.delete(`${DESTINATION_URL}/${destinationId}`).then(() => {})
}

const deleteSelectedDestinations = (destinationIds: Array<ID>): Promise<void> => {
  const requests = destinationIds.map((id) => axios.delete(`${DESTINATION_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getDestinations, deleteDestination, deleteSelectedDestinations, getDestinationById, createDestination, updateDestination}
