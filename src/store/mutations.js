const setMenus = (state, data) => {
	state.Menus = data
}
const removeMenu = (state, id) => {
	state.Menus.forEach((val, index) => {
		if(val.id === id){
			state.Menus.splice(index, 1)
		}
	})
}
const pushMenu = (state, data) => {
	state.Menus.push(data)
}
const userStatus = (state, email) => {
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

export { setMenus, removeMenu, pushMenu, userStatus }