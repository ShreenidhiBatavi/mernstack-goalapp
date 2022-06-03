import axios from'axios';
const baseUrl='http://localhost:8000'

export const getData=(url)=>{
    return axios.get(`${baseUrl}/${url}`,{headers:{
        token:localStorage.getItem("token")
    }})
}
export const postData=(url,values)=>{
    return axios.post(`${baseUrl}/${url}`,values,{
        headers:{
            token:localStorage.getItem("token")
        }
    },)
}
export const updateData=(url,values)=>{
    return axios.put(`${baseUrl}/${url}`,values,{
        headers:{
            token:localStorage.getItem("token")
        }
    })
}
export const deleteData=(url)=>{
    return axios.delete(`${baseUrl}/${url}`,{
        headers:{
            token:localStorage.getItem("token")
        }
    })
}