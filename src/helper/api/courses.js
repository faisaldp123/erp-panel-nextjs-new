import axiosInstance from '@/utils/axios.js'



export async function addCourse(data){
    try {
        let response = await axiosInstance.post("/courses",data)

        return response.data

    } catch (error) {
        console.log(error)

        throw new  Error(error);
    }
}
export async function getCourse(){
    try {
        let response = await axiosInstance.get("/courses")
        // message.success("")
        return response.data

    } catch (error) {

        throw new Error(error);
    }
}
// 
export async function updateCourse(id, data){
    try {
        let response = await axiosInstance.put(`/courses/${id}`,data)

        return response.data.result

    } catch (error) {

        console.log(error)
        throw new Error(error);
    }
}

export async function getCourseById(id){
    try {
        let response = await axiosInstance.get(`/courses/${id}`)
        return response.data.result

    } catch (error) {

        throw new Error(error);
    }
}


