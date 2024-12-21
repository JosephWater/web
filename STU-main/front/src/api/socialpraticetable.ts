import request from "../utils/request.ts";

export const getSocialpraticeList = () =>{
    return request({
        method:'GET',
        url:'/socialpratice/getSocialpraticeList',
    })
}
export const getStudentSocialpraticeList = (id) =>{
    return request({
        method:'GET',
        url:'/internship/getStudentSocialpraticeList',
        params:{studentId: id}
    })
}

//新增和修改
export const addSocialpratice = (data) =>{
    return request({
        method: 'POST',
        url: '/socialpratice/addSocialpratice',
        data
    })
    
}

export const deleteSocialpratice = (data) => {
    return request({
        method: 'POST',
        url: '/socialpratice/deleteSocialpratice',
        data:data
    })
}