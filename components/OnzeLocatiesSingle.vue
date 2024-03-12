<template>
  <section class="container-custom">
    <TitleHeader2 :title1="location" :title2="title" />
    <div class="md:grid grid-cols-12 gap-2 sm:gap-5">
      <div class="col-span-8">
        <div class="flex flex-col md:min-h-[400px]">
          <!-- Swiper -->
          <div ref="el">
            <Swiper
              :modules="[
                SwiperAutoplay,
                SwiperEffectCreative,
                SwiperNavigation,
                SwiperThumbs,
              ]"
              :slides-per-view="1"
              :effect="'creative'"
              centered-slides
              :thumbs="{ swiper: thumbsSwiper }"
              class="overflow-hidden relative"
              :autoplay="{
                delay: 8000,
                disableOnInteraction: true,
              }"
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
              <SwiperSlide v-for="slide in imageSrc" :key="slide.id">
                <div class="relative">
                  <div class="absolute mt-10">
                    <div
                      class="bg-primary min-w-[140px] lg:min-w-[232px] text-[14px] md:text-lg text-white py-1 px-2 md:py-2 md:px-4 grid"
                    >
                      <span>Prijs :</span>
                      <span>€ {{ price }} per/{{ rentType }}</span>
                    </div>
                  </div>
                  <img
                    :src="slide.image"
                    alt="image"
                    class="w-full h-full aspect-video md:min-h-[350px]"
                  />
                </div>
              </SwiperSlide>
              <div class="h-full w-full bg-gradient-to-l inset-0 z-10">
                <Swiper
                  :modules="[SwiperThumbs]"
                  @swiper="setThumbsSwiper"
                  :slides-per-view="3"
                  :spaceBetween="10"
                  :css-mode="true"
                  :watch-slides-progress="true"
                >
                  <SwiperSlide
                    v-for="slide in imageSrc"
                    :key="slide.id"
                    class="group overflow-hidden mt-3"
                  >
                    <img
                      :src="slide.image"
                      alt="image"
                      class="group-hover:scale-125 transition-all max-h-[150px] md:max-h-[200px] w-full duration-300 object-cover aspect-square"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </Swiper>
          </div>
          <!-- end swiper -->
        </div>
        <div class="mt-2 sm:mt-10 md:mt-16 w-[100%] text-justify">
          <h1
            class="text-[#363636] text-[20px] md:text-[25px] font-semibold my-3"
          >
            <!-- Over WERF5 -->
            {{ title }}
          </h1>
          <div v-html="description" class="text-[12px] md:text-[16px]"></div>
        </div>
        <!-- {{ data.data[0].name }} -->
        <p class="text-[#495057] text-base mt-10 mb-1 ml-2">
          De faciliteiten op de locatie
        </p>
        <div class="w-[95%] min-w-[70px] relative">
          <span class="absolute top-[-39px] text-primary text-4xl">____</span>
          <div class="overflow-x-auto sm:px-3">
            <table class="table md:mt-4">
              <tbody>
                <tr
                  class="flex justify-between items-center"
                  v-for="(item, index) in data.data"
                  :key="item.id"
                >
                  <td class="text-[13px] w-[40%] sm:w-[50%]">
                    {{ item.name }}
                  </td>
                  <td
                    class="w-[60%] sm:w-[50%] flex items-center text-quaternary gap-3"
                  >
                    <img
                      :src="
                        facilitySlugName[index] &&
                        item.name === facilitySlugName[index].facility.name
                          ? '/images/checkbox_checked.svg'
                          : '/images/minus-square.png'
                      "
                      alt="checkBox"
                    />
                    <span>
                      {{ item.name }}
                      {{
                        facilitySlugName[index] &&
                        item.name === facilitySlugName[index].facility.name
                          ? "Available"
                          : "Unavailable"
                      }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-span-4">
        <div v-if="special.length > 0" class="mb-3">
          <ul class="rounded-[8px] bg-[#859C811A] py-4 px-2 md:px-5">
            <li class="py-1 lg:py-2 flex" v-for="item in special">
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
              <span class="pl-2 text-[12px] md:text-[15px]">{{
                item.privilege
              }}</span>
            </li>
          </ul>
        </div>
        <div class="ml-1 md:ml-3">
          <p class="text-[18px] lg:text-[24px] text-[#363636] mb-4">
            Adresgegevens
          </p>
          <ul class="flex flex-col gap-1">
            <li class="text-[14px] md:text-[16px] text-[#4A4A4A]">
              Oudegracht aan de Werf 5
            </li>
            <li class="text-[12px] md:text-[14px] text-[#4A4A4A]">Postcode</li>
            <li class="text-[12px] md:text-[15px] text-[#4A4A4A]">
              {{ location }}
            </li>
            <li class="text-[13px] md:text-[15px] text-[#4A4A4A]">Nederland</li>
          </ul>
          <div class="my-4 flex flex-col gap-3">
            <NuxtLink :to="`tel:${phoneNumber}`" class="flex gap-3">
              <img src="/images/telp-bg-primary.svg" alt="phone-icon" />
              <p class="text-[#404040] text-[13px] md:text-[16px] mt-2">
                Tel : <span>{{ phoneNumber }}</span>
              </p>
            </NuxtLink>
            <NuxtLink :to="`mailto:' + ${email}`" class="flex gap-3">
              <img src="/images/email-bg-primary.svg" alt="phone-icon" />
              <p class="text-[#404040] text-[13px] md:text-[16px]">
                E-mail: <span>{{ email }}</span>
              </p>
            </NuxtLink>
          </div>
        </div>

        <div
          class="flex flex-col sm:flex-row text-white justify-between mt-5 items-start md:gap-3"
        >
          <NuxtLink
            to="/voor-verhuurders"
            class="bg-primary w-[50%] md:w-[90%] py-2 rounded-full text-center max-h-[50px] mb-3 hover:bg-secondary transition"
          >
            <p class="text-[12px] sm:text-lg text-center text-white font-thin">
              Aanvragen
            </p>
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="bg-primary w-[50%] md:w-[90%] py-2 rounded-full text-center max-h-[50px] hover:bg-secondary transition"
          >
            <p class="text-[12px] sm:text-lg text-center text-white font-thin">
              Contact Opnemen
            </p>
          </NuxtLink>
        </div>
        <MapMini :latitude="latitude" :longitude="longitude" />
      </div>
    </div>
  </section>
</template>

<script setup>
const { requestOptions } = useRequestOptions();

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const { data, error } = await useFetch("/facilities", {
  method: "get",
  ...requestOptions,
});

const facilitySlugName = props.facility;

const props = defineProps({
  title: {
    type: String,
  },
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
  price: {},
  facility: {
    type: Array,
  },
  location: {},
  special: {
    type: Array,
  },
});

const checkBoxData = ref([
  {
    id: 1,
    name: "Wifi",
    checkBoxTitle: "Lorem Epsum",
  },
  {
    id: 2,
    name: "Parkeerplaats",
    checkBoxTitle: "Lorem Epsum",
  },
  {
    id: 3,
    name: "Receptie",
    checkBoxTitle: "Lorem Epsum",
  },
  {
    id: 4,
    name: "Koffiebar",
    checkBoxTitle: "Lorem Epsum",
  },
  {
    id: 5,
    name: "Vlakbij het treinstation",
    checkBoxTitle: "Lorem Epsum",
  },
  {
    id: 6,
    name: "Loungeplekken",
    checkBoxTitle: "Lorem Epsum",
  },
  {
    id: 7,
    name: "Vergaderruimtes met videoschermenn",
    checkBoxTitle: "Lorem Epsum",
  },
]);
</script>

<style lang="scss" scoped></style>
