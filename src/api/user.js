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

/**
 * 注册
 * 当参数三个以上时建议采用对象形式
 */
export const reqRegister = ({phone,password,code})=>{
    return request({
        method:"POST",
        url:"/user/passport/register",
        data:{
            phone,
            password,
            code
        }
    })
}

/**
 * 退出登录
 * 
 */
export const reqExit = ()=>{
    return request({
        method:"GET",
        url:"/user/passport/logout",
    })
}

