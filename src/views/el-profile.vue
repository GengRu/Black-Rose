<template>
  <div>
    <div id="el-my">
      <el_Header>
        <div slot="elw-Left">
          <span @click="back" class="el-icon-arrow-left"></span>
        </div>
        <div slot="elw-cont">
          <span class="elg-title">我的</span>
        </div>
      </el_Header>
      <div class="elg-header" @click="goInfo">
        <div class="elg-header-img">
          <img :src="'//elm.cangdu.org/img/' + loginInfo.avatar" alt="" />
        </div>

        <div class="elg-header-font">
          <p>{{ loginInfo.username }}</p>
          <p>
            <i class="iconfont elg-iphone">&#xe608;</i>
            暂无绑定手机号
          </p>
        </div>
        <div class="elg-header-l">
          <i class="iconfont elg-more">&#xe715;</i>
        </div>
      </div>
      <div class="elg-much">
        <router-link to="/balance">
          <div class="elg-much-money">
            <p><span>0.00</span> 元</p>
            <p>我的余额</p>
          </div>
        </router-link>
        <router-link to="/benefit">
          <div class="elg-much-price">
            <p>
              <span>{{ loginInfo.gift_amount }}</span> 个
            </p>
            <p>我的优惠</p>
          </div>
        </router-link>
        <router-link to="/points">
          <div class="elg-much-grade">
            <p>
              <span>{{ loginInfo.point }}</span> 个
            </p>
            <p>我的积分</p>
          </div>
        </router-link>
      </div>
      <div class="elg-list">
        <ul style="margin-bottom:0.1rem;">
          <router-link to="/order">
            <li>
              <i class="iconfont">&#xe62c;</i>
              我的订单
              <span class="iconfont">&#xe715;</span>
            </li>
          </router-link>
          <router-link to="/integral">
            <li>
              <i class="iconfont" style="color:#dd8172;">&#xe630;</i>积分商城
              <span class="iconfont">&#xe715;</span>
            </li>
          </router-link>
          <router-link to="/vipcard">
            <li>
              <i class="iconfont" style="color:#ffc536;">&#xe600;</i
              >e饿了么会员卡
              <span class="iconfont">&#xe715;</span>
            </li>
          </router-link>
        </ul>
        <ul>
          <router-link to="/service">
            <li>
              <i class="iconfont" style="color:#3190e8;">&#xe60d;</i>服务中心
              <span class="iconfont">&#xe715;</span>
            </li>
          </router-link>
          <router-link to="/download">
            <li>
              <i class="iconfont" style="color:#3190e8;">&#xe652;</i
              >下载饿了么app
              <span class="iconfont">&#xe715;</span>
            </li>
          </router-link>
        </ul>
      </div>
      <el_Footer></el_Footer>
    </div>
    <el_showMove>
      <router-view slot="view" mode="out-in"></router-view>
    </el_showMove>
  </div>
</template>

<script>
import el_Header from "./../components/el-header/el-header";
import el_Footer from "../components/el-footer/el-footer";
import el_choose from "../components/chooseAddress/el-chooseAddress";
import Vue from "vue";
export default {
  components: {el_Header, el_Footer},
  data() {
    return {
      haveUser: false,
      imgUrl: "",
      gift_amount: 0, //优惠个数
      point: 0, //积分
      loginInfo: {
        point: 0,
        gift_amount: 0,
        username: "登陆/注册",
        avatar: ""
      },
      type: true
    };
  },
  methods: {
    back() {
      this.loginInfo.username == "登陆/注册"
        ? this.$router.go(-3)
        : this.$router.go(-2);
      // this.$router.go(-1);
    },
    goInfo() {
      if (localStorage.loginInfo != "") {
        location.href = "#/profile/info";
      } else {
        location.href = "#/login";
      }
    }
  },
  watch: {
    "$route.path"(a, b) {
      if (localStorage.loginInfo == "") {
        if (a == "/profile") {
          this.loginInfo = {
            point: 0,
            gift_amount: 0,
            username: "登陆/注册",
            avatar: ""
          };
        }
      }
    }
  },
  created() {
    // console.log(localStorage);
    if (localStorage.loginInfo == "") {
      return;
    } else {
      this.$loading(true);
      var loginInfo = JSON.parse(localStorage.loginInfo);
      this.axios
        .get("http://elm.cangdu.org/v1/user", {
          params: {
            user_id: loginInfo.user_id
          }
        })
        .then(data => {
          this.$loading(false);
          // console.log(data.data);
          this.loginInfo.avatar = data.data.avatar;
          this.loginInfo.username = data.data.username;
          this.loginInfo.point = data.data.point;
          this.loginInfo.gift_amount = data.data.gift_amount;
          this.haveUser = true;
        });
    }
  }
};
</script>

