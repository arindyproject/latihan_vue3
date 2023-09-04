import {
    Options, Vue
} from 'vue-class-component';

import { toast } from 'vue3-toastify';
import { ref} from "vue";
import {
    useStore
} from 'vuex';
import store from '@/store';

import {authStatus, authLogout} from '@/utils/auth'

import Header from './header/header.vue';

@Options({
    components: {
        'app-header': Header,
    },
    
})
export default class Main extends Vue {
    is_login = false
    store = useStore();
    app_base_data = store.state.app_base_data;


    async btnSingOut(){
        const log = await authLogout()
        console.log(log)
        if(log){
            toast.success("berhasil Logout");
            this.$router.push("login")
        }
    }


    async mounted() {
        this.is_login = await authStatus();

        if(this.$route.path == "/"){
            this.$router.push("home")
        }
        
    }
}