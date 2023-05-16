import axios from 'axios';
/*
 Use this file to define your base URLs whether on localhost or on the ENP server
 */
// export const ENP_URL = 'http://localhost:3001'
// export const ENP_URL = 'https://cors-anywhere.herokuapp.com/http://208.117.44.15/SmWebApi/api'
//export const ENP_URL = 'http://208.117.44.15/SmWebApi/api'
export const UsersEndpoint = "http://208.117.44.15/userapi/api";
export const ENP_URL = 'https://localhost:7144/api'


export const fetchEquips= ()=>{
    return axios.get(`${ENP_URL}/VmequpsApi`)
}
export const fetchLocations= ()=>{
    return axios.get(`${ENP_URL}/IclocsApi`)
}
export const fetchModels= ()=>{
    return axios.get(`${ENP_URL}/VmmodlsApi`)
}

export const fetchCompanies = () => {
    return axios.get(`${UsersEndpoint}/Companies`)
}

export const fetchUserRoles = () => {
    return axios.get(`${UsersEndpoint}/UserRoles`)
}

export const fetchUserApplications = () => {
    return axios.get(`${UsersEndpoint}/UserApplications`)
}

export const fetchRoles = () => {
    return axios.get(`${UsersEndpoint}/Roles`)
}

//dynamic fetch function
export function fetchDocument(url: string) {
    return axios.get(`${ENP_URL}/${url}`)
}

//dynamic update function
export function updateItem(item: any) {
    return axios.put(`${ENP_URL}/${item.url}/${item.data.id}`, item.data)
}

//dynamic delete function
export function deleteItem(item: any) {
    return axios.delete(`${ENP_URL}/${item.url}/${item.data.id}`)
}

//dynamic post function
export function postItem(item: any) {
    return axios.post(`${ENP_URL}/${item.url}`, item.data)
}

