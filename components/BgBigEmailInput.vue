<template>
  <VeeForm @submit="onSubmit" v-slot="{ errors }">
    <div
      class="rounded-full flex items-center md:p-2 px-1 lg:px-2 bg-quaternary max-h-[60px]"
    >
      <div class="hidden">
        <VeeField
          id="firstName"
          name="firstName"
          v-model="dataForm.first_name"
          type="text"
          class="input w-full input-sm"
          placeholder="First Name"
          autocomplete="firstname"
        />
        <VeeField
          id="lastName"
          name="lastName"
          v-model="dataForm.last_name"
          type="text"
          class="input w-full input-sm"
          placeholder="Last Name"
          autocomplete="lastname"
        />
        <VeeField
          id="subject"
          name="subject"
          v-model="dataForm.subject"
          type="text"
          class="input w-full input-sm"
          placeholder="Subject"
          autocomplete="subject"
        />
        <VeeField
          id="message"
          name="message"
          v-model="dataForm.message"
          type="text"
          class="input w-full input-sm"
          placeholder="Message"
          autocomplete="Message"
        />
      </div>

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
        class="rounded-full bg-tertiary text-tertiary hover:bg-opacity-40 transition"
        type="submit"
        :disabled="loading"
      >
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
  first_name: "Sending Email Only",
  last_name: "Sending Email Only",
  email: undefined,
  subject: "Sending Email Only",
  message: "Lijst met werkplekken",
});

const initialValues = {
  ...dataForm.value,
};

async function onSubmit(values, ctx) {
  console.log(dataForm.value);

  loading.value = true;

  for (const key in dataForm.value) {
    if (key !== "email") {
      if (dataForm.value[key] === "") {
        dataForm.value[key] = "-";
      }
    }
  }

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
      text: "Thank for input your email. We will get back to you as soon as possible.",
    });

    dataForm.value = { ...initialValues };
    // ctx.resetForm();
  }

  loading.value = false;
}
</script>
