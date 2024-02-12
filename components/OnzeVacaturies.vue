<template>
  <section class="py-20">
    <TitleHeader
      title="Onze locaties"
      secondTitle="Bekijk al onze locaties"
      description="Op deze locaties hebben we kantoorruimtes"
    />
    <div class="flex flex-col md:flex-row container-custom">
      <div class="w-full md:w-[35%]">
        <!-- filter -->
      </div>
      <div
        class="py-5 md:w-[65%] overflow-auto max-h-[400px] md:max-h-[870px] flex flex-col"
      >
        <!-- data -->
        {{ vacaturies }}

        <eachLocaties
          v-for="item in vacaturies"
          :key="item.id"
          :city="item.name"
          :image="item.image"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: vacaturies } = await useFetch(
  "http://api-staging-werkstek.spdigitalhosting.com/api/v1/locations"
);
</script>
