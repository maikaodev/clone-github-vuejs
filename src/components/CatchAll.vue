<template>
  <div>
    <div class="error container d-flex flex-column justify-content-center align-items-center">
      <h1>error 404, page not found...</h1>
      <router-link class="text-center" to="HomePage"
        >Back to home page</router-link
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
.error {
  height: 80vh;
  margin: 0 auto;
}
.error a {
  width: 200px;
  padding: 4px 8px;

  font-weight: bold;

  background-color: #161b22;
  color: #fff;
  border: 2px solid #161b22;
  text-decoration: none;
}

body.dark .error a {
  background-color: #fff;
  border: 2px solid #fff;
  color: #161b22;
}
</style>
