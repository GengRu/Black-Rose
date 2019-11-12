<template>
  <div class="elt-balance-d">
    <el_Header>
      <div slot="elw-Left">
        <span @click="$router.back()" class="el-icon-arrow-left"></span>
      </div>
      <div slot="elw-cont">
        <span class="elg-title">余额说明</span>
      </div>
    </el_Header>
    <div class="elt-haveBox">
      <div v-for="(i, $i) in arr" :key="$i">
        <h3>{{ i.title }}</h3>
        <p>{{ i.info }}</p>
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
          title: "Q1: 使用余额的条件",
          info: "为了保护账户安全，使用余额前必须先绑定手机号。"
        },
        {
          title: "Q2: 余额可以怎么用？",
          info:
            "余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。"
        },
        {
          title: "Q3:我要如何提现？",
          info:
            "为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。"
        },
        {
          title: "Q4:为什么会提现失败？",
          info:
            "可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。"
        }
      ]
    };
  }
};
</script>

<style scoped>
.elt-balance-d {
  position: fixed;
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
  line-height: 0.6rem;
}
</style>
