<template>
  <div id="app" class="wrapper">
    <Headr></Headr>
    <Navigation></Navigation>
    <div class="container content-wrapper">
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content-wrapper {
  margin-top: 2%;
}

.pointer {
cursor: pointer;
}
.container {
  height: 100%;
  margin-top: 1%;
}

</style>

<script>
import { Headr, Navigation } from "./components/index.js";
export default {
  components: {
    Headr,
    Navigation,
  },
};
</script>