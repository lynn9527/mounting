import axios from 'axios';
// import store from './store'
import Vue from 'vue'
import { Notify } from 'vant';
Vue.use(Notify);

// 创建axios实例
var baseURL;
if(process.env.NODE_ENV === 'development'){
  baseURL =  process.env.BASE_API
}else if(process.env.NODE_ENV === 'production'){
  baseURL = window.g.baseUrl
}
const service = axios.create({
  baseURL: baseURL,
  timeout: 180000, // 请求超时时间
  headers: {
    "Content-Type": "application/json",
  }
});
// request拦截器
service.interceptors.request.use(config=>{
  let token=localStorage.getItem("token");
  if(token){
    // 设置请求头
    config.headers.token = token; // 让每个请求携带token
  }
   return config;
},error => {
  return Promise.reject(error)
});

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    if(response.status == 200){
      if(res.code == 200){
        return response.data
      }else {
            Notify({
              message: res.message,
              duration: 3000,
              background:'#1989fa'
            });
        return Promise.reject('error')
      }
    }

  },
  error => {
    if(error.code =='ECONNABBORTED'){
      Notify({
        message: "连接超时",
        duration: 3000,
      });
    }else if(error.response.status==530 ||error.response.status==531){
      Notify({
        message: 'token过期,请重新登陆',
        duration: 3000,
      });
    }else {
      Notify({
        message: error.message,
        duration: 3000,
      });
    }
  }
);

export default service
