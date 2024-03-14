<template>
  <section>
    <CompAdminBackButton link="facility" linkTitle="Add Facility" />
    <div class="grid grid-cols-2">
      <form @submit.prevent="onSubmit">
        <div class="grid mt-8 gap-3">
          <!-- <span>Image</span>
          <BlogImageCrop :loading="loading" v-model="selectedImage" /> -->
          <div class="flex flex-col">
            <label for="Name">Name</label>
            <input
              id="Name"
              type="text"
              placeholder="Input Name"
              class="input input-bordered w-full"
              v-model="formData.name"
              autocomplete="off"
              required
            />
          </div>
          <button type="button" class="btn hidden" @click="selectImage">
            Choose Image
          </button>
        </div>
        <div class="flex justify-end mt-5">
          <CompAdminButtonAddForm
            buttonName="Add Facility"
            :isLoading="loading"
          />
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();
const route = useRoute();
const router = useRouter();

const formData = ref({
  name: undefined,
});

const fileInput = ref(null);

const selectImage = () => {
  fileInput.value.click();
};

const imagePreview = ref(null);
const selectedImage = ref(null);

selectedImage.value = "/images/checkbox_checked.svg";

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
    formDataT.append("icon", selectedImage.value);
  }

  const { error, data } = await useFetch(`/admins/facility`, {
    method: "POST",
    body: formDataT,
    ...requestOptions,
  });

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
    router.push("/admin/facility");
  }

  loading.value = false;
}

// const onSubmit = async (values, ctx) => {
//   loading.value = true;

//   const formData = new FormData();
//   formData.append("name", name.value);
//   formData.append("image", imageTest.value);

//   const { error } = await useFetch(`/admins/facility`, {
//     method: "post",
//     body: formData,
//     ...requestOptions,
//   });

//   if (error.value) {
//     ctx.setErrors(transformErrors(error.value?.data));
//     snackbar.add({
//       type: "error",
//       text: error.value?.data?.message ?? "Something went wrong",
//     });
//   } else {
//     snackbar.add({
//       type: "success",
//       text: "Add Facility Success",
//     });
//     ctx.resetForm();
//   }

//   loading.value = false;
// };

useHead({
  title: "Add Facility",
});

definePageMeta({
  layout: "admin",
  middleware: ["auth", "admin"],
});
</script>
