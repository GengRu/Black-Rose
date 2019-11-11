<template>
  <div class="elw-content">
    <!-- 服务列表 -->
    <div class="elw-padding">
      <div class="elw-flex">
        <slot name="el-conText"></slot>
      </div>
      <div class="elw-Iconr">
        <div class="el-icon-arrow-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.elw-content {
  width: 100%;
  height: 1.06rem;
  font-size: 0.3rem;
  color: #666;
  border-bottom: 2px solid #f0f0f0;
}
.elw-content div {
  line-height: 1.16rem;
}
.elw-flex{
    flex: 1;
}
.elw-Iconr {
  text-align: right;
  color: #333;
  font-size: 0.6rem;
  font-weight: bold;
}
.elw-padding {
  padding: 0 0.4rem;
  display: flex;
}
</style>
