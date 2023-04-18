import axios from 'axios';



export const Api_Endpoint = "http://208.117.44.15/hrwebapi/api";

export let axioInstance = axios.create({
    headers: {
        Authorization: `${localStorage.getItem("kt-auth-react-v")}`
    }
}
)

//dynamic fetch function
export const fetchDocument = (url: string) => {
    return axios.get(`${Api_Endpoint}/${url}`)
}

//dynamic update function
export const updateItem = (url: string, data: any) => {
    return axios.put(`${Api_Endpoint}/${url}/${data.id}`, data)
}

export const fetchDivisions = () => {
    return axios.get(`${Api_Endpoint}/Divisions`)
}
export const updateDivison = (data: any) => {
    return axios.put(`${Api_Endpoint}/Divisions/${data.id}`, data)
}

export const fetchDepartments = () => {
    return axios.get(`${Api_Endpoint}/Departments`)
}
export const updateDepartment = (data: any) => {
    return axios.put(`${Api_Endpoint}/Departments/${data.id}`, data)
}
export const fetchUnits = () => {
    return axios.get(`${Api_Endpoint}/Units`)
}
export const updateUnit = (data: any) => {
    return axios.put(`${Api_Endpoint}/Units/${data.id}`, data)
}
export const fetchGrades = () => {
    return axios.get(`${Api_Endpoint}/Grades`)
}
export const updateGrade = (data: any) => {
    return axios.put(`${Api_Endpoint}/Grades/${data.id}`, data)
}
export const fetchGradePerks = () => {
    return axios.get(`${Api_Endpoint}/GradePerks`)
}
export const updateGradePerks = (data: any) => {
    return axios.put(`${Api_Endpoint}/GradePerks/${data.id}`, data)
}
export const fetchPerks = () => {
    return axios.get(`${Api_Endpoint}/Perks`)
}
export const updatePerk = (data: any) => {
    return axios.put(`${Api_Endpoint}/Perks/${data.id}`, data)
}
export const fetchCategories = () => {
    return axios.get(`${Api_Endpoint}/Categories`)
}
export const updateCategory = (data: any) => {
    return axios.put(`${Api_Endpoint}/Categories/${data.id}`, data)
}
export const fetchNotches = () => {
    return axios.get(`${Api_Endpoint}/Notches`)
}
export const updateNotch = (data: any) => {
    return axios.put(`${Api_Endpoint}/Notches/${data.id}`, data)
}
export const fetchPaygroups = () => {
    return axios.get(`${Api_Endpoint}/Paygroups`)
}
export const updatePaygroup = (data: any) => {
    return axios.put(`${Api_Endpoint}/Paygroups/${data.id}`, data)
}
export const fetchEmployees = () => {
    return axios.get(`${Api_Endpoint}/Employees`)
}
export const updateEmployee = (data: any) => {
    return axios.put(`${Api_Endpoint}/Employees/${data.id}`, data)
}
export const updateBenefit = (data: any) => {
    return axios.put(`${Api_Endpoint}/Benefits/${data.id}`, data)
}
export const fetchBenefits = (data: any) => {
    return axios.get(`${Api_Endpoint}/Benefits/`)
}
export const fetchBanks = () => {
    return axios.get(`${Api_Endpoint}/Banks`)
}
export const fetchNationalities = () => {
    return axios.get(`${Api_Endpoint}/Nationalities`)
}

export const updateNationality = (data: any) => {
    return axios.put(`${Api_Endpoint}/Nationalities/${data.id}`, data)
}
export const fetchSkills = () => {
    return axios.get(`${Api_Endpoint}/Skills`)
}
export const updateSkill = (data: any) => {
    return axios.put(`${Api_Endpoint}/Skills/${data.id}`, data)
}

