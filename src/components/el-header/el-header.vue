<template>
  <div class="elw-Pos">
    <div class="elw-continer">
      <div class="elw-confeak">
        <div class="elw-conitem">
          <slot name="elw-Left"></slot>
        </div>
        <div class="elw-conitem elw-conter">
          <div class="elw-context">
            <slot name="elw-cont"></slot>
          </div>
        </div>
        <div class="elw-conitem elw-rter">
          <slot name="elw-right"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.elw-Pos {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
  font-size: 0.48rem;
  z-index: 10;
}
.elw-continer {
  width: 100%;
  line-height: 1.36rem;
  background: #3190e8;
  height: 1.36rem;
}
.elw-confeak {
  width: 90%;
  margin: 0 auto;
  display: flex;
}
.elw-conitem {
  flex: 1;
}
.elw-rter {
  text-align: right;
}
.elw-rter a {
  color: #fff;
}
.elw-conitem a {
  color: #fff;
}
.elw-conter {
  text-align: center;
}
.elw-context {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}
</style>
