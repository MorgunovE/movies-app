<template>
  <!-- 31 -->
  <b-container>
    <h3 class="movie-title">IMDB Top 250</h3>
    <b-row>
      <template v-if="isExist">
        <b-col cols="3" v-for="(movie, key) in list" :key="key">
          <!-- 44 -->
          <MovieItem
            :movie="movie"
            @mouseover.native="onMouseOver(movie.Poster)"
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
    // 32
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
  },
  methods: {
    // 44-1
    onMouseOver(poster) {
      this.$emit("changePoster", poster);
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