export const fetchExperiences = () => {
    return axios.get(`${Api_Endpoint}/Experiences`)
}
export const fetchQualifications = () => {
    return axios.get(`${Api_Endpoint}/Qualifications`)
}
export const updateQualification = (data: any) => {
    return axios.put(`${Api_Endpoint}/Qualifications/${data.id}`, data)
}
export const fetchJobTitles = () => {
    return axios.get(`${Api_Endpoint}/JobTitles`)
}
export const updateJobTitle = (data: any) => {
    return axios.put(`${Api_Endpoint}/JobTitles/${data.id}`, data)
}
export const fetchMedicals = () => {
    return axios.get(`${Api_Endpoint}/Medicals`)
}
export const updateMedical = (data: any) => {
    return axios.put(`${Api_Endpoint}/Medicals/${data.id}`, data)
}
export const fetchNoteCategories = () => {
    return axios.get(`${Api_Endpoint}/NoteCategories`)
}
export const updateNoteCategory = (data: any) => {
    return axios.put(`${Api_Endpoint}/NoteCategories/${data.id}`, data)
}

export const fetchGradeLeaves = () => {
    return axios.get(`${Api_Endpoint}/GradeLeaves`)
}
export const updateGradeLeave = (data: any) => {
    return axios.put(`${Api_Endpoint}/GradeLeaves/${data.id}`, data)
}

export const fetchCurrencies = () => {
    return axios.get(`${Api_Endpoint}/Currencies`)
}

export const fetchLeaveTypes = () => {
    return axios.get(`${Api_Endpoint}/Leaves`)
}
//update leave type
export const updateLeaveType = (data: any) => {
    return axios.put(`${Api_Endpoint}/Leaves/${data.id}`, data)
}
export const fetchAppraisals = () => {
    return axios.get(`${Api_Endpoint}/Appraisals`)
}
//update appraisal
export const updateAppraisal = (data: any) => {
    return axios.put(`${Api_Endpoint}/Appraisals/${data.id}`, data)
}
export const fetchPeriods = () => {
    return axios.get(`${Api_Endpoint}/Periods`)
}
export const fetchProducts = () => {
    return axios.get(`${Api_Endpoint}/Products`)
}
export const updateProduct = (data: any) => {
    return axios.put(`${Api_Endpoint}/Products/${data.id}`, data)
}

export const fetchTrainees = () => {
    return axios.get(`${Api_Endpoint}/Trainees`)
}

export const fetchTrainings = () => {
    return axios.get(`${Api_Endpoint}/trainings`)
}
export const updateTraining = (data: any) => {
    return axios.put(`${Api_Endpoint}/trainings/${data.id}`, data)
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
export const updateServiceProvider = (data: any) => {
    return axios.put(`${Api_Endpoint}/ServiceProviders/${data.id}`, data)
}

export const updateServiceCost = (data: any) => {
    return axios.put(`${Api_Endpoint}/ServiceCosts/${data.id}`, data)
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

export const updateBenefitCats = (data: any) => {
    return axios.put(`${Api_Endpoint}/BenefitCats/${data.id}`, data)
}

export const fetchDeductionsCategory = () => {
    return axios.get(`${Api_Endpoint}/DeductionCats`)
}

export const updateDeductionsCategory = (data: any) => {
    return axios.put(`${Api_Endpoint}/DeductionCats/${data.id}`, data)
}

export const updateDeductions = (data: any) => {
    return axios.put(`${Api_Endpoint}/Deductions/${data.id}`, data)
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

export const fetchTaxes = () => {
    return axios.get(`${Api_Endpoint}/Taxes`)
}

export const updateTaxes = (data: any) => {
    return axios.put(`${Api_Endpoint}/Taxes/${data.id}`, data)
}

export const fetchTaxFormulas = () => {
    return axios.get(`${Api_Endpoint}/TaxFormulas`)
}

export const updateTaxFormulas = (data: any) => {
    return axios.put(`${Api_Endpoint}/TaxFormulas/${data.id}`, data)
}

export const updateRecruitment = (data: any) => {
    return axios.put(`${Api_Endpoint}/Recruitments/${data.id}`, data)
}

export const updateCompanyAssets = (data: any) => {
    return axios.put(`${Api_Endpoint}/CompanyAssets/${data.id}`, data)
}
