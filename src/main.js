import Vue from "vue"
import App from "./App"
import router from "./router"
import store from '@store'
import './plugins/element.js'

//引入mockServer，就会加载里面的代码
//里面的一旦被加载，就去启动mock服务器，从而拦截相应的请求
import "./mock/mockServer"

import './styles/reset.css'
import './styles/iconfont.css'

Vue.config.productionTip = false

new Vue({
    //在Vue的原型对象上添加一个可以绑定事件的对象。
    beforeCreate(){
        Vue.prototype.$bus = this;
    },
    render: h => h(App),
    router,
    store
}).$mount("#app")