<template>
  <div id="vipcard">
    <el_Header>
      <div slot="elw-Left">
        <router-link to="/profile" class="el-icon-arrow-left"></router-link>
      </div>
      <div slot="elw-cont">
        会员中心
      </div>
      <div slot="elw-right">
        <router-link to="./login"></router-link>
      </div>
    </el_Header>

    <div class="elr-title">
      为账户<span>{{ name }}</span
      >购买会员
    </div>

    <div class="elr-conts">
      <div class="elr-conts-title">
        <div class="elr-conts-title-l">会员特权</div>
        <router-link class="elr-conts-title-r" to="/vipcard/vipDescription"
          >会员说明 <span class="el-icon-arrow-right"></span
        ></router-link>
      </div>
      <div v-for="(i, $idx) in arr" :key="$idx" class="elr-conts-cont">
        <div class="elr-conts-cont-img"><img :src="i" /></div>
        <div class="elr-conts-cont-r">
          <div class="elr-conts-cont-r-tt1">减免配送费</div>
          <div>每月减免30单，每日可减免3单，每单最高减4元</div>
          <div>蜂鸟专送专享</div>
        </div>
      </div>
    </div>

    <div class="elr-conts">
      <div class="elr-conts-title">
        <div class="elr-conts-title-l">开通会员</div>
      </div>
      <div class="elr-conts-title">
        <div class="elr-conts-title-l">
          1个月<span class="elr-color"> ¥20</span>
        </div>
        <router-link to="/confirmOrder" class="elr-conts-title-r-btn"
          >购买</router-link
        >
      </div>
    </div>

    <div class="elr-conts">
      <div class="elr-conts-title">
        <div class="elr-conts-title-l">兑换会员</div>
        <router-link class="elr-conts-title-r" to="/vipcard/useCart"
          >使用卡号卡密 <span class="el-icon-arrow-right"></span
        ></router-link>
      </div>
    </div>

    <div class="elr-conts">
      <div class="elr-conts-title">
        <div class="elr-conts-title-l">购买记录</div>
        <router-link class="elr-conts-title-r" to="/vipcard/invoiceRecord"
          >开发票 <span class="el-icon-arrow-right"></span
        ></router-link>
      </div>
    </div>

    <router-view v-h></router-view>
  </div>
</template>

