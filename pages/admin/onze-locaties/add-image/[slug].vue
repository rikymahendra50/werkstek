<template>
  <section>
    <CompAdminBackButton link="onze-locaties" linkTitle="Add Or Edit Image" />
    <VeeForm @submit="onSubmit">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          class="overflow-hidden rounded-lg relative h-full w-full draggable"
          data-draggable="true"
          v-for="(item, index) in imagePreview"
          :key="index"
        >
          <div class="absolute w-full flex justify-end z-10 p-2">
            <div>
              <button
                class="btn btn-square btn-sm btn-error"
                type="button"
                @click="deleteImage(index)"
              >
                <svg
                  data-v-9c34c54e=""
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="icon h-6 w-6"
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
                    d="m14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <img
            :src="item"
            alt="image review"
            class="h-full w-full object-cover max-h-[300px] object-top"
          />
        </div>
        <div>
          <div
            v-if="canUpload"
            class="h-full w-full min-h-[150px] overflow-hidden rounded-lg border border-dashed flex items-center justify-center hover:shadow-md transition-all duration-500"
            role="button"
            @click="clickUpload"
          >
            <label
              for="fileInput"
              class="h-full w-full min-h-[150px] overflow-hidden rounded-lg border border-dashed flex items-center justify-center hover:shadow-md transition-all duration-500"
              role="button"
            >
              <div class="flex flex-col">
                <div class="flex justify-center">
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
                <input
                  ref="fileInput"
                  type="file"
                  @change="saveToPreviewImage"
                  style="display: none"
                />
                <span>Add Image</span>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="flex justify-end mt-5"></div>
      <span class="block mb-3"
        >If you made some changes to your images. please save them.</span
      >
      <CompAdminButtonAddForm buttonName="Save Images" :isLoading="loading" />
    </VeeForm>
  </section>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();
const router = useRouter();
const route = useRoute();
const slug = computed(() => {
  return route.params.slug;
});

const fileInput = ref(null);

const clickUpload = () => {
  fileInput.value.click();
};

const { data } = await useFetch(`/admins/products/${slug.value}/images`, {
  method: "get",
  ...requestOptions,
});

const selectedImage = ref();
const selectedImages = ref([]);
const imagePreview = ref([]);

// console.log(data.value.data);

data.value.data.forEach((item) => {
  selectedImages.value.push(item.id);
  imagePreview.value.push(item.image);
});

const MAX_FILE_SIZE_MB = 2;
const saveToPreviewImage = (event) => {
  const files = event.target.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      alert(
        `File ${file.name} too big. Please chose file width maximum ${MAX_FILE_SIZE_MB} MB.`
      );
      return;
    } else {
      imagePreview.value.push(URL.createObjectURL(file));
      selectedImage.value = file;
      StoreProduct();
    }
  }
};

async function StoreProduct() {
  loading.value = true;

  const formData = new FormData();

  // console.log(selectedImage.value);

  if (selectedImage.value) {
    formData.append("image", selectedImage.value);
  }

  const { data } = await useFetch(`/admins/products/${slug.value}/images`, {
    method: "post",
    body: formData,
    ...requestOptions,
  });

  selectedImages.value.push(data.value.data.id);

  // console.log(data.value);

  loading.value = false;
}

const deleteImage = (index) => {
  selectedImages.value.splice(index, 1);
  imagePreview.value.splice(index, 1);
};

async function onSubmit(values, ctx) {
  loading.value = true;

  const { error, data } = await useFetch(
    `/admins/products/${slug.value}/save-images`,
    {
      method: "POST",
      body: { images: selectedImages.value },
      ...requestOptions,
    }
  );

  console.log(selectedImage.value);

  if (error.value) {
    ctx.setErrors(transformErrors(error?.value.data));
    snackbar.add({
      type: "error",
      text: error?.value.data?.message ?? "Something went wrong",
    });
  } else if (data.value) {
    snackbar.add({
      type: "success",
      text: "Add or Edit Image Success",
    });
    router.push("/admin/onze-locaties");
  }

  loading.value = false;
}

const canUpload = computed(() => imagePreview?.value?.length < 3);

useHead({
  title: "Add or Edit Image",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
