<template>
  <p>test2</p>
</template>

<script setup>
useHead({
  title: "Onze Locaties",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
