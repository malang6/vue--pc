import { reqGetProductListDetail } from "@api/detail"

export default {
    state: {
        productDetail:{
            categoryView:{}, //分类展示信息
            skuInfo:{}, // 商品图片
            spuSaleAttrList:[] //商品属性列表
        }
    },
    getters: {
        categoryView(state){
            return state.productDetail.categoryView
        },
        skuInfo(state){
            return state.productDetail.skuInfo
        },
        spuSaleAttrList(state){
            return state.productDetail.spuSaleAttrList
        }
    },
    actions: {
        async getProductListDetail({commit},id){
            const productDetail = await reqGetProductListDetail(id)
            commit("GET_PRODUCT_LIST_DETAIL",productDetail)
        }
    },
    mutations: {
        GET_PRODUCT_LIST_DETAIL(state,productDetail){
            state.productDetail = productDetail
        }
    }
}