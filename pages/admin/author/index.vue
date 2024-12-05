<template>
  <main class="flex-grow overflow-y-auto">
    <div
      class="mx-auto px-2 sm:px-6 lg:px-8 max-w-sm md:max-w-3xl lg:max-w-[720px] xl:max-w-7xl py-8 space-y-8"
    >
      <div class="flex justify-between items-center">
        <div>
          <div class="text-xl md:text-2xl font-bold">Author</div>
        </div>
        <CompAdminButtonAddIndex name="Author" link="author" />
      </div>
      <div class="space-y-4">
        <div class="overflow-x-auto !py-2 border rounded-t-lg">
          <table class="table table-xs md:table-md w-full rounded-t-xl">
            <thead class="h-12">
              <tr>
                <th class="font-medium">Image</th>
                <th class="font-medium">Name</th>
                <th class="font-medium"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="odd:bg-gray-100 even:hover:bg-gray-100 transition-colors duration-300"
                v-for="(item, index) in author?.data"
              >
                <td class="flex items-center">
                  <div class="aspect-square">
                    <img
                      :src="item.image"
                      :alt="`item` + index"
                      class="object-cover rounded-md w-20 h-20"
                    />
                  </div>
                </td>
                <td class="text-gray-500 text-[12px] font-normal !py-2">
                  {{ item.name }}
                </td>
                <td>
                  <div class="flex justify-center items-center gap-4 my-1">
                    <NuxtLink
                      :to="`/admin/author/edit/${item.id}`"
                      class="btn mr-2 btn-sm normal-case btn-ghost btn-square"
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
                          Are you sure want to delete this author called
                          {{ item.name }}?
                        </p>
                        <div class="modal-action">
                          <form method="dialog">
                            <button
                              @click="deleteBlog(item.id)"
                              class="btn btn-outline btn-error mr-3"
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
    :total="author?.meta?.total"
    :per-page="author?.meta?.per_page"
    class="flex justify-center"
  />
</template>

<script setup>
const { loading } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();
import { useTimeoutFn } from "@vueuse/core";

const router = useRouter();
const route = useRoute();

const page = ref(1);
const search = ref("");

const {
  data: author,
  error,
  refresh,
} = await useAsyncData("author", () =>
  $fetch(`/admins/authors`, {
    method: "get",
    headers: {
      Accept: "application/json",
    },
    ...requestOptions,
  })
);

const { start, stop } = useTimeoutFn(() => {
  replaceWindow();
}, 1000);

const showModal = (index) => {
  const modalId = `my_modal_${index}`;
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.showModal();
  }
};

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
  router.replace(`/admin/author?page=${page.value}&search=${search.value}`);
  refresh();
}

const deleteBlog = async (slug) => {
  loading.value = true;
  await useFetch(`/admins/authors/${slug}`, {
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
      text: "Delete Author Success",
    });
    refresh();
  }
  loading.value = false;
};

onMounted(() => {
  stop();
  if (route.query.page) {
    page.value = route.query.page ?? 1;
  }

  if (route.query.search) {
    search.value = route.query?.search ?? "";
  }
});

useHead({
  title: "Author",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>

<style scoped>
.overflow-auto {
  max-height: 400px;
  overflow-y: auto;
}

.overflow-auto::-webkit-scrollbar {
  display: none;
}
</style>
