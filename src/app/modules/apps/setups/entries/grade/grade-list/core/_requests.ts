import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Grade, GradeQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const GARDE_URL = `${API_URL}/user`
const GET_GARDES_URL = `${API_URL}/users/query`

const getGrade = (query: string): Promise<GradeQueryResponse> => {
  return axios
    .get(`${GET_GARDES_URL}?${query}`)
    .then((d: AxiosResponse<GradeQueryResponse>) => d.data)
}

const getGradeById = (id: ID): Promise<Grade | undefined> => {
  return axios
    .get(`${GARDE_URL}/${id}`)
    .then((response: AxiosResponse<Response<Grade>>) => response.data)
    .then((response: Response<Grade>) => response.data)
}

const createGrade = (Grade: Grade): Promise<Grade | undefined> => {
  return axios
    .put(GARDE_URL, Grade)
    .then((response: AxiosResponse<Response<Grade>>) => response.data)
    .then((response: Response<Grade>) => response.data)
}

const updateGrade = (grade: Grade): Promise<Grade | undefined> => {
  return axios
    .post(`${GARDE_URL}/${grade.id}`, grade)
    .then((response: AxiosResponse<Response<Grade>>) => response.data)
    .then((response: Response<Grade>) => response.data)
}

const deleteGrade = (GradeId: ID): Promise<void> => {
  return axios.delete(`${GARDE_URL}/${GradeId}`).then(() => {})
}

const deleteSelectedGrade = (GradeIds: Array<ID>): Promise<void> => {
  const requests = GradeIds.map((id) => axios.delete(`${GARDE_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getGrade, deleteGrade, deleteSelectedGrade, getGradeById, createGrade, updateGrade}
