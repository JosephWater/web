import request from "../utils/request.ts";

export const getCourseList = () =>{
    return request({
        method:'GET',
        url:'/course/getCourseList',
    })
}
//新增和修改
export const addCourse = (data) =>{
    return request({
        method: 'POST',
        url: '/course/addCourse',
        data
    })
}