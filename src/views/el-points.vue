<template>
  <div>
    <div>
      <el_Header>
        <div slot="elw-Left">
          <span @click="$router.back()" class="el-icon-arrow-left"></span>
        </div>
        <div slot="elw-cont">
          <span class="elg-title">我的积分</span>
        </div>
      </el_Header>
      <el_CurrentShow>
        <span slot="nowHave">当前积分</span>
        <span slot="explain">积分说明</span>
        <span slot="money">0</span>
        <span slot="unit">分</span>
        <span slot="getSome">
          <div class="elt-bgc"><span>积分兑换商品</span></div>
        </span>
        <div slot="log">最近30天积分记录</div>
        <div slot="history">最近30天无分记录</div>
        <div slot="getPoints">快去下单赚取大量积分吧</div>
      </el_CurrentShow>
    </div>
    <el_showMove>
      <router-view slot="view"></router-view>
    </el_showMove>
  </div>
</template>

<script>
import el_CurrentShow from "../components/el-profile/el-currentShow";
export default {
  components: { el_CurrentShow }
};
</script>

<style scoped>
.elg-title {
  font-size: 0.5rem;
}
.elt-bgc {
  background-color: #fe6d47;
}
</style>
