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
/*
body,
body a,
body i,
body h2,
body h3,
body h4,
body strong {
  color: #161b22;
  background-color: #fff;
}

body.dark,
body.dark a,
body.dark i,
body.dark strong,
body.dark h2,
body.dark h3,
body.dark h4 {
  background-color: #161b22;
  color: #fff;
}
body.dark .container header .twitter i,
body.dark .container header .followers i,
body.dark .container header .followers li span {
  color: #8b949e;
}
body.dark footer button,
body.dark div.error button {
  background-color: #fff;
  color: #161b22;
  border: 2px solid #fff;
  font-weight: bold;
} */
</style>
