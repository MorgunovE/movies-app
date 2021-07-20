// 107
<template>
  <!-- 111 -->
  <div class="movie-info-wrap">
    <header class="movie-info-header">
      <h6 class="movie-header-title">Movie view</h6>
      <!-- 113 -->
      <b-icon-x class="close-icon" @click="closeModal"></b-icon-x>
    </header>
    <!-- 116 -->
    <div class="movie-info-content">
      <b-row>
        <b-col sm="4">
          <div class="movie-poster-wrap">
            <!-- 116-4 -->
            <div class="movie-poster" :style="posterStyle"></div>
          </div>
        </b-col>
        <b-col sm="8"></b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieInfoModalContent",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    // 116-3
    defaultPosterBg:
      "linear-gradient(45deg,rgb(0, 3, 38) 0%,rgb(87, 15, 117) 100%)",
  }),
  methods: {
    // 113-1
    closeModal() {
      console.log("close");
    },
  },
  computed: {
    // 116-2
    posterStyle() {
      return {
        "background-image": this.posterBg,
      };
    },
    posterBg() {
      return this.movie ? `url(${this.movie.Poster})` : this.defaultPosterBg;
    },
  },
};
</script>

<style scoped>
/* 114 */
.movie-info-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%);
  color: #fff;
}
.movie-header-title {
  margin-bottom: 0;
  line-height: 1.5;
  font-size: 1.25rem;
}
/* 116-1 */
.movie-info-content {
  padding: 1rem;
  background-color: #fff;
}
.movie-poster-wrap {
  position: relative;
  padding-bottom: 150%;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease;
}
.movie-poster {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center center;
  background: no-repeat;
}
</style>
