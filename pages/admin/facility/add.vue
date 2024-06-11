<template>
  <section>
    <CompAdminBackButton link="facility" linkTitle="Add Facility" />
    <div class="grid grid-cols-2">
      <VeeForm
        @submit="onSubmit"
        :validation-schema="singleNameField"
        v-slot="{ errors }"
      >
        <div class="grid gap-3">
          <div class="flex flex-col gap-2">
            <label for="name">Facility</label>
            <FormTextField
              id="name"
              name="name"
              v-model="formData.name"
              placeholder="Input Facility Name"
              class="input-bordered"
              autocomplete="on"
            />
          </div>
          <!-- <div class="flex flex-col gap-2">
            <span>Icon</span>
            <BlogImageCrop :loading="loading" v-model="selectedImage" />
          </div> -->
        </div>
        <div class="flex justify-end mt-5">
          <CompAdminButtonAddForm
            buttonName="Add Facility"
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
const { singleNameField } = useSchema();

const formData = ref({
  name: undefined,
});

const selectedImage = ref(null);

// selectedImage.value = "/images/checkbox_checked.svg";

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

  const { error, data } = await useFetch(`/admins/facilities`, {
    method: "POST",
    body: formDataT,
    ...requestOptions,
  });

  if (error.value) {
    ctx.setErrors(transformErrors(error?.value?.data));
    snackbar.add({
      type: "error",
      text: error.value?.data?.message ?? "Something went wrong",
    });
  } else if (data.value) {
    snackbar.add({
      type: "success",
      text: "Add Facility Success",
    });
    router.push("/admin/facility");
  }

  loading.value = false;
}

useHead({
  title: "Add Facility",
});

definePageMeta({
  layout: "admin",
  middleware: ["auth", "admin"],
});
</script>
