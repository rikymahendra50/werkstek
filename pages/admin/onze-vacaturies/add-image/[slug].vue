<template>
  <section class="overflow-auto max-h-[500px]">
    <VeeForm @submit="onSubmit">
      <div class="border border-red-100 p-3 mt-2">
        <h1>Add Image</h1>
        <div class="grid grid-cols-3 gap-2 mt-3">
          <div
            class="col-span-1 h-full w-full min-h-[150px] overflow-hidden rounded-lg border-2 border-dashed flex items-center justify-center hover:shadow-md transition-all duration-500"
            role="button"
            @click="selectImage"
          >
            <div class="flex flex-col items-center">
              <div class="flex justify-center mb-3">
                <svg
                  data-v-9c34c54e=""
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="icon h-24 w-24 stroke-0 fill-none opacity-90"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 4.5v15m7.5-7.5h-15"
                  ></path>
                </svg>
              </div>
              <span>Add Image </span>
            </div>
            <input
              type="file"
              ref="fileInput"
              accept="image/*"
              style="display: none"
              @change="handleImageChange($event, index)"
            />
          </div>
          <div
            class="col-span-1 h-full w-full min-h-[150px] overflow-hidden rounded-lg border-2 border-dashed flex items-center justify-center hover:shadow-md transition-all duration-500"
            v-for="(image, index) in getImages"
            :key="index"
          >
            <div class="flex flex-col items-center">
              <div class="flex justify-center mb-3">
                <div class="flex items-center justify-center">
                  <img
                    :src="image"
                    alt="Image"
                    class="w-[150px] h-full object-cover p-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-for="(item, index) in getImages.data" :key="index">
          <img
            v-if="item.image"
            :src="item.image.image"
            alt="Image"
            class="w-[150px] h-[150px] object-cover m-2"
          />
        </div>
      </div>
      <div class="flex justify-end mt-5">
        <button type="submit" :disabled="loading" class="btn btn-success">
          Add Image
        </button>
      </div>
    </VeeForm>
  </section>
  <NuxtLink to="/admin/onze-vacaturies">
    <button class="btn btn-sm btn-outline btn-warning">Back</button>
  </NuxtLink>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();

const route = useRoute();
const slug = computed(() => {
  return route.params.slug;
});

const { data: getImages } = await useFetch(
  `/admins/products/${slug.value}/images`,
  {
    method: "get",
    ...requestOptions,
  }
);

const fileInput = ref(null);

const imageTest = ref();

const selectImage = () => {
  fileInput.value.click();
};

const handleImageChange = (event) => {
  const files = event.target.files;
  if (files.length > 0) {
    imageTest.value = files[0];
  }
};

async function onSubmit(values, ctx) {
  loading.value = true;

  const formData = new FormData();

  formData.append("image", imageTest.value);

  const { error } = await useFetch(`/admins/products/${slug.value}/images`, {
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
      text: "Add Image Success",
    });

    ctx.resetForm();
  }

  loading.value = false;
}

// const deleteImage = (index) => {
//   images.value.splice(index, 1);
// };

useHead({
  title: "Add Image",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
