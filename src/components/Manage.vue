<template>
	<div class="row">
		<div class="col-sm-12 col-md-8">
			<pizza @pFn="getMenus"/>
		</div>
		<div class="col-sm-12 col-md-4">
			<h3 class="text-muted mb-5">Menu</h3>
			<div v-if="Menus.length > 0">
				<table class="table">
					<thead class="thead-default">
						<tr>
							<th>名称</th>
							<th>删除</th>
						</tr>
					</thead>
					<tfoot></tfoot>
					<tbody>
						<tr v-for="(item, index) in Menus" :key="item.id">
							<td v-cloak>{{ item.name }}</td>
							<td><button @click="deleteMenu(item.id)" type="button" class="btn btn-sm btn-outline-danger">&times;</button></td>
						</tr>
					</tbody>
				</table>
			</div>
			<div v-else v-cloak>{{ menuText }}</div>
			
		</div>
	</div>
</template>

<script>
	import NewPizza from './NewPizza'
	import axios from 'axios'
	export default {
		data () {
			return {
				Menus: [],
				menuText: '暂时没有任何商品菜单！'
			}
		},
		components: {
			pizza: NewPizza
		},
		created () {
			this.getMenus()
		},
		methods: {
			deleteMenu (id) {
				axios.delete('/xymenu/'+id+'/.json')
				.then(res => {
					//console.log(res)
					this.getMenus()
				})
			},
			getMenus () {
				//axios vue-resource fetch
				/*fetch('https://wd1695319840sjftof.wilddogio.com/xymenu.json')
				.then(res => {
					return res.json()
				})
				.then(data => {
					console.log(data)
				})*/
				axios.get('/xymenu.json')
				.then(res => {
					// console.log(res)
					// console.log(res.data)
					let arr = []
					for(let key in res.data){
						//console.log(res.data[key])
						res.data[key].id = key
						arr.push(res.data[key])
					}
					this.Menus = arr
					//console.log(this.Menus)
				})
			}
		}
		
		/*data () {
			return {
				name: 'kobe'
			}
		},
		beforeRouteEnter: (to, from, next) => { //组件内守卫
			// alert(this.name)//undefined 要用next回调
			// next()
			next(vm => {
				alert(vm.name)
			})
		},
		beforeRouteLeave: (to, from, next) => { //组件内守卫
			if(confirm('确定要离开吗？')){
				next()
			}else{
				next(false)
			}
		}*/
	}
</script>

<style>
	
</style>