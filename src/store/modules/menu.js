const state = {
	Menus: {}
}
const getters = {
	getMenus (state) {
		return state.Menus
	}
}
const mutations = {
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
	}
}
const actions = {
	
}

export default {
	state,
	getters,
	mutations,
	actions
}