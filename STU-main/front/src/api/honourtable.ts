import request from "../utils/request.ts";

export const getHonourList = () =>{
    return request({
        method:'GET',
        url:'/honour/getHonourList',
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
};