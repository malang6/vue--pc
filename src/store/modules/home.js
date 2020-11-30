import {reqGetBaseCategoryList} from "@api/home"
export default {
    state:{
        categoryList: [],// 首页三级分类列表数据
    },
    getters:{},
    actions:{
        // 获取首页三级分类列表数据
        async getCategoryList({commit}){
         // 发送请求
          let categoryList = await reqGetBaseCategoryList();
          categoryList = categoryList.slice(0,15);
          // 触发mutation函数
          commit("GET_CATEGORY_LIST",categoryList)
        }
    },
    mutations:{
        GET_CATEGORY_LIST(state,categoryList){
            state.categoryList = categoryList
        }
    }
}