import {reqAddToCart,reqGetCartList,reqDelCart,reqCheckCart} from "@api/shopcart"

export default {
    state:{
        cartList:[] //购物车列表
    },
    getters: {},
    actions:{
        // 获取购物车列表信息
       async getCartList({commit}){
           const cartList = await reqGetCartList();
            commit("GET_CART_LIST",cartList)
       },
       // 添加商品到购物车/改变购物商品的数量
       async addToCart({commit},{skuId,skuNum}){
            await reqAddToCart(skuId,skuNum);
            // 1.发请求更新（不推荐，多发一次）请求 比较慢
            // 2. 手动更新vuex的数据 --> 页面就会重新渲染
            commit("UPDATE_CART_COUNT",{skuId,skuNum})
       },
       // 删除购物车商品
       async delCart({commit},skuId){
        await reqDelCart(skuId);
         commit("CART_LIST",skuId)
       },
       // 切换商品选中状态
       async checkCart({commit},{skuId,isChecked}){
            await reqCheckCart(skuId,isChecked)
            commit("CHECK_CART",{skuId,isChecked})
       },    
       // 全选处理
       async checkAllCart ({state, dispatch}, isChecked) {
        // 确定对应的isChecked值
        const ischecked =  isChecked ? '1' : '0'
        let promises = []
        // 遍历每个购物项
        state.cartList.forEach(item => {
          // 购物项的状态与目标状态不一样
          if (item.isChecked!=ischecked) {
            // 分发给checkCart, 得到其返回的promise对象
            const promise = dispatch("checkCart",{skuId: item.skuId, isChecked:ischecked})
            // 保存到数组中
            promises.push(promise)
          }
        })
        return Promise.all(promises) 
      },
    },
    mutations:{
        GET_CART_LIST(state,cartList){
            state.cartList = cartList
        },
        //更新购物车数量
        UPDATE_CART_COUNT(state,{skuId,skuNum}){
            state.cartList = state.cartList.map((cart) => {
				if (cart.skuId === skuId) {
                    cart.skuNum += skuNum;
				}
				return cart;
			});
        },
        //删除购物车商品
        CART_LIST(state,skuId){
            state.cartList = state.cartList.filter(cart=>cart.skuId !== skuId)
        },

        // 切换商品选中状态
        CHECK_CART(state,{skuId,isChecked}){
            const ischecked = isChecked ? '1' : '0'
            state.cartList = state.cartList.map(cart=>{
                if(cart.skuId === skuId){
                    cart.isChecked = ischecked
                }
                return cart
            })
        },
    }
}