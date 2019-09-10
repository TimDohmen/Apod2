<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
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
