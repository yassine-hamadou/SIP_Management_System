import axios from 'axios';




export  const Api_Endpoint ="http://208.117.44.15/userapi/api";
export  const Api_Endpoint2 ="http://208.117.44.15/hrwebapi/api";
// const token:any = localStorage.getItem("accessToken")?.replace(/['"]/g, '')

// export const fetchTaxes= ()=>{
//     return axios.get(`${Api_Endpoint2}/Taxes`, {
//         headers: {
//             Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNpcGFkbWluIiwiZW1haWwiOiJhZGFuQHNpcGNvbnN1bHQubmV0Iiwic3VybmFtZSI6IkRPTkctVVVSRSIsImZpcnN0TmFtZSI6IkFEQU4iLCJnZW5kZXIiOiJNQUxFICAgICAgIiwiaWQiOiIzIiwiZXhwIjoxNjgxNDE4Nzg5LCJhdWQiOiJodHRwOi8vMjA4LjExNy40NC4xNS8ifQ.3wR0RE-zrF2MVIwgJdLtqN-uUQS2H38nffEYYtXcxXo`
//         }
//     })
// }
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


