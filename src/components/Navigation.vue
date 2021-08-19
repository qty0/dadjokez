<template>
  <div class="navbar-expand-md">
    <div class="collapse navbar-collapse" id="navbar-menu">
      <div class="navbar navbar-light">
        <div class="container-xl">
          <ul class="navbar-nav">
            <li class="nav-item pointer" :class="{ active: active == 'home' }">
              <router-link to="/" class="nav-link">
                <span
                  @click="changeActive('home')"
                  class="nav-link-icon d-md-none d-lg-inline-block"
                  ><!-- Download SVG icon from http://tabler-icons.io/i/home -->
                  <Home> </Home>
                </span>
                <span class="nav-link-title"> Home </span>
              </router-link>
            </li>
            <li
              class="nav-item pointer"
              :class="{ active: active == 'search' }"
            >
              <router-link to="/search" class="nav-link">
                <span
                  @click="changeActive('search')"
                  class="nav-link-icon d-md-none d-lg-inline-block"
                  ><!-- Download SVG icon from http://tabler-icons.io/i/checkbox -->
                  <Search> </Search>
                </span>
                <span class="nav-link-title"> Search Jokez </span>
              </router-link>
            </li>
            <li class="nav-item pointer" :class="{ active: active == 'fav' }">
              <router-link to="/fav" class="nav-link">
                <span
                  @click="changeActive('fav')"
                  class="nav-link-icon d-md-none d-lg-inline-block"
                >
                  <!-- Download SVG icon from http://tabler-icons.io/i/file-text -->
                  <Star class="asd"> </Star>
                </span>
                <span class="nav-link-title"> Favourites </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./svgs/Search.vue";
import Home from "./svgs/Home.vue";
import Star from "./svgs/Star.vue";

export default {
  methods: {
    changeActive(act) {
      this.active = act;
    },
  },
  data() {
    return {
      active: "home",
    };
  },
  components: {
    Search,
    Home,
    Star,
  },
};
</script>
