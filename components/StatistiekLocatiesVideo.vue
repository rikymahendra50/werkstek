<template>
  <div class="mt-16 sm:mt-20 mb-16 sm:mb-20 relative">
    <div class="formobile md:hidden">
      <section class="flex items-center" :class="classcustom">
        <div class="grid md:grid-rows-1 md:grid-cols-12 container-custom -z-10">
          <div
            class="flex items-start mt-6 lg:mt-[35px] xl:mt-[45px] col-span-5"
          >
            <div class="grid gap-2">
              <span class="text-[19px] font-semibold">{{ title1 }}</span>
              <span
                class="text-[30px] md:text-[35px] lg:text-[40px] font-bold"
                >{{ title2 }}</span
              >
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
                <ButtonSM
                  :buttonTitle="buttonTitle2"
                  :buttonLink="buttonLink2"
                />
              </div>
            </div>
          </div>
          <div class="grid relative mt-5 justify-items-end col-span-7">
            <div
              class="w-[95%] min-[500px]:w-[70%] sm:w-[80%] lg:w-[100%] relative"
            >
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
                  class="w-full h-full object-cover min-h-[300px] md:min-h-[400px] lg:min-h-[644px] rounded-3xl"
                  autoplay
                  loop
                  muted
                >
                  <source :src="video" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="container-custom mt-[-100px] w-[100%]">
        <div
          class="bg-white w-full rounded-[20px] py-4 sm:grid sm:grid-cols-12 shadow-md"
        >
          <!-- col1 -->
          <div
            class="sm:col-span-4 flex justify-center items-center mb-2 sm:mb-0"
          >
            <img
              src="/images/building-map-interactive.png"
              alt="building-icon"
              class="w-16 h-16"
            />
            <p
              class="text-secondary text-xl sm:text-2xl lg:text-3xl font-medium z-10 ml-[-20px]"
            >
              Waar bent u <br />
              naar op zoek?
            </p>
          </div>
          <!-- end col1 -->
          <!-- col2 -->
          <div
            class="grid min-[370px]:grid-cols-12 sm:grid-cols-1 md:grid-cols-12 col-span-6 lg:col-span-6 items-center sm:px-0 lg:px-5 sm:gap-2 px-2"
          >
            <div
              v-for="(category, index) in categories"
              :key="index"
              class="col-span-6"
            >
              <p
                class="text-[12px] sm:text-[14px] pb-1 sm:pb-3 pl-2 lg:pl-3 lg:pb-2"
              >
                {{ category.title }}
              </p>
              <div
                class="relative"
                v-if="category.title === 'Zoek een Locatie'"
              >
                <div
                  @click="toggleDropdown(category)"
                  class="italic w-full text-[12px] sm:text-[14px] flex items-center justify-between bg-[rgb(247,247,247)] rounded-full px-2 pl-4 min-h-[40px] cursor-pointer sm:min-h-[50px] mb-2 sm:mb-5 md:mb-0 text-[#676767]"
                >
                  {{ category.selectedOption }}
                  <div
                    class="max-w-[30px] min-h-[30px] bg-quaternary rounded-full flex items-center justify-center"
                  >
                    <img
                      src="/images/arrow-right.svg"
                      alt="arrow"
                      class="rotate-90"
                    />
                  </div>
                </div>
                <ul
                  v-if="category.showDropdown"
                  class="absolute text-[10px] dropdownMap max-h-[200px] overflow-hidden overflow-y-auto lg:text-[14px] top-[100%] left-0 bg-[#F7F7F7] rounded-[5px] mt-1 w-full text-quaternary z-20"
                >
                  <li
                    v-for="(item, index) in city"
                    :key="index"
                    @click="selectOptionCity(category, item.name, item.id)"
                    class="cursor-pointer hover:bg-secondary transition hover:text-tertiary px-3 py-2"
                  >
                    {{ item.name }}
                  </li>
                </ul>
              </div>
              <div
                class="relative"
                v-if="category.title === 'Zoek op een prijs'"
              >
                <div
                  @click="toggleDropdown(category)"
                  class="italic w-full text-[12px] sm:text-[14px] flex items-center justify-between bg-[rgb(247,247,247)] rounded-full px-2 pl-4 min-h-[40px] sm:min-h-[50px] cursor-pointer mb-2 sm:mb-5 md:mb-0 text-[#676767]"
                >
                  € {{ category.selectedOption }}
                  <div
                    class="max-w-[30px] min-h-[30px] bg-quaternary rounded-full flex items-center justify-center"
                  >
                    <img
                      src="/images/arrow-right.svg"
                      alt="arrow"
                      class="rotate-90"
                    />
                  </div>
                </div>
                <ul
                  v-if="category.showDropdown"
                  class="absolute text-[10px] dropdownMap max-h-[200px] overflow-hidden overflow-y-auto lg:text-[14px] top-[100%] left-0 bg-[#F7F7F7] rounded-[5px] mt-1 w-full text-quaternary z-20"
                >
                  <li
                    v-for="(item, index) in numericPricesT"
                    :key="index"
                    @click="selectOptionPrice(category, item, item)"
                    class="cursor-pointer hover:bg-secondary transition hover:text-tertiary px-3 py-2"
                  >
                    € {{ item }}
                  </li>
                </ul>
              </div>
              <!-- col3 -->
            </div>
          </div>
          <!-- end col2 -->
          <!-- col3 -->
          <div
            class="flex justify-end sm:justify-center sm:items-center md:justify-start lg:justify-center md:mb-5 min-[320px]:px-5 sm:px-0 col-span-2"
          >
            <a
              href="#map"
              class="btn bg-primary text-white md:mt-5 hover:bg-primary w-[55px] h-[55px] sm:w-[65px] sm:h-[60px] lg:w-[76px] lg:h-[76px] rounded-[15px] sm:rounded-[20px] z-10"
              @click="performSearch"
            >
              <Icon name="iconamoon:search-thin" class="text-white w-10 h-10" />
            </a>
          </div>
          <!-- end col3 -->
        </div>
      </div>
    </div>
    <div class="forpc hidden md:block">
      <div
        class="container-custom md:absolute w-[100%] lg:w-[95%] sm:-bottom-4 xl:bottom-0 min-[1440px]:bottom-20"
      >
        <div
          class="bg-white w-full rounded-[20px] py-4 sm:grid sm:grid-cols-12 shadow-md"
        >
          <!-- col1 -->
          <div
            class="sm:col-span-4 flex justify-center items-center mb-2 sm:mb-0 border-green-500"
          >
            <img
              src="/images/building-map-interactive.png"
              alt="building-icon"
              class="w-16 h-16"
            />
            <p
              class="text-secondary text-xl sm:text-2xl lg:text-3xl font-medium z-10 ml-[-20px]"
            >
              Waar bent u <br />
              naar op zoek?
            </p>
          </div>
          <!-- end col1 -->
          <!-- col2 -->
          <div
            class="grid min-[370px]:grid-cols-12 sm:grid-cols-1 md:grid-cols-12 col-span-6 lg:col-span-6 items-center sm:px-0 lg:px-5 sm:gap-2"
          >
            <div
              v-for="(category, index) in categories"
              :key="index"
              class="col-span-6"
            >
              <p
                class="text-[12px] sm:text-[14px] pb-1 sm:pb-3 pl-2 lg:pl-3 lg:pb-2"
              >
                {{ category.title }}
              </p>
              <div
                class="relative"
                v-if="category.title === 'Zoek een Locatie'"
              >
                <div
                  @click="toggleDropdown(category)"
                  class="italic w-full text-[12px] sm:text-[14px] flex items-center justify-between bg-[rgb(247,247,247)] rounded-full px-2 pl-4 min-h-[40px] cursor-pointer sm:min-h-[50px] mb-2 sm:mb-5 md:mb-0 text-[#676767]"
                >
                  {{ category.selectedOption }}
                  <div
                    class="max-w-[30px] min-h-[30px] bg-quaternary rounded-full flex items-center justify-center"
                  >
                    <img
                      src="/images/arrow-right.svg"
                      alt="arrow"
                      class="rotate-90"
                    />
                  </div>
                </div>
                <ul
                  v-if="category.showDropdown"
                  class="absolute text-[10px] dropdownMap max-h-[200px] overflow-hidden overflow-y-auto lg:text-[14px] top-[100%] left-0 bg-[#F7F7F7] rounded-[5px] mt-1 w-full text-quaternary z-20"
                >
                  <li
                    v-for="(item, index) in city"
                    :key="index"
                    @click="selectOptionCity(category, item.name, item.id)"
                    class="cursor-pointer hover:bg-secondary transition hover:text-tertiary px-3 py-2"
                  >
                    {{ item.name }}
                  </li>
                </ul>
              </div>
              <div
                class="relative"
                v-if="category.title === 'Zoek op een prijs'"
              >
                <div
                  @click="toggleDropdown(category)"
                  class="italic w-full text-[12px] sm:text-[14px] flex items-center justify-between bg-[rgb(247,247,247)] rounded-full px-2 pl-4 min-h-[40px] sm:min-h-[50px] cursor-pointer mb-2 sm:mb-5 md:mb-0 text-[#676767]"
                >
                  € {{ category.selectedOption }}
                  <div
                    class="max-w-[30px] min-h-[30px] bg-quaternary rounded-full flex items-center justify-center"
                  >
                    <img
                      src="/images/arrow-right.svg"
                      alt="arrow"
                      class="rotate-90"
                    />
                  </div>
                </div>
                <ul
                  v-if="category.showDropdown"
                  class="absolute text-[10px] dropdownMap max-h-[200px] overflow-hidden overflow-y-auto lg:text-[14px] top-[100%] left-0 bg-[#F7F7F7] rounded-[5px] mt-1 w-full text-quaternary z-20"
                >
                  <li
                    v-for="(item, index) in numericPricesT"
                    :key="index"
                    @click="selectOptionPrice(category, item, item)"
                    class="cursor-pointer hover:bg-secondary transition hover:text-tertiary px-3 py-2"
                  >
                    € {{ item }}
                  </li>
                </ul>
              </div>
              <!-- col3 -->
            </div>
          </div>
          <!-- end col2 -->
          <!-- col3 -->
          <div
            class="flex justify-end sm:justify-center sm:items-center md:justify-start lg:justify-center md:mb-5 min-[320px]:px-5 sm:px-0 col-span-2"
          >
            <a
              href="#map"
              class="btn bg-primary text-white md:mt-5 hover:bg-primary w-[55px] h-[55px] sm:w-[65px] sm:h-[60px] lg:w-[76px] lg:h-[76px] rounded-[15px] sm:rounded-[20px] z-10"
              @click="performSearch"
            >
              <Icon name="iconamoon:search-thin" class="text-white w-10 h-10" />
            </a>
          </div>
          <!-- end col3 -->
        </div>
      </div>
      <section class="flex items-center" :class="classcustom">
        <div
          class="grid md:grid-rows-1 md:grid-cols-12 container-custom -z-10 min-[1500px]:gap-10 mt-2"
        >
          <div
            class="flex items-start mt-3 lg:mt-[35px] xl:mt-[38px] col-span-5"
          >
            <div class="grid gap-2">
              <span class="text-[19px] font-semibold">{{ title1 }}</span>
              <span
                class="text-[30px] md:text-[35px] lg:text-[40px] font-bold"
                >{{ title2 }}</span
              >
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
                <ButtonSM
                  :buttonTitle="buttonTitle2"
                  :buttonLink="buttonLink2"
                />
              </div>
            </div>
          </div>
          <div class="grid relative mt-5 justify-items-end col-span-7">
            <div
              class="w-[95%] min-[500px]:w-[70%] sm:w-[80%] lg:w-[100%] relative"
            >
              <div class="shape relative">
                <div class="z-[999] absolute right-0 w-full">
                  <div
                    class="test w-[50px] lg:w-[100px] lg:h-[100px] h-[50px] mt-[-1px]"
                  ></div>
                  <div class="triangle"></div>
                  <div
                    class="triangle2 absolute top-[-1px] ml-[50px] lg:ml-[100px]"
                  ></div>
                </div>
                <video
                  class="w-full h-full object-cover min-h-[300px] md:min-h-[400px] lg:min-h-[482px] min-[1440px]:min-h-[582px] rounded-3xl"
                  autoplay
                  loop
                  muted
                >
                  <source :src="video" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const { loading } = useRequestHelper();

