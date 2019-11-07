<template>
  <div id="app" v-cloak>
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
body{
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
