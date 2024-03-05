<template>
  <VeeForm @submit="onSubmit" v-slot="{ errors }">
    <!-- {{ props.eachBlog?.category_id }} -->
    <div class="grid mt-10 p-3 gap-4">
      <div>
        <BlogImageCrop
          :loading="loading"
          :existingimage="props.eachBlog?.image"
          v-model="selectedImage"
        />
      </div>
      <label for="Title">Title</label>
      <VeeField
        id="Title"
        type="text"
        name="Title"
        placeholder="Input Title"
        class="input input-bordered w-full"
        v-model="formData.title"
        autocomplete="off"
      />
      <div class="flex flex-col mt-5">
        <label for="body">Body</label>
        <FormTextEditor v-model="formData.body" :is-error="!!errors.body" />
        <VeeErrorMessage name="body" />
      </div>
      <div class="flex flex-col mt-5">
        <label for="Category">Category</label>
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
        <label for="Meta">Meta</label>
        <VeeField
          id="Meta"
          as="textarea"
          name="Meta"
          placeholder="Input Meta"
          class="textarea textarea-bordered w-full"
          v-model="formData.meta"
          autocomplete="off"
        />
      </div>
    </div>
    <div class="flex justify-end mt-5">
      <button type="submit" :disabled="loading" class="btn btn-success">
        Edit Blog
      </button>
    </div>
  </VeeForm>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();
const route = useRoute();
const slug = computed(() => route.params.slug);
const router = useRouter();

const props = defineProps({
  eachBlog: {
    type: Object,
  },
  categoryBlog: {
    type: Array,
  },
});

const fileInput = ref(null);

const selectImage = () => {
  fileInput.value.click();
};

// const category = categoryBlog.value.data.map((item) => item.name);

const formData = ref({
  title: props.eachBlog?.title,
  body: props.eachBlog?.body,
  category_id: props.eachBlog?.category?.id,
  meta: props.eachBlog?.meta,
});

const imagePreview = ref();
const selectedImage = ref();

function saveToPreviewImage(event) {
  imagePreview.value = URL.createObjectURL(event.target.files[0]);
  selectedImage.value = event.target.files[0];
}

const onUpload = (image) => {
  selectedImage.value = image;
};

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

  // console.log(selectedImage.value);

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
