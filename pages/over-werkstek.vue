<template>
  <div class="mt-16"></div>
  <VerhuurdersHeader
    :image="VerhuurdersHeaderData.image"
    :title1="VerhuurdersHeaderData.title1"
    :title2="VerhuurdersHeaderData.title2"
    :description1="VerhuurdersHeaderData.description1"
    :description2="VerhuurdersHeaderData.description2"
    :buttonTitle1="VerhuurdersHeaderData.buttonTitle1"
    :buttonLink1="VerhuurdersHeaderData.buttonLink1"
  />

  <LogoandLocation class="py-10" />

  <LeegstandNoButton
    :uniqueIdProp="7"
    :image="'/images/over-page2-1.png'"
    title="Betaalbare werkplekken"
    description="Als zzp’er of kleine ondernemer huur je bij Werkstek een werkplek of kantoorunit die voor jou betaalbaar is. Wij zorgen voor een makkelijk bereikbare kantoorlocatie en een goede inrichting van jouw werkplek. Als huurder van een werkplek bij Werkstek maak je gebruik van alle gezamenlijke faciliteiten."
  />

  <LeegstandNoButton
    :uniqueIdProp="8"
    background="bg-[#EEF3ED]"
    :image="'/images/image-page5-3.png'"
    title="Samen ondernemen"
    description="Werkstek biedt onderdak aan huurders uit verschillende branches. Wij vinden het belangrijk dat onze ondernemers elkaar makkelijk weten te vinden. Door gemeenschappelijke ruimtes te creëren en regelmatig evenementen te organiseren brengen we onze huurders bij elkaar. Zo ontstaat een community van ondernemers die elkaar stimuleren en inspireren."
    :leftToRight="false"
  />

  <LeegstandNoButton
    :uniqueIdProp="9"
    image="/images/image-page5-4.png"
    title="Voor verhuurders"
    description="Wil je je kantoorpand op een makkelijke manier verhuren? Werkstek ontzorgt: zowel de inrichting als de verhuur van kantoorruimtes nemen we uit handen. Wij zorgen voor een efficiënte verdeling van de ruimtes en verhuren vervolgens werkplekken en kantoorunits aan zzp’ers en kleine ondernemingen. Zo voorkomen we leegstand van kantoorgebouwen en brengen we vraag en aanbod bij elkaar."
  />

  <BgBigGreen
    title1="Aanmelden"
    title2="Het proces."
    title3="Wil je een werkplek of kantoorunit huren? Dan kun je je natuurlijk meteen inschrijven. Je kunt ook gebruik maken van ons stappenplan, zodat er een juiste match is tussen jou en je toekomstige werkplek in het kantoorgebouw van jouw keuze."
    :showEmailSection="false"
    :showButtonSection="true"
    :showSmallerButton="true"
    linkTitleSmaller="Lees de FAQ"
    linkButtonSmaller="/faq"
    :ShowSmallerButton="true"
    :showPhoneEmail="false"
    :backgroundColor="'secondary'"
  />
</template>

<script setup>
const { VerhuurdersHeaderData } = useOverWerkstek();

useHead({
  title: "Over Werkstek",
});
</script>
