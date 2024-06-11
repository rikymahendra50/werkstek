<template>
  <section class="overflow-auto">
    <CompAdminBackButton link="community" linkTitle="Community Blog" />
    <div class="grid grid-cols-2">
      <VeeForm
        @submit="onSubmit"
        :validation-schema="communitySchema"
        v-slot="{ errors }"
      >
        <div class="grid p-3 gap-2">
          <div>
            <div class="hidden">
              <VeeField
                type="file"
                name="image"
                id="image"
                v-model="selectedImage"
              />
            </div>
            <BlogImageCrop
              :loading="loading"
              name="image"
              v-model="selectedImage"
            />
            <VeeErrorMessage name="image" class="text-red-500" />
          </div>
          <label for="title">Title</label>
          <FormTextField
            id="title"
            name="title"
            v-model="formData.title"
            placeholder="Input Title"
            class="input-bordered"
            autocomplete="off"
          />
          <div class="flex flex-col mt-5">
            <span>Body</span>
            <div class="hidden">
              <VeeField
                type="text"
                name="body"
                v-model="formData.body"
                immediate
              />
            </div>
            <FormTextEditor v-model="formData.body" :is-error="!!errors.body" />
            <VeeErrorMessage name="body" class="text-red-500" />
          </div>
          <div class="flex flex-col mt-5">
            <label for="author">Author</label>
            <VeeField
              id="author"
              name="author"
              as="select"
              v-model="formData.author_id"
              class="select select-bordered w-full"
              placeholder="author"
              autocomplete="off"
            >
              <option disabled selected>Author</option>
              <option :value="item.id" v-for="item in authorBlog?.data">
                {{ item.name }}
              </option>
            </VeeField>
          </div>
          <div class="flex flex-col mt-5">
            <label for="meta">Meta</label>
            <FormTextField
              id="meta"
              name="meta"
              v-model="formData.meta"
              placeholder="Input Meta"
              class="input-bordered"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="flex justify-end mt-5">
          <CompAdminButtonAddForm
            buttonName="Add Community"
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
const { communitySchema } = useSchema();

const formData = ref({
  title: undefined,
  body: undefined,
  meta: undefined,
  author_id: undefined,
});

const { data: authorBlog, pending: authorBlogPending } = await useFetch(
  `/admins/authors`,
  {
    method: "get",
    ...requestOptions,
  }
);

watch(
  () => formData.value.body,
  (newValue) => {
    if (newValue === "<p></p>" || !newValue) {
      formData.value.body = undefined;
    }
  }
);
const selectedImage = ref();

async function onSubmit(values, ctx) {
  loading.value = true;

  const object = { ...formData.value };

  const formDataT = new FormData();

  for (const item in object) {
    // @ts-ignore
    const objectItem = object[item];
    formDataT.append(item, objectItem);
  }
  if (selectedImage.value) {
    formDataT.append("image", selectedImage.value);
  }

  const { error, data } = await useFetch(`/admins/community-blogs`, {
    method: "POST",
    body: formDataT,
    ...requestOptions,
  });

  if (error.value) {
    ctx.setErrors(transformErrors(error?.value?.data));
    snackbar.add({
      type: "error",
      text: error.value?.data?.message ?? "Something went wrong",
    });
  } else if (data.value) {
    snackbar.add({
      type: "success",
      text: "Add Community Success",
    });
    router.push("/admin/community");
  }

  loading.value = false;
}

useHead({
  title: "Add Community",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
