import {reqGetBaseCategoryList,mockGetBanners,mockGetFloors, mockGetLikes} from "@api/home"
export default {
    state:{
        categoryList: [],// 首页三级分类列表数据
        // 下面三个（banners,likes,floors）不放在vuex中管理，因为只是home页面使用 这里放在这里主要是为了练习
        banners:[],//轮播图数据
        likes:[],//猜你喜欢数据
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

        //获取猜你喜欢数据
        async getLikes({commit}){
            const likes = await mockGetLikes();
            commit("GET_LIKES",likes)
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
        GET_LIKES(state,likes){
            state.likes = likes;
        },
        GET_FLOORS(state,floors){
            state.floors = floors;
        }
    }
}