<template>
  <div class="grid place-items-center items-center">
    <div class="w-full p-4 justify-center">
      <CompAdminBackButton link="admin-list" linkTitle="Register Admin" />
      <VeeForm @submit="onSubmit" v-slot="{ errors }">
        <div class="grid grid-cols-1 text-left gap-4 rounded-md">
          <FormGroup label="First Name" name="firstname">
            <FormTextField
              id="firstname"
              name="firstname"
              v-model="form.first_name"
              placeholder="First Name"
              class="input-bordered"
              autocomplete="on"
              v-slot="{ errors }"
            />
          </FormGroup>

          <FormGroup label="Last Name" name="lastname">
            <FormTextField
              id="lastname"
              name="lastname"
              v-model="form.last_name"
              placeholder="Last Name"
              class="input-bordered"
              autocomplete="on"
              v-slot="{ errors }"
            />
          </FormGroup>

          <FormGroup label="Email" name="email">
            <FormTextField
              id="email"
              name="email"
              v-model="form.email"
              placeholder="ex:myemail@gmail.com"
              class="input-bordered"
              autocomplete="on"
              v-slot="{ errors }"
            />
          </FormGroup>

          <FormGroup label="Password" name="password">
            <FormTextField
              id="password"
              name="password"
              type="password"
              v-model="form.password"
              placeholder="Password"
              class="input-bordered"
              autocomplete="on"
              v-slot="{ errors }"
            />
          </FormGroup>

          <FormGroup label="Confirm Password" name="confirmPassword">
            <FormTextField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              v-model="form.confirm_password"
              placeholder="Confirm Password"
              class="input-bordered"
              autocomplete="on"
              v-slot="{ errors }"
            />
          </FormGroup>
          <div class="flex justify-end">
            <button
              class="btn bg-primary text-white"
              type="submit"
              :disabled="loading"
            >
              Submit
            </button>
          </div>
        </div>
      </VeeForm>
    </div>
  </div>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const { registerSchema } = useSchema();
const { stateForm } = useForgotPassword();
const { snackbar } = useSnackbar();

const form = ref({
  first_name: undefined,
  last_name: undefined,
  email: undefined,
  password: undefined,
  confirm_password: undefined,
});

async function onSubmit() {
  loading.value = true;

  const { data, error } = await useFetch(`/admins`, {
    method: "post",
    body: {
      first_name: form.value.first_name,
      last_name: form.value.last_name,
      email: form.value.email,
      password: form.value.password,
      confirm_password: form.value.confirm_password,
    },
    ...requestOptions,
  });

  if (error.value) {
    ctx.setErrors(transformErrors(error?.data));
    snackbar.add({
      type: "error",
      text: error.value?.data?.message ?? "Something went wrong",
    });
  } else if (data.value) {
    snackbar.add({
      type: "success",
      text: "Your data registration is Success, We will confirm soon",
    });
    router.push("/admin/admin-list");
  }
}

useHead({
  title: "Register admin",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
