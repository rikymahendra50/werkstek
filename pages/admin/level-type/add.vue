<template>
  <div class="overflow-y-auto">
    <CompAdminBackButton link="level-type" linkTitle="Add Level Type" />
    <div class="grid grid-cols-2 px-3">
      <VeeForm
        @submit="onSubmit"
        :validation-schema="singleNameField"
        v-slot="{ errors }"
        class="grid gap-2"
      >
        <label for="name">Level Type</label>
        <FormTextField
          id="name"
          name="name"
          v-model="name"
          placeholder="Level Type"
          class="input-bordered"
          autocomplete="on"
        />
        <div class="flex justify-end mt-5">
          <CompAdminButtonAddForm
            buttonName="Add Level Type"
            :isLoading="loading"
          />
        </div>
      </VeeForm>
    </div>
  </div>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();
const router = useRouter();
const { singleNameField } = useSchema();

const name = ref();

async function onSubmit(values, ctx) {
  loading.value = true;

  const { error } = await useFetch(`/admins/level-types`, {
    method: "post",
    body: { name: name.value },
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
      text: "Success Add Level Type",
    });
    router.push("/admin/level-type");
  }

  loading.value = false;
}

useHead({
  title: "Add Level Type",
});

definePageMeta({
  layout: "admin",
  middleware: ["auth", "admin"],
});
</script>
