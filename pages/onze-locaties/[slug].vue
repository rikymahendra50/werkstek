<template>
  <div v-if="data && data.data">
    <OnzeLocatiesSingle
      :title="data.data.name"
      :description="data?.data?.description"
      :imageSrc="data?.data?.images"
      :email="data?.data?.email"
      :phoneNumber="data?.data?.phoneNumber"
      :latitude="data?.data?.latitude"
      :longitude="data?.data?.longitude"
      :price="data?.data?.price"
      :facility="data?.data?.facility"
      :privilages="data?.data?.privilages"
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
