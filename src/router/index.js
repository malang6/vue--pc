import Vue from "vue"
import VueRouter from "vue-router"
import store from "../store"

import Home from "@views/Home"
import Login from "@views/Login"
import Register from "@views/Register"
import Search from "@views/Search"
import ShopCart from "@views/ShopCart"
import AddCartSuccess from "@views/AddCartSuccess"
import Detail from "@views/Detail"
import Trade from "@views/Trade"
import Pay from "@views/Pay"
import PaySuccess from "@views/PaySuccess"
import Center from "@views/Center"
import MyOrder from '@/views/Center/MyOrder'
import GroupBuy from '@/views/Center/GroupBuy'

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

const router = new VueRouter({
    //路由模式
    // mode:"hash",//默认就是hash模式
    mode:"history",
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
            name:"detail",
            path:"/detail/:id",
            component:Detail,
        },
        {
            path: '/center',
            component: Center,
            children: [
              {
                path: '/center/myorder',
                component: MyOrder
              },
              {
                path: 'groupbuy',
                component: GroupBuy
              },
              // 自动跳转的路由
              {
                path: '',
                redirect: '/center/myorder'
              }
            ]
          },
        
        {
            name:"pay",
            path:"/pay",
            component:Pay,
        },
        {
            name:"paysuccess",
            path:"/paysuccess",
            component:PaySuccess,
        },
        {
            name:"trade",
            path:"/trade",
            component:Trade,
        },
        
    ],
    // 每次切换路由的时候，设置滚轮的位置都是在顶上的 x:水平方向，y：垂直方向
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})

/*
	路由守卫：
		1. 是什么
			在路由跳转之前、之中、之后触发的钩子函数（类似于生命周期）
		2. 分类
			全局守卫
				全局前置守卫：在切换路由之前触发
					beforeEach
				全局解析守卫：之中
					beforeResolve
				全局后置守卫：之后
					afterEach
			路由守卫
			组件守卫		

*/
// 需要进行权限验证的地址
const permissionPaths = ["/trade","/pay","/center","/paysuccess"];
// 路由全局前置守卫
router.beforeEach((to,from,next)=> {
    /*
		to   要去的路由对象($route)
		from 从哪来的路由对象（当前路由对象）($route)
		next 是一个函数：跳转到哪个路由的方法
			比如：要去to这个路由 next()	
						要去登录路由 next('/login')  next({path: '/login'})  next({name: 'login'})
	
		
		权限验证：
			如果用户未登录，不允许去 trade pay center 等路由
    */
    //用includes也可以，但是可能存在兼容性问题，indexOf不存在，所以更好
    if(permissionPaths.indexOf(to.path) > -1 && !store.state.user.token){
        return next("/login")
    }
    next()
}) 

export default router