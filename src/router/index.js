import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../views/Home"
import Login from "../views/Login"
import Register from "../views/Register"
import Search from "../views/Search"

//重写$router的push和replace方法
const push = VueRouter.prototype.push;
VueRouter.prototype.push = function (location,onComplate,onAbort){
    if(onComplate && onAbort){
      return push.call(this,location,onComplate,onAbort)
    }
    return push.call(this,()=>{},()=>{})
}

const replace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function (location,onComplate=()=>{},onAbort=()=>{}){
    replace.call(this,location,onComplate,onAbort)
}

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/login',
            component:Login,
            meta:{
                isFooterHide:true
            }
        },
        {
            path:'/register',
            component:Register,
            meta:{
                isFooterHide:true
            }
        },
        {
            name:"search",
            //?表示parmas参数可选的
            path:'/search/:searchText?',
            component:Search
        },
    ]
})