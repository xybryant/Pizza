<template>
	<div class="container">
		<div class="row">
			<div class="col-4">
				<ul class="list-group text-center">
					<li class="nav-link">
						<router-link class="list-group-item list-group-item-action" :to="{name: 'historyLink'}">历史订单</router-link>
					</li>
					<li class="nav-link">
						<router-link class="list-group-item list-group-item-action" :to="{name: 'guideLink'}">点餐文档</router-link>
					</li>
					<li class="nav-link">
						<router-link class="list-group-item list-group-item-action" :to="{name: 'deliveryLink'}">快递信息</router-link>
					</li>
					<li class="nav-link">
						<router-link class="list-group-item list-group-item-action" :to="{name: 'contactLink'}">联系我们</router-link>
					</li>
					<!-- <router-link tag="li" class="nav-link" :to="{name: 'historyLink'}">
						<a class="list-group-item list-group-item-action active">历史订单</a>
					</router-link> 
					<router-link tag="li" class="nav-link" :to="{name: 'guideLink'}">
						<a class="list-group-item list-group-item-action">点餐文档</a>
					</router-link>
					<router-link tag="li" class="nav-link" :to="{name: 'deliveryLink'}">
						<a class="list-group-item list-group-item-action">快递信息</a>
					</router-link>
					<router-link tag="li" class="nav-link" :to="{name: 'contactLink'}">
						<a class="list-group-item list-group-item-action">联系我们</a>
					</router-link>-->
				</ul>
			</div>
			<div class="col-8">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style>
	
</style>