<template>
  <VeeForm @submit="onSubmit" v-slot="{ errors }">
    {{ props.eachBlog?.category_id }}
    <div class="grid mt-10  p-3 ">
      <div class="grid grid-cols-2">
        <div class="flex flex-col">
          <label for="image" class="mb-1">Image</label>
          <VeeField id="image" name="image" ref="fileInput" type="file"
            class="file-input file-input-md file-input-bordered file-input-accent w-full max-w-xs"
            @input="saveToPreviewImage" />
        </div>
        <div v-if="eachBlog?.image">
          <span class="text-sm">Image File Uploaded:</span>
          <div class="flex flex-col items-center min-w-[200px]">
            <div class="flex justify-center mb-3">
              <img :src="eachBlog.image" alt="image" class="border-2" />
            </div>
          </div>
        </div>
        <div v-else-if="imagePreview">
          <span class="text-sm">Image File Uploaded:</span>
          <div class="flex flex-col items-center min-w-[200px]">
            <div class="flex justify-center mb-3">
              <img :src="imagePreview" alt="image" class="border-2" />
            </div>
          </div>
        </div>
      </div>
      <label for="Title">Title</label>
      <VeeField id="Title" type="text" name="Title" placeholder="Input Title" class="input input-bordered w-full"
        v-model="formData.title" autocomplete="off" />
      <div class="flex flex-col mt-5">
        <label for="body">Body</label>
        <FormTextEditor v-model="formData.body" :is-error="!!errors.body" />
        <VeeErrorMessage name="body" />

      </div>
      <div class="flex flex-col mt-5">
        <label for="Category">Category</label>
        <VeeField id="category" name="category" as="select" v-model="formData.category_id"
          class="select select-bordered w-full" placeholder="category" autocomplete="off">
          <option disabled selected>Category</option>
          <option :value="item.id" v-for="item in categoryBlog">
            {{ item.name }}
          </option>
        </VeeField>
      </div>
      <div class="flex flex-col mt-5">
        <label for="Meta">Meta</label>
        <VeeField id="Meta" as="textarea" name="Meta" placeholder="Input Meta" class="textarea textarea-bordered w-full"
          v-model="formData.meta" autocomplete="off" />
      </div>
    </div>
    <div class="flex justify-end mt-5">
      <button type="submit" :disabled="loading" class="btn btn-success">
        Edit Blog
      </button>
    </div>
  </VeeForm>
</template>

<script setup >
import axios from "axios";
const { axiosRequest } = useAxios();
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();
const route = useRoute();
const slug = computed(() => route.params.slug);

const props = defineProps({
  eachBlog: {
    type: Object,
  },
  categoryBlog: {
    type: Array,
  },
});

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

async function onSubmit(values, ctx) {
  loading.value = true;

  const object = { ...formData.value }

  console.log(object);
  const formDataT = new FormData()

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
      text: error?.data?.message ?? "Something went wrong",
    });
  } else if (data.value) {
    snackbar.add({
      type: "success",
      text: "Edit Blog Success",
    });
  }
  loading.value = false;
}



</script>
