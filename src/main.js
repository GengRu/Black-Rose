import Vue from "vue";
import "lib-flexible/flexible";
import axios from "axios";
import VueAxios from "vue-axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import "swiper/css/swiper.min.css";
import "swiper/js/swiper.min.js"
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "../iconfont/iconfont.css";
import "../iconfont/iconfont.js";
Vue.use(VueAxios, axios);
Vue.use(MintUI);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
