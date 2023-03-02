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
export const fetchCategories= ()=>{
    return axios.get(`${Api_Endpoint}/Categories`)
}
export const fetchNotches= ()=>{
    return axios.get(`${Api_Endpoint}/Notches`)
}
export const fetchPaygroups= ()=>{
    return axios.get(`${Api_Endpoint}/Paygroups`)
}
export const fetchEmployees= ()=>{
    return axios.get(`${Api_Endpoint}/Employees`)
}
export const fetchBanks= ()=>{
    return axios.get(`${Api_Endpoint}/Banks`)
}
export const fetchNationalities= ()=>{
    return axios.get(`${Api_Endpoint}/Nationalities`)
}
export const fetchSkills= ()=>{
    return axios.get(`${Api_Endpoint}/Skills`)
}
export const fetchExperiences= ()=>{
    return axios.get(`${Api_Endpoint}/Experiences`)
}
export const fetchQualifications= ()=>{
    return axios.get(`${Api_Endpoint}/Qualifications`)
}
export const fetchJobTitles= ()=>{
    return axios.get(`${Api_Endpoint}/JobTitles`)
}
export const fetchMedicals= ()=>{
    return axios.get(`${Api_Endpoint}/Medicals`)
}


