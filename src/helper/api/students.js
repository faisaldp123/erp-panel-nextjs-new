import axiosInstance from '@/utils/axios.js'



export async function addStudent(data){
    try {
        let response = await axiosInstance.post("/students",data)

        return response.data

    } catch (error) {
        console.log(error)

        throw new  Error(error);
    }
}
export async function getStudent(){
    try {
        let response = await axiosInstance.get("/students")
        // message.success("")
        return response.data

    } catch (error) {

        throw new Error(error);
    }
}
// 
export async function updateStudent(id, data){
    try {
        let response = await axiosInstance.put(`/students/${id}`,data)

        return response.data.result

    } catch (error) {
     
        throw new Error(error);
    }
}

export async function getStudentById(id){
    try {
        let response = await axiosInstance.get(`/students/${id}`)
        return response.data.result

    } catch (error) {

        throw new Error(error);
    }
}

export async function getStudentInfo(id){
    try {
        let response = await axiosInstance.get(`/students/info/${id}`)
        return response.data.result

    } catch (error) {

        throw new Error(error);
    }
}


export async function getProfileInfo(){
    try {
        let response = await axiosInstance.get('/students/profile/info');
        return response.data.result
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

