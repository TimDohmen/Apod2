<template>
  <div class="float-right">
    <div class="CatFact">
      <img
        src="https://notrunbycats.com/wp-content/uploads/2018/01/cropped-cat-head-1.png"
        @click="getFact"
      />
    </div>
  </div>
</template>


<script>
export default {
  name: "CatFact",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
img {
  height: 5vh;
}
</style>