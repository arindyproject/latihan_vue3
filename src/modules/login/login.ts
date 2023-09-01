import { Vue } from 'vue-class-component';

import { useStore } from 'vuex';
import store from '@/store';


export default class Login extends Vue {
    windowHeight  = window.innerHeight;


   store = useStore();
   app_base_data = store.state.app_base_data;
    

    async mounted() {
        try {
            const response = await this.$axios.get('app.json');
            console.log('Response:', response.data);
            if(response.data.status){
                
            }
          } catch (error) {
            console.error('Error:', error);
          }
    }

    
   
    get gradientStyle() {
        return `linear-gradient(${this.app_base_data.main_theme_color}, ${this.app_base_data.second_theme_color})`;
    }

    get mainColor(){
        return `${this.app_base_data.main_theme_color}`;
    }

    get styleObject(){
        return {
            '--main-color'  :   '#E9374C',
            '--second-color' : '#D31128',
        }
    }
}