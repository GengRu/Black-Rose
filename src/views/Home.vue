<template>
  <div id="home">
	  <el_Header>
		<div slot="elw-Left">
		  <router-link to="./"> eleme</router-link>
		</div>
		<div slot="elw-right">
		   <router-link to="./login">登陆 | 注册</router-link>
		</div>
	  </el_Header>
	  
    <div class="elj-position">
        <div class="elj-current">
          <span class="elj-l">当前定位城市:</span>
          <span class="elj-r">定位不准时，请在城市列表中选择</span>
        </div>
        <div class="elj-choose">
          <span class="el-icon-arrow-right right"></span>
        </div>
    </div>
    <!-- 热门城市 -->
    <div class="elj-host">
        <div class="elj-host-title">
          <span class="elj-host-title-m">热门城市</span>
        </div>
        <div class="elj-host-ev">
            <div class="elj-host-item" v-for="(i,$index) in host_arr" :key="$index">
                <router-link :to="{name:'city',params:{id:i.id,names:i.name}}" style="color: #3190e8;">
                  {{i.name}}
                </router-link>
            </div>
        </div>
    </div>
    <!-- 排序 -->
    <div>
       <div class="elj-sort" v-for="(i,$index) in arr_arr" :key="$index">
          <p class="elj-sort-title">{{$index}}</p>
          <div class="elj-sort-con" v-for="(i,$index) in i" :key="$index">
            <router-link :to="{name:'city',params:{id:i.id,names:i.name}}" style="color: #3190e8;">
              <span class="elj-sort-item">{{i.name}}</span>
             </router-link>
          </div>
       </div>
    </div>
  </div>
</template>

<script>
import el_Header from './../components/el-header/el-header'
export default {
  name: "home",
  components:{el_Header},
  data(){
    return{
      current_arr:'',
      host_arr:'',
      arr_arr:''
    }
  },
  created(){
    this.axios.get('/v1/cities?type=hot').then(res => {
      this.host_arr=res.data
      
    })
    this.axios.get('/v1/cities?type=group').then(res => {
      this.arr_arr=res.data
      var sorts = (obj) => {
            var news = Object.keys(this.arr_arr).sort()
            var newObj = {}
            for(let i = 0; i < news.length; i++) {
              newObj[news[i]] = obj[news[i]]
            }
              return newObj
            }
          this.arr_arr = sorts(this.arr_arr)
      // console.log(this.arr_arr)
    })
  }
};
</script>
<style scoped>
	#home{
		padding-top: 160px;
	}
	
.elj-position{
  height: 246px;
  border-bottom: 1px solid #e4e2e3;
  background: white;
  margin-bottom: 29px;
}
.elj-current{
  height:129px;
   border-bottom: 1px solid #e4e2e3;
   padding:0 28px;
   overflow: hidden;
}
.elj-l{
  line-height: 129px;
  font-size: 34px;
  color: #5b595a;
  float:left;
}
.elj-r{
  line-height: 129px;
  font-size: 33px;
  color: #9f9f9f;
  font-weight: 900;
  float:right;
  margin-right: 5px;
}
.right{
  font-size: 40px;
  line-height: 129px;
  float: right;
}
.elj-choose{
  padding: 0 28px;
}
.elj-host{
  min-height: 200px;
  border-top: 1px solid #e4e2e3;
  border-bottom: 1px solid #e4e2e3;
  background: white;
  margin-bottom: 29px;
}
.elj-host-title{
  height: 98px;
  line-height: 98px;
  padding: 0 28px;
}
.elj-host-title-m{
  font-size: 34px;
  color: #6b696a;
}
.elj-host-ev{
  overflow: hidden;
}
.elj-host-item{
  height: 117px;
  border: 1px solid #e9e7e8;
  line-height: 117px;
  width:25%;
  float: left;
  text-align: center;
  font-size: 37px;
  color: #5195bc;
  box-sizing: border-box;
}
.elj-sort{
  /* border-top: 1px solid #e4e2e3;
  border-bottom: 1px solid #e4e2e3; */
  background: white;
  margin-bottom: 29px;
   overflow: hidden;
}
.elj-sort-title{
  height: 98px;
  line-height: 98px;
  padding: 0 28px;
}
.elj-sort-title-m{
  font-size: 34px;
  color: #6b696a;
}

.elj-sort-item{
  height: 117px;
  border: 1px solid #e9e7e8;
  line-height: 117px;
  width:25%;
  float: left;
  text-align: center;
  font-size: 37px;
  color: #5195bc;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  padding: 0 50px;
}
</style>
