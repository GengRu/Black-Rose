<template>
  <div class="elt-user-pass">
    <div class="elt-input">
      <slot name="elt-input"></slot>
    </div>
  </div>
</template>

<style>
.elt-user-pass {
  background-color: #fff;
}
.elt-user-pass input {
  outline: none;
  border: none;
  padding: 0 0.56rem;
  font-size: 0.5rem;
}
.elt-input {
  height: 1.5rem;
  line-height: 1.5rem;
  border-bottom: 0.01rem solid #f1f1f1;
  position: relative;
  overflow: hidden;
}
</style>
