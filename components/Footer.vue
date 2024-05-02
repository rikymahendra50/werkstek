<template>
  <section
    id="footer"
    class="relative border-t-2 border-secondary container-custom"
  >
    <div class="grid sm:grid-cols-3 gap-5 md:gap-0 my-10">
      <div class="flex flex-col gap-5">
        <div class="grid gap-2 text-sm">
          <span class="text-[#808080]">Soorten kantoorruimte</span>
          <ul class="grid gap-4">
            <li
              v-for="item in types?.data.slice(0, 5)"
              @click="handleType(item.id)"
              class="cursor-pointer"
            >
              <span class="hover:text-primary">
                {{ item.name }}
              </span>
            </li>
          </ul>
        </div>
        <div class="grid gap-2 text-sm">
          <span class="text-[#808080]">Meer informatie</span>
          <ul class="grid gap-4">
            <li>
              <a
                href="algemene-voorwaarden-werkstek.pdf"
                target="_blank"
                class="hover:text-primary"
                >Algemene voorwaarden</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col text-sm">
        <div class="grid gap-3">
          <span class="text-[#808080]">Populaire locaties</span>
          <ul class="grid">
            <li class="cursor-pointer grid gap-4">
              <div
                v-for="item in dataLocation?.data.slice(0, 10)"
                @click="handleLocation(item.id)"
                class="hover:text-primary"
              >
                Kantoorruimte {{ item.name }}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col text-sm">
        <div class="grid gap-3">
          <span class="text-[#808080]">Populaire ruimtes</span>
          <ul class="grid gap-4">
            <li
              v-for="item in dataProduct?.data.slice(0, 4)"
              class="cursor-pointer"
            >
              <NuxtLink
                :to="`/onze-locaties/${item.slug}`"
                class="hover:text-primary"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <div
    class="bg-tertiary flex flex-col lg:flex-row items-center container-custom"
  >
    <div class="grid sm:grid-cols-12 place-items-center py-5">
      <div
        class="sm:col-span-8 flex sm:flex-row flex-col gap-4 text-[12px] sm:text-sm"
      >
        <p class="text-[#8C8E91]">
          Copyright All Rights Reserved © 2023 Werkstek
        </p>
        <a
          href="algemene-voorwaarden-werkstek.pdf"
          target="_blank"
          class="hover:text-primary col-span-4"
          >Veel gestelde vragen</a
        >
        <span class="hidden sm:block">|</span>
        <NuxtLink to="privacy-verklaring" class="sm:pr-4 hover:text-primary"
          >Privacy verklaring</NuxtLink
        >
      </div>
      <div class="sm:col-span-4 text-right mt-9 sm:mt-0">
        <p class="text-[12px] opacity-60">Design & Developed by s.p Digital</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { requestOptions } = useRequestOptions();
import { useTimeoutFn } from "@vueuse/core";
const router = useRouter();
const route = useRoute();

const selectedCity = ref("");
const selectedType = ref("");

const { data: dataLocation } = useFetch("/locations", {
  method: "get",
  ...requestOptions,
});

const { data: dataProduct } = useFetch("/products", {
  method: "get",
  ...requestOptions,
});

const { data: types } = useFetch("/types", {
  method: "get",
  ...requestOptions,
});

function handleLocation(locationId) {
  selectedCity.value = locationId;

  // window.location.replace(
  //   `/onze-locaties?page=1&location_id=${selectedCity.value}&type_id=${selectedType.value}&filter[min_area]=&filter[max_area]=&facilities=#section-2`
  // );
  // window.location.href = `/onze-locaties?page=1&location_id=${selectedCity.value}&type_id=${selectedType.value}&filter[min_area]=&filter[max_area]=&facilities=#section-2`;

  router.replace(
    `/onze-locaties?page=1&location_id=${selectedCity.value}&filter[min_area]=&filter[max_area]=&facilities=#section-2`
  );
}

function handleType(typeId) {
  selectedType.value = typeId;
  // window.location.replace(
  //   `/onze-locaties?page=1&location_id=${selectedCity.value}&type_id=${selectedType.value}&filter[min_area]=&filter[max_area]=&facilities=#section-2`
  // );
  router.replace(
    `/onze-locaties?page=1&type_id=${selectedType.value}&filter[min_area]=&filter[max_area]=&facilities=#section-2`
  );
}
</script>
