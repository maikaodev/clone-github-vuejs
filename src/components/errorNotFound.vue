<template>
  <div>
    <div
      class="container d-flex flex-column justify-content-center align-items-center"
    >
      <h1>error, user not found...</h1>
      <ButtonResetSystem />
    </div>
  </div>
</template>

<script>
import ButtonResetSystem from "./ButtonResetSystem.vue";
export default {
  name: "ErrorNotFound",
  components: { ButtonResetSystem },
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
