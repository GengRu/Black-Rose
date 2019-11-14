<template>
  <div id="loading">
    <div id="cont">
      <div class="loading_cont">
        <img src="../../assets/elm.gif" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#cont {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
}
#loading {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  background: #f5f5f5;
}
#loading .loading_cont {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 110px;
  height: 110px;
  border-radius: 50%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
}
#loading img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
}
</style>
