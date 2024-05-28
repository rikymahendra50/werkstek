<template>
  <div class="mt-28"></div>
  <div v-if="pending">Loading...</div>
  <div v-if="data && data?.data">
    <EachBlog
      typeArticle="Blog"
      :title="data?.data?.title"
      :imageSrc="data.data.image"
      :body="data?.data?.body"
      :author="data?.data?.author?.name"
      :authorImage="data?.data?.author?.image"
      :authorDescription="data?.data?.author?.description"
      :comment="data?.data?.comments"
      :slugT="data?.data?.slug"
    />
  </div>
</template>

<script setup>
const route = useRoute();

const slug = computed(() => {
  return route.params.slug;
});

const { requestOptions } = useRequestOptions();

const { data, error, pending } = await useFetch(`/articles/${slug.value}`, {
  method: "get",
  ...requestOptions,
});

if (error.value) {
  console.error("Error fetching data:", error);
}

useHead({
  title: data.value?.data?.title,
});
</script>
