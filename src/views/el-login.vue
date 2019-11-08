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
      <el_yan></el_yan>
    </div>
    <p class="elt-loginelt-Tips">温馨提示：未注册过的账号，登录时将自动注册</p>
    <p class="elt-loginelt-Tips">注册过的用户可凭账号密码登录</p>
    <div class="elt-login" @click="btnLogin">登录</div>
    <router-link to="/forget">
      <div class="elt-to-forget">重置密码？</div>
    </router-link>
    <section class="elt-tip_text_container" v-show="!showHide">
      <div class="elt-tip_icon"><span></span> <span></span></div>
      <p class="elt-tip_text">{{ tipInfo }}</p>
      <div class="confrim" @click="btn_sure">确认</div>
    </section>
  </div>
</template>

<script>
import el_Header from "../components/el-header/el-header";
import el_switch from "../components/el-login/el-switch";
import el_yan from "../components/el-login/el-yanzhengma";
export default {
  components: {
    el_Header,
    el_switch,
    el_yan
  },
  data() {
    return {
      value: "",
      username: "",
      password: "",
      showHide: true,
      tipInfo: ""
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
            captcha_code: "1",
            password: "11",
            username: "1"
          })
          .then(data => {
            console.log(data.data);
            this.showHide = false;
            this.tipInfo = data.data.message;
          });
      }
    },
    btn_sure() {
      this.showHide = true;
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
#el-login .elt-yan-l {
  float: left;
  width: 50%;
}
#el-login .elt-yan-r {
  float: right;
  margin-right: 56px;
}
#el-login .elt-tip_text_container {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -432px;
  margin-left: -432px;
  width: 864px;
  background-color: #fff;
  padding-top: 43.2px;
  border: 0.01rem;
  border-radius: 18px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
}
.elt-tip_text_container .elt-tip_icon {
  width: 216px;
  height: 216px;
  border: 10.8px solid #f8cb86;
  border-radius: 50%;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-direction: column;
  flex-direction: column;
}
.elt-tip_text_container .elt-tip_icon span:first-of-type {
  width: 8.64px;
  height: 108px;
  background-color: #f8cb86;
}
.elt-tip_text_container .elt-tip_icon span:nth-of-type(2) {
  width: 14.4px;
  height: 14.4px;
  border: 0.01rem;
  border-radius: 50%;
  margin-top: 14.4px;
  background-color: #f8cb86;
}
.elt-tip_text_container .elt-tip_text {
  font-size: 50.4px;
  color: #333;
  line-height: 64.8px;
  text-align: center;
  margin-top: 57.6px;
  padding: 0 28.8px;
}
.elt-tip_text_container .confrim {
  font-size: 57.6px;
  color: #fff;
  font-weight: 700;
  margin-top: 57.6px;
  background-color: #4cd964;
  width: 100%;
  text-align: center;
  line-height: 129.6px;
  border: 0.01rem;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
}
</style>
