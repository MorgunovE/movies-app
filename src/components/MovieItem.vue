<template>
  <!-- 35 -->
  <div class="movie-item mb-3">
    <!-- 36-1 -->
    <div class="movie-item-poster" :style="posterBg"></div>
    <!-- 37 -->
    <div class="movie-info-wrap">
      <div class="movie-item-info">
        <h3 class="movie-title">{{ movie.Title }}</h3>
        <span class="movie-year">{{ movie.Year }}</span>
      </div>
      <!-- 38 -->
      <b-row class="movie-item-controls no-gutters">
        <div class="col">
          <!-- 105 -->
          <b-button
            class="btnItem"
            size="lg"
            block
            variant="outline-light"
            @click="showInfoModalEvent"
            >Info</b-button
          >
        </div>
        <div class="col">
          <!-- 75 -->
          <b-button
            class="btnItem"
            size="lg"
            block
            variant="outline-light"
            @click="emitRemoveEvent"
            >Remove</b-button
          >
        </div>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    // 36
    posterBg() {
      return {
        "background-image": `url(${this.movie.Poster})`,
      };
    },
  },
  methods: {
    // 75-1
    emitRemoveEvent() {
      this.$emit("removeItem", {
        id: this.movie.imdbID,
        title: this.movie.Title,
      });
    },
    // 105-1
    showInfoModalEvent() {
      this.$emit("showModal", this.movie.imdbID);
    },
  },
};
</script>
<style scoped>
/* 35-1 */
.movie-item {
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease;
  height: 400px;
}
.movie-item:hover {
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.7);
  transform: scale(1.02);
}
.movie-item-poster {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
}
.btnItem {
  width: 100%;
}
.movie-info-wrap {
  padding: 20px 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
  transition: all 0.2s ease;
}
.movie-item:hover .movie-info-wrap {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.7);
}
.movie-title {
  font-size: 20px;
  color: #fff;
}
.movie-year {
  font-size: 14px;
  color: #fff;
}
</style>
