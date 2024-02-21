<template>
  <div class="overflow-auto">
    <h3 class="font-bold text-lg">Update Onze Locaties</h3>
    <div class="modal-action grid grid-cols-1 gap-3">
      <VeeForm
        @submit="onSubmit"
        class="text-[12px] md:text-[16px] flex-col flex items-center px-3 lg:px-10"
        v-slot="{ errors }"
      >
        <div class="flex flex-col my-2 w-full">
          <div class="flex items-center">
            <label for="name">Name</label>
          </div>
          <VeeField
            id="name"
            name="name"
            type="text"
            v-model="productsData.name"
            class="input input-bordered w-full input-md"
            placeholder="Name"
            autocomplete="name"
          />
          <VeeErrorMessage name="name" class="text-sm text-error" />
        </div>
        <div class="flex flex-col my-2 w-full">
          <div class="flex items-center">
            <label for="description">Description</label>
          </div>
          <VeeField
            id="description"
            name="description"
            as="textarea"
            type="text"
            v-model="productsData.description"
            class="w-full textarea textarea-bordered"
            placeholder="Description"
            autocomplete="description"
          />
          <VeeErrorMessage name="description" class="text-sm text-error" />
        </div>
        <div class="flex flex-col my-2 w-full">
          <div class="flex items-center">
            <label for="email">Email</label>
          </div>
          <VeeField
            id="email"
            name="email"
            type="text"
            v-model="productsData.email"
            class="input input-bordered w-full input-md"
            placeholder="Email"
            autocomplete="email"
          />
        </div>
        <div class="flex flex-col my-2 w-full">
          <div class="flex items-center">
            <label for="phoneNumber">Phone Number</label>
          </div>
          <VeeField
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            v-model="productsData.phone_number"
            class="input input-bordered w-full input-md"
            placeholder="Phone Number"
            autocomplete="Phone"
          />
        </div>
        <div class="flex flex-col my-2 w-full">
          <div class="flex items-center">
            <label for="latitude">Latitude</label>
          </div>
          <VeeField
            id="latitude"
            name="latitude"
            type="text"
            v-model="productsData.latitude"
            class="input input-bordered w-full input-md"
            placeholder="Latitude"
            autocomplete="latitude"
          />
        </div>
        <div class="flex flex-col my-2 w-full">
          <div class="flex items-center">
            <label for="longitude">Longitude</label>
          </div>
          <VeeField
            id="longitude"
            name="longitude"
            type="text"
            v-model="productsData.longitude"
            class="input input-bordered w-full input-md"
            placeholder="Longitude"
            autocomplete="longitude"
          />
        </div>

        <div class="flex flex-col my-2 w-full">
          <div class="flex items-center">
            <label for="price">Price</label>
          </div>
          <VeeField
            id="price"
            name="price"
            type="text"
            v-model="productsData.price"
            class="input input-bordered w-full input-md"
            placeholder="Price"
            autocomplete="price"
          />
        </div>

        <div class="flex flex-col my-2 w-full">
          <div class="flex items-center">
            <label for="renttype">Rent Type</label>
          </div>
          <VeeField
            id="renttype"
            name="renttype"
            as="select"
            v-model="productsData.rent_type"
            class="select select-bordered w-full"
            placeholder="renttype"
            autocomplete="renttype"
          >
            <option disabled selected>Rent Type</option>
            <option value="montly">Montly</option>
            <option value="yearly">Yearly</option>
          </VeeField>
        </div>

        <div class="flex flex-col my-2 w-full">
          <div class="flex items-center">
            <label for="areaSize">Area Size</label>
          </div>
          <VeeField
            id="areaSize"
            name="areaSize"
            type="text"
            v-model="productsData.area_size"
            class="input input-bordered w-full input-md"
            placeholder="Area Size"
            autocomplete="areaSize"
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
            v-model="productsData.location_id"
            class="select select-bordered w-full"
            placeholder="location"
            autocomplete="location"
          >
            <option disabled selected>Rent Type</option>
            <option :value="item.id" v-for="item in location.data">
              {{ item.name }}
            </option>
          </VeeField>
        </div>

        <div class="flex flex-col my-2 w-full">
          <div class="flex items-center">
            <label for="type">Type</label>
          </div>
          <VeeField
            id="type"
            name="type"
            as="select"
            v-model="productsData.type_id"
            class="select select-bordered w-full"
            placeholder="type"
            autocomplete="type"
          >
            <option disabled selected>Type</option>
            <option :value="item.id" v-for="item in type.data">
              {{ item.name }}
            </option>
          </VeeField>
        </div>

        <div class="flex flex-col my-2 w-full">
          <div class="grid gap-2">
            <div class="flex items-center">
              <span>Facilities</span>
            </div>
            <label
              v-for="item in facilities.data"
              :key="item.id"
              class="checkbox-label flex gap-2"
            >
              <VeeField
                :id="`facilities + ${item.id}`"
                :name="`facilities + ${item.name}`"
                type="checkbox"
                :value="{ facility_id: item.id }"
                v-model="productsData.product_facilities"
                placeholder="facilities"
                autocomplete="facilities"
              />
              {{ item.name }}
            </label>
          </div>
        </div>

        <div class="flex flex-col my-2 w-full">
          <div class="grid gap-2">
            <div class="flex items-center">
              <span>Privileges (data not available)</span>
            </div>
            <!-- <label
              v-for="item in privileges.data"
              :key="item.id"
              class="checkbox-label flex gap-2"
            >
              <VeeField
                :id="`privileges + ${item.id}`"
                :name="`privileges + ${item.name}`"
                type="checkbox"
                :value="item.id"
                v-model="productsData.product_privileges"
                placeholder="privileges"
                autocomplete="privileges"
              />
              {{ item.name }}
            </label> -->
          </div>
        </div>

        <div class="flex flex-col my-2 w-full">
          <div class="grid gap-2">
            <div class="flex items-center">
              <span>Saleable</span>
            </div>
            <label class="radio-label flex gap-2">
              <VeeField
                id="saleable_yes"
                name="saleable"
                type="radio"
                value="1"
                v-model="productsData.is_saleable"
                placeholder="saleable"
                autocomplete="saleable"
              />
              Yes
            </label>
            <label class="radio-label flex gap-2">
              <VeeField
                id="saleable_no"
                name="saleable"
                type="radio"
                value="0"
                v-model="productsData.is_saleable"
                placeholder="saleable"
                autocomplete="saleable"
              />
              No
            </label>
          </div>
        </div>

        <div class="flex flex-col my-2 w-full">
          <div class="grid gap-2">
            <div class="flex items-center">
              <span>Category (data not available)</span>
            </div>
            <label
              class="radio-label flex gap-2"
              :for="`category + ${item.id}`"
              v-for="item in category.data"
            >
              <VeeField
                :id="`category + ${item.id}`"
                name="category"
                type="radio"
                :value="item.id"
                v-model="productsData.category_id"
                placeholder="category"
                autocomplete="category"
              />
              {{ item.name }}
            </label>
          </div>
        </div>

        <div class="flex justify-end">
          <button
            type="submit"
            :disabled="loading"
            class="mt-4 bg-primary disabled:bg-secondary hover:bg-secondary transition min-w-[120px] sm:min-w-[152px] min-h-[42px] sm:min-h-[52px] rounded-full flex items-center justify-center cursor-pointer"
          >
            <span
              class="text-[20px] xl:text-lg lg:text-lg text-center text-white"
            >
              Update
            </span>
          </button>
        </div>
      </VeeForm>
    </div>
  </div>
