<template>
  <div class="mt-20"></div>
  <StatistiekLocaties
    image="/images/img-home-11.png"
    title1="Neem contact op"
    title2="Neem contact </br> op met Werkstek"
    title3="Werkstek slaat een brug tussen de leegstand van kantoorruimtes en de vraag naar betaalbare werkplekken. Werkstek huurt en verhuurt een toenemend aantal werkplekken en kantoorunits."
    titleBg1="Locaties"
    titleBg2="Statistiek 2"
    titleBg3="Statistiek 3"
    :count1="280"
    :count2="15"
    :count3="49"
    :showButton="true"
    buttonTitle1="Over Werkstek"
    buttonTitle2="Voor verhuurders"
    buttonLink1="/over-werkstek"
    buttonLink2="/voor-verhuurders"
  />
  <ContactUs class="mb-10" />
  <MapInteractive :ShowContainerCustom="false" class="container-custom my-10" />
  <BgBigGreen
    title1="Blijf op de hoogte"
    title2="Schrijf je in voor de nieuwsbrief"
    title3="Op de hoogte blijven van beschikbare werkplekken? Schrijf je dan nu vrijblijvend in!"
    :backgroundColor="'secondary'"
    :showEmailSection="true"
  />
</template>

<script setup>
useHead({
  title: "Contact",
});
</script>
