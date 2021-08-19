<template>
  <div>
    <div class="input-group mb-2">
      <input
        type="text"
        v-model="term"
        class="form-control"
        placeholder="Search for…"
      />
      <button class="btn" @click="query" type="button">Go!</button>
    </div>
    <div v-for="jokes in res.results" :key="jokes.id">
      <div class="joke-wrapper">
        <Card
          :id="jokes.id"
          :title="`joke no.: ${jokes.id}`"
          :text="jokes.joke"
        ></Card>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Card from "../components/index.js";
export default {
  data() {
    return {
      term: "",
      res: [],
    };
  },
  components: {
    Card,
  },
  methods: {
    query() {
      const headers = { Accept: "application/json" };
      const url = "https://icanhazdadjoke.com/search";
      const params = { page: 1, limit: 5, term: this.term };
      axios
        .get(url, { headers: headers, params: params })
        .then((res) => (this.res = res.data));
    },
  },
};
</script>
