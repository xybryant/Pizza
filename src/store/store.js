import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions.js'
// import * as mutations from './mutations.js'
// import * as getters from './getters.js'
import user from './modules/user.js'
import menu from './modules/menu.js'
import status from './modules/status.js'
Vue.use(Vuex)

// ������ modules
const store = new Vuex.Store({
	modules: {
		user,
		menu,
		status
	}
})
 
// �ڶ��� ������� 
/*const store = new Vuex.Store({
	state: { // ��������
		Menus: {},
		currentUser: null,
		isLogin: false
	},
	getters: getters, // ��ȡ���Ե�״̬
		

	mutations: mutations,// �ı����Ե�״̬
		
	actions: actions,// Ӧ��mutations
		
	modules: {

	}
})*/
//��һ��
/*const store = new Vuex.Store({
	state: { // ��������
		Menus: {},
		currentUser: null,
		isLogin: false
	},
	getters: { // ��ȡ���Ե�״̬
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
	mutations: { // �ı����Ե�״̬
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
	actions: { // Ӧ��mutations
		setUser ({commit}, email){
			commit('userStatus', email)
		}
	},
	modules: {

	}
})*/
export default store