<template>
  <HeaderWCity
    title1="FAQ"
    title2="Onze meest gestelde vragen"
    description="Lorem ipsum dolor sit amet, solor ut adipiscing elit. Lorem ipsum dolor sit amet, solor ut adipiscing elit."
  />
  <FaqElement />
</template>

<script setup>
const { facilities } = useProducts();

useHead({
  title: "FAQ",
});
</script>
