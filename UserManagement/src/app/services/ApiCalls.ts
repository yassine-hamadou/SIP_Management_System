import axios from 'axios';



export const Api_Endpoint = "https://enp.sipconsult.net/userapi/api";
export const Api_Endpoint2 = "https://enp.sipconsult.net/hrwebapi/api";

// export const Api_Endpoint = "https://208.117.44.15/userapi/api";
// export const Api_Endpoint2 = "https://208.117.44.15/hrwebapi/api";
// const token:any = localStorage.getItem("accessToken")?.replace(/['"]/g, '')

// export const fetchTaxes= ()=>{
//     return axios.get(`${Api_Endpoint2}/Taxes`, {
//         headers: {
//             Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNpcGFkbWluIiwiZW1haWwiOiJhZGFuQHNpcGNvbnN1bHQubmV0Iiwic3VybmFtZSI6IkRPTkctVVVSRSIsImZpcnN0TmFtZSI6IkFEQU4iLCJnZW5kZXIiOiJNQUxFICAgICAgIiwiaWQiOiIzIiwiZXhwIjoxNjgxNDE4Nzg5LCJhdWQiOiJodHRwOi8vMjA4LjExNy40NC4xNS8ifQ.3wR0RE-zrF2MVIwgJdLtqN-uUQS2H38nffEYYtXcxXo`
//         }
//     })
// }

//dynamic fetch function
export function fetchDocument(url: string) {
    return axios.get(`${Api_Endpoint}/${url}`)
}

//dynamic update function
export function updateItem(item: any) {
    return axios.put(`${Api_Endpoint}/${item.url}/${item.data.id}`, item.data)
}

//dynamic delete function
export function deleteItem(item: any) {
    return axios.delete(`${Api_Endpoint}/${item.url}/${item.data.id}`)
}

//dynamic post function
export function postItem(item: any) {
    return axios.post(`${Api_Endpoint}/${item.url}`, item.data)
}

export const fetchUsers= ()=>{
    return axios.get(`${Api_Endpoint}/Users`)
}
// post user
export const postUser = (data: any) => {
    return axios.post(`${Api_Endpoint}/Users`, data)
}
// update user
export const updateUser = (data: any) => {
    return axios.put(`${Api_Endpoint}/Users/${data.id}`, data)
}

export const fetchUserRoles = () => {
    return axios.get(`${Api_Endpoint}/UserRoles`)
}

export const fetchRoles = () => {
    return axios.get(`${Api_Endpoint}/Roles`)
}

// update role
export const updateRole = (data: any) => {
    return axios.put(`${Api_Endpoint}/Roles/${data.id}`, data)
}

export const fetchApplications = () => {
    return axios.get(`${Api_Endpoint}/Applications`)
}

// update application
export const updateApplication = (data: any) => {
    return axios.put(`${Api_Endpoint}/Applications/${data.id}`, data)
}

export const fetchUserApplications = () => {
    return axios.get(`${Api_Endpoint}/UserApplications`)
}
