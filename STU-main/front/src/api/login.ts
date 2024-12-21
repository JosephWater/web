import request from "../utils/request.ts";
//import store from '@/store'
//import jwt_decode from "jwt-decode";

export const login = (loginForm) => {
    return request({
      method: 'POST',
      url: '/login',
      data: loginForm
    })
  };
export const getStudentInfo = (id) =>{
  return request({
    method:'GET',
    url:'/student/getList',
    params:{studentId:id}
  })
}
  
  // 获取用户信息

