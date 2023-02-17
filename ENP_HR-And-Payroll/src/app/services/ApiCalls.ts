import axios from 'axios';



export  const Api_Endpoint ="http://208.117.44.15/hrwebapi/api";

export const fetchDivisions= ()=>{
    return axios.get(`${Api_Endpoint}/Divisions`)
}

