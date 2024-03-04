<template>
  <VeeForm
    @submit="onSubmit"
    :validation-schema="otpSchema"
    v-slot="{ errors }"
  >
    <div
      class="grid grid-cols-1 w-[450px] text-left gap-4 p-4 rounded-md shadow"
    >
      <!-- <Alert v-model="message" :type="alertType" /> -->
      <FormGroup label="OTP" name="otp">
        <div class="hidden">
          <VeeField name="otp" v-model="stateForm.otp" />
        </div>
        <FormInputOTP v-model="stateForm.otp" :is-error="!!errors?.otp" />
        <VeeErrorMessage name="otp" class="form-error-message" />
      </FormGroup>
      <div v-if="showPinEmailExpired">
        <p class="text-gray-400">
          If you did not receive the an email
          <span class="link" @click="resentEmail" role="button"
            >click here</span
          >
        </p>
      </div>
      <div>
        <div v-if="secondTime > 0" class="text-gray-400 text-sm">
          We have sent an OTP to your email. Your OTP will expired in
          <span class="whitespace-nowrap"> {{ secondTime }} seconds </span>
        </div>

        <div class="text-error text-sm" v-if="showPinEmailExpired">
          Your OTP has expired. Please request a new one
        </div>
      </div>

      <div>
        <button type="submit" :disabled="loading" class="btn btn-success">
          Submit
        </button>
      </div>
    </div>
  </VeeForm>
</template>

<script setup lang="ts">
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();

const props = defineProps({
  email: String,
  otp: String,
});

const emit = defineEmits(["next", "update:otp"]);

const { stateForm, countdown, showPinEmailExpired, secondTime } =
  useForgotPassword();
const { otpSchema } = useSchema();

const { loading, message, alertType } = useRequestHelper();

function updateToParent() {
  emit("update:otp", stateForm.value.otp);
  emit("next");
}

// onMounted(() => {
//   const savedEmail = localStorage.getItem("userEmail");
//   if (savedEmail) {
//     stateForm.value.email = savedEmail;
//   }
// });

function resentEmail() {
  showPinEmailExpired.value = false;
  secondTime.value = 60;
  countdown();
  console.log(stateForm.value.email);

  useFetch("/admins/resend-email-verification", {
    method: "POST",
    body: { email: stateForm.value.email },
    ...requestOptions,
  });
}

async function onSubmit() {
  loading.value = true;
  // message.value = "hallo";
  // localStorage.setItem("userPin", stateForm.value.otp);
  // console.log(stateForm.value);
  // console.log(stateForm.value.otp);
  // alertType.value = "success";

  // await useFetch(
  //   "/admins/email-verification/zfwTTw3aw0h0zuf6Cex3edfVhSpbvoh1dvqmV8PQ0FEQedCart9qrOCrUbzxGKyyfgMiWvDctYX21nkBeq1ybPx6iV9oGcu6QAbrC98HH46SqkKjZajeFF5L2HwTEPbzwWKk4H1KTPFEnAtkcWtf974HUCiUHRvxkbbpBj4eCJFWdJxkyluVfRtQYHOiNBAGT3t2Y1EZiqh75Oh7tH0Eue5mJL8dOamRlJYZv6VgSmo7V3n5lUU35WAHVJQ6KDv",
  //   {
  //     method: "POST",
  //     ...requestOptions,
  //   }
  // );

  const { error } = await useFetch("/admins/forget-password/verify-pin", {
    method: "POST",
    body: JSON.stringify({
      email: props.email,
      pin: stateForm.value.otp,
    }),
    ...requestOptions,
  });

  if (error.value) {
    snackbar.add({
      type: "error",
      text: error.value?.data?.message ?? "Something went wrong",
    });
  } else {
    snackbar.add({
      type: "success",
      text: "Thank you for your message. We will get back to you as soon as possible.",
    });
  }

  updateToParent();
  loading.value = false;
}

onMounted(async () => {
  await nextTick();
  countdown();
});
</script>

<style scoped></style>
