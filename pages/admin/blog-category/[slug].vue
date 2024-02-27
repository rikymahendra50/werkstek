<!-- <template>
  <div v-if="pending">Loading...</div>
  <div v-if="data && data?.data" class="overflow-y-auto max-h-[70%]">
    <h3 class="font-bold my-2">Detail Data {{ data.data.name }}</h3>
    <div class="max-h-[500px]">
      <table class="table">
        <tbody>
          <tr>
            <td>test</td>
            <td>test</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <NuxtLink to="/admin/onze-vacaturies">
    <button class="btn btn-sm btn-outline btn-warning">Back</button>
  </NuxtLink>
</template>

<script setup>
const route = useRoute();
const slug = computed(() => {
  return route.params.slug;
});

const { requestOptions } = useRequestOptions();
const { data, error, pending } = await useFetch(
  `/admins/article-categories/${slug.value}`,
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
</script> -->

<template>
  <p>test</p>
</template>
