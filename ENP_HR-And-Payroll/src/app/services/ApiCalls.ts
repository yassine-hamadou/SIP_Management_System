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
export const fetchPerks= ()=>{
    return axios.get(`${Api_Endpoint}/Perks`)
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
export const updateEmployee = (data: any) => {
    return axios.put(`${Api_Endpoint}/Employees/${data.id}`, data)
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

export const fetchNoteCategories= ()=>{
    return axios.get(`${Api_Endpoint}/NoteCategories`)
}

export const fetchGradeLeaves= ()=>{
    return axios.get(`${Api_Endpoint}/GradeLeaves`)
}

export const fetchCurrencies= ()=>{
    return axios.get(`${Api_Endpoint}/Currencies`)
}

export const fetchLeaveTypes = () => {
    return axios.get(`${Api_Endpoint}/Leaves`)
}
export const fetchAppraisals = () => {
    return axios.get(`${Api_Endpoint}/Appraisals`)
}
export const fetchPeriods = () => {
    return axios.get(`${Api_Endpoint}/Periods`)
}
export const fetchProducts = () => {
    return axios.get(`${Api_Endpoint}/Products`)
}

export const fetchTrainees = () => {
    return axios.get(`${Api_Endpoint}/Trainees`)
}

export const fetchTrainings = () => {
    return axios.get(`${Api_Endpoint}/trainings`)
}

export const fetchTrainingSchedules = () => {
    return axios.get(`${Api_Endpoint}/TrainingSchedules`)
}

export const fetchNoteTransactions = () => {
    return axios.get(`${Api_Endpoint}/NoteTransactions`)
}

export const fetchServiceProviders = () => {
    return axios.get(`${Api_Endpoint}/ServiceProviders`)
}

export const fetchRecruitmentTransactions = () => {
    return axios.get(`${Api_Endpoint}/RecruitmentTransactions`)
}

export const fetchTrainingDevTransactions = () => {
    return axios.get(`${Api_Endpoint}/TrainingDevTransactions`)
}
export const fetchAppraisalTransactions = () => {
    return axios.get(`${Api_Endpoint}/AppraisalPerfTransactions`)
}

export const fetchDashBoardData = () => {
    return axios.get(`${Api_Endpoint}/SortedData`)
}

export const fetchBenefitsCategory = () => {
    return axios.get(`${Api_Endpoint}/BenefitCats`)
}

export const fetchDeductionsCategory = () => {
    return axios.get(`${Api_Endpoint}/DeductionCats`)
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


