<template>
  <StatistiekLocaties
    :image="StatistiekLocaties.image"
    :title1="StatistiekLocaties.title1"
    :title2="StatistiekLocaties.title2"
    :title3="StatistiekLocaties.title3"
    :titleBg1="StatistiekLocaties.titleBg1.title"
    :titleBg2="StatistiekLocaties.titleBg2.title"
    :titleBg3="StatistiekLocaties.titleBg3.title"
    :count1="StatistiekLocaties.titleBg1.count"
    :count2="StatistiekLocaties.titleBg2.count"
    :count3="StatistiekLocaties.titleBg3.count"
  />
  <MapInteractive />
  <SliderLocaties />
  <SliderTestimony />
  <FourImages />
  <Blog :showTitleHeader="true" />
  <BgBigGreen
    :title1="BgBigGreen.title1"
    :title2="BgBigGreen.title2"
    :title3="BgBigGreen.title3"
    :showButtonSection="BgBigGreen.showButtonSection"
    :buttonTitle="BgBigGreen.titleButton"
    :buttonLink="BgBigGreen.linkButton"
    :showEmailSection="true"
    :backgroundColor="'primary'"
  />
</template>

<script>
export default {
  data() {
    return {
      StatistiekLocaties: {
        image: "/images/img-home-1.png",
        title1: "De Werkstek locaties",
        title2: "De leukste kantoorruimtes",
        title3:
          "De perfecte werkplek voor elke organisatie. Kies voor betaalbare huur in een professionele omgeving op een gunstige locatie, en maak deel uit van een ondernemende en inspirerende community.",
        titleBg1: { title: "Locaties", count: 280 },
        titleBg2: { title: "Statistiek 2", count: 15 },
        titleBg3: { title: "Statistiek 3", count: 49 },
      },
      BgBigGreen: {
        title1: "Blijf op de hoogte",
        title2: "Schrijf je in voor de nieuwsbrief",
        title3:
          "Op de hoogte blijven van beschikbare werkplekken? Schrijf je dan nu vrijblijvend in!",
        showButtonSection: true,
        titleButton: "Contact opnemen",
        linkButton: "/contact",
      },
    };
  },
};
</script>
