<template>
  <!-- <StatistiekLocatiesVideo
    video="/images/home-video.mov"
    :image="StatistiekLocatiesData?.image"
    :title1="StatistiekLocatiesData?.title1"
    :title2="StatistiekLocatiesData?.title2"
    :title3="StatistiekLocatiesData?.title3"
    :titleBg1="StatistiekLocatiesData?.titleBg1.title"
    :titleBg2="StatistiekLocatiesData?.titleBg2.title"
    :titleBg3="StatistiekLocatiesData?.titleBg3.title"
    :count1="StatistiekLocatiesData?.titleBg1.count"
    :count2="StatistiekLocatiesData?.titleBg2.count"
    :count3="StatistiekLocatiesData?.titleBg3.count"
    @isPerformSearch="performSearch"
    @isSelectedCity="selectedCity"
    @isSelectedMinPrice="selectedMinPrice"
  /> -->

  <StatistiekLocatiesVideo
    video="/images/home-video.mov"
    :image="StatistiekLocatiesData?.image"
    :title1="StatistiekLocatiesData?.title1"
    :title2="StatistiekLocatiesData?.title2"
    :title3="StatistiekLocatiesData?.title3"
    :titleBg1="StatistiekLocatiesData?.titleBg1.title"
    :titleBg2="StatistiekLocatiesData?.titleBg2.title"
    :titleBg3="StatistiekLocatiesData?.titleBg3.title"
    :count1="StatistiekLocatiesData?.titleBg1.count"
    :count2="StatistiekLocatiesData?.titleBg2.count"
    :count3="StatistiekLocatiesData?.titleBg3.count"
    @isPerformSearch="performSearch"
    @isSearchCity="searchCity"
  />

  <div class="grid w-full container-custom">
    <div class="grid sm:grid-cols-2 justify-between items-center mb-5 gap-5">
      <div class="flex flex-col gap-2">
        <p
          class="text-[12px] min-[500px]:text-[16px] md:text-lg lg:text-[18px] font-bold"
        >
          Locaties
        </p>
        <p
          class="text-[20px] min-[500px]:text-[25px] md:text-[30px] lg:text-[40px] text-[#231E1F] font-semibold"
        >
          Bekijk onze locaties.
        </p>
        <p
          class="text-[10px] min-[500px]:text-base md:text-lg lg:text-[16px] text-[#777] font-normal"
        >
          Een gezellige werkplek huren in een leuke omgeving? Op deze locaties
          hebben wij kantoorruimtes
        </p>
      </div>
      <div class="flex justify-end">
        <ButtonSM
          buttonTitle="Bekijk alle locaties"
          buttonLink="/onze-locaties"
          class="z-10 hover:bg-secondary hover:bg-opacity-70 hover:text-tertiary"
        />
      </div>
    </div>
  </div>

  <!-- <MapInteractive
    :showSearch="false"
    :selectedCityT="isSelectedCity"
    :selectedMinPriceT="isSelectedMinPrice"
    :SubmitPerform="isPerformSearch"
  /> -->

  <MapInteractive2
    :showSearch="false"
    :searchCityT="isSearchCityComp"
    :SubmitPerform="isPerformSearchComp"
  />

  <div id="map"></div>

  <!-- <SliderLocaties :data="sliderData?.data"></SliderLocaties> -->
  <SliderLocatiesSort :data="sortedData"></SliderLocatiesSort>

  <SliderTestimony class="my-10" />

  <FourImages />
  <div class="my-10">
    <TitleHeader3
      title="Updates & blogs"
      secondTitle="Lees de Werkstek blog"
      description="Op de hoogte blijven van de nieuwste kantoortrends? <br /> Op zoek naar tips en tricks voor ondernemers? Lees dan ook onze inspirerende blogs!"
    />
    <Blog />
  </div>
  <BgBigGreen
    :title1="BgBigGreenData.title1"
    :title2="BgBigGreenData.title2"
    :title3="BgBigGreenData.title3"
    :showButtonSection="BgBigGreenData.showButtonSection"
    :buttonTitle="BgBigGreenData.titleButton"
    :buttonLink="BgBigGreenData.linkButton"
    :showEmailSection="true"
    :show-button-section="false"
    :backgroundColor="'secondary'"
  />

  <!-- <SliderLocaties :data="sliderData?.data"></SliderLocaties> -->

  <!-- <div class="" v-for="item in sortedData">
    {{ item.position }}
  </div> -->

  <!-- <UnderConstraction /> -->
</template>

<script setup>
const { requestOptions } = useRequestOptions();
const { StatistiekLocatiesData, BgBigGreenData } = useHome();

const { data: sliderData } = useFetch(`/products`, {
  method: "get",
  ...requestOptions,
});

const { data: sliderDataTest } = useFetch(`/featured-products`, {
  method: "get",
  ...requestOptions,
});

const sortedData = computed(() => {
  return sliderDataTest?.value?.data
    ?.slice()
    .sort((a, b) => a.position - b.position);
});

// console.log(sliderData.value);

// definePageMeta({
//   layout: false,
// });

useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content:
        "Als verhuurder leegstand van kantoorpanden voorkomen? Geen zorgen over de risico’s van leegstand van kantoorgebouwen?",
    },
  ],
});

const isPerformSearch = ref();
const isSearchCity = ref();

const isPerformSearchComp = computed(() => isPerformSearch.value);
const isSearchCityComp = computed(() => isSearchCity.value);
// const isSelectedCity = ref();
// const isSelectedMinPrice = ref();

function performSearch(data) {
  isPerformSearch.value = data;
}

// function selectedCity(data) {
//   isSelectedCity.value = data;
// }

// function selectedMinPrice(data) {
//   isSelectedMinPrice.value = data;
// }

function searchCity(data) {
  isSearchCity.value = data;
  console.log("Ini di functi searchCity", isSearchCity.value);
}
</script>
