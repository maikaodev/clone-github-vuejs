<template>
  <div>
    <!--ERROR USER -->
    <div v-if="this.name === null">
      <div
        class="error container d-flex flex-column justify-content-center align-items-center"
      >
        <h1>user error not found...</h1>
        <button @click="$emit('ShowView2'), $emit('resetUser')">
          Reset system clone
        </button>
      </div>
    </div>
    <!--END ERROR USER -->

    <div v-else>
      <div class="container d-flex flex-column">
        <div id="container">
          <!-- HEADER -->
          <header class="container d-flex flex-column">
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
              <img :src="avatar" alt="userPhoto" class="me-3" />
              <div class="infoHeader">
                <h1>{{ name }}</h1>
                <span>{{ nickname }}</span>
              </div>
            </div>

            <!-- End InfoUser Header -->

            <!-- Description -->
            <div class="bio d-flex flex-column">
              <button class="text-start">Focusing</button>
              <span class="mt-3 mb-3">
                {{ bio }}
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
                <li>{{ followers }} follower</li>
                <li>{{ following }} following</li>
                <li>Star</li>
              </ul>
              <div class="twitter d-flex text-center">
                <span class="me-2"><i class="fab fa-twitter"></i></span>
                <p>@{{ twitter }}</p>
              </div>
            </div>

            <!-- End Followers -->
          </header>
          <!--END HEADER -->

          <!-- MAIN -->

          <main>
            <!-- MAIN-HEADER -->
            <section class="container text-center">
              <h2>Repositories {{ totalRepositories }}</h2>

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
                <li
                  class="d-flex flex-column"
                  v-for="(repository, index) in repositories"
                  :key="index"
                >
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <h3>
                      {{ repository.name }}
                    </h3>
                    <span>{{ repository.visibility }}</span>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <span>{{ repository.language }}</span>
                  </div>
                </li>
              </ul>
              <!-- End Repositories -->
            </section>
            <!-- MAIN-HEADER -->
          </main>
        </div>
        <!--END MAIN -->
      </div>
      <footer class="container text-center">
        <button @click="$emit('ShowView2'), $emit('resetUser'), 'clear'">
          Reset system clone
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CloneGitHub',
  emits: ['ShowView2', 'resetUser'],
  props: { user: String },
  data() {
    return {
      Auser: String,
      avatar: null,
      bio: null,
      name: null,
      nickname: null,
      twitter: null,
      followers: null,
      following: null,
      totalRepositories: null,
      repositories: []
    }
  },
  methods: {
    async geTinfo() {
      this.Auser = this.user

      const url = `https://api.github.com/users/${this.Auser}`

      await fetch(url)
        .then(response => response.json())
        .then(infoGit => {
          this.avatar = infoGit.avatar_url
          this.bio = infoGit.bio
          this.name = infoGit.name
          this.nickname = infoGit.login
          this.twitter = infoGit.twitter_username
          this.followers = infoGit.followers
          this.following = infoGit.following
          this.totalRepositories = infoGit.public_repos
        })

      const urlRepositories = `https://api.github.com/users/${this.Auser}/repos`
      await fetch(urlRepositories)
        .then(response => response.json())
        .then(infoRepositories => {
          this.repositories = infoRepositories
        })
    }
  },
  created() {
    this.geTinfo()
  }
}
</script>

<style scoped>
/* HEADER */
header {
  align-items: center;
}
div.GitHubHome {
  width: 100%;
  font-size: 24px;
}

div.GitHubHome button {
  background: none;
  border: none;
}
div.perfil img {
  height: 50px;
  border-radius: 50%;
  border: 2px solid rgb(59, 67, 78);
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
}
.followers ul li {
  width: 80px;
  margin-right: 4px;
}
/* MAIN */

section .repositories {
  padding: 0;
  margin-top: 24px;
}
section .repositories li {
  border-bottom: 1px solid rgb(59, 67, 78);
  padding: 8px;
}

/* END MAIN */

/* FOOTER */
footer button {
  width: 40%;
  margin: 24px;
  padding: 4px 8px;
  background-color: #222;
  color: #fff;
  border: 2px solid #222;
}

/* END FOOTER */
.error {
  height: 80vh;
  margin: 0 auto;
}
.error button {
  width: 200px;
  padding: 4px 8px;

  font-weight: bold;

  background-color: #161b22;
  color: #fff;
  border: 2px solid #161b22;
}

/* MEDIA QUERIES */

@media (min-width: 768px) {
  #container {
    width: 100%;

    display: flex;
    justify-content: space-between;
  }
  header {
    width: 40%;
    margin: 8px 0;
    align-items: start;
  }
  div.GitHubHome button,
  div.GitHubHome a,
  div.GitHubHome i {
    display: none;
  }
  div.perfil {
    flex-direction: column;
  }
  div.perfil img {
    height: 250px;
  }
  div.followers ul li:nth-child(3) {
    display: none;
  }
  main {
    width: 60%;
  }
}
</style>
