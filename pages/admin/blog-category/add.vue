<template>
  <section class="overflow-auto">
    <CompAdminBackButton link="blog-category" linkTitle="Add Blog Category" />
    <div class="grid grid-cols-2">
      <VeeForm
        @submit="onSubmit"
        :validation-schema="singleNameField"
        v-slot="{ errors }"
      >
        <div class="flex flex-col mt-3 px-8 overflow-auto">
          <div class="flex flex-col">
            <label for="name">Blog Category</label>
            <FormTextField
              id="name"
              name="name"
              v-model="name"
              placeholder="Name"
              class="input-bordered"
              autocomplete="on"
            />
          </div>
          <div class="flex justify-end mt-5">
            <CompAdminButtonAddForm
              buttonName="Add Blog Category"
              :isLoading="loading"
            />
          </div>
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

const name = ref();

async function onSubmit(values, ctx) {
  loading.value = true;

  const { error } = await useFetch(`/admins/article-categories`, {
    method: "POST",
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
      text: "Add Category Blog Success",
    });
    router.push("/admin/blog-category");
  }
  loading.value = false;
}

useHead({
  title: "Add Category Blog",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
