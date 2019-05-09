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
						<div class="form-group">
							<label for="confirm">确认密码</label>
							<input type="password" v-model="confirm" name="confirm" id="confirm" class="form-control">
						</div>
						<button type="submit" class="btn btn-success btn-block">注册</button>
					</form>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	//import axios from 'axios'
	export default {
		data () {
			return {
				email: '',
				password: '',
				confirm: ''
			}
		},
		methods: {
			onSubmit () {
				if(this.confirm === this.password){
					const formData = {
						email: this.email,
						password: this.password,
						confirm: this.confirm
					}
					this.$axios.post('/xyusers.json', formData)
						.then(res => {
							//console.log(res)
							this.$router.push('/login')
						})
				}else{
					alert('两次输入的密码不一致！')
				}
			}
		}
	}
</script>

<style>
	
</style>