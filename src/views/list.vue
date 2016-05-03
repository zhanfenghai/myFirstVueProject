<template>
	<head-con></head-con>
	<div class="red">{{message}}</div>
</template>
<script>
	module.exports = {
		name:'list',
		data:function(){
			return {
				message:"hello"
			}
		},
		components:{
			headCon:require("../components/head.vue")
		}
	}
</script>

<style>
	.red{
		color: red;
	}
</style>