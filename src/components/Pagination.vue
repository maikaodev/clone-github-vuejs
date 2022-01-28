<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="TotalPages"
      :total-visible="6"
      circle
      :dark="!this.$vuetify.theme.isDark"
      :light="this.$vuetify.theme.isDark"
      color="light-blue darken-4"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: { totalRepositories: Number },
  data() {
    return {
      TotalPages: [],
      page: Number,
      QueryParams: Number,
    };
  },
  methods: {
    calculatingTotalPages() {
      this.TotalPages = Math.ceil(this.totalRepositories / 6);
    },
    savingRoute() {
      this.$router.replace({ query: { page: this.page } });
    },
    emitPage() {
      this.$emit("navigate", this.page);
    },
    convertTypeRoute() {
      this.QueryParams = this.$route.query.page;
      this.page = Number(this.QueryParams) || 1;
    },
  },
  watch: {
    page() {
      this.emitPage();
      this.savingRoute();
    },
  },
  created() {
    this.calculatingTotalPages();
    this.convertTypeRoute();

    // alert(this.$vuetify.theme.dark);
  },
};
</script>
