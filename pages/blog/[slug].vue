<template>
  <div v-if="data && data.data">
    <EachBlog
      :title="data.data.title"
      :imageSrc="data.data.image"
      :body="data.data.body"
      :comment="data.data.comments"
    />
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

const { requestOptions } = useRequestOptions();
const { data, error } = useFetch(`/articles/${slug}`, {
  method: "get",
  ...requestOptions,
});

if (error) {
  console.error("Error fetching data:", error);
}
</script>
