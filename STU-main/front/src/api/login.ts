import request from "../utils/request.ts";
//import store from '@/store'
//import jwt_decode from "jwt-decode";

export const login = (loginForm) => {
    return request({
      method: 'POST',
      url: '/login',
      data: loginForm
    });
  };
  
  // 获取用户信息

