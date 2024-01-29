<template>
  <div class="flex flex-col justify-center items-center md:my-10">
    <h1 class="text-[#404040] text-[35px] font-semibold my-4">
      Neem contact op
    </h1>
    <p class="text-[14px] text-center">
      Heb je vragen of opmerkingen? Wil je een afspraak maken of een rondleiding
      aanvragen?
    </p>
    <div
      class="flex my-5 w-full flex-col md:flex-row justify-center px-10 md:px-0 gap-5"
    >
      <div
        class="flex flex-col mt-2 mx-2 md:mx-0 md:w-[400px] py-5 pl-2 md:pl-5 bg-[#F7F7F7] box-shadow2 max-h-[400px] order-2 md:order-1"
      >
        <p class="text-[16px] text-[#230000] leading-9">
          Dan kun je een mail sturen of bellen:
        </p>
        <p class="text-[#777] text-[12px] sm:text-[16px] leading-9">
          info@werkstek.nl
        </p>
        <p class="text-[#777] text-[12px] sm:text-[16px] leading-9">
          085 – 0290598
        </p>
        <h1
          class="text-[12px] sm:text-[16px] text-[#230000] leading-9 my-1 md:my-4"
        >
          Ons Werkstek hoofdkantoor:
        </h1>
        <p class="text-[#777] text-[12px] sm:text-[16px] leading-9">
          Werkstek B.V.
        </p>
        <p class="text-[#777] text-[12px] sm:text-[16px] leading-9">
          Tussen de Bogen 81
        </p>
        <p class="text-[#777] text-[12px] sm:text-[16px] leading-9">
          1013 JB AMSTERDAM
        </p>
        <div class="flex gap-1 mt-2">
          <img
            src="/images/icon-facebook-black.svg"
            alt="icon-facebook-black"
          />
          <img
            src="/images/icon-instagram-black.svg"
            alt="icon-instagram-black"
          />
          <img src="/images/icon-youtube-black.svg" alt="icon-youtube-black" />
          <img
            src="/images/icon-linkedin-black.svg"
            alt="icon-linkedin-black"
          />
        </div>
      </div>
      <div class="login-box md:order-2 md:w-[400px]">
        <VeeForm
          @submit="onSubmit"
          :validation-schema="contactSchema"
          class="text-[12px] md:text-[16px]"
          v-slot="{ errors }"
        >
          <div class="user-box">
            <VeeField name="name" v-model="dataForm.name" />
            <VeeErrorMessage name="name" class="text-sm text-error" />
            <label>Je naam (verplicht)</label>
          </div>
          <div class="user-box">
            <VeeField name="email" v-model="dataForm.email" />
            <VeeErrorMessage name="email" class="text-sm text-error" />
            <label>Je e-mailadres (verplicht)</label>
          </div>
          <div class="user-box">
            <VeeField name="subject" v-model="dataForm.subject" />
            <VeeErrorMessage name="subject" class="text-sm text-error" />
            <label>Onderwerp</label>
          </div>
          <div class="user-box">
            <VeeField
              name="message"
              v-model="dataForm.message"
              v-slot="{ field }"
            >
              <textarea
                v-bind="field"
                class="h-[100px] min-h-[50px] max-h-[150px]"
              />
            </VeeField>
            <VeeErrorMessage name="message" class="text-sm text-error" />

            <label>Je bericht</label>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="bg-[#F0912D] w-[25%] md:w-[40%] max-w-[172px] h-[30px] lg:h-[52px] rounded-[14px] flex items-center justify-center cursor-pointer"
          >
            <span
              class="text-[12px] md:text-[14px] sm:font-bold text-center text-white"
            >
              Contact opnemen
            </span>
          </button>
        </VeeForm>
      </div>
    </div>
  </div>
</template>

<script setup>
const { contactSchema } = useSchema();
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();

const dataForm = ref({
  name: undefined,
  email: undefined,
  subject: undefined,
  message: undefined,
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

<style>
.login-box {
  box-sizing: border-box;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input,
.login-box .user-box textarea {
  width: 100%;
  padding: 10px 0;
  color: #777;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #777;
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  color: #777;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label,
.login-box .user-box textarea:focus ~ label,
.login-box .user-box textarea:valid ~ label {
  top: -20px;
  left: 0;
  color: #777;
  font-size: 12px;
}
</style>
