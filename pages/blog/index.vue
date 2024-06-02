<template>
  <div class="mt-20"></div>
  <HeaderWCity
    title1="Bekijk onze locaties"
    title2="Lees de Werkstek </br> blogs & updates"
    description="Lees hier onze interessante blogs"
  />

  <div class="container-custom grid gap-3 pt-8">
    <p
      class="text-[25px] sm:text-[30px] md:text-[40px] text-[#000000] font-medium"
    >
      Lees onze laatste blog’s
    </p>
    <p class="text-sm text-[#777777]">
      Lorem ipsum dolor sit amet, solor ut adipiscing elit. Lorem ipsum <br />
      dolor sit amet, solor ut adipiscing elit.
    </p>
  </div>

  <Blog class="my-10" />

  <Blog2 :ShowTitleCategory="true" />

  <BgBigGreen
    title1="Blijf op de hoogte"
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
</script>
