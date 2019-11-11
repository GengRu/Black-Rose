<template>
  <div id="app" v-cloak>
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    window.onload = function() {
      document.documentElement.style.fontSize =
        (document.documentElement.clientWidth / 1080) * 100 + "px";
      window.onresize = function() {
        document.documentElement.style.fontSize =
          (document.documentElement.clientWidth / 1080) * 100 + "px";
      };
    };
  }
};
</script>

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
</style>
