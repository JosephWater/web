import request from "../utils/request.ts";

export const getHonourList = () =>{
    return request({
        method:'GET',
        url:'/honour/getHonour',
    })
}
//新增和修改
export const addHonour = (data) =>{
    return request({
        method: 'POST',
        url: '/honour/addHonour',
        data
    })
}
export const deleteHonour = (data) => {
    return request({
        method: 'POST',
        url: '/honour/deleteHonour',
        data:data
    })
}
export const getStuHonour = (id) =>{
    return request({
        method: 'GET',
        url:'/honour/getStudentHonourList',
        params:{studentId: id}
    })
}
export const updateHonour = (data) => {
        return request({
            method: 'POST',
            url: '/honour/updateHonour',
            data:data
        })
    }

