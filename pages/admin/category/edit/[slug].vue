<template>
  <section>
    <CompAdminBackButton link="category" linkTitle="Edit Category" />
    <VeeForm @submit="onSubmit">
      <div class="grid grid-cols-2 mt-3 gap-3">
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
        <div class="flex flex-col">
          <label for="shortDesk">Short Description</label>
          <input
            id="shortDesk"
            type="text"
            placeholder="Short Description"
            class="input input-bordered w-full"
            v-model="formData.short_description"
            autocomplete="on"
          />
        </div>
      </div>
      <div class="flex flex-col mt-5">
        <label for="fullDesk">Full Description</label>
        <textarea
          id="fullDesk"
          type="textarea"
          placeholder="Full Description"
          class="textarea textarea-bordered w-full"
          v-model="formData.full_description"
          autocomplete="on"
        />
      </div>
      <div class="flex justify-end mt-5">
        <CompAdminButtonAddForm
          buttonName="Edit Category"
          :isLoading="loading"
        />
      </div>
    </VeeForm>
  </section>
</template>

<script setup>
const { categorySchema } = useSchema();
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();
const route = useRoute();
const router = useRouter();
const slug = computed(() => route.params.slug);

function goToHomeCategory() {
  router.push("/admin/category");
}

const { data: eachCategory, error } = await useFetch(
  `/admins/categories/${slug.value}`,
  {
    method: "get",
    ...requestOptions,
  }
);

const formData = ref({
  name: eachCategory.value.data.name,
  short_description: eachCategory.value.data.short_description,
  full_description: eachCategory.value.data.full_description,
});

async function onSubmit(values, ctx) {
  loading.value = true;

  const { error } = await useFetch(`/admins/categories/${slug.value}`, {
    method: "put",
    body: formData.value,
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
      text: "Edit Category Success",
    });
    goToHomeCategory();
    ctx.resetForm();
  }

  loading.value = false;
}

useHead({
  title: "Edit Category",
});

definePageMeta({
  layout: "admin",
  middleware: ["auth", "admin"],
});
</script>
