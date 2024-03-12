<template>
  <div class="grid place-items-center items-center h-screen">
    <div class="w-[500px] p-10 justify-center shadow-lg">
      <Werkstek class="mb-10" />
      <VeeForm :validation-schema="loginSchema" @submit="onSubmit">
        <label for="email" class="pb-1 text-lg">Email</label>
        <div class="flex flex-col space-y-4">
          <div>
            <VeeField
              id="email"
              name="email"
              class="input input-bordered w-full"
              v-model="form.email"
              autocomplete="off"
            />
            <VeeErrorMessage name="email" class="text-sm text-error" />
          </div>
          <div>
            <label for="password" class="pb-1 text-lg">Password</label>
            <VeeField
              id="password"
              name="password"
              v-model="form.password"
              type="password"
              class="input input-bordered w-full"
              autocomplete="off"
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
          <!-- <div
            class="mt-2 border-2 border-primary rounded-lg hover:border-secondary"
          >
            <NuxtLink
              to="/admin/registration"
              :disabled="loading"
              type="submit"
              class="p-2 text-center text-primary hover:text-secondary w-full rounded-lg"
            >
              Registasion
            </NuxtLink>
          </div> -->

          <div class="mt-5">
            <NuxtLink
              to="/admin/forgot-password"
              :disabled="loading"
              type="submit"
              class="p-2 text-center text-primary hover:text-secondary w-full rounded-lg hover:border-secondary"
            >
              Forgot Password?
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

definePageMeta({
  layout: false,
});
</script>

<style></style>
