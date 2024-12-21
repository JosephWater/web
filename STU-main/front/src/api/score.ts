import request from "../utils/request.ts";



export const getScore = (id) =>{
    return request({
        method:'GET',
        url:'/courseChoose/getScore',
        params:{id:id}
    })
}
export const deleteScore = (data) => {
    return request({
        method: 'POST',
        url: '/courseChoose/delete',
        data:data
    })
}
export const addScore = (data) => {
    console.log(data)
    return request({
        method: 'POST',
        url: '/courseChoose/addScore',
        data:data
    })
}