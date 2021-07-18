<template>
  <!-- 31 -->
  <b-container>
    <h3 class="movie-title">{{ listTitle }}</h3>
    <b-row>
      <template v-if="isExist">
        <b-col cols="3" v-for="(movie, key) in list" :key="key">
          <!-- 44 -->
          <!-- 76 -->
          <MovieItem
            :movie="movie"
            @mouseover.native="onMouseOver(movie.Poster)"
            @removeItem="onRemoveItem"
          />
        </b-col>
      </template>
      <!-- 31-1 -->
      <template v-else>
        <div>Empty Movies List</div>
      </template>
    </b-row>
  </b-container>
</template>

<script>
// 79
// 93
import { mapActions, mapGetters } from "vuex";
import MovieItem from "./MovieItem.vue";

export default {
  name: "MoviesList",
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    MovieItem,
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
