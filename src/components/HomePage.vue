<template>
  <div class="container">
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
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            @click="$emit('ShowView')"
          >
            Run
          </button>
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
  emits: ['ShowView']
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

body div.container {
  display: grid;
  grid-auto-rows: 150px 400px 150px;
  grid-template-areas:
    'header'
    'main';
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
}
</style>
