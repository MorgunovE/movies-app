<template>
  <div id="app">
    <!-- 71-2 -->
    <Loader />
    <!-- 47 -->
    <PosterBg :poster="posterBg" />
    <!-- 81-2 -->
    <Header />
    <!-- 45 -->
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />
    <!-- 50-2 -->
    <!-- 54-1 -->
    <MoviesPagination
      :current-page="currentPage"
      :per-page="moviesPerPage"
      :total="moviesLength"
      @pageChanged="onPageChanged"
    />
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
// 50
import MoviesPagination from "@/components/MoviesPagination";
// 71
import Loader from "@/components/Loader";
// 81
import Header from "@/components/Header";

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
    // 50-1
    MoviesPagination,
    // 71-1
    Loader,
    // 81-1
    Header,
  },
  computed: {
    // 30-1
    // 54
    ...mapGetters("movies", [
      "moviesList",
      "currentPage",
      "moviesPerPage",
      "moviesLength",
    ]),
  },
  mounted() {
    // 13-2
    // 26
    // this.fetchMovies();
  },
  methods: {
    // 13-1
    // 61
    ...mapActions("movies", ["changeCurrentPage"]),
    // 45-1
    onChangePoster(poster) {
      // console.log(poster);
      // 47-2
      this.posterBg = poster;
    },
    // 57
    onPageChanged(page) {
      // 63
      this.$router.push({ query: { page } });
      // 61-1
      // this.changeCurrentPage(page);
    },
    // 65-1
    onPageQueryChange({ page = 1 }) {
      this.changeCurrentPage(Number(page));
    },
  },
  watch: {
    // 65
    "$route.query": {
      handler: "onPageQueryChange",
      immediate: true,
      deep: true,
    },
  },
  created() {
    // 64
    // console.log(this.$route);
    // if (this.$route.query.page) {
    //   this.changeCurrentPage(Number(this.$route.query.page));
    // }
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
