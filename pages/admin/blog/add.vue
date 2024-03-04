<template>
  <section class="overflow-auto max-h-[500px]">
    <div class="flex gap-4">
      <NuxtLink to="/admin/blog" class="btn btn-warning btn-outline btn-sm"
        >Back</NuxtLink
      >
      <span class="text-2xl font-bold">Add Blog</span>
    </div>
    <VeeForm @submit="onSubmit" v-slot="{ errors }">
      <div class="flex flex-col mt-10 overflow-auto p-3">
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
          <label for="category">Category</label>
          <VeeField
            id="category"
            name="category"
            as="select"
            v-model="formData.category_id"
            class="select select-bordered w-full"
            placeholder="category"
            autocomplete="off"
          >
            <option disabled selected>Category</option>
            <option :value="item.id" v-for="item in categoryBlog.data">
              {{ item.name }}
            </option>
          </VeeField>
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

const { data: categoryBlog, error } = await useFetch(
  `/admins/article-categories`,
  {
    method: "get",
    ...requestOptions,
  }
);

const imageTest = ref();

const handleImageChange = (event) => {
  const files = event.target.files;
  if (files.length > 0) {
    imageTest.value = files[0];
  }
};

const formData = ref({
  title: undefined,
  body: undefined,
  category_id: undefined,
  meta: undefined,
});

async function onSubmit(values, ctx) {
  loading.value = true;

  const formDataToSend = new FormData();

  formDataToSend.append("image", imageTest.value);
  formDataToSend.append("title", formData.value.title);
  formDataToSend.append("body", formData.value.body);
  formDataToSend.append("category_id", formData.value.category_id);
  formDataToSend.append("meta", formData.value.meta);

  console.log(formDataToSend);

  const { error } = await useFetch(`/admins/articles`, {
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
  title: "Add Blog",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
