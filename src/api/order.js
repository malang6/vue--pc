import request from "@utils/request"

/**
 * 搜索订单交易信息列表
 */
export const reqGetOrderList = ()=>{
    return request({
        method:"GET",
        url:"/order/auth/trade",
    })
}

/**
 * 提交订单
 */
export const reqSubmitOrder = (data)=>{
    return request({
        method:"POST",
        url:"/order/auth/submitOrder",
        data
    })
}
