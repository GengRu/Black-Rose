<template>
  <div class="elt-remark">
    <el_Header>
      <div slot="elw-Left">
        <span @click="$router.back()" class="el-icon-arrow-left"></span>
      </div>
      <div slot="elw-cont">
        <span class="elg-title">订单备注</span>
      </div>
      <div slot="elr-right"></div>
    </el_Header>
    <div class="elg-remark">
      <div class="elg-remark-font">快速备注</div>
      <div class="elg-remark-item">
        <ul>
          <li v-for="i in remarks" :key="i.i">
            <span
              v-for="item in i"
              :key="item"
              @click="chooseType(item)"
              ref="item"
              >{{ item }}</span
            >
          </li>
        </ul>
      </div>
    </div>
    <div style="background:#fff;padding-bottom:0.6rem;">
      <div class="elg-other-font">其他备注</div>
      <div class="elg-write" contenteditable="true">请输入备注内容(可不填)</div>
    </div>
    <div class="elg-button">确定</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      remarks: "",
      arr: []
    };
  },
  methods: {
    chooseType(item) {
      console.log(item);
      this.arr.map(el => {
        if (this.arr.indexOf(item) == -1) {
          console.log(123);
          return;
        }
        this.arr.push(item);
      });
      // this.$refs.item[$i].style.background = "#3190e8";
      // this.$refs.item[$i].style.color = "#fff";
      console.log(this.arr);
    }
  },
  created() {
    console.log(this.arr);
    this.axios
      .get("http://elm.cangdu.org/v1/carts/111708/remarks?sig=987953")
      .then(data => {
        // console.log(data.data.remarks);
        this.remarks = data.data.remarks;
      });
  }
};
</script>

<style scoped>
.chooseType {
  background-color: #3190e8;
  color: #fff;
}
.elt-remark {
  position: fixed;
  width: 100%;
  height: 100%;
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
.elg-remark {
  background: #fff;
  margin-top: 1.6rem;
  padding: 0 0.4rem 0.6rem 0.4rem;
}
.elg-other-font {
  margin-top: 0.2rem;
  padding: 0 0.4rem;
  background: #fff;
}
.elg-remark-font,
.elg-other-font {
  color: #333;
  font-size: 0.44rem;
  line-height: 1.2rem;
}
.elg-remark-item li {
  display: inline-block;
  line-height: 1rem;
}
.elg-remark-item li span {
  color: #333;
  font-size: 0.4rem;
  margin-right: 0.4rem;
  padding: 0.17rem 0.2rem;
  border-radius: 0.1rem;
  border: 0.02rem solid #3190e8;
}
.elg-remark-item li:nth-child(1) {
  width: 47%;
  height: 0.9rem;
  line-height: 0.9rem;
  border-radius: 0.2rem;
  border: 0.02rem solid #3190e8;
  margin-bottom: 0.4rem;
  margin-right: 0.4rem;
}
.elg-remark-item li:nth-child(1) span,
.elg-remark-item li:nth-child(6) span {
  margin: 0;
  border: none;
  border-radius: 0rem;
}
.elg-remark-item li:nth-child(1) span:nth-child(2) {
  border-right: 0.02rem solid #3190e8;
  border-left: 0.02rem solid #3190e8;
}
.elg-remark-item li:nth-child(6) {
  display: block;
  width: 23.2%;
  height: 0.9rem;
  line-height: 0.9rem;
  border-radius: 0.2rem;
  margin-top: 0.4rem;
  border: 0.02rem solid #3190e8;
}
.elg-remark-item li:nth-child(6) span:nth-child(1) {
  border-right: 0.02rem solid #3190e8;
}
.elg-button {
  width: 90%;
  margin: 0 auto;
  color: #fff;
  text-align: center;
  font-size: 0.5rem;
  line-height: 1.2rem;
  border-radius: 0.2rem;
  background-color: #4cd964;
}
.elg-write {
  width: 85%;
  height: 2.4rem;
  outline: none;
  font-size: 0.4rem;
  color: #666;
  margin: 0.2rem auto;
  background: #f4f4f4;
  padding: 0.3rem 0.3rem;
  border: 0.02rem solid #ddddda;
}
</style>
