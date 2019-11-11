<template>
	<div id="vipDescription">
		<el_Header>
			<div slot="elw-Left">
				<router-link to="./" class="el-icon-arrow-left"></router-link>
			</div>
			<div slot="elw-cont">
				我的优惠
			</div>
			<div slot="elw-right">
				<router-link to="./login"></router-link>
			</div>
		</el_Header>

		<div class="elr-cont">尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。</div>
		
		<div class="elr-title">Q1: 特权介绍</div>
		<div class="elr-conts">身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</div>
		<div class="elr-conts">减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</div>
		<div class="elr-conts">更多特权，敬请期待！</div>
		
		
		<div class="elr-title">Q2: 资费介绍</div>
		<div class="elr-conts">饿了么会员卡：20元</div>
		
		
		<div class="elr-title">Q3: 使用说明</div>
		<div class="elr-conts">当用户满足以下任一条件，会员服务自动失效：</div>
		<div class="elr-conts2">
			<div>自绑定之日起超过31天；</div>
			<div>在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</div>
		</div>
		
		
		<div class="elr-title">Q4: 购卡说明</div>
		<div class="elr-conts">在线购买：饿了么App>我的>饿了么会员卡</div>
		
		
		<div class="elr-title">Q5: 温馨提示</div>
		<div class="elr-conts">用户在当前会员服务失效前，无法购买新卡。</div>
		<div class="elr-conts">请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</div>
	</div>
</template>

<script>
	import el_Header from "../el-header/el-header";
	export default {
		name: 'vipDescription',
		components: {
			el_Header
		},
	}
</script>

<style>
	#vipDescription {
		background-color: #ffffff;
		padding-top: 1.35rem;
		position: absolute;
		top: 0;
		left: 20%;
		z-index: 10;
		width: 100%;
		opacity: 0;
		transition: all .6s;
	}
	
	.elr-cont{
		padding: 0.5rem 1.5rem 0;
		font-size: 0.40rem;
		color: #323232;
	}
	
	#vipDescription .elr-title{
		font-size: 0.46rem;
		padding: 0.5rem 0.5rem 0;
		font-weight: bold;
	}
	
	.elr-conts{
		font-size: 0.38rem;
		color: #666666;
		padding: 0  0.5rem;
		line-height: 0.6rem;
	}
	
	.elr-conts2{
		padding-left: 1.5rem;
		padding-top: 0.3rem;
		padding-bottom: 0.3rem;
		padding-right: 0.5rem;
		font-size: 0.38rem;
		color: #666666;
	}
</style>
