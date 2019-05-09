<template>
	<form action="">
		<h3 class="text-muted mb-5">添加Pizza</h3>
		<div class="row form-group">
			<label class="col-sm-1" for="pro">名称</label>
			<div class="col-sm-11">
				<input type="text" name="pro" id="pro" class="form-control" v-model="Pizza.name">
			</div>
		</div>
		<div class="row form-group">
			<label class="col-sm-1" for="description">描述</label>
			<div class="col-sm-11">
				<textarea class="form-control" id="description" rows="5" name="description" v-model="Pizza.description"></textarea>
			</div>
		</div>
		<p><strong>选项1</strong></p>
		<div class="row form-group">
			<label class="col-sm-1" for="size1">尺寸</label>
			<div class="col-sm-11">
				<input type="text" name="size1" id="size1" class="form-control" v-model="Pizza.size1">
			</div>
		</div>
		<div class="row form-group">
			<label class="col-sm-1" for="price1">价格</label>
			<div class="col-sm-11">
				<input type="text" name="price1" id="price1" class="form-control" v-model="Pizza.price1">
			</div>
		</div>
		<p><strong>选项2</strong></p>
		<div class="row form-group">
			<label class="col-sm-1" for="size2">尺寸</label>
			<div class="col-sm-11">
				<input type="text" name="size2" id="size2" class="form-control" v-model="Pizza.size2">
			</div>
		</div>
		<div class="row form-group">
			<label class="col-sm-1" for="price2">价格</label>
			<div class="col-sm-11">
				<input type="text" name="price2" id="price2" class="form-control" v-model="Pizza.price2">
			</div>
		</div>
		<button type="button" @click="addMenu" class="btn btn-success btn-block">添加</button>
	</form>
</template>

<script>
	//import axios from 'axios'
	export default {
		data () {
			return {
				Pizza :{
					name: '',
					size1: '',
					size2: '',
					price1: '',
					price2: '',
					description: ''
				}
			}
		},
		methods: {
			addMenu () {
				if(this.Pizza.name !== '' && this.Pizza.size1 !== '' && this.Pizza.size2 !== '' && this.Pizza.price1 !== '' && this.Pizza.price2 !== '' && this.Pizza.description !== ''){
					let data = {
						name: this.Pizza.name,
						description: this.Pizza.description,
						options: [{size: this.Pizza.size1, price: this.Pizza.price1}, {size: this.Pizza.size2, price: this.Pizza.price2}]
					}
					//axios vue-resource fetch
					this.$axios.post('/xymenu.json', data)
						.then(res => {
							this.Pizza.name = ''
							this.Pizza.size1 = ''
							this.Pizza.size2 = ''
							this.Pizza.price1 = ''
							this.Pizza.price2 = ''
							this.Pizza.description = ''
							data.id = res.data.name
							this.$store.commit('pushMenu', data)
							//console.log(res.data)
							//this.$router.push('/login')
						})
					/*fetch('https://wd1695319840sjftof.wilddogio.com/xymenu.json', {
						method: 'POST',
						headers: {
							'Content-type': 'application/json'
						},
						body: JSON.stringify(data)
					})
					.then(res => res.json())
					.then(datas => {
						//console.log(data)
						//this.$emit('pFn') //第一种，调用父组件方法，过父组件方法会发起二次请求
						this.Pizza.name = ''
						this.Pizza.size1 = ''
						this.Pizza.size2 = ''
						this.Pizza.price1 = ''
						this.Pizza.price2 = ''
						this.Pizza.description = ''
						data.id = datas.name
						this.$store.commit('pushMenu', data) // 第二种，通过vuex不会发起二请求
						//this.$router.push('/manage')
						
					})
					.catch(err => console.log(err))*/

				}else{
					alert('资料不能为空！')
				}
			}
		}
	}
</script>

<style>
	
</style>