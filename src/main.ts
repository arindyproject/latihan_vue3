import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap/dist/js/bootstrap.js"
import 'bootstrap/dist/js/bootstrap.bundle.js'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)


//import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import axios from 'axios'
//import VueAxios from 'vue-axios'


import { createApp } from 'vue'
import App from './app/app.vue'
import router from './router'
import store from './store';


//firebase---------------------------------------
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCFAlpUfFOP4xcVSGsuzhe2IaRncC62N-o",
    authDomain: "vue3latihan.firebaseapp.com",
    projectId: "vue3latihan",
    storageBucket: "vue3latihan.appspot.com",
    messagingSenderId: "629996592746",
    appId: "1:629996592746:web:2eea8ac368c306e698b413",
    measurementId: "G-S3CMGF275V"
  };

initializeApp(firebaseConfig);

//firebase---------------------------------------

const app = createApp(App)
/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.config.globalProperties.$axios = axios.create({
    baseURL: "https://raw.githubusercontent.com/arindyproject/latihan_vue3/main/src/json_test/",
});
//app.config.globalProperties.$store = store;
app.use(store);
//app.use(LoadingPlugin);
app.use(VueSweetalert2);
app.use(Vue3Toastify, {
    position: 'top-center', 
    duration: 3000, 
    closeOnClick: true,
});
app.mount('#app')
