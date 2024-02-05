<template>
  <HeaderWCity
    title1="Onze community"
    title2="De Werkstek community"
    description="Ontmoet je graag ondernemers uit verschillende branches die in hetzelfde kantoorgebouw werken? Dan zit je bij Werkstek goed. Wij hebben een gezellige community van enthousiaste ondernemers die elkaar gemakkelijk weten te vinden."
  />

  <Blog :showButton="false" :dontShowTitle="false" class="my-10" />

  <Blog2 />

  <LeegstandNoButton
    image="/images/img-page10-1.png"
    imgAlt="image-page4-2"
    title="Leegstand vullen"
    description="Wil je je kennis en ervaring delen met onze ambitieuze ondernemers? Vind je het leuk om plannen en ideeën uit te wisselen met anderen? Wil je jouw visie op werken en ondernemen onder de aandacht brengen?"
    description2="Werkstek zorgt hiervoor door bijvoorbeeld regelmatig leuke evenementen in een ontspannen sfeer te organiseren waarin iedereen kan netwerken. Onze gezellige community creëert daarmee mogelijkheden voor creatieve en succesvolle samenwerkingen. Daarmee helpen we elkaar verder met het behalen van onze doelen."
    titledescription2="Bij Werkstek ontmoet je elkaar dagelijks op de werkvloer of in de gemeenschappelijke ruimtes."
  />

  <BgBigGreen
    title1="Aanmelden"
    title2="Je bedrijf in de spotlights?"
    title3="Wil je een werkplek of kantoorunit huren? Dan kun je je natuurlijk meteen inschrijven. Je kunt ook gebruik maken van ons stappenplan, zodat er een juiste match is tussen jou en je toekomstige werkplek in het kantoorgebouw van jouw keuze."
    :showButtonSection="true"
    :showEmailSection="false"
    linkTitle="Verstuur je video"
    :showPhoneEmail="false"
    :backgroundColor="'secondary'"
  />
</template>

<script setup>
useHead({
  title: "WerkstekCommunity",
});
</script>
