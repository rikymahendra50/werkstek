<template>
  <section class="overflow-auto">
    <CompAdminBackButton link="admin-list" linkTitle="Edit Admin List" />
    <div class="grid grid-cols-2">
      <VeeForm @submit="onSubmit" v-slot="{ errors }">
        <div class="flex flex-col mt-3 px-8 overflow-auto gap-4">
          <div class="flex flex-col">
            <div class="flex items-center">
              <label for="firstname">First Name</label>
            </div>
            <FormTextField
              id="firstname"
              name="firstname"
              v-model="formData.first_name"
              placeholder="Input First Name"
              class="input-bordered"
              autocomplete="off"
            />
          </div>
          <div class="flex flex-col">
            <div class="flex items-center">
              <label for="lastname">Last Name</label>
            </div>
            <FormTextField
              id="lastname"
              name="lastname"
              v-model="formData.last_name"
              placeholder="Input Last Name"
              class="input-bordered"
              autocomplete="off"
            />
          </div>
          <div class="flex flex-col gap-3">
            <div class="flex items-center">
              <label for="lastname">Is Active</label>
            </div>
            <label
              v-for="item in isActiveData"
              :key="item.id"
              class="checkbox-label flex gap-2"
            >
              <VeeField
                :id="`isactive + ${item.id}`"
                :name="`isactive + ${item.name}`"
                type="checkbox"
                :value="item.value"
                v-model="formData.is_active"
              />
              {{ item.name }}
            </label>
          </div>
          <div class="flex justify-end mt-5">
            <CompAdminButtonAddForm
              buttonName="Edit Admin"
              :isLoading="loading"
            />
          </div>
        </div>
      </VeeForm>
    </div>
  </section>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const router = useRouter();
const snackbar = useSnackbar();
const route = useRoute();
const slug = computed(() => route.params.slug);
const { formInput } = useSchema();

const { data: dataSlug } = await useFetch(`/admins/${slug.value}`, {
  method: "get",
  ...requestOptions,
});

const formData = ref({
  first_name: dataSlug?.value?.data?.first_name,
  last_name: dataSlug?.value?.data?.last_name,
  is_active: dataSlug?.value?.data?.is_active,
});

const isActiveData = ref([
  {
    id: 1,
    name: "Yes",
    value: 1,
  },
  {
    id: 2,
    name: "No",
    value: 0,
  },
]);

async function onSubmit(values, ctx) {
  loading.value = true;

  const { data, error } = await useFetch(`/admins/${slug.value}`, {
    method: "put",
    body: JSON.stringify(formData.value),
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
      text: "Success Edit Admin",
    });
    router.push("/admin");
  }

  loading.value = false;
}

useHead({
  title: "Edit Admin List",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
