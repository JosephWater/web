import request from "../utils/request.ts";
export const getInfo = () =>{
    return request({
        method:'GET',
        url:'/login'
    })
}