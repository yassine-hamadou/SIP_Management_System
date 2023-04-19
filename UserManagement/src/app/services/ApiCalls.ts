import axios from 'axios';

export  const Api_Endpoint ="http://208.117.44.15/userapi/api";

export const fetchUsers= ()=>{
    return axios.get(`${Api_Endpoint}/Users`)
}
// update user
export const updateUser = (data:any) => {
    return axios.put(`${Api_Endpoint}/Users/${data.id}`, data)
}

export const fetchUserRoles = () => {
    return axios.get(`${Api_Endpoint}/UserRoles`)
}

export const fetchRoles = () => {
    return axios.get(`${Api_Endpoint}/Roles`)
}

// update role
export const updateRole = (data:any) => {
    return axios.put(`${Api_Endpoint}/Roles/${data.id}`, data)
}

export const fetchApplications = () => {
    return axios.get(`${Api_Endpoint}/Applications`)
}

// update application
export const updateApplication = (data:any) => {
    return axios.put(`${Api_Endpoint}/Applications/${data.id}`, data)
}

export const fetchUserApplications = () => {
    return axios.get(`${Api_Endpoint}/UserApplications`)
}

export const postLeavePlanning = (data: any) => {
    return axios.post(`${Api_Endpoint}/LeavePlanings`, data)
}

export const deleteLeavePlanning = (id: any) => {
    return axios.delete(`${Api_Endpoint}/LeavePlanings/${id}`)
}

export const updateLeavePlanning = (data: any) => {
    return axios.put(`${Api_Endpoint}/LeavePlanings/${data.id}`, data)
}


