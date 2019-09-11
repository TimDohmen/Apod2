<template>
  <div class="float-right">
    <div class="CatFact">
      <h5>
        {{catFact.text}}
        <img
          class="rotate"
          src="https://notrunbycats.com/wp-content/uploads/2018/01/cropped-cat-head-1.png"
          @click="getFact()"
        />
      </h5>
    </div>
  </div>
</template>


<script>
export default {
  name: "CatFact",
  data() {
    return {};
  },
  computed: {
    catFact() {
      return this.$store.state.catFact;
    }
  },
  methods: {
    getFact() {
      this.$store.dispatch("getFact");
    }
  },
  components: {}
};
</script>


<style scoped>
img {
  height: 5vh;
  border: 5, solid, white;
}
.rotate {
  animation: rotation 8s infinite linear;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>