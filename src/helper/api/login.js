import axiosInstance from '@/utils/axios.js'
// import {message} from 'antd'


export const loginUser = async (data) => {
    try {
        let response = await axiosInstance.post("/users/login",data)
        return response.data

    } catch (error) {
       
        throw new Error(error);
    }
}



