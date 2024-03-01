<template>
  <VeeForm @submit="onSubmit" v-slot="{ errors }">
    <div class="grid mt-10 overflow-auto p-3">
      <div class="grid grid-cols-2">
        <div class="flex flex-col">
          <label for="image" class="mb-1">Image</label>
          <VeeField
            id="image"
            name="image"
            ref="fileInput"
            type="file"
            class="file-input file-input-md file-input-bordered file-input-accent w-full max-w-xs"
            @input="saveToPreviewImage"
          />
        </div>
        <div v-if="eachBlog.data.image">
          <span class="text-sm">Image File Uploaded:</span>
          <div class="flex flex-col items-center min-w-[200px]">
            <div class="flex justify-center mb-3">
              <img :src="eachBlog.data.image" alt="image" class="border-2" />
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
        <VeeField
          id="body"
          as="textarea"
          name="body"
          placeholder="Input Body"
          class="textarea textarea-bordered w-full"
          v-model="formData.body"
          autocomplete="off"
        />
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
  title: props.eachBlog.title,
  body: props.eachBlog.body,
  category_id: props.eachBlog.category_id,
  meta: props.eachBlog.meta,
});

const imagePreview = null;
const selectedImage = null;

function saveToPreviewImage(event) {
  imagePreview = URL.createObjectURL(event.target.files[0]);
  selectedImage = event.target.files[0];
}

async function onSubmit(values, ctx) {
  loading.value = true;

  const formDataToSend = new FormData();
  formDataToSend.append("image", selectedImage);
  formDataToSend.append("title", formData.value.title);
  formDataToSend.append("body", formData.value.body);
  formDataToSend.append("category_id", formData.value.category_id);
  formDataToSend.append("meta", formData.value.meta);

  const { error } = await useFetch(
    `/admins/articles/${slug.value}?_method=PUT`,
    {
      method: "post",
      body: formDataToSend,
      ...requestOptions,
    }
  );

  // const { error } = await axiosRequest.post(
  //   `/admins/articles/${slug.value}?_method=PUT`,
  //   {
  //     body: formDataToSend,
  //     ...requestOptions,
  //   }
  // );

  if (error) {
    ctx.setErrors(transformErrors(error?.data));
    snackbar.add({
      type: "error",
      text: error?.data?.message ?? "Something went wrong",
    });
  } else {
    snackbar.add({
      type: "success",
      text: "Edit Blog Success",
    });
  }
  loading.value = false;
}

useHead({
  title: "Edit Blog",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
