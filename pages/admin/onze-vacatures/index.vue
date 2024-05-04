<template>
  <main class="flex-grow overflow-y-auto">
    <div
      class="mx-auto px-2 sm:px-4 lg:px-6 max-w-sm md:max-w-3xl lg:max-w-[720px] xl:max-w-5xl py-8 space-y-8"
    >
      <div class="flex justify-between items-center">
        <div>
          <div class="text-lg md:text-2xl font-bold">Vacatures</div>
        </div>
        <CompAdminButtonAddIndex name="Vacatures" link="onze-vacatures" />
      </div>
      <div>
        <div class="overflow-x-auto !py-2 border rounded-t-lg">
          <table class="table table-xs md:table-md w-full rounded-t-xl">
            <thead class="h-12">
              <tr>
                <th class="font-medium">Name</th>
                <th class="font-medium">Image</th>
                <th class="font-medium"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="odd:bg-gray-100 even:hover:bg-gray-100 transition-colors duration-300"
                v-for="(item, index) in job?.data"
                :key="item.id"
              >
                <td class="max-w-[80px]">
                  <div class="max-w-[80px] max-h-[80px] overflow-hidden">
                    <img
                      :src="item.image"
                      :alt="`item` + index"
                      class="object-cover rounded-md"
                    />
                  </div>
                </td>
                <td
                  class="text-gray-500 text-[12px] font-normal !py-2 md:text-sm"
                >
                  {{ item.title }}
                </td>
                <td>
                  <div class="flex items-center justify-center gap-4">
                    <NuxtLink
                      :to="`/onze-vacatures/${item.slug}`"
                      class="btn btn-sm normal-case btn-ghost btn-square"
                      target="_blank"
                    >
                      <icon name="i-heroicons-eye" class="cursor-pointer" />
                    </NuxtLink>
                    <NuxtLink
                      :to="`/admin/onze-vacatures/edit/${item.slug}`"
                      class="btn btn-sm normal-case btn-ghost btn-square"
                    >
                      <icon
                        name="i-heroicons-pencil-square"
                        class="cursor-pointer"
                      />
                    </NuxtLink>
                    <div
                      class="cursor-pointer btn btn-sm normal-case btn-ghost btn-square"
                      @click="showModal(index)"
                    >
                      <icon name="i-heroicons-trash" />
                    </div>
                    <dialog :id="'my_modal_' + index" class="modal">
                      <div class="modal-box">
                        <h3 class="font-bold text-lg text-red-500">
                          Warning !
                        </h3>
                        <p class="py-4 text-sm">
                          Are you sure want to delete this item called
                          {{ item.title }}?
                        </p>
                        <div class="modal-action">
                          <form method="dialog">
                            <button
                              @click="deleteProperty(item.slug)"
                              class="btn btn-outline btn-error mr-3 text-[12px]"
                            >
                              Delete
                            </button>
                            <button class="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
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
    :total="job?.meta?.total"
    :per-page="job?.meta?.per_page"
    class="flex justify-center"
  />
</template>

<style scoped>
.scrollBarAdmin::-webkit-scrollbar {
  display: none;
}

.overflow-auto {
  max-height: 400px;
  overflow-y: auto;
}

.overflow-auto::-webkit-scrollbar {
  display: none;
}
</style>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();

const router = useRouter();
const route = useRoute();

const page = ref(1);
const search = ref("");

const {
  data: job,
  error,
  refresh,
} = await useAsyncData("job", () =>
  $fetch(`/admins/jobs`, {
    method: "get",
    ...requestOptions,
  })
);

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

watch(
  () => search.value,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      page.value = 1;
      start();
    }
  }
);

function replaceWindow() {
  router.replace(`/admin/vacatures?page=${page.value}&search=${search.value}`);
  refresh();
}

onMounted(() => {
  stop();
  if (route.query.page) {
    page.value = route.query.page ?? 1;
  }

  if (route.query.search) {
    search.value = route.query?.search ?? "";
  }
});

const showModal = (index) => {
  const modalId = `my_modal_${index}`;
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.showModal();
  }
};

const deleteProperty = async (slug) => {
  loading.value = true;
  await useFetch(`/admins/jobs/${slug}`, {
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
      text: "Delete Vacatures Success",
    });
    refresh();
  }
  loading.value = false;
};

useHead({
  title: "Admin Vacatures",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
