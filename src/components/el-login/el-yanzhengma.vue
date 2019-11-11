<template>
  <div class="elt-input">
    <div id="yanzheng">
      <div class="elt-yan-l">
        <input type="text" placeholder="验证码" maxlength="4" v-model="code" />
      </div>
      <div class="elt-yan-r">
        <div class="elt-value">
          <img :src="imgurl" alt="" />
        </div>
        <div @click="changeNum" class="elt-changeyan">
          <div>看不清</div>
          <div>换一张</div>
        </div>
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
  watch: {
    code(a) {
      if (a) {
        // 抛出验证码
        this.$emit("getCode", this.code);
      }
    }
  },
  methods: {
    changeNum() {
      // 获取验证码
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
  justify-content: space-between;
}

.elt-yan-l {
  float: left;
  width: 50%;
}
.elt-changeyan {
  overflow: hidden;
}
.elt-value {
  float: left;
  padding-top: 0.2rem;
  width: 2.6rem;
}
.elt-value img {
  width: 100%;
}
.elt-changeyan {
  float: right;
  line-height: 0.7rem;
  font-size: 0.4rem;
  margin: 0 0.5rem;
}
</style>
