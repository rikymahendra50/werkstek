<template>
  <section class="overflow-auto">
    <CompAdminBackButton link="level-type" linkTitle="Edit Level Type" />
    <div class="grid grid-cols-2">
      <VeeForm @submit="onSubmit" v-slot="{ errors }">
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
              name="image"
              v-model="selectedImage"
              :existingimage="levelType?.data?.image"
            />
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
          <label for="color">Color</label>
          <input
            id="color"
            name="color"
            type="color"
            v-model="formData.color"
            placeholder="Color"
            class="input-bordered"
            autocomplete="on"
          />
        </div>
        <div class="flex justify-end mt-5">
          <CompAdminButtonAddForm
            buttonName="Edit Level Type"
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
const route = useRoute();
const { singleNameField } = useSchema();

const fileInput = ref(null);

const slug = computed(() => route.params.slug);

const {
  data: levelType,
  error,
  refresh,
} = await useFetch(`/admins/level-types/${slug.value}`, {
  method: "get",
  ...requestOptions,
});

const formData = ref({
  name: levelType?.value?.data?.name,
  color: levelType?.value?.data?.color,
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
    `/admins/level-types/${slug.value}?_method=PUT`,
    {
      method: "POST",
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
      text: "Edit Level Type Success",
    });
    router.push("/admin/level-type");
  }

  loading.value = false;
}

useHead({
  title: "Edit Level Type",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
