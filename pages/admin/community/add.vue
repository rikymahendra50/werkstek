<template>
  <section class="overflow-auto">
    <CompAdminBackButton link="community" linkTitle="Community Blog" />
    <div class="grid grid-cols-2">
      <VeeForm @submit="onSubmit" v-slot="{ errors }">
        <div class="grid p-3 gap-4">
          <div>
            <BlogImageCrop :loading="loading" v-model="selectedImage" />
          </div>
          <label for="Title">Title</label>
          <VeeField
            id="Title"
            type="text"
            name="Title"
            placeholder="Input Title"
            class="input input-bordered w-full"
            v-model="formData.title"
            autocomplete="off"
          />
          <div class="flex flex-col mt-5">
            <label for="body">Body</label>
            <FormTextEditor v-model="formData.body" :is-error="!!errors.body" />
            <VeeErrorMessage name="body" />
          </div>
          <div class="flex flex-col mt-5">
            <label for="Meta">Meta</label>
            <VeeField
              id="Meta"
              as="textarea"
              name="Meta"
              placeholder="Input Meta"
              class="textarea textarea-bordered w-full"
              v-model="formData.meta"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="flex justify-end mt-5">
          <CompAdminButtonAddForm
            buttonName="Add Community"
            :isLoading="loading"
          />
        </div>
      </VeeForm>
    </div>
  </section>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();
const router = useRouter();

const fileInput = ref(null);

const selectImage = () => {
  fileInput.value.click();
};

const formData = ref({
  title: undefined,
  body: undefined,
  meta: undefined,
});

const imagePreview = ref();
const selectedImage = ref();

function saveToPreviewImage(event) {
  imagePreview.value = URL.createObjectURL(event.target.files[0]);
  selectedImage.value = event.target.files[0];
}

const onUpload = (image) => {
  selectedImage.value = image;
};

async function onSubmit(values, ctx) {
  loading.value = true;

  const object = { ...formData.value };

  const formDataT = new FormData();

  for (const item in object) {
    // @ts-ignore
    const objectItem = object[item];
    formDataT.append(item, objectItem);
  }
  if (selectedImage.value) {
    formDataT.append("image", selectedImage.value);
  }

  const { error, data } = await useFetch(`/admins/community-blogs`, {
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
      text: "Add Community Success",
    });
    router.push("/admin/community");
  }

  loading.value = false;
}

useHead({
  title: "Add Community",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
