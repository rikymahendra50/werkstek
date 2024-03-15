<template>
  <CompAdminBackButton link="onze-vacaturies" linkTitle="Edit Property" />
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
        <span for="body">Description</span>
        <FormTextEditor
          v-model="formData.description"
          :is-error="!!errors.body"
        />
        <VeeErrorMessage name="body" />
      </div>

      <div class="flex flex-col my-2 w-full">
        <div class="flex items-center">
          <label for="email">Email</label>
        </div>
        <!-- <FormTextField
          id="email"
          name="email"
          v-model="formData.email"
          placeholder="ex:werstek@gmail.com"
          class="input-bordered"
          autocomplete="on"
        /> -->
        <VeeField
          id="email"
          name="email"
          v-model="formData.email"
          type="text"
          class="input input-bordered w-full input-md"
          placeholder="Email"
          autocomplete="off"
        />
        <VeeErrorMessage name="email" class="text-red-500" />
      </div>

      <div class="flex flex-col my-2 w-full">
        <div class="flex items-center">
          <label for="phoneNumber">Phone Number</label>
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
        <VeeErrorMessage name="phone" class="text-red-500" />
      </div>

      <div class="flex flex-col my-2 w-full">
        <div class="flex items-center">
          <label for="latitude">Latitude</label>
        </div>
        <!-- <FormTextField
          id="latitude"
          name="latitude"
          type="number"
          v-model="formData.latitude"
          placeholder="Latitude"
          class="input-bordered"
          autocomplete="on"
        /> -->
        <VeeField
          id="latitude"
          name="latitude"
          v-model="formData.latitude"
          type="text"
          class="input input-bordered w-full input-md"
          placeholder="Latitude"
          autocomplete="off"
        />
        <VeeErrorMessage name="latitude" class="text-red-500" />
      </div>

      <div class="flex flex-col my-2 w-full">
        <div class="flex items-center">
          <label for="longitude">Longitude</label>
        </div>
        <!-- <VeeField
          id="longitude"
          name="longitude"
          type="text"
          v-model="formData.longitude"
          class="input input-bordered w-full input-md"
          placeholder="Longitude"
          autocomplete="off"
        /> -->
        <VeeField
          id="longitude"
          name="longitude"
          v-model="formData.longitude"
          type="text"
          class="input input-bordered w-full input-md"
          placeholder="Longitude"
          autocomplete="off"
        />
        <VeeErrorMessage name="longitude" class="text-red-500" />
      </div>

      <!-- <CompAdminMapForm
        @longitude-updated="updateLongitude"
        @latitude-updated="updateLatitude"
      /> -->

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
          <label for="areaSize">Area Size</label>
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
          v-model="formData.type_id"
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
          <label for="levelType">Level Type</label>
        </div>
        <VeeField
          id="levelType"
          name="levelType"
          as="select"
          v-model="formData.level_type_id"
          class="select select-bordered w-full"
          placeholder="type"
          autocomplete="type"
        >
          <option disabled selected>Type</option>
          <option :value="item.id" v-for="item in levelType?.data">
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
            v-for="item in dataPrivilages"
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

      <div class="flex flex-col my-2 w-full">
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
              :id="`saleAble + ${item.id}`"
              :name="`saleAble + ${item.name}`"
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

      <div class="w-full flex justify-end">
        <CompAdminButtonAddForm
          buttonName="Edit Property"
          :isLoading="loading"
        />
      </div>
    </VeeForm>
  </div>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const router = useRouter();
const snackbar = useSnackbar();
const route = useRoute();
const slug = computed(() => route.params.slug);
const { formInput } = useSchema();

const { data: dataSlug } = await useFetch(`/admins/products/${slug.value}`, {
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

const { data: facilities, error } = await useFetch(`/admins/facilities`, {
  method: "get",
  ...requestOptions,
});

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

const AllDataSlug = ref(dataSlug?.value.data);

const privilegesArray = AllDataSlug?.value.privileges.map(
  (item) => item.privilege
);

const facilityArray = AllDataSlug?.value.facility.map(
  (item) => item.facility.id
);

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

const updateLongitude = (longitude) => {
  formData.value.longitude = longitude;
  console.log(formData.value.longitude);
};

const updateLatitude = (latitude) => {
  formData.value.latitude = latitude;
};

const formData = ref({
  name: AllDataSlug?.value?.name,
  description: AllDataSlug?.value?.description,
  email: AllDataSlug?.value?.email,
  phone_number: AllDataSlug?.value?.email,
  latitude: AllDataSlug?.value?.latitude,
  longitude: AllDataSlug?.value?.longitude,
  price: AllDataSlug?.value?.price,
  rent_type: AllDataSlug?.value?.rent_type,
  area_size: AllDataSlug?.value?.area_size,
  location_id: AllDataSlug?.value?.location?.id,
  type_id: AllDataSlug?.value?.type?.id,
  level_type_id: AllDataSlug?.value?.level_type?.id,
  is_saleable: AllDataSlug?.value?.is_saleable,
  product_facilities: facilityArray.map((facility) => ({
    facility_id: facility,
  })),
  product_privileges: privilegesArray.map((privilege) => ({
    privilege: privilege,
  })),
  rating: AllDataSlug.value.rating,
});

onMounted(() => {
  // parseInt(formData?.value?.rating);
  formData.value.rating = parseInt(AllDataSlug?.value?.rating);
});

async function onSubmit(values, ctx) {
  loading.value = true;

  const { data, error } = await useFetch(`/admins/products/${slug.value}`, {
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
      text: "Success Edit Property",
    });
    router.push("/admin/onze-vacaturies");
  }

  loading.value = false;
}

useHead({
  title: "Edit Property",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
