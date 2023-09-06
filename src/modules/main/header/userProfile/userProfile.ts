import {
    Options, Vue
} from 'vue-class-component';

import {authLogout} from '@/utils/auth'


export default class userProfile extends Vue {
    isLoading = false

    async btnSingOut(){
        this.isLoading  = true
        const log       = await authLogout()

        setTimeout(() => {
            this.isLoading  = false,
            this.$router.push("login")
        }, 5000);
    }
}