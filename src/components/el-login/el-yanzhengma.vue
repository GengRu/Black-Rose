<template>
  <div class="elt-input">
    <div id="yanzheng">
      <div class="elt-yan-l">
        <input type="text" placeholder="验证码" maxlength="4" v-model="code" />
      </div>
      <div class="elt-yan-r"></div>
      <div class="elt-value">
        <img :src="imgurl" alt="" />
      </div>
      <div @click="changeNum" class="elt-changeyan">
        <div>看不清</div>
        <div>换一张</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgurl: "",
      code: ""
    };
  },
  methods: {
    changeNum() {
      this.axios.post("http://elm.cangdu.org/v1/captchas").then(data => {
        this.imgurl = data.data.code;
      });
    }
  },
  created() {
    this.changeNum();
  }
};
</script>

<style>
#yanzheng {
  display: flex;
}

.elt-yan-l {
  float: left;
  width: 50%;
}
.elt-yan-r {
  float: right;
  margin-right: 56px;
}
.elt-changeyan {
  overflow: hidden;
}
.elt-value {
  float: left;
  padding-top: 20px;
}
.elt-changeyan {
  float: left;
  line-height: 70px;
  font-size: 40px;
  margin-left: 50px;
}
</style>
