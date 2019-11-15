<template>
	<div id="food">
		<el_Header>
			<div slot="elw-Left">
				<span class="el-icon-arrow-left" @click="$router.go(-1)"></span>
			</div>
			<div slot="elw-cont">
				{{ tName }}
			</div>
			<div slot="elr-right">
			</div>
		</el_Header>

		<div class="elr-food-nav">
			<div class="elr-food-nav-all" @click="btn($refs.t1)">{{name}}</div>
			<div class="elr-food-nav-all" @click="btn($refs.t2)">排序</div>
			<div class="elr-food-nav-all" @click="btn($refs.t3)">筛选</div>

			<div class="elr-food-nav-select" ref="t1">
				<div class="elr-food-nav-select-name">
					<div class="elr-food-nav-select-name-left" v-for="(i, $idx) in navArr" :key="$idx" :style="{backgroundColor:tName == i.name?'#fff':''}"
					 @click="qie(i.name, $idx)">
						<img :src="'https://fuss10.elemecdn.com/'+i.image_url">
						<span>{{i.name}}</span>
						<div class="elr-food-nav-select-name-left-rDiv">
							<span>{{i.count}}</span>
							<i class="el-icon-arrow-right"></i>
						</div>
					</div>
				</div>


				<div class="elr-food-nav-select-name-right">
					<div v-for="(i, $idx) in rArr" :key="$idx" @click="que(i.name,i.id)">
						{{i.name}}
					</div>
				</div>
			</div>

			<div class="elr-food-nav-select" ref="t2">
				<div class="elr-food-nav-select-pai" @click="pai(4)" :style="{color:paiNum == 4?'#3783c1':''}">智能排序</div>
				<div class="elr-food-nav-select-pai" @click="pai(5)" :style="{color:paiNum == 5?'#3783c1':''}">距离最近</div>
				<div class="elr-food-nav-select-pai" @click="pai(6)" :style="{color:paiNum == 6?'#3783c1':''}">销量最后</div>
				<div class="elr-food-nav-select-pai" @click="pai(1)" :style="{color:paiNum == 1?'#3783c1':''}">起送价最低</div>
				<div class="elr-food-nav-select-pai" @click="pai(2)" :style="{color:paiNum == 2?'#3783c1':''}">配送速度最快</div>
				<div class="elr-food-nav-select-pai" @click="pai(3)" :style="{color:paiNum == 3?'#3783c1':''}">评分最后</div>
			</div>

			<div class="elr-food-nav-select" ref="t3">
				<p class="elr-food-nav-select-title1">配送方式</p>
				<div class="elr-food-nav-select-btn"><el-checkbox v-model="checked">{{fnArr.text}}</el-checkbox></div>
				
				<p class="elr-food-nav-select-title1">商家属性（可以多选）</p>
				
				<div class="elr-food-nav-select-box">
					<el-checkbox-group v-model="checkList">
						<div v-for="(i, $idx) in shArr" :key="$idx" class="elr-food-nav-select-box-titles">
							<el-checkbox :label="i.id">{{i.name}}</el-checkbox>
						</div>
					 </el-checkbox-group>
				</div>
				
				<div class="elr-food-nav-select-btns">
					<el-button @click="clearBtn">清空</el-button>
					<el-button @click="cgBtn" type="success">确定</el-button>
				</div>
			</div>
		</div>
		
		
		<div class="elr-food-cont" v-for="(i, $idx) in dataArr" :key="$idx">
			<router-link
			  :to="{
			    name: 'shoplist',
			    params: {
			      geohash: i.latitude,
			      id: i.id,
			      name: i.name,
			      img: i.image_path
			    }
			  }"
			>
				<div class="elr-food-cont-img">
					<img :src="'http:////elm.cangdu.org/img/'+i.image_path">
				</div>

				<div class="elr-food-cont-right">
					<div class="elr-food-cont-right-title">
						<span class="elr-food-cont-right-title-login">品牌</span>
						<span class="elr-food-cont-right-title-name">{{i.name}}</span>
						<span class="elr-food-cont-right-title-right">
							<span>保</span>
							<span>准</span>
							<span>票</span>
						</span>
					</div>

					<div class="elr-food-cont-right-xing">
						<el-rate v-model="i.rating" disabled show-score text-color="#ff9900" score-template="{value}">
						</el-rate>
						月售{{i.recent_order_num}}单

						<div class="elr-food-cont-right-xing-title" v-if="i.delivery_mode">
							<span class="elr-food-cont-right-xing-title1">{{i.delivery_mode.text}}</span>
							<span class="elr-food-cont-right-xing-title2">准时达</span>
						</div>

					</div>

					<div class="elr-food-cont-right-foot">
						<div class="elr-food-cont-right-foot-left">
							￥{{i.float_minimum_order_amount}}起送 / {{i.piecewise_agent_fee.tips}}
						</div>

						<div class="elr-food-cont-right-foot-right">
							{{i.distance}} / <span>{{i.order_lead_time}}</span>
						</div>
					</div>
				</div>
			</router-link>	
		</div>

	</div>
