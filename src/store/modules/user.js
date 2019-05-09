const state = {
	currentUser: null
}
const getters = {
	getCurrentUser (state) {
		return state.currentUser
	}
}
const mutations = {
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
}
const actions = {
	setUser ({commit}, email) {
		commit('userStatus', email)
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}