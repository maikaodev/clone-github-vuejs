<template>
  <div>
    <!--ERROR USER -->
    <ErrorNotFound v-if="this.status === 'error'" />

    <!--END ERROR USER -->

    <div v-if="this.status === 'success'">
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
            </div>

            <!-- End Description -->

            <!-- Followers -->

            <div class="container followers">
              <div class="twitter d-flex flex-column text-left">
                <p>
                  <i class="fab fa-twitter"></i>
                  @{{ twitter }}
                </p>
                <p>
                  <i class="fas fa-link"></i>
                  {{ blog }}
                </p>
              </div>
              <ul class="d-flex">
                <!-- Falta colocar as img -->
                <li>
                  <i class="fas fa-user-friends"></i>
                  {{ followers }} <span>followers</span>
                </li>
                <li>{{ following }} <span>following</span></li>
              </ul>
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
        <router-link to="/"> Reset system clone </router-link>
      </footer>
    </div>
    <div v-if="this.status === 'loading'">
      <h1>LOADING</h1>
    </div>
  </div>
</template>

<script>
import ErrorNotFound from './errorNotFound.vue'
export default {
  name: 'CloneGitHub',
  components: { ErrorNotFound },
  data() {
    return {
      status: 'loading',
      Auser: String,
      avatar: null,
      bio: null,
      name: null,
      nickname: null,
      twitter: null,
      blog: null,
      followers: null,
      following: null,
      totalRepositories: null,
      repositories: []
    }
  },
  methods: {
    async geTinfo() {
      this.Auser = this.$route.params.id || this.user

      const url = `https://api.github.com/users/${this.Auser}`

      await fetch(url)
        .then(response => response.json())
        .then(infoGit => {
          this.avatar = infoGit.avatar_url
          this.bio = infoGit.bio
          this.name = infoGit.name
          this.nickname = infoGit.login
          this.twitter = infoGit.twitter_username
          this.blog = infoGit.blog
          this.followers = infoGit.followers
          this.following = infoGit.following
          this.totalRepositories = infoGit.public_repos
          this.status = 'success'
        })
        .catch(() => {
          this.status = 'error'
        })

      const urlRepositories = `https://api.github.com/users/${this.Auser}/repos`
      await fetch(urlRepositories)
        .then(response => response.json())
        .then(infoRepositories => {
          this.repositories = infoRepositories
        })
        .catch(() => {
          this.status = 'error'
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
header .perfil h1 {
  margin: 0;
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
  object-fit: contain;
}
div.infoHeader span {
  font-weight: 400;
}
header div.bio {
  margin-top: 24px;
}
header .bio button {
  border: 2px solid rgb(59, 67, 78);
  padding: 4px;
  border-radius: 4px;
}
header .twitter {
  margin-bottom: 8px;
}
header .twitter p {
  margin: 0;
}
/*END HEADER */
.followers {
  padding: 0;
}
.followers ul {
  padding: 0;
}
.followers ul li {
  margin-right: 8px;
}

/* MAIN */

section .repositories {
  padding: 0;
  margin-top: 24px;
}
section .repositories li {
  border-bottom: 1px solid rgb(59, 67, 78);
  padding: 8px 0px;
  text-align: left;
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
@media (max-width: 425px) {
  footer button {
    width: 250px;
  }
}

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
