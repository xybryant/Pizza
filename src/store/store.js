import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions.js'
// import * as mutations from './mutations.js'
// import * as getters from './getters.js'
import user from './modules/user.js'
import menu from './modules/menu.js'
import status from './modules/status.js'
Vue.use(Vuex)

// 第三种 modules
const store = new Vuex.Store({
	modules: {
		user,
		menu,
		status
	}
})
 
// 第二种 抽离代码 
/*const store = new Vuex.Store({
	state: { // 设置属性
		Menus: {},
		currentUser: null,
		isLogin: false
	},
	getters: getters, // 获取属性的状态
		

	mutations: mutations,// 改变属性的状态
		
	actions: actions,// 应用mutations
		
	modules: {

	}
})*/
//第一种
/*const store = new Vuex.Store({
	state: { // 设置属性
		Menus: {},
		currentUser: null,
		isLogin: false
	},
	getters: { // 获取属性的状态
		getMenus (state){
			return state.Menus
		},
		getCurrentUser (state){
			return state.currentUser
		},
		getIsLogin (state){
			return state.isLogin
		}
	},
	mutations: { // 改变属性的状态
		setMenus (state, data) {
			state.Menus = data
		},
		removeMenu (state, id) {
			state.Menus.forEach((val, index) => {
				if(val.id === id){
					state.Menus.splice(index, 1)
				}
			})
		},
		pushMenu (state, data) {
			state.Menus.push(data)
		},
		userStatus (state, email) {
			if(email){
				state.currentUser = email
				//state.isLogin = !state.isLogin
				state.isLogin = true
			}else{
				state.currentUser = null
				//state.isLogin = !state.isLogin
				state.isLogin = false
			}
			
		}
	},
	actions: { // 应用mutations
		setUser ({commit}, email){
			commit('userStatus', email)
		}
	},
	modules: {

	}
})*/
export default store