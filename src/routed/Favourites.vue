<template>
  <div class="favourites-wrapper">
      <div v-for="jokes in res" :key="jokes.id">
          <Card
          :id="jokes.id"
          :title="`joke no.: ${jokes.id}`"
          :text="jokes.joke"
        ></Card>
      </div>
  </div>
</template>
<script>
import axios from "axios";
import Card from "../components/index.js"
export default {
  methods: {
    query(id) {
      const headers = { Accept: "application/json" };
      const url = `https://icanhazdadjoke.com/j/${id}`;
      axios.get(url, { headers: headers }).then((res) => (this.res.push(res.data)));
    },
  },
  components: {
    Card
  },
  data() {
    return {
      res: [],
    };
  },
  created() {
    const self = this;
    for (const fav of this.$favs) {
      self.query(fav);
    }
  },
};
</script>