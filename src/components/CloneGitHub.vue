<template>
  <div class="container">
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
          <button class="">Edit Profile</button>
        </div>
      </div>

      <!-- End Description -->

      <!-- Followers -->

      <div class="followers container">
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
      <section>
        <ul class="d-flex justify-content-around">
          <!-- MENU LIST -->
          <li>
            Overview
            <!-- MENU OVERVIEW -->
            <div>
              <span>Popular repositories</span>
              <ul>
                <!-- LIST REPOSITORIES -->
                <li>respositorio 1</li>
                <li>respositorio 2</li>
                <li>respositorio 3</li>
                <li>respositorio 4</li>
                <li>respositorio 5</li>
                <li>respositorio 6</li>
                <!--END LIST REPOSITORIES -->
              </ul>
            </div>
            <!--END MENU OVERVIEW -->
          </li>
          <li>Repositories</li>
          <li>Projects</li>
        </ul>
        <!-- MENU LIST -->
      </section>
      <!-- MAIN-HEADER -->
    </main>
    <!--END MAIN -->
  </div>
</template>

<script>
export default {
  name: 'CloneGitHub',
  props: {
    msg: String
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  text-decoration: none;
  list-style-type: none;

  color: #fff;
}
html,
body {
  width: 100vw;
  height: 100vh;
}
body {
  background-color: #161b22;
  color: #fff;
}
/* HEADER */
body div.container header .GitHubHome {
  width: 100%;
  font-size: 32px;
}
body div.container header .GitHubHome .alerts {
  font-size: 16px;
}
body div.container header .GitHubHome button {
  background: none;
  border: none;
}
body div.container header .infoHeader span {
  font-weight: 400;
}
body div.container header .bio {
  margin: 24px 0;
}
body div.container header .bio button {
  background-color: #21262d;
  border: 1px solid rgb(59, 67, 78);
  padding: 4px;
  border-radius: 4px;
}
body div.container header .followers ul {
  padding: 0;
}
body div.container header .followers ul li {
  margin-right: 10px;
}

/*END HEADER */

/* MAIN */
body div.container main section ul {
  padding: 0;
}
/* END MAIN */
</style>
