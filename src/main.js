import Vue from "vue";
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from "./store";

<<<<<<< HEAD
Vue.use(VueAxios, axios)
=======
Vue.use(ElementUI);
>>>>>>> 5c332916db8b43e454bf715bfaaaac75acba43e0
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
