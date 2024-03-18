<template>
  <CompAdminBackButton link="type" linkTitle="Edit Type" />
  <div class="grid grid-cols-2 px-4">
    <VeeForm
      @submit="onSubmit"
      :validation-schema="singleNameField"
      v-slot="{ errors }"
    >
      <div class="grid grid-cols-1 gap-3">
        <div class="flex flex-col">
          <label for="name" class="mb-3">Type Name</label>
          <FormTextField
            id="name"
            name="name"
            v-model="name"
            placeholder="Type Name"
            class="input-bordered"
            autocomplete="on"
          />
        </div>
      </div>
      <div class="flex justify-end mt-5">
        <CompAdminButtonAddForm buttonName="Edit Type" :isLoading="loading" />
      </div>
    </VeeForm>
  </div>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();
const { singleNameField } = useSchema();

const route = useRoute();
const router = useRouter();
const slug = computed(() => {
  return route.params.slug;
});

const { data, pending } = await useFetch(`/admins/types/${slug.value}`, {
  method: "get",
  ...requestOptions,
});

const name = ref(data?.value?.data?.name);

async function onSubmit(values, ctx) {
  loading.value = true;

  const { error } = await useFetch(`/admins/types/${slug.value}`, {
    method: "PUT",
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
      text: "Success Edit Type",
    });
    router.push("/admin/type");
  }

  loading.value = false;
}

useHead({
  title: data.value?.data?.name,
});

definePageMeta({
  layout: "admin",
  middleware: ["auth", "admin"],
});
</script>
