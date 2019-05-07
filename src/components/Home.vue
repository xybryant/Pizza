<template>
	<div class="row"><!-- 组件模板只允许一个要标签 -->
		<div id="homebg" class="col-sm-12 text-center">
			<div class="bg">
				<h1>欢迎大家品尝Pizza</h1>
				<h2>你喜欢的 - 这里都有</h2>
				<button @click="goback" class="btn btn-success">Go Back !</button>
			</div>
		</div>
		<div class="roll col-sm-12">
			
		</div>
	</div>
	
</template>

<script>
	export default {
		methods: {
			goback(){
				this.$router.go(-1)// 跳转到上一次页面
				// this.$router.replace('/register')// 跳转到指定页面
				// this.$router.replace({name: 'registerLink'})
				// this.$router.push('/register')// 同上，可以配置更多参数
				// this.$router.push({name: 'registerLink'})
			}
		}
	}
</script>

<style>
	#homebg {
		height: 85vh;
		padding: 10%;
		background:url('../assets/images/pizza.jpg');
	}
	h1,h2 {
		margin: 6%;
	}
	.bg {
		background-color: #eee;
		opacity: 0.8;
		max-width: 70vw;
		margin: 0 auto;
		padding: 20px 0;
	}
	.roll {
		height: 666px;
	}
</style>