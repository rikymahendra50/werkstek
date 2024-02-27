<template>
  <section class="overflow-auto max-h-[500px]">
    <div class="flex gap-4">
      <NuxtLink to="/admin/community" class="btn btn-warning btn-outline btn-sm"
        >Back</NuxtLink
      >
      <span class="text-2xl font-bold">Add Blog</span>
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
          Add Community
        </button>
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

const { data } = await useFetch(`/admins/community-blogs/${slug.value}`, {
  method: "get",
  ...requestOptions,
});

const formData = ref({
  image: null,
  title: data.value.data.title,
  body: data.value.data.body,
  category_id: data.value.data.category,
  meta: data.value.data.meta,
});

const handleImageChange = (event) => {
  const file = event.target.files[0];
  formData.value.image = file;
};

async function onSubmit(values, ctx) {
  loading.value = true;

  const formDataToSend = new FormData();

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
  title: "Community",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
