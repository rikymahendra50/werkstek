<template>
  <section>
    <CompAdminBackButton link="facility" linkTitle="Edit Facility" />
    <VeeForm
      @submit="onSubmit"
      :validation-schema="singleNameField"
      v-slot="{ errors }"
      class="grid grid-cols-2"
    >
      <div class="grid grid-cols-1 gap-3">
        <div class="flex flex-col gap-2">
          <label for="name">Edit Facility</label>
          <FormTextField
            id="name"
            name="name"
            v-model="formData.name"
            placeholder="Input Facility Name"
            class="input-bordered"
            autocomplete="on"
          />
        </div>
        <!-- <div>
          <span>Icon</span>
          <BlogImageCrop
            :loading="loading"
            v-model="selectedImage"
            :existingimage="facilities?.data?.icon"
          />
        </div> -->
        <div class="flex justify-end mt-5">
          <CompAdminButtonAddForm
            buttonName="Edit Facility"
            :isLoading="loading"
          />
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

const { data: facilities, error } = await useFetch(
  `/admins/facilities/${slug.value}`,
  {
    method: "get",
    ...requestOptions,
  }
);

const selectedImage = ref();

const formData = ref({
  name: facilities?.value?.data?.name,
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
    formDataT.append("icon", selectedImage.value);
  }

  const { error, data } = await useFetch(
    `/admins/facilities/${slug.value}?_method=PUT`,
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
      text: "Edit Facility Success",
    });
    router.push("/admin/facility");
  }

  loading.value = false;
}

useHead({
  title: "Edit Facility",
});

definePageMeta({
  layout: "admin",
  middleware: ["auth", "admin"],
});
</script>
