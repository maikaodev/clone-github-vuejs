<template>
  <div>
    <!--ERROR USER -->
    <ErrorNotFound v-if="this.status === 'error'" />
    <!--END ERROR USER -->

    <div v-if="this.status === 'success'">
      <ErrorNotFound v-if="this.message === 'Not Found'" />
      <ErrorNotFound v-else-if="this.name === null" />
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

              <!-- Bio -->
              <div class="bio d-flex flex-column">
                <span v-show="this.bio != String" class="mt-3 mb-3">
                  {{ bio }}
                </span>
              </div>

              <!-- End Bio -->

              <!-- Followers and Description -->

              <div class="container followers">
                <div class="description d-flex flex-column text-left">
                  <!-- DESCRIPTION -->
                  <section>
                    <ul>
                      <li v-show="this.company">
                        <i class="fas fa-building"></i>
                        {{ company }}
                      </li>

                      <li v-show="this.location">
                        <i class="fas fa-map-marker-alt"></i>
                        {{ location }}
                      </li>

                      <p v-show="this.twitter">
                        <i class="fab fa-twitter"></i>
                        @ {{ twitter }}
                      </p>

                      <li v-show="this.blog">
                        <a :href="blog" target="_blank">
                          <i class="fas fa-link"></i>
                          {{ blog }}
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>
                <!-- END DESCRIPTION -->

                <!-- FOLLOWS -->
                <section>
                  <ul class="d-flex">
                    <!-- Falta colocar as img -->
                    <li>
                      <i class="fas fa-user-friends"></i>
                      {{ followers }} <span>followers</span>
                    </li>
                    <li>{{ following }} <span>following</span></li>
                  </ul>
                </section>
                <!-- END FOLLOWS -->
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
                <h1
                  v-if="this.totalRepositories === 0"
                  class="emptyRepositories"
                >
                  The aren't repositories...
                </h1>

                <ul v-else class="repositories">
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
              <Pagination
                :totalRepositories="totalRepositories"
                @navigate="geTinfo"
              />
            </main>
          </div>

          <!--END MAIN -->
        </div>
        <footer class="text-center">
          <router-link to="/"> Reset system clone </router-link>
        </footer>
      </div>
    </div>
    <div
      class="loading d-flex justify-content-center align-items-center"
      v-if="this.status === 'loading'"
    >
      <img src="../assets/images/loading-gif.gif" alt="Loading..." />
    </div>
  </div>
</template>

<script>
import ErrorNotFound from "./errorNotFound.vue";
import Pagination from "./Pagination.vue";

export default {
  name: "CloneGitHub",
  components: { ErrorNotFound, Pagination },
  data() {
    return {
      status: "loading",
      gitUser: String,
      message: String,
      avatar: null,
      bio: String,
      name: String,
      nickname: String,
      company: String,
      location: String,
      twitter: String,
      blog: String,
      followers: String,
      following: String,
      totalRepositories: Number,
      repositories: [],
      pageF: Number
    };
  },
  methods: {
    async geTinfo(page) {
      this.gitUser = this.$route.params.id || this.user;

      const url = `https://api.github.com/users/${this.gitUser}`;

      await fetch(url)
        .then((response) => response.json())
        .then((infoGit) => {
          this.avatar = infoGit.avatar_url;
          this.bio = infoGit.bio;
          this.name = infoGit.name;
          this.nickname = infoGit.login;
          this.company = infoGit.company;
          this.location = infoGit.location;
          this.twitter = infoGit.twitter_username;
          this.blog = infoGit.blog;
          this.followers = infoGit.followers;
          this.following = infoGit.following;
          this.totalRepositories = infoGit.public_repos;
          this.message = infoGit.message;
          this.status = "success";
        })
        .catch(() => {
          this.status = "error";
        });
        this.pageF = page || this.$route.query.page
      const urlRepositories = `https://api.github.com/users/${this.gitUser}/repos?per_page=6&page=${this.pageF}`;
      await fetch(urlRepositories)
        .then((response) => response.json())
        .then((infoRepositories) => {
          this.repositories = infoRepositories;
        })
        .catch(() => {
          this.status = "error";
        });
    },
  },
  created() {
    this.geTinfo();
  },
};
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
header .description {
  margin-bottom: 8px;
}
header .description p {
  margin: 0;
}
/*END HEADER */
.followers {
  padding: 0;
}
.followers a {
  text-decoration: none;
}
.followers a:hover {
  color: #222;
}
body.dark .followers a:hover {
  color: #fff;
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
  height: 500px;
}
.emptyRepositories {
  margin-top: 32px;
}
section .repositories li {
  border-bottom: 1px solid rgb(59, 67, 78);
  padding: 8px 0px;
  text-align: left;
}

/* END MAIN */

/* FOOTER */
footer {
  margin-top: 40px;
}
footer a {
  background-color: #161b22;
  color: #fff;
  border: 2px solid #161b22;
  border-radius: 4px;

  text-decoration: none;

  padding: 8px 40px;
}
body.dark footer a {
  background-color: #fff;
  color: #161b22;
}

/* LOADING   */
.loading {
  height: 80vh;
}
.loading img {
  width: 50px;
  height: 50px;
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
