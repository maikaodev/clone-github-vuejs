<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination d-flex justify-content-center m-0">
        <li class="page-item">
          <a class="page-link" @click="Previous">Previous</a>
        </li>

        <li v-for="(page, index) in TotalPages" :key="index">
          <a class="link page-link" @click="navigate(page)">{{ page }}</a>
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
  props: { totalRepositories: Number, checkPage: Number },
  data() {
    const savedCurrentPage = localStorage.getItem("currentPage");
    return {
      TotalPages: [],
      currentPage: savedCurrentPage ? savedCurrentPage : 1,
    };
  },
  methods: {
    Calculating() {
      this.TotalPages = Math.ceil(this.totalRepositories / 6);
    },
    navigate(page) {
      this.currentPage = page;
      this.$emit("navigate", this.currentPage);
    },
    Previous() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
      this.$emit("navigate", this.currentPage);
    },
    Next() {
      if (this.currentPage < this.TotalPages) {
        this.currentPage++;
      }
      this.$emit("navigate", this.currentPage);
    },
    validatingPage() {
      const savedCurrentPage = localStorage.getItem("currentPage");
      this.currentPage = savedCurrentPage;
      this.$emit("navigate", this.currentPage);
    },
  },
  watch: {
    currentPage(val) {
      localStorage.setItem("currentPage", val);
    },
  },
  created() {
    this.Calculating();
    this.validatingPage();
  },
};
</script>

<style scoped>
nav ul {
  width: 753px;
  flex-wrap: wrap;
}
nav ul li a {
  color: #161b22;
  background-color: #fff;

  border: 1px solid #161b22;
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

  cursor: pointer;
}
</style>
