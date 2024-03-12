<template>
  <section>
    <CompAdminBackButton link="type" linkTitle="Add Type" />
    <div class="flex justify-center">
      <VeeForm
        @submit="onSubmit"
        v-slot="{ errors }"
        class="min-w-[400px] lg:min-w-[800px] shadow-md p-5"
      >
        <div class="grid grid-cols-1 gap-3">
          <div class="flex flex-col">
            <label for="Name" class="mb-3">Type Name</label>
            <VeeField
              id="Name"
              type="text"
              name="Name"
              placeholder="Input Type Name"
              class="input input-bordered w-full"
              v-model="formData.name"
              autocomplete="off"
            />
            <VeeErrorMessage name="name" class="text-sm text-error" />
          </div>
        </div>
        <div class="flex justify-end mt-5">
          <CompAdminButtonAddForm buttonName="Add Type" :isLoading="loading" />
        </div>
      </VeeForm>
    </div>
  </section>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();

const formData = ref({
  name: undefined,
});

async function onSubmit(values, ctx) {
  loading.value = true;

  const { error } = await useFetch(`/admins/types`, {
    method: "POST",
    body: formData.value,
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
      text: "Add Type Success",
    });

    ctx.resetForm();
  }
  loading.value = false;
}

useHead({
  title: "Type",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
