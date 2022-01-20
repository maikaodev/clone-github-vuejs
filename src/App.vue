<template>
  <v-app>
    <div>
      <SocialLinks />
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import SocialLinks from "./components/SocialLinks.vue";

export default {
  name: "App",
  components: {
    SocialLinks,
  },
};
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
</style>
