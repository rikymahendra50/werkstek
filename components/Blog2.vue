<template>
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

<style>
.swiper {
  width: 100%;
  height: 100%;
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
}

/* .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
} */

.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
  border: 3px solid orange;
}

.swiper-pagination-bullet-active {
  color: #fff;
  background: #007aff;
}
</style>

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
  props: {
    ShowTitleCategory: {
      type: Boolean,
      default: true,
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
</script>
