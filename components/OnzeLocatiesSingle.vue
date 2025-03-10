<template>
  <section class="container-custom">
    <TitleHeader2 :title1="location" :title2="title" :title3="location" />
    <div class="md:grid grid-cols-12 gap-2 sm:gap-5">
      <div class="col-span-8">
        <div class="flex flex-col md:min-h-[400px]">
          <!-- Swiper -->
          <div ref="el">
            <Swiper
              :modules="[SwiperEffectCreative, SwiperNavigation, SwiperThumbs]"
              :slides-per-view="1"
              :effect="'creative'"
              centered-slides
              :thumbs="{ swiper: thumbsSwiper }"
              class="overflow-hidden relative"
              :creative-effect="{
                prev: {
                  shadow: false,
                  translate: ['-20%', 0, -1],
                },
                next: {
                  translate: ['100%', 0, 0],
                },
              }"
            >
              <SwiperSlide v-for="slide in allMedia" :key="slide.id">
                <div class="relative">
                  <div class="absolute mt-5 md:mt-10">
                    <div
                      class="bg-primary min-w-[140px] lg:min-w-[232px] text-[12px] sm:text-[14px] md:text-[16px] text-white py-1 px-2 md:py-2 md:px-4 grid"
                    >
                      <span>Prijs :</span>
                      <span>{{ price }} € per/{{ montOrYear }}</span>
                    </div>
                  </div>
                  <img
                    v-if="slide.image"
                    :src="slide.image"
                    :alt="slide.image"
                    class="w-full h-full aspect-video md:min-h-[350px] object-cover"
                  />
                  <div v-else-if="slide.thumbnail">
                    <video
                      class="w-full h-full aspect-video md:min-h-[350px] object-cover"
                      controls
                    >
                      <source :src="slide.video" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </SwiperSlide>
              <div class="h-full w-full bg-gradient-to-l inset-0 z-10">
                <Swiper
                  :modules="[SwiperThumbs, SwiperNavigation]"
                  @swiper="setThumbsSwiper"
                  :slides-per-view="3"
                  :spaceBetween="10"
                  :navigation="true"
                  :css-mode="true"
                  :watch-slides-progress="true"
                >
                  <template v-for="(slide, index) in allMedia" :key="index">
                    <SwiperSlide
                      class="group overflow-hidden mt-3 cursor-pointer"
                    >
                      <div
                        class="flex items-center justify-center relative"
                        v-if="slide.thumbnail"
                      >
                        <Icon
                          name="solar:play-bold"
                          class="text-white absolute w-10 h-10 md:w-16 md:h-16 opacity-75 transition"
                        />
                        <img
                          :src="slide.thumbnail"
                          :alt="slide.thumbnail"
                          class="group-hover:scale-125 transition-all max-h-[150px] md:max-h-[200px] w-full duration-300 object-cover aspect-square"
                        />
                      </div>
                      <img
                        v-else-if="slide.image"
                        :src="slide.image"
                        :alt="slide.image"
                        class="group-hover:scale-125 transition-all max-h-[150px] md:max-h-[200px] w-full duration-300 object-cover aspect-square"
                      />
                    </SwiperSlide>
                  </template>
                </Swiper>
              </div>
            </Swiper>
          </div>
          <!-- end swiper -->
        </div>
        <div class="mt-2 sm:mt-10 md:mt-9 w-[100%] text-justify">
          <h1 class="text-[#363636] text-[20px] font-semibold my-3">
            {{ title }}
          </h1>
          <span
            v-html="description"
            class="text-[12px] md:text-[14px] deskBody md:leading-9"
          ></span>
        </div>
        <p class="text-[#495057] text-base mt-10 mb-5 sm:mb-1 ml-1">
          De faciliteiten op de locatie
        </p>
        <div class="w-[95%] min-w-[70px] relative">
          <span class="absolute top-[-39px] text-primary text-4xl">____</span>
          <div class="overflow-x-auto">
            <table class="table md:mt-4">
              <tbody>
                <tr
                  class="flex justify-between items-center"
                  v-for="(item, index) in data?.data"
                  :key="item.id"
                >
                  <td class="text-[13px] w-[40%] sm:w-[50%]">
                    {{ item.name }}
                  </td>
                  <td
                    class="w-[60%] sm:w-[50%] flex items-center text-quaternary gap-3"
                  >
                    <img :src="getCheckboxImage(item.name)" alt="checkBox" />
                    <span class="text-sm">
                      {{ item?.name }}
                      {{ getAvailabilityStatus(item.name) }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-span-4">
        <div v-if="special?.length > 0" class="mb-3">
          <ul class="rounded-[8px] bg-[#859C811A] py-4 px-2 md:px-5">
            <li class="py-1 lg:py-2 flex items-center" v-for="item in special">
              <svg
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_0_3781)">
                  <path
                    d="M12.2786 23C4.34698 22.4668 0.575981 14.2711 0.0558555 10.4064C-0.186019 9.40702 -0.139144 -0.387909 11.1086 0.0119072C22.356 0.411724 23.9014 8.14509 23.9816 9.00721C24.2415 11.8059 21.8359 21.7339 12.2786 23Z"
                    class="fill-current text-primary"
                  />
                  <path
                    d="M7.53746 11.021L10.8247 14.3813L16.4621 8.61868"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_3781">
                    <path
                      d="M0 10C0 4.47715 4.47715 0 10 0H14C19.5228 0 24 4.47715 24 10V13C24 18.5228 19.5228 23 14 23H10C4.47715 23 0 18.5228 0 13V10Z"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span class="pl-2 text-[12px] md:text-[14px]">{{
                item.privilege
              }}</span>
            </li>
          </ul>
        </div>
        <div class="ml-1 md:ml-3">
          <p class="text-[14px] lg:text-[20px] text-[#363636] mb-4">
            Adresgegevens
          </p>
          <ul class="flex flex-col gap-1">
            <li class="text-[14px] text-[#4A4A4A]">
              {{ address }}
            </li>
            <li class="text-[12px] text-[#4A4A4A]">
              {{ postcode }}
            </li>
            <li class="text-[12px] md:text-[14px] text-[#4A4A4A]">
              {{ location }}
            </li>
            <li class="text-[13px] md:text-[14px] text-[#4A4A4A]">
              {{ country }}
            </li>
          </ul>
          <div class="my-4 flex flex-col gap-3">
            <NuxtLink
              :to="`tel:${phoneNumber}`"
              class="flex gap-3 items-center"
            >
              <img src="/images/telp-bg-primary.svg" alt="phone-icon" />
              <p class="text-[#404040] text-[14px]">
                Tel : <span>{{ phoneNumber }}</span>
              </p>
            </NuxtLink>
            <NuxtLink
              :to="`mailto:' + ${email}`"
              class="flex gap-3 items-center"
            >
              <img src="/images/email-bg-primary.svg" alt="phone-icon" />
              <p class="text-[#404040] text-[14px]">
                E-mail: <span>{{ email }}</span>
              </p>
            </NuxtLink>
          </div>
        </div>

        <div
          class="flex flex-col sm:flex-row text-white my-5 items-start gap-3"
        >
          <NuxtLink
            to="/contact/#contact-form"
            class="bg-primary w-[50%] md:w-[90%] py-2 rounded-full text-center max-h-[50px] mb-3 hover:bg-secondary transition"
          >
            <p
              class="text-[12px] sm:text-[14px] text-center text-white font-thin"
            >
              Aanvragen
            </p>
          </NuxtLink>
          <!-- <NuxtLink
            to="/contact/#contact-form"
            class="bg-primary w-[50%] md:w-[90%] py-2 rounded-full text-center max-h-[50px] hover:bg-secondary transition"
          >
            <p
              class="text-[12px] sm:text-[14px] text-center text-white font-thin"
            >
              Contact Opnemen
            </p>
          </NuxtLink> -->
          <div class="relative w-[50%] md:w-[90%]">
            <div
              @click="showDropdownContact"
              class="bg-primary cursor-pointer py-2 rounded-full text-center max-h-[50px] hover:bg-secondary transition"
            >
              <p
                class="text-[12px] sm:text-[14px] text-center text-white font-thin"
              >
                Contact Opnemen
              </p>
            </div>
            <div
              class="text-primary flex flex-col my-2 border-primary border rounded-[20px] overflow-hidden"
              v-if="showDropdownContactT"
            >
              <NuxtLink
                :to="`tel:${phoneNumber}`"
                class="flex items-center hover:bg-black hover:text-white transition py-2 px-4"
              >
                <!-- <img src="/images/telp-bg-primary.svg" alt="phone-icon" /> -->
                <p class="text-[14px]">
                  <span>{{ phoneNumber }}</span>
                </p>
              </NuxtLink>
              <NuxtLink
                :to="`mailto:' + ${email}`"
                class="flex items-center hover:bg-black hover:text-white transition py-2 px-4"
              >
                <!-- <img src="/images/email-bg-primary.svg" alt="phone-icon" /> -->
                <p class="text-[14px]">
                  <span>{{ email }}</span>
                </p>
              </NuxtLink>
            </div>
          </div>
        </div>
        <MapMini
          :latitude="latitude"
          :longitude="longitude"
          :levelType="levelType"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  background-position: center;
  background-size: 20px;
  background-repeat: no-repeat;
  background-color: theme("colors.primary");
  width: 30px;
  border-radius: 10px;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background-color: theme("colors.primary");
}

