<template>
  <section>
    <VeeForm @submit="onSubmit">
      <div class="flex flex-col mt-3 gap-3">
        <label for="reply">Reply</label>
        <textarea
          class="textarea textarea-bordered"
          id="reply"
          type="text"
          placeholder="Input Message"
          v-model="message"
          name="message"
          rules="required"
        ></textarea>
      </div>
      <div class="flex justify-end mt-5">
        <CompAdminButtonAddForm buttonName="Reply" :isLoading="loading" />
      </div>
    </VeeForm>
  </section>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();

const route = useRoute();
const slug = computed(() => {
  return route.params.slug;
});

const message = ref();

async function onSubmit(values, ctx) {
  loading.value = true;

  const { error } = await useFetch(`/admins/contacts/${slug.value}/reply`, {
    method: "POST",
    body: { message: message.value },
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
      text: "Sending Message Success",
    });

    ctx.resetForm();
  }

  loading.value = false;
}

useHead({
  title: "Reply",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
