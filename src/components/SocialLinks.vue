<template>
  <div class="geral container-fluid d-flex justify-space-between my-2">
    <!-- THEME BUTTON -->

    <div class="SocialLinks">
      <!-- END THEME BUTTON -->
      <ul class="d-flex justify-content-between align-items-center m-0 p-0">
        <li>
          <a href="https://www.linkedin.com/in/maikaodev/" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/maikaodev" target="_blank">
            <i class="fab fa-twitter-square"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/maikaodev/" target="_blank">
            <i class="fab fa-instagram-square"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/maikaodev" target="_blank">
            <i class="fab fa-github-square"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="d-flex justify-content-end">
      <button class="primary--text" @click="changeTheme">
        <i :class="buttonIcon"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialLinks",
  data() {
    const savedCurrentTheme = localStorage.getItem("currentTheme");
    return {
      currentTheme: (savedCurrentTheme || "light").toLowerCase(),
    };
  },
  methods: {
    changeTheme() {
      this.currentTheme = this.currentTheme === "light" ? "dark" : "light";
    },
  },
  watch: {
    currentTheme(val) {
      localStorage.setItem("currentTheme", val);
      this.$vuetify.theme.dark = val === "dark";
    },
  },
  computed: {
    buttonIcon() {
      return this.currentTheme === "light" ? "fas fa-moon" : "far fa-moon";
    },
  },
  created() {
    this.$vuetify.theme.dark = this.currentTheme === "dark";
  },
};
</script>

<style scoped>
div.SocialLinks ul {
  width: 160px;
}
div.SocialLinks ul li a i {
  font-size: 32px;
}
</style>
