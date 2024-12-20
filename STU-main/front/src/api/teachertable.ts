import request from "../utils/request.ts";

export const getTeacherList = () =>{
    return request({
        method:'GET',
        url:'/teacher/getTeacherList',
    })
}
//新增和修改
export const addTeacher = (data) =>{
    return request({
        method: 'POST',
        url: '/teacher/addTeacher',
        data
    })
}
//
export const deleteTeacher = (data) => {
    return request({
        method: 'POST',
        url: '/teacher/deleteTeacher',
        data:data
    })
}
