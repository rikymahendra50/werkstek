<template>
  <section class="bg-tertiary py-20 relative">
    <div class="flex flex-col items-center justify-center h-full py-10">
      <span class="bg-bgdot bg-no-repeat w-[30%] h-full absolute left-0"></span>
      <span
        class="bg-primary1 w-[60%] max-w-[710px] h-[20%] sm:h-[100%] max-h-[376px] absolute top-24 left-28 sm:top-14 sm:left-24 bg-shape-orange"
      ></span>
      <div class="flex z-10 w-[80%]">
        <div class="flex-col">
          <div
            class="flex flex-wrap max-w-[613px] w-[100%] max-h-[462px] justify-end"
          >
            <img :src="Layout5Data[0].imageSrc" alt="image-1" />
          </div>
          <div
            class="flex flex-wrap max-w-[613px] w-[100%] max-h-[391px] justify-end"
          >
            <img
              src="/images/Bekijk alle locaties van Werkstek.png"
              alt="image-3"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-wrap max-w-[512px] w-[100%] max-h-[428px]">
            <img src="/images/Bekijk onze Vacatures.png" alt="image-2" />
          </div>
          <div
            class="flex flex-wrap max-w-[512px] w-[100%] max-h-[428px] mt-[-0.68rem]"
          >
            <img
              src="/images/Bekijk alle over de Werkstek communitie.png"
              alt="image-4"
            />
          </div>
        </div>
      </div>
      <span
        class="bg-primary1 w-[60%] max-w-[710px] h-[20%] sm:h-[100%] max-h-[376px] absolute bottom-24 right-28 sm:bottom-14 sm:right-24 bg-shape-orange"
      ></span>
    </div>
  </section>
</template>

<style>
.bg-shape-orange {
  border-radius: 50px 10px;
}
</style>

<script>
export default {
  data() {
    return {
      Layout5Data: [
        {
          title: "Lees alles over Werkstek",
          imageSrc: "/images/Lees alles over Werkstek.png",
          imageAlt: "image1",
        },
      ],
    };
  },
};
</script>
