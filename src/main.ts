import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap/dist/js/bootstrap.js"

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios'
//import VueAxios from 'vue-axios'


import { createApp } from 'vue'
import App from './app/app.vue'
import router from './router'
import store from './store';

library.add(fas)

const app = createApp(App)
/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.config.globalProperties.$axios = axios.create({
    baseURL: "https://raw.githubusercontent.com/arindyproject/latihan_vue3/main/src/json_test/",
});
//app.config.globalProperties.$store = store;
app.use(store);
app.mount('#app')
