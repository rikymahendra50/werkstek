<template>
  <section>
    <CompAdminBackButton link="location" linkTitle="Edit Location" />
    <form @submit.prevent="onSubmit" class="max-h-[400px]">
      <div class="grid grid-cols-2 gap-3">
        <div class="flex flex-col gap-2">
          <label for="Name">Name</label>
          <input
            id="Name"
            type="text"
            placeholder="Input Name"
            class="input input-bordered w-full"
            v-model="formData.name"
            autocomplete="on"
          />
          <span>Image</span>
          <BlogImageCrop
            :loading="loading"
            v-model="selectedImage"
            :existingimage="locations?.data.image"
          />
          <div class="flex justify-end mt-5">
            <CompAdminButtonAddForm
              buttonName="Edit Location"
              :isLoading="loading"
            />
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();
const route = useRoute();
const slug = computed(() => route.params.slug);
const router = useRouter();

const { data: locations, error } = await useFetch(
  `/admins/locations/${slug.value}`,
  {
    method: "get",
    ...requestOptions,
  }
);

const fileInput = ref(null);

const selectImage = () => {
  fileInput.value.click();
};

const imagePreview = ref();
const selectedImage = ref();

function saveToPreviewImage(event) {
  imagePreview.value = URL.createObjectURL(event.target.files[0]);
  selectedImage.value = event.target.files[0];
}

const onUpload = (image) => {
  selectedImage.value = image;
};

const formData = ref({
  name: locations.value.data.name,
});

async function onSubmit(values, ctx) {
  loading.value = true;

  const object = { ...formData.value };

  // console.log(object);
  const formDataT = new FormData();

  for (const item in object) {
    // @ts-ignore
    const objectItem = object[item];
    formDataT.append(item, objectItem);
  }

  if (selectedImage.value) {
    formDataT.append("image", selectedImage.value);
  }

  const { error, data } = await useFetch(
    `/admins/locations/${slug.value}?_method=PUT`,
    {
      method: "POST",
      body: formDataT,
      ...requestOptions,
    }
  );

  if (error.value) {
    ctx.setErrors(transformErrors(error?.data));
    snackbar.add({
      type: "error",
      text: error.value?.data?.message ?? "Something went wrong",
    });
  } else if (data.value) {
    snackbar.add({
      type: "success",
      text: "Edit Location Success",
    });
    router.push("/admin/location");
  }

  loading.value = false;
}

useHead({
  title: "Edit Location",
});

definePageMeta({
  layout: "admin",
  middleware: ["auth", "admin"],
});
</script>
