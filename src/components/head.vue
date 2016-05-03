<template>
	<div id="head">
		<span @click="back"></span>
		<span>{{title}}</span>
		<span></span>
	</div>
</template>
<script>
	module.exports = {
		data:function(){
			return {
				title:"首页"
			}
		},
		methods:{
			back:function(){
				alert("back");
			}
		}
	}
</script>

<style>
	#head{
		height: 50px;
		width: 100%;
		background-color: #000;
		color: #fff;
	}
</style>