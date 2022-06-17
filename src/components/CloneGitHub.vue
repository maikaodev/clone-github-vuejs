<template>
  <div>
    <!--ERROR USER -->
    <UserNotFound v-if="this.status === 'error'" />
    <!--END ERROR USER -->

    <div v-if="this.status === 'success'">
      <!-- <UserNotFound v-if="this.message === 'Not Found'" /> -->
      <!-- <UserNotFound v-else-if="this.name === null" /> -->
      <div>
        <div class="container d-flex flex-column p-0">
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
                v-show="this.totalRepositories"
              />
            </main>
          </div>

          <!--END MAIN -->
        </div>
        <footer class="text-center">
          <ButtonResetSystem />
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
import UserNotFound from "./UserNotFound.vue";
import Pagination from "./Pagination.vue";
import ButtonResetSystem from "./ButtonResetSystem.vue";
export default {
  name: "CloneGitHub",
  components: { UserNotFound, Pagination, ButtonResetSystem },
  data() {
    return {
      status: "loading",
      gitUser: String,
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
      $page: Number,
    };
  },
  methods: {
    async geTinfo(page) {
      //User
      this.gitUser = this.$route.params.id || this.user;
      //Repositories
      this.$page = page || this.$route.query.page;

      //User
      const url = fetch(`https://api.github.com/users/${this.gitUser}`).then(
        (res) => res.json()
      );

      //Repositories
      const urlRepositories = fetch(
        `https://api.github.com/users/${this.gitUser}/repos?per_page=6&page=${this.$page}`
      ).then((res) => res.json());

      try {
        const allData = Promise.all([url, urlRepositories]);
        allData.then((response) => {
          console.log(response);
          if (response[0].message === "Not Found") {
            this.status = "error";
            throw new Error("Not Found");
          } else {
            this.avatar = response[0].avatar_url;
            this.bio = response[0].bio;
            this.name = response[0].name;
            this.nickname = response[0].login;
            this.company = response[0].company;
            this.location = response[0].location;
            this.twitter = response[0].twitter_username;
            this.blog = response[0].blog;
            this.followers = response[0].followers;
            this.following = response[0].following;
            this.totalRepositories = response[0].public_repos;
            this.repositories = response[1];
          }
          this.status = "success";
        });
      } catch (err) {
        //TODO -> Passar o Error como parâmetro para o component exibir a mensagem
        console.log(err);
      }
    },
  },
  created() {
    this.geTinfo();
  },
  watch: {
    name(val) {
      if (val === null) {
        this.status = "error";
      }
    },
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
  height: 542px;
}
section .repositories li {
  border-bottom: 1px solid rgb(59, 67, 78);
  padding: 8px 0px;
  text-align: left;
}

/* END MAIN */

/* FOOTER */
footer {
  margin-top: 12px;
}
/* END FOOTER */

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
  section .repositories {
    padding: 0;
    margin-top: 24px;
    height: 525px;
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
@media (max-width: 426px) {
  .emptyRepositories {
    height: 135px;
  }
}
</style>
