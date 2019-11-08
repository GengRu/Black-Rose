<template>
  <mt-switch v-model="value"></mt-switch>
</template>

<script>
export default {
  data() {
    return {
      value: false
    };
  },
  watch: {
    value() {
      this.$emit("isTrue", this.value);
    }
  }
};
</script>

<style>
.mint-switch-core {
  width: 150px;
  height: 50px;
  border-radius: 50px;
}
.mint-switch-core::after {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  top: -18px;
}
.mint-switch-input:checked + .mint-switch-core::after {
  transform: translateX(80px);
}
.mint-switch-core::before {
  display: none;
}
.mint-switch-input:checked + .mint-switch-core {
  background-color: #4cd964;
}
</style>
