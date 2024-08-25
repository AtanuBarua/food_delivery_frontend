import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import FontAwesomeIcon from './plugins/fontawesome'
import VueTelInput from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";
import axios from "./plugins/axios";
import Toast, { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";


const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

app.config.globalProperties.axios = axios;
app.config.globalProperties.toast = useToast();

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(VueTelInput);
app.use(Toast);
app.use(pinia);
app.use(router);

app.mount("#app");
