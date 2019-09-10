<template>
  <div class="container">
    <div class="home">
      <div class="row">
        <div class="col-12 center">
          <h1>
            <img alt="Vue logo" src="../assets/logo.png" />
            POD
          </h1>
        </div>
      </div>
    </div>
    <ApodSearch />
    <Apod />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Apod from "../components/Apod.vue";
import ApodSearch from "../components/ApodSearch.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Apod,
    ApodSearch
  }
};
</script>
<style scoped>
img {
  transform: rotate(180deg);
  height: 75px;
}
</style>
