<template>
  <HeaderWCity
    title1="FAQ"
    title2="Onze meest gestelde vragen"
    description="Lorem ipsum dolor sit amet, solor ut adipiscing elit. Lorem ipsum dolor sit amet, solor ut adipiscing elit."
  />
  <FaqElement />
  <!-- <ul>
    <li v-for="article in articles" :key="article.id">
      <img :src="article.image" alt="Article Image" />
      <h2>{{ article.title }}</h2>
      <p>{{ article.meta }}</p>
      <p>Total Views: {{ article.total_view }}</p>
    </li>
  </ul> -->
</template>

<script setup>
// const { articles } = useArticle();

useHead({
  title: "FAQ",
});
</script>
