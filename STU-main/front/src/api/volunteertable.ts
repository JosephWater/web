import request from "../utils/request.ts";

export const getVolunteerList = () =>{
    return request({
        method:'GET',
        url:'/volunteer/getVolunteerList',
    })
}

export const getStudentVolunteerList = (id) =>{
    return request({
        method:'GET',
        url:'/internship/getStudentVolunteerList',
        params:{studentId: id}
    })
}
//新增和修改
export const addVolunteer = (data) =>{
    return request({
        method: 'POST',
        url: '/volunteer/addVolunteer',
        data
    })
    
}

export const deleteVolunteer = (data) => {
    return request({
        method: 'POST',
        url: '/volunteer/deleteVolunteer',
        data:data
    })
}