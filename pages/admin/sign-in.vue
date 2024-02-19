<template>
  <div class="grid place-items-center items-center h-screen">
    <div class="w-[500px] p-10 justify-center shadow-lg">
      <Werkstek class="mb-10" />
      <VeeForm :validation-schema="loginSchema" @submit="onSubmit">
        <h4 class="pb-1 text-lg">Email</h4>
        <div class="flex flex-col space-y-4">
          <div>
            <VeeField
              name="email"
              class="input input-bordered w-full"
              v-model="form.email"
            />
            <VeeErrorMessage name="email" class="text-sm text-error" />
          </div>
          <div>
            <h4 class="pb-1 text-lg">Password</h4>
            <VeeField
              name="password"
              v-model="form.password"
              type="password"
              class="input input-bordered w-full"
            />
            <VeeErrorMessage name="password" class="text-sm text-error" />
          </div>
          <div class="mt-5">
            <button
              :disabled="loading"
              type="submit"
              class="btn bg-[#F0912D] text-white w-full hover:bg-secondary"
            >
              Sign In
            </button>
          </div>
          <div class="mt-5">
            <NuxtLink
              to="/admin/forget-password"
              :disabled="loading"
              type="submit"
              class="border-primary p-2 text-center text-primary hover:text-secondary border-2 w-full rounded-lg hover:border-secondary"
            >
              Forget Password
            </NuxtLink>
          </div>
        </div>
      </VeeForm>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Role, Provider } from "@/types";
const { $setCredential } = useNuxtApp();
const { loading, message, alertType, setErrorMessage, transformErrors } =
  useRequestHelper();

const { requestOptions } = useRequestOptions();
const { loginSchema } = useSchema();

const form = ref({
  email: "",
  password: "",
});

async function onSubmit(values: any, ctx: any) {
  loading.value = true;

  const { data, error } = await useFetch<{ token: string }>("/admins/login", {
    method: "post",
    body: { ...form.value },
    ...requestOptions,
  });

  if (error.value) {
    setErrorMessage(error.value?.data?.message);
    ctx.setErrors(transformErrors(error.value?.data));
  } else if (data.value?.token) {
    $setCredential({
      token: data?.value?.token as string,
      role: Role.ADMIN,
      provider: Provider.LOCAL,
    });
    /**
     * remove all local person data if someone login
     *
     */
    // localPerson.value = [];

    window.location.replace("/admin");
  }

  loading.value = false;
}

useHead({
  title: "Login",
});
</script>

<style></style>
