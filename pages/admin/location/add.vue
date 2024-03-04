<template>
  <section>
    <div class="flex gap-4">
      <NuxtLink to="/admin/location" class="btn btn-warning btn-outline btn-sm"
        >Back</NuxtLink
      >
      <span class="text-2xl font-bold">Add Location</span>
    </div>
    <VeeForm @submit="onSubmit">
      <div class="grid grid-cols-2 mt-3 gap-3">
        <div class="flex flex-col gap-2">
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
        <div class="flex flex-col gap-2">
          <label for="image">Image</label>
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
        <!-- Preview Image -->
        <div class="grid grid-cols-2 gap-2 mt-3">
          <div
            class="col-span-1 h-full w-full min-h-[150px] overflow-hidden rounded-lg flex items-center justify-center hover:shadow-md transition-all duration-500"
            role="button"
          >
            <div class="flex flex-col items-center" v-if="previewImage">
              <img :src="previewImage" alt="test" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end mt-5">
        <button type="submit" :disabled="loading" class="btn btn-success">
          Add Location
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
const slug = computed(() => route.params.slug);

const name = ref("");
const imageTest = ref(null);
const previewImage = ref("");

const handleImageChange = (event) => {
  const files = event.target.files;

  if (files.length > 0) {
    previewImage.value = URL.createObjectURL(files[0]);
    imageTest.value = files[0];
  }

  console.log(previewImage.value);
};

const onSubmit = async (values, ctx) => {
  loading.value = true;

  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("image", imageTest.value);

  const { error } = await useFetch(`/admins/locations`, {
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
      text: "Add Location Success",
    });
    ctx.resetForm();
  }

  loading.value = false;
};

useHead({
  title: "Add Location",
});

definePageMeta({
  layout: "admin",
  middleware: ["auth", "admin"],
});
</script>
