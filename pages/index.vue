<template>
  <floating-whatsapp />
  <StatistiekLocatiesVideo
    video="/images/video_test.mp4"
    :image="StatistiekLocatiesData.image"
    :title1="StatistiekLocatiesData.title1"
    :title2="StatistiekLocatiesData.title2"
    :title3="StatistiekLocatiesData.title3"
    :titleBg1="StatistiekLocatiesData.titleBg1.title"
    :titleBg2="StatistiekLocatiesData.titleBg2.title"
    :titleBg3="StatistiekLocatiesData.titleBg3.title"
    :count1="StatistiekLocatiesData.titleBg1.count"
    :count2="StatistiekLocatiesData.titleBg2.count"
    :count3="StatistiekLocatiesData.titleBg3.count"
  />

  <MapInteractive class="py-10" />
  <SliderLocaties />
  <SliderTestimony class="my-20" />
  <FourImages />
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
const { StatistiekLocatiesData, BgBigGreenData } = useHome();
useHead({
  title: "Home",
});
</script>
