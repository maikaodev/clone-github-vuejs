<template>
  <div class="geral container overflow-hidden">
    <header class="d-flex justify-content-center align-items-center">
      <!-- H1 -->

      <h1>
        <strong>Welcome to clone GitHub by maikaodev</strong>
      </h1>
      <!-- END H1 -->
    </header>
    <!-- Main -->
    <main>
      <!-- INPUT USERNAME -->
      <div class="container">
        <h4 class="text-center mt-5">Write your username on github below</h4>
        <div class="input-group">
          <input
            type="text"
            id="inputText"
            class="form-control"
            placeholder="username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            v-model="user"
            @keypress.enter="goToClone"
          />
          <router-link
            id="button-run"
            class="btn btn-outline-secondary d-flex align-items-center disabled"
            type="button"
            :to="link"
            tabindex="-1"
            role="button"
            aria-disabled="true"
          >
            Run
          </router-link>
        </div>
      </div>
      <!-- INPUT USERNAME -->
    </main>
    <!-- Main -->
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      user: "",
    };
  },
  methods: {
    goToClone() {
      if (this.user !== "") {
        this.$router.push(this.link);
      }
    },
  },
  computed: {
    link() {
      return `/clone/${this.user}`;
    },
  },
  watch: {
    user(val) {
      const buttonRun = document.getElementById("button-run");
      if (val === "") {
        buttonRun.classList.add("disabled");
        buttonRun.setAttribute("tabindex", -1);
      } else {
        buttonRun.classList.remove("disabled");
        buttonRun.setAttribute("tabindex", 0);
      }
    },
  },
};
</script>

<style scoped>
body div.container {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header"
    "main";
}

body div.container header {
  grid-area: header;
}
body div.container main {
  grid-area: main;
}
body div.container main div.input-group input,
body div.container main div.input-group a {
  height: 48px;
  border-radius: 6px;
}
body div.container main div.input-group a {
  font-weight: bold;
}

/* MEDIA QUERIE */
@media (min-width: 320px) {
  header h1 {
    text-align: center;
  }
}
</style>
