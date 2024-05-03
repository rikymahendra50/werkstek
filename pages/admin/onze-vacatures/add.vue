<template>
  <CompAdminBackButton link="onze-locaties" linkTitle="Add Vacatures" />
  <div class="overflow-y-auto grid md:grid-cols-2">
    <Form
      @submit="onSubmit"
      v-slot="{ error }"
      :validation-schema="vacaturesSchema"
      class="text-[12px] md:text-[16px] flex-col flex items-center px-3 lg:px-8"
    >
      {{ error }}
      <div class="w-full my-4">
        <div class="mb-2">Image</div>
        <div class="hidden">
          <VeeField
            type="file"
            name="image"
            id="image"
            v-model="selectedImage"
          />
        </div>
        <BlogImageCrop
          :loading="loading"
          name="image"
          v-model="selectedImage"
        />
        <VeeErrorMessage name="image" class="text-red-500" />
      </div>

      <div class="flex flex-col w-full">
        <div class="flex items-center">
          <label for="title">Title</label>
        </div>
        <FormTextField
          id="title"
          name="title"
          v-model="formData.title"
          placeholder="Title"
          class="input-bordered"
          autocomplete="on"
        />
      </div>
      <div class="flex flex-col my-2 w-full">
        <div class="flex items-center">
          <label for="location">Location</label>
        </div>
        <VeeField
          id="location"
          name="location"
          as="select"
          v-model="formData.location_id"
          class="select select-bordered w-full"
          placeholder="location"
          autocomplete="location"
        >
          <option disabled selected>Location</option>
          <option :value="item.id" v-for="item in location.data">
            {{ item.name }}
          </option>
        </VeeField>
        <VeeErrorMessage
          name="location"
          class="form-error-message text-red-600"
        />
      </div>

      <div class="flex flex-col my-2 w-full">
        <div class="flex items-center">
          <label for="category">Category</label>
        </div>
        <FormTextField
          id="category"
          name="category"
          v-model="formData.category"
          placeholder="Category"
          class="input-bordered"
          autocomplete="on"
        />
      </div>

      <div class="flex flex-col gap-3 my-2 w-full">
        <div>Tags</div>
        <div class="flex items-center gap-3" v-for="item in name">
          <input
            :id="`test + ${item.id}`"
            name="tags"
            v-model="formData.tags"
            class="input-bordered"
            type="checkbox"
            :value="{ name: item.name }"
          />
          <label :for="`test + ${item.id}`">{{ item.name }}</label>
        </div>
        <VeeErrorMessage name="tags" class="form-error-message text-red-600" />
      </div>

      <div class="flex flex-col my-2 w-full">
        <div class="flex items-center">
          <label for="hours">Hours</label>
        </div>
        <FormTextField
          id="hours"
          name="hours"
          type="string"
          v-model="formData.hours"
          placeholder="hours"
          class="input-bordered"
          autocomplete="on"
        />
      </div>

      <div class="flex flex-col gap-3 my-2 w-full">
        <div>Types</div>
        <div class="flex items-center gap-3" v-for="item in type?.data">
          <input
            :id="`test2 + ${item.id}`"
            :name="`test2 + ${item.name}`"
            v-model="formData.types"
            class="input-bordered"
            type="checkbox"
            :value="{ type_id: item.id }"
            :rules="isRequired"
          />
          <label :for="`test2 + ${item.id}`">{{ item.name }}</label>
        </div>
        <VeeErrorMessage name="types" class="form-error-message text-red-600" />
      </div>

      <div class="flex justify-end w-full mt-3">
        <CompAdminButtonAddForm
          buttonName="Add Vacatures"
          :isLoading="loading"
        />
      </div>
    </Form>
  </div>
</template>

<script setup>
const { axiosRequest } = useAxios();
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();
const router = useRouter();
const route = useRoute();
const { vacaturesSchema } = useSchema();
import { Field, Form, ErrorMessage } from "vee-validate";

const { data: location } = await useFetch(`/admins/locations`, {
  method: "get",
  ...requestOptions,
});
const { data: type } = await useFetch(`/admins/type-jobs`, {
  method: "get",
  ...requestOptions,
});

function isRequired(value) {
  if (value && value.trim()) {
    return true;
  }
  return "This is required";
}

const formData = ref({
  title: undefined,
  hours: undefined,
  location_id: undefined,
  types: [], // Initialize with an empty object with type_id
  category: undefined,
  tags: [], // Initialize with an empty object with name
});
const name = ref([
  {
    id: 1,
    name: "Admin",
  },
  {
    id: 2,
    name: "CS",
  },
]);

const selectedImage = ref();
async function onSubmit(values, ctx) {
  try {
    loading.value = true;

    const formDataT = new FormData();

    formDataT.append("image", selectedImage.value);

    formDataT.append("title", formData.value.title);
    formDataT.append("hours", formData.value.hours);
    formDataT.append("location_id", formData.value.location_id);
    formDataT.append("category", formData.value.category);
    formData.value.tags.forEach((data, index) => {
      formDataT.append(`tags[${index}][name]`, data?.name);
    });
    formData.value.types.forEach((data, index) => {
      formDataT.append(`types[${index}][type_id]`, data?.type_id);
    });

    // Submit form data
    const response = await axiosRequest.post(`/admins/jobs`, formDataT);

    // Check if the request was successful
    if (response.status >= 200 && response.status < 300) {
      snackbar.add({
        type: "success",
        text: "Data added successfully.",
      });
      router.push("/admin/onze-vacatures");
    } else {
      throw new Error("Failed to add data. Unexpected status code.");
    }
  } catch (error) {
    // Handle errors
    if (error.response && error.response.data && error.response.data.message) {
      ctx.setErrors(transformErrors(error.response.data.message));
      snackbar.add({
        type: "error",
        text: error.response.data.message,
      });
    } else {
      snackbar.add({
        type: "error",
        text: error.message || "Something went wrong.",
      });
    }
  } finally {
    // Set loading to false regardless of success or failure
    loading.value = false;
  }
}

useHead({
  title: "Add Property",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
