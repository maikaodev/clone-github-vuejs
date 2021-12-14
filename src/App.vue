<template>
  <div>
    <SocialLinks />
    <HomePage @ShowView="Show_View" v-if="viewShow === true" />
    <CloneGitHub
      @resetUser="ResetUser"
      @ShowView2="Show_View"
      :user="user"
      v-else
    />
  </div>
</template>

<script>
import SocialLinks from './components/SocialLinks.vue'
import HomePage from './components/HomePage.vue'
import CloneGitHub from './components/CloneGitHub.vue'

export default {
  name: 'App',
  components: {
    SocialLinks,
    HomePage,
    CloneGitHub
  },
  data() {
    const savedUser = localStorage.getItem('user')
    const savedView = localStorage.getItem('convertValue')

    return {
      viewShow: savedView ? savedView : true,
      user: savedUser ? savedUser : ''
    }
  },
  methods: {
    Show_View() {
      const text = document.getElementById('input_name')
      if (text.value === '') {
        this.viewShow = true
      } else {
        this.viewShow = !this.viewShow
        this.user = text.value
      }
    },
    ResetUser() {
      this.viewShow = !this.viewShow

      this.user = ''
    }
  },
  watch: {
    viewShow(val) {
      const initialValue = val
      let convertValue = Boolean

      if (initialValue == 'false') {
        convertValue = false
      } else {
        convertValue = true
      }
      localStorage.setItem('view', convertValue)
    },
    user(val) {
      localStorage.setItem('user', val)
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  text-decoration: none;
  list-style-type: none;
}
html,
body {
  width: 100%;
}
body,
body i,
body h2,
body h3,
body h4,
body strong {
  color: #161b22;
  background-color: #fff;
}

body.dark,
body.dark i,
body.dark strong,
body.dark h2,
body.dark h3,
body.dark h4 {
  background-color: #161b22;
  color: #fff;
}
body.dark footer button,
body.dark div.error button {
  background-color: #fff;
  color: #161b22;
  border: 2px solid #fff;
  font-weight: bold;
}
</style>
