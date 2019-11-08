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
  padding: 0 56px;
}
.elt-input {
  height: 150px;
  line-height: 150px;
  border-bottom: 1px solid #f1f1f1;
  position: relative;
  overflow: hidden;
}
</style>
