<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="length"
      :total-visible="6"
      circle
    ></v-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: { totalRepositories: Number },
  data() {
    return {
      length: [],
      page:Number,  
      QueryParams: Number
    };
  },
  methods: {
    Calculating() {
      this.length = Math.ceil(this.totalRepositories / 6);
    },
    SavingRoute() {
      this.$router.replace({ query: { page: this.page } });
    },
    EmitPage() {
      this.$emit("navigate", this.page);
    },
    ConvertTypeRoute(){
        this.QueryParams =  this.$route.query.page
        this.page =  Number(this.QueryParams) || 1
    }
  },
  watch: {
    page() {
      this.EmitPage();
      this.SavingRoute(); 
    },
  },
  created() {
    this.Calculating();
    this.ConvertTypeRoute();
  },
};
</script>