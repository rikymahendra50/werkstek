<template>
  <VerhuurdersHeader
    image="/images/image-page5-1.png"
    title1="Verhuurders"
    title2="Alles over Werkstek"
    description1="Als verhuurder leegstand van kantoorpanden voorkomen? Geen zorgen over de risico’s van leegstand van kantoorgebouwen?"
    description2="Werkstek heeft de kennis en ervaring om leegstaande kantoorpanden in te richten en te verhuren aan ondernemers uit verschillende branches."
    buttonTitle1="Over Werkstek"
    buttonLink1="#"
  />

  <section>
    <div class="grid min-[440px]:grid-cols-12 gap-5">
      <div
        class="bg-tertiary rounded-r-full min-[440px]:col-span-5 flex justify-center items-center"
      >
        <img
          src="/images/logo-werstek-big.svg"
          alt="logo-werstek-big"
          class="h-[50%] xl:w-[100%]"
        />
      </div>
      <div
        class="min-[440px]:col-span-6 flex-flex-col flex justify-center flex-col gap-4 lg:gap-10 mx-4 min-[420px]:w-[mx-2] md:mx-10"
      >
        <p class="text-sm lg:text-lg text-justify">
          Werkstek is een bedrijf dat kantoorruimtes verhuurt in verschillende
          indelingen en groottes, variërend van 20m3 voor werkplekken. Wij
          bieden flexibele oplossingen die aansluiten bij de behoeften van
          ondernemers, waardoor je als verhuurder geen zorgen hoeft te maken
          over de risico's van leegstand.
        </p>
        <NuxtLink to="/">
          <div class="flex items-center gap-3">
            <span
              ><svg
                width="100%"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.6328 0.539062H9.36719C7.02646 0.541131 4.78219 1.4719 3.12705 3.12705C1.4719 4.78219 0.541131 7.02646 0.539062 9.36719V36.6328C0.541131 38.9735 1.4719 41.2178 3.12705 42.873C4.78219 44.5281 7.02646 45.4589 9.36719 45.4609H36.6328C38.9735 45.4589 41.2178 44.5281 42.873 42.873C44.5281 41.2178 45.4589 38.9735 45.4609 36.6328V9.36719C45.4589 7.02646 44.5281 4.78219 42.873 3.12705C41.2178 1.4719 38.9735 0.541131 36.6328 0.539062ZM23.4375 37.0625C23.3825 37.1242 23.3151 37.1736 23.2397 37.2074C23.1643 37.2412 23.0826 37.2587 23 37.2587C22.9174 37.2587 22.8357 37.2412 22.7603 37.2074C22.6849 37.1736 22.6175 37.1242 22.5625 37.0625C22.1562 36.6094 12.5312 25.8125 12.5312 19.875C12.5312 13.7578 17.2188 8.77344 23 8.77344C28.7812 8.77344 33.4688 13.7266 33.4688 19.875C33.4688 25.8125 23.8438 36.6094 23.4375 37.0625Z"
                  fill="#859C81"
                />
                <path
                  d="M23 23.3281C25.4551 23.3281 27.4453 21.3379 27.4453 18.8828C27.4453 16.4277 25.4551 14.4375 23 14.4375C20.5449 14.4375 18.5547 16.4277 18.5547 18.8828C18.5547 21.3379 20.5449 23.3281 23 23.3281Z"
                  fill="#859C81"
                  class="bg-secondary"
                />
              </svg>
            </span>
            <span class="text-black text-[14px] sm:text-sm lg:text-lg"
              >Kantoordreef 123, Werkstad, The Netherlands.</span
            >
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>

  <LeegstandNoButton
    image="/images/image-page5-2.png"
    title="Betaalbare werkplekken"
    description="Als zzp’er of kleine ondernemer huur je bij Werkstek een werkplek of kantoorunit die voor jou betaalbaar is. Wij zorgen voor een makkelijk bereikbare kantoorlocatie en een goede inrichting van jouw werkplek. Als huurder van een werkplek bij Werkstek maak je gebruik van alle gezamenlijke faciliteiten."
  />

  <LeegstandNoButton
    background="bg-[#EEF3ED]"
    image="/images/image-page5-3.png"
    title="Samen ondernemen"
    description="Werkstek biedt onderdak aan huurders uit verschillende branches. Wij vinden het belangrijk dat onze ondernemers elkaar makkelijk weten te vinden. Door gemeenschappelijke ruimtes te creëren en regelmatig evenementen te organiseren brengen we onze huurders bij elkaar. Zo ontstaat een community van ondernemers die elkaar stimuleren en inspireren."
    :leftToRight="false"
  />

  <LeegstandNoButton
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

<script>
export default {};
</script>
