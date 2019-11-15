<template>
  <div class="elt-chooseAdd">
    <el_Header>
      <div slot="elw-Left">
        <span @click="$router.back()" class="el-icon-arrow-left"></span>
      </div>
      <div slot="elw-cont">
        选择地址
      </div>
      <div slot="elr-right"></div>
    </el_Header>
    <div class="elt-chooseCont">
      <div v-for="(i, $i) in arr" :key="$i">
        <el_chAdd :json="i"></el_chAdd>
      </div>
    </div>
    <div class="elj-newadd">新增收货地址</div>
  </div>
</template>

<script>
import el_chAdd from "../../components/chooseAddress/el-chooseAddress";
export default {
  components: {
    el_chAdd
  },
  data() {
    return {
      arr: []
    };
  },
  created() {
    if (localStorage.loginInfo) {
      this.axios
        .get("http://elm.cangdu.org/v1/users/43924/addresses")
        .then(data => {
          // console.log(data.data);
          this.arr = data.data;
        });
    }
  }
};
</script>

<style scoped>
.elt-chooseAdd {
  position: fixed;
  width: 100%;
  height: 100%;
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
.elt-chooseCont {
  margin-top: 1.48rem;
}
.elj-newadd {
  text-align: center;
  font-size: 0.5rem;
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
}
</style>
