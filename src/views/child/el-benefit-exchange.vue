<template>
  <div class="elt-changeHb">
    <el_Header>
      <div slot="elw-Left">
        <span @click="$router.back()" class="el-icon-arrow-left"></span>
      </div>
      <div slot="elw-cont">
        <span class="elg-title">兑换红包</span>
      </div>
      <div slot="elr-right"></div>
    </el_Header>
    <div class="elt-changeBox">
      <div class="elr-input">
        <el-input v-model="input" placeholder="请输入兑换码"></el-input>

        <!--验证码-->
        <el_yan @getCode="captcha_code" ref="changeYzm"></el_yan>
        <div class="elr-box">
          <el-button
            type="success"
            :disabled="!type"
            class="elr-box-btn"
            @click="btn"
            >兑换</el-button
          >
        </div>
      </div>
    </div>
    <!--弹窗-->
    <el_alert v-if="!showHide" @closeSure="close">
      <span slot="tipInfo">{{ tipInfo }}</span>
    </el_alert>
  </div>
</template>

<script>
import el_yan from "../../components/el-login/el-yanzhengma";
import el_alert from "../../components/el-login/el-alert";
export default {
  components: {
    el_yan,
    el_alert
  },
  data() {
    return {
      input: "",
      code: "",
      showHide: true
    };
  },
  computed: {
    type: function() {
      return Number(this.input) === Number(this.input);
    }
  },
  methods: {
    btn() {
      if (localStorage.loginInfo != "") {
        var id = JSON.parse(localStorage.loginInfo).user_id;
        this.axios
          .post("http://elm.cangdu.org/v1/users/" + id + "/hongbao/exchange", {
            captcha_code: this.input,
            exchange_code: this.code
          })
          .then(data => {
            // console.log(data.data);
            this.showHide = false;
            this.tipInfo = data.data.message;
            this.$refs.changeYzm.changeNum();
          });
      }
    },
    // 接收关闭弹窗
    close(a) {
      this.showHide = true;
    },
    // 接收验证码
    captcha_code(a) {
      this.code = a;
    }
  }
};
</script>

<style scoped>
.elt-changeHb {
  position: fixed;
  width: 100%;
  height: 100%;
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
  padding: 0 0.4rem;
}
.elt-changeBox {
  margin-top: 1.68rem;
}
.elt-changeBox .elr-input {
  font-size: 0;
}

.elt-changeBox .elr-input div {
  font-size: 0.44rem;
  color: #848486;
  margin-bottom: 0.2rem;
}
.elt-changeBox .elr-box {
  padding: 0.5rem;
}

.elt-changeBox .elr-box-btn {
  width: 100%;
  height: 1.2rem;
  font-size: 0.5rem;
  font-weight: bold;
}
</style>
