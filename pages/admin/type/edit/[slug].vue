<template>
  <CompAdminBackButton link="type" linkTitle="Edit Type" />
  <VeeForm @submit="onSubmit">
    <table class="table">
      <tbody>
        <tr>
          <td><label for="name">Name</label></td>
          <td>
            <input
              id="name"
              type="text"
              placeholder="Type here"
              v-model="name"
              class="input input-bordered w-full max-w-xs"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-end">
      <CompAdminButtonAddForm buttonName="Edit Type" :isLoading="loading" />
    </div>
  </VeeForm>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();

const route = useRoute();
const router = useRouter();
const slug = computed(() => {
  return route.params.slug;
});

const { data, pending } = await useFetch(`/admins/types/${slug.value}`, {
  method: "get",
  ...requestOptions,
});

const name = ref(data.value.data.name);

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
