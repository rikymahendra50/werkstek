<template>
  <VeeForm @submit="onSubmit" :validation-schema="resetPasswordSchema">
    <div
      class="grid grid-cols-1 w-[450px] text-left gap-4 p-4 rounded-md shadow"
    >
      <!-- <Alert v-model="message" :type="alertType" /> -->
      <FormGroup label="Passowrd" name="password">
        <FormTextField
          v-model="stateForm.password"
          name="password"
          placeholder="*******"
          type="password"
          class="input input-bordered"
        />
      </FormGroup>
      <FormGroup label="Confirm Passowrd" name="confirm_password">
        <FormTextField
          v-model="stateForm.password_confirmation"
          name="confirm_password"
          type="password"
          placeholder="*******"
          class="input input-bordered"
        />
      </FormGroup>
      <div>
        <p class="text-gray-400">We will send a code to your email</p>
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
const props = defineProps({
  email: String,
  otp: String,
});

const emit = defineEmits(["next"]);

const { stateForm } = useForgotPassword();

const { loading, message, alertType } = useRequestHelper();
const { resetPasswordSchema } = useSchema();
const { requestOptions } = useRequestOptions();

onMounted(() => {
  const savedEmail = localStorage.getItem("userEmail");
  const savedPin = localStorage.getItem("userPin");
  if (savedEmail) {
    stateForm.value.email = savedEmail;
  }
  if (savedPin) {
    stateForm.value.otp = savedPin;
  }
});

const resetPassword = computed(() => {
  return {
    email: props.email,
    pin: props.otp,
    password: stateForm.value.password,
    confirm_password: stateForm.value.password_confirmation,
  };
});

async function onSubmit() {
  loading.value = true;
  // message.value = "hallo";

  await useFetch("/admins/forget-password/reset-password", {
    method: "POST",
    body: JSON.stringify(resetPassword.value),
    ...requestOptions,
  });

  emit("next");
  loading.value = false;
}
</script>

<style scoped></style>
