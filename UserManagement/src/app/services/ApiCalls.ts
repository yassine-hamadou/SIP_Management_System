import axios from 'axios';



export  const Api_Endpoint ="http://208.117.44.15/userapi/api";

export const fetchUsers= ()=>{
    return axios.get(`${Api_Endpoint}/Users`)
}

export const fetchUserRoles = () => {
    return axios.get(`${Api_Endpoint}/UserRoles`)
}

export const fetchRoles = () => {
    return axios.get(`${Api_Endpoint}/Roles`)
}

export const fetchApplications = () => {
    return axios.get(`${Api_Endpoint}/Applications`)
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


