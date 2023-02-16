import axios from 'axios';



export  const Api_Endpoint ="http://208.117.44.15/hrwebapi/";

export const fetchMedicals= ()=>{
    return axios.get(`${Api_Endpoint}/VmequpsApi`)
}