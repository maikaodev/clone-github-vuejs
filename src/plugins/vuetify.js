import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#121212',
        secondary: '#fff'
      },
      dark: {
        primary: '#fff',
        secondary: '#121212',
        anchor:'#fff'
      },
    },
  },
})