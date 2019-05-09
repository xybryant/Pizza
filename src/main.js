
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { router } from './router'
import axios from 'axios'
import store from './store/store'

axios.defaults.baseURL = 'https://wd1695319840sjftof.wilddogio.com/'

Vue.prototype.$axios = axios 
Vue.use(VueRouter)
const routers = new VueRouter({
	routes: router, //抽离路由配置
	mode: 'history',
	linkActiveClass: 'active',
	scrollBehavior: (to, from, savedPosition) => { 
		if(savedPosition){
			return savedPosition
		}else{
			return { x: 0, y: 0 }
		}
	}
})
/*const routers = new VueRouter({
	routes: [
		{path:'/', component: Home},
		{path:'/home', component: Home},
		{path:'/menu', component: Menu},
		{path:'/manage', component: Manage, beforeEnter: (to, from, next) => {
			alert('请先登录！')//路由独享守卫
			next('/login')
		}},
		{path:'/login', component: Login},
		{path:'/register', component: Register},
		{path:'/register', name:'registerLink', component: Register},
		// <router-link :to="{name: 'registerLink'}" class="nav-link">注册</router-link>
		{path:'/about', component: About, redirect: '/about/history', linkActiveClass: 'active', children: [ //二级路由
			{path:'/about/history', name:'historyLink', component: AboutHistory},
			{path:'/about/guide', name:'guideLink', component: AboutGuide},
			{path:'/about/delivery', name:'deliveryLink', component: AboutDelivery},
			{path:'/about/contact', name:'contactLink', redirect: '/about/contact/phone', component: AboutContact, children: [
				{path:'/about/contact/phone', name:'phoneLink', component: Phone},
				{path:'/about/contact/person', name:'personLink', component: Person}
			]},
		]},
		{path:'*', redirect: '/'}//路由地址错误跳转到主页
	],
	mode: 'history',
	linkActiveClass: 'active'
})*/
//全局守卫
/*routers.beforeEach((to, from, next) => {
	if(to.path === '/login' || to.path === '/register'){
		next()
	}else{
		alert('请先登录！')
		next('/login')
	}
})*/

new Vue({
  el: '#app',
  render: h => h(App),
  router: routers,
  store: store
})
