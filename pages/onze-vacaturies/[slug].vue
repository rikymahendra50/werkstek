<template>
  <section>
    <HeaderWCity
      title1="Bekijk onze locaties"
      title2="De Werkstek Vacatures"
      description="Lorem ipsum dolor sit amet, solor ut adipiscing elit.Lorem ipsum dolor sit amet, solor ut adipiscing elit."
    />
    <!-- <pre>
      {{ dataAll }}
    </pre> -->
    <div class="container-custom">
      <div class="flex flex-col md:flex-row my-20 gap-10">
        <img
          src="/images/Lees alles over Werkstek.png"
          alt="Lees alles"
          class="max-w-[662px] max-h-[442px]"
        />
        <div
          class="flex flex-col text-[#1C1F35] text-[35px] justify-center gap-3"
        >
          <h1 class="font-semibold mb-5">Vacature info</h1>
          <p class="text-[18px] md:text-[20px]">
            Locatie : {{ dataAll?.location?.name }}
          </p>
          <p class="text-[18px] md:text-[20px]">Categorie :</p>
          <p class="text-[18px] md:text-[20px]">Datum :</p>
          <p class="text-[18px] md:text-[20px]">Soort :</p>
          <p class="text-[18px] md:text-[20px]">Tags :</p>
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

console.log(data.value);

if (error.value) {
  console.error("Error fetching data:", error);
}
</script>
