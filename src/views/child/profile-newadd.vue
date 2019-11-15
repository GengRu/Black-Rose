<template>
  <div class="elt-newadd">
    <el_Header>
      <div slot="elw-Left">
        <span @click="$router.back()" class="el-icon-arrow-left"></span>
      </div>
      <div slot="elw-cont">
        <span class="elg-title">我的</span>
      </div>
      <div slot="elr-right"></div>
    </el_Header>
    <div class="elt-addressBox">
      <div class="elt-address">
        <div class="elt-input-new">
          <input type="text" placeholder="请填写你的姓名" v-model="name" />
          <router-link to="/profile/info/address/newadd/adddetail">
            <input type="text" placeholder="小区/写字楼/学校等" disabled />
          </router-link>
          <input
            type="text"
            placeholder="请详细填写送餐地址"
            v-model="addlength"
            @input="add"
            ref="address"
          />
          <p class="trueNum" v-show="!short">送餐地址太短了，不能辨识</p>
          <input
            type="text"
            placeholder="请填写能够联系到您的手机号"
            @input="testIphone"
            v-model="value"
            ref="num"
          />
          <p class="trueNum" v-show="!type" ref="tip">请输入正确的手机号</p>
          <input
            type="text"
            placeholder="备用联系电话"
            @input="testIphone1"
            v-model="value1"
            ref="num1"
          />
          <p class="trueNum" v-show="!type1" ref="tip1">请输入正确的手机号</p>
        </div>
      </div>
      <div class="elt-sure" @click="btnSure">新增地址</div>
    </div>
    <el_showMove>
      <router-view slot="view"></router-view>
    </el_showMove>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      value1: "",
      type: true,
      type1: true,
      addlength: "",
      short: true,
      name: ""
    };
  },
  methods: {
    // 提交
    btnSure() {
      this.axios
        .post("http://elm.cangdu.org/v1/users/43924/addresses", {
          address: this.addlength,
          address_detail: "",
          geohash: "31.22299,121.36025",
          name: this.name,
          phone: this.value,
          phone_bk: "",
          poi_type: 0,
          sex: 1,
          tag: "公司",
          tag_type: 4
        })
        .then(data => {
          // console.log(data.data);
          // alert(1);
        });
    },
    add() {
      if (this.addlength.length <= 2) {
        this.short = false;
        this.$refs.address.style.border = "1px solid red";
      } else {
        this.short = true;
        this.$refs.address.style.border = "1px solid #ddd";
      }
    },
    // 验证电话
    testIphone() {
      if (this.value == "") {
        this.$refs.num.style.border = "1px solid red";
        this.$refs.tip.innerText = "不能为空";
      } else {
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(this.value)) {
          this.type = false;
          this.$refs.num.style.border = "1px solid red";
          this.$refs.tip.innerText = "请输入正确的手机号";
        } else {
          this.type = true;
          this.$refs.num.style.border = "1px solid #ddd";
        }
      }
    },
    // 验证电话
    testIphone1() {
      if (this.value1 == "") {
        this.$refs.num1.style.border = "1px solid red";
        this.$refs.tip1.innerText = "不能为空";
      } else {
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(this.value1)) {
          this.type1 = false;
          this.$refs.num1.style.border = "1px solid red";
          this.$refs.tip1.innerText = "请输入正确的手机号";
        } else {
          this.type1 = true;
          this.$refs.num1.style.border = "1px solid #ddd";
        }
      }
    }
  }
};
</script>

<style scoped>
.elt-newadd {
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
.elt-addressBox {
  margin-top: 1.68rem;
}
.elt-input-new {
  padding: 0.1rem 0;
  background-color: #fff;
}
.elt-input-new input {
  background: #f2f2f2;
  width: 95%;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 2px;
  margin: 0.3rem 0.3rem;
  line-height: 1rem;
  font-size: 0.4rem;
  padding-left: 0.1rem;
  display: block;
  outline: none;
}
.elt-sure {
  text-align: center;
  width: 96%;
  margin: 0 auto;
  border-radius: 0.2rem;
  font-size: 0.5rem;
  color: #fff;
  line-height: 1.2rem;
  background: none;
  font-weight: 700;
  opacity: 0.6;
  background: #4cd964;
}
.trueNum {
  font-size: 0.4rem;
  color: #ea3106;
  padding-left: 0.5rem;
  margin-top: 0.2rem;
}
</style>
