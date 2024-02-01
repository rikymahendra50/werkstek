<template>
  <section class="container-custom">
    <div class="flex flex-col">
      <div
        v-if="ShowTitleCategory"
        class="flex gap-4 lg:gap-6 text-[12px] sm:text-[14px] md:text-[18px] text-[#121416] border-b-2 w-full lg:w-[97%] mt-6 justify-between overflow-auto"
      >
        <p>Categorie naam</p>
        <p>Categorie naam</p>
        <p>Categorie naam</p>
        <p>Categorie naam</p>
        <p>Categorie naam</p>
        <p>Categorie naam</p>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
      <BlogItem
        :image="item.image"
        :title="item.title"
        :description="item.description"
        v-for="item in BlogItem"
        :key="item"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      BlogItem: [
        {
          image: "/images/image-page8-1.png",
          title: "De kracht van samenwerking",
          description:
            "In de snel evoluerende wereld van vandaag, waar flexibiliteit, innovatie en samenwerking centraal staan, zijn gedeelde kantoorruimtes uitgegroeid tot een",
        },
        {
          image: "/images/image-page8-2.png",
          title: "De kracht van samenwerking",
          description:
            "In de snel evoluerende wereld van vandaag, waar flexibiliteit, innovatie en samenwerking centraal staan, zijn gedeelde kantoorruimtes uitgegroeid tot een",
        },
        {
          image: "/images/image-page8-3.png",
          title: "De kracht van samenwerking",
          description:
            "In de snel evoluerende wereld van vandaag, waar flexibiliteit, innovatie en samenwerking centraal staan, zijn gedeelde kantoorruimtes uitgegroeid tot een",
        },
        {
          image: "/images/image-page8-4.png",
          title: "De kracht van samenwerking",
          description:
            "In de snel evoluerende wereld van vandaag, waar flexibiliteit, innovatie en samenwerking centraal staan, zijn gedeelde kantoorruimtes uitgegroeid tot een",
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
