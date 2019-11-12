<template>
  <div class="elt-points-d">
    <el_Header>
      <div slot="elw-Left">
        <span @click="$router.back()" class="el-icon-arrow-left"></span>
      </div>
      <div slot="elw-cont">
        <span class="elg-title">积分说明</span>
      </div>
    </el_Header>
    <div class="elt-haveBox">
      <div v-for="(i, $i) in arr" :key="$i">
        <div>
          <h3>{{ i.title }}</h3>
          <div v-if="$i == 0">
            <p v-for="(j, $j) in i.info" :key="$j">{{ j }}</p>
          </div>
          <p v-else>{{ i.info }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          title: "Q1: 怎么获得积分？",
          info: [
            "在线支付的订单将获得订单积分奖励：",
            "积分将在用户完成评价后获得。",
            "可获得积分=订单金额×10（即1元=10点积分）。",
            "订单金额指实际付款金额，不包含活动优惠金额。",
            "每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。"
          ]
        },
        {
          title: "Q2: 积分用来做什么？",
          info: "可以在积分商城兑换各种礼品。"
        },
        {
          title: "Q3: 礼品兑换很多天了还没有收到，该怎么办？",
          info:
            "礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。"
        },
        {
          title:
            "Q4: 礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认嘛？",
          info:
            "不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。"
        }
      ]
    };
  }
};
</script>

<style scoped>
.elt-points-d {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #fff;
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
.elt-haveBox {
  margin-top: 1.68rem;
  padding: 0 0.4rem;
}

.elt-haveBox h3 {
  line-height: 1.5rem;
  font-weight: normal;
}

.elt-haveBox p {
  font-size: 0.4rem;
  color: #666;
  line-height: 0.65rem;
}
</style>
