import axios from "axios"
import {Message} from "element-ui"
// 进度条效果的库
import NProgress from 'nprogress'
import getUserTempId from "./getUserTempId"

import "nprogress/nprogress.css"

const instance = axios.create({
    //基础路径 因为做了用户代理，所以前面的目标地址不用写了。 / 就是当前服务器地址
    baseURL: "/api",
    //公共请求头，直接写在这里，就代表所以请求都会携带上
    headers:{}
})

/*
	userTempId 未登录用户的临时id
		通过uuid来生成
	1. 因为每个userTempId自己的购物车数据
			后台会根据userTempId的值来返回购物车数据
			如果userTempId刷新了，购物车数据就没了（清空了）
		所以生成后要持久存储起来，未来将来可以反复使用	
			localStorage 永久存储
			sessionStorage 回话存储（一旦关闭浏览器数据就会被清空）
				xxx.setItem(key, value) 存储
				xxx.getItem(key) 读取
				xxx.removeItem(key) 删除单个
				xxx.clear() 清空所有
	
	2. 整体流程：
		- 先读取本地localStorage数据，看是否有userTempId
		- 如果有，直接使用
		- 如果没有，需要创建userTempId，同时保存在localStorage中

	3. 在内存中缓存一份localStorage数据，让性能更好
*/
const userTempId = getUserTempId();

//请求拦截器
instance.interceptors.request.use(
    (config)=>{
        //进度条开始
        NProgress.start()
        // 将临时id添加到请求头上，每次发送请求就都会携带上
        config.headers.userTempId = userTempId;

        return config;
    },
    // 初始化Promise.resolve()返回默认成功的Promise，只会触发成功的回调
  // () => {},
)

//响应拦截器
instance.interceptors.response.use(
    //响应成功 不代表功能成功，只有代表有返回响应，成功还是失败的数据，还要判断code
    (response)=>{
        if(response.data.code === 200){
            //进度条结束
            NProgress.done()
            return response.data.data;
        }
        //进度条结束
        NProgress.done()

        const message = response.data.message
        //功能失败的提示
        Message.error(message)
        return Promise.reject(message);
    },
    //响应失败
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