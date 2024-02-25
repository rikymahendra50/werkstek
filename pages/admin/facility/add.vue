<template>
  <section>
    <div class="flex gap-4">
      <NuxtLink to="/admin/facility" class="btn btn-warning btn-outline btn-sm"
        >Back</NuxtLink
      >
      <span class="text-2xl font-bold">Add Facility</span>
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
          <label for="image">Icon</label>
          <input
            id="image"
            type="file"
            name="image"
            class="input input-bordered w-full"
            accept="image/*"
            v-on:change="handleImageChange"
            autocomplete="on"
          />
          <VeeErrorMessage name="shortDesk" class="text-sm text-error" />
        </div>
      </div>
      <div class="flex justify-end mt-5">
        <button type="submit" :disabled="loading" class="btn btn-success">
          Add Facility
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
  image: undefined,
});

const handleImageChange = (event) => {
  const file = event.target.files[0];
  formData.value.image = file;
};

async function onSubmit(values, ctx) {
  loading.value = true;

  const formDataToSend = new FormData();
  formDataToSend.append("name", formData.value.name);
  formDataToSend.append("image", formData.value.image);

  const { error } = await useFetch(`/admins/facilities`, {
    method: "POST",
    body: formDataToSend.value,
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
      text: "Add Facility Success",
    });

    ctx.resetForm();
  }
  loading.value = false;
}

useHead({
  title: "Add Facility",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
