<template>
	<div id="order">
		<el_Header>
			<div slot="elw-Left">
				<span @click="$router.back()" class="el-icon-arrow-left"></span>
			</div>
			<div slot="elw-cont">
				订单列表
			</div>
			<div slot="elw-right"></div>
		</el_Header>
		<el_Footer></el_Footer>
	</div>
</template>

<script>
	import el_Header from "./../components/el-header/el-header";
	import el_Footer from "../components/el-footer/el-footer";
	export default {
		components:{ el_Header, el_Footer},
	}
</script>

<style>
</style>
