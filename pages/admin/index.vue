<template>
  <div>
    {{ $user }}

    <div class="alert alert-success alert-sm">
      <span class="text-white text-lg">Welcome {{ $user?.first_name }}</span>
    </div>

    <p>Admin Name : {{ $user?.first_name }}</p>

    <p>Profile : {{ $user?.profile_picture }}</p>

    <!-- <button @click="$logout()" class="btn btn-error">Logout</button> -->
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
