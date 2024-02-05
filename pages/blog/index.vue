<template>
  <HeaderWCity
    title1="Bekijk onze locaties"
    title2="Lees de Werkstek blogs & updates"
    description="Lees hier onze interessante blogs"
  />

  <Blog :show-title-header="false" class="my-10" />

  <Blog2 :ShowTitleCategory="true" @categoryClick="handleCategoryClick" />

  <BgBigGreen
    title1="Blijf op de hoogte "
    title2="Schrijf je in voor de nieuwsbrief"
    title3="Op de hoogte blijven van beschikbare werkplekken? Schrijf je dan nu vrijblijvend in!"
    :showButtonSection="true"
    :backgroundColor="'secondary'"
  />
</template>

<script setup>
useHead({
  title: "Blog",
});
// export default {
//   methods: {
//     handleCategoryClick(category) {
//       console.log(`Kategori yang diklik: ${category}`);
//     },
//   },
// };
</script>
