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
            type="text"
            class="form-control"
            placeholder="username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            v-model="user"
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
  },
  watch: {
    user(val) {
      const buttonRun = document.getElementById('button-run')
      if (val === '') {
        buttonRun.classList.add('disabled')
      } else {
        buttonRun.classList.remove('disabled')
      }
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
body div.container main div.input-group a {
  height: 50px;
  border: 2px solid #161b22;
  border-radius: 6px;
}
body.dark div.container main div.input-group input,
body.dark div.container main div.input-group a {
  border: 2px solid #fff;
}
body div.container main div.input-group a {
  font-weight: bold;
  color: #161b22;
}
body.dark div.container main div.input-group a {
  color: #fff;
}

@media (min-width: 320px) {
  header h1 {
    text-align: center;
  }
}
/* MEDIA QUERIE */
</style>
