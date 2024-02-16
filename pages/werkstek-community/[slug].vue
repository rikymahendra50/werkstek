<template>
  <EachBlog
    :title="data.data.title"
    :imageSrc="data.data.image"
    :body="data.data.body"
    :comment="data.data.comments"
  />
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

const { requestOptions } = useRequestOptions();
const { data, error } = useFetch(`/article-categories/${slug}`, {
  method: "get",
  ...requestOptions,
});

if (error) {
  console.error("Error fetching data:", error);
}
</script>
