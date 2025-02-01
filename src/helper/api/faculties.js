import axiosInstance from '@/utils/axios.js'
// import {message} from 'antd'


export const getAllFaculties = async () => {
    try {
        let response = await axiosInstance.get("/faculties")
        return response.data

    } catch (error) {
        
        throw new Error(error);
    }
}

export const addFaculty = async (data) => {
    try {
        let response = await axiosInstance.post("/faculties", data)
        return response.data

    } catch (error) {
        
        throw new Error(error);
    }
}