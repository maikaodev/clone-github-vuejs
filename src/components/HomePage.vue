<template>
  <div class="container" id="Geral">
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
            id="input_name"
            type="text"
            class="form-control"
            placeholder="username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            v-model="user"
          />
          <router-link
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            :to="link"
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
  name: 'HomePage',
  data() {
    return {
      user: ''
    }
  },
  computed: {
    link() {
      return `/clone/${this.user}`
    }
  }
}
</script>

<style scoped>
body div.container {
  display: grid;
  grid-auto-rows: 150px;
  grid-template-areas:
    'header'
    'main';
  height: 100%;
}

body div.container header {
  grid-area: header;
}
body div.container main {
  grid-area: main;
}
body div.container main div.input-group input,
body div.container main div.input-group button {
  height: 50px;
  border: 2px solid #161b22;
  border-radius: 6px;
}
body.dark div.container main div.input-group input,
body.dark div.container main div.input-group button {
  border: 2px solid #fff;
}
body div.container main div.input-group button {
  font-weight: bold;
  color: #161b22;
}
body.dark div.container main div.input-group button {
  color: #fff;
}
@media (min-width: 320px) {
  header h1 {
    text-align: center;
  }
}
/* MEDIA QUERIE */
</style>
