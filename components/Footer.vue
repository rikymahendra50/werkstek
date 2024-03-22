<!-- <template>
  <section id="footer" class="relative border-t-2 border-secondary">
    <div
      class="pb-20 pt-10 flex flex-col lg:flex-row relative container-custom gap-3 sm:gap-0"
    >
      <div class="text-[12px] md:text-[15px] relative sm:w-[70%] lg:w-[40%]">
        <img
          src="/images/logo-werstek-primary.svg"
          alt="logo"
          class="ml-[-10px] sm:ml-[-30px]"
        />
        <p class="text-[15px] pt-5 md:w-[90%]">
          Een gezellige werkplek huren in een leuke omgeving?Op deze locaties
          hebben wij kantoorruimtes
        </p>
        <h4 class="text-[16px] font-semibold pt-3">Volg ons op</h4>
        <div class="social-media flex pt-3">
          <NuxtLink to="https://www.instagram.com/"
            ><img src="/images/instagram.svg" alt="icon-instagram" class="pr-6"
          /></NuxtLink>
          <NuxtLink to="https://www.facebook.com"
            ><img src="/images/facebook.svg" alt="icon-facebook" class="pr-6"
          /></NuxtLink>
          <NuxtLink to="https://www.linkedin.com"
            ><img src="/images/linkedin.svg" alt="icon-linkedin" class="pr-6"
          /></NuxtLink>
          <NuxtLink to="https://www.twitter.com"
            ><img src="/images/twitter.svg" alt="icon-twitter" class="pr-6"
          /></NuxtLink>
        </div>
      </div>
      <div
        class="flex flex-wrap relative text-[#404040] lg:w-1/2 justify-between lg:ml-[40px]"
      >
        <div class="">
          <h1
            class="font-bold leading-[16px] mt-6 mb-1 text-[13px] md:text-[16px]"
          >
            Over ons
          </h1>
          <ul class="text-[12px] md:text-[15px]">
            <li class="pt-3">
              <NuxtLink
                to="/voor-verhuurders"
                class="navlink"
                :class="{ active: isRouteActive('/voor-verhuurders') }"
                >Over ons</NuxtLink
              >
            </li>
            <li class="pt-3">
              <NuxtLink
                to="/onze-locaties"
                class="navlink"
                :class="{ active: isRouteActive('/onze-locaties') }"
                >Locaties</NuxtLink
              >
            </li>
            <li class="pt-3">
              <NuxtLink
                to="/contact"
                class="navlink"
                :class="{ active: isRouteActive('/contact') }"
                >Contact opnemen</NuxtLink
              >
            </li>
            <li class="pt-3">
              <NuxtLink
                to="/faq"
                class="navlink"
                :class="{ active: isRouteActive('/faq') }"
                >Veel gestelde vragen</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="">
          <h1
            class="font-bold leading-[16px] mt-6 mb-1 text-[13px] md:text-[16px]"
          >
            Wat wij doen
          </h1>
          <ul class="text-[12px] md:text-[15px]">
            <NuxtLink to="/"><li class="pt-3">Flex plekkenn</li></NuxtLink>
            <NuxtLink
              to="/onze-locaties"
              :class="{ active: isRouteActive('/onze-locaties') }"
              ><li class="pt-3">Werkplekken</li></NuxtLink
            >
          </ul>
        </div>
        <div class="">
          <h1
            class="font-bold leading-[16px] mt-6 mb-1 text-[13px] md:text-[16px]"
          >
            Contact
          </h1>
          <ul class="text-[12px] md:text-[15px]">
            <NuxtLink :to="'tel:085-0290598'">
              <li class="flex pt-3 items-center gap-2">
                <img
                  src="/images/telp-bg-primary.svg"
                  alt="icon-phone-yellow"
                  class="w-5 sm:w-7"
                />
                <p>085-0290598</p>
              </li>
            </NuxtLink>
            <NuxtLink :to="'mailto:info@werkstek.nl'">
              <li class="flex pt-3 items-center gap-2">
                <img
                  src="/images/email-bg-primary.svg"
                  alt="icon-email.svg"
                  class="w-5 sm:w-7"
                />
                <p>Werkplekken</p>
              </li>
            </NuxtLink>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="bg-tertiary h-[61px] flex items-center lg:text-[16px] text-[10px] relative"
    >
      <p class="md:pl-8 px-4 text-[#8C8E91]">
        Copyright All Rights Reserved © 2023 Werkstek
      </p>
      <NuxtLink to="" class="md:pl-4">Cookkie beleid</NuxtLink>
      <p class="px-2">|</p>
      <NuxtLink class="md:pr-4">Privacy verklaring</NuxtLink>
      <p class="text-sm absolute right-2 bottom-1">
        Design & Developed by s.p Digital
      </p>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    isRouteActive(route) {
      return this.$route.path === route;
    },
  },
};
</script> -->

