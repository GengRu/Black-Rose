<template>
  <div id="el-city">
	<el_Header>
	  <div slot="elw-Left">
		<router-link to="/" class="el-icon-arrow-left"></router-link>
	  </div>
	  <div slot="elw-cont">
		 {{$route.params.names}}
	  </div>
	  <div slot="elw-right">
		 <router-link to="/">切换城市</router-link>
	  </div>
	</el_Header>
		
	<!-- 头部搜索 -->
    <div class="elr-search">
		<input type="text" placeholder="输入学校、商务楼、地址" class="elr-search-ipt" v-model="value">
		<div class="elr-search-btn" @click="schBtn">提交</div>
	</div>
	
	<!-- 搜索历史 -->
	<div v-show="!dataArr">
		<div class="elr-search-ls">搜索历史</div>
		<div v-for="(i,$idx) in listArr" :key='$idx' class="elr-search-jg">
			<div class="elr-search-tt">{{i.a}}</div>
			<div class="elr-search-ct">{{i.b}}</div>
		</div>
		<div class="elr-search-removeBtn" v-show="listArr.length != 0" @click="r">清空所有</div>
	</div>
	
	
	<!-- 搜索结果 -->
	<div v-for="(i,$idx) in dataArr" :key='$idx' class="elr-search-jg" @click="entBtn(i.name,i.address)">
			<div class="elr-search-tt">{{i.name}}</div>
			<div class="elr-search-ct">{{i.address}}</div>
	</div>
  </div>
</template>

<script>
	import el_Header from '../components/el-header/el-header';
	export default {
		components:{el_Header},
		data(){
			return{
				dataArr:'',
				value:'',
				listArr:[]
			}
		},
		methods:{
			// 搜索按钮
			schBtn(){
				if(this.value != ''){
					this.axios.get('http://elm.cangdu.org/v1/pois?type=search&city_id='+this.$route.params.id+'&keyword='+this.value).then(data=>{
						this.dataArr = data.data
					})
				}
			},
			// 点击进入&历史记录
			entBtn(a,b){
				var type = true
				if(this.listArr.length != 0){
					this.listArr.forEach(item=>{
						if(item.a == a){
							type = false
						}
					})
				}
				if(type == true){
					this.listArr.push({a,b})
					sessionStorage.listArr = JSON.stringify(this.listArr.sort().reverse())
				}
			},
			r(){
				this.listArr = []
				sessionStorage.listArr = ""
			}
		},
		created(){
			if(sessionStorage.listArr){
				this.listArr = JSON.parse(sessionStorage.listArr)
			}
		}
	}
</script>



<style scoped>
	#el-city{
		background-color: #f5f7f6;
		padding-top: 180px;
	}
	
	/* 搜索 */
	.elr-search{
		background-color: #fff;
		padding: 28px 55px;
		font-size: 40px;
		border-top: 7px solid #e3e3e5;
		border-bottom: 7px solid #e3e3e5;
	}
	
	/* 搜索input框 */
	.elr-search-ipt{
		width: 100%;
		height: 95px;
		line-height: 95px;
		box-sizing: border-box;
		padding-left: 20px;
		border-radius: 10px;
		margin-bottom: 25px;
	}
	
	/* 搜索按钮 */
	.elr-search-btn{
		width: 100%;
		height: 95px;
		line-height: 95px;
		background-color: #3690e8;
		color: #FFFFFF;
		text-align: center;
		border-radius: 10px;
	}
	
	/* 搜索历史 */
	.elr-search-ls{
		padding: 10px 35px;
		color: #1f1f21;
		font-size: 30px;
		border-bottom: 7px solid #e3e3e5;
	}
	
	/* 搜索结果 */
	.elr-search-jg{
		padding: 28px 56px;
		border-bottom: 7px solid #e3e3e5;
		font-size: 40px;
		color: #1a1a1a;
		background-color: #FFFFFF;
	}
	
	/* 搜索结果标题 */
	.elr-search-tt{
		padding: 28px 0;
		font-weight: bold;
	}
	
	/* 搜索结果内容 */
	.elr-search-ct{
		padding: 13px 0;
		font-size: 30px;
		color: #858585;
	}
	
	/* 搜索结果删除按钮 */
	.elr-search-removeBtn{
		text-align: center;
		padding: 40px 0;
		font-size: 46px;
		color: #6e6e6e;
		background-color: #FFFFFF;
	}
</style>
