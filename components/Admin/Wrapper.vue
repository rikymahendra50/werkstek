<template>
  <div class="relative">
    <!-- md and below sidebar -->
    <Transition enter-active-class="transition-transform ease-in opacity-0  duration-700"
      leave-active-class="transition ease-out -translate-x-full duration-700">
      <div v-if="showTableOrMobileSidebar" class="absolute block lg:hidden z-50 max-w-[280px] bg-white" ref="sideNav">
        <slot name="mbAndSmSidebar" />
      </div>
    </Transition>
    <div class="grid h-screen min-h-screen w-full  lg:grid-cols-[280px_1fr]">
      <!-- sidebar for large and above screen -->
      <slot name="sidebar" />

      <div class="flex flex-col">
        <!-- header and main content-->
        <slot name="main-content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize, onClickOutside } from "@vueuse/core";
const showTableOrMobileSidebar = ref<boolean>(false);

const { width } = useWindowSize();
const sideNav = ref(null);

const tableOrMobile = computed(() => {
  return width.value <= 768;
});

onClickOutside(sideNav, () => {
  if (tableOrMobile.value) {
    showTableOrMobileSidebar.value = false;
  }
});

provide("showTableOrMobileSidebar", showTableOrMobileSidebar);
</script>

<style lang="scss" scoped></style>
