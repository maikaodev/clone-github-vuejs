<template>
  <div>
    <div
      class="container d-flex flex-column justify-content-center align-items-center"
    >
      <h1>error 404, page not found...</h1>
      <router-link class="text-center" to="/">Back to home page</router-link>
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
  height: 80vh;
  margin: 0 auto;
}
div a {
  width: 200px;
  padding: 4px 8px;

  font-weight: bold;

  border: 2px solid #161b22;
  text-decoration: none;
}
</style>
