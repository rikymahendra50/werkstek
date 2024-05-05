<template>
  <div class="grid grid-cols-2">
    <VeeForm
      @submit="onSubmit"
      v-slot="{ errors }"
      :validation-schema="editBlogSchema"
    >
      <div class="grid p-3">
        <div>
          <BlogImageCrop
            :loading="loading"
            :existingimage="props.eachBlog?.image"
            v-model="selectedImage"
          />
        </div>
        <label for="title" class="mt-3">Title</label>
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
            <VeeField type="text" name="body" v-model="formData.body" />
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
            <option :value="item.id" v-for="item in categoryBlog">
              {{ item.name }}
            </option>
          </VeeField>
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
            <option :value="item.id" v-for="item in authorBlog">
              {{ item.name }}
            </option>
          </VeeField>
          <VeeErrorMessage name="author" class="text-red-500" />
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
        <CompAdminButtonAddForm buttonName="Edit Blog" :isLoading="loading" />
      </div>
    </VeeForm>
  </div>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();
const route = useRoute();
const slug = computed(() => route.params.slug);
const router = useRouter();
const { editBlogSchema } = useSchema();

const props = defineProps({
  eachBlog: {
    type: Object,
  },
  categoryBlog: {
    type: Array,
  },
  authorBlog: {
    type: Array,
  },
});

const formData = ref({
  title: props.eachBlog?.title,
  author: props.eachBlog?.author,
  body: props.eachBlog?.body,
  category_id: props.eachBlog?.category?.id,
  meta: props.eachBlog?.meta,
  author_id: props.eachBlog?.author?.id,
});

const selectedImage = ref();

async function onSubmit(values, ctx) {
  loading.value = true;

  const object = { ...formData.value };

  // console.log(object);
  const formDataT = new FormData();

  for (const item in object) {
    // @ts-ignore
    const objectItem = object[item];
    formDataT.append(item, objectItem);
  }

  if (selectedImage.value) {
    formDataT.append("image", selectedImage.value);
  }

  const { error, data } = await useFetch(
    `/admins/articles/${slug.value}?_method=PUT`,
    {
      method: "POST",
      body: formDataT,
      ...requestOptions,
    }
  );

  if (error.value) {
    ctx.setErrors(transformErrors(error?.data));
    snackbar.add({
      type: "error",
      text: error.value?.data?.message ?? "Something went wrong",
    });
  } else if (data.value) {
    snackbar.add({
      type: "success",
      text: "Edit Blog Success",
    });
    router.push("/admin/blog");
  }

  loading.value = false;
}
</script>
