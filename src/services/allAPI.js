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

// add job
export const addJobsAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST", `${SERVERURL}/add-job`, reqBody, reqHeader)
}