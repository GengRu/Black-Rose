<template>
    <div id="msite">
         <el_Header>
           <div slot="elw-Left">
         	<router-link to="/" class="el-icon-search"></router-link>
           </div>
           <div  slot="elw-cont">
			   <router-link to="/">{{$route.params.mName}}</router-link>
           </div>
           <div slot="elw-right">
         	 <router-link to="./login">登陆 | 注册</router-link>
           </div>
         </el_Header>
			 
		 <lunbo></lunbo>
    <div class="elw-sTitle">
      <div>
        <span class="el-icon-house"></span>
        <span>附近商家</span>
      </div>
    </div>
    <el_hotList v-for="(i,$index) in list_arr" :key="$index">
      <div slot="el-conImg">
        <img :src="'http://elm.cangdu.org/img/'+i.image_path" alt />
      </div>
      <div slot="el-conName">{{i.name}}</div>
      <div slot="el-stater">
        <el-rate
          v-model="i.rating"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
          disabled-void-color="#666"
        ></el-rate>
      </div>
      <div slot="el-numBer">月售106单</div>
      <div slot="el-conRots">¥20起送/{{i.piecewise_agent_fee.tips}}</div>
      <div slot="el-conWz">{{i.distance}}/</div>
      <div slot="el-conTime">{{i.order_lead_time}}</div>
    </el_hotList>
  </div>
</template>

<script>
import el_Header from "./../components/el-header/el-header";
import lunbo from './../components/el-lunbo/el-lunbotu'
import el_hotList from "./../components/el-hotList/el-hotList";
export default {
  components: { el_Header, el_hotList, lunbo},
  data() {
    return {
      value: 3.4,
      list_arr: ""
    };
  },
  created() {
    this.axios
      .get(
        "http://elm.cangdu.org/shopping/restaurants?latitude=39.0475&longitude=117.42993&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]="
      )
      .then(res => {
        this.list_arr = res.data;
        console.log(this.list_arr);
      });
    this.$emit("rating");
  }
};
</script>

<style>
#msite {
  padding-top: 130px;
}
.el-icon-arrow-left {
  font-size: 42px;
}
.elw-sTitle {
  height: 96px;
  line-height: 96px;
  margin-top: 20px;
  font-size: 44px;
  width: 100%;
  color: #999;
  background-color: #FFFFFF;
}
.elw-sTitle span {
  padding: 0 10px;
}
.elw-sTitle div {
  padding: 20px;
}
</style>