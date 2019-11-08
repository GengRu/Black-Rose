<template>
	<div id="lunbo">
		<mt-swipe :auto="0" class="elr-lunbo-boxs">
			<mt-swipe-item>
				<div v-for="(i,$idx) in dataArr.slice(0,8)" :key="$idx" class="elr-lunbo-box">
					<div class="elr-lunbo-box-img"><img :src="url+i.image_url"></div>
					<div class="elr-lunbo-box-tt">{{i.title}}</div>
				</div>
			</mt-swipe-item>

			<mt-swipe-item>
				<div v-for="(i,$idx) in dataArr.slice(8)" :key="$idx" class="elr-lunbo-box">
					<div class="elr-lunbo-box-img"><img :src="url+i.image_url"></div>
					<div class="elr-lunbo-box-tt">{{i.title}}</div>
				</div>
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				index: '',
				dataArr: '',
				url: 'https://fuss10.elemecdn.com'
			}
		},
		created() {
			this.axios.get('http://elm.cangdu.org/v2/index_entry?geohash=32.054366,118.79427&group_type=1&flags[]=F').then(data => {
				console.log(data.data)
				this.dataArr = data.data
			})
		}
	}
</script>

<style>
	#lunbo {
		width: 100%;
		height: 580px;
		background-color: #FFFFFF;
		padding-top: 40p0;
	}

	.elr-lunbo-box {
		width: 25%;
		float: left;
		text-align: center;
	}

	.elr-lunbo-box-img {
		width: 50%;
		height: auto;
		margin: 0 auto;
	}

	.elr-lunbo-box-img img {
		width: 100%;
		height: 100%;
	}
	
	.elr-lunbo-box-tt{
		padding: 50px 0;
	}
	
	#lunbo .mint-swipe-indicators{
		bottom: 60px;
	}
	
	#lunbo .mint-swipe-indicator{
		width: 20px;
		height: 20px;
		opacity: 1;
		background: #cacaca;
		margin: 0 10px;
	}
	
	#lunbo .mint-swipe-indicator.is-active{
		background: #1565e2;
	}
</style>
