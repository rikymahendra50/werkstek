<template>
  <section class="overflow-auto max-h-[500px]">
    <div class="flex gap-4">
      <NuxtLink to="/admin/community" class="btn btn-warning btn-outline btn-sm"
        >Back</NuxtLink
      >
      <span class="text-2xl font-bold">Add Community</span>
    </div>
    <VeeForm @submit="onSubmit" v-slot="{ errors }">
      <div class="flex flex-col mt-10 overflow-auto px-8">
        <label for="image" class="mb-1">Image</label>
        <input
          id="image"
          name="image"
          type="file"
          class="file-input file-input-bordered file-input-accent w-full max-w-xs mb-5"
          @change="handleImageChange"
        />
        <label for="Title">Title</label>
        <VeeField
          id="Title"
          type="text"
          name="Title"
          placeholder="Input Title"
          class="input input-bordered w-full"
          v-model="formData.title"
          autocomplete="on"
        />
        <div class="flex flex-col mt-5">
          <label for="body">Body</label>
          <VeeField
            id="body"
            as="textarea"
            name="body"
            placeholder="Input Body"
            class="textarea textarea-bordered w-full"
            v-model="formData.body"
            autocomplete="on"
          />
        </div>
        <div class="flex flex-col mt-5">
          <label for="Category">Category Id</label>
          <VeeField
            id="Category"
            as="textarea"
            name="Category"
            placeholder="Input Category ID"
            class="textarea textarea-bordered w-full"
            v-model="formData.category_id"
            autocomplete="on"
          />
        </div>
        <div class="flex flex-col mt-5">
          <label for="Meta">Meta</label>
          <VeeField
            id="Meta"
            as="textarea"
            name="Meta"
            placeholder="Input Meta"
            class="textarea textarea-bordered w-full"
            v-model="formData.meta"
            autocomplete="on"
          />
        </div>
      </div>
      <div class="flex justify-end mt-5">
        <button type="submit" :disabled="loading" class="btn btn-success">
          Add Blog
        </button>
      </div>
    </VeeForm>
  </section>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();

const formData = ref({
  image: null,
  title: undefined,
  body: undefined,
  category_id: undefined,
  meta: undefined,
});

const handleImageChange = (event) => {
  const file = event.target.files[0];
  formData.value.image = file;
};

async function onSubmit(values, ctx) {
  loading.value = true;

  const formDataToSend = new FormData();

  formDataToSend.append("image", formData.value.image);

  formDataToSend.append("title", formData.value.title);
  formDataToSend.append("body", formData.value.body);
  formDataToSend.append("categoryId", formData.value.category_id);
  formDataToSend.append("meta", formData.value.meta);

  const { error } = await useFetch(`/admins/community-blogs`, {
    method: "POST",
    body: formDataToSend,
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
      text: "Add Blog Success",
    });

    ctx.resetForm();
  }
  loading.value = false;
}

useHead({
  title: "Blog",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
