<template>
  <section class="overflow-auto max-h-[500px]">
    <CompAdminBackButton link="blog-category" linkTitle="Add Blog Category" />
    <VeeForm @submit="onSubmit" v-slot="{ errors }">
      <div class="flex flex-col mt-10 overflow-auto">
        <div class="flex flex-col p-3 px-8">
          <label for="Name">Name</label>
          <VeeField
            id="Name"
            type="text"
            name="Name"
            placeholder="Input Name"
            class="textarea textarea-bordered w-full"
            v-model="name"
            autocomplete="on"
          />
        </div>
      </div>
      <div class="flex justify-end mt-5">
        <CompAdminButtonAddForm
          buttonName="Add Blog Category"
          :isLoading="loading"
        />
      </div>
    </VeeForm>
  </section>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();

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

    ctx.resetForm();
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
