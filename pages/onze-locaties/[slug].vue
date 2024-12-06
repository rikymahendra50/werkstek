<template>
  <div class="mt-20"></div>
  <OnzeLocatiesSingle
    :title="OnzeLocatiesData?.name"
    :postcode="OnzeLocatiesData?.postcode"
    :country="OnzeLocatiesData?.country"
    :address="OnzeLocatiesData?.address"
    :location="OnzeLocatiesData?.location?.name"
    :rentType="OnzeLocatiesData?.rent_type"
    :category="OnzeLocatiesData?.category_id"
    :description="OnzeLocatiesData?.description"
    :imageSrc="OnzeLocatiesData?.images"
    :video="OnzeLocatiesData?.video"
    :email="OnzeLocatiesData?.email"
    :phoneNumber="OnzeLocatiesData?.phone_number"
    :latitude="OnzeLocatiesData?.latitude"
    :longitude="OnzeLocatiesData?.longitude"
    :price="OnzeLocatiesData?.price"
    :facility="OnzeLocatiesData?.facility"
    :special="OnzeLocatiesData?.privileges"
    :levelType="OnzeLocatiesData?.level_type"
  />

  <!-- <SliderLocaties class="my-10 py-10" :data="sliderData?.data" /> -->

  <SliderLocatiesSort :data="sortedData"></SliderLocatiesSort>

  <SliderTestimony />
</template>

<script setup>
const route = useRoute();

const slug = computed(() => {
  return route?.params?.slug;
});

const { requestOptions } = useRequestOptions();
const { data, error } = await useFetch(`/products/${slug.value}`, {
  method: "get",
  ...requestOptions,
});

const OnzeLocatiesData = data?.value?.data;

const { data: sliderData } = await useFetch(`/products`, {
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

if (error.value) {
  // console.error("Error fetching data:", error);
}

useHead({
  title: data.value?.data?.name,
});
</script>
