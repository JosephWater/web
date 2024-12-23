import request from "../utils/request.ts";
//import store from '@/store'
//import jwt_decode from "jwt-decode";

export const login = (loginForm) => {
    console.log(loginForm)
    return request({
      method: 'POST',
      url: '/login',
      data: loginForm
    })
  };
export const register = (form) => {
    console.log(form)
    return request({
      method: 'GET',
      url: '/login/register',
        params:{
          type:form.type,
          username:form.username,
          password:form.password,
          name:form.name
        }
    })
  };
export const getStudentInfo = (id) =>{
  return request({
    method:'GET',
    url:'/student/getList',
    params:{id:id}
  })
}
  
  // 获取用户信息

