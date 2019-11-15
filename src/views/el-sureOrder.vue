<template>
  <div class="elt-sureOrder">
    <el_Header>
      <div slot="elw-Left">
        <span @click="$router.back()" class="el-icon-arrow-left"></span>
      </div>
      <div slot="elw-cont">
        确认订单
      </div>
      <div slot="elw-right">
        <router-link to="/profile">
          <span class="el-icon-user"></span>
        </router-link>
      </div>
    </el_Header>
    <router-link to="/sureOrder/chooseAdd">
      123
    </router-link>
    <div class="elt-tookTime">
      <div class="elt-info">送达时间</div>
      <div class="elt-time">
        <div>
          <span>尽快送达 </span>
          <span> | </span>
          <span>预计 {{ nowTime }}</span>
        </div>
        <div class="elt-zhuansong">蜂鸟专送</div>
      </div>
    </div>
    <div class="elt-pay">
      <div class="elt-payType">
        <div>支付方式</div>
        <div class="elt-payOnline">
          <span @click="btn">在线支付</span>
          <span class="el-icon-arrow-right"></span>
        </div>
      </div>
      <div class="elt-hb">
        <span>红包</span>
        <span>暂时只在饿了么APP中支持</span>
      </div>
    </div>
    <div class="elt-shop" v-show="order.length">
      <div class="elt-imgBox">
        <img :src="'http://elm.cangdu.org/img/' + shop.img" alt="" />
      </div>
      <div>{{ shop.name }}</div>
    </div>
    <div>
      <div v-for="(i, $i) in order" :key="$i">
        <div class="elt-orderShop">
          <div>{{ i.name }}</div>
          <div>
            <span class="elt-count">x{{ i.__v }}</span>
            <span>￥{{ i.specfoods[0].price }}</span>
          </div>
        </div>
      </div>
      <div class="elt-orderShop">
        <div>餐盒费</div>
        <div>￥{{ num }}元</div>
      </div>
      <div class="elt-orderShop">
        <div>配送费</div>
        <div>￥{{ order.length ? 4 : 0 }}元</div>
      </div>
      <div class="elt-orderShop bt">
        <div>订单 ￥{{ totalPrice }}</div>
        <div class="elt-toPay">待支付</div>
      </div>
      <div class="elt-orderShop">
        <div></div>
        <div class="elt-toPay">￥ {{ totalPrice }}</div>
      </div>
      <div class="elt-orderShop">
        <div>订单备注</div>
        <router-link to="/sureOrder/remark">
          <div class="elt-remark">
            {{ remark }}
            <span class="el-icon-arrow-right"></span>
          </div>
        </router-link>
      </div>
      <div class="elt-orderShop elt-fz">
        <div>发票抬头</div>
        <router-link to="/sureOrder/invoice">
          <div class="elt-remark">
            {{ invoice }}
            <span class="el-icon-arrow-right"></span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="elt-payM">
      <div class="elt-topay">待支付￥{{ totalPrice }}</div>
      <div v-if="!flag" class="surepay" @click="sureMoney">
        确认下单
      </div>
      <div v-else>
        <router-link to="/confirmOrder">
          <div class="surepay">确认下单</div>
        </router-link>
      </div>
    </div>
    <!--弹出框-->
    <div class="elt-alert" @click="close($event)" v-show="type">
      <transition name="alert">
        <div class="elt-alertCont" v-show="type">
          <div class="elt-payType2">支付方式</div>
          <div>
            <li>
              <span>货到付款（商家不支持货到付款）</span>
              <span class="elt-dis"><i class="el-icon-check"></i></span>
            </li>
            <p class="p">
              <span>在线付款</span>
              <span class="elt-dis elt-dis2" @click="close2">
                <i class="el-icon-check"></i>
              </span>
            </p>
          </div>
        </div>
      </transition>
    </div>
    <el_showMove>
      <router-view slot="view" mode="out-in"></router-view>
    </el_showMove>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowTime: "",
      type: false,
      shop: "",
      order: "",
      remark: "口味，偏好等",
      invoice: "不需要开发票",
      flag: ""
    };
  },
  computed: {
    num() {
      var n = 0;
      this.order.map(item => {
        n += item.__v;
      });
      return n;
    },
    totalPrice() {
      var n = 0;
      n = this.num + (this.order.length ? 4 : 0) + this.$store.getters.addPrice;
      return n;
    }
  },
  methods: {
    btn() {
      this.type = true;
    },
    close(ev) {
      if (ev.target.className == "elt-alert") {
        this.type = false;
      }
    },
    close2() {
      this.type = false;
    },
    sureMoney() {
      if (localStorage.loginInfo == "") {
        this.$test(
          {
            text: "请登录"
          },
          function() {}
        );
      }
    }
  },
  created() {
    if (localStorage.loginInfo == "") {
      this.flag = false;
    } else {
      this.flag = true;
    }
    if (localStorage.shop) {
      this.shop = JSON.parse(localStorage.shop);
    }
    this.order = this.$store.state.add;

    var t = new Date(new Date().getTime() + 2250000);
    var h = t.getHours();
    var m = t.getMinutes();
    this.nowTime = h + ":" + m;
  }
};
</script>

