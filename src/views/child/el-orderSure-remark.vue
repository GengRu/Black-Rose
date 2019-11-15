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
        <div ref="item">
          <li>
            <span
              v-for="(i, $i) in arr1"
              :key="$i"
              @click="index = $i"
              :class="index == $i ? 'chooseType' : ''"
              >{{ i }}</span
            >
          </li>
          <li>
            <span @click="a = 0" :class="a == 0 ? 'chooseType' : ''">
              不要香菜
            </span>
          </li>
          <li>
            <span @click="b = 0" :class="b == 0 ? 'chooseType' : ''">
              不要洋葱
            </span>
          </li>
          <li>
            <span @click="c = 0" :class="c == 0 ? 'chooseType' : ''">
              多点醋
            </span>
          </li>
          <li>
            <span @click="d = 0" :class="d == 0 ? 'chooseType' : ''">
              多点葱
            </span>
          </li>
          <li>
            <span
              v-for="(j, $j) in arr2"
              :key="$j"
              @click="i = $j"
              :class="i == $j ? 'chooseType' : ''"
            >
              {{ j }}
            </span>
          </li>
        </div>
      </div>
    </div>
    <div style="background:#fff;padding-bottom:0.6rem;">
      <div class="elg-other-font">其他备注</div>
      <div class="elg-write" contenteditable="true">请输入备注内容(可不填)</div>
    </div>
    <div class="elg-button" @click="btn">确定</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: -1,
      i: -1,
      a: -1,
      b: -1,
      c: -1,
      d: -1,
      remarks: "",
      arr: [],
      arr1: ["不要辣", "少点辣", "多点辣"],
      arr2: ["去冰", "少冰"]
    };
  },
  methods: {
    btn() {
      var item = this.$refs.item.children;
      for (var i = 0; i < item.length; i++) {
        for (var j = 0; j < item[i].children.length; j++) {
          // console.log(item[i].children[j]);
          if (item[i].children[j].className == "chooseType") {
            this.arr.push(item[i].children[j].innerText);
          }
        }
      }
      var str = this.arr.join(",");
      this.$emit("type", str);
      this.$router.back();
    }
  },
  created() {
    this.axios
      .get("http://elm.cangdu.org/v1/carts/111708/remarks?sig=987953")
      .then(data => {
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
  padding: 0.17rem 0.35rem;
  border-radius: 0.1rem;
}
.elg-remark-item li {
  height: 0.9rem;
  line-height: 0.9rem;
  border-radius: 0.2rem;
  border: 0.02rem solid #3190e8;
  margin-bottom: 0.4rem;
  margin-right: 0.3rem;
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
