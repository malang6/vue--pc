import request from "@utils/request"

/**
 * 登录请求
 */
export const reqLogin = (phone,password)=>{
    return request({
        method:"POST",
        url:"/user/passport/login",
        data:{
            phone,
            password
        }
    })
}