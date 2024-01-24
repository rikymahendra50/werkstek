<template>
  <VerhuurdersHeader
    image="/_nuxt/assets/images/image-page4-1.png"
    imageAlt="image-page4-1"
    title1="Verhuurders"
    title2="Voor de verhuurders"
    description1="Als verhuurder leegstand van kantoorpanden voorkomen? Geen zorgen over de risico’s van leegstand van kantoorgebouwen? Werkstek heeft de kennis en ervaring om leegstaande kantoorpanden in te richten en te verhuren aan ondernemers uit verschillende branches."
    description2="Werkstek heeft de kennis en ervaring om leegstaande kantoorpanden in te richten en te verhuren aan ondernemers uit verschillende branches."
    buttonTitle="Over Werkstek"
    buttonTitle2="Voor verhuurders >"
    buttonLink1="#"
    buttonLink2="#"
  />

  <VertrouwdDoor />

  <LeegstandWbutton
    image="/_nuxt/assets/images/image-page4-2.png"
    imgAlt="image-page4-2"
    title="Leegstand vullen"
    description="Werkstek heeft als doel oplossingen te vinden voor leegstaand vastgoed. Dat doen we door servicekosten of onkosten te betalen om placemakers of kwartiermakers voor een lage huur te laten werken waardoor de locatie aantrekkelijker wordt. Door een goede verdeling van de ruimtes en een efficiënte inrichting maakt Werkstek deze kantoorruimtes geschikt voor zzp’ers en kleine ondernemingen."
    buttonTitle1="Schrijf je in"
    buttonLink1="#"
    buttonTitle2="Bekijk onze locaties >"
    buttonLink2="#"
  />

  <LeegstandNoButton
    background="bg-[#EEF3ED]"
    image="/_nuxt/assets/images/image-page4-3.png"
    imgAlt="image-page4-3"
    title="Ruimtes inrichten"
    description="Werkstek richt kantoorruimtes in zodat deze aantrekkelijk zijn voor zzp’ers en ondernemingen. Daarbij houden wij rekening met de wensen en behoeften van onze huurders. Zo kijken we bijvoorbeeld of er een ruimte aanwezig is of gecreëerd kan worden voor het organiseren van evenementen."
    :leftToRight="false"
  />

  <MapInteractive :searchCustom="true" class="my-16" />

  <LeegstandNoButton
    image="/_nuxt/assets/images/image-page4-4.png"
    imgAlt="image-page4-4"
    title="Ruimtes promoten"
    description="Via onze website, social media en google marketing promoten wij de kantoorpanden die we willen verhuren. Bovendien zetten we regelmatig online marketingcampagnes in om potentiële huurders van werkplekken en kantoorunits aan te trekken. Tegen een lage prijs ontwikkelen we een website, logo en branding voor je kantoorpand."
    :leftToRight="true"
  />
  <LeegstandNoButton
    image="/_nuxt/assets/images/image-page4-5.png"
    imgAlt="image-page4-5"
    title="Faciliteiten"
    description="Om het plaatje compleet te maken leveren wij pand gebonden faciliteiten zoals receptiediensten (hostess/ kwartiermaker/ Placemaker) en ondersteunde horeca en cateringdiensten (marketing gedreven horecaondernemer/ Wundermart)."
    :leftToRight="false"
  />
  <BgBigGreen
    title1="Aanvragen"
    title2="Geïnteresseerd?"
    title3="Neem dan contact met ons op. Samen zoeken we jouw perfecte werkplek."
    :showButtonSection="true"
    :showEmailSection="false"
  />
</template>

<script>
export default {};
</script>
