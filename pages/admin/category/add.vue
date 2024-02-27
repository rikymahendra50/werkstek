<template>
  <section>
    <div class="flex gap-4">
      <NuxtLink to="/admin/category" class="btn btn-warning btn-outline btn-sm"
        >Back</NuxtLink
      >
      <span class="text-2xl font-bold">Add Category</span>
    </div>

    <VeeForm @submit="onSubmit" v-slot="{ errors }">
      <div class="grid grid-cols-2 mt-3 gap-3">
        <div class="flex flex-col">
          <label for="Name">Name</label>
          <VeeField
            id="Name"
            type="text"
            name="Name"
            placeholder="Input Name"
            class="input input-bordered w-full"
            v-model="formData.name"
            autocomplete="on"
          />
          <VeeErrorMessage name="name" class="text-sm text-error" />
        </div>
        <div class="flex flex-col">
          <label for="shortDesk">Short Description</label>
          <VeeField
            id="shortDesk"
            type="text"
            name="shortDesk"
            placeholder="Short Description"
            class="input input-bordered w-full"
            v-model="formData.short_description"
            autocomplete="on"
          />
          <VeeErrorMessage name="shortDesk" class="text-sm text-error" />
        </div>
      </div>
      <div class="flex flex-col mt-5">
        <label for="fullDesk">Full Description</label>
        <VeeField
          id="fullDesk"
          as="textarea"
          name="fullDesk"
          placeholder="Full Description"
          class="textarea textarea-bordered w-full"
          v-model="formData.full_description"
          autocomplete="on"
        />
      </div>
      <div class="flex justify-end mt-5">
        <button type="submit" :disabled="loading" class="btn btn-success">
          Add Category
        </button>
      </div>
    </VeeForm>
  </section>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();

const formData = ref({
  name: undefined,
  short_description: undefined,
  full_description: undefined,
});

async function onSubmit(values, ctx) {
  loading.value = true;

  const { error } = await useFetch(`/admins/categories`, {
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
      text: "Add Category Success",
    });

    ctx.resetForm();
  }
  loading.value = false;
}

useHead({
  title: "Category",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
