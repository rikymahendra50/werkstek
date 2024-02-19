<template>
  <div v-if="data && data.data">
    <OnzeLocatiesSingle
      :title="data?.data?.name"
      subTitle="-"
      thirdTitle="-"
      :description="data?.data?.description"
      :imageBanner="data?.data?.images[0].image"
      :imageSrc1="data?.data?.images[0].image"
      :imageSrc2="data?.data?.images[1].image"
      :imageSrc3="data?.data?.images[2].image"
    />
  </div>
  <SliderLocaties class="my-10 py-10" />
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

if (error.value) {
  console.error("Error fetching data:", error);
}
</script>
