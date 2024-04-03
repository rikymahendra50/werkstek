<template>
  <section
    class="bg-white lg:py-20 relative flex items-center"
    :class="classcustom"
  >
    <div class="grid md:grid-rows-1 md:grid-cols-12 z-10 container-custom">
      <div class="flex items-center mt-10 lg:mt-20 justify-center col-span-5">
        <div class="grid gap-2">
          <span class="text-[19px] font-semibold">{{ title1 }}</span>
          <span class="text-[30px] md:text-[35px] lg:text-[40px] font-bold">{{
            title2
          }}</span>
          <span
            class="text-[12px] md:text-sm mt-3 md:w-[87%] lg:w-[90%] lg:text-lg"
          >
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
      <div class="grid relative mt-5 justify-items-end col-span-7">
        <div class="w-[70%] sm:w-[80%] lg:w-[100%] relative">
          <div class="shape relative">
            <div class="z-[999] absolute right-0 w-full">
              <div
                class="test w-[50px] lg:w-[100px] lg:h-[100px] h-[50px]"
              ></div>
              <div class="triangle"></div>
              <div
                class="triangle2 absolute top-0 ml-[50px] lg:ml-[100px]"
              ></div>
            </div>

            <video
              class="w-full h-full object-cover min-h-[300px] md:min-h-[400px] lg:min-h-[744px] rounded-3xl"
              autoplay
              loop
              muted
            >
              <source :src="video" type="video/mp4" />
            </video>
          </div>
        </div>
        <div
          class="bg-primary grid grid-rows-1 grid-cols-3 z-10 absolute bottom-10 lg:bottom-20 right-4 lg:right-20 w-[90%] md:w-[98%] content-center justify-items-center py-2 lg:py-5 rounded-2xl md:rounded-[30px] px-4 lg:px-10"
        >
          <div class="text-white">
            <p class="text-[24px] sm:text-[36px] font-semibold">
              {{ count1 }} <span class="text-[#00985B]">+</span>
            </p>
            <p class="text-[12px] md:text-[16px] font-normal">{{ titleBg1 }}</p>
          </div>
          <div class="text-white">
            <p class="text-[24px] sm:text-[36px] font-semibold">
              {{ count2 }} <span class="text-[#00985B]">+</span>
            </p>
            <p class="text-[12px] md:text-[16px] font-normal">{{ titleBg2 }}</p>
          </div>
          <div class="text-white">
            <p class="text-[24px] sm:text-[36px] font-semibold">
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
};
</script>

<style scoped>
.shape {
  border-radius: 20% 0% 0% 0% / 0% 22% 78% 0%;
}
.test {
  background-color: white;
  border-radius: 0% 0% 50% 0% / 0% 0% 50% 0%;
}

.triangle {
  height: 50px;
  width: 50px;
  bottom: 0;
  overflow: hidden;
  rotate: 90deg;
}
.triangle:before {
  content: "";
  display: block;
  height: 100%;
  border-radius: 0 0 0 50%;
  box-shadow: 0 0 0 50vw white;
}

.triangle2 {
  height: 50px;
  width: 50px;
  bottom: 0;
  overflow: hidden;
  rotate: 90deg;
}
.triangle2:before {
  content: "";
  display: block;
  height: 100%;
  border-radius: 0 0 0 50%;
  box-shadow: 0 0 0 50vw white;
}
</style>
