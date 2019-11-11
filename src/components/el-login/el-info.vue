<template>
  <div class="elt-InfoBox">
    <div class="elt-info-left">
      <slot name="user"></slot>
    </div>
    <div class="elt-info-right">
      <span><slot name="name"></slot></span>
      <span class="el-icon-arrow-right"></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.el-icon-arrow-right {
  font-size: 0.6rem;
}
.elt-InfoBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.4rem;
  color: #333;
  padding: 0.4rem;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
.elt-info-left {
  font-size: 0.4rem;
}
.elt-info-right {
  display: flex;
  align-items: center;
}
.elt-info-right span:nth-of-type(1) {
  font-size: 0.5rem;
}
</style>
