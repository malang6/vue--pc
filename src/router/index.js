import Vue from "vue"
import VueRouter from "vue-router"

import Home from "@views/Home"
import Login from "@views/Login"
import Register from "@views/Register"
import Search from "@views/Search"
import ShopCart from "@views/ShopCart"
import AddCartSuccess from "@views/AddCartSuccess"
import Center from "@views/Center"
import Detail from "@views/Detail"

//重写$router的push和replace方法(解决编程式导航重复点击时报错问题)
const push = VueRouter.prototype.push;
VueRouter.prototype.push = function (location,onComplate,onAbort){
    if(onComplate && onAbort){
      return push.call(this,location,onComplate,onAbort)
    }
    return push.call(this,location, ()=>{},()=>{})
}

const replace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function (location,onComplate,onAbort){
    if(onComplate && onAbort){
        return replace.call(this,location,onComplate,onAbort)
      }
      return replace.call(this,location,()=>{},()=>{})
}

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:Home,
            meta:{
                isCopyRightHide:false
            }
        },
        {
            path:'/login',
            component:Login,
             // 当组件加载显示时，meta中的参数会传到$route中
            // 当组件不加载显示时，meta中的参数不会传
            meta:{
                isCopyRightHide:true
            }
        },
        {
            path:'/register',
            component:Register,
            meta:{
                isCopyRightHide:true
            }
        },
        {
            name:"search",
            //?表示parmas参数可选的
            path:'/search/:searchText?',
            component:Search,
        },
        {
            path:'/shopcart',
            component:ShopCart,
        },
        {
            path:"/addcartsuccess",
            component:AddCartSuccess,
        },
        {
            path:"/center/myorder",
            component:Center,
        },
        {
            name:"detail",
            path:"/detail/:id",
            component:Detail,
        }
    ],
    // 每次切换路由的时候，设置滚轮的位置都是在顶上的 x:水平方向，y：垂直方向
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})