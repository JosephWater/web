import request from "../utils/request.ts";
export const getStudentList = () =>{
    return request({
        method:'GET',
        url:'/student/getStudentList',
    })
}