import Vue from "vue"
import VueRouter from "vue-router"
import store from "../store"

// import Home from "@views/Home"
// import Login from "@views/Login"
// import Register from "@views/Register"
// import Search from "@views/Search"
// import ShopCart from "@views/ShopCart"
// import AddCartSuccess from "@views/AddCartSuccess"
// import Detail from "@views/Detail"
// import Trade from "@views/Trade"
// import Pay from "@views/Pay"
// import PaySuccess from "@views/PaySuccess"
// import Center from "@views/Center"
// import MyOrder from '@/views/Center/MyOrder'
// import GroupBuy from '@/views/Center/GroupBuy'

//路由懒加载
/*
 当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。
 如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了
 */
// 1. 会将路由组件打包成单独的js文件（webpack代码分割）
// 2. 异步加载路由组件（需要使用才加载）（Vue异步加载组件功能）
/* webpackChunkName: "Home" */ //给打包后的js文件命名  不写的话，会随机生成一个chunkName
const Home = () => import(/* webpackChunkName: "Home" */'@views/Home')
const Login = () => import(/* webpackChunkName: "Login" */'@views/Login')
const Register = () => import(/* webpackChunkName: "Register" */'@views/Register')
const Search = () => import(/* webpackChunkName: "Search" */'@views/Search')
const ShopCart = () => import(/* webpackChunkName: "ShopCart" */'@views/ShopCart')
const AddCartSuccess = () => import(/* webpackChunkName: "AddCartSuccess" */'@views/AddCartSuccess')
const Detail = () => import(/* webpackChunkName: "Detail" */'@views/Detail')
const Trade = () => import(/* webpackChunkName: "Trade" */'@views/Trade')
const Pay = () => import(/* webpackChunkName: "Pay" */'@views/Pay')
const PaySuccess = () => import(/* webpackChunkName: "PaySuccess" */'@views/PaySuccess')
const Center = () => import(/* webpackChunkName: "Center" */'@views/Center')
const MyOrder = () => import(/* webpackChunkName: "MyOrder" */'@views/Center/MyOrder')
const GroupBuy = () => import(/* webpackChunkName: "GroupBuy" */'@views/Center/GroupBuy')

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