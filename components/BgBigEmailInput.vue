<template>
  <VeeForm
    @submit="onSubmit"
    :validation-schema="contactSchema"
    v-slot="{ errors }"
  >
    <div
      class="rounded-full flex items-center md:p-2 px-1 lg:px-2 bg-quaternary max-h-[60px]"
    >
      <VeeField
        type="text"
        name="email"
        v-model="dataForm.email"
        class="bg-transparent pl-2 text-sm h-full outline-none box-border text-tertiary"
        placeholder="Mail@gmail.com"
        :style="{ WebkitAppearance: 'none', color: 'white' }"
      />
      <button class="rounded-full bg-tertiary text-tertiary">
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8125 18.6799L16.9997 12.4927L10.8125 6.30554"
            stroke="#859C81"
            stroke-width="1.875"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <VeeErrorMessage name="email" class="md:ml-2 text-sm text-red-700" />
  </VeeForm>
</template>

<script setup>
const { contactSchema } = useSchema();
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();

const dataForm = ref({
  email: undefined,
});

async function onSubmit(values, ctx) {
  loading.value = true;

  const { data, error } = await useFetch("/contacts", {
    method: "POST",
    body: dataForm.value,
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
      text: "Thank you for your message. We will get back to you as soon as possible.",
    });

    ctx.resetForm();
  }

  loading.value = false;
}
</script>
