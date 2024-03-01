<template>
  <section>
    <div class="flex gap-4">
      <NuxtLink to="/admin/facility" class="btn btn-warning btn-outline btn-sm"
        >Back</NuxtLink
      >
      <span class="text-2xl font-bold">Add Facility</span>
    </div>
    <VeeForm @submit="onSubmit">
      <div class="grid grid-cols-2 mt-3 gap-3">
        <div class="flex flex-col">
          <label for="Name">Name</label>
          <input
            id="Name"
            type="text"
            placeholder="Input Name"
            class="input input-bordered w-full"
            v-model="name"
            autocomplete="on"
            required
          />
        </div>
        <div class="flex flex-col">
          <label for="image">Icon</label>
          <input
            id="image"
            type="file"
            name="image"
            class="file-input file-input-bordered file-input-warning w-full max-w-xs"
            accept="image/*"
            v-on:change="handleImageChange"
            autocomplete="on"
            required
          />
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
const route = useRoute();

const name = ref();
const imageTest = ref();

const handleImageChange = (event) => {
  const files = event.target.files;
  if (files.length > 0) {
    imageTest.value = files[0];
  }
};

const onSubmit = async (values, ctx) => {
  loading.value = true;

  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("image", imageTest.value);

  const { error } = await useFetch(`/admins/facility`, {
    method: "post",
    body: formData,
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
};

useHead({
  title: "Add Facility",
});

definePageMeta({
  layout: "admin",
  middleware: ["auth", "admin"],
});
</script>
