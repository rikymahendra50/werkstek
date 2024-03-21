<template>
  <div v-if="data && data?.data">
    <EachBlog
      typeArticle="Community"
      :title="data?.data?.title"
      :imageSrc="data.data.image"
      :body="data?.data?.body"
      :comment="data.data.comments"
    />
  </div>
</template>

<script setup>
const route = useRoute();

const slug = computed(() => {
  return route.params.slug;
});

const { requestOptions } = useRequestOptions();

const { data, error, pending } = await useFetch(
  `/community-blogs/${slug.value}`,
  {
    method: "get",
    ...requestOptions,
  }
);

if (error.value) {
  console.error("Error fetching data:", error);
}

useHead({
  title: data.value?.data?.title,
});
</script>
