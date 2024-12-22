import request from "../utils/request.ts";

export const getInnovationList = () =>{
    return request({
        method:'GET',
        url:'/innovation/getInnovationList',
    })
}

export const getStudentInnovationList = (id) =>{
    return request({
        method:'GET',
        url:'/innovation/getStudentInnovationList',
        params:{studentId: id}
    })
}
//新增和修改
export const addInnovation = (data) =>{
    return request({
        method: 'POST',
        url: '/innovation/addInnovation',
        data
    })
    
}

export const deleteInnovation = (data) => {
    return request({
        method: 'POST',
        url: '/innovation/deleteInnovation',
        data:data
    })
}