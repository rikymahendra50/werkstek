<template>
  <section>
    <HeaderWCity
      title1="Bekijk onze locaties"
      title2="De Werkstek Vacatures"
      description="Lorem ipsum dolor sit amet, solor ut adipiscing elit.Lorem ipsum dolor sit amet, solor ut adipiscing elit."
    />
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 my-20 gap-10">
        <div class="col-span-1 max-h-[400px]">
          <img
            :src="dataAll?.images[0]?.image"
            alt="Lees alles"
            class="object-cover h-full w-full"
          />
        </div>
        <div
          class="flex flex-col text-[#1C1F35] text-[35px] justify-center gap-3"
        >
          <h1 class="font-semibold mb-5">Vacature info</h1>
          <p class="text-[18px] md:text-[20px]">
            Locatie : {{ dataAll?.location?.name }}
          </p>
          <p class="text-[18px] md:text-[20px]">Categorie : Lorem</p>
          <p class="text-[18px] md:text-[20px]">Datum : Lorem</p>
          <p class="text-[18px] md:text-[20px]">Soort : Lorem</p>
          <p class="text-[18px] md:text-[20px]">Tags : Lorem</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

const { requestOptions } = useRequestOptions();
const { data, error } = await useFetch(`/products/${slug}`, {
  method: "get",
  ...requestOptions,
});

const dataAll = data?.value?.data;

if (error.value) {
  console.error("Error fetching data:", error);
}

useHead({
  title: data.value?.data?.name,
});
</script>
