<template>
  <div id="el-forget">
    <!--头部-->
    <el_Header>
      <div slot="elw-Left">
        <router-link to="./" class="el-icon-arrow-left"></router-link>
      </div>
      <div slot="elw-cont">重置密码</div>
    </el_Header>
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
        <el_yan></el_yan>
      </div>
    </div>
    <div class="elt-login" @click="btnLogin">确认修改</div>
  </div>
</template>

<script>
import el_Header from "../components/el-header/el-header";
import el_yan from "../components/el-login/el-yanzhengma";
import el_input from "../components/el-login/el-input";
export default {
  components: {
    el_Header,
    el_yan,
    el_input
  },
  data() {
    return {
      username: "",
      oldpass: "",
      newpass: "",
      newpass2: ""
    };
  },
  methods: {
    btnLogin() {}
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
