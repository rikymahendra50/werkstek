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
        :link="item.link"
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

<!-- <template>
  <section class="container-custom">
    <div
      v-if="ShowTitleCategory"
      class="flex gap-4 lg:gap-6 text-[12px] sm:text-[14px] md:text-[18px] text-[#121416] border-b-2 w-full lg:w-[97%] mt-6 justify-between overflow-auto"
    >
      <button
        class="categorylink"
        v-for="category in categories"
        :key="category"
        @click="handleCategoryClick(category)"
        :class="{ active: activeCategory === category }"
      >
        {{ category }}
      </button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
      <BlogItem
        :image="item.image"
        :title="item.title"
        :description="item.description"
        v-for="item in filteredBlogItems"
        :key="item"
      />
    </div>
  </section>
</template>

<script>
export default {
  created() {
    this.activeCategory = null;
  },
  computed: {
    filteredBlogItems() {
      return this.BlogItem.filter(
        (item) =>
          this.activeCategory === null ||
          item.categories.includes(this.activeCategory)
      );
    },
  },
  methods: {
    handleCategoryClick(category) {
      this.activeCategory = category;
    },
  },
  data() {
    return {
      activeCategory: null,
      categories: [
        "Categorie naam1",
        "Categorie naam2",
        "Categorie naam3",
        "Categorie naam4",
        "Categorie naam5",
      ],
      BlogItem: [
        {
          image: "/images/image-page8-1.png",
          title: "De kracht van samenwerking",
          description:
            "In de snel evoluerende wereld van vandaag, waar flexibiliteit, innovatie en samenwerking centraal staan, zijn gedeelde kantoorruimtes uitgegroeid tot een",
          categories: "Categorie naam1",
        },
        {
          image: "/images/image-page8-2.png",
          title: "De kracht van samenwerking",
          description:
            "In de snel evoluerende wereld van vandaag, waar flexibiliteit, innovatie en samenwerking centraal staan, zijn gedeelde kantoorruimtes uitgegroeid tot een",
          categories: "Categorie naam2",
        },
        {
          image: "/images/image-page8-3.png",
          title: "De kracht van samenwerking",
          description:
            "In de snel evoluerende wereld van vandaag, waar flexibiliteit, innovatie en samenwerking centraal staan, zijn gedeelde kantoorruimtes uitgegroeid tot een",
          categories: "Categorie naam3",
        },
        {
          image: "/images/image-page8-4.png",
          title: "De kracht van samenwerking",
          description:
            "In de snel evoluerende wereld van vandaag, waar flexibiliteit, innovatie en samenwerking centraal staan, zijn gedeelde kantoorruimtes uitgegroeid tot een",
          categories: "Categorie naam4",
        },
        {
          image: "/images/image-page8-5.png",
          title: "De kracht van samenwerking",
          description:
            "In de snel evoluerende wereld van vandaag, waar flexibiliteit, innovatie en samenwerking centraal staan, zijn gedeelde kantoorruimtes uitgegroeid tot een",
          categories: "Categorie naam5",
        },
      ],
    };
  },
  props: {
    ShowTitleCategory: {
      type: Boolean,
      default: true,
    },
  },
};
</script> -->
