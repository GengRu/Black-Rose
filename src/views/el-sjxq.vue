<template>
  <div id="sjxq">
    <el_Header>
      <div slot="elw-Left">
        <span @click="$router.back()" class="el-icon-arrow-left"></span>
      </div>
      <div slot="elw-cont">
        <span class="elg-title">商家详情</span>
      </div>
      <div slot="elr-right"></div>
    </el_Header>
    <div class="tit">
      <div class="tit_1">
        <span>活动与属性</span>
      </div>
      <div class="tit_2" style="overflow:hidden;">
        <div
          v-for="(i, $index) in data.supports"
          :key="$index"
          style="float:left;display:flex;align-items: center"
        >
          <div
            :style="{ background: '#' + i.icon_color }"
            style="display:inline-block;border-radius:0.05rem;padding:0.04rem;font-size:0.2rem;float:left;color:white;"
          >
            {{ i.icon_name }}
          </div>
          <span style="float:left;">{{ i.description }}</span>
        </div>
      </div>
    </div>
    <div class="tit_3">
      <div class="tit_t" style="display:flex;align-items: center">
        <span class="tit_y">视频监督安全公示</span>
        <div class="tit_i" style="margin-left:2.5rem;">
          <router-link to="/qiye" style="display:flex;align-items: center">
            <span class="tit_u">企业认证详情</span>
            <span class="iconfont" style="font-size:.8rem;">&#xe715;</span>
          </router-link>
        </div>
      </div>
      <div class="tit_f" style="padding:.2rem 0;">
        <svg
          style="width:2rem;height:2rem;float:left;color:red;"
          t="1573785037885"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="7040"
          width="200"
          height="200"
        >
          <path
            d="M972.125091 313.088a510.231273 510.231273 0 0 0-269.265455-272.011636 505.018182 505.018182 0 0 0-393.821091 0A504.901818 504.901818 0 0 0 148.247273 150.574545 512.046545 512.046545 0 0 0 0.093091 512.069818a512 512 0 0 0 308.992 470.993455 499.828364 499.828364 0 0 0 196.933818 40.122182 500.433455 500.433455 0 0 0 357.608727-149.66691c46.405818-46.545455 83.246545-101.701818 108.474182-162.39709a517.213091 517.213091 0 0 0 0.023273-398.033455z m-266.263273 2.490182c39.284364 0 71.284364 32.395636 71.284364 72.308363 0 39.726545-32 72.122182-71.284364 72.122182-39.400727 0-71.540364-32.395636-71.540363-72.122182-0.023273-39.912727 32.116364-72.308364 71.540363-72.308363z m-399.592727-1.349818c39.400727 0 71.563636 32.372364 71.563636 72.168727s-32.139636 72.215273-71.563636 72.215273a71.493818 71.493818 0 0 1-50.734546-21.317819 71.447273 71.447273 0 0 1-20.619636-51.013818c0-39.726545 31.953455-72.052364 71.354182-72.052363z m458.170182 483.886545a36.398545 36.398545 0 0 1-50.082909-7.400727c-47.918545-65.024-125.835636-103.68-208.314182-103.68s-160.418909 38.656-208.244364 103.563636a36.445091 36.445091 0 0 1-50.152727 7.540364 36.212364 36.212364 0 0 1-7.284364-50.455273 326.237091 326.237091 0 0 1 114.082909-96.721454 334.801455 334.801455 0 0 1 302.987637 0 326.865455 326.865455 0 0 1 114.292363 96.791272c11.636364 15.941818 8.401455 38.306909-7.284363 50.362182z"
            p-id="7041"
          ></path>
        </svg>
        <div class="tit_right" style="font-size:.3rem;">
          <div>
            <span>监督检查结果:</span>
            <span class="cha">差</span>
          </div>
          <div>
            <p>检查日期:</p>
          </div>
        </div>
      </div>
    </div>
    <div class="ft">
      <div class="ft_a">
        <span>商家信息</span>
      </div>
      <div class="ft_a">
        <span>{{ data.name }}</span>
      </div>
      <div class="ft_a">
        <span>{{ data.address }}</span>
      </div>
      <div class="ft_a">
        <span>时间：{{ data.opening_hours }}</span>
      </div>
      <div class="ft_a" @click="fn(1)">
        <span class="spp">营业执照</span>
      </div>
      <div class="ft_a" @click="fn(3)">
        <span>餐饮服务许可证</span>
      </div>
    </div>
    <div
      @click="fn(2)"
      style="background-color: rgba(0,0,0,.5);width:100%;height:100%;position:fixed;top:0"
      v-if="inx == 1"
    >
      <img
        :src="
          '//elm.cangdu.org/img/' + data.license.catering_service_license_image
        "
        style="position:fixed;left:25%;top:30%;"
      />
    </div>
    <div
      @click="fn(2)"
      style="background-color: rgba(0,0,0,.5);width:100%;height:100%;position:fixed;top:0"
      v-if="inx == 3"
    >
      <img
        :src="'//elm.cangdu.org/img/' + data.license.business_license_image"
        style="position:fixed;left:25%;top:30%;"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      data: null,
      inx: "",
      time: ""
    };
  },
  methods: {
    fn(i) {
      this.inx = i;
      console.log(i);
    }
  },
  created() {
    this.axios
      .get(
        "https://elm.cangdu.org/shopping/restaurant/" + this.$route.params.id
      )
      .then(data => {
        this.data = data.data;
        console.log(this.data);
      });
  }
};
</script>

<style scoped>
.ft {
  background: #fff;
  padding: 0 0.44rem;
  margin-top: 0.4rem;
}
.ft_a {
  padding: 0.5rem 0;
  border-bottom: 0.025rem solid #f1f1f1;
  display: flex;
  align-items: center;
}
.ft_a span {
  font-size: 0.47rem;
}
.tit_right {
  float: left;
  line-height: 0.77rem;
  margin-top: 0.4rem;
  margin-left: 0.4rem;
}
.cha {
  color: red;
  font-size: 0.39rem;
}
.tit_t {
  overflow: hidden;
  padding: 0.36rem 0;
  border-bottom: 1px solid #ccc;
}
.tit_y {
  float: left;
  font-size: 0.42rem;
}
.tit_u {
  color: #ccc;
  font-size: 0.42rem;
  padding-right: 0.3rem;
}
.tit_i {
  float: right;
}
.tit_3 {
  overflow: hidden;
  padding: 0 0.44rem;
  background: #fff;
  margin-top: 0.27rem;
}
#sjxq {
  background: #ebebeb;
  height: 100vh;
}
.tit {
  background: #fff;
  padding: 0 0.44rem;
  margin-top: 1.7rem;
}
.tit_1 {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 0.2rem 0;
  color: #333;
}
.tit_1 span {
  font-size: 0.44rem;
  font-weight: bold;
}
.tit_2 {
  padding: 0.49rem 0;
}
.tit_2 span {
  font-size: 0.33rem;
  margin-left: 0.24rem;
  line-height: 0.9rem;
  color: #666666;
}
</style>
