import Vue from "vue";
// 62
import Router from "vue-router";
import App from "./App.vue";
import store from "./store";
// 4
import "./plugins/bootstrap";

Vue.config.productionTip = false;
// 62-1
Vue.use(Router);
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "root",
      component: App,
    },
  ],
});

new Vue({
  // 62-2
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
