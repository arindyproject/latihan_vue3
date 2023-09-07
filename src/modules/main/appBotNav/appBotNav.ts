import {
    Options, Vue
} from 'vue-class-component';



@Options({
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
export default class appBotNav extends Vue {
    
    public onToggleMenuSidebar(): void {
        console.log("onToggleMenuSidebar")
    }

    get navbarVariant() {
        return null;
    }


}