<template>
  <div id="confirmOrder">
    <el_Header>
      <div slot="elw-Left">
        <router-link to="/vipcard" class="el-icon-arrow-left"></router-link>
      </div>
      <div slot="elw-cont">
        在线支付
      </div>
      <div slot="elr-right"></div>
    </el_Header>

    <div class="confirmOrder-elr-cont">
      <p>支付剩余时间</p>
      00 : {{ num }} : {{ num2 }}
    </div>

    <p class="confirmOrder-elr-title">请选择支付方式</p>

    <div class="confirmOrder-elr-cont2">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573480857260&di=6a5c9d48ca81dd79e38769aed5624abc&imgtype=0&src=http%3A%2F%2Fpic.pc6.com%2Fup%2F2015-10%2F14444674655340116.png"
      />
      <p>支付宝</p>
      <el-radio
        v-model="radio"
        label="1"
        class="confirmOrder-elr-cont2-btn"
      ></el-radio>
    </div>

    <div class="confirmOrder-elr-cont2">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573480823850&di=af327b0ae60672869af5513691a4f3fa&imgtype=jpg&src=http%3A%2F%2Fstatic.fotor.com.cn%2Fassets%2Fstickers%2Ffreelancer_lmf_0315_01%2Fc9fe1862-3583-4884-8b6e-6d53c6a34142_medium_thumb.jpg"
      />
      <p>微信</p>
      <el-radio
        v-model="radio"
        label="2"
        class="confirmOrder-elr-cont2-btn"
      ></el-radio>
    </div>

    <div class="confirmOrder-elr-btn">
      <el-button
        type="success"
        class="confirmOrder-elr-btns"
        @click="confirmOrderBtn"
        >确认支付</el-button
      >
    </div>
  </div>
</template>

<script>
import el_Header from "../components/el-header/el-header";
export default {
  name: "confirmOrder",
  components: {
    el_Header
  },
  data() {
    return {
      cont: "暂不开放支付功能",
      num: 15,
      num2: "00",
      radio: "1"
    };
  },
  methods: {
    confirmOrderBtn() {
      this.$test(
        {
          text: "当前环境无法支付，请打开官方APP进行付款"
        },
        function() {
          location.href = "#/order";
        }
      );
    }
  },
  created() {
    this.$test(
      {
        text: this.cont
      },
      function() {}
    );
    var timer = setInterval(() => {
      if (this.num2 == 0) {
        this.num--;
        this.num2 = 59;
        if (String(this.num).length == 1) {
          this.num = "0" + String(this.num);
        }
      } else {
        this.num2--;
        if (String(this.num2).length == 1) {
          this.num2 = "0" + String(this.num2);
        }
      }

      if (this.num == 0 && this.num2 == 0) {
        this.num = "00";
        this.num2 = "00";
        this.cont = "支付超时";
        clearTimeout(timer);
      }
    }, 1000);
  }
};
</script>

<style>
#confirmOrder {
  padding-top: 1.35rem;
}

.confirmOrder-elr-cont {
  padding: 1.24rem 0;
  text-align: center;
  background-color: #fdfffe;
}

.confirmOrder-elr-cont p {
  font-size: 0.4rem;
  color: #727473;
}

.confirmOrder-elr-title {
  padding: 0.3rem 0.5rem;
  font-size: 0.46rem;
  color: #6a6c6b;
}

.confirmOrder-elr-cont2 {
  padding: 0.5rem;
  margin-bottom: 0.05rem;
  background-color: #ffffff;
  overflow: hidden;
  font-size: 0.46rem;
  color: #5c5e5d;
}

.confirmOrder-elr-cont2 img {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.2rem;
  float: left;
}

.confirmOrder-elr-cont2 p {
  float: left;
  padding: 0.3rem 0;
}

.confirmOrder-elr-cont2-btn {
  float: right;
  margin: 0.4rem 0;
}

#confirmOrder .el-radio__label {
  display: none;
}

.confirmOrder-elr-btn {
  padding: 0 0.48rem;
}

.confirmOrder-elr-btns {
  width: 100%;
  background-color: #4bdb62;
  font-size: 0.5rem;
  font-weight: bold;
}
</style>