</template>

<style scoped>
.overflow-auto {
  max-height: 550px;
  overflow-y: auto;
  overflow-x: auto;
}

.overflow-auto::-webkit-scrollbar {
  display: none;
}

.description-column {
  overflow-y: auto;
}

.description-column::-webkit-scrollbar {
  display: none;
}
</style>

<script setup>
const { contactSchema } = useSchema();
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();

const { data: facilities, error } = await useFetch(`/admins/facilities`, {
  method: "get",
  ...requestOptions,
});
const { data: location } = await useFetch(`/admins/locations`, {
  method: "get",
  ...requestOptions,
});
const { data: type } = await useFetch(`/admins/types`, {
  method: "get",
  ...requestOptions,
});
const { data: category } = await useFetch(`/admins/categories`, {
  method: "get",
  ...requestOptions,
});

const productsData = ref({
  name: undefined,
  description: undefined,
  email: undefined,
  phone_number: undefined,
  latitude: undefined,
  longitude: undefined,
  price: undefined,
  rent_type: undefined,
  area_size: undefined,
  location_id: undefined,
  type_id: undefined,
  category_id: undefined,
  is_saleable: undefined,
  product_facilities: [{ facility_id: 1 }],
  product_privileges: [],
});

async function onSubmit(values, ctx) {
  console.log(productsData.value.product_facilities);
  loading.value = true;

  const { data, error } = await useFetch("/admins/products", {
    method: "POST",
    body: JSON.stringify(productsData.value),
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
      text: "Success Adding Data",
    });

    ctx.resetForm();
  }

  loading.value = false;
}

useHead({
  title: "Add Vacaturies",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
