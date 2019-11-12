<template>
  <transition name="fade">
    <slot name="view"></slot>
  </transition>
</template>

<script>
export default {};
</script>

<style scoped>
.elg-title {
  font-size: 0.5rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.35s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(20%);
}
.fade-leave,
.fade-enter-to {
  opacity: 1;
  transform: translateX(0);
}
</style>
