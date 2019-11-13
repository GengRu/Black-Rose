<template>
	<div id="pingjia" @scroll="scr($event)">
		<div class="elr-pingjia-cont">
			<div class="elr-pingjia-cont-l">
				<p class="elr-pingjia-cont-l-tt1">{{(scoreArr.overall_score).toFixed(1)}}</p>
				<p>综合评价</p>
				<p class="elr-pingjia-cont-l-tt2">高于周边商家的{{(scoreArr.compare_rating*100).toFixed(1)}}%</p>
			</div>

			<div class="elr-pingjia-cont-r">
				<div class="elr-pingjia-xing-box">
					<p>服务态度</p>
					<el-rate v-model="value1" disabled show-score text-color="#ff9900" score-template="{value}" class="elr-pingjia-xing">
					</el-rate>
				</div>

				<div class="elr-pingjia-xing-box">
					<p>菜品评价</p>
					<el-rate v-model="value2" disabled show-score text-color="#ff9900" score-template="{value}" class="elr-pingjia-xing">
					</el-rate>
				</div>

				<div class="elr-pingjia-shijian">
					送达时间
					<span>{{scoreArr.deliver_time}}分钟</span>
				</div>
			</div>
		</div>

		<div class="elr-pingjia-cont2">
			<div class="elr-pingjia-conts">
				<span v-for="(i, $idx) in tagArr" :key="$idx" class="elr-pingjia-cont2-title" @click="num=$idx" :class="num==$idx?'elr-title-acitve':''"
				 :style="{backgroundColor:i.name=='不满意'?'#f5f5f5':''}">
					{{i.name}}({{i.count}})
				</span>
			</div>

			<div v-for="(i, $idx) in kehuArr" :key="$idx" class="elr-kehu">
				<div class="elr-kehu-img">
					<img :src="i.avatar==''?'//elm.cangdu.org/img/default.jpg':'https://fuss10.elemecdn.com/'+i.avatar">
				</div>

				<div class="elr-kehu-cont">
					<div class="elr-kehu-cont-title">
						{{i.username}}
						<span>{{i.rated_at}}</span>
					</div>
 
					<div class="elr-kehu-cont-xing-box">
						<el-rate v-model="i.rating_star" disabled show-score text-color="#ff9900" score-template="" class="elr-kehu-cont-xing"></el-rate>{{i.time_spent_desc}}
					</div>
														
					<div class="elr-kehu-bgc-cont">
						<div v-for="(j, $index) in i.item_ratings" :key="$index" v-show="j.image_hash != ''" class="elr-kehu-bgc">
							<img :src="'https://fuss10.elemecdn.com/'+j.image_hash">
						</div>
					</div>
					
					<div v-for="(j, $index) in i.item_ratings" :key="$index" v-show="j.food_name != ''" class="elr-kehu-bgc-title">
						{{j.food_name}}
					</div>
					
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				scoreArr: '',
				value1: '',
				value2: '',
				tagArr: '',
				num: 0,
				kehuArr: [],
			}
		},
		methods:{
			scr(ev){
				if(ev.target.scrollTop + ev.target.clientHeight >= ev.target.scrollHeight){
					this.axios.get('http://elm.cangdu.org/ugc/v2/restaurants/1/ratings?has_content=true&offset=0&limit=10&tag_name=').then(
						data => {
							data.data.forEach(item=>{
								this.kehuArr.push(item)
							})
						})
				}
			}
		},
		created() {
			this.axios.get('http://elm.cangdu.org/ugc/v2/restaurants/1/ratings/scores').then(data => {
				// console.log(data.data)
				this.scoreArr = data.data
				this.value1 = Number((data.data.service_score).toFixed(1))
				this.value2 = Number((data.data.food_score).toFixed(1))
			})

			this.axios.get('http://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags').then(data => {
				// console.log(data.data)
				this.tagArr = data.data
			})

			this.axios.get('http://elm.cangdu.org/ugc/v2/restaurants/1/ratings?has_content=true&offset=0&limit=10&tag_name=').then(
				data => {
					// console.log(data.data)
					this.kehuArr = data.data
				})
		}
	}
