<template>
  <main class="flex-grow overflow-y-auto">
    <div
      class="mx-auto px-2 sm:px-6 lg:px-8 max-w-sm md:max-w-3xl lg:max-w-[720px] xl:max-w-7xl py-8 space-y-8"
    >
      <div class="flex justify-between items-center">
        <div>
          <div class="text-xl md:text-3xl font-bold">Admin List</div>
        </div>
        <CompAdminButtonAddIndex name="Admin" link="admin-list" />
      </div>
      <div>
        <div class="overflow-x-auto !py-2 rounded-t-lg">
          <table class="table table-xs md:table-md w-full rounded-t-xl">
            <thead class="h-12">
              <tr>
                <th class="font-medium">First Name</th>
                <th class="font-medium">Last Name</th>
                <th class="font-medium">Email</th>
                <th class="font-medium"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="odd:bg-gray-100 even:hover:bg-gray-100 transition-colors duration-300"
                v-for="(item, index) in admins?.data"
                :key="item.id"
              >
                <td class="text-gray-500 text-sm font-normal !py-2">
                  {{ item.first_name }}
                </td>
                <td class="text-gray-500 text-sm font-normal !py-2">
                  {{ item.last_name }}
                </td>
                <td>{{ item.email }}</td>
                <td class="flex justify-center items-center gap-4 h-full">
                  <div
                    class="btn btn-sm normal-case btn-ghost btn-square"
                    @click="showModal(index)"
                  >
                    <icon name="i-heroicons-eye" class="cursor-pointer" />
                  </div>
                  <dialog :id="'my_modal_' + index" class="modal">
                    <div class="modal-box">
                      <h3 class="font-bold text-xl text-green-500">
                        Detail Admin
                      </h3>
                      <p class="py-4 text-lg grid">
                        <table>
                          <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Email</td>
                          </tr>
                          <tr>
                            <td>{{ item?.first_name }}</td>
                            <td>{{ item?.last_name }}</td>
                            <td>{{ item?.email }}</td>
                          </tr>
                        </table>
                      </p>
                      <div class="modal-action">
                        <form method="dialog">
                          <button class="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                  <NuxtLink
                    :to="`/admin/admin-list/${item.uuid}`"
                    class="btn btn-sm normal-case btn-ghost btn-square"
                  >
                    <icon
                      name="i-heroicons-pencil-square"
                      class="cursor-pointer"
                    />
                  </NuxtLink>
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
    :total="admins?.meta?.total"
    :per-page="admins?.meta?.per_page"
    class="flex justify-center"
  />
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
import { useTimeoutFn } from "@vueuse/core";

const router = useRouter();
const route = useRoute();

const page = ref(1);
const search = ref("");

const showModal = (index) => {
  const modalId = `my_modal_${index}`;
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.showModal();
  }
};

const {
  data: admins,
  error,
  refresh,
} = await useAsyncData("admins", () =>
  $fetch(`/admins?page=${page.value}`, {
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
  router.replace(`/admin/admin-list?page=${page.value}`);
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

useHead({
  title: "Admin List",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
