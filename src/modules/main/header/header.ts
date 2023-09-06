import {
    Options, Vue
} from 'vue-class-component';

import userProfile from './userProfile/userProfile.vue'
import searchBase from './searchBase/searchBase.vue'

@Options({
    components: {
        'user-profile': userProfile,
        'search-base' : searchBase
    },
    props: {
        bg_color : {
            required: false,
            default: "#44fcfc",
        },
        menus : {
            required: false,
            default: [],
        }
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