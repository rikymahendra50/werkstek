<template>
  <section>
    <CompAdminBackButton link="type" linkTitle="Add Type" />
    <div class="grid grid-cols-2 px-4">
      <VeeForm
        @submit="onSubmit"
        :validation-schema="singleNameField"
        v-slot="{ errors }"
      >
        <div class="grid grid-cols-1 gap-3">
          <div class="flex flex-col">
            <label for="name" class="mb-3">Type Name</label>
            <FormTextField
              id="name"
              name="name"
              v-model="formData.name"
              placeholder="Type Name"
              class="input-bordered"
              autocomplete="on"
            />
          </div>
        </div>
        <div class="flex justify-end mt-5">
          <CompAdminButtonAddForm buttonName="Add Type" :isLoading="loading" />
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
const { singleNameField } = useSchema();

const formData = ref({
  name: undefined,
});

async function onSubmit(values, ctx) {
  loading.value = true;

  const { error } = await useFetch(`/admins/types`, {
    method: "POST",
    body: formData.value,
    ...requestOptions,
  });

  if (error.value) {
    ctx.setErrors(transformErrors(error.value?.data));
    snackbar.add({
      type: "error",
      text: error.value?.data?.message ?? "Something went wrong",
    });
  } else {
    snackbar.add({
      type: "success",
      text: "Add Type Success",
    });

    router.push("/admin/type");
  }
  loading.value = false;
}

useHead({
  title: "Type",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
