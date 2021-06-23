import Vue from 'vue'
import VueRouter from 'vue-router'
// 路由跳转出错解决方法
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// 路由懒加载
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },{
    path: '/home',
    name: 'Home',
    component: Home
  },{
    path: '/category',
    name: 'Category',
    component: Category
  },{
    path: '/cart',
    name: 'Cart',
    component: Cart
  },{
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
