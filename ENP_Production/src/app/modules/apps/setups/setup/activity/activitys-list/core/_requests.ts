import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Activity, ActivitysQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const ACTVITY_URL = `${API_URL}/user`
const GET_ACTVITYS_URL = `${API_URL}/users/query`

const getActivitys = (query: string): Promise<ActivitysQueryResponse> => {
  return axios
    .get(`${GET_ACTVITYS_URL}?${query}`)
    .then((d: AxiosResponse<ActivitysQueryResponse>) => d.data)
}

const getActivityById = (id: ID): Promise<Activity | undefined> => {
  return axios
    .get(`${ACTVITY_URL}/${id}`)
    .then((response: AxiosResponse<Response<Activity>>) => response.data)
    .then((response: Response<Activity>) => response.data)
}

const createActivity = (activity: Activity): Promise<Activity | undefined> => {
  return axios
    .put(ACTVITY_URL, activity)
    .then((response: AxiosResponse<Response<Activity>>) => response.data)
    .then((response: Response<Activity>) => response.data)
}

const updateActivity = (activity: Activity): Promise<Activity | undefined> => {
  return axios
    .post(`${ACTVITY_URL}/${activity.id}`, activity)
    .then((response: AxiosResponse<Response<Activity>>) => response.data)
    .then((response: Response<Activity>) => response.data)
}

const deleteActivity = (activityId: ID): Promise<void> => {
  return axios.delete(`${ACTVITY_URL}/${activityId}`).then(() => {})
}

const deleteSelectedActivitys = (activityIds: Array<ID>): Promise<void> => {
  const requests = activityIds.map((id) => axios.delete(`${ACTVITY_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getActivitys, deleteActivity, deleteSelectedActivitys, getActivityById, createActivity, updateActivity}