</template>

<script>
	import el_Header from "../components/el-header/el-header";
	export default {
		components: {
			el_Header
		},
		data() {
			return {
				dataArr: null,
				type: '',
				navArr: '',
				name: '',
				tName: '',
				rArr: '',
				fnArr:'',
				shArr:'',
				checked:'',
				checkList:[],
				paiNum:''
			}
		},
		methods: {
			btn(a) {
				var arr = []
				arr.push(this.$refs.t1,this.$refs.t2,this.$refs.t3)
				
				if(this.type != a){
					if(a == this.$refs.t1){
						this.name = '分类'
					}else{
						this.name = this.tName
					}
					
					a.style.display = 'block'
					setTimeout(()=>{
						a.style.transform = `translateY(${a.offsetHeight}px)`
					},0)
					this.type = a
					arr.forEach(item=>{
						if(item != a){
							item.style.transform = `translateY(-${item.offsetHeight}px)`
							setTimeout(()=>{
								item.style.display = 'none'
							}, 300);
						}
					})
				}else{
					a.style.transform = `translateY(-${a.offsetHeight}px)`
					setTimeout(()=>{
						a.style.display = 'none'
					}, 300);
					this.type = ''
					this.name = this.tName
				}
			},
			qie(a, b) {
				this.tName = a
				this.rArr = this.navArr[b].sub_categories
			},
			que(a, b) {
				this.name = a
				this.tName = a
				this.type = ''
				this.$refs.t1.style.transform = `translateY(-${this.$refs.t1.offsetHeight}px)`
				setTimeout(() => {
					this.$refs.t1.style.display = 'none'
				}, 300);

				this.axios.get(
					'http://elm.cangdu.org/shopping/restaurants?latitude=39.78382&longitude=116.29738&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=' +
					b + '&order_by=null&delivery_mode[]=null').then(data => {
					// console.log(data.data)
					this.dataArr = data.data
				})
			},
			clearBtn(){
				this.checkList = []
				this.checked = ''
			},
			cgBtn(){
				if(this.checked != ''){
					if (this.checkList.length == 0) {
						this.axios.get('http://elm.cangdu.org/shopping/restaurants?latitude=39.78382&longitude=116.29738&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=null&delivery_mode[]=1').then(data=>{
							// console.log(data.data)
							this.dataArr = data.data
							this.type = ''
							this.$refs.t3.style.transform = `translateY(-${this.$refs.t3.offsetHeight}px)`
							setTimeout(() => {
								this.$refs.t3.style.display = 'none'
							}, 300);
						})
					} else{
						// console.log(2)
						var str2 = ''
						for(var j=0; j<this.checkList.length; j++){
							str2 += '&support_ids[]='+this.checkList[j]
						}
						// console.log(str)
						this.axios.get('http://elm.cangdu.org/shopping/restaurants?latitude=39.78382&longitude=116.29738&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=null&delivery_mode[]=null='+str2).then(data=>{
							// console.log(data.data)
							this.dataArr = data.data
							this.type = ''
							this.$refs.t3.style.transform = `translateY(-${this.$refs.t3.offsetHeight}px)`
							setTimeout(() => {
								this.$refs.t3.style.display = 'none'
							}, 300);
						})
					}
				}else{
					if(this.checkList.length != 0){
						var str = ''
						for(var i=0; i<this.checkList.length; i++){
							str += '&support_ids[]='+this.checkList[i]
						}
						// console.log(str)
						this.axios.get('http://elm.cangdu.org/shopping/restaurants?latitude=39.78382&longitude=116.29738&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=null&delivery_mode[]=null='+str).then(data=>{
							// console.log(data.data)
							this.dataArr = data.data
							this.type = ''
							this.$refs.t3.style.transform = `translateY(-${this.$refs.t3.offsetHeight}px)`
							setTimeout(() => {
								this.$refs.t3.style.display = 'none'
							}, 300);
						})
					}
				}
			},
			pai(a){
				this.axios.get('http://elm.cangdu.org/shopping/restaurants?latitude=39.78382&longitude=116.29738&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by='+a+'&delivery_mode[]=null').then(data=>{
					// console.log(data.data)
					this.paiNum = a
					this.dataArr = data.data
					this.type = ''
					this.$refs.t2.style.transform = `translateY(-${this.$refs.t2.offsetHeight}px)`
					setTimeout(() => {
						this.$refs.t2.style.display = 'none'
					}, 300);
				})
			}
		},
		created() {
			this.axios.get(
				'http://elm.cangdu.org/shopping/restaurants?latitude=32.054366&longitude=118.79427&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=220&restaurant_category_ids[]=&order_by=&delivery_mode[]='
			).then(data => {
				// console.log(data.data)
				this.dataArr = data.data
			})

			this.axios.get('http://elm.cangdu.org/shopping/v2/restaurant/category?latitude=39.78382&longitude=116.29738').then(
				data => {
					// console.log(data.data)
					this.navArr = data.data
					data.data.forEach((item, index) => {
						if (item.name == this.$route.params.elrtitle) {
							this.rArr = this.navArr[index].sub_categories
						}
					})
				})

			this.name = this.$route.params.elrtitle
			this.tName = this.$route.params.elrtitle
			
			this.axios.get('http://elm.cangdu.org/shopping/v1/restaurants/delivery_modes?latitude=39.78382&longitude=116.29738&kw=').then(data=>{
				// console.log(data.data[0])
				this.fnArr = data.data[0]
			})
			
			this.axios.get('http://elm.cangdu.org/shopping/v1/restaurants/activity_attributes?latitude=39.78382&longitude=116.29738&kw=').then(data=>{
				// console.log(data.data)
				this.shArr = data.data
			})
		}
	}
