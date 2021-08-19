<template>
  <div class="card">
    <div
      class="card-status-start"
      :class="fill == 'yellow' ? 'bg-yellow' : 'bg-primary'"
    ></div>
    <div class="card-body">
      <div class="card-header">
        <ul class="nav nav-pills card-header-pills">
          <h4 class="card-title">{{ title }}</h4>
          <li class="nav-item ms-auto pointer" @click="toggleToFavourites">
            <Star :fill="fill"></Star>
          </li>
        </ul>
      </div>
      <p class="card-text">
        {{ text }}
      </p>
    </div>
  </div>
</template>
<script>
import Star from "./svgs/Star.vue";
import cache from "../utils/cache";
export default {
  created() {
    if (this.$favs.includes(this.id)) {
      this.fill = "yellow";
    }
  },
  data() {
    return {
      fill: "none",
    };
  },
  props: {
    title: String,
    text: String,
    id: String,
  },
  components: {
    Star,
  },
  methods: {
    toggleToFavourites() {
      this.fill == "yellow" ? (this.fill = "none") : (this.fill = "yellow");
      this.$favs.includes(this.id)
        ? this.$favs.pop(this.id)
        : this.$favs.push(this.id);
      cache("fav", this.$favs);
    },
  },
};
</script>


<style scoped>
.card-header {
  max-height: 0px !important;
}
.card-text {
  margin-top: 1%;
}
.card {
  margin-bottom: 1%;
}
</style>