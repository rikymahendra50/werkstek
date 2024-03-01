<template>
  <section>
    <div class="flex gap-4">
      <NuxtLink to="/admin/location" class="btn btn-warning btn-outline btn-sm"
        >Back</NuxtLink
      >
      <span class="text-2xl font-bold">Edit Location</span>
    </div>
    <form @submit.prevent="onSubmit" class="max-h-[400px]">
      <div class="grid grid-cols-1 mt-3 gap-3 min">
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
          <label for="image">Image</label>
          <input
            id="image"
            type="file"
            name="image"
            class="file-input file-input-bordered file-input-warning max-w-xs w-full"
            accept="image/*"
            v-on:change="handleImageChange"
            autocomplete="on"
          />
          <div v-if="location.data.image" class="mt-5">
            <span class="text-sm">File Uploaded:</span>
            <div class="flex flex-col items-center max-w-[500px] max-h-[200px]">
              <div class="flex justify-center mb-3">
                <img :src="location.data.image" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end mt-5">
        <button type="submit" :disabled="loading" class="btn btn-success">
          Edit Location
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { axiosRequest } = useAxios();

const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();
const route = useRoute();
const slug = computed(() => route.params.slug);

const handleImageChange = (event) => {
  const files = event.target.files;
  imageTest.value = files[0];
};

const { data: location, error } = await useFetch(
  `/admins/locations/${slug.value}`,
  {
    method: "get",
    ...requestOptions,
  }
);

const name = ref(location.value.data.name);
const imageTest = ref(location.value.data.image);

const onSubmit = async (values, ctx) => {
  loading.value = true;

  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("image", imageTest.value);

  const { error } = await axiosRequest.post(
    `/admins/locations/${slug.value}?_method=PUT`,
    formData,
    {
      ...requestOptions,
    }
  );

  if (error) {
    ctx.setErrors(transformErrors(error?.data));
    snackbar.add({
      type: "error",
      text: error?.data?.message ?? "Something went wrong",
    });
  } else {
    snackbar.add({
      type: "success",
      text: "Edit Location Success",
    });
    ctx.resetForm();
  }

  loading.value = false;
};

useHead({
  title: "Edit Location",
});

definePageMeta({
  layout: "admin",
  middleware: ["auth", "admin"],
});
</script>
