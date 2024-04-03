<template>
  <section
    class="bg-white lg:py-20 relative flex items-center"
    :class="classcustom"
  >
    <div class="grid md:grid-rows-1 md:grid-cols-2 z-10">
      <div
        class="container-custom flex items-center mt-10 lg:mt-20 justify-center"
      >
        <div class="grid gap-2">
          <span class="text-[19px] font-semibold">{{ title1 }}</span>
          <span class="text-[35px] sm:text-[45px] font-bold">{{ title2 }}</span>
          <span class="text-[12px] sm:text-[18px] mt-3 md:w-[87%] lg:w-[90%]">
            {{ title3 }}
          </span>
          <div
            class="flex mt-5 lg:mt-10 justify-end md:justify-around lg:justify-start gap-5 max-h-[46px] sm:max-h-[64px]"
            v-if="showButton"
          >
            <ButtonPrimary
              :buttonTitle="buttonTitle1"
              :buttonLink="buttonLink1"
            />
            <ButtonSM :buttonTitle="buttonTitle2" :buttonLink="buttonLink2" />
          </div>
        </div>
      </div>
      <div class="grid relative mt-5 justify-items-end">
        <div class="w-[70%] sm:w-[80%] lg:w-[100%]">
          <div class="shape">
            <div class="test w-[50px] lg:w-[100px] lg:h-[100px] h-[50px]"></div>
            <video
              class="w-full h-full object-cover min-h-[300px] md:min-h-[400px] lg:min-h-[744px]"
              autoplay
              loop
              muted
            >
              <source :src="video" type="video/mp4" />
            </video>
          </div>
        </div>
        <div
          class="bg-primary grid grid-rows-1 grid-cols-3 z-10 absolute bottom-10 lg:bottom-20 right-4 lg:right-20 w-[80%] sm:w-[90%] md:w-[98%] content-center justify-items-center py-2 lg:py-5 rounded-[40px] px-4 lg:px-10"
        >
          <div class="text-white">
            <p class="text-[24px] sm:text-[36px] xl:text-[40px] font-semibold">
              {{ count1 }} <span class="text-[#00985B]">+</span>
            </p>
            <p class="text-[12px] md:text-[16px] font-normal">{{ titleBg1 }}</p>
          </div>
          <div class="text-white">
            <p class="text-[24px] sm:text-[36px] xl:text-[40px] font-semibold">
              {{ count2 }} <span class="text-[#00985B]">+</span>
            </p>
            <p class="text-[12px] md:text-[16px] font-normal">{{ titleBg2 }}</p>
          </div>
          <div class="text-white">
            <p class="text-[24px] sm:text-[36px] xl:text-[40px] font-semibold">
              {{ count3 }} <span class="text-[#00985B]">+</span>
            </p>
            <p class="text-[12px] md:text-[16px] font-normal">{{ titleBg3 }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    video: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    title1: {
      type: String,
      required: true,
    },
    title2: {
      type: String,
      required: true,
    },
    title3: {
      type: String,
      required: true,
    },
    buttonTitle1: {
      type: String,
      required: false,
    },
    buttonLink1: {
      type: String,
      required: false,
    },
    buttonTitle2: {
      type: String,
      required: false,
    },
    buttonLink2: {
      type: String,
      required: false,
    },
    titleBg1: {
      type: String,
      required: true,
    },
    titleBg2: {
      type: String,
      required: true,
    },
    titleBg3: {
      type: String,
      required: true,
    },
    count1: {
      type: Number,
      required: true,
    },
    count2: {
      type: Number,
      required: true,
    },
    count3: {
      type: Number,
      required: true,
    },
    classcustom: {
      type: String,
      required: false,
    },
    showButton: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  //   computed: {
  //     video() {
  //       return require(`@/assets/${this.image}`);
  //     },
  //   },
};
</script>

<style scoped>
.shape {
  border-radius: 20% 0% 0% 0% / 0% 22% 78% 0%;
}
.test {
  position: absolute;
  background-color: white;
  border-radius: 0% 0% 50% 0% / 0% 0% 50% 0%;
}
</style>
