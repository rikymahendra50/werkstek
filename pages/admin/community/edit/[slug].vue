<template>
  <CompAdminBackButton link="community" linkTitle="Edit Community" />
  <VeeForm @submit="onSubmit" v-slot="{ errors }">
    <!-- {{ props.eachBlog?.category_id }} -->
    <div class="grid mt-10 p-3 gap-4">
      <div>
        <BlogImageCrop
          :loading="loading"
          :existingimage="dataSlug?.image"
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
      <CompAdminButtonAddForm
        buttonName="Edit Community"
        :isLoading="loading"
      />
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

const fileInput = ref(null);

const selectImage = () => {
  fileInput.value.click();
};

const { data: eachCommunity, pending: eachCommunityPending } = await useFetch(
  `/admins/community-blogs/${slug.value}`,
  {
    method: "get",
    ...requestOptions,
  }
);

const dataSlug = eachCommunity?.value.data;

// const category = categoryBlog.value.data.map((item) => item.name);

const formData = ref({
  title: dataSlug.title,
  body: dataSlug.body,
  meta: dataSlug.meta,
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
  if (selectedImage.value) {
    formDataT.append("image", selectedImage.value);
  }

  const { error, data } = await useFetch(
    `/admins/community-blogs/${slug.value}?_method=PUT`,
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
      text: "Edit Community Success",
    });
    router.push("/admin/community");
  }

  loading.value = false;
}

useHead({
  title: "Edit Community",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
