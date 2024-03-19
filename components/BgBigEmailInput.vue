<template>
  <VeeForm @submit="onSubmit" v-slot="{ errors }">
    <div
      class="rounded-full flex items-center md:p-2 px-1 lg:px-2 bg-quaternary max-h-[60px]"
    >
      <VeeField
        type="text"
        name="email"
        v-model="dataForm.email"
        class="pl-2 text-sm h-full outline-none box-border text-tertiary bg-quaternary"
        placeholder="Mail@gmail.com"
        autocomplete="off"
        :style="{ WebkitAppearance: 'none', color: 'white' }"
      />
      <button
        class="rounded-full bg-tertiary text-tertiary hover:bg-opacity-40 transition ml-2 my-2 mr-1"
        type="submit"
        :disabled="loading"
      >
        <svg
          width="40"
          height="40"
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
// const { contactSchema } = useSchema();
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();

const dataForm = ref({
  email: undefined,
});

// const initialValues = {
//   ...dataForm.value,
// };

async function onSubmit(values, ctx) {
  loading.value = true;

  // for (const key in dataForm.value) {
  //   if (key !== "email") {
  //     if (dataForm.value[key] === "") {
  //       dataForm.value[key] = "-";
  //     }
  //   }
  // }

  const { data, error } = await useFetch("/newsletter-subscribers", {
    method: "POST",
    body: { ...dataForm.value },
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
      text: "Thanks for input your email.",
    });

    // dataForm.value = { ...initialValues };
    ctx.resetForm();
  }

  loading.value = false;
}
</script>
