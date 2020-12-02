import {reqGetProductList} from "@api/search"

export default {
    state:{
        productList:{
            trademarkList:[],
            attrsList:[],
            goodsList:[],
            total:0,
        }
    },
    getters: {
        trademarkList(state) {
          return state.productList.trademarkList;
        },
        attrsList(state) {
          return state.productList.attrsList;
        },
        goodsList(state) {
          return state.productList.goodsList;
        },
        total(state) {
            return state.productList.total;
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