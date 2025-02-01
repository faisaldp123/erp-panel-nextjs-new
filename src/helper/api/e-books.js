import axiosInstance from '@/utils/axios.js'
// import {message} from 'antd'


export const getAllEbooks = async () => {
    try {
        let response = await axiosInstance.get("/ebooks")
        return response.data

    } catch (error) {
        
        throw new Error(error);
    }
}

export const addEbooks = async (data) => {
    try {
        let response = await axiosInstance.post("/ebooks", data)
        return response.data

    } catch (error) {
        
        throw new Error(error);
    }
}
export const updateEbooks = async (ebook_id, data) => {
    try {
        let response = await axiosInstance.put(`/ebooks/${ebook_id}`, data)
        return response.data

    } catch (error) {
        
        throw new Error(error);
    }
}