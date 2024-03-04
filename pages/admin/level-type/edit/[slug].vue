<template>
  <div v-if="pending">Loading...</div>
  <div v-if="data && data?.data" class="overflow-y-auto max-h-[70%]">
    <h3 class="font-bold my-2">Edit Level Type {{ data?.data?.Name }}</h3>
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
        <button
          type="submit"
          :disabled="loading"
          class="mt-4 btn btn-md btn-outline transition flex items-center justify-center cursor-pointer btn-success"
        >
          Edit Data
        </button>
      </div>
    </VeeForm>
  </div>
  <NuxtLink to="/admin/level-type">
    <button class="btn btn-sm btn-outline btn-warning">Back</button>
  </NuxtLink>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();

const route = useRoute();
const slug = computed(() => {
  return route.params.slug;
});

const { data, pending } = await useFetch(`/admins/level-types/${slug.value}`, {
  method: "get",
  ...requestOptions,
});

const name = ref(data.value.data.name);

async function onSubmit(values, ctx) {
  loading.value = true;

  const { error } = await useFetch(`/admins/level-types/${slug.value}`, {
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
      text: "Success Edit Level Type",
    });

    ctx.resetForm();
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
