const setUser = ({commit}, email) => {
		commit('userStatus', email)
	}
export { setUser }
