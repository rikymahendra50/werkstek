<template>
  <EachBlog :title="data.data.title" :imageSrc="data.data.image" :body="data.data.body" :comment="data.data.comments" />
</template>

<script setup>
const route = useRoute();


const slug = computed(() => {
  return route.params.slug
})

const { requestOptions } = useRequestOptions();
const { data, error } = useFetch(`/article-categories/${slug.value}`, {
  method: "get",
  ...requestOptions,
});

if (error.value) {
  console.error("Error fetching data:", error);
}
</script>
