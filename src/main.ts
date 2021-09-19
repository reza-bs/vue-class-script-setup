import VuelidatePlugin from "@vuelidate/core";
import { createApp } from "vue";
// import VueRouter from 'vue-router';
import Vuelidate from "vuelidate";
import { VuesticPlugin } from "vuestic-ui";
import "vuestic-ui/dist/vuestic-ui.css";
import App from "./App.vue";
import router from "./router/index";
createApp(App)
  .use(router)
  .use(Vuelidate)
  .use(VuelidatePlugin)
  .use(VuesticPlugin)
  .use(router)
  .mount("#app");
