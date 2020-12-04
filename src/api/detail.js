import request from "@utils/request"

/**id
 * 获取商品详细信息
 * @param {Number} id 
 */
export const reqGetProductListDetail = (id)=>{
    return request({
        method:"GET",
        url:`/item/${id}`,
    })
}