<style scoped>
.el-icon-arrow-left {
  font-size: 0.5rem;
}
.elg-iphone,
.elg-more {
  font-size: 0.4rem;
}
.elg-title {
  font-size: 0.5rem;
}
.elg-header {
  border-top: 1px solid #f5f5f5;
  margin-top: 1.32rem;
  min-height: 2.86rem;
  padding: 0.6rem 0.42rem;
  background: #3190e8;
  box-sizing: border-box;
  overflow: hidden;
}
.elg-header-img {
  width: 1.65rem;
  height: 1.65rem;
  float: left;
  border-radius: 50%;
  background: #ccc;
  overflow: hidden;
}
.elg-header-img img {
  width: 100%;
  height: 100%;
}
.elg-header-font {
  float: left;
  color: #fff;
  margin-left: 0.3rem;
  padding-top: 0.04rem;
  padding-top: 0.06rem;
}
.elg-header-font p:nth-child(1) {
  font-size: 0.58rem;
}
.elg-header-font p:nth-child(2) {
  font-size: 0.36rem;
  margin-top: 0.08rem;
}
.elg-header-l {
  float: right;
  color: #fff;
  line-height: 1.65rem;
}
.elg-much {
  display: flex;
  justify-content: space-around;
  min-height: 2.52rem;
  background: #fff;
}
.elg-much a {
  display: block;
  width: 33.3%;
}
.elg-much-money,
.elg-much-price,
.elg-much-grade {
  flex: 1;
  text-align: center;
  padding-top: 0.54rem;
  box-sizing: border-box;
  height: 100%;
}
.elg-much-money,
.elg-much-price {
  border-right: 0.01rem solid #f2f2f2;
}
.elg-much-money p:nth-child(1) span {
  color: #ec9f11;
  font-size: 0.6rem;
  font-weight: bold;
}
.elg-much-price p:nth-child(1) span {
  color: #fc5a4b;
  font-size: 0.6rem;
  font-weight: bold;
}
.elg-much-grade p:nth-child(1) span {
  color: #6cc207;
  font-size: 0.6rem;
  font-weight: bold;
}
.elg-much-money p:nth-child(1),
.elg-much-price p:nth-child(1),
.elg-much-grade p:nth-child(1) {
  color: #363638;
  font-size: 0.32rem;
  font-weight: bold;
}
.elg-much-money p:nth-child(2),
.elg-much-price p:nth-child(2),
.elg-much-grade p:nth-child(2) {
  color: #60625f;
  font-size: 0.44rem;
  font-weight: bold;
  margin-top: 0.3rem;
  font-weight: normal;
}
.elg-list {
  background: #f5f7f4;
  padding-top: 0.25rem;
}
.elg-list ul {
  overflow: hidden;
}
.elg-list ul li {
  line-height: 1.26rem;
  background: #fff;
  padding-right: 0.22rem;
  padding-left: 0.3rem;
  color: #313131;
  font-size: 0.42rem;
}
.elg-list ul li i {
  display: inline-block;
  padding-right: 0.2rem;
  /* font-size:0.4rem; */
}
.elg-list ul li span {
  float: right;
}
.elg-list ul li:nth-child(1) {
  border-bottom: 0.01rem solid #eff1ee;
}
.elg-list ul li:nth-child(2) {
  border-bottom: 0.01rem solid #eff1ee;
}
</style>
