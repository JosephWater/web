import request from "../utils/request.ts";
//import store from '@/store'
//import jwt_decode from "jwt-decode";
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
//选课
export const addStudent = (id1, id2) => {
    return request({
        method: 'POST',
        url: '/student/addStudent',
        data: {
            stuid: id1,  // 将 id1 放到请求体中的 stuid 字段
            courseid: id2  // 将 id2 放到请求体中的 courseid 字段
        }
    });
}
//学生课程列表
export const getStuCourse = () =>{
    return request({
        method: 'GET',
        url:'/courseChoose/getCourseChooseListFromStudent'
    })
}
