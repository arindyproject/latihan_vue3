import {
    Options,
    Vue
} from 'vue-class-component';

import {
    toast
} from 'vue3-toastify';
import {
    ref
} from "vue";
import {
    useStore
} from 'vuex';
import store from '@/store';

import {
    authStatus
} from '@/utils/auth'



import Header from './header/header.vue';
import appBotNav from './appBotNav/appBotNav.vue';
import appSideBar from './appSideBar/appSideBar.vue';


@Options({
    components: {
        'app-header': Header,
        'app-bottom-nav': appBotNav,
        'app-sidebar' : appSideBar,
    },
    computed: {
        getMenus() {
            return this.$route.meta.menus || [];
        },
    }

})
export default class Main extends Vue {
    is_login = false
    store = useStore();
    app_base_data = store.state.app_base_data;

    isSidebarVisible = true;


    async mounted() {
        this.is_login = await authStatus();
        if (this.$route.path == "/") {
            this.$router.push("home")
        }

    }

}