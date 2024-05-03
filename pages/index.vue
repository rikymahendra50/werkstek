<template>
  <floating-whatsapp />
  <MapInteractive class="py-10 mt-32" />
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
  />
  <SliderLocaties :data="sliderData?.data" />
  <SliderTestimony class="my-20" />
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
</template>

<script setup>
const { requestOptions } = useRequestOptions();
const { StatistiekLocatiesData, BgBigGreenData } = useHome();

const { data: sliderData } = useFetch(`/products`, {
  method: "get",
  ...requestOptions,
});

useHead({
  title: "Home",
});
</script>
