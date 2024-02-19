<template>
  <div class="border-2 border-red-400 max-h-[600px] overflow-x-auto">
    <pre>
        {{ data }}
    </pre>
  </div>
</template>

<script setup>
const { requestOptions } = useRequestOptions();
const { data, error } = await useFetch(`/admins/contacts`, {
  method: "get",
  ...requestOptions,
});

useHead({
  title: "Contact",
});

definePageMeta({
  layout: "admin",
  middleware: ["auth", "admin"],
});
</script>
