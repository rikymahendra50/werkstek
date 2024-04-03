<template>
  <main class="flex-grow overflow-y-auto">
    <div
      class="mx-auto px-2 sm:px-6 lg:px-8 max-w-sm md:max-w-3xl lg:max-w-[720px] xl:max-w-5xl py-8 space-y-8"
    >
      <div class="flex justify-between items-center">
        <div>
          <div class="text-lg md:text-2xl font-bold">Admin List</div>
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
                <th class="font-medium">Is Active</th>
                <th class="font-medium"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="odd:bg-gray-100 even:hover:bg-gray-100 transition-colors duration-300"
                v-for="(item, index) in admins?.data"
                :key="item.id"
              >
                <td class="text-gray-500 text-[12px] font-normal !py-2">
                  {{ item.first_name }}
                </td>
                <td class="text-gray-500 text-[12px] font-normal !py-2">
                  {{ item.last_name }}
                </td>
                <td class="text-[12px]">{{ item.email }}</td>
                <td
                  class="text-[12px]"
                  :class="{
                    'text-green-500': item.is_active === 1,
                    'text-red-500': item.is_active !== 1,
                  }"
                >
                  {{ item.is_active === 1 ? "Active" : "Nonaktif" }}
                </td>
                <td class="flex justify-center items-center gap-4 h-full">
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
