<template>
  <div class="row">
    <div class="ApodSearch col-12 mt-3">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Date in YYYY - MM - DD Form..."
          aria-describedby="button-addon1"
          v-model="query"
        />
        <button
          class="btn btn-outline-primary"
          type="button"
          id="button-addon1"
          @click="searchApod()"
        >Search</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ApodSearch",
  data() {
    return { query: "" };
  },
  computed: {},
  methods: {
    searchApod() {
      this.$store.dispatch("apodSearch", this.query);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>