<template>
  <div class="elt-address">
    <el_Header>
      <div slot="elw-Left">
        <span @click="$router.back()" class="el-icon-arrow-left"></span>
      </div>
      <div slot="elw-cont">
        <span class="elg-title">编辑地址</span>
      </div>
      <div slot="elw-right" @click="type = !type">
        {{ type ? "编辑" : "完成" }}
      </div>
    </el_Header>
    <router-link to="/profile/info/address/newadd">
      <div class="elt-addAdd">
        <el_info>
          <div slot="user">新增地址</div>
        </el_info>
      </div>
    </router-link>
    <router-view v-h></router-view>
  </div>
</template>

<script>
import el_info from "../../components/el-login/el-info";
export default {
  components: {
    el_info
  },
  data() {
    return {
      type: true
    };
  }
};
</script>

<style scoped>
.elt-address {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  top: 0;
  left: 20%;
  right: 0;
  bottom: 0;
  z-index: 10;
  min-height: 5rem;
  box-sizing: border-box;
  align-items: center;
  font-size: 0.4rem;
}
.elt-addAdd {
  margin-top: 1.68rem;
}
</style>
