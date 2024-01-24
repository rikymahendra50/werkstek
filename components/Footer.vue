<template>
  <section id="footer" class="relative border-2">
    <div
      class="pb-20 pt-10 flex flex-col lg:flex-row relative container-custom"
    >
      <div class="text-[12px] md:text-[15px] relative sm:w-[70%] lg:w-[40%]">
        <Werkstek />
        <p class="text-[15px] pt-5 md:w-[90%]">
          Een gezellige werkplek huren in een leuke omgeving?Op deze locaties
          hebben wij kantoorruimtes
        </p>
        <h4 class="text-[16px] font-semibold pt-3">Volg ons op</h4>
        <div class="social-media flex pt-3">
          <a href="#"
            ><img
              src="~/assets/images/instagram.svg"
              alt="icon-instagram"
              class="pr-6"
          /></a>
          <a href="#"
            ><img
              src="~/assets/images/facebook.svg"
              alt="icon-facebook"
              class="pr-6"
          /></a>
          <a href="#"
            ><img
              src="~/assets/images/linkedin.svg"
              alt="icon-linkedin"
              class="pr-6"
          /></a>
          <a href="#"
            ><img
              src="~/assets/images/twitter.svg"
              alt="icon-twitter"
              class="pr-6"
          /></a>
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
          <hr
            class="border-b-2 border-[#F0912D] lg:border-[#1FAB71] w-[50px]"
          />
          <ul class="text-[12px] md:text-[15px]">
            <li class="pt-3">Over ons</li>
            <li class="pt-3">Locaties</li>
            <li class="pt-3">Contact opnemen</li>
            <li class="pt-3">Veel gestelde vragen</li>
          </ul>
        </div>
        <div class="">
          <h1
            class="font-bold leading-[16px] mt-6 mb-1 text-[13px] md:text-[16px]"
          >
            Wat wij doen
          </h1>
          <hr
            class="border-b-2 border-[#F0912D] lg:border-[#1FAB71] w-[50px]"
          />
          <ul class="text-[12px] md:text-[15px]">
            <li class="pt-3">Flex plekkenn</li>
            <li class="pt-3">Werkplekken</li>
          </ul>
        </div>
        <div class="">
          <h1
            class="font-bold leading-[16px] mt-6 mb-1 text-[13px] md:text-[16px]"
          >
            Contact
          </h1>
          <hr class="border-b-2 border-primary lg:border-[#1FAB71] w-[50px]" />
          <ul class="text-[12px] md:text-[15px]">
            <li class="flex pt-3">
              <img
                src="../assets/images/telp.svg"
                alt="icon-phone-yellow"
                class="pr-2 w-[20px] lg:w-[24px]"
              />085-0290598
            </li>
            <li class="flex pt-3">
              <img
                src="../assets/images/email.svg"
                alt="icon-email.svg"
                class="pr-2 w-[20px] lg:w-[24px]"
              />Werkplekken
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="bg-[#EEF3ED] h-[61px] flex items-center lg:text-[16px] text-[10px]"
    >
      <p class="md:pl-8 px-4 text-[#8C8E91]">
        Copyright All Rights Reserved © 2023 Werkstek
      </p>
      <p class="md:pl-4">Cookkie beleid</p>
      <p class="px-2">|</p>
      <p class="md:pr-4">Privacy verklaring</p>
    </div>
  </section>
</template>

<script>
export default {
  // Components navbar
};
</script>
