<template>
  <div class="container d-flex flex-column">
    <!-- HEADER -->
    <header class="container d-flex flex-column align-items-center">
      <!-- Icon github -->
      <div
        class="GitHubHome d-flex justify-content-between align-items-center mt-2"
      >
        <button>
          <i class="fas fa-bars"></i>
        </button>
        <a href="#">
          <i class="fab fa-github"></i>
        </a>
        <i class="alerts far fa-bell"></i>
      </div>

      <!-- End Icon github -->

      <!-- InfoUser Header -->

      <div class="perfil d-flex align-items-center mt-3">
        <span>
          <i class="fas fa-user"></i>
        </span>
        <br />
        <div class="infoHeader">
          <h1>Angelo Danrley</h1>
          <span>maikaodev</span>
        </div>
      </div>

      <!-- End InfoUser Header -->

      <!-- Description -->
      <div class="bio d-flex flex-column">
        <button class="text-start">Focusing</button>
        <span class="mt-3 mb-3">
          Beginner in programming, focused on Front-End.
        </span>
        <div class="d-grid gap-2">
          <button>Edit Profile</button>
        </div>
      </div>

      <!-- End Description -->

      <!-- Followers -->

      <div class="followers">
        <ul class="d-flex">
          <!-- Falta colocar as img -->
          <li>1 follower</li>
          <li>1 following</li>
          <li>Star</li>
        </ul>
      </div>

      <!-- End Followers -->
    </header>
    <!--END HEADER -->

    <!-- MAIN -->

    <main>
      <!-- MAIN-HEADER -->
      <section class="container text-center">
        <h2>Repositories</h2>

        <div class="input-group mb-2">
          <input
            type="text"
            class="form-control"
            placeholder="Find a repository..."
            aria-label="Recipient's username"
          />
        </div>

        <!-- Repositories -->
        <ul class="repositories">
          <li class="d-flex flex-column">
            <div class="d-flex justify-content-between align-items-center">
              <h3>clone-github-vuejs</h3>
              <span>Private</span>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <span>Vue</span>
              <br />
              <span>updated 20 hours ago</span>
            </div>
          </li>
          <li class="d-flex flex-column">
            <div class="d-flex justify-content-between align-items-center">
              <h3>clone-github-vuejs</h3>
              <span>Private</span>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <span>Vue</span>
              <br />
              <span>updated 20 hours ago</span>
            </div>
          </li>
          <li class="d-flex flex-column">
            <div class="d-flex justify-content-between align-items-center">
              <h3>clone-github-vuejs</h3>
              <span>Private</span>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <span>Vue</span>
              <br />
              <span>updated 20 hours ago</span>
            </div>
          </li>
        </ul>
        <!-- End Repositories -->
      </section>
      <!-- MAIN-HEADER -->
    </main>
    <!--END MAIN -->
    <footer class="container text-center">
      <button @click="$emit('ShowView2')">Reset system clone</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'CloneGitHub',
  emits: ['ShowView2']
}
</script>

<style>
/* HEADER */

header {
  border-top: 2px solid rgb(59, 67, 78);
}
div.GitHubHome {
  width: 100%;
  font-size: 24px;
}

div.GitHubHome button {
  background: none;
  border: none;
}
div.infoHeader span {
  font-weight: 400;
}
header div.bio {
  margin: 24px 0;
}
header .bio button {
  border: 2px solid rgb(59, 67, 78);
  padding: 4px;
  border-radius: 4px;
}

/*END HEADER */
.followers ul {
  padding: 0;
  gap: 8px;
}
.followers ul li {
  width: 80px;
}
/* MAIN */
main div.input-group {
  border: 2px solid #161b22;
  border-radius: 6px;
}

section .repositories {
  padding: 0;
  margin-top: 24px;
}
section .repositories li {
  border-top: 1px solid rgb(59, 67, 78);
  border-bottom: 1px solid rgb(59, 67, 78);

  padding: 8px;
}
/* END MAIN */
</style>
