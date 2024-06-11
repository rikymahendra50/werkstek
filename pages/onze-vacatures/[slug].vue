<template>
  <div class="mt-28"></div>
  <section>
    <HeaderWCity
      title1="Bekijk onze locaties"
      title2="De Werkstek Vacatures"
      description="Lorem ipsum dolor sit amet, solor ut adipiscing elit.Lorem ipsum dolor sit amet, solor ut adipiscing elit."
    />
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 my-20 gap-10">
        <div class="col-span-1 max-h-[200px] md:max-h-[400px]">
          <img
            :src="dataAll?.image"
            alt="Lees alles"
            class="object-cover h-full w-full"
          />
        </div>
        <div
          class="flex flex-col text-[#1C1F35] justify-center gap-3 text-[18px]"
        >
          <h1 class="font-semibold mb-5 text-[25px]">Vacature info</h1>
          <p>Locatie : {{ dataAll?.location?.name }}</p>
          <p>Categorie : {{ dataAll?.category }}</p>
          <p>Datum : {{ formatDate(dataAll?.updated_at) }}</p>
          <p>
            Soort : {{ dataAll?.types.map((item) => item.tpe_name).join(", ") }}
          </p>
          <p>Tags : {{ dataAll?.tags.map((item) => item.name).join(", ") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;
const { formatDate } = useConvertTime();

const { requestOptions } = useRequestOptions();
const { data, error } = await useFetch(`/jobs/${slug}`, {
  method: "get",
  ...requestOptions,
});

const dataAll = data?.value?.data;

if (error.value) {
  console.error("Error fetching data:", error);
}

useHead({
  title: data.value?.data?.title,
});
</script>
