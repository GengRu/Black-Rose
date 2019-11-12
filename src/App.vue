<template>
  <div id="app" v-cloak>
    <transition name="fade2" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
.iconfont {
  font-size: 1em;
}
body {
  background-color: #f5f5f5;
}
[v-cloak] {
  display: none;
}
ol,
ul {
  list-style: none;
}
img {
  vertical-align: top;
}
a {
  text-decoration: none;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
b,
i {
  font-style: normal;
}
.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
.fade2-enter-active,
.fade2-leave-active {
  transition: opacity 0.2s;
}
.fade2-enter,
.fade2-leave-to {
  opacity: 0;
}
</style>
