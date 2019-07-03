import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueSocketIO from "vue-socket.io";
const socket = new VueSocketIO({
  debug: true,
  connection: "http://localhost:9090"
});
Vue.use(socket);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
