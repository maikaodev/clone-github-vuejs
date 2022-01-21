<template>
  <div
    class="container d-flex flex-column justify-content-center align-items-center"
  >
    <h1>Page not found</h1>

    <v-btn class="primary secondary--text text-center" to="/"
      >Back to home page</v-btn
    >
  </div>
</template>

<script>
export default {
  name: "CatchAll",
};
</script>

<style scoped>
/* END FOOTER */
div {
  margin: auto;
  height: 80vh;
}
div a {
  font-weight: bold;
  text-decoration: none;
}
</style>