const props = defineProps({
  video: {
    type: String,
  },
  image: {
    type: String,
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
});

// data
const selectedCity = ref();
const selectedMinPrice = ref();

const { requestOptions } = useRequestOptions();
const { data, error } = await useFetch(`/products`, {
  method: "get",
  ...requestOptions,
});
const { data: locationData } = await useFetch("/locations", {
  method: "get",
  ...requestOptions,
});

const numericPrices = data?.value?.data?.map((item) => parseFloat(item.price));
const uniqueNumericPrices = [];
numericPrices.forEach((price) => {
  if (!uniqueNumericPrices.includes(price)) {
    uniqueNumericPrices.push(price);
  }
});
let numericPricesT = ref(uniqueNumericPrices);
const highestPrice = Math.max(...numericPrices);
let minestPrice = Math.min(...numericPrices);

const arrayLocation = locationData?.value?.data?.map((item) => item);
let city = ref(arrayLocation);
let firstLocation = ref(arrayLocation[0]?.name);

const categories = ref([
  {
    title: "Zoek een Locatie",
    selectedOption: firstLocation,
    showDropdown: false,
    options: city,
  },
  {
    title: "Zoek op een prijs",
    selectedOption: minestPrice,
    showDropdown: false,
    options: numericPricesT,
  },
]);

const emit = defineEmits([
  "isPerformSearch",
  "isSelectedCity",
  "isSelectedMinPrice",
]);

const selectOptionCity = (category, option, id) => {
  category.selectedOption = option;
  category.showDropdown = false;
  selectedCity.value = id;
  emit("isSelectedCity", selectedCity.value);
};

const selectOptionPrice = (category, option, id) => {
  category.selectedOption = option;
  category.showDropdown = false;
  selectedMinPrice.value = id;
  emit("isSelectedMinPrice", selectedMinPrice.value);
};

const toggleDropdown = (category) => {
  category.showDropdown = !category.showDropdown;
};

const isPerformSearchT = ref();

function performSearch() {
  isPerformSearchT.value = !isPerformSearchT.value;
  emit("isPerformSearch", isPerformSearchT.value);
}
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
  border: none;
}
</style>
