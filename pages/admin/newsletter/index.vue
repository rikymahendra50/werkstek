<template>
  <main class="flex-grow overflow-y-auto">
    <div
      class="mx-auto px-2 sm:px-6 lg:px-8 max-w-sm md:max-w-3xl lg:max-w-[720px] xl:max-w-7xl py-8 space-y-8"
    >
      <div class="flex justify-between items-center">
        <div>
          <div class="text-xl md:text-2xl font-bold">Newsletter Subscribe</div>
        </div>
      </div>
      <div class="space-y-4">
        <!-- <div class="max-w-sm">
            <Search v-model="search" placeholder="search" />
          </div> -->
        <div class="overflow-x-auto !py-2 border rounded-t-lg">
          <table class="table table-xs md:table-md w-full rounded-t-xl">
            <thead class="h-12">
              <tr>
                <th>No.</th>
                <th class="font-medum">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="odd:bg-gray-100 even:hover:bg-gray-100 transition-colors duration-300"
                v-for="(item, index) in newsLetter?.data"
              >
                <td class="text-[12px] md:text-sm">{{ index + 1 }}</td>
                <td class="font-medum text-[12px] md:text-sm">
                  {{ item.email }}
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
    :total="newsLetter?.meta?.total"
    :per-page="newsLetter?.meta?.per_page"
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
const {
  data: newsLetter,
  error,
  refresh,
} = await useAsyncData("newsletter-subscriber", () =>
  $fetch(`/admins/newsletter-subscriber?page=${page.value}`, {
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

onMounted(() => {
  stop();
  if (route.query.page) {
    page.value = route.query.page ?? 1;
  }
});

function replaceWindow() {
  router.replace(`/admin/newsletter?page=${page.value}`);
  refresh();
}

useHead({
  title: "News Letter Subscribe",
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
