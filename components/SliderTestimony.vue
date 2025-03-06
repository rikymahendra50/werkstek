<template>
  <!-- container custom -->
  <section class="md:container-custom">
    <TitleHeader
      title="Meningen"
      secondTitle="Wat vinden onze klanten"
      class="mt-8"
    />
    <div class="my-8 overflow-hidden relative">
      <swiper
        :slidesPerView="slidesPerViewTestimony"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
          el: '.swiper-pagination-custom',
        }"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="swiper-testimony"
      >
        <swiper-slide
          v-for="(itemTestimony, index) in Testimony"
          :key="itemTestimony.id"
        >
          <EachTestimony
            :imageSrc="itemTestimony.imageSrc"
            :imageAlt="itemTestimony.imageAlt"
            :description="itemTestimony.description"
            :testimonyName="itemTestimony.name"
            :position="itemTestimony.position"
          />
        </swiper-slide>
        <div class="swiper-pagination-custom"></div>
      </swiper>
    </div>
  </section>
</template>

<style>
.swiper-pagination-custom {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-20%);
  display: flex;
}

.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background-color: theme("colors.primary");
  opacity: 0.5;
  transition: all 0.3s ease;
  margin-right: 5px;
}

.swiper-pagination-bullet-active {
  width: 30px;
  background-color: theme("colors.primary");
  opacity: 1;
  height: 9px;
  border-radius: 10px;
  margin-right: 5px;
}
</style>

<script>
import { onMounted, onBeforeUnmount, ref } from "vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default {
  data() {
    return {
      Testimony: [
        {
          id: 4,
          imageSrc: "/images/opportunity-vastgoed-b.v.png",
          imageAlt: "opportunity-vastgoed",
          description:
            "Werkstek is voor ons een goede partner. Inmiddels druk met elkaar voor drie kantoor panden en we zijn beide tevreden. <br/> Professioneel, correct en slagvaardig.",
          name: "Maurits Kuppens",
          position: "Opportunity Vastgoed B.V.",
        },
        {
          id: 5,
          imageSrc: "/images/crmd.jpg",
          imageAlt: "crmd",
          description:
            "Werkstek biedt onze kantoorlocaties een mooi concept wat laagdrempelig is voor lokale ondernemers om te huren en professioneel is voor ons als vastgoedbeheerder om mee samen te werken. <br/> <br/> Wij werken al jaren prettig samen met Ernst. De betrokkenheid voelt alsof wij zijn enige klant zijn.",
          name: "Yor Berkhout",
          position: "Vastgoed Manager",
        },
        {
          id: 1,
          imageSrc: "/images/icon-werstek.svg",
          imageAlt: "MARC ZANDBERGEN",
          description:
            "Werkstek is een erg doeltreffend werkplek- en verhuurconcept. Met zowel tijdelijke als langere termijn oplossingen wordt er actief meegedacht met en waarde toegevoegd voor de gebouweigenaar alsook de hurende ondernemers En uiteraard een hele prettige samenwerking!",
          name: "MARC ZANDBERGEN",
          position: "Unifore",
        },
        {
          id: 2,
          imageSrc: "/images/icon-werstek.svg",
          imageAlt: "ERIK WERNERS",
          description:
            "Vanuit people@places hebben we zeer goede ervaringen met Werkstek. Er wordt altijd snel geschakeld en het contact met Ernst verloopt prettig. Hij kijkt altijd naar een oplossing voor alle partijen. We werken met Werkstek op verschillende locaties naar alle tevredenheid. Ernst is correct, commercieel gedreven en betrokken en altijd op zoek naar het beste resultaat.",
          name: "ERIK WERNERS",
          position: "people@places",
        },
        {
          id: 3,
          imageSrc: "/images/icon-werstek.svg",
          imageAlt: "TON VAN NAMEN",
          description: "Simon werkt uitstekend met Werkstek van Ernst Wilton",
          name: "TON VAN NAMEN",
          position: "simon",
        },
        {
          id: 6,
          imageSrc: "/images/icon-werstek.svg",
          imageAlt: "icon-werstek",
          description:
            "”Per direct beschikbaar!”, ….. klinkt als een mooie Marketing uitspraak, maar blijkt bij Werkstek ook daadwerkelijk realiteit! Voor diverse cliënten hebben wij via Werkstek inmiddels meerdere kantoren gehuurd, welke ook daadwerkelijk diezelfde dag nog beschikbaar waren! Korte lijnen, meedenken met het probleem van de klant, flexibiliteit en snel schakelen! Dat is waar de huidige kantoorgebruiker op zit te wachten.",
          name: "Daan van der Meulen",
          position: "LaGuardia Amsterdam Real Estate B.V.",
        },
        {
          id: 7,
          imageSrc: "/images/icon-werstek.svg",
          imageAlt: "icon-werstek",
          description:
            "Werkstek / Ernst Wilton is een daadkrachtige vastgoedpartner waar wij langjarig prettig mee samenwerken.",
          name: "Stefan Gales",
          position: "Grimonte Investment Management BV",
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slidesPerViewTestimony = ref(1);

    const handleResizeTestimony = () => {
      slidesPerViewTestimony.value = window.innerWidth > 697 ? 2 : 1;
    };

    onMounted(() => {
      handleResizeTestimony();
      window.addEventListener("resize", handleResizeTestimony);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResizeTestimony);
    });

    return {
      slidesPerViewTestimony,
      modules: [Autoplay, Pagination],
    };
  },
};
</script>
