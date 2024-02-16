<template>
  <div>
    {{ $user }}

    <h1>test</h1>

    <div class="alert alert-success alert-sm">
      <span class="text-white text-lg">Test {{ $user?.first_name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "AdminHome",
});

const { $user, $logout } = useAuth();
definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
<style scoped></style>
