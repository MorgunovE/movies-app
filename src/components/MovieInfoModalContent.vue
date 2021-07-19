// 107
<template>
  <!-- 111 -->
  <div class="movie-info-wrap">
    <header class="movie-info-header">
      <h6 class="movie-header-title">Movie view</h6>
      <!-- 113 -->
      <b-icon-x class="close-icon" @click="closeModal"></b-icon-x>
    </header>
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
  methods: {
    // 113-1
    closeModal() {
      console.log("close");
    },
  },
};
</script>

<style scoped>
/* 113-2 */
.movie-info-header {
}
</style>
