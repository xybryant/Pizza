const getMenus = (state) => {
	return state.Menus
}
const getCurrentUser = (state) => {
	return state.currentUser
}
const getIsLogin = (state) => {
	return state.isLogin
}

export { getMenus, getCurrentUser, getIsLogin }