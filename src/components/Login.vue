<template>
	<div class="row mt-3">
		<div class="col-sm-12">
			<div class="card">
				<div class="card-body">
					<img src="../assets/images/icon.png" alt="" class="d-block mx-auto">
					<form action="" @submit.prevent="onSubmit">
						<div class="form-group">
							<label for="email">邮箱</label>
							<input type="email" v-model="email" name="email" id="email" class="form-control" autocomplete="off">
						</div>
						<div class="form-group">
							<label for="password">密码</label>
							<input type="password" v-model="password" name="password" id="password" class="form-control">
						</div>
						<!-- <div class="form-group">
							<label for="confirm">确认密码</label>
							<input type="password" v-model="password" name="confirm" id="confirm" class="form-control">
						</div> -->
						<button type="submit" class="btn btn-success btn-block">登录</button>
					</form>
				</div>
			</div>
		</div>
	</div>
	<!-- http://api.douban.com/v2/movie/in_theaters -->
</template>

<script>
	//import axios from 'axios'
	//import jsonp from 'jsonp'
	export default {
		data () {
			return {
				email: '',
				password: ''
			}
		},
		created () {
			//跨域请求
			/*jsonp('http://api.douban.com/v2/movie/in_theaters', null, (err, data) => {
			  if (err) {
			    console.error(err.message);
			  } else {
			    console.log(data);
			  }
			})*/
		},
		methods: {
			onSubmit () {
				this.$axios.get('/xyusers.json')
				.then(res => {
					//console.log(res.data)
					let users = []
					for(let key in res.data){
						users.push(res.data[key])
					}
					//console.log(users)
					const user = users.filter((item, index, arr) => {
						return item.email === this.email && this.password === item.password
					})
					//console.log(user)
					if(this.email !== '' && this.password !== '' && user.length>0){
					//if(user!=null && user.length > 0){
						this.$store.dispatch('setUser', user[0].email)
						this.$router.push('/')
					}else{
						alert('账号或密码错误！')
					}
				})
			}
		},
		beforeRouteEnter: (to, from, next) => { // 组件守卫
			//this.$store.dispatch('setUser', null) //this不是vue要用next
			next(vm => { // vm参数就是vue对象
				vm.$store.dispatch('setUser', null)
			})
		}
	}
</script>

<style>
	
</style>