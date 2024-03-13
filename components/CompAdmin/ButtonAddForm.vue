<template>
  <button
    class="btn bg-primary text-white btn-sm h-11"
    type="submit"
    :disabled="isLoading"
  >
    <span
      class="text-[20px] xl:text-lg lg:text-lg text-center text-white normal-case"
    >
      {{ buttonName }}
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  buttonName: {
    type: String,
  },
  isLoading: {},
});
</script>
