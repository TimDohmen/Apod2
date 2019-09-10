<template>
  <div class="row">
    <div class="col-12">
      <div class="Apod">
        <!-- <button @click="getApod()">Get Photo</button> -->
        <h3>Date Taken {{pageApod.date}}</h3>
        <img :src="pageApod.url" />
        <p class="mt-3">{{pageApod.explanation}}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Apod",
  data() {
    return {};
  },
  mounted() {
    this.getApod();
  },
  computed: {
    pageApod() {
      return this.$store.state.picture;
    }
  },
  methods: {
    getApod() {
      this.$store.dispatch("getApod");
    }
  },
  components: {}
};
</script>


<style scoped>
img {
  height: 60vh;
  margin: auto;
}
</style>