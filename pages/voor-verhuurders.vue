<template>
  <div class="mt-16"></div>
  <VerhuurdersHeader
    image="/images/image-page4-1.png"
    imageAlt="image-page4-1"
    title1="Verhuurders"
    title2="Voor de verhuurders"
    description1="Als verhuurder leegstand van kantoorpanden voorkomen? Geen zorgen over de risico’s van leegstand van kantoorgebouwen?"
    description2="Werkstek heeft de kennis en ervaring om leegstaande kantoorpanden in te richten en te verhuren aan ondernemers uit verschillende branches."
    buttonTitle1="Over Werkstek"
    buttonTitle2="Voor verhuurders"
    buttonLink1="/over-werkstek"
    buttonLink2="/over-werkstek"
    :useButton2="false"
  />

  <VertrouwdDoor />

  <LeegstandWbutton
    image="/images/over-page2-1.png"
    title="Leegstand vullen"
    description="Werkstek heeft als doel oplossingen te vinden voor leegstaand vastgoed. Dat doen we door servicekosten of onkosten te betalen om placemakers of kwartiermakers voor een lage huur te laten werken waardoor de locatie aantrekkelijker wordt. Door een goede verdeling van de ruimtes en een efficiënte inrichting maakt Werkstek deze kantoorruimtes geschikt voor zzp’ers en kleine ondernemingen."
    buttonTitle1="Schrijf je in"
    buttonTitle2="Bekijk onze locaties"
    buttonLink1="https://api.whatsapp.com/send?phone=0850290598"
    buttonLink2="/onze-locaties"
  />

  <LeegstandNoButton
    background="bg-tertiary"
    image="/images/ruimtes.png"
    :uniqueIdProp="4"
    imageAlt="image-page4-3"
    title="Ruimtes inrichten"
    description="Werkstek richt kantoorruimtes in zodat deze aantrekkelijk zijn voor zzp’ers en ondernemingen. Daarbij houden wij rekening met de wensen en behoeften van onze huurders. Zo kijken we bijvoorbeeld of er een ruimte aanwezig is of gecreëerd kan worden voor het organiseren van evenementen."
    :leftToRight="false"
  />

  <MapInteractive :ShowContainerCustom="false" class="container-custom my-10" />

  <LeegstandNoButton
    :uniqueIdProp="5"
    image="/images/ruimtes_proten.png"
    imageAlt="image-page4-4"
    title="Ruimtes promoten"
    description="Via onze website, social media en google marketing promoten wij de kantoorpanden die we willen verhuren. Bovendien zetten we regelmatig online marketingcampagnes in om potentiële huurders van werkplekken en kantoorunits aan te trekken. Tegen een lage prijs ontwikkelen we een website, logo en branding voor je kantoorpand."
    :leftToRight="true"
  />
  <LeegstandNoButton
    :uniqueIdProp="6"
    image="/images/facilitien.png"
    imageAlt="image-page4-5"
    title="Faciliteiten"
    description="Om het plaatje compleet te maken leveren wij pand gebonden faciliteiten zoals receptiediensten (hostess/ kwartiermaker/ Placemaker) en ondersteunde horeca en cateringdiensten (marketing gedreven horecaondernemer/ Wundermart)."
    :leftToRight="false"
  />
  <BgBigGreen
    title1="Aanvragen"
    title2="Geïnteresseerd?"
    title3="Neem dan contact met ons op. Samen zoeken we jouw perfecte werkplek."
    :showButtonSection="true"
    linkButtonSmaller="/Faq"
    backgroundColor="secondary"
  />

  <!-- use this if     :showSmallerButton="true"
    linkTitleSmaller="Lees de FAQ" -->

  <SliderTestimony />
</template>

<script setup>
useHead({
  title: "Voor-Verhuurders",
});
</script>
