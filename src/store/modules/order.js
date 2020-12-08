import {reqGetOrderList} from "@api/order"

export default {
    state:{
        orderList:{
            userAddressList:[],
            detailArrayList:[]
        }
    },
    getters:{},
    actions:{
        //获取订单信息
        async getOrderList({commit}){
           const orderList = await reqGetOrderList();
           commit("GET_ORDER_LIST",orderList)
        }
    },
    mutations:{
        GET_ORDER_LIST(state,orderList){
            state.orderList = orderList
        }
    },
}