<script>
import el_Header from "../components/el-header/el-header";
export default {
  name: "vipcard",
  components: {
    el_Header
  },
  data() {
    return {
      arr: [
        "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABQCAMAAACTf/MwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACHUExURUxpcVGm/1Kn/1Kn/1Gm/1Gm/6f//1Gm/1ao/1Wq/1Gm/1Gm/1Gm/1Kn/1qx/1Gm/1Gm/2C2/1Gm/1Gm/2O2/1Om/1Sq/1Wq/1Sp/1Gm/1Ko/1er/1Gn/1Gm/1Gn/1Kn/1Kn/1Kn/1Kn/1Kn/1Gn/1Gm/1Gm/1Sp/1Gm/1Gm/1Kn/1Gm/1Gm/0Kn+j4AAAAsdFJOUwCKSJH+1gH4JSD1+6C3Du2ZBKflCSsaKC7BNhSwb8pmeEJWT7zGgzzR2l7fYL3NXQAAA75JREFUeNrFlmtzgjoQQMNDwaC8Kw9B8Vltz///fbfFXOoItUFn7j0fjCNwzO6GZMV/QroPiyQ4zj/85x3+rpIovMVm9Yxj9bFwuGKroaiX4xzLzcGjZd2UflrWhXc1rZuZrmNWFzYA9rHuHlptFkp8brK/HW6zVsk4bO5C8D8qFebklD9y5KczLY5KaD/psaTl0ying47SuNAiq0flTffzgJbE2kZ3F9+tT1qCeJeKP4jMUJmC0LyZk7lWv873qdAi2lqJytPuX1EDQBKqOWoyLY1rBOHVUwOB9T4V4ylPCWC1K0JC7IsnSS2wv8tvQBGJ54mh+hoK2IrxuN2ih+RrCOCJkEppqWQqATjjLVkAhvo+gZmGxq/3vR0ggWQ2TtOAeyeeQPAmdDVmuyWEYH4N+0PeTeaM8y50NQ3O8keT4HQV9Yu90NWUHs5Kaa6DLEWHria9QHMTVFqohIzTWHCMbjTCP6vyjNHsbaQrbjWRBVxWozRbBzbiVpOfAThEIzRbCbG40USNA4QSLH3Nzrn5Wwsy9wjIjdjZsNPVmB4c/W6xGVboAMV3ek8g3zQ1MRzSn+2+sgFZT9s8F7DW1JRrI+1OyyMAhXvzVqZ6GkVUNuooX5uiIz802pWKsp2xCGhx4t7uqKPZh4dPjw4ZWz8Ym1RTM+Mh66meJrcBj1950wwqM9/dFILyrUe+hq2ORjGFiRhgDub/osEbwP5V4+ENa4bpay6txsEe1MjFAMmwZimEhOlLufmEVXsEpy9pElipzwFNYAwwGdBIiFSiX0mx3ZZ6DfkrGh+Cr6ECc0jz6Q4wcHMG5+uOvXklxVtYXPsOQ/TwCHK3Rzbwam4g/Br2UPU1Cb+R9Q/pumsB7zG0ty3Vgk4DcPvJ2RnzAcLav288HOyVOpU24mlMWKsccex1vNrM4XQ90Rx463W8mviyeziGuNfxanL6CaUEO+91vFos5U2HEcM56nW8OlS3K8CVYPU6Xg1qsG9u3wB11/Fqs/fu8hiD/SFGsnVUs9oRHcBuxll2Dkz8u/ofgTDVl0xPNlyWvaa8As7aK3h1ANYr0SOyVIenwy4A4nT4mgSOmcaiqwCvFr/gFoBn+I8lUSOBSfkgb7UEko9Hke0vgHeKxCNmFcD51zX4fgQocvEX5gWgGHwl8op2tkKDqA4ADr3gs9gG5MkXevgnCbAo+xIvXAl9lpbTirrQ8lZix64YxzL0AIrtd9XK6irJxHhmoQOQVNWFVtIvj35oCk/N5EmRkQAEliteY5qZZh6JP/gH4pi+7mLJkZ4AAAAASUVORK5CYII=",
        "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABQCAMAAACTf/MwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB+UExURUxpcVKn/1qw/1Or/1Gm/1Gm/1Gm/1Gm/1Or/1Gm/1Ws/3DU/1Gm/161/1Gn/1Gm/1Op/1Kn/1Gn/1Oo/1Gn/1Kn/1Gn/1Sq/1Gn/1Kn/1Gm/1Gn/1Gn/1Sp/1Gm/1Gm/1Gm/1Gm/1Kn/1Kn/1Gm/1Gn/1Gm/1Gn/1Kn/1Gm/xLw9zUAAAApdFJOUwBEDxz9w/T5ItYWA+0IbeUtTZo2tJPMJ9N+pHZVPa7bvOFcY4SNialmEIpfyAAAA5pJREFUeNq9l+mSojAYRdlRZEdRVFBc+7z/C45DUhZtFCJTNfdPbJXjt+UmbfwXRfvcTUI3P1nTGdap8ZDyjz/BFEZwXvoIOXJxY/s7hh0f5bPlrrCiInYdQSp3M13G7PGQ8vPBz9GX4Go9zljvSrUYz1JJ0vySDjHSaiMZy3Pwtuj7uyx6eyveM4rbgU5eM9TeKNuGdEpW9eLlw/raSsZ2HxkjWpi5JIW52SOZJfLdTDJGSfUqkXXaG1KViFGQ9VXIDHLxZwyEVyVPLdIlAVbdRHhwtyZvuis4f9t/A3dhTNcW7o/FBXPC0+vn0EPyWEKYkFLhrWQKEgD+hFhCuMnXc5hNw9gtJPa/Yqw5hKnxrxh7g18bo5is5aOS7G84bmaMYhYhAwpFh8YxAYMKNDE2JMYHJWBrYmZw+IQ5wEwTk8LmE2YDqSamgPKxVFXVr/uqih9LCYUmpgb3sfgQ/ap7KDZyrYkx4Sique6FKAp2BFMTk8FSlKE3ZCcR4hIyTcwemseSw9V4KhdbuoG9JuYEWxGU/2zu2hfZbOGkiTkLt18cwLXlKJWwkUGdNTGxNHvTAW9XB0G988DpOrSCWBOzg6t44fCUI56+wk4TU8FFFjvp+UOnC1SjGOWr0blpPa9tzpHyE4MYNXA1YQ2MWka1/HoYtanqMKgYR8EoI6aOpmpBPo7RkzLw6kZRMbZheGD0pG4/ddv+VtvZcyhtRUoxA9VEVHu2JKwv1ZpUS+vLg4UsdE+qUaoG25fsUQnpgG2P2r0FoehLNnCIjB4+awFewXngSBs9Ck3Ru51wx55CBhUav/QD+dtJmDOo+dsdOIP2JcyWAbWmMh6mzGFtTFbk43RX0DvE0zEmcpDOL4P5XWhbpB1aPqyVG6+mLA/SJ3Cr3Hg1deGZSgFOqtx4tWR7PW+6QxkpN14dLfs7debBVbnxaigGp+4PtGi6uPFqK/Nf6ngH5/T1yPiv/4pFR3B231H2Psytl/67QB7pQxaVAwelp9ESKLUnODgCZfAGvwK8WDOhELhH7z/zAFcjILsB/Pij0bqAf7NGrGHnAZtioG6xByTnxdCwHAD/MtyNWQOw+TiDtQvgpuNDdQBw326JtAFITloTEYcARyX59d0BvMrS9aKLB7AsfkG2DuDngaEve+UDHOtnOl0kzvZb87dzATI7Y2s6yH3KCTIToLZpDnQQpT3fpUYvnYmgWwsQriRkutZmlo6eOH8AyHKn4WUusgUAAAAASUVORK5CYII="
      ],
      name: ""
    };
  },
  created() {
    this.name = JSON.parse(localStorage.loginInfo).username;
  }
};
</script>

