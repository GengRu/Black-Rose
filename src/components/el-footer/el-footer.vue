<template>
  <div id="footer">
    <div class="elj-footer">
      <div
        class="elj-footer-item"
        v-for="(i, $index) in arr"
        :key="$index"
        @click="index = $index"
      >
        <router-link :to="i.path">
          <span class="iconfont elj-fon" :class="index == $index ? 'a' : ''">{{
            i.icon
          }}</span>
          <p class="elj-footer-txt">{{ i.text }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      arr: [
        { text: "外卖", icon: "\ue652", path: "/msite" },
        { text: "搜索", icon: "\ue605", path: "/search" },
        { text: "订单", icon: "\ue62c", path: "/order" },
        { text: "我的", icon: "\ue65b", path: "/profile" }
      ]
    };
  }
};
</script>

<style scoped>
#footer {
  width: 100%;
  height: 1.3rem;
  border-top: 0.01rem solid #f9f9f9;
  position: fixed;
  bottom: 0;
  left: 0;
  background: white;
  z-index: 9;
}
.elj-footer {
  overflow: hidden;
  display: flex;
  padding-top: 0.15rem;
}
.elj-footer-item {
  float: left;
  flex: 1;
  text-align: center;
}
.elj-footer-txt {
  font-size: 0.3rem;
  color: #797979;
}
.elj-fon {
  font-size: 0.54rem;
  color: #5e5e5e;
}
.a {
  color: #389cff;
}
</style>
