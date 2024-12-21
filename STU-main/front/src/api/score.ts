import request from "../utils/request.ts";



export const getScore = (id) =>{
    return request({
        method:'GET',
        url:'/courseChoose/getScore',
        params:{id:id}
    })
}