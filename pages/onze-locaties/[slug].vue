<template>
  <div v-if="data && data.data">
    <OnzeLocatiesSingle
      :title="OnzeLocatiesData?.name"
      :location="OnzeLocatiesData?.location?.name"
      :rentType="OnzeLocatiesData?.rent_type"
      :category="OnzeLocatiesData?.category_id"
      :description="OnzeLocatiesData?.description"
      :imageSrc="OnzeLocatiesData?.images"
      :email="OnzeLocatiesData?.email"
      :phoneNumber="OnzeLocatiesData?.phone_number"
      :latitude="OnzeLocatiesData?.latitude"
      :longitude="OnzeLocatiesData?.longitude"
      :price="OnzeLocatiesData?.price"
      :facility="OnzeLocatiesData?.facility"
      :special="OnzeLocatiesData?.privileges"
    />
  </div>
  <SliderLocaties class="my-10 py-10" :data="sliderData?.data" />

  <SliderTestimony />
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

const { requestOptions } = useRequestOptions();
const { data, error } = await useFetch(`/products/${slug}`, {
  method: "get",
  ...requestOptions,
});

const OnzeLocatiesData = data?.value?.data;

const { data: sliderData } = await useFetch(`/products`, {
  method: "get",
  ...requestOptions,
});

if (error.value) {
  console.error("Error fetching data:", error);
}

useHead({
  title: data.value?.data?.name,
});
</script>
