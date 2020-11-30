import Vue from "vue"
import Vuex from "vuex"
import modules from "./modules"

Vue.use(Vuex);

const state = {
    // testCount:0, //测试
};

// 储存只读计算属性数据容器
const getters  ={};

const actions = {};

const mutations = {};

/* 
  vuex管理的数据：
  {
    testCount: 0, // 总数据
    home: { // 其他模块数据
      categoryList: []
    },
    login: {

    }
  }
*/

export default new Vuex.Store({
    state, // 总state(多个组件公共的状态数据就可以放这里)
    getters, // 总getters
    actions, // 总actions
    mutations, // 总mutations
    modules // 其他vuex模块的数据
})