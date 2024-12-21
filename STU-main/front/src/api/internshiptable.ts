import request from "../utils/request.ts";
import store from "../store/index.js";

export const getInternshipList = () =>{
    return request({
        method:'GET',
        url:'/internship/getInternshipList',
    })
}

export const getStudentInternshipList = (id) =>{
    return request({
        method:'GET',
        url:'/internship/getStudentInternshipList',
        params:{studentId: id}
    })
}
//新增和修改
export const addInternship = (data) =>{
    return request({
        method: 'POST',
        url: '/internship/addInternship',
        data
    })
    
}

export const updateInternship = (data) =>{
    return request({
        method: 'POST',
        url: '/internship/updateInternship',
        data
    })

}

export const deleteInternship = (data) => {
    return request({
        method: 'POST',
        url: '/internship/deleteInternship',
        data: data
    })
}