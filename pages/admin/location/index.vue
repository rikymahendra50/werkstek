<template>
  <main class="flex-grow overflow-y-auto">
    <div
      class="mx-auto px-2 sm:px-6 lg:px-8 max-w-sm md:max-w-3xl lg:max-w-[720px] xl:max-w-7xl py-8 space-y-8"
    >
      <div class="flex justify-between items-center">
        <div>
          <div class="text-xl md:text-2xl font-bold">Location</div>
        </div>
        <CompAdminButtonAddIndex name="Location" link="location" />
      </div>
      <div>
        <div class="overflow-x-auto !py-2 border rounded-t-lg">
          <table class="table table-xs md:table-md w-full rounded-t-xl">
            <thead class="h-12">
              <tr>
                <th class="font-medium">Name</th>
                <th class="font-medium"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="odd:bg-gray-100 even:hover:bg-gray-100 transition-colors duration-300"
                v-for="(item, index) in locations?.data"
              >
                <td
                  class="text-gray-500 font-normal !py-2 text-[12px] md:text-sm"
                >
                  {{ item.name }}
                </td>
                <td class="flex items-center gap-2">
                  <NuxtLink
                    :to="`/admin/location/edit/${item.slug}`"
                    class="cursor-pointer btn btn-sm normal-case btn-ghost btn-square"
                  >
                    <icon name="i-heroicons-pencil-square" />
                  </NuxtLink>
                  <div
                    class="cursor-pointer btn btn-sm normal-case btn-ghost btn-square"
                    @click="showModal(index)"
                  >
                    <icon name="i-heroicons-trash" />
                  </div>
                  <dialog :id="'my_modal_' + index" class="modal">
                    <div class="modal-box">
                      <h3 class="font-bold text-lg text-red-500">Warning !</h3>
                      <p class="py-4 text-sm">
                        Are you sure want to delete this item called
                        {{ item.name }}?
                      </p>
                      <div class="modal-action">
                        <form method="dialog">
                          <button
                            @click="deleteLocation(item.slug)"
                            class="btn btn-outline btn-error mr-3 text-[12px]"
                          >
                            Delete
                          </button>
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
    </div>
  </main>
  <Pagination
    v-model="page"
    :total="locations?.total"
    :per-page="locations?.per_page"
    class="flex justify-center"
  />
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
import { useTimeoutFn } from "@vueuse/core";
const snackbar = useSnackbar();

const router = useRouter();
const route = useRoute();

const page = ref(1);
// const search = ref("");

const {
  data: locations,
  error,
  refresh,
} = await useAsyncData("locations", () =>
  $fetch(`/admins/locations?page=${page.value}`, {
    method: "get",
    ...requestOptions,
  })
);

// &filter[search]=${search.value}

const { start, stop } = useTimeoutFn(() => {
  replaceWindow();
}, 1000);

watch(
  () => page.value,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      start();
    }
  }
);

// watch(
//   () => search.value,
//   (newValue, oldValue) => {
//     if (newValue !== oldValue) {
//       page.value = 1;
//       start();
//     }
//   }
// );

function replaceWindow() {
  router.replace(`/admin/location?page=${page.value}`);
  refresh();
}

// &search=${search.value}

onMounted(() => {
  stop();
  if (route.query.page) {
    page.value = route.query.page ?? 1;
  }

  // if (route.query.search) {
  //   search.value = route.query?.search ?? "";
  // }
});

const showModal = (index) => {
  const modalId = `my_modal_${index}`;
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.showModal();
  }
};

const deleteLocation = async (slug) => {
  loading.value = true;
  await useFetch(`/admins/locations/${slug}`, {
    method: "DELETE",
    ...requestOptions,
  });

  if (error.value) {
    snackbar.add({
      type: "error",
      text: error.value?.data?.message ?? "Something went wrong",
    });
  } else {
    snackbar.add({
      type: "success",
      text: "Delete Location Success",
    });
    window.location.reload();
  }
  loading.value = false;
};

useHead({
  title: "Location",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
<style scoped>
.overflow-auto {
  overflow-y: auto;
}

.overflow-auto::-webkit-scrollbar {
  display: none;
}
</style>
