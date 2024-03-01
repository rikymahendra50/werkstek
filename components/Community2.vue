<template>
  <section class="container-custom">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
      <BlogItem
        :link="item.slug"
        :image="item.image"
        :title="item.title"
        :description="item.meta"
        v-for="item in data.data"
        :key="item.id"
      />
    </div>
  </section>
</template>

<script setup>
const { requestOptions } = useRequestOptions();
const { data, refresh } = await useFetch(`/articles`, {
  method: "get",
  ...requestOptions,
});
</script>

<style scoped>
.scrollbar-hidden {
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
</style>
