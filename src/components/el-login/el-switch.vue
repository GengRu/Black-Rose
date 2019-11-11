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
  width: 1.5rem;
  height: 0.5rem;
  border-radius: 0.5rem;
}
.mint-switch-core::after {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  top: -0.18rem;
}
.mint-switch-input:checked + .mint-switch-core::after {
  transform: translateX(0.8rem);
}
.mint-switch-core::before {
  display: none;
}
.mint-switch-input:checked + .mint-switch-core {
  background-color: #4cd964;
}
</style>
