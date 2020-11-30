import {reqGetBaseCategoryList,mockGetBanners,mockGetFloors} from "@api/home"
export default {
    state:{
        categoryList: [],// 首页三级分类列表数据
        banners:[],//轮播图数据
        floors:[],//楼层数据
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
        },

        //获取轮播图数据
        async getBanners({commit}){
            const banners = await mockGetBanners();
            commit("GET_BANNERS",banners);
        },
        //获取楼层数据
        async getFloors({commit}){
            const floors = await mockGetFloors();
            commit("GET_FLOORS",floors);
        }
    },
    
    mutations:{
        GET_CATEGORY_LIST(state,categoryList){
            state.categoryList = categoryList;
        },
        GET_BANNERS(state,banners){
            state.banners = banners;
        },
        GET_FLOORS(state,floors){
            state.floors = floors;
        }
    }
}