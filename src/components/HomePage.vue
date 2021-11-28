<template>
  <div class="container">
    <header>
      <!-- THEME BUTTON -->

      <div class="d-flex justify-content-end">
        <button
          class="btn"
          v-html="buttonTheme"
          v-on:click="changeTheme"
        ></button>
      </div>

      <!-- END THEME BUTTON -->
      <!-- H1 -->

      <h1 class="text-center">
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
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Run
          </button>
        </div>
      </div>
      <!-- INPUT USERNAME -->
    </main>
    <!-- Main -->
    <footer class="container-fluid">
      <h4 class="text-center">My social networks</h4>
      <ul class="d-flex justify-content-between align-items-center">
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
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  data() {
    const savedButtonTheme = localStorage.getItem('buttonTheme')
    const savedCurrentTheme = localStorage.getItem('currentTheme')

    return {
      buttonTheme: savedButtonTheme
        ? savedButtonTheme
        : '<i class="fas fa-moon"></i>',
      currentTheme: savedCurrentTheme ? savedCurrentTheme : 'default'
    }
  },
  methods: {
    changeTheme() {
      const darkTheme = '<i class="fas fa-moon"></i>'
      const lightTheme = '<i class="far fa-moon"></i>'

      if (this.buttonTheme === darkTheme) {
        this.buttonTheme = lightTheme
        this.currentTheme = 'Dark'
      } else {
        this.buttonTheme = darkTheme
        this.currentTheme = 'Light'
      }
    },
    validatingClass() {
      const getBody = document.getElementById('body')

      if (this.currentTheme === 'Dark') {
        getBody.classList.toggle('dark')
      } else {
        getBody.classList.remove('dark')
      }
    }
  },
  watch: {
    buttonTheme(val) {
      localStorage.setItem('buttonTheme', val)
      this.validatingClass()
    },
    currentTheme(val) {
      localStorage.setItem('currentTheme', val)
    }
  },
  created() {
    this.validatingClass()
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
}
html,
body {
  width: 100vw;
  height: 100vh;

  overflow: hidden;

  color: #333;
}
body.dark,
body.dark i,
body.dark button {
  background-color: #333;
  color: #fff;
}
body div.container {
  display: grid;
  grid-auto-rows: 150px 400px 150px;
  grid-template-areas:
    'header'
    'main'
    'footer';
}
body div.container header {
  grid-area: header;
}
body div.container main {
  grid-area: main;
}
body div.container footer {
  grid-area: footer;
}
body div.container main div.input-group input,
body div.container main div.input-group button {
  height: 50px;
}
body div.container footer ul {
  padding: 0;
}
body div.container footer ul li a {
  color: #333;
  font-size: 32px;
}
</style>