</script>

<style>
	#pingjia{
		height: 14.32rem;
		overflow-y: auto;
	}
	
	.elr-pingjia-cont {
		background-color: #fff;
		padding: 0.6rem 1.35rem;
		font-size: 0.42rem;
		color: #666666;
		overflow: hidden;
		margin-bottom: 0.35rem;
	}

	.elr-pingjia-cont-l {
		float: left;
		text-align: center;
		margin-right: 0.5rem;
	}

	.elr-pingjia-cont-l-tt1 {
		font-size: 0.6rem;
		color: #ff6600;
		font-weight: bold;
	}

	.elr-pingjia-cont-l-tt2 {
		font-size: 0.26rem;
		color: #999999;
	}

	.elr-pingjia-cont-r {
		float: left;
		font-size: 0.4rem;
		color: #676767;
	}

	.elr-pingjia-xing-box {
		overflow: hidden;
	}

	.elr-pingjia-xing-box p {
		float: left;
	}

	.elr-pingjia-xing {
		margin-left: 1.8rem;
	}

	.elr-pingjia-xing span i {
		margin-right: 0;
		font-size: 0.1rem;
	}

	.elr-pingjia-shijian span {
		margin-left: 0.1rem;
		font-size: 0.24rem;
		color: #a3a3a3;
	}

	.elr-pingjia-cont2 {
		background-color: #FFFFFF;
		padding: 0.22rem;
	}

	.elr-pingjia-conts {
		overflow: hidden;
		padding-bottom: 0.4rem;
		border-bottom: 1px solid #f4f4f4;
	}

	.elr-pingjia-cont2-title {
		margin: 0.07rem 0.13rem;
		font-size: 0.4rem;
		padding: 0.2rem 0.3rem;
		background-color: #ebf5ff;
		color: #6c7884;
		border-radius: 0.15rem;
		float: left;
	}

	.elr-title-acitve {
		background-color: #3191e8 !important;
		color: #FFFFFF;
	}

	.elr-kehu {
		padding: 0.3rem 0;
		border-bottom: 1px solid #f4f4f4;
		overflow: hidden;
	}

	.elr-kehu-img {
		float: left;
		width: 1.05rem;
		height: 1.05rem;
		border-radius: 50%;
		overflow: hidden;
	}

	.elr-kehu-img img {
		width: 100%;
		height: 100%;
	}

	.elr-kehu-cont {
		margin-left: 1.55rem;
		font-size: 0.28rem;
		color: #666666;
	}

	.elr-kehu-cont-title {
		overflow: hidden;
		margin-bottom: 0.2rem;
	}

	.elr-kehu-cont-title span {
		float: right;
		font-size: 0.18rem;
		color: #999999;
	}
	
	.elr-kehu-cont-xing-box{
		overflow: hidden;
	}
	
	.elr-kehu-cont-xing{
		float: left;
	}
	
	.elr-kehu-cont-xing span i {
		margin-right: 0;
		font-size: 0.1rem;
	}
	
	.elr-kehu-bgc-cont{
		overflow: hidden;
		margin-bottom: 0.3rem;
	}
	
	.elr-kehu-bgc{
		width: 2.04rem;
		height: 2.04rem;
		float: left;
		margin-right: 0.3rem;
	}
	
	.elr-kehu-bgc img{
		width: 100%;
		height: 100%;
	}
	
	.elr-kehu-bgc-title{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 1.5rem;
		padding: 0.18rem 0;
		margin-right: 0.2rem;
		display: inline-block;
		border: 0.02rem solid #ebebeb;
		text-align: center;
		font-size: 0.34rem;
		color: #9a9a9a;
		border-radius: 0.15rem;
	}
</style>
