<template>
  <main class="flex-grow overflow-y-auto">
    <div
      class="mx-auto px-2 sm:px-6 lg:px-8 max-w-sm md:max-w-3xl lg:max-w-[720px] xl:max-w-7xl py-8 space-y-8"
    >
      <div class="flex justify-between items-center">
        <div>
          <div class="text-xl md:text-3xl font-bold">Community</div>
        </div>
        <CompAdminButtonAddIndex name="Community" link="community" />
      </div>
      <div class="space-y-4">
        <!-- <div class="max-w-sm">
          <Search v-model="search" placeholder="search" />
        </div> -->
        <div class="overflow-x-auto !py-2 border rounded-t-lg">
          <table class="table table-xs md:table-md w-full rounded-t-xl">
            <thead class="h-12">
              <tr>
                <th class="font-medium">Image</th>
                <th class="font-medium">Name</th>
                <th class="font-medium">Meta</th>
                <th class="font-medium"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="odd:bg-gray-100 even:hover:bg-gray-100 transition-colors duration-300"
                v-for="(item, index) in community?.data"
              >
                <td class="max-w-[100px]">
                  <div class="max-w-[100px] max-h-[100px] overflow-hidden">
                    <img
                      :src="item.image"
                      :alt="`item` + index"
                      class="object-cover"
                    />
                  </div>
                </td>
                <td class="text-gray-500 text-sm font-normal !py-2">
                  {{ item.title }}
                </td>
                <td class="font-medium max-w-[200px]">{{ item.meta }}</td>
                <td class="font-medium"></td>
                <td>
                  <div class="flex justify-center items-center gap-4 my-1">
                    <NuxtLink
                      :to="`/werkstek-community/${item.slug}`"
                      class="btn btn-sm normal-case btn-ghost btn-square"
                      target="_blank"
                    >
                      <icon name="i-heroicons-eye" class="cursor-pointer" />
                    </NuxtLink>
                    <NuxtLink
                      :to="`/admin/community/edit/${item.slug}`"
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
                        <h3 class="font-bold text-xl text-red-500">
                          Warning !
                        </h3>
                        <p class="py-4 text-lg">
                          Are you sure want to delete this called
                          {{ item.slug }}?
                        </p>
                        <div class="modal-action">
                          <form method="dialog">
                            <button
                              @click="deleteBlog(item.slug)"
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
    :total="community?.meta?.total"
    :per-page="community?.meta?.per_page"
    class="flex justify-center"
  />
</template>

<script setup>
const { loading } = useRequestHelper();
const { requestOptions } = useRequestOptions();
import { useTimeoutFn } from "@vueuse/core";

const router = useRouter();
const route = useRoute();

const page = ref(1);
const search = ref("");

const {
  data: community,
  error,
  refresh,
} = await useAsyncData("community", () =>
  $fetch(
    `/admins/community-blogs?page=${page.value}&filter[search]=${search.value}`,
    {
      method: "get",
      ...requestOptions,
    }
  )
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
  router.replace(`/admin/blog?page=${page.value}&search=${search.value}`);
  refresh();
}

const deleteBlog = async (slug) => {
  loading.value = true;
  await useFetch(`/admins/articles/${slug}`, {
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
      text: "Delete Community Success",
    });
    start();
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
  title: "Community",
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
