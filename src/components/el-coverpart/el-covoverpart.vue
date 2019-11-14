<template>
  <div id="coverpart_cont">
    <div class="cover-background">
      <div class="cover-content">
        <div class="sa-icon">
          <span class="sa-body"></span>
          <span class="sa-dot"></span>
        </div>
        <h2>是否退出登录</h2>
        <div class="sa-botton">
          <button class="waiting" @click="wait">再等等</button>
          <button class="quitlogin" @click="loginUp">退出登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: true,
      flag: false
    };
  },
  methods: {
    wait() {
      // console.log(1);
      this.$emit("closeConfirm", this.type);
    },
    loginUp() {
      this.$emit("loginupSure", this.false);
    }
  }
};
</script>

<style scoped>
#coverpart_cont {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
}
.cover-background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
}
.cover-content {
  transition: all 1s;
  animation: bounceIn 0.6s;
  width: 91%;
  background: #fff;
  padding: 0.17rem;
  position: absolute;
  top: 25%;
  left: 3%;
  z-index: 1000;
  border-radius: 0.2rem;
}
.sa-icon {
  width: 3rem;
  height: 3rem;
  border: 0.15rem solid #f8bb86;
  border-radius: 50%;
  margin: 0.4rem auto;
  position: relative;
}
.sa-body {
  width: 0.15rem;
  height: 1.8rem;
  border-radius: 0.2rem;
  background: #f8bb86;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0.2rem;
}
.sa-dot {
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  background: #f8bb86;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0.3rem;
}
.cover-content h2 {
  width: 100%;
  text-align: center;
  font-size: 0.8rem;
  color: #575757;
  font-weight: 500;
  margin: 0.8rem 0;
}
.sa-botton {
  width: 100%;
  text-align: center;
  padding-bottom: 0.5rem;
}
.waiting {
  background: #ccc6c6;
  margin-right: 0.4rem;
}
.sa-botton button {
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 0.4rem;
  font-size: 0.5rem;
  color: #fff;
  margin-top: 0.26rem;
}
.sa-botton .quitlogin {
  background: #dd6b55;
}
@-webkit-keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }
  100% {
    opacity: 1;
    transform: scaleX(1);
  }
}
</style>
