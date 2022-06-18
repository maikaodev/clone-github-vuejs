<template>
  <div>
    <!--ERROR USER -->
    <UserNotFound v-if="this.status === 'error'" />
    <!--END ERROR USER -->

    <div v-if="this.status === 'success'">
      <!-- <UserNotFound v-if="this.message === 'Not Found'" /> -->
      <!-- <UserNotFound v-else-if="this.name === null" /> -->
      <div id="geral">
        <div class="d-flex flex-column p-0">
          <div id="container">
            <!-- HEADER -->
            <header class="container d-flex flex-column">
              <!-- InfoUser Header -->

              <div class="perfil">
                <div>
                  <img :src="avatar" alt="userPhoto" class="me-3" />
                </div>
                <div class="infoHeader">
                  <h1>{{ name }}</h1>
                  <span>{{ nickname }}</span>
                </div>
              </div>

              <!-- End InfoUser Header -->

              <!-- Bio -->
              <div class="bio d-flex flex-column">
                <span class="mt-3 mb-3">
                  {{ bio }}
                </span>
              </div>

              <!-- End Bio -->

              <!-- Followers and Description -->

              <div class="followers">
                <div class="description">
                  <!-- DESCRIPTION -->
                  <section>
                    <ul>
                      <li v-show="this.company">
                        <i class="fas fa-building"></i>
                        <span>{{ company }}</span>
                      </li>

                      <li v-show="this.location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span> {{ location }}</span>
                      </li>

                      <li v-show="this.twitter">
                        <i class="fab fa-twitter"></i>
                        <span>@{{ twitter }}</span>
                      </li>

                      <li v-show="this.blog">
                        <a :href="blog" target="_blank">
                          <i class="fas fa-link"></i>
                          <span id="blog">{{ blog }}</span>
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

                <!-- Repositories -->
                <h1
                  v-if="this.totalRepositories === 0"
                  class="emptyRepositories"
                >
                  No repository...
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
    geTinfo(page) {
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
#geral {
  width: 100vw;
}

/* HEADER */

div .perfil {
  display: flex;
  align-items: center;
}
header .perfil h1 {
  margin: 0;
}
div.perfil img {
  height: 60px;
  border-radius: 50%;
  border: 2px solid rgb(59, 67, 78);
  object-fit: contain;
}
.description section ul li i {
  font-size: 16px;
  margin-right: 6px;
}
.description ul li #blog {
  font-size: 14px;
}

/*END HEADER */
.followers,
.followers ul {
  padding: 0;
}
.followers ul li {
  margin-right: 8px;
}
.followers a {
  text-decoration: none;
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
@media (max-width: 374px) {
  .description #blog {
    font-size: 16px;
  }
}
@media (max-width: 426px) {
  .emptyRepositories {
    height: 135px;
  }
}
@media (min-width: 767px) {
  div.perfil {
    flex-direction: column;
    align-items: start;
  }
  div.perfil img {
    height: 250px;
  }
  #container {
    width: 90vw;
    display: flex;
    margin: 0 auto;
  }
  header {
    width: 40vw;
    margin-top: 30px;
  }

  main {
    width: 60vw;
  }
}
@media (min-width: 1023px) {
  header .bio {
    width: 300px;
  }
}
</style>
