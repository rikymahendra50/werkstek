<template>
  <div class="overflow-y-auto max-h-[70%]">
    <CompAdminBackButton link="level-type" linkTitle="Add Level Type" />
    <div class="grid grid-cols-2 px-3">
      <VeeForm @submit="onSubmit">
        <label for="Name">Level Type</label>
        <VeeField
          id="Name"
          type="text"
          name="Name"
          placeholder="Input Level Type"
          class="input input-bordered w-full"
          v-model="name"
          autocomplete="off"
        />
        <div class="flex justify-end mt-5">
          <CompAdminButtonAddForm
            buttonName="Add Level Type"
            :isLoading="loading"
          />
        </div>
      </VeeForm>
    </div>
  </div>
  <!-- <NuxtLink to="/admin/level-type">
    <button class="btn btn-sm btn-outline btn-warning">Back</button>
  </NuxtLink> -->
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();
const router = useRouter();

const name = ref();

async function onSubmit(values, ctx) {
  loading.value = true;

  const { error } = await useFetch(`/admins/level-types`, {
    method: "post",
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
      text: "Success Add Level Type",
    });
    router.push("/admin/level-type");
  }

  loading.value = false;
}

useHead({
  title: "Add Level Type",
});

definePageMeta({
  layout: "admin",
  middleware: ["auth", "admin"],
});
</script>
