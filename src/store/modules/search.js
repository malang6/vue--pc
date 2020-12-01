import {reqGetProductList} from "@api/search"

export default {
    state:{
        productList:{
            trademarkList:[],
            attrsList:[],
            goodsList:[]
        }
    },
    getters: {
        trademarkList(state) {
            console.log(state.productList)
          return state.productList.trademarkList;
        },
        attrsList(state) {
          return state.productList.attrsList;
        },
        goodsList(state) {
          return state.productList.goodsList;
        },
    },
    actions:{
        async getProductionList({commit},data={}){
            const productList = await reqGetProductList(data)
            commit("GET_PRODUCTION_LIST",productList)
        }
    },
    mutations:{
        GET_PRODUCTION_LIST(state,productList){
            state.productList = productList
        }
    }
}