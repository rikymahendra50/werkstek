<template>
  <CompAdminBackButton link="onze-locaties" linkTitle="Add Property" />
  <div class="overflow-y-auto grid md:grid-cols-2">
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
          v-model="formData.name"
          placeholder="Name"
          class="input-bordered"
          autocomplete="on"
        />
      </div>

      <div class="flex flex-col my-5 w-full">
        <span>Description</span>
        <div class="hidden">
          <VeeField name="body" v-model="formData.description" />
        </div>
        <FormTextEditor
          v-model="formData.description"
          :is-error="!!errors.body"
        />
        <VeeErrorMessage name="body" class="text-red-500" />
      </div>

      <div class="flex flex-col my-2 w-full">
        <div class="flex items-center">
          <label for="email">Email</label>
        </div>
        <FormTextField
          id="email"
          name="email"
          v-model="formData.email"
          placeholder="ex:werstek@gmail.com"
          class="input-bordered"
          autocomplete="on"
        />
      </div>

      <div class="flex flex-col my-2 w-full">
        <div class="flex items-center">
          <label for="postcode">Postcode</label>
        </div>
        <FormTextField
          id="postcode"
          name="postcode"
          v-model="formData.postcode"
          placeholder="ex:43121"
          class="input-bordered"
          autocomplete="on"
        />
      </div>

      <div class="flex flex-col my-2 w-full">
        <div class="flex items-center">
          <label for="address">Address</label>
        </div>
        <FormTextField
          id="address"
          name="address"
          v-model="formData.address"
          placeholder="Address"
          class="input-bordered"
          autocomplete="on"
        />
      </div>

      <div class="flex flex-col my-2 w-full">
        <div class="flex items-center">
          <label for="country">Country</label>
        </div>
        <FormTextField
          id="country"
          name="country"
          v-model="formData.country"
          placeholder="ex:Nederland"
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
          type="text"
          v-model="formData.phone_number"
          placeholder="ex:6221210291"
          class="input-bordered"
          autocomplete="on"
        />
      </div>

      <div class="w-full p-3 rounded-md">
        <div>
          <p class="mb-3">
            Please find and click the desired location to get the coordinate
            value.
          </p>
          <MapsTest
            v-model:latitude="formData.latitude"
            v-model:longitude="formData.longitude"
          />
        </div>
        <div class="flex flex-col w-full">
          <div class="flex items-center">
            <label for="latitude">Latitude</label>
          </div>
          <VeeField
            id="latitude"
            name="latitude"
            type="text"
            v-model="formData.latitude"
            placeholder="ex:51.9934345296239"
            class="input-bordered input-disabled input"
            autocomplete="on"
            disabled
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
            v-model="formData.longitude"
            placeholder="ex:5.5162370519396349"
            class="input-bordered input-disabled input"
            autocomplete="on"
            disabled
          />
        </div>
        <VeeErrorMessage name="latitude" class="text-red-500" />
      </div>

      <div class="flex flex-col my-2 w-full">
        <div class="flex items-center">
          <label for="price">Price</label>
        </div>
        <FormTextField
          id="price"
          name="price"
          type="number"
          v-model="formData.price"
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
          v-model="formData.rent_type"
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
          v-model="formData.area_size"
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
          v-model="formData.rating"
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
          v-model="formData.location_id"
          class="select select-bordered w-full"
          placeholder="location"
        >
          <option disabled selected>Location</option>
          <option :value="item.id" v-for="item in location?.data">
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
          v-model="formData.type_id"
          class="select select-bordered w-full"
          placeholder="type"
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
          v-model="formData.level_type_id"
          class="select select-bordered w-full"
          placeholder="Level Type"
          autocomplete="off"
        >
          <option disabled selected>Level Type</option>
          <option :value="item.id" v-for="item in levelType?.data">
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
            v-for="item in facilities?.data"
            :key="item.id"
            class="checkbox-label flex gap-2"
          >
            <VeeField
              :id="`facilities + ${item.id}`"
              :name="`facilities + ${item.name}`"
              type="checkbox"
              :value="{ facility_id: item.id }"
              v-model="formData.product_facilities"
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
            v-for="item in dataPrivilages?.data"
            :key="item.id"
            class="checkbox-label flex gap-2"
          >
            <VeeField
              :id="`privileges + ${item.id}`"
              :name="`privileges + ${item.name}`"
              type="checkbox"
              :value="{ privilege: item.name }"
              v-model="formData.product_privileges"
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
            <span>Is Saleable</span>
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
              v-model="formData.is_saleable"
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

// const dataPrivilages = ref([
//   {
//     id: 1,
//     name: "Kleinschalig",
//   },
//   {
//     id: 2,
//     name: "Informeel",
//   },
//   {
//     id: 3,
//     name: "Flexwerken mogelijk",
//   },
//   {
//     id: 4,
//     name: "Prachtige locatie aan de gracht",
//   },
//   {
//     id: 5,
//     name: "Internationale groep mensen",
//   },
// ]);

const { data: dataPrivilages } = await useFetch(`/admins/category-list`, {
  headers: {
    accept: "application/json",
  },
  method: "get",
  ...requestOptions,
});

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

const { data: facilities, error } = await useFetch(`/admins/facility-list`, {
  headers: {
    accept: "application/json",
  },
  method: "get",
  ...requestOptions,
});

const { data: location } = await useFetch(`/admins/location-list`, {
  headers: {
    accept: "application/json",
  },
  method: "get",
  ...requestOptions,
});

const { data: type } = await useFetch(`/admins/type-list`, {
  headers: {
    accept: "application/json",
  },
  method: "get",
  ...requestOptions,
});

const { data: levelType } = await useFetch(`/admins/level-type-list`, {
  headers: {
    accept: "application/json",
  },
  method: "get",
  ...requestOptions,
});

const formData = ref({
  name: undefined,
  description: undefined,
  email: undefined,
  country: undefined,
  postcode: undefined,
  address: undefined,
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
  product_facilities: [],
  product_privileges: [],
  rating: undefined,
});

watch(
  () => formData.value.description,
  (newValue) => {
    if (newValue === "<p></p>" || !newValue) {
      formData.value.description = undefined;
    }
  }
);

const updateLocation = (location) => {
  formData.value.longitude = String(location.longitude);
  formData.value.latitude = String(location.latitude);
};

async function onSubmit(values, ctx) {
  loading.value = true;

  const { data, error } = await useFetch("/admins/products", {
    method: "POST",
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
      text: "Success Adding Data",
    });
    router.push("/admin/onze-locaties");
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
