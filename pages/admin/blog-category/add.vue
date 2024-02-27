<template>
  <section class="overflow-auto max-h-[500px]">
    <div class="flex gap-4">
      <NuxtLink
        to="/admin/blog-category"
        class="btn btn-warning btn-outline btn-sm"
        >Back</NuxtLink
      >
      <span class="text-2xl font-bold">Add Blog</span>
    </div>
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
        <button type="submit" :disabled="loading" class="btn btn-success">
          Add Category Blog
        </button>
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
