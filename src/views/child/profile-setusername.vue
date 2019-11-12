<template>
  <div class="elt-setname">
    <el_Header>
      <div slot="elw-Left">
        <span @click="$router.back()" class="el-icon-arrow-left"></span>
      </div>
      <div slot="elw-cont">
        <span class="elg-title">修改用户名</span>
      </div>
    </el_Header>
    <div class="elt-setBox">
      <input
        type="text"
        placeholder="输入用户名"
        v-model="value"
        @input="valLenth"
        maxlength="24"
      />
    </div>
    <p class="elt-tip" ref="tip">{{ tip }}</p>
    <div class="elt-btnSure" @click="btnSure">确认修改</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      tip: "用户名只能修改一次（5-24字符之间）",
      type: false
    };
  },
  methods: {
    valLenth() {
      if (this.value.length < 5) {
        this.$refs.tip.style.color = "red";
        this.$refs.tip.innerText = "用户名长度在5到24个字符之间";
      } else {
        this.$refs.tip.style.color = "#666";
        this.$refs.tip.innerText = "用户名只能修改一次（5-24字符之间）";
        this.type = true;
      }
    },
    btnSure() {
      if (this.type && this.value != "") {
        var a = JSON.parse(localStorage.loginInfo);
        console.log(a);
        a.username = this.value;
        console.log(a);
        // a.username = this.value;
        localStorage.loginInfo = JSON.stringify(a);
        console.log(localStorage);
        // localStorage.loginInfo.username = this.value;
        this.$router.back();
        // console.log(localStorage.loginInfo.username);
        // var a = JSON.parse(localStorage.loginInfo).username;
        // console.log(a);
      }
    }
  }
};
</script>

<style scoped>
.elt-setname {
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
.elt-setBox {
  margin-top: 1.78rem;
}
.elt-setBox input {
  background: none;
  width: 95%;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 2px;
  margin: 0.2rem 0.3rem;
  line-height: 1rem;
  font-size: 0.5rem;
  padding-left: 0.1rem;
  display: block;
}
.elt-tip {
  font-size: 0.4rem;
  color: #666;
  box-sizing: border-box;
  padding: 0rem 0.4rem 0.6rem;
}
.elt-btnSure {
  margin: 0 0.2rem;
  background: none;
  line-height: 1.4rem;
  font-size: 0.5rem;
  color: #fff;
  opacity: 0.6;
  background: #3199e8;
  text-align: center;
}
</style>
