<template>
  <div id="el-forget">
    <!--头部-->
    <el_Header>
      <div slot="elw-Left">
        <router-link to="./" class="el-icon-arrow-left"></router-link>
      </div>
      <div slot="elw-cont">
        重置密码
      </div>
    </el_Header>

    <!--修改密码-->
    <div style="margin-top: 50px;">
      <el_input>
        <div slot="elt-input">
          <input type="text" placeholder="帐号" v-model="username" />
        </div>
      </el_input>
      <el_input>
        <div slot="elt-input">
          <input type="text" placeholder="旧密码" v-model="oldpass" />
        </div>
      </el_input>
      <el_input>
        <div slot="elt-input">
          <input type="text" placeholder="请输入新密码" v-model="newpass" />
        </div>
      </el_input>
      <el_input>
        <div slot="elt-input">
          <input type="text" placeholder="请确认密码" v-model="newpass2" />
        </div>
      </el_input>
      <div class="elt-user-pass">
        <el_yan @getCode="captcha_code"></el_yan>
      </div>
    </div>
    <div class="elt-login" @click="btnLogin">确认修改</div>
    <el_alert v-show="!showHide" @closeSure="close">
      <span slot="tipInfo">{{ tipInfo }}</span>
    </el_alert>
  </div>
</template>

<script>
import el_Header from "../components/el-header/el-header";
import el_yan from "../components/el-login/el-yanzhengma";
import el_input from "../components/el-login/el-input";
import el_alert from "../components/el-login/el-alert";
export default {
  components: {
    el_Header,
    el_yan,
    el_input,
    el_alert
  },
  data() {
    return {
      showHide: true,
      username: "",
      oldpass: "",
      newpass: "",
      newpass2: "",
      code: "",
      tipInfo: ""
    };
  },
  methods: {
    btnLogin() {
      if (this.username == "") {
        this.showHide = false;
        this.tipInfo = "请输入正确的账号";
      } else if (this.oldpass == "") {
        this.showHide = false;
        this.tipInfo = "请输入旧密码";
      } else if (this.newpass == "") {
        this.showHide = false;
        this.tipInfo = "请输入新密码";
      } else if (this.newpass2 == "") {
        this.showHide = false;
        this.tipInfo = "请确认密码";
      } else if (this.newpass2 != this.newpass) {
        this.showHide = false;
        this.tipInfo = "两次输入的密码不一样";
      } else if (this.code == "") {
        this.showHide = false;
        this.tipInfo = "请输入验证码";
      } else {
        this.axios
          .post("https://elm.cangdu.org/v2/changepassword", {
            username: this.username,
            oldpassWord: this.oldpass,
            newpassword: this.newpass,
            confirmpassword: this.newpass2,
            captcha_code: this.code
          })
          .then(data => {
            console.log(data.data);
            this.showHide = false;
            if (data.data.status == 1) {
              this.tipInfo = data.data.success;
            }
          });
      }
    },
    // 接收关闭弹窗
    close(a) {
      this.showHide = true;
    },
    captcha_code(a) {
      this.code = a;
    }
  }
};
</script>

<style>
#el-forget .el-icon-arrow-left:before {
  font-size: 60px;
  line-height: 140px;
}
#el-forget {
  background-color: #f5f5f5;
  height: 100vh;
  border-top: 1px solid transparent;
  box-sizing: border-box;
}
.elt-login {
  margin: 0 35px 76px;
  font-size: 52px;
  color: #fff;
  background-color: #4cd964;
  line-height: 140px;
  border: 1px;
  border-radius: 12px;
  text-align: center;
  margin-top: 80px;
}
</style>
