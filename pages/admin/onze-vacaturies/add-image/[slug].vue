<template>
  <section class="overflow-auto max-h-[500px]">
    <CompAdminBackButton link="onze-vacaturies" linkTitle="Add Or Edit Image" />
    {{ getImages.data }}
    <VeeForm @submit="onSubmit">
      <div class="mt-10">
        <BlogImageCrop :loading="loading" v-model="selectedImage" />
      </div>
    </VeeForm>
  </section>
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

console.log(getImages.value.data);

const selectedImage = ref();

const selectImage = () => {
  fileInput.value.click();
};

function saveToPreviewImage(event) {
  imagePreview.value = URL.createObjectURL(event.target.files[0]);
  selectedImage.value = event.target.files[0];
}
const onUpload = (image) => {
  selectedImage.value = image;
};

async function onSubmit(values, ctx) {
  loading.value = true;

  const formDataT = new FormData();

  if (selectedImage.value) {
    formDataT.append("image", selectedImage.value);
  }

  const { error, data } = await useFetch(`/admins/products`, {
    method: "POST",
    body: formDataT,
    ...requestOptions,
  });

  if (error.value) {
    ctx.setErrors(transformErrors(error?.data));
    snackbar.add({
      type: "error",
      text: error.value?.data?.message ?? "Something went wrong",
    });
  } else if (data.value) {
    snackbar.add({
      type: "success",
      text: "Add or Edit Image Success",
    });
    ctx.resetForm();
  }

  loading.value = false;
}

useHead({
  title: "Add Image",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
