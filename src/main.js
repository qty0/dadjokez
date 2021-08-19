import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.prototype.$favs = JSON.parse(localStorage.getItem("fav"));

if (!Array.isArray(Vue.prototype.$favs)) {
  Vue.prototype.$favs = [];
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
