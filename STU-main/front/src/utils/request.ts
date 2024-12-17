import axios from "axios"
const request = axios.create({
    baseURL: "http://localhost:8080"
})
request.interceptors.request.use(
    (config) => {
      // 从 localStorage 获取 token
      const token = localStorage.getItem('jwt');
      if (token) {
        config.headers['token'] = token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  export default request;