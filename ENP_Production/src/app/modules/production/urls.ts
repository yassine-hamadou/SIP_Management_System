import axios from 'axios';
/*
 Use this file to define your base URLs whether on localhost or on the ENP server
 */
// export const ENP_URL = 'http://localhost:3001'
// export const ENP_URL = 'https://cors-anywhere.herokuapp.com/http://208.117.44.15/SmWebApi/api'
export const ENP_URL = 'http://208.117.44.15/SmWebApi/api'
// export const ENP_URL = 'http://localhost:4192'


export const fetchEquips= ()=>{
    return axios.get(`${ENP_URL}/VmequpsApi`)
}
export const fetchLocations= ()=>{
    return axios.get(`${ENP_URL}/IclocsApi`)
}
export const fetchModels= ()=>{
    return axios.get(`${ENP_URL}/VmmodlsApi`)
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

