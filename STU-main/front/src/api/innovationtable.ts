import request from "../utils/request.ts";

export const getInnovationList = () =>{
    return request({
        method:'GET',
        url:'/Innovation/getInnovationList',
    })
}

export const getStudentInnovationList = (id) =>{
    return request({
        method:'GET',
        url:'/internship/getStudentInnovationList',
        params:{studentId: id}
    })
}
//新增和修改
export const addInnovation = (data) =>{
    return request({
        method: 'POST',
        url: '/Innovation/addInnovation',
        data
    })
    
}

export const deleteInnovation = (data) => {
    return request({
        method: 'POST',
        url: '/Innovation/deleteInnovation',
        data:data
    })
}