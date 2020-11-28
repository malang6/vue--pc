import axios from "axios"
import {Message} from "element-ui"
// 进度条效果的库
import NProgress from 'nprogress'
import "nprogress/nprogress.css"

const instance = axios.create({
    baseURL: "/api",
    headers:{}
})

//请求拦截器
instance.interceptors.request.use(
    (config)=>{
        //进度条开始
        NProgress.start()
        return config;
    }
)

//响应拦截器
instance.interceptors.response.use(
    (response)=>{
        if(response.data.code === 200){
            //进度条结束
            NProgress.done()
            return response.data.data;
        }
        //进度条结束
        NProgress.done()

        const message = response.data.message
        //失败的提示
        Message.error(message)
        return Promise.reject(message);
    },
    (error)=>{
        // console.dir(error)
        //进度条结束
        NProgress.done()
        const message = error.message || "网络错误"
        //失败的提示
        Message.error(message)
        return Promise.reject(message)
    }
)

export default instance