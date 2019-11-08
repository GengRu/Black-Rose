import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import App from "./App.vue";
import store from "./store";
<<<<<<< HEAD
import router from "./router";
=======
import router from "./router"
>>>>>>> ef47fec5a3c57221b1f02ea6fc7a8b323f14df8e
Vue.use(VueAxios, axios);
Vue.use(MintUI);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
