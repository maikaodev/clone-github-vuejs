<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination container d-flex justify-content-center m-0 p-0">
        <li class="page-item">
          <a class="page-link" @click="Previous">Previous</a>
        </li>

        <li v-for="(page, index) in TotalPages" :key="index" >
          <a class="link page-link" :class="{ active: currentPage === page}" @click="navigate(page)">{{ page }}</a>
        </li>

        <li class="page-item">
          <a class="page-link" @click="Next">Next</a>
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
      currentPage: this.$route.query.page || 1
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
      this.EmitCurrentPage()
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
    }
  },
  created() {
    this.Calculating();
  },
};
</script>

<style scoped>
nav ul {
  flex-wrap: wrap;
}
nav ul .active {
background-color: #161b22;
color: #fff;
}
body.dark nav ul .active {
 background-color: #fff;
 color: #161b22;
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
nav ul li a:hover {
  color: #161b22;
  border: 1px solid #161b22;
}
body.dark nav ul li a:hover {
  background-color: #344050;
  color: #fff;
}
</style>
