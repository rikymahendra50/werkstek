<template>
  <section>
    <CompAdminBackButton link="location" linkTitle="Add Location" />
    <VeeForm
      @submit="onSubmit"
      :validation-schema="locationSchema"
      v-slot="{ errors }"
    >
      <div class="grid grid-cols-2 gap-3">
        <div class="flex flex-col gap-2">
          <label for="Name">Name</label>
          <FormTextField
            id="name"
            name="name"
            v-model="formData.name"
            placeholder="Name"
            class="input-bordered"
            autocomplete="on"
          />
          <div class="flex flex-col gap-2">
            <div class="hidden">
              <VeeField
                type="file"
                name="image"
                id="image"
                v-model="selectedImage"
              />
            </div>
            <span>Image</span>
            <BlogImageCrop :loading="loading" v-model="selectedImage" />
            <VeeErrorMessage name="image" class="text-red-500" />
          </div>
          <div class="flex justify-end mt-5">
            <CompAdminButtonAddForm
              buttonName="Add Location"
              :isLoading="loading"
            />
          </div>
        </div>
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
const router = useRouter();
const { locationSchema } = useSchema();

const selectedImage = ref();

const formData = ref({
  name: undefined,
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

  const { error, data } = await useFetch(`/admins/locations`, {
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
      text: "Add Location Success",
    });
    router.push("/admin/location");
  }

  loading.value = false;
}

useHead({
  title: "Add Location",
});

definePageMeta({
  layout: "admin",
  middleware: ["auth", "admin"],
});
</script>
