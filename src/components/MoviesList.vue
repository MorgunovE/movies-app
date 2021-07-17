<template>
  <!-- 31 -->
  <b-container>
    <h3 class="list-title">IMDB Top 250</h3>
    <b-row>
      <template v-if="isExist">
        <b-col cols="3" v-for="(movie, key) in list" :key="key">
          <MovieItem :movie="movie" />
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
};
</script>

<style scoped>
/* 31-2 */
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
}
</style>
