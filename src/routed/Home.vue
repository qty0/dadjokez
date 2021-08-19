<template>
  <div>
    <div v-for="jokes in res.results" :key="jokes.id">
      <div class="joke-wrapper">
        <Card
          :id="jokes.id"
          :title="`joke no.: ${jokes.id}`"
          :text="jokes.joke"
        ></Card>
      </div>
    </div>
    <div class="btn-group w-100 navigation">
      <div
        href="#"
        class="btn btn-white btn-icon"
        aria-label="Button"
        @click="addPage(-1)"
      >
        <LeftArrow> </LeftArrow>
      </div>
      <div class="btn btw-white btn-icon">
        {{ page }}
      </div>
      <div
        class="btn btn-white btn-icon"
        aria-label="Button"
        @click="addPage(1)"
      >
        <RightArrow> </RightArrow>
      </div>
    </div>
  </div>
</template><script>
import Card from "../components/index.js";
import RightArrow from "../components/svgs/RightArrow.vue";
import LeftArrow from "../components/svgs/LeftArrow.vue";

import axios from "axios";
export default {
  methods: {
    queryJokes() {
      const headers = { Accept: "application/json" };
      const url = "https://icanhazdadjoke.com/search";
      const params = { page: this.page, limit: 5 };
      axios
        .get(url, { headers: headers, params: params })
        .then((res) => (this.res = res.data));
    },
    addPage(int) {
      this.page += int;
      if (this.page < 1) {
        this.page = 1;
      }
      this.queryJokes();
    },
  },
  data() {
    return {
      res: [],
      page: 1,
    };
  },
  components: {
    Card,
    LeftArrow,
    RightArrow,
  },
  mounted: function () {
    this.queryJokes();
  },
};
</script>

<style scoped>
.navigation {
  max-width: 40%;
  margin-top: 3%;
}
</style>