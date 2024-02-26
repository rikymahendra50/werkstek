<template>
  <div v-if="pending">Loading...</div>
  <div v-if="data && data?.data" class="overflow-y-auto max-h-[70%]">
    <h3 class="font-bold my-2">Detail Data {{ data.data.name }}</h3>
    <div class="max-h-[500px]">
      <table class="table">
        <tbody>
          <tr>
            <td>Name</td>
            <td>{{ data?.data?.name }}</td>
          </tr>
          <tr>
            <td>Deskription</td>
            <td>
              <div v-html="data?.data?.description"></div>
            </td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>
              <div v-html="data?.data?.phone_number"></div>
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <div v-html="data?.data?.email"></div>
            </td>
          </tr>
          <tr>
            <td>Latitude</td>
            <td>{{ data?.data?.latitude }}</td>
          </tr>
          <tr>
            <td>Longitude</td>
            <td>{{ data?.data?.longitude }}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>€ {{ data?.data?.price }}</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>{{ data?.data?.type_id }}</td>
          </tr>
          <tr>
            <td>Area Size</td>
            <td>{{ data?.data?.area_size }}</td>
          </tr>
          <tr>
            <td>Privilages</td>
            <td>{{ data?.data?.privilages?.privilages?.name }}</td>
          </tr>
          <tr>
            <td>Location</td>
            <!-- <td>{{ data?.data?.location }}</td> -->
            <td class="flex gap-4 items-center">
              {{ data?.data?.location.name }}
              <label for="modal-1" class="btn btn-sm btn-outline modal-button"
                >Images Location</label
              >
              <input type="checkbox" id="modal-1" class="modal-toggle" />
              <div class="modal">
                <div class="modal-box">
                  <h3 class="font-bold text-lg">Images</h3>
                  <img :src="data?.data?.location.image" alt="image-location" />
                  <div class="modal-action">
                    <label for="modal-1" class="btn">Close</label>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Sale Able</td>
            <td v-if="data.data.is_saleable === 1">Yes</td>
            <td v-else>No</td>
          </tr>
          <tr>
            <td>Facility</td>
            <td>{{ data?.data?.facility[0]?.facility?.name }}</td>
          </tr>
          <tr>
            <td>Images</td>
            <td>
              <button
                class="btn btn-sm btn-outline btn-info"
                onclick="my_modal_2.showModal()"
              >
                Detail Images
              </button>
              <dialog id="my_modal_2" class="modal">
                <div class="modal-box">
                  <!-- <h3 class="font-bold text-lg">Hello!</h3> -->
                  <table class="table">
                    <thead>
                      <th>Nomor</th>
                      <th>Images</th>
                    </thead>
                    <tbody v-for="(item, index) in data.data.images">
                      <td class="col-1">{{ index + 1 }}</td>
                      <td>
                        <img
                          :src="item.image"
                          alt="images"
                          class="max-w-[200px]"
                        />
                      </td>
                    </tbody>
                  </table>
                  <div class="modal-action">
                    <form method="dialog">
                      <button class="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <NuxtLink to="/admin/onze-vacaturies">
    <button class="btn btn-sm btn-outline btn-warning">Back</button>
  </NuxtLink>
</template>

<script setup>
const route = useRoute();
const slug = computed(() => {
  return route.params.slug;
});

const { requestOptions } = useRequestOptions();
const { data, error, pending } = await useFetch(`/products/${slug.value}`, {
  method: "get",
  ...requestOptions,
});

if (error.value) {
  console.error("Error fetching data:", error);
}
useHead({
  title: data.value?.data?.name,
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
