`<template>
  <div class="myInfo">
    <el_Header>
      <div slot="elw-Left">
        <span @click="$router.back()" class="el-icon-arrow-left"></span>
      </div>
      <div slot="elw-cont">
        <span class="elg-title">账户信息</span>
      </div>
    </el_Header>
    <div class="elt-infoBox">
      <div class="elt-imgBox">
        <div class="elt-imgBox-left">头像</div>
        <div class="elt-imgBox-right">
          <div>
            <img :src="'//elm.cangdu.org/img/' + info.avatar" alt="" />
          </div>
          <span class="el-icon-arrow-right"></span>
        </div>
      </div>
      <input type="file" class="elt-file" ref="file" @change="img" />
      <router-link to="/profile/info/setusername">
        <el_info>
          <span slot="user">用户名</span>
          <span slot="name">{{ info.username }}</span>
        </el_info>
      </router-link>
      <router-link to="/profile/info/address">
        <el_info>
          <span slot="user">收货地址</span>
        </el_info>
      </router-link>
      <div class="elt-bind">账号绑定</div>
      <div>
        <div @click="dloadApp">
          <el_info>
            <span slot="user">
              <i class="iconfont elg-iphone">&#xe608;</i>手机
            </span>
          </el_info>
        </div>
      </div>
      <div class="elt-bind">安全设置</div>
      <router-link to="/forget">
        <el_info>
          <span slot="user">登录密码</span>
          <span slot="name">修改</span>
        </el_info>
      </router-link>
    </div>
    <div class="elt-exitlogin">退出登录</div>
    <el_alert v-if="!showHide" @closeSure="close">
      <span slot="tipInfo">请在手机APP中设置</span>
    </el_alert>
    <el_showMove>
      <router-view slot="view"></router-view>
    </el_showMove>
  </div>
</template>

<script>
import el_Header from "../../components/el-header/el-header";
import el_info from "../../components/el-login/el-info";
import el_alert from "../../components/el-login/el-alert";
export default {
  components: {
    el_info,
    el_Header,
    el_alert
  },
  data() {
    return {
      info: "",
      showHide: true
    };
  },
  methods: {
    // 接收关闭弹窗
    close(a) {
      this.showHide = true;
    },
    dloadApp() {
      console.log(1);
      this.showHide = false;
    },
    img() {
      var file = this.$refs.file.files[0];
      var d = new FormData();
      d.append("file", file);
      var params = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      console.log(d);
      this.axios
        .post(
          "http://elm.cangdu.org/eus/v1/users/" + this.info.user_id + "/avatar",
          d,
          params
        )
        .then(data => {
          this.axios
            .get("http://elm.cangdu.org/v1/user", {
              params: {
                user_id: data.data.user_id
              }
            })
            .then(data => {
              // console.log(data.data);
              this.info = data.data;
            });
        });
    }
  },
  created() {
    if (localStorage.loginInfo) {
      var loginInfo = JSON.parse(localStorage.loginInfo);
      console.log(loginInfo);
    }
    this.axios
      .get("http://elm.cangdu.org/v1/user", {
        params: {
          user_id: loginInfo.user_id
        }
      })
      .then(data => {
        // console.log(data.data);
        this.info = data.data;
      });
  }
};
</script>

<style scoped>
.el-icon-arrow-right {
  font-size: 0.6rem;
}
.myInfo {
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
.elt-file {
  position: absolute;
  background-color: red;
  width: 100%;
  height: 2.2rem;
  top: 1.68rem;
  opacity: 0;
}
.elt-imgBox {
  margin-top: 1.78rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0.4rem;
  font-size: 0.4rem;
  border-bottom: 1px solid #ccc;
}
.elt-imgBox-right {
  display: flex;
  align-items: center;
}
.elt-imgBox-right div {
  width: 1.65rem;
  height: 1.65rem;
  border-radius: 50%;
  overflow: hidden;
}
.elt-imgBox-right div img {
  width: 100%;
  height: 100%;
}
.elt-bind {
  padding: 0.4rem;
}
.elt-exitlogin {
  width: 90%;
  margin: 1rem auto 0;
  line-height: 1.5rem;
  border-radius: 5px;
  text-align: center;
  background: #d8584a;
  font-size: 0.5rem;
  color: #fff;
}
</style>
