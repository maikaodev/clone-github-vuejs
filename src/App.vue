<template>
  <div>
    <SocialLinks />
    <HomePage @ShowView="Show_View" v-if="viewShow" />
    <CloneGitHub @ShowView2="Show_View" v-else />
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
    return {
      viewShow: true
    }
  },
  methods: {
    Show_View() {
      this.viewShow = !this.viewShow
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
  width: 100vw;
  height: 100vh;
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
body.dark button,
body.dark strong,
body.dark h2,
body.dark h3,
body.dark h4 {
  background-color: #161b22;
  color: #fff;
}
</style>
