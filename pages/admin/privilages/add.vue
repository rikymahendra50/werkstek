<template>
  <section>
    <CompAdminBackButton link="privilages" linkTitle="Add Privilages" />
    <div class="grid grid-cols-2 px-4">
      <VeeForm
        @submit="onSubmit"
        v-slot="{ errors }"
        :validation-schema="singleNameField"
      >
        <div class="grid grid-cols-1 gap-3">
          <div class="flex flex-col">
            <label for="name" class="mb-3">Privilages</label>
            <FormTextField
              id="name"
              name="name"
              v-model="formData.name"
              placeholder="Name"
              class="input-bordered"
              autocomplete="on"
            />
          </div>
        </div>
        <div class="flex justify-end mt-5">
          <CompAdminButtonAddForm
            buttonName="Add Privilages"
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
const { singleNameField } = useSchema();

const formData = ref({
  name: undefined,
  short_description: "only",
  full_description: "only",
});

async function onSubmit(values, ctx) {
  loading.value = true;

  const { error } = await useFetch(`/admins/categories`, {
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
      text: "Add Privilages Success",
    });

    router.push("/admin/privilages");
  }
  loading.value = false;
}

useHead({
  title: "Privilages",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
