<template>
  <div class="elw-confoo">
    <div class="elw-motent">
      <div class="elw-title">
        <slot name="el-tit"></slot>
      </div>
      <div class="elw-guig">
        <p></p>
        <div>
          <span>默认</span>
          <span>190*12</span>
        </div>
        <div>
          <div>
            <slot name="elw-myq"></slot>
          </div>
          <div>
            <slot name="elw-enter"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.elw-confoo {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.elw-motent {
  width: 70%;
  position: relative;
  top: 40%;
  margin: 0 auto;
}
</style>
