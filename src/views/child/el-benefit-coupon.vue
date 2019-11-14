<template>
  <div class="elt-coupon">
    <el_Header>
      <div slot="elw-Left">
        <span @click="$router.back()" class="el-icon-arrow-left"></span>
      </div>
      <div slot="elw-cont">
        <span class="elg-title">代金券说明</span>
      </div>
      <div slot="elr-right"></div>
    </el_Header>
    <div class="elt-coupon-cont">
      <div>
        <h3>Q1: 什么是商家代金券？</h3>
        <p>
          商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。
        </p>
      </div>
      <div>
        <h3>Q2: 怎么获得商家代金券？</h3>
        <p>进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。</p>
        <p>
          「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。
        </p>
      </div>
      <div>
        <h3>Q3: 商家代金券使用条件</h3>
        <p>商家代金券仅限在指定商家使用</p>
        <p>商家代金券仅限在线支付使用</p>
        <p>每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.elt-coupon {
  position: fixed;
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
.elt-coupon-cont {
  margin-top: 1.68rem;
  padding: 0 0.4rem;
}

.elt-coupon-cont h3 {
  line-height: 1.5rem;
  font-weight: normal;
}

.elt-coupon-cont p {
  font-size: 0.4rem;
  color: #666;
  line-height: 0.65rem;
}
</style>
