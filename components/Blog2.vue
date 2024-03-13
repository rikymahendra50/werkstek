<template>
  <section class="container-custom">
    <div class="flex justify-end">
      <div
        class="cursor-pointer w-[40px] btn btn-ghost btn-square md:block hover:bg-primary transition-colors"
        @click="toggleCategoryVisibility"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </div>
    </div>
    <div
      v-if="!categoryVisible"
      class="scrollbar-hidden overflow-x-auto flex gap-4 lg:gap-6 text-[12px] sm:text-[14px] md:text-[18px] text-[#121416] border-b-2 w-full mt-6 justify-between overflow-auto"
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
    <div class="grid min-[320px]:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
      <BlogItem
        :link="`/blog/${item.slug}`"
        :image="item?.image"
        :title="item?.title"
        :description="item?.meta"
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
const categoryVisible = ref(true);

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

function toggleCategoryVisibility() {
  categoryVisible.value = !categoryVisible.value;
}
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
