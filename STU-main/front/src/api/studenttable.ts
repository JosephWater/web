import request from "../utils/request.ts";


export const getStudentList = (pagination) => {
    return request({
        method: 'GET',
        params: {
            page: pagination.page,
            pageSize: pagination.pageSize,
            select:pagination.select,
            input:pagination.input
        },
        url: '/student/getStudentList',
    });
};
//新增和修改
export const addStudent = (data) =>{
    return request({
        method: 'POST',
        url: '/student/addStudent',
        data
    })
}
//
export const deleteStudent = (data) => {
    return request({
        method: 'POST',
        url: '/student/deleteStudent',
        data:data
    })
}
