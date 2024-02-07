export default function useOnzeLocatiesData() {
  const StatistiekLocaties2Data = ref({
    image: "/images/img-page2-w.png",
    title1: "Bekijk onze locaties",
    title2: "De Werkstek locaties",
    title3:
      "De perfecte werkplek voor elke organisatie. Kies voor betaalbare huur in een professionele omgeving op een gunstige locatie, en maak deel uit van een ondernemende en inspirerende community.",
    titleBg1: { title: "Locaties", count: 280 },
    titleBg2: { title: "Statistiek 2", count: 15 },
    titleBg3: { title: "Statistiek 3", count: 49 },
  });

  const BgBigGreenData = ref({
    title1: "Aanvragen",
    title2: "Niks kunnen vinden?",
    title3:
      "Neem dan contact met ons op. Samen zoeken we jouw perfecte werkplek.",
    showButtonSection: true,
    showEmailSection: false,
  });

  return {
    StatistiekLocaties2Data,
    BgBigGreenData,
  };
}
