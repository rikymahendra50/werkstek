<template>
  <section class="container-custom">
    <div
      class="scrollbar-hidden overflow-x-auto flex gap-4 lg:gap-6 text-[12px] sm:text-[14px] md:text-[18px] text-[#121416] border-b-2 w-full lg:w-[97%] mt-6 justify-between overflow-auto"
    >
      <button
        class="categorylink"
        v-for="(category, index) in categoryData"
        :key="category.id"
        :class="{ active: selectedCategory === category.slug }"
        @click="handleCategoryClick(category.slug)"
      >
        {{ category.name }}
      </button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
      <BlogItem
        :link="item.slug"
        :image="item.image"
        :title="item.title"
        :description="item.meta"
        v-for="item in filteredData"
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

const categoryData = computed(() => {
  const categories = data.value.data.map((item) => item.category);
  const uniqueCategories = [...new Set(categories.map((cat) => cat.id))].map(
    (id) => categories.find((cat) => cat.id === id)
  );
  return uniqueCategories;
});

const selectedCategory = ref(null);

const handleCategoryClick = (categorySlug) => {
  selectedCategory.value = categorySlug;
};

const filteredData = computed(() => {
  if (!selectedCategory.value) {
    return data.value.data;
  } else {
    return data.value.data.filter(
      (item) => item.category.slug === selectedCategory.value
    );
  }
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
