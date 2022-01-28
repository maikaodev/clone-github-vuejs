<template>
  <div>
    <div
      class="container d-flex flex-column justify-content-center align-items-center"
    >
      <h1>error 404, page not found...</h1>

      <v-btn class="primary secondary--text text-center" to="/"
        >Back to home page</v-btn
      >
    </div>
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
  height: 100vh;
  margin: 0 auto;
}
div a {
  font-weight: bold;
  text-decoration: none;
}
</style>
