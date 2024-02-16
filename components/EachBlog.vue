<template>
  <section>
    <span
      class="bg-tertiary absolute top-0 z-[-99] w-full min-h-[315px] md:min-h-[515px]"
    ></span>
    <div class="lg:container-custom mx-10 flex flex-col py-10 lg:py-20">
      <h1 class="text-primary text-[18px] sm:text-[20px] md:text-[30px]">
        Blog
      </h1>
      <p
        class="text-[#404040] text-xl sm:text-[26px] md:text-[36px] mb-3 lg:mb-10"
      >
        {{ title }}
      </p>
      <div
        class="min-h-[200px] md:min-h-[400px]"
        :style="{
          backgroundImage: `url('${imageSrc}')`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }"
      ></div>

      <!-- author small screen -->
      <div class="block lg:hidden my-3 min-[400px]:my-5 sm:my-7 p-3">
        <div class="flex items-center max-h-[150px] overflow-hidden shadow-sm">
          <img
            src="/images/author.png"
            alt="author"
            class="max-w-[15%] sm:max-w-[4rem]"
          />
          <div class="flex flex-col pl-4 max-w-[70%]">
            <p
              class="text-[0.9rem] min-[400px]:text-base overflow-ellipsis overflow-hidden sm:text-lg font-bold"
            >
              Luci Avetisyan
            </p>
            <p
              class="text-[0.5rem] min-[400px]:text-[14px] sm:text-lg overflow-ellipsis overflow-hidden"
            >
              Luci vitae dapibus rhoncus. Eget etiam aenean nisi montes felis
              pretium donec veni. Pede…
            </p>
            <div class="flex gap-2 mt-2">
              <NuxtLink to="/"
                ><img
                  src="/images/behance.svg"
                  alt="behance"
                  class="max-w-[20px] sm:max-w-[30px]"
                />
              </NuxtLink>
              <NuxtLink to="/"
                ><img
                  src="/images/myspace.svg"
                  alt="myspace"
                  class="max-w-[20px] sm:max-w-[30px]"
              /></NuxtLink>
              <NuxtLink to="/">
                <img
                  src="/images/medium.svg"
                  alt="medium"
                  class="max-w-[20px] sm:max-w-[30px]"
                />
              </NuxtLink>
              <NuxtLink to="/">
                <img
                  src="/images/github.svg"
                  alt="github"
                  class="max-w-[20px] sm:max-w-[30px]"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
        <NuxtLink to="/" class="w-full mt-2 md:mt-4 flex justify-end">
          <div class="flex flex-col">
            <img src="/images/share.svg" class="max-w-[20px] h-[20px]" />
            <p class="text-[14px] md:text-[16px]">share</p>
          </div>
        </NuxtLink>
      </div>
      <div class="flex lg:mt-20">
        <div class="flex flex-col lg:w-[70%]">
          <p class="leading-9 text-[16px]">
            <!-- In de snel evoluerende wereld van vandaag, waar flexibiliteit,
            innovatie en samenwerking centraal staan, zijn gedeelde
            kantoorruimtes uitgegroeid tot een essentieel hulpmiddel voor
            freelancers, startups en kleine bedrijven. Deze dynamische
            werkomgevingen bieden niet alleen een betaalbare en professionele
            plek om te werken, maar stimuleren ook groei en succes op
            verschillende manieren. Bij Werkstek begrijpen we de waarde van
            netwerken en zetten we ons in om deze gemeenschappen te
            ondersteunen. Hier is waarom gedeelde kantoorruimtes de toekomst van
            werken vertegenwoordigen: -->
            {{ body }}
          </p>
          <!-- <div class="mt-10">
            <h1 class="font-bold pb-4 text-[20px]">
              Flexibiliteit in ruimte en kosten
            </h1>
            <p class="leading-9 text-[16px]">
              Een van de meest opvallende voordelen van gedeelde kantoorruimtes
              is de flexibiliteit die ze bieden. Freelancers, startups en kleine
              bedrijven kunnen de ruimte aanpassen aan hun behoeften zonder zich
              zorgen te maken over langlopende leaseovereenkomsten of enorme
              kapitaalinvesteringen. Werkstek biedt diverse huuropties, van
              tijdelijke bureaus tot privékantoren, waardoor huurders de
              flexibiliteit hebben om te schalen zoals nodig.
            </p>
          </div>
          <div class="mt-10">
            <h1 class="font-bold pb-4 text-[16px] md:text-[20px]">
              Samenwerking en netwerken
            </h1>
            <p class="leading-9 text-[14px] md:text-[16px]">
              Gedeelde kantoorruimtes brengen professionals uit diverse sectoren
              bij elkaar onder één dak. Deze nabijheid creëert onverwachte
              kansen voor samenwerking en netwerken. Bij Werkstek moedigen we
              actief gemeenschapsopbouw aan, waardoor huurders de kans krijgen
              om contact te leggen met andere gelijkgestemde individuen, hun
              netwerk uit te breiden en mogelijk zelfs nieuwe zakelijke
              partnerschappe-n te sluiten.
            </p>
          </div>
          <div class="mt-10">
            <h1 class="font-bold pb-4 text-[16px] md:text-[20px]">
              Professionele uitstraling
            </h1>
            <p class="leading-9 text-[14px] md:text-[16px]">
              Een professionele uitstraling is van cruciaal belang voor het
              opbouwen van vertrouwen bij klanten en investeerders. Werkstek
              biedt aantrekkelijk ontworpen kantoorruimtes die indruk maken en
              een representatieve uitstraling hebben. Dit stelt freelancers en
              startups in staat om met vertrouwen te werken en indruk te maken
              op potentiële klanten.
            </p>
          </div>
          <div class="mt-10">
            <h1 class="font-bold pb-4 text-[18px] md:text-[20px]">
              Gemeenschappelijke voorzieningen en ondersteuning
            </h1>
            <p class="leading-9 text-[16px]">
              Bij Werkstek gaan we verder dan alleen het aanbieden van ruimte.
              We voorzien in gedeelde voorzieningen zoals vergaderruimtes,
              keukens en high-speed internet, wat de productiviteit verhoogt en
              kosten bespaart. Ons ondersteuningsteam staat altijd klaar om te
              helpen bij technische problemen of andere behoeften, waardoor
              huurders zich kunnen concentreren op hun kernactiviteiten.
            </p>
          </div>
          <div class="mt-10">
            <h1 class="font-bold pb-4 text-[18px] md:text-[20px]">
              Toegang tot expertise
            </h1>
            <p class="leading-9 text-[14px] md:text-[16px]">
              In een wereld waar flexibiliteit en gemeenschap steeds
              belangrijker worden, bieden coworking-ruimtes een platform voor
              individuen en bedrijven om uit te blinken. Bij Werkstek zijn we
              trots om deel uit te maken van deze beweging en om gemeenschappen
              te ondersteunen die groeien, innoveren en slagen. We blijven ons
              inzetten om een inspirerende en productieve werkplek te bieden die
              bijdraagt aan het succes van onze huurders. Samen ondernemen we de
              toekomst van werk!
            </p>
          </div>
          <p class="mt-10 leading-8 text-[14px] md:text-[16px]">
            In gedeelde kantoorruimtes zoals die van Werkstek is er vaak een
            diversiteit aan professionals met verschillende vaardigheden en
            achtergronden. Dit betekent dat je gemakkelijk toegang hebt tot
            expertise en advies van anderen in de gemeenschap. Het delen van
            kennis en ervaring kan helpen bij het oplossen van problemen, het
            ontwikkelen van nieuwe ideeën en het versnellen van groei.
          </p> -->
          <!-- comment -->
          <div
            class="flex mt-10 gap-5 items-center sm:items-start p-2 shadow-md rounded-lg"
            v-for="(DataComment, index) in comment"
            :key="DataComment.id"
          >
            <img
              :src="`/images/person-comment-1.png`"
              alt="person-comment-1"
              class="object-cover max-w-[100px] max-h-[100px]"
            />
            <div class="flex flex-col gap-2 md:gap-4 w-full">
              <h3 class="text-[#121416] text-[20px] md:text-[24px]">
                {{ DataComment.name }}
              </h3>
              <p class="text-[#6D767E] text-[14px] lg:text-[18px]">
                {{ DataComment.comment }}
              </p>
              <div class="flex gap-2 mt-2">
                <NuxtLink :to="DataComment.behance"
                  ><img src="/images/behance.svg" alt="behance" />
                </NuxtLink>
                <NuxtLink :to="DataComment.myspace"
                  ><img src="/images/myspace.svg" alt="myspace"
                /></NuxtLink>
                <NuxtLink :to="DataComment.medium">
                  <img src="/images/medium.svg" alt="medium" />
                </NuxtLink>
                <NuxtLink :to="DataComment.github">
                  <img src="/images/github.svg" alt="github" />
                </NuxtLink>
              </div>
              <span class="text-right opacity-50">{{
                DataComment.created_at
              }}</span>
            </div>
          </div>
          <!-- <div class="flex justify-center">
            <button
              @click="showMoreFunc"
              class="bg-primary max-w-[300px] mt-10 focus:outline-none rounded-full text-white p-3 hover:bg-secondary transition"
            >
              {{ showMore ? "Tampilkan lebih sedikit" : "Schrijf een reactie" }}
            </button>
          </div> -->
        </div>
        <!-- author -->
        <div class="hidden lg:block lg:w-[30%]">
          <div class="lg:flex flex-col items-center">
            <h1 class="text-[#121416] text-[18px]">AUTHOR</h1>
            <h3 class="text-[20px]">Luci Avetisyan</h3>
            <img src="/images/author.png" alt="author" class="my-4" />
            <p class="text-center leading-9 text-[#ADADAD]">
              Luci vitae dapibus rhoncus. Eget etiam aenean nisi montes felis
              pretium donec veni. Pede…
            </p>
            <div class="flex gap-2 mt-2">
              <NuxtLink to="/"
                ><img src="/images/behance.svg" alt="behance" />
              </NuxtLink>
              <NuxtLink to="/"
                ><img src="/images/myspace.svg" alt="myspace"
              /></NuxtLink>
              <NuxtLink to="/">
                <img src="/images/medium.svg" alt="medium" />
              </NuxtLink>
              <NuxtLink to="/">
                <img src="/images/github.svg" alt="github" />
              </NuxtLink>
            </div>
          </div>
          <div class="flex justify-center">
            <div @click="sharePage" class="cursor-pointer">
              <div
                class="flex flex-col mt-24 max-w-[20px] h-[20px] justify-center items-center"
              >
                <img src="/images/share.svg" />
                <p class="text-[14px] md:text-[16px]">share</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showMore: false,
      slice2: 1,
    };
  },
  methods: {
    showMoreFunc() {
      this.slice2 += 1;
      if ((this.comment.length = this.slice2)) {
        this.showMore = true;
      }
    },
    sharePage() {
      if (navigator.share) {
        navigator
          .share({
            title: document.title,
            text: "Check out this page!",
            url: window.location.href,
          })
          .then(() => console.log("Page shared successfully"))
          .catch((error) => console.error("Error sharing page:", error));
      } else {
        console.log("Web Share API is not supported");
      }
    },
  },
  props: {
    title: {
      type: String,
    },
    imageSrc: {
      type: String,
    },
    imageAlt: {
      type: String,
    },
    body: {
      type: String,
    },
    comment: {},
  },
};
</script>
