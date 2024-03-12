<template>
  <CompAdminBackButton link="onze-vacaturies" linkTitle="Add Property" />
  <div class="h-screen max-h-[450px] overflow-y-auto">
    <VeeForm
      @submit="onSubmit"
      class="text-[12px] md:text-[16px] flex-col flex items-center px-3 lg:px-8"
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
          <option value="monthly">Montly</option>
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
          autocomplete="off"
        />
      </div>

      <div class="flex flex-col my-2 w-full">
        <div class="flex items-center">
          <label for="rating">Rating</label>
        </div>
        <VeeField
          id="rating"
          name="rating"
          type="text"
          v-model="productsData.rating"
          class="input input-bordered w-full input-md"
          placeholder="Rating"
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
      </div>

      <div class="flex flex-col my-2 w-full">
        <div class="flex items-center">
          <label for="levelType">Level Type</label>
        </div>
        <VeeField
          id="levelType"
          name="levelType"
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
  is_saleable: undefined,
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
