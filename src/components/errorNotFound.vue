<template>
  <div>
    <div
      class="error container d-flex flex-column justify-content-center align-items-center"
    >
      <h1>error, user not found...</h1>
      <router-link to="/"> Reset system clone </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorNotFound'
}
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
}
</style>