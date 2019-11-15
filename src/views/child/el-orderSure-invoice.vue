<template>
  <div class="elt-invoice">
    <el_Header>
      <div slot="elw-Left">
        <span @click="$router.back()" class="el-icon-arrow-left"></span>
      </div>
      <div slot="elw-cont">
        <span class="elg-title">选择发票抬头</span>
      </div>
      <div slot="elr-right"></div>
    </el_Header>
    <div class="elg-invoice">
      <div style="float:left;;">不需要开发票</div>
      <div
        class="sex"
        style="float:right;"
        @click="fa = !fa"
        :style="fa ? 'background-color:#ccc' : 'background-color:#4cd964'"
      ></div>
    </div>
    <div class="elg-button" @click="$router.back()">确定</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fa: true
    };
  }
};
</script>

<style scoped>
.elt-invoice {
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
.elg-invoice {
  color: #333;
  font-size: 0.4rem;
  padding: 0 0.3rem;
  margin-top: 1.6rem;
  line-height: 1.6rem;
  background: #fff;
  overflow: hidden;
}
.elg-button {
  width: 90%;
  margin: 0 auto;
  color: #fff;
  text-align: center;
  font-size: 0.5rem;
  line-height: 1.2rem;
  border-radius: 0.2rem;
  margin-top: 0.3rem;
  background-color: #4cd964;
}
/*  */
.sex {
  width: 0.58rem;
  height: 0.58rem;
  border-radius: 50%;
  background-color: #ccc;
  position: relative;
  margin-top: 0.5rem;
}
.sex::after {
  content: "\00a0";
  display: inline-block;
  border: 2px solid #fff;
  border-top-width: 0;
  border-right-width: 0;
  width: 0.28rem;
  height: 0.2rem;
  transform: rotate(-50deg);
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
}
</style>
