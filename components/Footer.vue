<template>
  <section id="footer" class="relative border-t-2 border-secondary">
    <div
      class="pb-20 pt-10 flex flex-col lg:flex-row relative container-custom gap-3 sm:gap-0"
    >
      <div class="text-[12px] md:text-[15px] relative sm:w-[70%] lg:w-[40%]">
        <Werkstek class="ml-[-10px] sm:ml-[-30px]" />
        <p class="text-[15px] pt-5 md:w-[90%]">
          Een gezellige werkplek huren in een leuke omgeving?Op deze locaties
          hebben wij kantoorruimtes
        </p>
        <h4 class="text-[16px] font-semibold pt-3">Volg ons op</h4>
        <div class="social-media flex pt-3">
          <NuxtLink to="/"
            ><img src="/images/instagram.svg" alt="icon-instagram" class="pr-6"
          /></NuxtLink>
          <NuxtLink to="/"
            ><img src="/images/facebook.svg" alt="icon-facebook" class="pr-6"
          /></NuxtLink>
          <NuxtLink to="/"
            ><img src="/images/linkedin.svg" alt="icon-linkedin" class="pr-6"
          /></NuxtLink>
          <NuxtLink to="/"
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
          <!-- <hr class="border-b-2 border-primary lg:border-[#1FAB71] w-[50px]" /> -->
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
          <!-- <hr class="border-b-2 border-primary lg:border-[#1FAB71] w-[50px]" /> -->
          <ul class="text-[12px] md:text-[15px]">
            <NuxtLink to="/"><li class="pt-3">Flex plekkenn</li></NuxtLink>
            <NuxtLink to="/"><li class="pt-3">Werkplekken</li></NuxtLink>
          </ul>
        </div>
        <div class="">
          <h1
            class="font-bold leading-[16px] mt-6 mb-1 text-[13px] md:text-[16px]"
          >
            Contact
          </h1>
          <!-- <hr class="border-b-2 border-primary lg:border-[#1FAB71] w-[50px]" /> -->
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
      class="bg-tertiary h-[61px] flex items-center lg:text-[16px] text-[10px]"
    >
      <p class="md:pl-8 px-4 text-[#8C8E91]">
        Copyright All Rights Reserved © 2023 Werkstek
      </p>
      <NuxtLink to="" class="md:pl-4">Cookkie beleid</NuxtLink>
      <p class="px-2">|</p>
      <NuxtLink class="md:pr-4">Privacy verklaring</NuxtLink>
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
</script>
