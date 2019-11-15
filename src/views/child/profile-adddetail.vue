<template>
  <div class="elt-adddetail">
    <el_Header>
      <div slot="elw-Left">
        <span @click="$router.back()" class="el-icon-arrow-left"></span>
      </div>
      <div slot="elw-cont">
        <span class="elg-title">搜索地址</span>
      </div>
      <div slot="elr-right"></div>
    </el_Header>
    <div class="elt-searchBox">
      <div class="elt-search">
        <input type="text" placeholder="小区/写字楼/学校等" v-model="value" />
      </div>
      <div class="elt-sure" @click="btn">确认</div>
    </div>
    <div class="elt-warnpart">
      为了满足商家的送餐要求，建议您从列表中选择地址
    </div>
    <div class="elt-point">
      <p>找不到地址？</p>
      <p>请尝试输入小区、写字楼或学校名</p>
      <p>详细地址（如门牌号）可稍后输入哦。</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    btn() {
      this.axios
        .get("http://elm.cangdu.org/v1/pois?type=nearby&keyword=" + this.value)
        .then(data => {
          // console.log(data.data);
        });
    }
  }
};
</script>

<style scoped>
.elt-adddetail {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  min-height: 5rem;
  box-sizing: border-box;
  align-items: center;
  font-size: 0.4rem;
}
.elt-searchBox {
  margin-top: 1.68rem;
  display: flex;
  background-color: #fff;
  padding: 0.3rem;
}
.elt-search {
  flex: 1;
}
.elt-searchBox input {
  background: #f2f2f2;
  width: 95%;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 2px;
  line-height: 1rem;
  font-size: 0.4rem;
  padding-left: 0.1rem;
  display: block;
}
.elt-sure {
  background: #3199e8;
  font-size: 0.5rem;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  line-height: 1rem;
  padding: 0 0.3rem;
}
.elt-warnpart {
  background: #fff6e4;
  font-size: 0.42rem;
  color: #ff883f;
  text-align: center;
  padding: 0.2rem 0;
}
.elt-point {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
.elt-point p {
  width: 100%;
  text-align: center;
  font-size: 0.5rem;
  color: #969696;
  margin-bottom: 0.3rem;
}
</style>
