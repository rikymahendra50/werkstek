<template>
  <div v-if="isVisible" :class="['snackbar', variant]">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      default: "success", // Default variant: success, error, warning, info, dll.
    },
    duration: {
      type: Number,
      default: 3000, // Durasi default (ms)
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    // Tampilkan Snackbar
    this.isVisible = true;

    // Sembunyikan Snackbar setelah durasi tertentu
    setTimeout(() => {
      this.isVisible = false;
    }, this.duration);
  },
};
</script>

<style scoped>
.snackbar {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
}

/* Variasi Warna */
.success {
  background-color: #4caf50;
}
.error {
  background-color: #f44336;
}
.warning {
  background-color: #ff9800;
}
.info {
  background-color: #2196f3;
}
</style>
