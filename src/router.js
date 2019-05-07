import Home from './components/Home'
import Menu from './components/Menu'
import Manage from './components/Manage'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/about/About'
//二级路由
import AboutHistory from './components/about/History'
import AboutContact from './components/about/Contact'
import AboutDelivery from './components/about/Delivery'
import AboutGuide from './components/about/Guide'
//三级路由
import Phone from './components/about/contact/Phone'
import Person from './components/about/contact/Person'
const router = [
		//{path:'/', component: Home},
		{path:'/', components: {//复用router-view
			default: Home,
			'historyLink': AboutHistory,
			'guideLink': AboutGuide,
			'deliveryLink': AboutDelivery
		}},
		// {path:'/home', component: Home},
		{path:'/menu', component: Menu},
		{path:'/manage', component: Manage/*, beforeEnter: (to, from, next) => {
			alert('请先登录！')//路由独享守卫
			next('/login')
		}*/},
		{path:'/login', component: Login},
		{path:'/register', component: Register},
		{path:'/register', name:'registerLink', component: Register},
		// <router-link :to="{name: 'registerLink'}" class="nav-link">注册</router-link>
		{path:'/about', component: About, redirect: '/about/history', linkActiveClass: 'active', children: [ //二级路由
			{path:'/about/history', name:'historyLink', component: AboutHistory},
			{path:'/about/guide', name:'guideLink', component: AboutGuide},
			{path:'/about/delivery', name:'deliveryLink', component: AboutDelivery},
			{path:'/about/contact', name:'contactLink', redirect: '/about/contact/phone', component: AboutContact, children: [
				{path:'/about/contact/phone', name:'phoneLink', component: Phone},//三级路由
				{path:'/about/contact/person', name:'personLink', component: Person}
			]},
		]},
		{path:'*', redirect: '/'}//路由地址错误跳转到主页
	]
export { router }