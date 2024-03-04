<template>
  <div v-if="pending">Loading...</div>
  <div v-if="data && data?.data">
    <CompAdminBackButton
      link="blog"
      :linkTitle="`Detail Blog ${data?.data?.title}`"
    />
    <table class="table mt-10">
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
