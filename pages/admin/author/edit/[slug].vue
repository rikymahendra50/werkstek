<template>
  <section class="overflow-auto">
    <CompAdminBackButton link="author" linkTitle="Edit Author" />
    <div class="grid grid-cols-2">
      <VeeForm
        @submit="onSubmit"
        v-slot="{ errors }"
        :validation-schema="editAuthorSchema"
      >
        <div class="grid mt-10 p-3 gap-2">
          <div>
            <div class="hidden">
              <VeeField
                type="file"
                name="image"
                id="image"
                v-model="selectedImage"
              />
            </div>
            <BlogImageCrop
              :loading="loading"
              :existingimage="data?.data?.image"
              v-model="selectedImage"
            />
            <VeeErrorMessage name="image" class="text-red-500" />
          </div>
          <label for="name">Name</label>
          <FormTextField
            id="name"
            name="name"
            v-model="formData.name"
            placeholder="Name"
            class="input-bordered"
            autocomplete="on"
          />
          <label for="description">Description</label>
          <FormTextField
            id="description"
            name="description"
            v-model="formData.description"
            placeholder="Description"
            class="input-bordered"
            autocomplete="on"
          />
        </div>
        <div class="flex justify-end mt-5">
          <CompAdminButtonAddForm
            buttonName="Edit Author"
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
const route = useRoute();
const router = useRouter();
const { editAuthorSchema } = useSchema();
const slug = computed(() => route.params.slug);

const fileInput = ref(null);

const { error, data } = await useFetch(`/admins/authors/${slug.value}`, {
  method: "get",
  ...requestOptions,
});

const formData = ref({
  name: data?.value?.data?.name,
  description: data?.value?.data?.description,
});

const imagePreview = ref();
const selectedImage = ref();

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

  const { error, data } = await useFetch(
    `/admins/authors/${slug.value}?_method=PUT`,
    {
      method: "post",
      body: formDataT,
      ...requestOptions,
    }
  );

  if (error.value) {
    ctx.setErrors(transformErrors(error?.value?.data));
    snackbar.add({
      type: "error",
      text: error.value?.data?.message ?? "Something went wrong",
    });
  } else if (data.value) {
    snackbar.add({
      type: "success",
      text: "Edit Author Success",
    });
    router.push("/admin/author");
  }

  loading.value = false;
}

useHead({
  title: "Add Author",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