:deep(.swiper-button-prev) {
  background-image: url("/images/arrow-left.svg");
  left: 5px;
}

:deep(.swiper-button-next) {
  background-image: url("/images/arrow-right.svg");
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  content: "";
}

@media (max-width: 1028px) {
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    opacity: 0.6;
    width: 10px;
  }
  :deep(.swiper-button-next) {
    right: 0;
  }
  :deep(.swiper-button-prev) {
    right: 0;
  }
}
</style>

<script setup>
const { requestOptions } = useRequestOptions();

const showDropdownContactT = ref(false);

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const { data, error } = await useFetch("/facilities", {
  method: "get",
  ...requestOptions,
});

const facilitySlugName = props?.facility;

function getCheckboxImage(itemName) {
  return facilitySlugName?.some(
    (facility) => facility?.facility?.name === itemName
  )
    ? "/images/checkbox_checked.svg"
    : "/images/minus-square.png";
}

function getAvailabilityStatus(itemName) {
  return facilitySlugName?.some(
    (facility) => facility?.facility?.name === itemName
  )
    ? " Beschikbaar"
    : " Niet beschikbaar";
}

function showDropdownContact() {
  showDropdownContactT.value = !showDropdownContactT.value;
}

const props = defineProps({
  title: {
    type: String,
  },
  postcode: {
    type: String,
  },
  address: {
    type: String,
  },
  country: {
    type: String,
  },
  type: {
    type: String,
  },
  video: {},
  rentType: {
    type: String,
  },
  location: {
    type: String,
  },
  subTitle: {
    type: String,
  },
  thirdTitle: {
    type: String,
  },
  imageSrc: {
    type: Array,
  },
  description: {
    type: String,
  },
  phoneNumber: {},
  email: {},
  latitude: {},
  longitude: {},
  levelType: {},
  price: {},
  facility: {
    type: Array,
  },
  location: {},
  special: {
    type: Array,
  },
});

const montOrYear = ref();

onMounted(() => {
  formattedRentType();
});

function formattedRentType() {
  if (props.rentType === "monthly") {
    montOrYear.value = "maand";
  } else if (props.rentType === "yearly") {
    montOrYear.value = "jaar";
  }
}

const allMedia = ref([]);

if (Array.isArray(props.imageSrc)) {
  if (props.video) {
    allMedia.value.push(props.video);
  }
  for (let i = 0; i < props.imageSrc.length; i++) {
    allMedia.value.push(props.imageSrc[i]);
  }
}
</script>

<style>
.deskBody ul,
.deskBody ol {
  list-style: revert;
  margin-left: 20px;
}
</style>
