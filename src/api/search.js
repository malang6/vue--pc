import request from "@utils/request"

/**
 * 搜索商品信息列表
 * @param {Object} data 
 */
export const reqGetProductList = (data)=>{
    return request({
        method:"POST",
        url:"/list",
        data,
    })
}