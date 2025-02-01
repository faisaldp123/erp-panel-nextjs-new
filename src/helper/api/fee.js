import axiosInstance from '@/utils/axios.js'
// import {message} from 'antd'


export const payFee = async (data) => {
    try {
        let response = await axiosInstance.post("/fee/pay",data)
        return response.data

    } catch (error) {
        
        throw new Error(error);
    }
}

export const getAllTansactions = async () => {
    try {
        let response = await axiosInstance.get("/fee/transactions")
        return response.data

    } catch (error) {
        
        throw new Error(error);
    }
}

