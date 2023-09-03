import {
  createStore
} from 'vuex'

const store = createStore({
  state: {
    app_base_data: {
      app_name: "ThemeVUE3 d",
      company_name: "Arindy Project Corp",
      tag_line_one: "Ini adalah Sebuah Latihan VUE saja",
      tag_line_two: "Smmoga dapat membantu",
      address: "Kasreman Ngawi Ramah",
      description: "description",
      email: "arindy@project.com",
      phone: "082211122370",
      fax: "031-999-777",
      website: "https://github.com/arindyproject/",
      instagram: "https://www.instagram.com/devarindy/",
      youtube: "https://www.youtube.com/@arindyproject",
      main_icon: "https://avatars.githubusercontent.com/u/31184693?v=4",
      second_icon: "https://avatars.githubusercontent.com/u/31184693?v=4",
      img_background: "",
      main_theme_color: "#1175D3",
      second_theme_color: "#E9374C"
    },
    user: {
      loggedIn: false,
      data: null
    }
  },

  getters: {
    user(state) {
      return state.user
    }
  },

  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    }
  },

  actions: {

  },

  modules: {}

});

export default store;