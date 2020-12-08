import request from "@utils/request"

/**
 * 搜索订单交易信息列表
 */
export const reqGetOrderList = () => {
    return request({
        method: "GET",
        url: "/order/auth/trade",
    })
}

/**
 * 提交订单
 */
export const reqSubmitOrder = ({
    tradeNo,
    consignee,
    consigneeTel,
    deliveryAddress,
    paymentWay,
    orderComment,
    orderDetailList
}) => {
    return request({
        method: "POST",
        url: "/order/auth/submitOrder",
        params: {
            tradeNo
        },
        data: {
            consignee,
            consigneeTel,
            deliveryAddress,
            paymentWay,
            orderComment,
            orderDetailList
        }
    })
}

//获取二维码
export const reqCreateNative = (orderId) => {
    return request({
        method: "GET",
        url: `/payment/weixin/createNative/${orderId}`,
    })
}

/**
 * 查询支付订单状态
 */
export const reqQueryPayStatus = (orderId) => {
    return request({
        method: "GET",
        url: `/payment/weixin/queryPayStatus/${orderId}`,
    })
}

/**
 * 获取我的订单列表
 */
export const reqOrderList = (page,limit) => {
    return request({
        method: "GET",
        url: `/order/auth/${page}/${limit}`,
    })
}