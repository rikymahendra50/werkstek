<template>
  <div :class="className">
    <img src="/images/logo-werstek-secondary.svg" alt="logo" />
  </div>
</template>

<script setup>
const props = defineProps({
  className: {
    type: String,
    default:
      "min-w-[160px] lg:min-w-[215px] min-h-[66px] flex items-center font-bold",
  },
});
</script>