<template>
  <section
    id="footer"
    class="relative border-t-2 border-secondary container-custom"
  >
    <div class="grid sm:grid-cols-3 gap-5 md:gap-0 my-10">
      <div class="flex flex-col gap-5">
        <div class="grid gap-2">
          <span class="text-[#808080]">Soorten kantoorruimte</span>
          <ul class="grid gap-4">
            <!-- <li>
              <NuxtLink to="/" class="hover:text-primary">Flexplek</NuxtLink>
            </li> -->
            <li>
              <NuxtLink to="/onze-locaties" class="hover:text-primary"
                >Kantoorruimte</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="grid gap-2">
          <span class="text-[#808080]">Meer informatie</span>
          <ul class="grid gap-4">
            <li>
              <a
                href="algemene-voorwaarden-werkstek.pdf"
                target="_blank"
                class="hover:text-primary"
                >Algemene voorwaarden</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="grid gap-3">
          <span class="text-[#808080]">Populaire locaties</span>
          <ul class="grid gap-4">
            <li
              v-for="item in dataLocation?.data"
              @click="handelLocation(item.id)"
              class="cursor-pointer"
            >
              <span class="hover:text-primary">
                Kantoorruimte {{ item.name }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="grid gap-3">
          <span class="text-[#808080]">Populaire ruimtes</span>
          <ul class="grid gap-4">
            <li v-for="item in dataProduct?.data" class="cursor-pointer">
              <NuxtLink
                :to="`/onze-locaties/${item.slug}`"
                class="hover:text-primary"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- <div class="bg-tertiary flex items-center">
    <div class="h-[61px] grid grid-cols-2 lg:text-[16px] text-[10px] relative">
      <p class="md:pl-8 px-4 ">
        Copyright All Rights Reserved © 2023 Werkstek
      </p>
      <a
        href="algemene-voorwaarden-werkstek.pdf"
        target="_blank"
        class="md:pl-4 hover:text-primary"
        >Veel gestelde vragen</a
      >
      <p class="px-2">|</p>
      <NuxtLink to="privacy-verklaring" class="md:pr-4 hover:text-primary"
        >Privacy verklaring</NuxtLink
      >
      <p class="text-[9px] sm:text-sm right-2 bottom-1 pr-5">
        Design & Developed by s.p Digital
      </p>
    </div>
  </div> -->
  <div
    class="bg-tertiary flex flex-col lg:flex-row items-center container-custom"
  >
    <div class="grid sm:grid-cols-12 place-items-center py-5">
      <div class="sm:col-span-8 flex sm:flex-row flex-col gap-4">
        <p class="text-[#8C8E91]">
          Copyright All Rights Reserved © 2023 Werkstek
        </p>
        <a
          href="algemene-voorwaarden-werkstek.pdf"
          target="_blank"
          class="hover:text-primary col-span-4"
          >Veel gestelde vragen</a
        >
        <span class="hidden sm:block">|</span>
        <NuxtLink to="privacy-verklaring" class="sm:pr-4 hover:text-primary"
          >Privacy verklaring</NuxtLink
        >
      </div>
      <div class="sm:col-span-4 text-right mt-9 sm:mt-0">
        <p class="text-[12px] opacity-60">Design & Developed by s.p Digital</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { requestOptions } = useRequestOptions();
import { useTimeoutFn } from "@vueuse/core";
const router = useRouter();
const route = useRoute();

const selectedCity = ref("");

const { data: dataLocation } = useFetch("/locations", {
  method: "get",
  ...requestOptions,
});

const { data: dataProduct } = useFetch("/products", {
  method: "get",
  ...requestOptions,
});

function handelLocation(locationId) {
  selectedCity.value = locationId;
  router.push(
    `/onze-locaties?page=1&location_id=${selectedCity.value}&filter[min_area]=&filter[max_area]=&facilities=`
  );
}

function handleProduct(slug) {
  router.push(`onze-locaties/${slug}`);
}
</script>
