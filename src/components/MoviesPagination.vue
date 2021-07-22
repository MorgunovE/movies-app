<template>
  <!-- 51 -->
  <div class="movies-pagination">
    <!-- 53 -->
    <b-pagination
      v-model="currentPageModal"
      :per-page="perPage"
      :total-rows="total"
      prev-text="Prev"
      next-text="Next"
    />
  </div>
</template>

<script>
export default {
  name: "MoviesPagination",
  props: {
    // 53-1
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 1,
    },
    perPage: {
      type: Number,
      default: 1,
    },
  },
  // data: () => ({
  //   currentPage: 1,
  //   total: 100,
  //   perPage: 12,
  // }),
  computed: {
    // 53
    currentPageModal: {
      get() {
        return this.currentPage;
      },
      // 56
      set(value) {
        // console.log(value);
        this.$emit("pageChanged", value);
      },
    },
  },
};
</script>
<style scoped>
/* 51-1 */
.movies-pagination {
  display: flex;
  justify-content: center;
  /* 121 */
  margin-top: auto;
}
/* 52 */
.movies-pagination >>> .pagination .page-item .page-link {
  background-color: transparent;
  font-size: 12px;
  color: #fff;
  box-shadow: none;
}
.movies-pagination >>> .pagination .page-item.active .page-link {
  background-color: #fff;
  border-color: #fff;
  color: #000;
}
.movies-pagination >>> .pagination .page-item.disabled .page-link {
  color: lightgray;
}
</style>
