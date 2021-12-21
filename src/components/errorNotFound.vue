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
