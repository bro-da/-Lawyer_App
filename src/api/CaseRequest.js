import axios from './Axios'


export const getAllCase = () => axios.get('/admin/case/all')
export const deletetCase = (caseID) => axios.get(`/admin/case/delete/${caseID}`)
export const editCase = (caseID,data) => axios.patch(`/admin/case/update/${caseID}`,data)
export const addCase = (data) => axios.post(`/admin/case/add`,data)


