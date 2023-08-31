import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap/dist/js/bootstrap.js"

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';




import { createApp } from 'vue'
import App from './app/app.vue'
import router from './router'

library.add(fas)

const app = createApp(App)
/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
