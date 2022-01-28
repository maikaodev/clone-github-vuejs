import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#161b22',
        secondary: '#fff'
      },
      dark: {
        primary: '#fff',
        secondary: '#161b22'
      },
    },
  },
})