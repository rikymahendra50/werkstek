<template>
  <!-- {{ props.eachData?.data.location }} -->
  <VeeForm @submit="onSubmit" v-slot="{ errors }">
    <!-- {{ props.eachData }} -->
    <div class="grid p-3 gap-4">
      <label for="Name">Name</label>
      <VeeField
        id="Name"
        type="text"
        name="Name"
        placeholder="Input Name"
        class="input input-bordered w-full"
        v-model="formData.name"
        autocomplete="off"
      />

      <label for="Email">Email</label>
      <VeeField
        id="Email"
        type="text"
        name="Email"
        placeholder="Input Email"
        class="input input-bordered w-full"
        v-model="formData.email"
        autocomplete="off"
      />

      <label for="PhoneNumber">Phone Number</label>
      <VeeField
        id="PhoneNumber"
        type="number"
        name="PhoneNumber"
        placeholder="Input Phone Number"
        class="input input-bordered w-full"
        v-model="formData.phone_number"
        autocomplete="off"
      />

      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="latitude">Latitude</label>
          <VeeField
            id="latitude"
            type="number"
            name="latitude"
            placeholder="Input Latitude"
            class="input input-bordered w-full"
            v-model="formData.latitude"
            autocomplete="off"
          />
        </div>
        <div>
          <label for="longitude">Longitude</label>
          <VeeField
            id="longitude"
            type="number"
            name="longitude"
            placeholder="Input longitude"
            class="input input-bordered w-full"
            v-model="formData.longitude"
            autocomplete="off"
          />
        </div>
      </div>

      <label for="price">Price</label>
      <VeeField
        id="price"
        type="number"
        name="price"
        placeholder="Input Price"
        class="input input-bordered w-full"
        v-model="formData.price"
        autocomplete="off"
      />

      <label for="rentType">Rent Type</label>
      <VeeField
        id="rentType"
        name="rentType"
        as="select"
        v-model="formData.rent_type"
        class="select select-bordered w-full"
        placeholder="rentType"
        autocomplete="off"
      >
        <option disabled selected>Rent Type</option>
        <option value="monthly">Montly</option>
        <option value="yearly">Yearly</option>
      </VeeField>

      <label for="areaSize">Area Size</label>
      <VeeField
        id="areaSize"
        type="number"
        name="areaSize"
        placeholder="Input Area Size"
        class="input input-bordered w-full"
        v-model="formData.area_size"
        autocomplete="off"
      />

      <label for="rating">Rating</label>
      <VeeField
        id="rating"
        type="number"
        name="rating"
        placeholder="Input Rating"
        class="input input-bordered w-full"
        v-model="formData.rating"
        autocomplete="off"
      />

      <label for="location">Location</label>
      <VeeField
        id="location"
        name="location"
        as="select"
        v-model="formData.location_id"
        class="select select-bordered w-full"
        placeholder="location"
        autocomplete="off"
      >
        <option disabled selected>Location</option>
        <option :value="item.id" v-for="item in props.location">
          {{ item.name }}
        </option>
      </VeeField>

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
              v-model="formData.is_saleable"
              placeholder="saleable"
              autocomplete="off"
            />
            Yes
          </label>
          <label class="radio-label flex gap-2">
            <VeeField
              id="saleable_no"
              name="saleable"
              type="radio"
              value="0"
              v-model="formData.is_saleable"
              placeholder="saleable"
              autocomplete="off"
            />
            No
          </label>
        </div>
      </div>

      <div class="flex flex-col my-2 w-full">
        <div class="grid gap-2">
          <div class="flex items-center">
            <span>Facilities</span>
          </div>
          <label
            v-for="item in props.facilities"
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
              :value="item.id"
              v-model="formData.product_privileges"
              placeholder="privileges"
              autocomplete="privileges"
            />
            {{ item.name }}
          </label>
        </div>
      </div>

      <div class="flex flex-col mt-5">
        <label for="body">Description</label>
        <FormTextEditor
          v-model="formData.description"
          :is-error="!!errors.body"
        />
      </div>
    </div>
    <div class="flex justify-end mt-5">
      <button type="submit" :disabled="loading" class="btn btn-success">
        Edit Property
      </button>
    </div>
  </VeeForm>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const router = useRouter();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();
const route = useRoute();
const slug = computed(() => route.params.slug);

const props = defineProps({
  eachData: {
    type: Object,
  },
  type: {
    type: Object,
  },
  rentType: {
    type: Object,
  },
  location: {
    type: Object,
  },
  facilities: {
    type: Object,
  },
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

const fileInput = ref(null);

const selectImage = () => {
  fileInput.value.click();
};

const privilegesArray = props.eachData?.data.privileges.map(
  (item) => item.privilege
);

const facilityArray = props.eachData?.data.facility.map(
  (item) => item.facility.id
);

const formData = {
  name: props.eachData?.data.name,
  description: props.eachData?.data.description,
  email: props.eachData?.data.email,
  phone_number: props.eachData?.data.phone_number,
  latitude: props.eachData?.data.latitude,
  longitude: props.eachData?.data.longitude,
  price: props.eachData?.data.price,
  rent_type: props.eachData?.data.rent_type,
  area_size: props.eachData?.data.area_size,
  location_id: props.eachData?.data.location.id,
  is_saleable: props.eachData?.data.is_saleable,
  product_facilities: facilityArray.map((facility) => ({
    facility_id: facility,
  })),
  product_privileges: privilegesArray.map((privilege) => ({
    privilege: privilege,
  })),
  rating: props.eachData?.data.rating,
};

const imagePreview = ref();
const selectedImage = ref();

function saveToPreviewImage(event) {
  imagePreview.value = URL.createObjectURL(event.target.files[0]);
  selectedImage.value = event.target.files[0];
}

const onUpload = (image) => {
  selectedImage.value = image;
};

async function onSubmit(values, ctx) {
  loading.value = true;

  const { error, data } = await useFetch(
    `/admins/products/${slug.value}?_method=PUT`,
    {
      method: "POST",
      body: JSON.stringify(formData),
      ...requestOptions,
    }
  );

  if (error.value) {
    ctx.setErrors(transformErrors(error?.value?.data));
    snackbar.add({
      type: "error",
      text: error.value?.data?.message ?? "Something went wrong",
    });
  } else if (data.value) {
    snackbar.add({
      type: "success",
      text: "Edit Blog Success",
    });
    router.push("/admin/onze-vacatures");
  }

  loading.value = false;
}
</script>
