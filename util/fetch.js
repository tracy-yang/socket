import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000/"; 
// axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
  
// 添加响应拦截器
axios.interceptors.response.use((res)=> {
    let data = res.data;
    if(res.status != '200'){
        return Promise.reject(data)
    }else{ // 成功
        return Promise.resolve(data);
    }
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default axios;
  