</script>

<style>
	#food {
		padding-top: 2.48rem;
	}

	.elr-food-nav {
		position: fixed;
		top: 1.35rem;
		left: 0;
		width: 100%;
		height: 1.08rem;
		display: flex;
		text-align: center;
		z-index: 4;
		border-bottom: 0.01rem solid #f1f1f1;
	}

	.elr-food-nav-all {
		flex: 1;
		font-size: 0.36rem;
		z-index: 10;
		line-height: 1.08rem;
		background-color: #fff;
	}

	.elr-food-nav-select {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		transition: all .3s;
		display: none;
		background-color: #fff;
		z-index: 1;
		overflow: hidden;
	}

	.elr-food-nav-select-name {
		width: 50%;
		text-align: left;
		float: left;
		background-color: #f1f1f1;
	}

	.elr-food-nav-select-name-left {
		font-size: 0.3rem;
		padding: 0.39rem 0.34rem;
		box-sizing: border-box;
	}

	.elr-food-nav-select-name-left img {
		width: 0.53rem;
		height: 0.45rem;
		margin-right: 0.28rem;
	}

	.elr-food-nav-select-name-left-rDiv {
		float: right;
	}

	.elr-food-nav-select-name-left-rDiv span {
		color: #FFFFFF;
		padding: 0.01rem 0.15rem;
		background-color: #cccccc;
		border-radius: 0.3rem;
	}

	.elr-food-nav-select-name-right {
		font-size: 0.35rem;
		margin-left: 50%;
		max-height: 11rem;
		overflow-y: auto;
	}

	.elr-food-nav-select-name-right div {
		padding: 0.37rem 0;
		border-bottom: 0.04rem solid #e4e4e4;
		box-sizing: border-box;
	}

	.elr-food-cont {
		padding: 0.47rem 0.27rem;
		background-color: #fff;
		margin-bottom: 0.05rem;
		overflow: hidden;
	}

	.elr-food-cont-img {
		width: 1.83rem;
		height: 1.83rem;
		float: left;
	}

	.elr-food-cont-img img {
		width: 100%;
		height: 100%;
	}

	.elr-food-cont-right {
		margin-left: 2.2rem;
	}

	.elr-food-cont-right-title {
		font-size: 0.48rem;
		font-weight: bold;
		color: #333333;
		overflow: hidden;
	}

	.elr-food-cont-right-title-login {
		float: left;
		font-size: 0.34rem;
		padding: 0 0.1rem;
		background-color: #ffd930;
		border-radius: 0.1rem;
		margin-top: 0.1rem;
	}

	.elr-food-cont-right-title-name {
		float: left;
		margin-left: 0.14rem;
	}

	.elr-food-cont-right-title-right {
		float: right;
		margin-top: 0.1rem;
		color: #999999;
	}

	.elr-food-cont-right-title-right span {
		padding: 0.04rem;
		border: 0.02rem solid #f1f1f1;
		margin: 0 0.02rem;
		font-size: 0.1rem;
	}

	.elr-food-cont-right-xing {
		overflow: hidden;
		padding: 0.15rem 0;
		font-size: 0.22rem;
	}

	.elr-food-cont-right-xing div {
		height: auto;
		float: left;
		font-size: 0.22rem;
	}

	.elr-food-cont-right-xing div span {
		font-size: 0.36rem;
	}

	.elr-food-cont-right-xing div span i {
		font-size: 0.38rem;
		margin-right: 0;
	}

	.elr-food-cont-right-xing .elr-food-cont-right-xing-title {
		float: right;
	}

	.elr-food-cont-right-xing-title1 {
		background-color: #3191e8;
		color: #FFFFFF;
		padding: 0 0.1rem;
		border-radius: 0.1rem;
		margin-right: 0.05rem;
	}

	.elr-food-cont-right-xing-title2 {
		color: #3191e8;
		padding: 0 0.1rem;
		border-radius: 0.1rem;
		border: 0.02rem solid #3191e8;
	}

	.elr-food-cont-right-foot {
		overflow: hidden;
		font-size: 0.3rem;
		color: #666666;
	}

	.elr-food-cont-right-foot-left {
		float: left;
	}

	.elr-food-cont-right-foot-right {
		float: right;
		font-size: 0.26rem;
		color: #999999;
	}

	.elr-food-cont-right-foot-right span {
		color: #318fe7;
	}
	
	.elr-food-nav-select-title1{
		font-size: 0.24rem;
		text-align: left;
		padding: 0.22rem 0.3rem;
	}
	
	.elr-food-nav-select-btn{
		font-size: 0.24rem;
		margin: 0.22rem 0.3rem;
		padding: 0.25rem 0;
		width: 3rem;
		border: 1px solid #ccc;
		border-radius: 0.15rem;
	}
	
	.elr-food-nav-select-box{
		overflow: hidden;
		padding: 0.22rem 0.3rem;
	}
	
	.elr-food-nav-select-box-titles{
		float: left;
		font-size: 0.24rem;
		width: 3rem;
		padding: 0.25rem 0;
		border: 1px solid #ccc;
		border-radius: 0.15rem;
		margin-right: 0.22rem;
		margin-bottom: 0.22rem;
	}
	
	.elr-food-nav-select-btns{
		padding: 0.15rem;
		background-color: #F0F0F0;
		display: flex;
	}
	
	.elr-food-nav-select-btns button {
		flex: 1;
		font-size: 0.48rem;
		padding: 0.3rem 0;
	}
	
	.elr-food-nav-select-pai{
		padding: 0.6rem 0.15rem;
		margin-left: 1rem;
		font-size: 0.35rem;
		border-bottom: 0.04rem solid #e8eae9;
		text-align: left;
	}
</style>
