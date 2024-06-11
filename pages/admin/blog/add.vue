<template>
  <section class="overflow-auto">
    <CompAdminBackButton link="blog" linkTitle="Add Blog" />
    <div class="grid grid-cols-2">
      <VeeForm
        @submit="onSubmit"
        v-slot="{ errors }"
        :validation-schema="blogSchema"
      >
        <div class="grid mt-10 p-3 gap-2">
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
            placeholder="Name"
            class="input-bordered"
            autocomplete="on"
          />

          <div class="flex flex-col mt-5">
            <label for="author">Author</label>
            <VeeField
              id="author"
              name="author"
              as="select"
              v-model="formData.author_id"
              class="select select-bordered w-full"
              placeholder="category"
              autocomplete="off"
            >
              <option disabled selected>Author</option>
              <option :value="item.id" v-for="item in authorData?.data">
                {{ item.name }}
              </option>
            </VeeField>
            <VeeErrorMessage name="author" class="text-red-500" />
          </div>

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
            <VeeErrorMessage
              name="category"
              class="form-error-message text-red-600"
            />
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
          <CompAdminButtonAddForm buttonName="Add Blog" :isLoading="loading" />
        </div>
      </VeeForm>
    </div>
  </section>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();
const route = useRoute();
const router = useRouter();
const { blogSchema } = useSchema();

const { data: categoryBlog, error } = await useFetch(
  `/admins/article-categories`,
  {
    method: "get",
    ...requestOptions,
  }
);

const { data: authorData } = await useFetch(`/admins/authors`, {
  method: "get",
  ...requestOptions,
});

const fileInput = ref(null);

const formData = ref({
  title: undefined,
  body: undefined,
  category_id: undefined,
  meta: undefined,
  author_id: undefined,
});

const imagePreview = ref();
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

  const { error, data } = await useFetch(`/admins/articles`, {
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
      text: "Add Blog Success",
    });
    router.push("/admin/blog");
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
