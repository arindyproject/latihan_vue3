import {
    Options, Vue
} from 'vue-class-component';
import {
    reactive, ref
} from "vue";
import {
    useStore
} from 'vuex';
import store from '@/store';

import Loading from 'vue-loading-overlay';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Options({
    components: {
        Loading
    }
})
export default class Login extends Vue {
    isLoading:boolean = false;
    windowHeight = window.innerHeight;

    store = useStore();
    app_base_data = store.state.app_base_data;

    user = reactive({
        username: "",
        password: ""
    })

    isInvalid = reactive({
        username: {
            status : false,
            msg : ""
        },
        password: {
            status : false,
            msg : ""
        }
    })

    //==================================================================================
    async mounted() {
        this.isLoading = true;
        try {
            const response = await this.$axios.get('app.json');
            console.log('Response:', response.data);
            if (response.data.status) {
                this.app_base_data = response.data.data;
            }
            this.isLoading = false;
        } catch (error) {
            console.error('Error:', error);
            this.isLoading = false;
        }
        //set backround
        if (this.app_base_data.img_background != '') {
            document.body.style.backgroundImage = `url('${this.app_base_data.img_background}')`;
        }

        
    }
    //==================================================================================
    submitForm(){
        this.isInvalid = {
            username: {
                status : false,
                msg : ""
            },
            password: {
                status : false,
                msg : ""
            }
        }

        if(this.user.username == ''){
            this.isInvalid.username.status = true; 
            this.isInvalid.username.msg    = "Username / Email Wajib Diisi!!";
        }
        if(this.user.password == ''){
            this.isInvalid.password.status = true; 
            this.isInvalid.password.msg    = "Password Wajib Diisi!!";
        }

        if(this.user.username == '' || this.user.password == ''){
            let messages = "";
            let isInvalid = this.isInvalid;
            for (const field in isInvalid) {
                if (isInvalid[field].status) {
                  messages += '<br>' + isInvalid[field].msg;
                }
            }
            this.$swal({
                title: 'info',
                icon: 'info',
                html: messages
            });
        }

        
    }


    //==================================================================================
    get gradientStyle() {
        return `linear-gradient(${this.app_base_data.main_theme_color}, ${this.app_base_data.second_theme_color})`;
    }

    get mainColor() {
        return `${this.app_base_data.main_theme_color}`;
    }


}