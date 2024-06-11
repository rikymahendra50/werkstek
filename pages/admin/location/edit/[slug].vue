<template>
  <section>
    <CompAdminBackButton link="location" linkTitle="Edit Location" />
    <!-- {{ locations?.data }} -->
    <VeeForm
      :validation-schema="singleNameField"
      @submit="onSubmit"
      v-slot="{ errors }"
    >
      <div class="grid grid-cols-2 gap-3">
        <div class="flex flex-col gap-2">
          <label for="name">Name</label>
          <FormTextField
            id="name"
            name="name"
            v-model="formData.name"
            placeholder="Name"
            class="input-bordered"
            autocomplete="on"
          />
          <span>Image</span>
          <BlogImageCrop
            :loading="loading"
            v-model="selectedImage"
            :existingimage="locations?.data?.image"
          />
          <!-- <span>Icon</span>
          <BlogImageCrop :loading="loading" v-model="selectedIcon" /> -->
          <div class="flex justify-end mt-5">
            <CompAdminButtonAddForm
              buttonName="Edit Location"
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
const { singleNameField } = useSchema();

const { data: locations, error } = await useFetch(
  `/admins/locations/${slug.value}`,
  {
    method: "get",
    ...requestOptions,
  }
);

const selectedImage = ref(null);

const formData = ref({
  name: locations.value.data.name,
});

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

  // if (selectedIcon.value) {
  //   formDataT.append("icon", selectedIcon.value);
  // }

  const { error, data } = await useFetch(
    `/admins/locations/${slug.value}?_method=PUT`,
    {
      method: "POST",
      body: selectedImage.value == undefined ? object : formDataT,
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
