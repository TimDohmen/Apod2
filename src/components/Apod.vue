<template>
  <div class="Apod">
    <!-- <button @click="getApod()">Get Photo</button> -->
    <h3>Date Taken {{pageApod.date}}</h3>
    <img :src="pageApod.url" />
    <p>{{pageApod.explanation}}</p>
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
  margin: auto;
}
</style>