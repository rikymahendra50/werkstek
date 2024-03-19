<template>
  <div class="grid place-items-center items-center h-screen">
    <div class="w-[500px] p-10 shadow-lg grid justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        w="34"
        h="34"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="#F0912D"
          fill-rule="evenodd"
          d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
          clip-rule="evenodd"
        />
      </svg>
      <p>Verified Success</p>
    </div>
  </div>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();
const route = useRoute();

const slug = computed(() => {
  return route.params.slug;
});

const { error } = await useFetch(`/admins/email-verification/${slug.value}`, {
  method: "POST",
  ...requestOptions,
});

useHead({
  title: "Registration",
});

definePageMeta({
  layout: false,
});
</script>
