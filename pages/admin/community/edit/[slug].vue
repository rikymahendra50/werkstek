<template>
  <section class="overflow-auto max-h-[500px]">
    <div class="flex gap-4">
      <NuxtLink to="/admin/community" class="btn btn-warning btn-outline btn-sm"
        >Back</NuxtLink
      >
      <span class="text-2xl font-bold">Edit Community</span>
    </div>
    <VeeForm @submit="onSubmit" v-slot="{ errors }">
      <div class="flex flex-col mt-4 overflow-auto px-8 py-3">
        <label for="image" class="mb-1">Image</label>
        <input
          id="image"
          name="image"
          type="file"
          class="file-input file-input-bordered file-input-accent w-full max-w-xs mb-5"
          @change="handleImageChange"
        />
        <span>Image Uploded: </span>
        <div class="min-h-[200px] max-h-[200px] min-w-[200px] max-w-[200px]">
          <img :src="data.data.image" alt="img" class="mb-4 object-cover" />
        </div>

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
          Edit Community
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

const imageTest = ref(data.value.data.image);

const handleImageChange = (event) => {
  const files = event.target.files;
  if (files.length > 0) {
    imageTest.value = files[0];
  }
};

const formData = ref({
  title: data.value.data.title,
  body: data.value.data.body,
  meta: data.value.data.meta,
});

async function onSubmit(values, ctx) {
  loading.value = true;

  const formDataToSend = new FormData();

  formDataToSend.append("image", imageTest.value);
  formDataToSend.append("title", formData.value.title);
  formDataToSend.append("body", formData.value.body);
  formDataToSend.append("meta", formData.value.meta);

  const { error } = await useFetch(`/admins/community-blogs/${slug.value}`, {
    method: "put",
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
      text: "Edit Community Success",
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
