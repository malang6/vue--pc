import request from "@utils/request"

/**
 * 商品三级分类列表
 */
export const reqGetBaseCategoryList = ()=>{
    return request({
        method:"GET",
        url:"/product/getBaseCategoryList"
    })
}