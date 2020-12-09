import Vue from "vue"
import VueLazyload from 'vue-lazyload'
/*
  https://github.com/hilongjw/vue-lazyload

  1. 安装
    yarn add vue-lazyload
  2. 配置
    plugins/lazyload.js
  3. main.js 引入   import './plugins/lazy.js'
  4. 使用
    将图片的src属性改成v-lazy

*/
import loading from "../plugins/imgs/loading.jpg"

Vue.use(VueLazyload,{
    // loading: "../assets/imgs/loading.gif", // 不行，不能当做图片解析
    loading,
})

//在.vue文件中可以像注释那样直接写，因为vue-loader先加载图片，再交给url-loader处理，将图片解析了
//而其他js文件的则不行，想要被解析，需要使用import引入图片路径