<template>
  <section class="container-custom">
    <div
      class="overflow-x-auto hidden md:flex gap-4 lg:gap-6 text-[12px] sm:text-[14px] md:text-[16px] text-[#121416] border-b-2 mt-6 justify-between overflow-auto"
    >
      <button
        class="categorylink"
        v-for="(category, index) in categoryData?.slice(0, 4)"
        :key="category?.id"
        :class="{ active: selectedCategory === category?.slug }"
        @click="handleCategoryClick(category?.slug)"
      >
        {{ category?.name }}
      </button>
      <VMenu v-if="categoryData.length > 4">
        <button class="btn btn-ghost hover:bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M3 6h18M3 12h18M3 18h18"
            />
          </svg>
        </button>
        <template #popper>
          <div class="grid gap-2">
            <button
              class="hover:bg-primary p-2 text-[14px] hover:text-white"
              v-for="(category, index) in categoryData?.slice(4)"
              :key="category.id"
              :class="{ active: selectedCategory === category.slug }"
              @click="handleCategoryClick(category.slug)"
            >
              {{ category.name }}
            </button>
          </div>
        </template>
      </VMenu>
    </div>
    <div
      class="overflow-x-auto flex md:hidden gap-4 lg:gap-6 text-[12px] sm:text-[14px] md:text-[16px] text-[#121416] border-b-2 mt-6 justify-between overflow-auto"
    >
      <button
        class="categorylink"
        v-for="(category, index) in categoryData?.slice(0, 3)"
        :key="category?.id"
        :class="{ active: selectedCategory === category?.slug }"
        @click="handleCategoryClick(category?.slug)"
      >
        {{ category?.name }}
      </button>
      <VMenu v-if="categoryData.length > 3">
        <button class="btn btn-ghost hover:bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M3 6h18M3 12h18M3 18h18"
            />
          </svg>
        </button>
        <template #popper>
          <div class="grid gap-2">
            <button
              class="hover:bg-primary p-2 text-[14px] hover:text-white"
              v-for="(category, index) in categoryData?.slice(3)"
              :key="category.id"
              :class="{ active: selectedCategory === category.slug }"
              @click="handleCategoryClick(category.slug)"
            >
              {{ category.name }}
            </button>
          </div>
        </template>
      </VMenu>
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
    <!-- <Pagination
      v-model="page"
      :total="data?.meta?.total"
      :per-page="data?.meta?.per_page"
      class="flex justify-center mt-8"
    /> -->
    <!-- <pre>
      {{ data }}
    </pre> -->
  </section>
</template>

<script setup>
const { requestOptions } = useRequestOptions();

const page = ref(1);
const { data, error, refresh } = await useAsyncData("articles", () =>
  $fetch(`/articles?page=${page.value}`, {
    method: "get",
    ...requestOptions,
  })
);

watch(
  () => page.value,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      start();
    }
  }
);

const categoryData = computed(() => {
  const categories = data?.value?.data?.map((item) => item?.category);
  const uniqueCategories = [...new Set(categories.map((cat) => cat?.id))].map(
    (id) => categories.find((cat) => cat?.id === id)
  );
  return [{ id: null, name: "Alle" }, ...uniqueCategories];
});

// console.log(categoryData);

const selectedCategory = ref(null);
const categoryVisible = ref(true);

const handleCategoryClick = (categorySlug) => {
  selectedCategory.value = categorySlug === "Alle" ? null : categorySlug;
};

const filteredData = computed(() => {
  if (!selectedCategory.value) {
    return data?.value?.data;
  } else {
    return data?.value?.data?.filter(
      (item) => item?.category?.slug === selectedCategory.value
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
