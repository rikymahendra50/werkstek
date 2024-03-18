<template>
  <section class="overflow-auto">
    <CompAdminBackButton link="blog-category" linkTitle="Edit Blog Category" />
    <div class="grid grid-cols-2">
      <VeeForm
        @submit="onSubmit"
        v-slot="{ errors }"
        :validation-schema="singleNameField"
      >
        <div class="flex flex-col mt-4 px-8 overflow-auto">
          <div class="flex flex-col">
            <label for="name">Name</label>
            <FormTextField
              id="name"
              name="name"
              v-model="name"
              placeholder="Input Name"
              class="input-bordered"
              autocomplete="on"
            />
          </div>
          <div class="flex justify-end mt-5">
            <CompAdminButtonAddForm
              buttonName="Edit Category Blog"
              :isLoading="loading"
            />
          </div>
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
const { singleNameField } = useSchema();

const route = useRoute();
const slug = computed(() => {
  return route.params.slug;
});

const { data: category } = await useFetch(
  `/admins/article-categories/${slug.value}`,
  {
    method: "get",
    ...requestOptions,
  }
);

const name = ref(category?.value?.data?.name);

async function onSubmit(values, ctx) {
  loading.value = true;

  const { error } = await useFetch(`/admins/article-categories/${slug.value}`, {
    method: "put",
    body: { name: name.value },
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
      text: "Edit Category Blog Success",
    });
    router.push("/admin/blog-category");
  }
  loading.value = false;
}

useHead({
  title: "Edit Category Blog",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
