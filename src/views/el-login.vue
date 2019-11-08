<template>
  <div id="el-login">
    <!--头部-->
    <el_Header>
      <div slot="elw-Left">
        <router-link to="./" class="el-icon-arrow-left"></router-link>
      </div>
      <div slot="elw-cont">
        密码登录
      </div>
    </el_Header>
    <!--输入帐号-->
    <div class="elt-user-pass">
      <div class="elt-input">
        <input type="text" placeholder="帐号" v-model="username" />
      </div>
      <div class="elt-input">
        <input
          type="password"
          placeholder="密码"
          ref="inputPass"
          v-model="password"
        />
        <div class="elt-switch">
          <el_switch @isTrue="isSwitch"></el_switch>
        </div>
      </div>
      <!--验证码-->
      <el_yan @getCode="captcha_code"></el_yan>
    </div>
    <p class="elt-loginelt-Tips">温馨提示：未注册过的账号，登录时将自动注册</p>
    <p class="elt-loginelt-Tips">注册过的用户可凭账号密码登录</p>
    <div class="elt-login" @click="btnLogin">登录</div>
    <router-link to="/forget">
      <div class="elt-to-forget">重置密码？</div>
    </router-link>
    <el_alert v-show="!showHide" @closeSure="close">
      <span slot="tipInfo">{{ tipInfo }}</span>
    </el_alert>
  </div>
</template>

<script>
import el_Header from "../components/el-header/el-header";
import el_switch from "../components/el-login/el-switch";
import el_yan from "../components/el-login/el-yanzhengma";
import el_alert from "../components/el-login/el-alert";
export default {
  components: {
    el_Header,
    el_switch,
    el_yan,
    el_alert
  },
  data() {
    return {
      showHide: true,
      tipInfo: "",
      username: "",
      password: "",
      code: ""
    };
  },
  methods: {
    // 是否显示密码
    isSwitch(a) {
      if (a) {
        this.$refs.inputPass.type = "text";
      } else {
        this.$refs.inputPass.type = "password";
      }
    },
    // 点击提交按钮
    btnLogin() {
      if (this.username == "") {
        this.showHide = false;
        this.tipInfo = "请输入手机号/邮箱/用户名";
      } else if (this.password == "") {
        this.showHide = false;
        this.tipInfo = "请输入密码";
      } else if (this.code == "") {
        this.showHide = false;
        this.tipInfo = "请输入验证码";
      } else {
        this.axios
          .post("http://elm.cangdu.org/v2/login", {
            password: this.password,
            username: this.username,
            captcha_code: this.code
          })
          .then(data => {
            console.log(data.data);
            if (!data.data.message) {
              this.showHide = false;
              this.tipInfo = "登录成功";
            } else {
              this.showHide = false;
              this.tipInfo = data.data.message;
            }
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

<style>
#el-login .el-icon-arrow-left:before {
  font-size: 60px;
  line-height: 140px;
}
#el-login {
  background-color: #f5f5f5;
  height: 100vh;
  border-top: 1px solid transparent;
  box-sizing: border-box;
}
#el-login .elt-user-pass {
  background-color: #fff;
  margin-top: 178px;
}
#el-login .elt-user-pass input {
  outline: none;
  border: none;
  padding: 0 56px;
}
#el-login .elt-input {
  height: 150px;
  line-height: 150px;
  border-bottom: 1px solid #f1f1f1;
  position: relative;
  overflow: hidden;
}
#el-login .elt-loginelt-Tips {
  font-size: 40px;
  color: red;
  padding: 32px 48px;
  line-height: 40px;
}
#el-login .elt-login {
  margin: 0 35px 76px;
  font-size: 52px;
  color: #fff;
  background-color: #4cd964;
  line-height: 140px;
  border: 1px;
  border-radius: 12px;
  text-align: center;
}
#el-login .elt-to-forget {
  float: right;
  font-size: 48px;
  color: #3b95e9;
  margin-right: 24px;
}
#el-login .elt-switch {
  position: absolute;
  right: 50px;
  top: 35%;
}
</style>
