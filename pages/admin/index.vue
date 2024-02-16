<template>
  <div>
    <div class="alert alert-success alert-sm">
      <span class="text-white text-lg">Welcome {{ $user?.first_name }}</span>
    </div>
    {{ $user }}
    <p>Admin Name : {{ $user?.first_name }}, {{ $user?.last_name }}</p>

    {{ data }}
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "AdminHome",
});

const { requestOptions } = useRequestOptions();
const { data, error } = useFetch(`/admins/profile`, {
  method: "get",
  ...requestOptions,
});

const { $user, $logout } = useAuth();
definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
<style scoped></style>
