<template>
	<div class="card text-dark bg-light">
		<div class="card-header">联系我们</div>
		<div class="card-body">
			<h4 class="card-title">联系我们</h4>
			<p class="card-text">kobe bryant</p>
			<router-link :to="{name: 'phoneLink'}">电话</router-link>
			<router-link :to="{name: 'personLink'}">联系人</router-link>
			<div>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style>
	
</style>