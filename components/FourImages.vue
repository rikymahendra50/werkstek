<!-- <template>
  <section class="bg-tertiary py-20 relative">
    <div class="flex flex-col items-center justify-center h-full py-10">
      <span class="bg-bgdot bg-no-repeat w-[30%] h-full absolute left-0"></span>
      <span
        class="bg-primary1 w-[60%] max-w-[710px] h-[20%] sm:h-[100%] max-h-[376px] absolute top-24 left-28 sm:top-14 sm:left-24 bg-shape-orange"
      ></span>
      <div class="flex z-10 text-[#F5F5F5] border-4 border-red-600 w-[90%]">
        <div
          class="flex-col border-2 border-red-200 max-w-[613px] max-h-[853px]"
        >
          <div
            class="flex flex-wrap justify-center items-center border-2 border-green-600"
            :style="{
              backgroundImage: `url('${Data[0].imageSrc}')`,
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${Data[0].imageSrc}')`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }"
          >
            <h1 class="text-[20px] xl:text-[35px] w-[50%]">
              {{ Data[0].title }}
            </h1>
          </div>
          <div
            class="flex flex-wrap justify-center items-center"
            :style="{
              backgroundImage: `url('${Data[1].imageSrc}')`,
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${Data[1].imageSrc}')`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }"
          >
            <h1 class="text-[20px] xl:text-[35px] w-[90%]">
              {{ Data[1].title }}
            </h1>
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
.test {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<script>
export default {
  data() {
    return {
      Data: [
        {
          title: "Lees alles over Werkstek",
          imageSrc: "/images/Lees alles over Werkstek.png",
          imageAlt: "image1",
        },
        {
          title: "Bekijk alle locaties van Werkstek",
          imageSrc: "/images/Bekijk alle locaties van Werkstek.png",
          imageAlt: "image2",
        },
        {
          title: "Bekijk alle locaties van Werkstek",
          imageSrc: "/images/Bekijk onze Vacatures.png",
          imageAlt: "image3",
        },
        {
          title: "test",
          imageSrc: "/images/Bekijk alle over de Werkstek communitie.png",
          imageAlt: "image4",
        },
      ],
    };
  },
};
</script> -->

<template>
  <section class="bg-tertiary py-20 relative">
    <div class="flex flex-col items-center justify-center h-full py-10">
      <span class="bg-bgdot bg-no-repeat w-[30%] h-full absolute left-0"></span>
      <span
        class="bg-primary1 w-[60%] max-w-[710px] h-[20%] sm:h-[100%] max-h-[376px] absolute top-24 left-28 sm:top-14 sm:left-24 bg-shape-orange"
      ></span>
      <div
        class="flex z-10 w-[88%] h-[250px] sm:h-[400px] md:h-[600px] lg:h-[853px] text-white"
      >
        <div class="flex-col max-w-[613px] w-full">
          <div
            class="flex flex-wrap w-[100%] h-[54%]"
            :style="{
              backgroundImage: `url('${Data[0].imageSrc}')`,
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${Data[0].imageSrc}')`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }"
          >
            <div class="w-full flex justify-center items-center">
              <h1 class="text-[14px] sm:text-[20px] xl:text-[35px] md:w-[50%]">
                {{ Data[0].title }}
              </h1>
            </div>
          </div>
          <div
            class="flex flex-wrap w-[100%] max-h-[391px] h-[46%]"
            :style="{
              backgroundImage: `url('${Data[1].imageSrc}')`,
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${Data[1].imageSrc}')`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }"
          >
            <div class="w-full flex justify-center items-center">
              <h1
                class="text-[14px] sm:text-[20px] xl:text-[35px] md:w-[50%] pl-2"
              >
                {{ Data[1].title }}
              </h1>
            </div>
          </div>
        </div>
        <div class="flex flex-col max-w-[512px] w-full">
          <div
            class="flex flex-wrap w-full max-h-[428px] h-[54%] justify-center items-center"
            :style="{
              backgroundImage: `url('${Data[2].imageSrc}')`,
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${Data[2].imageSrc}')`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }"
          >
            <h1
              class="text-[14px] sm:text-[20px] xl:text-[35px] md:w-[50%] pl-2 sm:pl-0"
            >
              {{ Data[2].title }}
            </h1>
          </div>
          <div
            class="flex flex-wrap w-full max-h-[428px] h-[49.7%] justify-center items-center"
            :style="{
              backgroundImage: `url('${Data[3].imageSrc}')`,
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${Data[3].imageSrc}')`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }"
          >
            <h1
              class="text-[14px] sm:text-[20px] xl:text-[35px] md:w-[50%] pl-4 sm:pl-0"
            >
              {{ Data[3].title }}
            </h1>
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
      Data: [
        {
          title: "Lees alles over Werkstek",
          imageSrc: "/images/Lees alles over Werkstek.png",
          imageAlt: "image1",
        },
        {
          title: "Bekijk alle locaties van Werkstek",
          imageSrc: "/images/Bekijk alle locaties van Werkstek.png",
          imageAlt: "image2",
        },
        {
          title: "Bekijk alle locaties van Werkstek",
          imageSrc: "/images/Bekijk onze Vacatures.png",
          imageAlt: "image3",
        },
        {
          title: "Bekijk alle over de Werkstek communitie",
          imageSrc: "/images/Bekijk alle over de Werkstek communitie.png",
          imageAlt: "image4",
        },
      ],
    };
  },
};
</script>
