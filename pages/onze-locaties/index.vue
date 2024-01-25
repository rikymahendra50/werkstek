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
  <OnzeLocaties />
  <BgBigGreen
    :title1="BgBigGreen.title1"
    :title2="BgBigGreen.title2"
    :title3="BgBigGreen.title3"
    :phoneNumber="BgBigGreen.phoneNumber"
    :mail="BgBigGreen.mail"
    :showEmailSection="BgBigGreen.showEmailSection"
    :showButtonSection="BgBigGreen.showButtonSection"
  />
</template>

<script>
export default {
  data() {
    return {
      StatistiekLocaties: {
        image: "/images/img-page2-1.png",
        title1: "De Werkstek locaties",
        title2: "De leukste kantoorruimtes",
        title3:
          "De perfecte werkplek voor elke organisatie. Kies voor betaalbare huur in een professionele omgeving op een gunstige locatie, en maak deel uit van een ondernemende en inspirerende community.",
        titleBg1: { title: "Locaties", count: 280 },
        titleBg2: { title: "Statistiek 2", count: 15 },
        titleBg3: { title: "Statistiek 3", count: 49 },
      },
      BgBigGreen: {
        title1: "Aanvragen",
        title2: "Niks kunnen vinden?",
        title3:
          "Neem dan contact met ons op. Samen zoeken we jouw perfecte werkplek.",
        showButtonSection: true,
        showEmailSection: false,
      },
    };
  },
};
</script>
