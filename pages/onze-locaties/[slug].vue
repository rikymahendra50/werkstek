<template>
  <div v-if="data && data.data">
    <OnzeLocatiesSingle
      :title="data?.data?.name"
      :location="data?.data?.location?.name"
      :rentType="data?.data?.rent_type"
      :category="data?.data?.category_id"
      :description="data?.data?.description"
      :imageSrc="data?.data?.images"
      :email="data?.data?.email"
      :phoneNumber="data?.data?.phone_number"
      :latitude="data?.data?.latitude"
      :longitude="data?.data?.longitude"
      :price="data?.data?.price"
      :facility="data?.data?.facility"
      :special="data?.data?.privileges"
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