<style scoped>
#vipcard {
  background-color: #f5f7f6;
  padding-top: 1.35rem;
  overflow-x: hidden;
  position: relative;
  height: 100vh;
  box-sizing: border-box;
}

.elr-title {
  font-size: 0.38rem;
  padding: 0.44rem 0.5rem;
}

.elr-title span {
  font-weight: bold;
  color: #2c2e2d;
}

.elr-conts {
  background-color: #ffffff;
  padding-left: 0.5rem;
  margin-bottom: 0.35rem;
}

.elr-conts-title {
  font-size: 0.46rem;
  padding: 0.36rem 0.5rem;
  overflow: hidden;
  padding-left: 0;
  border-bottom: 1px solid #f5f7f6;
}

.elr-conts-title-l {
  float: left;
  color: #2c2e2d;
}

.elr-conts-title-r {
  float: right;
  font-size: 0.36rem;
  color: #979998;
}

.elr-conts-cont {
  padding: 0.54rem 0;
  border-bottom: 1px solid #f5f7f6;
  overflow: hidden;
}

.elr-conts-cont-img {
  float: left;
  width: 1.05rem;
  height: 1.2rem;
}

.elr-conts-cont-img img {
  width: 100%;
  height: 100%;
}

.elr-conts-cont-r {
  margin-left: 1.5rem;
  font-size: 0.33rem;
  color: #919392;
}

.elr-conts-cont-r-tt1 {
  font-size: 0.44rem;
  color: #050706;
  padding-bottom: 0.1rem;
}

.elr-color {
  color: #ec6305;
  font-weight: bold;
}

.elr-conts-title-r-btn {
  float: right;
  color: #ec6305;
  width: 1.78rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border: 1px solid;
  border-radius: 0.15rem;
  text-align: center;
  font-size: 0.4rem;
}
</style>
