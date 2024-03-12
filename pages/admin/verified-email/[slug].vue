<template>
  <div class="">
    <p>{{ slugIni }}</p>
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

const slugIni = ref(slug.value);

useHead({
  title: "Registration",
});

definePageMeta({
  layout: false,
});
</script>
