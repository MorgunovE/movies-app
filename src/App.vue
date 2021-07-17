<template>
  <div id="app">
    <MoviesList :list="moviesList" />
  </div>
</template>

<script>
// 13
// 30
import { mapActions, mapGetters } from "vuex";
// 28
import MoviesList from "@/components/MoviesList";

export default {
  name: "App",
  components: {
    // 28-1
    MoviesList,
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
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
