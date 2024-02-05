<template>
  <StatistiekLocaties2
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

  <OnzeLocaties :showLocaties="true" />
  <BgBigGreen
    :title1="BgBigGreenData.title1"
    :title2="BgBigGreenData.title2"
    :title3="BgBigGreenData.title3"
    :phoneNumber="BgBigGreenData.phoneNumber"
    :mail="BgBigGreenData.mail"
    :showEmailSection="BgBigGreenData.showEmailSection"
    :showButtonSection="BgBigGreenData.showButtonSection"
    :backgroundColor="'primary'"
  />
</template>

<script setup>
const { StatistiekLocatiesData, BgBigGreenData } = useOnzeLocaties();

useHead({
  title: "OnzeLocaties",
});
</script>
