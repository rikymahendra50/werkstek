<template>
  <CompAdminBackButton link="onze-vacaturies" linkTitle="Add Property" />
  <div class="overflow-y-auto grid grid-cols-2">
    <VeeForm
      @submit="onSubmit"
      class="text-[12px] md:text-[16px] flex-col flex items-center px-3 lg:px-8"
      :validation-schema="formInput"
      v-slot="{ errors }"
    >
      <div class="flex flex-col w-full">
        <div class="flex items-center">
          <label for="name">Name</label>
        </div>
        <FormTextField
          id="name"
          name="name"
          v-model="productsData.name"
          placeholder="Name"
          class="input-bordered"
          autocomplete="on"
        />
      </div>
      <div class="flex flex-col my-5 w-full">
        <label for="body">Description</label>
        <FormTextEditor
          v-model="productsData.description"
          :is-error="!!errors.body"
        />
        <VeeErrorMessage name="body" />
      </div>
      <div class="flex flex-col my-2 w-full">
        <div class="flex items-center">
          <label for="email">Email</label>
        </div>
        <FormTextField
          id="email"
          name="email"
          v-model="productsData.email"
          placeholder="ex:werstek@gmail.com"
          class="input-bordered"
          autocomplete="on"
        />
      </div>
      <div class="flex flex-col my-2 w-full">
        <div class="flex items-center">
          <label for="phone">Phone Number</label>
        </div>
        <FormTextField
          id="phone"
          name="phone"
          type="number"
          v-model="productsData.phone_number"
          placeholder="ex:6221210291"
          class="input-bordered"
          autocomplete="on"
        />
      </div>
      <div class="flex flex-col my-2 w-full">
        <div class="flex items-center">
          <label for="latitude">Latitude</label>
        </div>
        <FormTextField
          id="latitude"
          name="latitude"
          type="number"
          v-model="productsData.latitude"
          placeholder="ex:51.9934345296239"
          class="input-bordered"
          autocomplete="on"
        />
      </div>
      <div class="flex flex-col my-2 w-full">
        <div class="flex items-center">
          <label for="longitude">Longitude</label>
        </div>
        <FormTextField
          id="longitude"
          name="longitude"
          type="number"
          v-model="productsData.longitude"
          placeholder="ex:5.5162370519396349"
          class="input-bordered"
          autocomplete="on"
        />
      </div>

      <div class="flex flex-col my-2 w-full">
        <div class="flex items-center">
          <label for="price">Price</label>
        </div>
        <FormTextField
          id="price"
          name="price"
          type="number"
          v-model="productsData.price"
          placeholder="ex:80"
          class="input-bordered"
          autocomplete="on"
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
          <option value="monthly">Montly</option>
          <option value="yearly">Yearly</option>
        </VeeField>
        <VeeErrorMessage
          name="renttype"
          class="form-error-message text-red-600"
        />
      </div>

      <div class="flex flex-col my-2 w-full">
        <div class="flex items-center">
          <label for="areasize">Area Size</label>
        </div>
        <FormTextField
          id="areasize"
          name="areasize"
          type="number"
          v-model="productsData.area_size"
          placeholder="ex:80"
          class="input-bordered"
          autocomplete="on"
        />
      </div>

      <div class="flex flex-col my-2 w-full">
        <div class="flex items-center">
          <label for="rating">Rating</label>
        </div>
        <FormTextField
          id="rating"
          name="rating"
          type="number"
          v-model="productsData.rating"
          placeholder="ex:10"
          class="input-bordered"
          autocomplete="off"
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
          <label for="type">Type</label>
        </div>
        <VeeField
          id="type"
          name="type"
          as="select"
          v-model="productsData.type_id"
          class="select select-bordered w-full"
          placeholder="type"
          autocomplete="off"
        >
          <option disabled selected>Type</option>
          <option :value="item.id" v-for="item in type">
            {{ item.name }}
          </option>
        </VeeField>
        <VeeErrorMessage name="type" class="form-error-message text-red-600" />
      </div>

      <div class="flex flex-col my-2 w-full">
        <div class="flex items-center">
          <label for="leveltype">Level Type</label>
        </div>
        <VeeField
          id="leveltype"
          name="leveltype"
          as="select"
          v-model="productsData.level_type_id"
          class="select select-bordered w-full"
          placeholder="Level Type"
          autocomplete="off"
        >
          <option disabled selected>Level Type</option>
          <option :value="item.id" v-for="item in levelType.data">
            {{ item.name }}
          </option>
        </VeeField>
        <VeeErrorMessage
          name="leveltype"
          class="form-error-message text-red-600"
        />
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
            <span>Privileges</span>
          </div>
          <label
            v-for="item in dataPrivilages"
            :key="item.id"
            class="checkbox-label flex gap-2"
          >
            <VeeField
              :id="`privileges + ${item.id}`"
              :name="`privileges + ${item.name}`"
              type="checkbox"
              :value="{ privilege: item.name }"
              v-model="productsData.product_privileges"
              placeholder="privileges"
              autocomplete="privileges"
            />
            {{ item.name }}
          </label>
        </div>
      </div>

      <div class="flex-col my-2 w-full hidden">
        <div class="grid gap-2">
          <div class="flex items-center">
            <span>Is SaleAble</span>
          </div>
          <label
            v-for="item in dataIsSaleAble"
            :key="item.id"
            class="checkbox-label flex gap-2"
          >
            <VeeField
              :id="`isSaleAble + ${item.id}`"
              :name="`isSaleAble + ${item.name}`"
              type="radio"
              :value="item.value"
              v-model="productsData.is_saleable"
              placeholder="privileges"
              autocomplete="privileges"
            />
            {{ item.name }}
          </label>
        </div>
      </div>

      <div class="flex justify-end w-full">
        <CompAdminButtonAddForm
          buttonName="Add Property"
          :isLoading="loading"
        />
      </div>
    </VeeForm>
  </div>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();
const router = useRouter();
const route = useRoute();
const { formInput } = useSchema();

const dataPrivilages = ref([
  {
    id: 1,
    name: "Near the beach",
  },
  {
    id: 2,
    name: "Near the mall",
  },
  {
    id: 3,
    name: "Get a good view",
  },
]);

const dataIsSaleAble = ref([
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

const { data: facilities, error } = await useFetch(`/admins/facilities`, {
  method: "get",
  ...requestOptions,
});
const { data: location } = await useFetch(`/admins/locations`, {
  method: "get",
  ...requestOptions,
});
const { data: type } = await useFetch(`/admins/type-list`, {
  method: "get",
  ...requestOptions,
});

const { data: levelType } = await useFetch(`/admins/level-types`, {
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
  level_type_id: undefined,
  is_saleable: dataIsSaleAble.value[0].value,
  product_facilities: [{ facility_id: 1 }],
  product_privileges: [{ privilege: "Near the beach" }],
  rating: undefined,
});

async function onSubmit(values, ctx) {
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

    router.push("/admin/onze-vacaturies");
  }

  loading.value = false;
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
