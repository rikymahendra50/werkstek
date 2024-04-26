export default function useOnzeLocatiesData() {
  const StatistiekLocaties2Data = ref({
    image: "/images/onze-locaties.png",
    title1: "Bekijk onze locaties",
    title2: "De Werkstek locaties",
    title22: "De Werkstek </br> locaties",
    title3:
      "De perfecte werkplek voor elke organisatie. Kies voor  betaalbare huur in een professionele omgeving </br> op een  gunstige locatie, en maak deel uit van een </br> ondernemende en inspirerende community.",
    titleBg1: { title: "Locaties", count: 280 },
    titleBg2: { title: "Statistiek 2", count: 15 },
    titleBg3: { title: "Statistiek 3", count: 49 },
  });
  const dropdownData = ref(["Utrecht", "Locatie", "Denpasar", "Amsterdam"]);
  const checkboxData = ref({
    soortLocaties: [
      {
        id: 1,
        name: "Alles",
      },
      {
        id: 2,
        name: "Anders",
      },
      {
        id: 3,
        name: "Kantoorruimte",
      },
    ],
    functie: [
      {
        id: 9,
        name: "Wifi",
      },
      {
        id: 10,
        name: "Parkeerplaats",
      },
      {
        id: 11,
        name: "Receptie",
      },
      {
        id: 12,
        name: "Koffiebar",
      },
      {
        id: 13,
        name: "Keuken",
      },
      {
        id: 14,
        name: "Vlakbij het treinstation",
      },
      {
        id: 15,
        name: "Loungeplekken",
      },
      {
        id: 16,
        name: "Vergaderruimtes met videoschermen",
      },
    ],
  });
  const LocatiesData = ref([
    {
      id: 1,
      name: "Utrecht",
      soortLocaties: ["Alles", "Anders"],
      deopervlakte: 19,
      price: 320,
      functie: ["Wifi", "Parkeerplaats"],
      image: "/images/img-each-locatie-1.png",
      type: "Premium",
      adres: "Adres",
      opervlakte: "Opervlakte",
      phoneNumber: "+31302393838",
      mailAdres: "Mail adres",
      detailLinkTitle: "Neem een kijkje",
      detailLink: "/onze-locaties/rikymahendra",
      rating: 9.4,
    },
    {
      id: 2,
      name: "Locatie",
      soortLocaties: ["Anders", "Alles"],
      price: 100,
      deopervlakte: 20,
      functie: ["Wifi", "Parkeerplaats", "Loungeplekken"],
      image: "/images/img-each-locatie-2.jpg",
      type: "Premium",
      adres: "Adres",
      opervlakte: "Opervlakte",
      phoneNumber: "+31302393838",
      mailAdres: "Mail adres",
      detailLinkTitle: "Neem een kijkje",
      detailLink: "/onze-locaties/rikymahendra",
      rating: 9.4,
    },
    {
      id: 3,
      name: "Locatie",
      soortLocaties: ["Anders"],
      price: 120,
      deopervlakte: 23,
      functie: [
        "Wifi",
        "Parkeerplaats",
        "Loungeplekken",
        "Loungeplekken",
        "Koffiebar",
      ],
      image: "/images/img-each-locatie-1.png",
      type: "Premium",
      adres: "Adres",
      opervlakte: "Opervlakte",
      phoneNumber: "+31302393838",
      mailAdres: "Mail adres",
      detailLinkTitle: "Neem een kijkje",
      detailLink: "/onze-locaties/rikymahendra",
      rating: 9.4,
    },
    {
      id: 4,
      name: "Amsterdam",
      soortLocaties: ["Alles"],
      price: 100,
      deopervlakte: 25,
      functie: ["Loungeplekken", "Loungeplekken", "Koffiebar"],
      image: "/images/img-each-locatie-3.jpg",
      type: "Premium",
      adres: "Adres",
      opervlakte: "Opervlakte",
      phoneNumber: "+31302393838",
      mailAdres: "Mail adres",
      detailLinkTitle: "Neem een kijkje",
      detailLink: "/onze-locaties/rikymahendra",
      rating: 9.4,
    },
  ]);

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
    LocatiesData,
    checkboxData,
    dropdownData,
  };
}
