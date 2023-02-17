import axios from 'axios';



export  const Api_Endpoint ="http://208.117.44.15/hrwebapi/api";

export const fetchDivisions= ()=>{
    return axios.get(`${Api_Endpoint}/Divisions`)
}
export const fetchDepartments= ()=>{
    return axios.get(`${Api_Endpoint}/Departments`)
}
export const fetchUnits= ()=>{
    return axios.get(`${Api_Endpoint}/Units`)
}
export const fetchGrades= ()=>{
    return axios.get(`${Api_Endpoint}/Grades`)
}
export const fetchNotches= ()=>{
    return axios.get(`${Api_Endpoint}/Notches`)
}

