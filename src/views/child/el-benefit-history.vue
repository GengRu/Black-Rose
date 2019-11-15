<template>
  <div class="elt-hbHistory">
    <el_Header>
      <div slot="elw-Left">
        <span @click="$router.back()" class="el-icon-arrow-left"></span>
      </div>
      <div slot="elw-cont">
        <span class="elg-title">历史红包</span>
      </div>
      <div slot="elr-right"></div>
    </el_Header>
    <div class="elt-hb-cont">
      <!--红包列表-->
      <div>
        <div class="elt-hongbaoBox" v-for="(i, $i) in arr" :key="$i">
          <el_hongbao :item="i"></el_hongbao>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import el_hongbao from "../../components/el-profile/el-hongbao";
export default {
  components: {
    el_hongbao
  },
  data() {
    return {
      arr: []
    };
  },
  created() {
    // console.log(localStorage.loginInfo);
    if (localStorage.loginInfo != "") {
      var id = JSON.parse(localStorage.loginInfo).user_id;
      this.axios
        .get(
          "http://elm.cangdu.org/promotion/v2/users/" +
            id +
            "/expired_hongbaos?limit=20&offset=0"
        )
        .then(data => {
          // console.log(data);
          this.arr = data.data.slice(0, 4);
        });
    }
  }
};
</script>

<style scoped>
.elt-hbHistory {
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
  padding: 0 0.4rem;
}

.elt-hb-cont {
  margin-top: 1.68rem;
}
.elt-hongbaoBox {
  background: #fff;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.4rem;
}
</style>
