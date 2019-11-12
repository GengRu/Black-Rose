<template>
  <div id="msite">
    <el_Header>
      <div slot="elw-Left">
        <router-link to="/" class="el-icon-search"></router-link>
      </div>
      <div slot="elw-cont">
        <router-link to="/">{{ $route.params.mName }}</router-link>
      </div>
      <div slot="elw-right">
        <router-link to="/login">登陆 | 注册</router-link>
      </div>
    </el_Header>
    <el_Footer></el_Footer>

    <lunbo></lunbo>
    <div class="elw-sTitle">
      <div>
        <span class="el-icon-house"></span>
        <span>附近商家</span>
      </div>
    </div>
    <div v-for="(i, $index) in list_arr" :key="$index">
    <router-link :to="{name:'shoplist',params:{geohash:i.latitude,id:i.id}}">
      <el_hotList>
      <div slot="el-conImg">
        <img :src="'http://elm.cangdu.org/img/' + i.image_path" alt />
      </div>
      <div slot="el-conName">{{ i.name }}</div>
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
      <div slot="el-conRots">¥20起送/{{ i.piecewise_agent_fee.tips }}</div>
      <div slot="el-conWz">{{ i.distance }}/</div>
      <div slot="el-conTime">{{ i.order_lead_time }}</div>
    </el_hotList>
    </router-link>
    </div>
  </div>
</template>

<script>
import el_Header from "./../components/el-header/el-header";
import lunbo from "./../components/el-lunbo/el-lunbotu";
import el_hotList from "./../components/el-hotList/el-hotList";
import el_Footer from "../components/el-footer/el-footer";
export default {
  components: { el_Header, el_hotList, el_Footer, lunbo },
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
        // console.log(this.list_arr);
      });
    this.$emit("rating");
  }
};
</script>

<style>
#msite {
  padding: 1.3rem 0;
}
.el-icon-arrow-left {
  font-size: 0.42rem;
}
.elw-sTitle {
  height: 0.96rem;
  line-height: 0.96rem;
  margin-top: 0.2rem;
  font-size: 0.44rem;
  width: 100%;
  color: #999;
  background-color: #ffffff;
}
.elw-sTitle span {
  padding: 0 0.1rem;
}
.elw-sTitle div {
  padding: 0.2rem;
}

.el-icon-star-on {
  font-size: 0.4rem;
  margin-right: 0;
}
.el-rate__text {
  font-size: 0.36rem;
  margin-left: 0.2rem;
  vertical-align: top;
}
</style>
