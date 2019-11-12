<template>
  <div id="balance">
    <div>
      <el_Header>
        <div slot="elw-Left">
          <span @click="$router.back()" class="el-icon-arrow-left"></span>
        </div>
        <div slot="elw-cont">
          <span class="elg-title">我的余额</span>
        </div>
      </el_Header>
      <el_CurrentShow>
        <span slot="nowHave">当前余额</span>
        <span slot="explain">余额说明</span>
        <span slot="money">0.00</span>
        <span slot="unit">元</span>
        <span slot="getSome">提现</span>
        <div slot="log">交易明细</div>
        <div slot="history">暂无明细记录</div>
      </el_CurrentShow>
    </div>
    <el_showMove>
      <router-view slot="view"></router-view>
    </el_showMove>
  </div>
</template>

<script>
import el_Header from "../components/el-header/el-header";
import el_CurrentShow from "../components/el-profile/el-currentShow";
export default {
  components: { el_Header, el_CurrentShow }
};
</script>

<style scoped>
.elg-title {
  font-size: 0.5rem;
}
</style>
