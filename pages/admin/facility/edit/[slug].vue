<template>
  <section>
    <div class="flex gap-4">
      <NuxtLink to="/admin/facility" class="btn btn-warning btn-outline btn-sm"
        >Back</NuxtLink
      >
      <span class="text-2xl font-bold">Edit Facility</span>
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
            @click="selectImage"
            autocomplete="on"
            required
          />
        </div>
      </div>
      <div class="flex justify-end mt-5">
        <button type="submit" :disabled="loading" class="btn btn-success">
          Edit Category
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

const { data: facilities, error } = await useFetch(
  `/admins/facilities/${slug.value}`,
  {
    method: "get",
    ...requestOptions,
  }
);

const fileInput = ref(null);
const getImages = ref(facilities.value);
const imageTest = ref();

// const selectImage = () => {
//   fileInput.value.click();
// };

const handleImageChange = (event) => {
  const files = event.target.files;
  imageTest.value = files[0];
};

const name = ref(facilities.value.data.name);

async function onSubmit(values, ctx) {
  loading.value = true;

  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("image", imageTest.value);

  const { error } = await useFetch(`/admins/facilities/${slug.value}`, {
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
      text: "Edit Facility Success",
    });
    F;
    ctx.resetForm();
  }

  loading.value = false;
}

useHead({
  title: "Edit Facility",
});

definePageMeta({
  layout: "admin",
  middleware: ["auth", "admin"],
});
</script>
