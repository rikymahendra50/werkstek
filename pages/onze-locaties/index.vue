<template>
  <StatistiekLocaties2
    :useTitle2="false"
    :image="StatistiekLocaties2Data.image"
    :title1="StatistiekLocaties2Data.title1"
    :title2="StatistiekLocaties2Data.title2"
    :title22="StatistiekLocaties2Data.title22"
    :title3="StatistiekLocaties2Data.title3"
    :titleBg1="StatistiekLocaties2Data.titleBg1.title"
    :titleBg2="StatistiekLocaties2Data.titleBg2.title"
    :titleBg3="StatistiekLocaties2Data.titleBg3.title"
    :count1="StatistiekLocaties2Data.titleBg1.count"
    :count2="StatistiekLocaties2Data.titleBg2.count"
    :count3="StatistiekLocaties2Data.titleBg3.count"
  />
  <OnzeLocaties id="section-2" />
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
const { StatistiekLocaties2Data, BgBigGreenData } = useOnzeLocaties();

useHead({
  title: "Onze Locaties",
});
</script>
