<template>
  <div id="el-forget">
    <!--头部-->
    <el_Header>
      <div slot="elw-Left">
        <span @click="$router.back()" class="el-icon-arrow-left"></span>
      </div>
      <div slot="elw-cont">重置密码</div>
    </el_Header>

    <!--修改密码-->
    <div class="elt-paddingT">
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
        <!--验证码-->
        <el_yan @getCode="captcha_code" ref="changeYzm"></el_yan>
      </div>
    </div>
    <div class="elt-login" @click="btnLogin">确认修改</div>
    <!--弹窗-->
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
          .post("http://elm.cangdu.org/v2/changepassword", {
            username: this.username,
            oldpassWord: this.oldpass,
            newpassword: this.newpass,
            confirmpassword: this.newpass2,
            captcha_code: this.code
          })
          .then(data => {
            // console.log(data.data);
            this.showHide = false;
            if (data.data.status == 1) {
              this.tipInfo = data.data.success;
            } else {
              this.showHide = false;
              this.tipInfo = data.data.message;
              this.$refs.changeYzm.changeNum();
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
.elt-paddingT {
  margin-top: 1.78rem;
}
#el-forget .el-icon-arrow-left:before {
  font-size: 0.6rem;
  line-height: 1.4rem;
}
#el-forget {
  background-color: #f5f5f5;
  height: 100vh;
  border-top: 0.01rem solid transparent;
  box-sizing: border-box;
}
.elt-login {
  margin: 0 0.35rem 0.76rem;
  font-size: 0.52rem;
  color: #fff;
  background-color: #4cd964;
  line-height: 1.4rem;
  border: 0.01rem;
  border-radius: 0.12rem;
  text-align: center;
  margin-top: 0.8rem;
}
</style>
