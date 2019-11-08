<template>
  <section class="elt-tip_text_container">
    <div class="elt-tip_icon"><span></span> <span></span></div>
    <p class="elt-tip_text">
      <slot name="tipInfo"></slot>
    </p>
    <div class="confrim" @click="btn_sure">确认</div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      flag: true
    };
  },
  methods: {
    btn_sure() {
      this.$emit("closeSure", this.flag);
    }
  }
};
</script>

<style scoped>
.elt-tip_text_container {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -432px;
  margin-left: -432px;
  width: 864px;
  background-color: #fff;
  padding-top: 43.2px;
  border: 0.01rem;
  border-radius: 18px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
}
.elt-tip_text_container .elt-tip_icon {
  width: 216px;
  height: 216px;
  border: 10.8px solid #f8cb86;
  border-radius: 50%;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-direction: column;
  flex-direction: column;
}
.elt-tip_text_container .elt-tip_icon span:first-of-type {
  width: 8.64px;
  height: 108px;
  background-color: #f8cb86;
}
.elt-tip_text_container .elt-tip_icon span:nth-of-type(2) {
  width: 14.4px;
  height: 14.4px;
  border: 0.01rem;
  border-radius: 50%;
  margin-top: 14.4px;
  background-color: #f8cb86;
}
.elt-tip_text_container .elt-tip_text {
  font-size: 50.4px;
  color: #333;
  line-height: 64.8px;
  text-align: center;
  margin-top: 57.6px;
  padding: 0 28.8px;
}
.elt-tip_text_container .confrim {
  font-size: 57.6px;
  color: #fff;
  font-weight: 700;
  margin-top: 57.6px;
  background-color: #4cd964;
  width: 100%;
  text-align: center;
  line-height: 129.6px;
  border: 0.01rem;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
}
</style>
