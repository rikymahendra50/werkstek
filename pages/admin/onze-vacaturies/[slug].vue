<template>
  <div v-if="pending">Loading...</div>
  <div v-if="data && data?.data">
    {{ data }}
  </div>
</template>

<script setup>
const route = useRoute();
const slug = computed(() => {
  return route.params.slug;
});

const { requestOptions } = useRequestOptions();
const { data, error, pending } = await useFetch(
  `/admins/products/${slug.value}`,
  {
    method: "get",
    ...requestOptions,
  }
);

if (error.value) {
  console.error("Error fetching data:", error);
}
useHead({
  title: data.value?.data?.name,
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
