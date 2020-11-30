import request from "@utils/request"
import mockRequest from "@utils/mockRequest"
/**
 * 获取商品三级分类列表
 */
export const reqGetBaseCategoryList = ()=>{
    return request({
        method:"GET",
        url:"/product/getBaseCategoryList"
    })
}

/**
 * 获取轮播图数据
 */
export const mockGetBanners = ()=>{
    return mockRequest({
        method:"GET",
        url:"/banners"
    })
}

/**
 * 获取楼层数据
 */
export const mockGetFloors = ()=>{
    return mockRequest({
        method:"GET",
        url:"/floors"
    })
}