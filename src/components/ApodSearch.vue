<template>
  <div class="row">
    <div class="ApodSearch col-6 mt-3 mx-auto">
      <div class="input-group mb-3">
        <input
          type="date"
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
        <button
          class="btn btn-outline-primary"
          type="button"
          id="button-addon1"
          @click="randomApod()"
        >Random</button>
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
    },
    randomApod() {
      this.$store.dispatch("randomPic");
    }
  },
  components: {}
};
</script>


<style scoped>
</style>