<template>
  <section>
    <div class="flex flex-col container-custom gap-4">
      <div
        class="flex z-10 h-[150px] min-[400px]:h-[200px] sm:h-[400px] md:h-[350px] lg:h-[398px] text-white gap-2"
      >
        <NuxtLink
          to="/over-werkstek"
          class="flex flex-wrap max-w-[488px] w-[40%] h-full rounded-md hover:shadow-xl"
          :class="{ active: isRouteActive('/over-werkstek') }"
          :style="{
            backgroundImage: `url('${Data[0].imageSrc}')`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }"
        >
          <div class="flex justify-center items-end w-full relative">
            <div
              class="h-[45%] sm:h-[30%] md:h-[40%] w-[95%] max-w-[430px] bg-secondary mb-2 rounded-2xl flex items-end pl-2 pb-3 sm:pl-4 sm:pb-4 relative"
            >
              <div
                class="bg-quaternary rounded-full max-w-[22px] sm:max-w-[44px] absolute top-1 right-1 sm:top-3 sm:right-3"
              >
                <img
                  src="/images/arrow-right.svg"
                  alt="arrow"
                  class="rotate-[-40deg]"
                />
              </div>
              <h1
                class="text-[10px] min-[420px]:text-sm sm:text-[20px] lg:text-2xl sm:w-[80%] pl-1"
              >
                {{ Data[0].title }}
              </h1>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/over-werkstek"
          class="flex flex-wrap w-[60%] h-full rounded-md transition hover:shadow-xl"
          :class="{ active: isRouteActive('/over-werkstek') }"
          :style="{
            backgroundImage: `url('${Data[1].imageSrc}')`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }"
        >
          <div class="flex justify-end items-end w-full relative">
            <div
              class="max-w-[430px] h-[45%] sm:h-[30%] md:h-[40%] w-[60%] mr-4 bg-tertiary mb-2 rounded-2xl flex items-end pl-2 pb-3 sm:pl-4 sm:pb-4 relative"
            >
              <div
                class="bg-quaternary rounded-full max-w-[22px] sm:max-w-[44px] absolute top-1 right-1 sm:top-3 sm:right-3"
              >
                <img
                  src="/images/arrow-right.svg"
                  alt="arrow"
                  class="rotate-[-40deg]"
                />
              </div>
              <h1
                class="text-[10px] min-[420px]:text-sm sm:text-[20px] lg:text-2xl sm:w-[60%] pl-1 text-secondary"
              >
                {{ Data[1].title }}
              </h1>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div
        class="flex z-10 h-[200px] sm:h-[400px] md:h-[350px] lg:h-[398px] text-white gap-2"
      >
        <NuxtLink
          to="/over-werkstek"
          class="flex flex-wrap w-[60%] h-full rounded-md transition hover:shadow-xl"
          :class="{ active: isRouteActive('/over-werkstek') }"
          :style="{
            backgroundImage: `url('${Data[2].imageSrc}')`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }"
        >
          <div class="flex justify-start items-end w-full relative">
            <div
              class="max-w-[430px] h-[45%] sm:h-[30%] md:h-[40%] w-[60%] ml-2 lg:ml-4 bg-tertiary mb-2 lg:mb-4 rounded-2xl flex items-end sm:pl-4 sm:pb-4 relative"
            >
              <div
                class="bg-quaternary rounded-full max-w-[22px] sm:max-w-[44px] absolute top-1 right-1 sm:top-3 sm:right-3"
              >
                <img
                  src="/images/arrow-right.svg"
                  alt="arrow"
                  class="rotate-[-40deg]"
                />
              </div>
              <h1
                class="text-[10px] min-[420px]:text-sm sm:text-[20px] lg:text-2xl sm:w-[60%] pl-2 pb-2 text-secondary"
              >
                {{ Data[2].title }}
              </h1>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/over-werkstek"
          class="flex flex-wrap max-w-[488px] w-[40%] h-full rounded-md transition hover:shadow-xl"
          :class="{ active: isRouteActive('/over-werkstek') }"
          :style="{
            backgroundImage: `url('${Data[3].imageSrc}')`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }"
        >
          <div class="flex justify-start items-end w-full relative">
            <div
              class="h-[45%] sm:h-[30%] md:h-[40%] w-[80%] max-w-[430px] bg-secondary mb-2 ml-2 rounded-2xl flex items-end pl-2 pb-3 sm:pl-4 sm:pb-4 relative"
            >
              <div
                class="bg-quaternary rounded-full max-w-[22px] sm:max-w-[44px] absolute top-1 right-1 sm:top-3 sm:right-3"
              >
                <img
                  src="/images/arrow-right.svg"
                  alt="arrow"
                  class="rotate-[-40deg]"
                />
              </div>
              <h1
                class="text-[10px] min-[420px]:text-sm sm:text-[20px] lg:text-2xl lg:pl-2 lg:pb-2 text-tertiary"
              >
                {{ Data[3].title }}
              </h1>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
          title: "Bekijk onze Vacatures",
          imageSrc: "/images/Bekijk onze Vacatures.png",
          imageAlt: "image2",
        },
        {
          title: "Bekijk alle locaties van Werkstek",
          imageSrc: "/images/Bekijk alle locaties van Werkstek.png ",
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
  methods: {
    isRouteActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>
