<template>
  <div class="geral container-fluid">
    <!-- THEME BUTTON -->

    <div class="SocialLinks">
      <!-- END THEME BUTTON -->
      <ul class="d-flex justify-content-between align-items-center p-0">
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
      <button class="btn" v-html="buttonTheme" @click="changeTheme"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialLinks",
  data() {
    const savedButtonTheme = localStorage.getItem("buttonTheme");
    const savedCurrentTheme = localStorage.getItem("currentTheme");

    return {
      buttonTheme: savedButtonTheme
        ? savedButtonTheme
        : '<i class="fas fa-moon"></i>',
      currentTheme: savedCurrentTheme ? savedCurrentTheme : "default",
    };
  },
  methods: {
    changeTheme() {
      const darkTheme = '<i class="fas fa-moon"></i>';
      const lightTheme = '<i class="far fa-moon"></i>';

      if (this.buttonTheme === darkTheme) {
        this.buttonTheme = lightTheme;
        this.currentTheme = "Dark";
      } else {
        this.buttonTheme = darkTheme;
        this.currentTheme = "Light";
      }
    },
    validatingClass() {
      const getBody = document.getElementById("body");

      if (this.currentTheme === "Dark") {
        getBody.classList.toggle("dark");
      } else {
        getBody.classList.remove("dark");
      }
    },
  },
  watch: {
    buttonTheme(val) {
      localStorage.setItem("buttonTheme", val);
      this.validatingClass();
    },
    currentTheme(val) {
      localStorage.setItem("currentTheme", val);
      this.$vuetify.theme.dark = val === "Dark"
    },
  },
  created() {
    this.validatingClass();
  },
};
</script>

<style scoped>
* {
  color: #222;
}
div.geral {
  display: flex;
  justify-content: space-between;
  margin: 8px 0px;
}
div.SocialLinks ul {
  width: 160px;
  margin: 0;
}
div.SocialLinks ul li a i {
  font-size: 32px;
}
.btn {
  height: 32px;
}
</style>
