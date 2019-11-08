<template>
  <div class="elw-Pos">
    <div class="elw-continer">
      <div class="elw-confeak">
        <div class="elw-conitem">
          <slot name="elw-Left"></slot>
        </div>
        <div class="elw-conitem elw-conter">
          <slot name="elw-cont"></slot>
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

<style>
.elw-Pos {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
  font-size: 48px;
}
.elw-continer {
  width: 100%;
  line-height: 136px;
  background: #3190e8;
  height: 136px;
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
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}
</style>
