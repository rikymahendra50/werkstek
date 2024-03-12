<!-- <template>
  <section>
    <CompAdminBackButton link="facility" linkTitle="Edit Facility" />
    <VeeForm @submit="onSubmit">
      <div class="grid grid-cols-2 mt-3 gap-3">
        <div class="flex flex-col">
          <label for="Name">Name</label>
          <input
            id="Name"
            type="text"
            placeholder="Input Name"
            class="input input-bordered w-full"
            v-model="name"
            autocomplete="on"
          />
        </div>
        <div class="flex flex-col">
          <label for="image">Icon</label>
          <input
            id="image"
            type="file"
            name="image"
            class="file-input file-input-bordered file-input-warning w-full max-w-xs"
            accept="image/*"
            v-on:change="handleImageChange"
            @click="selectImage"
            autocomplete="on"
            required
          />
        </div>
      </div>
      <div class="flex justify-end mt-5">
        <CompAdminButtonAddForm
          buttonName="Edit Facility"
          :isLoading="loading"
        />
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

const { data: facilities, error } = await useFetch(
  `/admins/facilities/${slug.value}`,
  {
    method: "get",
    ...requestOptions,
  }
);

const fileInput = ref(null);
const getImages = ref(facilities.value);
const imageTest = ref();

const handleImageChange = (event) => {
  const files = event.target.files;
  imageTest.value = files[0];
};

const name = ref(facilities.value.data.name);

async function onSubmit(values, ctx) {
  loading.value = true;

  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("image", imageTest.value);

  const { error } = await useFetch(
    `/admins/facilities/${slug.value}?_method=PUT`,
    {
      method: "put",
      body: formData,
      ...requestOptions,
    }
  );

  if (error.value) {
    ctx.setErrors(transformErrors(error.value?.data));
    snackbar.add({
      type: "error",
      text: error.value?.data?.message ?? "Something went wrong",
    });
  } else {
    snackbar.add({
      type: "success",
      text: "Edit Facility Success",
    });
    F;
    router.push("/admin/facility");
  }

  loading.value = false;
}

useHead({
  title: "Edit Facility",
});

definePageMeta({
  layout: "admin",
  middleware: ["auth", "admin"],
});
</script> -->

<template>
  <section>
    <CompAdminBackButton link="facility" linkTitle="Edit Facility" />
    <form @submit.prevent="onSubmit" class="max-h-[400px]">
      <div class="grid grid-cols-1 gap-3 min">
        <div class="flex flex-col">
          <label for="Name">Name</label>
          <input
            id="Name"
            type="text"
            placeholder="Input Name"
            class="input input-bordered w-full"
            v-model="formData.name"
            autocomplete="on"
          />
        </div>
        <span>Image</span>
        <BlogImageCrop
          :loading="loading"
          v-model="selectedImage"
          :existingimage="facilities?.data.icon"
        />
      </div>
      <div class="flex justify-end mt-5">
        <CompAdminButtonAddForm
          buttonName="Edit Facility"
          :isLoading="loading"
        />
      </div>
    </form>
  </section>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();
const route = useRoute();
const slug = computed(() => route.params.slug);
const router = useRouter();

const { data: facilities, error } = await useFetch(
  `/admins/facilities/${slug.value}`,
  {
    method: "get",
    ...requestOptions,
  }
);

const fileInput = ref(null);

const selectImage = () => {
  fileInput.value.click();
};

const imagePreview = ref();
const selectedImage = ref();

function saveToPreviewImage(event) {
  imagePreview.value = URL.createObjectURL(event.target.files[0]);
  selectedImage.value = event.target.files[0];
}

const onUpload = (image) => {
  selectedImage.value = image;
};

const formData = ref({
  name: facilities.value.data.name,
});

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
    formDataT.append("icon", selectedImage.value);
  }

  const { error, data } = await useFetch(
    `/admins/facilities/${slug.value}?_method=PUT`,
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
      text: "Edit Facility Success",
    });
    router.push("/admin/facility");
  }

  loading.value = false;
}

useHead({
  title: "Edit Facility",
});

definePageMeta({
  layout: "admin",
  middleware: ["auth", "admin"],
});
</script>
