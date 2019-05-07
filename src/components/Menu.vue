<template>
	<div class="row">
		<div class="col-md-7">
			<table class="table">
				<thead class="thead-default">
					<tr>
						<th>尺寸</th>
						<th>价格</th>
						<th>加入</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<td colspan="4" class="text-center"></td>
					</tr>
				</tfoot>
				<tbody v-for="(item, key) in menuItem" :key="key">
					<tr>
						<td><strong>{{ item.name }}</strong></td>
					</tr>
					<tr v-for="option in item.options" :key="option.size">
						<td>{{ option.size }}</td>
						<td>{{ option.price }}</td>
						<td><button type="button" @click="addToBaskets(item, option)" class="btn btn-sm btn-outline-success">+</button></td>
					</tr>
				</tbody>
			</table>
			<!-- {{ baskets }} -->
		</div>
		<div class="col-md-5">
			<div v-if="baskets.length>0">
				<table class="table text-center">
					<thead class="thead-default">
						<tr>
							<th>数量</th>
							<th>名称 - 尺寸</th>
							<th>价格</th>
						</tr>
					</thead>
					<tfoot>
				
					</tfoot>
					<tbody>
						<tr v-for="(item,index) in baskets" :key="index">
							<td>
								<button @click="decrease(item, index)" type="button" class="btn btn-sm btn-light">-</button>
								<span class="mx-1"> {{ item.quantity }} </span>
								<button @click="increase(item)" type="button" class="btn btn-sm btn-light">+</button>
							</td>
							<td v-cloak>{{ item.name }} - {{ item.size }}</td>
							<td v-cloak>{{ item.price * item.quantity }}</td>
						</tr>
					</tbody>
				</table>
				<p>总价： {{ totalPrice + "RMB"}} </p>
				<button type="button" class="btn btn-success btn-block">提交</button>
			</div>
			<div v-else v-cloak>{{ basketText }}</div>
		</div>
	</div>
	
</template>

<script>
	import axios from 'axios'
	export default {
		data () {
			return {
				baskets: [],
				basketText: '购物车暂时没有任何商品！',
				/*menuItem: {
					1: {
						name: '榴莲pizza',
						description: '这是喜欢吃榴莲朋友的最佳选择',
						options: [{size: 9, price: 38}, {size: 12, price: 48}]
					},
					2: {
						name: '芝士pizza',
						description: '芝士杀手，浓浓的芝士丝，食欲瞬间爆棚',
						options: [{size: 9, price: 58}, {size: 12, price: 68}]
					},
					3: {
						name: '夏威夷pizza',
						description: '众多人的默认选择',
						options: [{size: 9, price: 36}, {size: 12, price: 46}]
					}
				},*/
				menuItem:{

				}
			}
		},
		created () {
			this.getMenuItems()
		},
		methods: {
			getMenuItems () {
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
					//console.log(res.data)
					/*let arr = []
					for(let key in res.data){
						//console.log(res.data[key])
						res.data[key].id = key
						arr.push(res.data[key])
					}*/
					this.menuItem = res.data
				})
			},
			addToBaskets (item, option) {
				const data = {
					name: item.name,
					size: option.size,
					price: option.price,
					quantity: 1
				}
				if(this.baskets.length > 0){
					let res = this.baskets.filter((val, key, arr) => {
						return val.name === data.name && val.size === data.size
					})
					// console.log(res)
					if(res.length > 0){
						res[0].quantity++
					}else{
						this.baskets.push(data)
					}
				}else{
					this.baskets.push(data)
				}
			},
			increase (item) { //商品累加
				item.quantity++
			},
			decrease (item, index) {//商品递减
				item.quantity--;
				if(item.quantity <= 0){
					this.baskets.splice(index, 1)
				}
			}
		},
		computed: {
			totalPrice () { // 计算商品总价
				let total = 0;
				this.baskets.forEach((val, key, arr) => {
					total += val.price * val.quantity
				})
				return total
			}
		}
	}
</script>

<style>
	
</style>