import request from "../utils/request.ts";

export const getTeacherList = (pagination) =>{
    return request({
        method:'GET',
        params: {
            page: pagination.page,
            pageSize: pagination.pageSize,
            select:pagination.select,
            input:pagination.input
        },
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
export const updateTeacher = (data) =>{
    console.log(data)
    return request({
        method: 'POST',
        url: '/teacher/updateTeacher',
        data:data
    })
}
