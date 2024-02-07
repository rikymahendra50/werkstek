export default function useHomeData() {
  const StatistiekLocatiesData = ref({
    image: "/images/img-home-1.png",
    title1: "De Werkstek locaties",
    title2: "De leukste kantoorruimtes",
    title3:
      "De perfecte werkplek voor elke organisatie. Kies voor betaalbare huur in een professionele omgeving op een gunstige locatie, en maak deel uit van een ondernemende en inspirerende community.",
    titleBg1: { title: "Locaties", count: 280 },
    titleBg2: { title: "Statistiek 2", count: 15 },
    titleBg3: { title: "Statistiek 3", count: 49 },
  });

  const BgBigGreenData = ref({
    title1: "Blijf op de hoogte",
    title2: "Schrijf je in voor de nieuwsbrief",
    title3:
      "Op de hoogte blijven van beschikbare werkplekken? Schrijf je dan nu vrijblijvend in!",
    showButtonSection: true,
    titleButton: "Contact opnemen",
    linkButton: "/contact",
  });

  return {
    StatistiekLocatiesData,
    BgBigGreenData,
  };
}
