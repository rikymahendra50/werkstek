<template>
  <section class="container-custom">
    <!-- <pre>
      {{ data.data[0].title }}
    </pre> -->
    <div
      class="flex gap-4 lg:gap-6 text-[12px] sm:text-[14px] md:text-[18px] text-[#121416] border-b-2 w-full lg:w-[97%] mt-6 justify-between overflow-auto"
    >
      <button
        class="categorylink"
        v-for="(category, index) in categoryData"
        :key="category.id"
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
        v-for="item in data.data"
        :key="item"
      />
    </div>
  </section>
</template>

<script setup>
const { requestOptions } = useRequestOptions();
const { data, refresh } = useFetch(`/articles`, {
  method: "get",
  ...requestOptions,
});

const categoryData = computed(() =>
  data.value.data.map((item) => item.category)
);

const handleCategoryClick = computed(() => {});
</script>

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
