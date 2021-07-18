<template>
  <!-- 73 -->
  <!-- 74 -->
  <!-- 74-2 -->
  <div class="loader-wrap" v-if="isShowLoader">
    <b-spinner type="grow" variant="Light" label="Loading..."></b-spinner>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Loader",
  computed: {
    ...mapGetters(["isShowLoader"]),
  },
};
</script>

<style scoped>
/* 74-1 */
.loader-wrap {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
</style>
