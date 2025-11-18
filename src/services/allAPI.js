import commonAPI from "./commonAPI";
import SERVERURL from "./serverURL";

// register
export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/register`, reqBody)
}

// login
export const loginAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/login`, reqBody)
}

// google login api
export const googleLoginAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/google-login`, reqBody)
}


// add job
export const addJobsAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST", `${SERVERURL}/add-job`, reqBody, reqHeader)
}

// get all job
export const getAllJobsAPI = async (search,reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/all-jobs?search=${search}`,"",reqHeader)
}

// view jobs
export const viewJobsAPI = async (jobID,reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/jobs/${jobID}/view`,{},reqHeader)
}

// update user profile
export const updateUserProfileAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/user-profile/edit`,reqBody,reqHeader)
}

// get all user uploaded jobs
export const getAllUserUploadJobsAPI = async (reqHeader)=>{
    return await commonAPI("GET", `${SERVERURL}/user-jobs`, {}, reqHeader)
}

//  remove user upload books - called by profile component
export const removeUserUploadJobsAPI = async (jobID, reqHeader) => {
    return await commonAPI("DELETE", `${SERVERURL}/user-jobs/${jobID}/remove`, {}, reqHeader)
}

// get all user bought books
export const getAllUserPurchasedJobsAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/user-bought-jobs`, {}, reqHeader)
}

// admin
 
// get all users
export const getAllUsersAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/all-users`,{},reqHeader)
}

// update admin profile
export const updateAdminProfileAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/admin-profile/edit`,reqBody,reqHeader)
}

// list all jobs
export const allJobsAdminAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/admin-all-jobs`,{},reqHeader)
}

// update job status
export const updateJobStatusAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/admin/jobs/approve`,reqBody,reqHeader)
}