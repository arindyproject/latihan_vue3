import {
    Options, Vue
} from 'vue-class-component';

import userProfile from './userProfile/userProfile.vue'

@Options({
    components: {
        'user-profile': userProfile
    },
    props: {
        bg_color : {
            required: false,
            default: "#44fcfc",
        },
        
    }
})
export default class Header extends Vue {
 

    public onToggleMenuSidebar(): void {
        console.log("onToggleMenuSidebar")
    }


    get navbarVariant() {
        return null;
    }


}