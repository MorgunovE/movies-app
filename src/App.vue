<template>
  <div id="app">
    <!-- 47 -->
    <PosterBg :poster="posterBg" />
    <!-- 45 -->
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />
  </div>
</template>

<script>
// 13
// 30
import { mapActions, mapGetters } from "vuex";
// 28
import MoviesList from "@/components/MoviesList";
// 40
import PosterBg from "@/components/PosterBg";

export default {
  name: "App",
  data: () => ({
    // 47-1
    posterBg: "",
  }),
  components: {
    // 28-1
    MoviesList,
    // 40-1
    PosterBg,
  },
  computed: {
    // 30-1
    ...mapGetters("movies", ["moviesList"]),
  },
  mounted() {
    // 13-2
    // 26
    // this.fetchMovies();
  },
  methods: {
    // 13-1
    ...mapActions("movies", ["fetchMovies"]),
    // 45-1
    onChangePoster(poster) {
      // console.log(poster);
      // 47-2
      this.posterBg = poster;
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* 42 */
  position: relative;
}
</style>
