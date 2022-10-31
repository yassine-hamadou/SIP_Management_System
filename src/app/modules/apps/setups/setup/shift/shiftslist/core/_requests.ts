import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Shift, ShiftsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const SHIFT_URL = `${API_URL}/user`
const GET_SHIFTS_URL = `${API_URL}/users/query`

const getShifts = (query: string): Promise<ShiftsQueryResponse> => {
  return axios
    .get(`${GET_SHIFTS_URL}?${query}`)
    .then((d: AxiosResponse<ShiftsQueryResponse>) => d.data)
}

const getShiftById = (id: ID): Promise<Shift | undefined> => {
  return axios
    .get(`${SHIFT_URL}/${id}`)
    .then((response: AxiosResponse<Response<Shift>>) => response.data)
    .then((response: Response<Shift>) => response.data)
}

const createShift = (shift: Shift): Promise<Shift | undefined> => {
  return axios
    .put(SHIFT_URL, shift)
    .then((response: AxiosResponse<Response<Shift>>) => response.data)
    .then((response: Response<Shift>) => response.data)
}

const updateShift = (shift: Shift): Promise<Shift | undefined> => {
  return axios
    .post(`${SHIFT_URL}/${shift.id}`, shift)
    .then((response: AxiosResponse<Response<Shift>>) => response.data)
    .then((response: Response<Shift>) => response.data)
}

const deleteShift = (shiftId: ID): Promise<void> => {
  return axios.delete(`${SHIFT_URL}/${shiftId}`).then(() => {})
}

const deleteSelectedShifts = (shiftIds: Array<ID>): Promise<void> => {
  const requests = shiftIds.map((id) => axios.delete(`${SHIFT_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getShifts, deleteShift, deleteSelectedShifts, getShiftById, createShift, updateShift}
