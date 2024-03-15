<template>
  <CompAdminBackButton link="level-type" linkTitle="Edit Level Type" />
  <div class="grid grid-cols-2 px-3">
    <VeeForm
      @submit="onSubmit"
      :validation-schema="singleNameField"
      v-slot="{ errors }"
      class="grid gap-3"
    >
      <label for="name">Level Type</label>
      <FormTextField
        id="name"
        name="name"
        v-model="name"
        placeholder="Level Type"
        class="input-bordered"
        autocomplete="on"
      />
      <div class="flex justify-end mt-5">
        <CompAdminButtonAddForm
          buttonName="Edit Level Type"
          :isLoading="loading"
        />
      </div>
    </VeeForm>
  </div>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();

const route = useRoute();
const router = useRouter();
const slug = computed(() => {
  return route.params.slug;
});

const { data, pending } = await useFetch(`/admins/level-types/${slug.value}`, {
  method: "get",
  ...requestOptions,
});

const name = ref(data.value.data.name);

async function onSubmit(values, ctx) {
  loading.value = true;

  const { error } = await useFetch(`/admins/level-types/${slug.value}`, {
    method: "PUT",
    body: { name: name.value },
    ...requestOptions,
  });

  if (error.value) {
    ctx.setErrors(transformErrors(error.value?.data));
    snackbar.add({
      type: "error",
      text: error.value?.data?.message ?? "Something went wrong",
    });
  } else {
    snackbar.add({
      type: "success",
      text: "Success Edit Level Type",
    });
    router.push("/admin/level-type");
  }

  loading.value = false;
}

useHead({
  title: data.value?.data?.name,
});

definePageMeta({
  layout: "admin",
  middleware: ["auth", "admin"],
});
</script>
