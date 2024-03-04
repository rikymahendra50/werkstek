<template>
  <div v-if="pending">Loading...</div>
  <div v-if="data && data?.data" class="overflow-y-auto max-h-[70%]">
    <h3 class="font-bold my-2">Detail Blog {{ data?.data?.first_name }}</h3>
    <table class="table">
      <tbody>
        <tr>
          <td>Images</td>
          <td>
            <img :src="data?.data?.image" class="max-w-[200px]" />
          </td>
        </tr>
        <tr>
          <td>Title</td>
          <td>{{ data?.data?.title }}</td>
        </tr>
        <tr>
          <td>Body</td>
          <td>{{ data?.data?.body }}</td>
        </tr>
        <tr>
          <td>Meta</td>
          <td>{{ data?.data?.meta }}</td>
        </tr>
        <tr>
          <td>Category</td>
          <td>
            <ul>
              <li>Id : {{ data?.data?.category.id }}</li>
              <li>Name : {{ data?.data?.category.name }}</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <NuxtLink
    to="/admin/blog"
    class="btn btn-sm btn-outline btn-warning max-w-[90px]"
  >
    Back
  </NuxtLink>
</template>

<script setup>
const route = useRoute();
const slug = computed(() => {
  return route.params.slug;
});

const { requestOptions } = useRequestOptions();
const { data, error, pending } = await useFetch(
  `/admins/articles/${slug.value}`,
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
