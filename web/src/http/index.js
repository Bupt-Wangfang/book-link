import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'

const instance = axios.create({
    baseURL: '/api',
    tomeout: 10000
});

// 请求拦截
instance.interceptors.request.use(function(config) {
    // 发送请求之前做的事情
    const token = localStorage.getItem('token');
    if(token) {
        config.headers.authorization = 'Bearer' + token;
    }
    return config;
}, function(error) {
    // 请求错误时做的事情
    return Promise.reject(error);
});

// 响应拦截
instance.interceptors.response.use(function(response) {
    // 对响应数据做的操作
    const res =  response.data;
    if (res.code === 0) {
        return response;
    } else {
        Message.closeAll();
        Message({message: res.msg, type: 'error'});
    }
}, (error) => {
    try {
        const config = error.config;
        const response = error.response;
        let showErr = true;
        if (response) {
            switch (error.response.status) {
                case 401: 
                    // 清空
                    if(!(Object.prototype.hasOwnProperty.call(config, 'notLogin') && config.notLogin)) {
                        store.dispatch('user/logout');
                    }
                    showErr = false;
                    break;
                case 400:
                    error.message = '错误请求';
                    break;
                case 403:
                    error.message = '拒绝访问';
                    break;
                case 404:
                    error.message = '页面不存在';
                    break;
                case 500:
                    error.message = '服务端错误';
                    break;
            }
        } else {
            error.message = '网络异常';
        }
        showErr && Message({message: error.message, type: 'error'});
    } catch(err) {
        return Promise.reject(err);
    }
});

export default instance;