<style scoped>
.elt-sureOrder {
  margin-top: 1.68rem;
  background-color: #f5f5f5;
}
.elt-tookTime {
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0.4rem;
  border-left: 0.2rem solid rgb(76, 76, 236);
  height: 2.8rem;
  box-sizing: border-box;
  margin-bottom: 0.4rem;
}
.elt-info {
  font-size: 0.5rem;
  color: #333;
  flex: 1;
}
.elt-time {
  font-size: 0.5rem;
  color: #3190e8;
}
.elt-zhuansong {
  margin-top: 0.5rem;
  background-color: #3190e8;
  color: #fff;
  font-size: 0.36rem;
  border-radius: 0.1rem;
  float: right;
  padding: 0.02rem 0.08rem;
}
.elt-pay {
  background-color: #fff;
  padding: 0.4rem;
  margin-bottom: 0.4rem;
}
.elt-payType {
  display: flex;
  justify-content: space-between;
  font-size: 0.5rem;
}
.elt-payOnline {
  font-size: 0.4rem;
  margin-bottom: 0.4rem;
}
.elt-hb {
  display: flex;
  font-size: 0.4rem;
  justify-content: space-between;
  padding-top: 0.4rem;
  border-top: 1px solid #eee;
}
.elt-alert {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0rem;
  z-index: 12;
  background-color: rgba(0, 0, 0, 0.5);
}
.elt-alertCont {
  width: 100%;
  height: 5rem;
  background-color: #fff;
  position: absolute;
  bottom: 0rem;
}
.elt-payType2 {
  text-align: center;
  font-size: 0.4rem;
  line-height: 1.2rem;
  background-color: #f1f1f1;
}
.elt-alertCont div {
  font-size: 0.4rem;
  background-color: #fff;
}
.elt-alertCont div li,
.elt-alertCont div p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.4rem;
  line-height: 1.2rem;
}
.elt-alertCont div li:nth-of-type(1) {
  color: #ccc;
}

.elt-alertCont div .elt-dis {
  background-color: #ccc;
  width: 0.6rem;
  height: 0.6rem;
  text-align: center;
  line-height: 0.6rem;
  color: #fff;
  border-radius: 50%;
}

.elt-alertCont div .elt-dis2 {
  background-color: rgb(28, 245, 28);
}
.alert-enter,
.alert-leave-to {
  transform: translateY(5rem);
}
.alert-enter-to,
.alert-leave {
  transform: translateY(0rem);
}
.alert-enter-active,
.alert-leave-active {
  transition: 0.35s;
}
.elt-shop {
  display: flex;
  align-items: center;
  font-size: 0.5rem;
  padding: 0.5rem;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  margin-bottom: 0.4rem;
}
.elt-imgBox {
  width: 1rem;
  height: 1rem;
  margin-right: 0.4rem;
}
.elt-imgBox img {
  width: 100%;
  height: 100%;
}
.elt-orderShop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.5rem;
  padding: 0.4rem;
  background-color: #fff;
}
.elt-count {
  color: #f60;
  margin-right: 1rem;
}
.elt-toPay {
  color: #f60;
  margin-right: 1.6rem;
}
.bt {
  border-top: 1px solid #dbdbdb;
  margin-bottom: 0.4rem;
}
.elt-fz {
  font-size: 0.45rem;
  border-top: 1px solid #dbdbdb;
  margin-bottom: 2rem;
}
.elt-remark {
  font-size: 0.4rem;
  color: #aaa;
}
.elt-payM {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
}
.elt-topay {
  background-color: #3c3c3c;
  flex: 1;
  padding: 0.4rem;
  color: #fff;
}
.surepay {
  background-color: #56d176;
  padding: 0.4rem;
  color: #fff;
}
</style>
