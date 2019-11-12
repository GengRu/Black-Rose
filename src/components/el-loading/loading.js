import Vue from "vue";
import loading from "./loading.vue";
const loadingInstance = Vue.extend(loading);
export default function(isTrue) {
  const Instance = new loadingInstance({
    data() {
      return {
        type: isTrue
      };
    }
  });
  const el = Instance.$mount().$el;
  if (isTrue) {
    document.body.appendChild(el);
  } else {
    document.querySelector("#loading").remove();
  }
}
