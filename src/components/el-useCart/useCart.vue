<template>
  <div id="useCart">
    <el_Header>
      <div slot="elw-Left">
        <router-link to="./" class="el-icon-arrow-left"></router-link>
      </div>
      <div slot="elw-cont">
        兑换会员
      </div>
      <div slot="elr-right"></div>
    </el_Header>

    <div class="elr-title">成功兑换后将关联到当前帐号： <span>tb659</span></div>

    <div class="elr-input">
      <el-input
        v-model="input"
        placeholder="请输入10位的卡号"
        maxlength="10"
      ></el-input>
      <el-input
        maxlength="6"
        placeholder="请输入6位的卡密"
        v-model="input2"
        show-password
      ></el-input>
      <div class="elr-box">
        <el-button
          type="success"
          :disabled="!type"
          class="elr-box-btn"
          @click="btn"
          >兑换</el-button
        >
      </div>
    </div>

    <div class="elr-conts">
      <h3>——温馨提示——</h3>
      <p>新兑换的会员服务，权益以「会员说明」为准。</p>
      <p>月卡：30次减免配送费。</p>
      <p>季卡：90次减免配送费。</p>
      <p>年卡：360次减免配送费。</p>
      <p>
        ＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "useCart",
  data() {
    return {
      input: "",
      input2: ""
    };
  },
  computed: {
    type: function() {
      return (
        Number(this.input) === Number(this.input) &&
        Number(this.input2) === Number(this.input2) &&
        this.input.length === 10 &&
        this.input2.length === 6
      );
    }
  },
  created() {
    this.name = JSON.parse(localStorage.loginInfo).username;
  },
  methods: {
    btn() {
      this.axios
        .post(
          "http://elm.cangdu.org/member/v1/users/43924/delivery_card/physical_card/bind",
          { number: this.input, password: this.input2 },
          { emulateJSON: true }
        )
        .then(data => {
          this.$test(
            {
              text: data.data.message
            },
            function() {
              // alert(1)
            }
          );
        });
    }
  }
};
</script>

<style>
#useCart {
  background-color: #f6f6f6;
  padding-top: 1.35rem;
  position: absolute;
  top: 0;
  left: 20%;
  z-index: 10;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.6s;
  box-sizing: border-box;
}

#useCart .elr-title {
  padding: 0.4rem 0.5rem;
  font-size: 0.38rem;
}

#useCart .elr-title span {
  font-weight: bold;
  color: #2c2e2d;
}

#useCart .elr-input {
  font-size: 0;
}

#useCart .elr-input div {
  font-size: 0.44rem;
  color: #848486;
}

#useCart .elr-box {
  padding: 0.5rem;
}

#useCart .elr-box-btn {
  width: 100%;
  height: 1.2rem;
  font-size: 0.5rem;
  font-weight: bold;
}

#useCart .elr-conts {
  color: #a8a8a8;
}

#useCart .elr-conts h3 {
  font-size: 0.42rem;
  text-align: center;
  font-weight: normal;
  margin-bottom: 0.4rem;
}

#useCart .elr-conts p {
  padding-left: 1.37rem;
  font-size: 0.32rem;
}
</style>
