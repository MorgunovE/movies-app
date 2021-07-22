<template>
  <!-- 31 -->
  <b-container>
    <h3 class="movie-title">{{ listTitle }}</h3>
    <b-row>
      <template v-if="isExist">
        <b-col cols="3" v-for="(movie, key) in list" :key="key">
          <!-- 44 -->
          <!-- 76 -->
          <!-- 106 -->
          <MovieItem
            :movie="movie"
            @mouseover.native="onMouseOver(movie.Poster)"
            @removeItem="onRemoveItem"
            @showModal="onShowMovieInfo"
          />
        </b-col>
      </template>
      <!-- 31-1 -->
      <template v-else>
        <div>Empty Movies List</div>
      </template>
    </b-row>
    <!-- 106-2 -->
    <!-- 115 -->
    <b-modal
      body-class="movie-modal-body"
      :id="movieInfoModalId"
      size="xl"
      hide-footer
      hide-header
    >
      <!-- 106-8 -->
      <!-- 108-2 -->
      <!-- 110 -->
      <!-- 119 -->
      <MovieInfoModalContent
        :movie="selectedMovie"
        @closeModal="onCloseModal"
      />
    </b-modal>
  </b-container>
</template>

<script>
// 79
// 93
import { mapActions, mapGetters } from "vuex";
import MovieItem from "./MovieItem.vue";
// 108
import MovieInfoModalContent from "./MovieInfoModalContent";

export default {
  name: "MoviesList",
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    // 106-4
    movieInfoModalId: "modal-info",
    // 106-5
    selectedMovieID: "",
  }),
  components: {
    MovieItem,
    // 108-1
    MovieInfoModalContent,
  },
  computed: {
    // 93-1
    ...mapGetters("movies", ["isSearch"]),
    // 32
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
    // 93-2
    listTitle() {
      return this.isSearch ? "Search result" : "IMDB Top 250";
    },
    // 106-7
    selectedMovie() {
      return this.selectedMovieID ? this.list[this.selectedMovieID] : null;
    },
  },
  methods: {
    // 79-1
    ...mapActions("movies", ["removeMovie"]),
    // 102
    ...mapActions(["showNotify"]),
    // 44-1
    onMouseOver(poster) {
      this.$emit("changePoster", poster);
    },
    // 76-1
    async onRemoveItem({ id, title }) {
      const isConfirmed = await this.$bvModal.msgBoxConfirm(
        `Are you sure delete ${title}?`
      );
      if (isConfirmed) {
        this.removeMovie(id);
        // 102-1
        this.showNotify({
          msg: "Movie deleted successfull",
          variant: "success",
          title: "Success",
        });
      }
    },
    // 106-1
    onShowMovieInfo(id) {
      // 106-3
      this.$bvModal.show(this.movieInfoModalId);
      // 106-6
      this.selectedMovieID = id;
      // console.log(id);
    },
    // 119-1
    onCloseModal() {
      this.selectedMovieID = null;
      this.$bvModal.hide(this.movieInfoModalId);
    },
  },
};
</script>

<style scoped>
/* 31-2 */
.movie-title {
  font-size: 50px;
  margin-bottom: 30px;
  color: #fff;
}
</style>

<style>
/* 115-1 */
.movie-modal-body {
  padding: 0 !important;
}
.modal-content {
  border: none !important;
  background-color: #000 !important;
}
</style>
