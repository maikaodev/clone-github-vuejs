<template>
  <div>
    <nav aria-label=" navigation example">
      <ul class="container d-flex justify-content-center m-0 p-0">
        <li>
          <a @click="Previous">Previous</a>
        </li>

        <li v-for="(page, index) in TotalPages" :key="index">
          <a
            class="link"
            :class="{ active: currentPage == page }"
            @click="navigate(page)"
            >{{ page }}
          </a>
        </li>

        <li>
          <a @click="Next">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: { totalRepositories: Number },
  data() {
    return {
      TotalPages: [],
      currentPage: this.$route.query.page || 1,
    };
  },
  methods: {
    Calculating() {
      this.TotalPages = Math.ceil(this.totalRepositories / 6);
    },
    navigate(page) {
      this.currentPage = page;
      this.EmitCurrentPage();
    },
    Previous() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
      this.EmitCurrentPage();
    },
    Next() {
      if (this.currentPage < this.TotalPages) {
        this.currentPage++;
      }
      this.EmitCurrentPage();
    },
    SavingRoute() {
      this.$router.replace({ query: { page: this.currentPage } });
    },
    EmitCurrentPage() {
      this.$emit("navigate", this.currentPage);
    },
  },
  watch: {
    currentPage() {
      this.SavingRoute();
    },
  },
  created() {
    this.Calculating();
    this.SavingRoute();
  },
};
</script>

<style scoped>
nav ul {
  flex-wrap: wrap;
}
nav ul li{
  height:40px
}
nav ul li a {
  padding: 8px 10px;
  text-decoration: none;
}
nav ul li .active {
  background-color: #344050;
  border: 1px solid #161b22;

  color: #fff;
}
body.dark nav ul li .active {
  background-color: #344050;
}
nav ul li a {
  color: #161b22;
  background-color: #fff;

  border: 1px solid #161b22;

  cursor: pointer;
}
body.dark nav ul li a {
  border: 1px solid #fff;
  background-color: #161b22;
  color: #fff;
}
</style>
