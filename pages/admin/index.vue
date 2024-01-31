<template>
  <div>
    {{ $user }}
    <button @click="$logout()" class="btn btn-error">Logout</button>
  </div>
</template>

<script setup lang="ts">
const { $user, $logout } = useAuth();
definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>

<style scoped></style>
