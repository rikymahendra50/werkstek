<template>
  <section class="py-16 flex gap-2 container-custom ml-[-20px]">
    <span
      class="bg-quaternary rounded-full min-w-[26px] md:min-w-[46px]"
    ></span>
    <div
      :class="`w-[95%] lg:w-[80%] bg-${backgroundColor} rounded-2xl box-shadow min-h-[318px] lg:min-h-[418px] flex flex-col justify-center`"
    >
      <div
        class="mx-3 sm:mx-5 lg:mx-10 flex flex-col text-white justify-between gap-1 lg:gap-2"
      >
        <div class="w-[90%] lg:w-[60%]">
          <p
            class="text-[12px] md:text-[18px] font-bold text-[#404040] tracking-widest min-[320px]:pt-2 min-[420px]:pt-0"
          >
            {{ title1 }}
          </p>
          <p
            class="text-2xl md:text-3xl leading-normal lg:w-[60%] pt-2 xl:text-[32px]"
          >
            {{ title2 }}
          </p>
          <p class="text-sm md:text-base font-normal lg:w-[80%] pt-2">
            {{ title3 }}
          </p>
        </div>
        <!-- showEmailSection -->
        <div v-if="showEmailSection" class="flex mt-3 w-[90%] lg:w-[50%]">
          <BgBigEmailInput />
        </div>
        <!-- showButtonSection -->
        <div
          v-if="showButtonSection"
          class="flex flex-col min-[400px]:flex-row mt-3 w-[90%] lg:w-[50%] items-center gap-5 my-2"
        >
          <ButtonSM
            :buttonTitle="linkTitle"
            :buttonLink="linkButton"
            class="bg-tertiary bg-opacity-70 text-black"
          />
          <div v-if="showSmallerButton">
            <ButtonSmaller
              :buttonTitle="linkTitleSmaller"
              :buttonLink="linkButtonSmaller"
            />
          </div>
        </div>
        <div v-if="showPhoneEmail" class="flex items-center mt-5">
          <div class="flex phone items-center">
            <img src="/images/white-phone.svg" alt="white-phone" />
            <NuxtLink
              :to="'tel:' + `${phoneNumber}`"
              class="ml-1 lg:ml-3 text-[12px] sm:text-sm"
            >
              {{ phoneNumber }}
            </NuxtLink>
          </div>
          <div class="flex pl-2 lg:pl-10 items-center">
            <img src="/images/white-mail.svg" alt="white-phone" />
            <NuxtLink
              :to="'mailto:' + `${mail}`"
              class="ml-1 lg:ml-3 text-[12px] sm:text-sm"
            >
              {{ mail }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      EmailForm: {
        title: "Vul je Email in",
        buttonEmailTitle: "Schrijf je in",
        buttonEmailLink: "/",
      },
    };
  },
  props: {
    backgroundColor: {
      type: String,
      required: true,
      default: "primary",
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
    phoneNumber: {
      type: String,
      required: false,
      default: "085-0290598",
    },
    mail: {
      type: String,
      required: false,
      default: "info@werkstek.nl",
    },
    showEmailSection: {
      type: Boolean,
      default: false,
    },
    showButtonSection: {
      type: Boolean,
      default: false,
    },
    showSmallerButton: {
      type: Boolean,
    },
    linkTitle: {
      type: String,
      default: "Contact opnemen",
    },
    linkButton: {
      type: String,
      required: false,
      default: "/contact",
    },
    linkTitleSmaller: {
      type: String,
      required: false,
    },
    linkButtonSmaller: {
      type: String,
      required: false,
    },
    showPhoneEmail: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
};
</script>
