<template>
  <div id="home">
     <el_Header>
       <div slot="elw-Left">
         <router-link to="./"> eleme</router-link>
       </div>
       <div slot="elw-right">
          <router-link to="./login">登陆 | 注册</router-link>
       </div>
     </el_Header>
  </div>
</template>

<script>
import el_Header from '../components/el-header/el-header';
export default {
  name: "home",
  components:{el_Header}
};
</script>
<style scoped></style>
