<template>
  <section
    class="bg-tertiary h-[850px] sm:h-[900px] lg:h-[1109px] relative flex items-center py-10"
  >
    <span class="bg-bgdot bg-no-repeat w-[30%] h-full absolute"></span>
    <div class="grid md:grid-rows-1 md:grid-cols-2 z-10">
      <div class="container-custom flex items-center">
        <div class="grid">
          <p class="text-[19px] lg:text-[24px]">Welkom bij Werkstek</p>
          <p class="text-[35px] lg:text-[55px]">De leukste kantoorruimtes</p>
          <p class="text-[12px] lg:text-[20px]">
            De perfecte werkplek voor elke organisatie. Kies voor betaalbare
            huur in een professionele omgeving op een gunstige locatie, en maak
            deel uit van een ondernemende en inspirerende community.
          </p>
        </div>
      </div>
      <div class="grid relative mt-5 justify-items-end">
        <img
          src="@/assets/images/img-home-1.png"
          alt="test"
          class="z-10 w-[80%] sm:w-[90%] md:w-[98%] lg:w-full"
        />
        <div
          class="bg-primary1 h-[70%] grid grid-rows-1 grid-cols-3 lg:grid-cols-5 absolute bottom-[-80px] md:bottom-[-100px] right-10 md:right-[50px] w-[80%] sm:w-[90%] md:w-[98%] items-end pb-5 pl-4 lg:pl-10"
          style="border-radius: 50px 10px"
        >
          <div class="text-white">
            <p class="text-[18px] md:text-[24px] font-semibold">
              280 <span class="text-[#00985B]">+</span>
            </p>
            <p class="text-[12px] md:text-[16px] font-normal">Locaties</p>
          </div>
          <div class="text-white">
            <p class="text-[18px] md:text-[24px] font-semibold">
              15 <span class="text-[#00985B]">+</span>
            </p>
            <p class="text-[12px] md:text-[16px] font-normal">Statistiek 2</p>
          </div>
          <div class="text-white">
            <p class="text-[18px] md:text-[24px] font-semibold">
              49 <span class="text-[#00985B]">+</span>
            </p>
            <p class="text-[12px] md:text-[16px] font-normal">Statistiek 3</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
