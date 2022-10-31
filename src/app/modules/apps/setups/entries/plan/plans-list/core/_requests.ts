import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Plan, PlansQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const PLAN_URL = `${API_URL}/user`
const GET_PLANS_URL = `${API_URL}/users/query`

const getPlans = (query: string): Promise<PlansQueryResponse> => {
  return axios
    .get(`${GET_PLANS_URL}?${query}`)
    .then((d: AxiosResponse<PlansQueryResponse>) => d.data)
}

const getPlanById = (id: ID): Promise<Plan | undefined> => {
  return axios
    .get(`${PLAN_URL}/${id}`)
    .then((response: AxiosResponse<Response<Plan>>) => response.data)
    .then((response: Response<Plan>) => response.data)
}

const createPlan = (plan: Plan): Promise<Plan | undefined> => {
  return axios
    .put(PLAN_URL, plan)
    .then((response: AxiosResponse<Response<Plan>>) => response.data)
    .then((response: Response<Plan>) => response.data)
}

const updatePlan = (plan: Plan): Promise<Plan | undefined> => {
  return axios
    .post(`${PLAN_URL}/${plan.id}`, plan)
    .then((response: AxiosResponse<Response<Plan>>) => response.data)
    .then((response: Response<Plan>) => response.data)
}

const deletePlan = (planId: ID): Promise<void> => {
  return axios.delete(`${PLAN_URL}/${planId}`).then(() => {})
}

const deleteSelectedPlans = (planIds: Array<ID>): Promise<void> => {
  const requests = planIds.map((id) => axios.delete(`${PLAN_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getPlans, deletePlan, deleteSelectedPlans, getPlanById, createPlan, updatePlan}
