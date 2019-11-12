import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import "../iconfont/iconfont.css";
import "../iconfont/iconfont.js";
import el_Header from "./components/el-header/el-header.vue";
import el_showMove from "./components/el-global/showMove.vue";
import store from "./store";
import router from "./router";
import App from "./App.vue";
import loading from "./components/el-loading/loading";
import alert from "./components/el-alert/alert";
Vue.component("el_Header", el_Header);
Vue.component("el_showMove", el_showMove);
Vue.use(VueAxios, axios);
Vue.use(MintUI);
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$loading = loading;
Vue.prototype.$test = alert;
Vue.directive("h", a => {
  a.style.transition = ".6s";
  setTimeout(() => {
    a.style.left = 0;
    a.style.opacity = 1;
  }, 0);
});
//验证码请求
axios.defaults.withCredentials = true;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
