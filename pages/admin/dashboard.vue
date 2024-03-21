<template>
  <p>test</p>
</template>

<script setup>
useHead({
  title: "Dashboard",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
