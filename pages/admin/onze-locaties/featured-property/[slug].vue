<template>
  <main class="flex-grow overflow-y-auto">
    <div
      class="mx-auto px-2 sm:px-6 lg:px-8 max-w-sm md:max-w-3xl lg:max-w-[720px] xl:max-w-7xl py-8 space-y-8"
    >
      <div class="flex justify-between items-center">
        <div>
          <div class="text-xl md:text-2xl font-bold">Featured Product</div>
        </div>
        <CompAdminButtonAddIndex
          name="Featured Product"
          link="onze-locaties/featured-property"
        />
      </div>
      <div>
        <div class="overflow-x-auto !py-2 border rounded-t-lg">
          <table class="table table-xs md:table-md w-full rounded-t-xl">
            <thead class="h-12">
              <tr>
                <th class="font-medium">Image</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="odd:bg-gray-100 even:hover:bg-gray-100 transition-colors duration-300"
                v-for="(item, index) in dataSlug?.data"
              >
                <td class="text-gray-500 text-sm font-normal !py-2 text-[12px]">
                  <img
                    :src="item?.image"
                    :alt="item?.image"
                    class="max-w-[100px] h-[100px]"
                  />
                </td>
                <!-- <td class="text-gray-500 text-sm font-normal !py-2 text-[12px]">
                  {{ item.name }}
                </td> -->
                <!-- <td class="flex justify-center gap-4 my-1">
                  <NuxtLink
                    :to="`/admin/facility/edit/${item.slug}`"
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
                        Are you sure want to delete this facility called
                        {{ item.name }}?
                      </p>
                      <div class="modal-action">
                        <form method="dialog">
                          <button
                            @click="deleteFacility(item.slug)"
                            class="btn btn-outline btn-error mr-3 text-[12px]"
                          >
                            Delete
                          </button>
                          <button class="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td> -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
  <!-- <Pagination
    v-model="page"
    :total="facility?.meta?.total"
    :per-page="facility?.meta?.per_page"
    class="flex justify-center"
  /> -->
</template>

<script setup>
import { useTimeoutFn } from "@vueuse/core";
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();
const router = useRouter();
const route = useRoute();

const slug = computed(() => route.params.slug);

const page = ref(1);

const { data: dataSlug } = await useFetch(
  `/admins/products/${slug.value}/images`,
  {
    method: "get",
    ...requestOptions,
  }
);

console.log(dataSlug.value);

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

function replaceWindow() {
  router.replace(`/admin/onze-locaties/featured-property/${slug.value}/images`);
  // ?page=${page.value}
  refresh();
}

onMounted(() => {
  stop();
  if (route.query.page) {
    page.value = route.query.page ?? 1;
  }
});

useHead({
  title: "Featured Property",
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
