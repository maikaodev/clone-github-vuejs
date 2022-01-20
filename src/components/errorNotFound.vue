<template>
  <div>
    <div
      class="container d-flex flex-column justify-content-center align-items-center"
    >
      <h1>error, user not found...</h1>
      <v-btn elevation="2" class="primary secondary--text text-center" to="/">
        Reset system clone
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorNotFound",
};
</script>
<style scoped>
div {
  height: 80vh;
  margin: 0 auto;
}
div a {
  font-weight: bold;

  text-decoration: none;
}
</style>
