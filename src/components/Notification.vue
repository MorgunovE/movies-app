<template>
  <!-- 98 -->
  <div></div>
</template>

<script>
// 100-1
import { mapGetters } from "vuex";

export default {
  name: "Notification",
  computed: {
    // 100-2
    ...mapGetters(["messagePool"]),
  },
  watch: {
    // 100-3
    messagePool: "showNotification",
  },
  methods: {
    // 100
    showNotification({ variant, msg, title }) {
      this.$bvToast.toast(msg, {
        title,
        variant,
        solid: true,
      });
    },
  },
};
</script>
